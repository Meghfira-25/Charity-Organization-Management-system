import {
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader/PageHeader.jsx";
import { publicImages } from "../../../config/publicImages.js";
import "./About.css";

const principles = [
  [
    "01",
    "Dignity first",
    "We treat every individual with respect, compassion, and fairness, ensuring that support is provided without discrimination or loss of personal dignity.",
  ],
  [
    "02",
    "Accountability",
    "We take responsibility for how resources, donations, and assistance are managed, promoting transparency and trust in every activity.",
  ],
  [
    "03",
    "Practical impact",
    "We focus on meaningful support that responds to real needs and creates visible improvements in the lives of individuals, families, and communities.",
  ],
];

export default function About() {
  return (
    <main className="editorial-page">
      <section className="page-hero shell">
        <PageHeader
          eyebrow="ABOUT ISHRAQ"
          title="Hope with structure. Service with accountability."
          description="Ishraq Charity Organization coordinates community support, beneficiary assistance and charitable resources through one focused mission."
        />
      </section>

      <section className="section shell about-manifesto">
        <div className="about-manifesto-mark">
          <HeartHandshake size={42} />
        </div>

        <p className="about-manifesto-copy">
          We believe charity is strongest when
          compassion is matched with{" "}
          <span>
            clarity, responsibility and long-term care.
          </span>
        </p>
      </section>

      <section className="about-photo-band shell">
        <img
          src={publicImages.aboutCommunity}
          alt="Community members joining hands in unity"
          loading="lazy"
        />

        <div>
          <span className="eyebrow">
            COMMUNITY AT THE CENTER
          </span>
        </div>
      </section>

      <section className="editorial-band">
        <div className="shell editorial-split">
          <div>
            <span className="eyebrow">
              WHO WE ARE
            </span>

            <h2>
              A community organization built around
              unity, care and responsible support.
            </h2>
          </div>

          <div className="editorial-prose">
            <p>
              The image above reflects what Ishraq
              stands for: people coming together around
              a shared purpose. Meaningful change becomes
              possible when communities, donors, staff
              and volunteers work together to support
              individuals and families in need.
            </p>

            <p>
              Ishraq brings together charitable
              programs, donations, beneficiary
              assistance and community activities in a
              coordinated way. Our goal is not only to
              provide help, but to make that support
              organized, responsible and easier to
              follow, improve and sustain.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell purpose-lines">
        <div className="purpose-line">
          <span className="eyebrow">
            OUR MISSION
          </span>

          <h2>
            To support vulnerable and disadvantaged
            individuals and families through food,
            education, healthcare, economic and social
            assistance, enabling them to achieve better
            living conditions and greater self-reliance.
          </h2>
        </div>

        <div className="purpose-line">
          <span className="eyebrow">
            OUR VISION
          </span>

          <h2>
            To build a just, compassionate, equal and
            cooperative society where basic needs are
            met and everyone has the opportunity to live
            a better and dignified life.
          </h2>
        </div>
      </section>

      <section className="editorial-band editorial-band-dark">
        <div className="shell">
          <div className="section-heading editorial-heading">
            <span className="eyebrow">
              HOW WE WORK
            </span>

            <h2>
              Compassion, organized into a clear
              process.
            </h2>
          </div>

          <div className="principle-list">
            {principles.map(
              ([number, title, text]) => (
                <div
                  className="principle-row"
                  key={number}
                >
                  <span className="principle-number">
                    {number}
                  </span>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell">
          <div>
            <span className="eyebrow">
              BE PART OF THE MISSION
            </span>

            <h2>
              There is a place for your support.
            </h2>
          </div>

          <div className="cta-actions">
            <Link
              to="/programs"
              className="btn btn-ghost"
            >
              Explore Programs
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/donate"
              className="btn btn-gold"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}