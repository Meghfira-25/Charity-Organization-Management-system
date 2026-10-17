
import {
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  CheckCircle2
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader/PageHeader.jsx";
import "./SuccessStories.css";

const imageModules = import.meta.glob(
  "../../public/IMG/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const getImage = (...names) => {
  const match = Object.entries(imageModules).find(([path]) => {
    const name = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .toLowerCase();

    return names.includes(name);
  });

  return match ? match[1] : null;
};

const familyImage = getImage(
  "family-support",
  "family",
  "fams"
);

const mothersImage = getImage(
  "mothers-support",
  "mothers-job",
  "fams"
);

const educationImage = getImage(
  "education-support",
  "education",
  "exers"
);

const mosqueCleaningImage = getImage(
  "mosque-cleaning",
  "mosque"
);

const stories = [
  {
    id: "family-support",
    number: "01",
    title: "Supporting More Than 5,000 Families",
    category: "FAMILY & COMMUNITY ASSISTANCE",
    image: familyImage,
    icon: HeartHandshake,
    imageLabel: "Family Assistance",
    metric: "5,000+",
    metricLabel: "FAMILIES SUPPORTED",
    introduction:
      "Compassionate assistance to vulnerable families has remained one of the most important parts of Ishraq Charity Organization's mission.",
    paragraphs: [
      "Over the past two years, Ishraq Charity Organization has provided different forms of charitable assistance to more than 5,000 families experiencing social and economic difficulties. Recognizing that every household faces its own challenges, the organization has worked to respond to a variety of needs and circumstances through its community-focused charitable activities.",
      "These efforts reflect Ishraq's commitment to helping vulnerable families overcome hardship while promoting dignity, compassion, and solidarity. By extending support to thousands of households, Ishraq continues to demonstrate the importance of collective responsibility and the positive difference that organized charitable work can make in people's lives."
    ]
  },
  {
    id: "mothers-empowerment",
    number: "02",
    title: "Empowering More Than 125 Mothers",
    category: "WOMEN'S ECONOMIC EMPOWERMENT",
    image: mothersImage,
    icon: BriefcaseBusiness,
    imageLabel: "Mothers' Empowerment",
    metric: "125+",
    metricLabel: "MOTHERS SUPPORTED",
    introduction:
      "Creating opportunities for mothers to achieve greater economic independence is an important contribution to family stability and community development.",
    paragraphs: [
      "During the past two years, Ishraq Charity Organization has helped create employment and income-generating opportunities for more than 125 mothers. These initiatives recognize the essential role mothers play in the wellbeing of their families and the importance of enabling women to participate in economic activities that can improve their financial circumstances.",
      "By helping mothers access opportunities to earn an income, Ishraq aims to encourage self-reliance, reduce financial dependence, and strengthen household stability. These efforts reflect the organization's belief that charitable assistance should not only address immediate challenges but also contribute to opportunities for long-term independence."
    ]
  },
  {
    id: "education-support",
    number: "03",
    title: "Supporting the Education of Over 6,000 Students",
    category: "EDUCATION & STUDENT DEVELOPMENT",
    image: educationImage,
    icon: GraduationCap,
    imageLabel: "Education Support",
    metric: "6,000+",
    metricLabel: "STUDENTS SUPPORTED",
    introduction:
      "Education is a foundation for personal growth, greater opportunity, and the long-term development of communities.",
    paragraphs: [
      "Over the past two years, Ishraq Charity Organization has supported more than 6,000 students through the distribution of essential educational materials. For families experiencing economic hardship, obtaining the resources needed for school can create a significant financial burden. By providing learning materials, Ishraq has helped reduce some of these challenges and support students in continuing their education.",
      "This achievement reflects the organization's commitment to encouraging learning and helping young people pursue their educational goals. Ishraq believes that investing in students is also an investment in the future of families and communities, as education creates opportunities for individuals to develop their knowledge, abilities, and potential."
    ]
  },
  {
    id: "mosque-cleaning",
    number: "04",
    title: "Caring for Community Mosques",
    category: "COMMUNITY SERVICE & CLEANLINESS",
    image: mosqueCleaningImage,
    icon: Sparkles,
    imageLabel: "Mosque Cleaning",
    metric: "4",
    metricLabel: "MOSQUES SERVED",
    introduction:
      "Community service includes caring for shared places that hold importance in people's spiritual and social lives.",
    paragraphs: [
      "As part of its charitable and community service activities, Ishraq Charity Organization has contributed to cleaning and improving approximately four mosques over the past two years. These efforts focused on maintaining clean, welcoming spaces used by community members for worship and gathering.",
      "Through these activities, Ishraq has demonstrated its commitment to community cooperation, volunteer participation, and collective responsibility. Supporting the cleanliness and upkeep of mosques represents one way the organization contributes to the wellbeing of the wider community beyond direct assistance to individuals and families."
    ]
  },
  {
    id: "mosque-renovation",
    number: "05",
    title: "Contributing to Mosque Repairs and Rebuilding",
    category: "COMMUNITY FACILITIES & DEVELOPMENT",
    introduction:
      "Improving community facilities is another way Ishraq contributes to creating better shared environments.",
    paragraphs: [
      "In addition to cleaning activities, Ishraq Charity Organization has contributed to partial rebuilding and improvement work at community mosques. These efforts formed part of the organization's broader support for approximately four mosques during the past two years. The work focused on improving parts of the facilities that required attention and helping maintain spaces used for worship and community activities.",
      "By participating in these improvements, Ishraq has demonstrated the value of cooperation and practical community service. The initiative reflects the organization's commitment to caring for shared facilities and encouraging members and supporters to take an active role in improving their communities."
    ]
  },
  {
    id: "employment-opportunities",
    number: "06",
    title: "Expanding Employment Opportunities",
    category: "EMPLOYMENT & COMMUNITY EMPOWERMENT",
    introduction:
      "Meaningful employment opportunities can help individuals strengthen their independence and contribute to the wellbeing of their families.",
    paragraphs: [
      "Alongside its other charitable achievements, Ishraq Charity Organization has contributed to creating employment opportunities through initiatives connected with its board and organizational network. These efforts represent another aspect of Ishraq's commitment to encouraging economic participation and supporting opportunities for individuals to engage in meaningful work.",
      "By recognizing the importance of employment and economic self-reliance, Ishraq seeks to contribute to stronger livelihoods and more resilient communities. These initiatives complement the organization's charitable assistance and reflect its wider interest in creating opportunities that can support lasting positive change."
    ]
  }
];

export default function SuccessStories() {
  const imageStories = stories.slice(0, 4);
  const textStories = stories.slice(4);

  return (
    <main className="editorial-page success-stories-page">
      <section className="page-hero shell">
        <PageHeader
          eyebrow="OUR SUCCESS STORIES"
          title="Two Years of Service. A Lasting Impact."
          description="Discover the achievements of Ishraq Charity Organization in supporting families, empowering mothers, advancing education, improving community facilities, and creating economic opportunities."
        />
      </section>

      <section className="section shell success-intro">
        <div className="success-intro-icon">
          <HeartHandshake size={40} strokeWidth={1.5} />
        </div>

        <div>
          <span className="eyebrow">
            OUR JOURNEY OF IMPACT
          </span>

          <p>
            Over the past two years, Ishraq Charity
            Organization has continued to turn
            compassion into meaningful service.
            Through the efforts of its members,
            volunteers, donors, and supporters,
            the organization has contributed to
            family assistance, education,
            economic empowerment, and
            community development.
          </p>
        </div>
      </section>

      <section className="success-achievements">
        <div className="shell success-achievements-heading">
          <div>
            <span className="eyebrow">
              OUR ACHIEVEMENTS
            </span>

            <h2>
              Real Contributions.
              Meaningful Community Change.
            </h2>
          </div>

          <p>
            Explore six areas of Ishraq's work
            and the achievements that reflect
            our commitment to serving
            vulnerable individuals, families,
            and communities.
          </p>
        </div>

        <div className="shell success-stories-list">
          {imageStories.map((story, index) => {
            const Icon = story.icon;

            return (
              <article
                className={`success-story ${
                  index % 2 !== 0
                    ? "success-story-reverse"
                    : ""
                }`}
                key={story.id}
              >
                <div className="success-story-content">
                  <div className="success-story-top">
                    <span className="success-story-number">
                      {story.number} / 06
                    </span>

                    <span className="success-story-period">
                      PAST TWO YEARS
                    </span>
                  </div>

                  <span className="eyebrow">
                    {story.category}
                  </span>

                  <h2>{story.title}</h2>

                  <div className="success-story-accent" />

                  <p className="success-story-introduction">
                    {story.introduction}
                  </p>

                  <div className="success-story-paragraphs">
                    {story.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {story.metric && (
                    <div className="success-story-metric">
                      <strong>{story.metric}</strong>
                      <span>{story.metricLabel}</span>
                    </div>
                  )}

                  <div className="success-story-footer">
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.7}
                    />
                    <span>
                      ISHRAQ CHARITY ORGANIZATION
                    </span>
                  </div>
                </div>

                <div className="success-story-media">
                  {story.image ? (
                    <img
                      src={story.image}
                      alt={story.title}
                      className="success-story-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="success-story-image-fallback">
                      <Icon
                        size={62}
                        strokeWidth={1.3}
                      />
                      <span>
                        ISHRAQ CHARITY ORGANIZATION
                      </span>
                      <h3>{story.imageLabel}</h3>
                    </div>
                  )}

                  <div className="success-story-image-overlay" />

                  <div className="success-story-image-caption">
                    <span>COMMUNITY IMPACT</span>
                    <strong>{story.imageLabel}</strong>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="success-text-grid">
            {textStories.map((story) => (
              <article
                className="success-text-card"
                key={story.id}
              >
                <div className="success-story-top">
                  <span className="success-story-number">
                    {story.number} / 06
                  </span>

                  <span className="success-story-period">
                    PAST TWO YEARS
                  </span>
                </div>

                <span className="eyebrow">
                  {story.category}
                </span>

                <h2>{story.title}</h2>

                <div className="success-story-accent" />

                <p className="success-story-introduction">
                  {story.introduction}
                </p>

                <div className="success-story-paragraphs">
                  {story.paragraphs.map(
                    (paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>
                        {paragraph}
                      </p>
                    )
                  )}
                </div>

                <div className="success-story-footer">
                  <span>
                    ISHRAQ CHARITY ORGANIZATION
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="success-closing">
        <div className="shell success-closing-inner">
          <div>
            <span className="eyebrow">
              BE PART OF OUR JOURNEY
            </span>

            <h2>
              Together, We Can Create
              More Stories of Hope.
            </h2>
          </div>

          <div className="success-closing-content">
            <p>
              Every contribution helps make
              continued charitable work possible.
              Join Ishraq in supporting vulnerable
              families, expanding educational
              opportunities, strengthening
              livelihoods, and serving communities
              with compassion and responsibility.
            </p>

            <Link
              to="/donate"
              className="btn btn-gold"
            >
              Make a Donation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
