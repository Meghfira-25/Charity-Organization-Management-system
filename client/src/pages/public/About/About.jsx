
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Award,
  Users,
  HandHeart,
  BookOpen,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader/PageHeader.jsx";
import { publicImages } from "../../../config/publicImages.js";
import "./About.css";
import cert from "../../public/IMG/photo_2_2026-10-16_00-40-02.jpg"
import certf from "../../public/IMG/photo_1_2026-10-16_00-40-02.jpg"

const principles = [
  {
    number: "01",
    title: "Dignity First",
    description:
      "We treat every individual with respect, compassion, and fairness, ensuring that charitable assistance is provided without discrimination or loss of personal dignity."
  },
  {
    number: "02",
    title: "Accountability",
    description:
      "We take responsibility for how resources, donations, and assistance are managed, promoting transparency, honesty, and trust in every organizational activity."
  },
  {
    number: "03",
    title: "Practical Impact",
    description:
      "We focus on meaningful support that responds to real community needs and creates measurable improvements in the lives of vulnerable individuals and families."
  },
  {
    number: "04",
    title: "Community Cooperation",
    description:
      "We believe meaningful change becomes possible when members, volunteers, donors, and communities work together with a shared purpose."
  }
];

const focusAreas = [
  {
    icon: HandHeart,
    title: "Charitable Assistance",
    description:
      "Supporting vulnerable families and individuals through food, essential resources, and organized charitable assistance."
  },
  {
    icon: BookOpen,
    title: "Education & Development",
    description:
      "Improving educational opportunities, supporting students, and strengthening practical skills through community initiatives."
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Encouraging members, volunteers, and supporters to participate in meaningful charitable and community development activities."
  }
];

const certificates = [
  {
    id: 1,
    title: "Certificate of Recognition 01",
    description:
      "Recognition of Ishraq's contribution and participation in community-focused initiatives.",
    image: certf
  },
  {
    id: 2,
    title: "Certificate of Recognition 02",
    description:
      "Documentation of Ishraq's engagement in charitable and community development activities.",
    image: cert
  }
];

export default function About() {
  return (
    <main className="editorial-page about-page">
      <section className="page-hero shell">
        <PageHeader
          eyebrow="ABOUT ISHRAQ"
          title="Hope with structure. Service with accountability."
          description="Discover the mission, values, official recognition, and community-driven initiatives behind Ishraq Charity Organization."
        />
      </section>

      <section className="section shell about-manifesto">
        <div className="about-manifesto-mark">
          <HeartHandshake size={42} strokeWidth={1.6} />
        </div>

        <p className="about-manifesto-copy">
          We believe charity is strongest when
          compassion is matched with{" "}
          <span>
            clarity, responsibility, cooperation,
            and long-term care.
          </span>
        </p>
      </section>

      <section className="about-photo-band shell">
        <img
          src={publicImages.aboutCommunity}
          alt="Community members coming together in unity"
          loading="lazy"
        />

        <div className="about-photo-content">
          <span className="eyebrow">
            COMMUNITY AT THE CENTER
          </span>

          <h2>
            Together, We Build Hope and Create
            Meaningful Change.
          </h2>

          <p>
            At Ishraq, we believe that strong
            communities are built through compassion,
            unity, and collective responsibility.
            By bringing together members, volunteers,
            donors, and supporters, we work to make
            charitable assistance more organized,
            accessible, and meaningful.
          </p>
        </div>
      </section>

      <section className="editorial-band about-who-section">
        <div className="shell editorial-split">
          <div className="about-who-heading">
            <span className="eyebrow">
              WHO WE ARE
            </span>

            <h2>
              A community organization built around
              unity, care, and responsible support.
            </h2>

            <div className="about-who-decoration">
              <HeartHandshake size={26} />
              <span>Serving with Purpose</span>
            </div>
          </div>

          <div className="editorial-prose">
            <p>
              Ishraq Charity Organization is a
              community-focused charitable organization
              dedicated to improving the living
              conditions of vulnerable individuals
              and families. Through collective efforts,
              compassion, and responsible action,
              we work to address the social and
              economic challenges affecting
              underserved communities.
            </p>

            <p>
              Our organization brings together members,
              volunteers, donors, and community
              supporters who share a common commitment
              to helping others. We believe charitable
              work should go beyond providing
              temporary assistance. It should create
              opportunities, encourage self-reliance,
              and strengthen the ability of
              communities to support one another.
            </p>

            <p>
              Our activities include beneficiary
              registration, educational support,
              assistance to vulnerable families,
              members' training, community
              development, and cooperation with other
              charitable organizations. Each
              initiative is guided by community needs
              and our commitment to responsible
              resource management.
            </p>

            <p>
              Through careful planning, transparent
              implementation, and continuous learning,
              Ishraq aims to build lasting
              relationships with the communities it
              serves and contribute to positive
              social change.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell about-recognition">
        <div className="about-recognition-top">
          <div className="about-recognition-heading">
            <span className="eyebrow">
              ORGANIZATIONAL RECOGNITION
            </span>

            <h2>
              Built on Trust.
              <span> Guided by Responsibility.</span>
            </h2>
          </div>

          <p>
            Our dedication to charitable service
            is supported by responsible organizational
            practices, official authorization, and
            recognition of our contributions to
            community development. These foundations
            reflect our commitment to serving with
            integrity, transparency, and purpose.
          </p>
        </div>

        <div className="about-recognition-grid">
          <article className="about-recognition-card about-authorization">
            <div className="about-recognition-card-top">
              <div className="about-recognition-icon">
                <ShieldCheck size={30} strokeWidth={1.6} />
              </div>

              <span>01</span>
            </div>

            <span className="about-recognition-category">
              LEGAL & ORGANIZATIONAL RECOGNITION
            </span>

            <h3>Official Authorization</h3>

            <p>
              Ishraq Charity Organization has received
              official permission from the relevant
              responsible authority to carry out its
              charitable activities. This authorization
              provides an important foundation for
              organizing programs, coordinating
              assistance, and serving communities
              through a recognized organizational
              structure.
            </p>

            <p>
              We recognize the importance of following
              the requirements established by the
              responsible authority and maintaining
              appropriate organizational documentation.
              Our commitment to accountability guides
              how we plan activities, manage resources,
              and deliver assistance to individuals
              and families in need.
            </p>

            <div className="about-authorization-details">
              <div>
                <CheckCircle2 size={18} />

                <span>
                  Official permission for charitable
                  activities
                </span>
              </div>

              <div>
                <CheckCircle2 size={18} />

                <span>
                  Responsible organizational
                  administration
                </span>
              </div>

              <div>
                <CheckCircle2 size={18} />

                <span>
                  Commitment to transparency
                  and accountability
                </span>
              </div>
            </div>

            <div className="about-authorization-footer">
              <ShieldCheck size={20} />

              <span>
                Authorized service. Responsible action.
                Community trust.
              </span>
            </div>
          </article>

          <article className="about-recognition-card about-certification">
            <div className="about-recognition-card-top">
              <div className="about-recognition-icon">
                <Award size={30} strokeWidth={1.6} />
              </div>

              <span>02</span>
            </div>

            <span className="about-recognition-category">
              COMMUNITY CONTRIBUTION & RECOGNITION
            </span>

            <h3>Certificates & Documentation</h3>

            <p>
              Ishraq Charity Organization believes
              that meaningful charitable work extends
              beyond providing immediate assistance.
              Our organization strives to play an
              important role in community development
              by encouraging cooperation, supporting
              vulnerable individuals, and participating
              in initiatives that promote social
              responsibility.
            </p>

            <p>
              Through our involvement in charitable
              activities, community programs, and
              collaborative initiatives, Ishraq has
              received certificates recognizing its
              participation and contributions.
              These documents represent valuable
              milestones in our journey and encourage
              us to continue improving the services
              we provide to our community.
            </p>

            <div className="about-certificates">
              <div className="about-certificates-heading">
                <span className="eyebrow">
                  OUR CERTIFICATIONS
                </span>

                <h4>
                  Recognition of Our Community Work
                </h4>

                <p>
                  Explore two certificates documenting
                  our organization's participation
                  and contributions.
                </p>
              </div>

              <div className="about-certificates-grid">
                {certificates.map((certificate) => (
                  <a
                    key={certificate.id}
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-certificate-card"
                    aria-label={`View ${certificate.title}`}
                  >
                    <div className="about-certificate-image">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="about-certificate-info">
                      <h5>{certificate.title}</h5>

                      <span>
                        View Certificate
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="about-certification-footer">
              <Award size={20} />

              <span>
                Recognizing service, commitment,
                and meaningful community engagement.
              </span>
            </div>
          </article>
        </div>

        <div className="about-recognition-note">
          <div className="about-recognition-note-icon">
            <HeartHandshake size={24} />
          </div>

          <div>
            <strong>
              Our Commitment to Community Trust
            </strong>

            <p>
              For Ishraq, recognition is not simply
              about certificates or documents.
              It represents the responsibility we
              carry toward the individuals and families
              we serve. We aim to honor that
              responsibility through compassionate
              assistance, continuous improvement,
              and transparent charitable practices.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell purpose-lines">
        <div className="purpose-line">
          <div className="purpose-label">
            <span className="eyebrow">
              OUR MISSION
            </span>

            <span className="purpose-index">
              01 / 02
            </span>
          </div>

          <h2>
            To support vulnerable and disadvantaged
            individuals and families through food,
            education, healthcare, economic, and
            social assistance, enabling them to
            achieve better living conditions
            and greater self-reliance.
          </h2>
        </div>

        <div className="purpose-line">
          <div className="purpose-label">
            <span className="eyebrow">
              OUR VISION
            </span>

            <span className="purpose-index">
              02 / 02
            </span>
          </div>

          <h2>
            To build a just, compassionate, equal,
            and cooperative society where basic
            needs are met and everyone has the
            opportunity to live a better
            and dignified life.
          </h2>
        </div>
      </section>

      <section className="editorial-band about-focus-section">
        <div className="shell">
          <div className="about-focus-heading">
            <span className="eyebrow">
              WHAT WE FOCUS ON
            </span>

            <h2>
              Responding to Real Needs.
              Creating Lasting Opportunities.
            </h2>

            <p>
              Our charitable activities address
              immediate challenges while creating
              opportunities for learning, cooperation,
              and long-term community development.
            </p>
          </div>

          <div className="about-focus-grid">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="about-focus-card"
                  key={item.title}
                >
                  <div className="about-focus-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band-dark">
        <div className="shell">
          <div className="section-heading editorial-heading">
            <span className="eyebrow">
              HOW WE WORK
            </span>

            <h2>
              Compassion, Organized into
              a Clear Process.
            </h2>

            <p className="about-principles-intro">
              Our work is guided by principles
              that help us serve individuals and
              families responsibly while maintaining
              trust, fairness, and
              community participation.
            </p>
          </div>

          <div className="principle-list">
            {principles.map((item) => (
              <div
                className="principle-row"
                key={item.number}
              >
                <span className="principle-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
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
              There Is a Place for Your Support.
            </h2>

            <p className="about-cta-description">
              Every contribution, shared idea, and
              act of kindness can help create
              meaningful change in someone's life.
              Join us in building a stronger
              and more compassionate community.
            </p>
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
              <HeartHandshake size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
