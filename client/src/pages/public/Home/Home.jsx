import { ArrowRight, Globe, GraduationCap, HandHeart, HeartHandshake, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/client.js";
import CountUp from "../../../components/CountUp/CountUp.jsx";
import heroImage from "../../public/IMG/photo_2026-10-14_11-23-13.jpg"
import "./Home.css";
const impact = [{
  icon: Users,
  value: 1000,
  label: "families supported"
}, {
  icon: GraduationCap,
  value: 500,
  label: "students sponsored"
}, {
  icon: HandHeart,
  value: 350,
  label: "members"
}, {
  icon: Globe,
  value: 50,
  label: "programs"
}];
const annualPlanFallback = [{
  id: "exercise-books",
  title: "Back-to-school support 2026",
  status: "Completed",
  short_description: "Collecting and distributing exercise books for sponsored students during the academic year.",
  target_value: 2000,
  current_value: 2000,
  target_unit: "books"
}, {
  id: "mothers-workshop",
  title: "Mother's Job Creation Initiative",
  status: "Upcoming",
  short_description: "We provide skills training and startup capital to help mothers establish small businesses and earn a sustainable income.",
  target_value: 60,
  current_value: 0,
  target_unit: "mothers"
}, {
  id: "family-support",
  title: "Seasonal Family Support",
  status: "Planned",
  short_description: "We provide food, clothing, and other essential supplies to families in need during special seasons such as Ramadan and Eid.",
  target_value: 250,
  current_value: 0,
  target_unit: "families"
}];
const programs = [["Education Support", "We help children and students continue their education by supporting them with school supplies, learning materials, uniforms, and other educational needs. Our goal is to reduce barriers to education and give students a better opportunity to learn and build their future."], ["Food & Essentials", "Ishraq provides food assistance to vulnerable families and individuals who struggle to meet their daily nutritional needs. Our support may include essential food items, family food packages, and emergency food assistance for people facing difficult circumstances."], ["Medical Assistance", "Ishraq supports individuals and families who have difficulty accessing necessary healthcare. Assistance may include support for medical checkups, medicines, treatment costs, and other basic health needs, helping vulnerable people receive the care they need."]];
export default function Home() {
  const [annualPlans, setAnnualPlans] = useState([]);
  useEffect(() => {
    let alive = true;
    api("/annual-plans/public").then(data => {
      if (alive) setAnnualPlans((data || []).slice(0, 3));
    }).catch(() => {
      if (alive) setAnnualPlans([]);
    });
    return () => {
      alive = false;
    };
  }, []);
  const annualPlanDisplay = annualPlans.length ? annualPlans : annualPlanFallback;
  return <>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="shell hero-inner">
          <div className="hero-copy">
            <span className="hero-kicker">
              ISHRAQ CHARITY ORGANIZATION
            </span>

            <h1>
              TOGETHER, WE CAN{" "}
              <em>BRING HOPE,</em>{" "}
              <em>EMPOWER LIVES,</em>{" "}
              <em>BUILD FUTURES.</em>
            </h1>

            <p>
             Ishraq Charity Organization is dedicated to supporting vulnerable communities through education, healthcare, humanitarian assistance, and sustainable development programs, while promoting compassion, dignity, and lasting positive change.
            </p>

            <div className="hero-actions">
              <Link to="/membership" className="btn btn-gold">
                Become a Member ♡
              </Link>

              <Link to="/about" className="btn btn-ghost">
                Learn More
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

         <div className="hero-image-wrap">
       <img src={heroImage} alt="Ishraq charity activities" className="hero-image" />

</div>
        </div>
      </section>

      <section className="impact-section">
        <div className="shell impact-grid">
          {impact.map(({
          icon: Icon,
          value,
          label
        }) => <div className="impact-card" key={label}>
                <Icon />

                <strong>
                  <CountUp end={value} />
                </strong>

                <p>{label}</p>
              </div>)}
        </div>
      </section>

      <section className="section shell split-section">
        <div>
          <span className="eyebrow">
            ABOUT ISHRAQ
          </span>

          <h2>
            Purposeful charity.
            <br />

            <span className="gold-text">
              Transparent impact.
            </span>
          </h2>

          <p>
           Ishraq Charity Organization is a community-focused charitable organization committed to supporting vulnerable individuals and families through organized, transparent, and sustainable assistance programs.

Our mission is to connect people in need with the right support, resources, and opportunities while promoting dignity, accountability, and positive community impact.
          </p>

          <Link to="/about" className="text-link">
            Discover our mission
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mission-panel">
          <div className="mission-icon">
            <HeartHandshake />
          </div>

          <h3>Our commitment</h3>

          <p>
           We are committed to ensuring that every act of kindness creates
  meaningful change. Through transparency, accountability, and
  compassion, we strive to deliver assistance to those who need
  it most, manage resources responsibly, and develop initiatives
  that address the real needs of our communities.
          </p>

          <div className="mini-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Programs that create{" "}
              <span className="gold-text">
                lasting change
              </span>
            </h2>
          </div>

          <div className="program-grid">
            {programs.map(([title, text], index) => <article className="program-card" key={title}>
                  <span className="program-index">
                    0{index + 1}
                  </span>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <Link to="/programs">
                    Explore program
                    <ArrowRight size={15} />
                  </Link>
                </article>)}
          </div>
        </div>
      </section>

     
<section className="section annual-plan-home-section">
  <div className="shell">
    <div className="annual-plan-home-head">
      <div>
        <span className="eyebrow">ANNUAL PLANS</span>
        <h2>
          Our commitments for{" "}
          <span className="gold-text">this year</span>
        </h2>
      </div>

      <Link to="/annual-plans" className="text-link">
        View all plans
        <ArrowRight size={16} />
      </Link>
    </div>

    <div className="annual-plan-home-grid">
      {annualPlanDisplay.slice(0, 3).map((plan) => {
        const target = Number(plan.target_value) || 0;
        const current = Number(plan.current_value) || 0;

        const progress = target > 0
          ? Math.max(0, Math.min(100, Math.round(current / target * 100)))
          : 0;

        return (
          <article
            className="annual-plan-home-card"
            key={plan.id || plan.title}
          >
            <div className="annual-plan-home-top">
              <span>{plan.status || "Planned"}</span>
              <strong>{progress}%</strong>
            </div>

            <h3>{plan.title}</h3>

            <p>
              {plan.short_description || plan.description}
            </p>

            {target > 0 && (
              <>
                <div className="annual-plan-progress-track">
                  <span style={{ width: `${progress}%` }} />
                </div>

                <small>
                  {current.toLocaleString()} /{" "}
                  {target.toLocaleString()}{" "}
                  {plan.target_unit || "target"}
                </small>
              </>
            )}

            <Link to={`/annual-plans/${plan.id}`}>
              View plan
              <ArrowRight size={14} />
            </Link>
          </article>
        );
      })}
    </div>
  </div>
</section>


      <section className="cta-band">
        <div className="shell">
          <div>
            <span className="eyebrow">
              MAKE A DIFFERENCE
            </span>

            <h2>
              Your support can change a life.
            </h2>
          </div>

          <div className="cta-actions">
            <Link to="/donate" className="btn btn-gold">
              Donate Now
            </Link>

            <Link to="/membership" className="btn btn-ghost">
              Join Ishraq
            </Link>
          </div>
        </div>
      </section>
    </>;
}
