
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Newspaper,
  ImageIcon
} from "lucide-react";
import { api, qs } from "../../../api/client.js";
import PageHeader from "../../../components/PageHeader/PageHeader.jsx";
import {
  EmptyState,
  LoadingState
} from "../../../components/DataState/DataState.jsx";
import "./PublicContentPage.css";

const imageFiles = import.meta.glob(
  "../../public/IMG/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const getImage = (...names) => {
  const match = Object.entries(imageFiles).find(([path]) => {
    const filename = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .toLowerCase();

    return names.includes(filename);
  });

  return match ? match[1] : null;
};

const backToSchoolImage = getImage(
  "back-to-school",
  "school-donation",
  "back-to-school"
);

const  beneficiariesimage= getImage(
  "beneficiariesimage",
  "registration",
  "beneficiariesimage"
);

const evaluationImage = getImage(
  "evaluationImage",
  "annual-meeting",
  "evaluation"
);

const fallback = {
  Program: [
    {
      id: "p1",
      title: "Education Support",
      short_description:
        "Educational materials, learning assistance, and opportunities for vulnerable students."
    },
    {
      id: "p2",
      title: "Food Assistance",
      short_description:
        "Providing food and essential household resources to families experiencing financial hardship."
    },
    {
      id: "p3",
      title: "Medical Support",
      short_description:
        "Supporting vulnerable individuals and families with essential healthcare-related needs."
    }
  ],

  News: [
    {
      id: "news-back-to-school",
      content_type: "News",
      category: "EDUCATION & COMMUNITY SUPPORT",
      title: "Back-to-School Educational Materials Donation",
      short_description:
        "Ishraq Charity Organization recently carried out a back-to-school donation initiative to support students with essential educational materials.",
      description:
        "As part of its commitment to improving educational opportunities, Ishraq Charity Organization organized a back-to-school donation activity aimed at helping students prepare for their studies. The initiative focused on providing educational materials and reducing some of the financial challenges faced by families during the school season. Through the contributions of members, volunteers, and supporters, this activity reflects the organization's dedication to making education more accessible and encouraging young people to continue their learning.",
      image: backToSchoolImage
    },
    {
      id: "news-beneficiary-registration",
      content_type: "News",
      category: "BENEFICIARY REGISTRATION",
      title: "Beneficiary Registration and Community Support",
      short_description:
        "Ishraq continued its beneficiary registration activities to better understand the needs of vulnerable individuals and families.",
      description:
        "Ishraq Charity Organization carried out beneficiary registration activities as part of its efforts to strengthen the delivery of charitable assistance. The initiative focuses on identifying individuals and families who may require support and gathering information about their circumstances and needs. By improving beneficiary information and understanding different community challenges, Ishraq aims to plan assistance more responsibly, prioritize available resources, and ensure that charitable activities respond to genuine needs.",
      image: beneficiariesimage,
    },
    {
      id: "news-annual-review",
      content_type: "News",
      category: "ORGANIZATIONAL DEVELOPMENT",
      title: "Annual Meeting and Evaluation of Previous Activities",
      short_description:
        "Ishraq members gathered to review the previous year's work, evaluate progress, and discuss priorities for future charitable initiatives.",
      description:
        "Ishraq Charity Organization held a meeting dedicated to reviewing and evaluating the activities carried out during the previous year. The discussion provided an opportunity to reflect on organizational achievements, consider challenges, and identify areas that could be improved. Through collective discussion and evaluation, members considered ways to strengthen cooperation, improve the implementation of charitable programs, and plan future activities more effectively. The meeting reflects Ishraq's commitment to continuous improvement, responsible administration, and meaningful community service.",
      image: evaluationImage
    }
  ],

  Event: [],

  Success_Story: [
    {
      id: "s1",
      title: "Supporting Families and Communities",
      short_description:
        "Ishraq has supported more than 5,000 families through different forms of charitable assistance over the past two years."
    },
    {
      id: "s2",
      title: "Advancing Education",
      short_description:
        "Educational materials have been provided to more than 6,000 students over the past two years."
    }
  ]
};

function formatDate(value) {
  if (!value) return null;

  const raw = String(value).slice(0, 10);
  const date = new Date(`${raw}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return raw;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function contentImage(item) {
  return (
    item.image_url ||
    item.cover_image ||
    item.image ||
    null
  );
}

function ContentImage({
  item,
  className = "",
  alt
}) {
  const image = contentImage(item);

  if (image) {
    return (
      <img
        src={image}
        alt={alt || item.title || "Ishraq activity"}
        className={className}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`events-image-placeholder ${className}`}
      role="img"
      aria-label={alt || item.title || "Ishraq activity"}
    >
      <ImageIcon size={38} strokeWidth={1.4} />
      <span>ISHRAQ CHARITY ORGANIZATION</span>
    </div>
  );
}

export default function PublicContentPage({
  type,
  title,
  eyebrow,
  description,
  combineEvents = false
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setItems([]);

      try {
        const data = await api(
          `/content/public${qs({ type })}`
        );

        let result = Array.isArray(data) ? data : [];

        if (combineEvents) {
          try {
            const events = await api(
              `/content/public${qs({
                type: "Event"
              })}`
            );

            if (Array.isArray(events)) {
              result = [...result, ...events];
            }
          } catch {
            result = [...result];
          }

          result.sort((a, b) => {
            const dateA = String(
              a.event_date || a.created_at || ""
            );

            const dateB = String(
              b.event_date || b.created_at || ""
            );

            return dateB.localeCompare(dateA);
          });
        }

        if (alive) {
          setItems(result);
        }
      } catch {
        if (alive) {
          setItems([]);
        }
      } finally {
        if (alive) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      alive = false;
    };
  }, [type, combineEvents]);

  const display = useMemo(() => {
    if (type === "News") {
      const news = fallback.News;

      const existingTitles = new Set(
        news.map((item) =>
          item.title.toLowerCase()
        )
      );

      const additional = items.filter((item) => {
        const itemTitle = String(
          item.title || ""
        ).toLowerCase();

        return !existingTitles.has(itemTitle);
      });

      return [...news, ...additional];
    }

    if (items.length > 0) {
      return items;
    }

    return [
      ...(fallback[type] || []),
      ...(combineEvents ? fallback.Event : [])
    ];
  }, [items, type, combineEvents]);

  if (combineEvents) {
    const featured = display[0];
    const updates = display.slice(1);

    return (
      <main className="events-page">
        <section className="page-hero shell events-page-hero">
          <PageHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </section>

        <section className="section shell events-section">
          {loading && items.length === 0 && (
            <LoadingState />
          )}

          {!loading && display.length === 0 ? (
            <EmptyState
              text="Published news and events will appear here."
            />
          ) : (
            <>
              <div className="events-section-heading">
                <div>
                  <span className="eyebrow">
                    FEATURED COMMUNITY UPDATE
                  </span>

                  <h2>
                    Latest from Ishraq
                  </h2>
                </div>

                <p>
                  Discover news, charitable activities,
                  organizational announcements,
                  and updates reflecting Ishraq's
                  commitment to community service.
                </p>
              </div>

              {featured && (
                <article className="events-featured">
                  <div className="events-featured-image-wrap">
                    <ContentImage
                      item={featured}
                      alt={featured.title}
                    />

                    <span className="events-featured-badge">
                      <Newspaper size={14} />

                      {String(
                        featured.content_type || type
                      ).replaceAll("_", " ")}
                    </span>
                  </div>

                  <div className="events-featured-copy">
                    {featured.category && (
                      <span className="eyebrow">
                        {featured.category}
                      </span>
                    )}

                    {(featured.event_date ||
                      featured.location) && (
                      <div className="events-date-line">
                        {featured.event_date && (
                          <span>
                            <CalendarDays size={16} />
                            {formatDate(
                              featured.event_date
                            )}
                          </span>
                        )}

                        {featured.location && (
                          <span>
                            <MapPin size={16} />
                            {featured.location}
                          </span>
                        )}
                      </div>
                    )}

                    <h2>{featured.title}</h2>

                    <p>
                      {featured.description ||
                        featured.short_description}
                    </p>

                    <span className="events-read-more">
                      ISHRAQ COMMUNITY NEWS
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </article>
              )}

              {updates.length > 0 && (
                <div className="events-updates-wrap">
                  <div className="events-updates-title">
                    <span className="eyebrow">
                      MORE NEWS & UPDATES
                    </span>

                    <h2>
                      Community Updates
                    </h2>
                  </div>

                  <div className="events-list">
                    {updates.map((item, index) => (
                      <article
                        className="events-list-item"
                        key={`${item.content_type || "content"}-${item.id || index}`}
                      >
                        <span className="events-list-number">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <ContentImage
                          item={item}
                          className="events-list-thumbnail"
                          alt={item.title}
                        />

                        <div className="events-list-copy">
                          {item.category && (
                            <span className="eyebrow">
                              {item.category}
                            </span>
                          )}

                          {(item.event_date ||
                            item.location) && (
                              <div className="events-date-line">
                                {item.event_date && (
                                  <span>
                                    <CalendarDays size={14} />
                                    {formatDate(
                                      item.event_date
                                    )}
                                  </span>
                                )}

                                {item.location && (
                                  <span>
                                    <MapPin size={14} />
                                    {item.location}
                                  </span>
                                )}
                              </div>
                            )}

                          <h3>{item.title}</h3>

                          <p>
                            {item.description ||
                              item.short_description ||
                              "Community update from Ishraq Charity Organization."}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </main>
    );
  }

  return (
    <main className="editorial-page">
      <section className="page-hero shell">
        <PageHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </section>

      <section className="section shell">
        {loading && items.length === 0 && (
          <LoadingState />
        )}

        {!loading && display.length === 0 ? (
          <EmptyState
            text="Published content will appear here."
          />
        ) : (
          <div className="content-grid">
            {display.map((item, index) => (
              <article
                className="content-card"
                key={item.id || index}
              >
                <div className="public-content-card-image">
                  <ContentImage
                    item={item}
                    alt={item.title}
                  />
                </div>

                <div className="content-body">
                  <span className="eyebrow">
                    {String(
                      item.content_type || type
                    ).replaceAll("_", " ")}
                  </span>

                  <h3>{item.title}</h3>

                  <p>
                    {item.short_description ||
                      item.description ||
                      "Learn more about Ishraq's community activities."}
                  </p>

                  {(item.event_date ||
                    item.location) && (
                      <div className="meta-row">
                        {item.event_date && (
                          <span>
                            <CalendarDays size={15} />
                            {formatDate(item.event_date)}
                          </span>
                        )}

                        {item.location && (
                          <span>
                            <MapPin size={15} />
                            {item.location}
                          </span>
                        )}
                      </div>
                    )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
