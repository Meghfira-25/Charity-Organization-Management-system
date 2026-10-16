import { Activity, ArrowRight, BookOpen, HeartPulse, Home, Package, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api, qs } from "../../../api/client.js";
import PageHeader from "../../../components/PageHeader/PageHeader.jsx";
import { publicImages } from "../../../config/publicImages.js";
import educationImage from "../../public/IMG/back-to-school.jpg"
import foodImage from "../../public/IMG/photo_2026-10-16_01-34-47.jpg"
import familyImage from "../../public/IMG/fammsu.jpg"
import medicalImage from "../../public/IMG/medice.jpg"
import livelhoodImage from "../../public/IMG/supp.jpg"
import emergenyImage from "../../public/IMG/emer.jpg"


import "./Programs.css";


const fallback = [
  {
    id: "p1",
    title: "Education Support",
    short_description:
      "Helping children and young people continue learning and build a better future.",

    description:
      "Ishraq's Education Support Program helps children and young people overcome financial barriers that may interrupt their learning. We provide support based on individual needs, helping students remain engaged in education and giving them better opportunities to develop their knowledge, skills and confidence.",

    image: educationImage,
    icon: BookOpen,

    focus: [
      "School supplies, textbooks and learning materials",
      "Education-related financial assistance",
      "Support for students from vulnerable families",
    ],

    who:
      "Children and young people from vulnerable or low-income families who need support to continue their education.",

    process:
      "Educational needs are identified and reviewed, and available support is provided according to the student's situation and the resources available to the organization.",
  },

  {
    id: "p2",
    title: "Food & Essential Needs",
    short_description:
      "Providing essential food and household support to families facing difficult circumstances.",

    description:
      "Ishraq provides food and essential household assistance to individuals and families who struggle to meet their daily needs. The program focuses on reducing immediate hardship by providing practical support such as staple food items, clothing and other essential necessities.",

    image: foodImage,
    icon: Package,

    focus: [
      "Food packages and staple items",
      "Clothing and basic household necessities",
      "Emergency assistance for families in urgent need",
    ],

    who:
      "Vulnerable individuals and families facing food insecurity, financial hardship or shortages of essential household items.",

    process:
      "Families in need are identified and assessed, and available food or essential resources are distributed according to priority and need.",
  },

  {
    id: "p3",
    title: "Medical Assistance",
    short_description:
      "Helping vulnerable individuals access essential medical care and health-related support.",

    description:
      "The Medical Assistance Program supports individuals and families who face difficulties accessing necessary healthcare. Ishraq works to reduce the financial burden of medical needs by providing support for treatment, medication, medical examinations and other essential health-related expenses where possible.",

    image: medicalImage,
    icon: HeartPulse,

    focus: [
      "Medical examinations and treatment support",
      "Medication and health-related expenses",
      "Assistance for vulnerable people with urgent medical needs",
    ],

    who:
      "Individuals and families who are unable to fully afford necessary healthcare or who are facing urgent medical needs.",

    process:
      "Medical needs are reviewed using available supporting information, and assistance is provided based on urgency, eligibility and available resources.",
  },

  {
    id: "p4",
    title: "Housing & Family Stability",
    short_description:
      "Supporting families facing housing difficulties and other challenges that threaten household stability.",

    description:
      "Safe and stable housing is essential for family wellbeing. Ishraq supports vulnerable households facing rent difficulties, unstable living conditions or other family emergencies that may place their security and daily life at risk.",

    image: familyImage,
    icon: Home,

    focus: [
      "Rent and housing-related assistance",
      "Support for families facing unstable living conditions",
      "Emergency help for urgent household needs",
    ],

    who:
      "Families and individuals experiencing housing instability, rent difficulties or other challenges affecting family security.",

    process:
      "Each situation is considered based on the household's circumstances, level of need and the assistance available at the time.",
  },

  {
    id: "p5",
    title: "Livelihood & Job Creation",
    short_description:
      "Helping individuals and families strengthen their independence and improve long-term financial stability.",

    description:
      "Ishraq's Livelihood and Job Creation Program focuses on helping vulnerable individuals move toward greater self-reliance. The program supports practical opportunities that can improve income generation, strengthen household resilience and reduce long-term dependence on emergency assistance.",

    image: livelhoodImage,
    icon: Activity,

    focus: [
      "Income-generating opportunities",
      "Small livelihood and job-creation support",
      "Support that encourages long-term self-reliance",
    ],

    who:
      "Individuals and families who need support to improve their income, strengthen their livelihood or create sustainable economic opportunities.",

    process:
      "Livelihood needs and opportunities are reviewed, and appropriate support is considered based on feasibility, need and available charitable resources.",
  },

  {
    id: "p6",
    title: "Emergency & Community Response",
    short_description:
      "Responding to urgent and community-wide needs with coordinated humanitarian support.",

    description:
      "Ishraq responds to urgent, seasonal and community-wide needs by organizing assistance for people affected by unexpected hardship or difficult circumstances. The program helps coordinate resources and community support so assistance can reach those who need it most during critical moments.",

    image: emergenyImage,
    icon: ShieldCheck,

    focus: [
      "Emergency and seasonal assistance",
      "Community-based support activities",
      "Distribution of essential resources during urgent situations",
    ],

    who:
      "Individuals, families and communities affected by emergencies, seasonal hardship or other urgent circumstances.",

    process:
      "Urgent needs are identified, available resources are organized, and assistance is coordinated based on priority, impact and available capacity.",
  },
];
const iconCycle = [BookOpen, Package, HeartPulse, Home, Activity, ShieldCheck];
export default function Programs() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let alive = true;
    api(`/content/public${qs({
      type: "Program"
    })}`).then(data => {
      if (alive) {
        setItems(data || []);
      }
    }).catch(() => {
      if (alive) {
        setItems([]);
      }
    });
    return () => {
      alive = false;
    };
  }, []);
  const display = useMemo(() => {
    if (!items.length) {
      return fallback;
    }
    return items.map((item, index) => {
      const fallbackItem = fallback[index % fallback.length];
      return {
        ...fallbackItem,
        ...item,
        icon: iconCycle[index % iconCycle.length],
        image: item.image || fallbackItem.image,
        focus: fallbackItem.focus,
        who: fallbackItem.who,
        process: fallbackItem.process
      };
    });
  }, [items]);
  return <main className="editorial-page">
      <section className="page-hero shell">
        <PageHeader eyebrow="OUR PROGRAMS" title="Support designed around real community needs." description="Ishraq organizes assistance across education, food, health, housing, livelihoods and community response. Each program connects public generosity with structured beneficiary, resource and distribution management." />
      </section>

  
<section className="section shell editorial-intro">
  <div>
    <span className="eyebrow">
      OUR COMMITMENT
    </span>

    <h2>
      Empowering Lives.
      Strengthening Communities.
    </h2>
  </div>

  <div>
    <p>
      At Ishraq Charity Organization, our programs
      are driven by a commitment to improving the
      lives of vulnerable individuals and families.
      We believe that everyone deserves access
      to essential resources, opportunities,
      and a dignified life.
    </p>

    <p>
      From educational assistance and healthcare
      support to family stability and economic
      empowerment, our initiatives address
      important community needs while encouraging
      long-term independence and positive change.
    </p>
  </div>
</section>

      <section className="program-detail-list">
        {display.map((item, index) => {
        const Icon = item.icon || iconCycle[index % iconCycle.length];
        return <article className={`program-detail-row ${index % 2 ? "program-detail-row-reverse" : ""}`} key={item.id || item.title}>
                <div className="shell program-detail-inner">
                  <div className="program-detail-image-wrap">
                    <img src={item.image} alt={item.title} className="program-detail-image" loading="lazy" />

                    <div className="program-detail-image-label">
                      <Icon size={18} />

                      <span>
                        {String(index + 1).padStart(2, "0")}{" "}
                        / ISHRAQ
                        PROGRAM
                      </span>
                    </div>
                  </div>

                  <div className="program-detail-copy">
                    <span className="eyebrow">
                      {item.short_description || "ORGANIZED COMMUNITY SUPPORT"}
                    </span>

                    <h2>
                      {item.title}
                    </h2>

                    <p className="program-lead">
                      {item.description || item.short_description}
                    </p>

                    <div className="program-context-lines">
                      <div>
                        <span>
                          WHO IT
                          HELPS
                        </span>

                        <p>
                          {item.who}
                        </p>
                      </div>

                      <div>
                        <span>
                          HOW SUPPORT
                          MOVES
                        </span>

                        <p>
                          {item.process}
                        </p>
                      </div>
                    </div>

                    <div className="program-focus-block">
                      <h3>
                        What this
                        program can
                        support
                      </h3>

                      <ul>
                        {(item.focus || ["Verified beneficiary needs", "Organized assistance", "Accountable distribution and follow-up"]).map(point => <li key={point}>
                              {point}
                            </li>)}
                      </ul>
                    </div>

                    <div className="program-detail-actions">
                      <Link to="/donate" className="btn btn-gold">
                        Support this
                        work
                      </Link>

                      <Link to="/contact" className="text-link">
                        Ask about the
                        program

                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>;
      })}
      </section>

      <section className="program-image-note shell">
        <span className="eyebrow">
          EDITABLE IMAGES
        </span>

        <p>
          Fallback image links are stored
          in{" "}
          <code>
            client/src/config/publicImages.js
          </code>
          . Admin Public Content image
          URLs override the fallback
          program images.
        </p>
      </section>

      <section className="cta-band">
        <div className="shell">
          <div>
            <span className="eyebrow">
              SUPPORT A PROGRAM
            </span>

            <h2>
              Help turn a community need
              into action.
            </h2>
          </div>

          <div className="cta-actions">
            <Link to="/donate" className="btn btn-gold">
              Donate Now
            </Link>

            <Link to="/contact" className="btn btn-ghost">
              Contact Ishraq

              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>;
}
