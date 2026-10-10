
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Target,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "../../../api/client.js";
import PageHeader from "../../../components/PageHeader/PageHeader.jsx";
import "./AnnualPlans.css";
import backToSchool from "../../public/IMG/back-to-school.jpg"

export const fallback = [
  {
    id: "exercise-books",
    title: "Bck-to-school support 2026",
    year: 2026,
    short_description:
      "Providing exercise books and essential learning materials to sponsored students during the academic year.",
    description:
      "Through our Back-to-School Support initiative, we provide school bags, exercise books, pens, uniforms, and other essential supplies to students from low-income families. This helps reduce school-related expenses, prevents shortages of learning materials, and enables students to attend classes prepared and participate fully in their education.",
    status: "Ongoing",
    start_date: "2026-08-01",
    end_date: "2026-09-30",
    target_value: 2000,
    current_value: 1450,
    target_unit: "exercise books",
    beneficiaries: 430,
    cover_image: backToSchool,
    images: []
  },
  {
    id: "mothers-workshop",
    title: "Mother's Job Creation Initiative",
    year: 2026,
    short_description:
      "Empowering mothers through practical training and sustainable income-generation opportunities.",
    description:
      "Through our Mothers Job Creation Initiative, we support mothers from low-income families by providing practical skills training, essential working materials, and startup capital to help them establish small businesses and generate sustainable income. The initiative aims to reduce financial dependence, strengthen household income, and create long-term economic opportunities for mothers and their families. We measure our impact by tracking the number of mothers supported, businesses established, startup funds distributed, and income-generating activities successfully launched.",
    status: "Upcoming",
    start_date: "2027-02-01",
    end_date: "2027-03-15",
    target_value: 60,
    current_value: 0,
    target_unit: "mothers",
    beneficiaries: 60,
    cover_image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    images: []
  },
  {
    id: "family-support",
    title: "Seasonal Family Support",
    year: 2026,
    short_description:
      "Providing essential food, clothing, and household assistance to vulnerable families.",
    description:
      "Coordinating essential assistance for families experiencing economic hardship and seasonal challenges.",
    status: "Planned",
    start_date: null,
    end_date: null,
    target_value: 250,
    current_value: 0,
    target_unit: "families",
    beneficiaries: 250,
    cover_image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    images: []
  },
  {
    id: "healthcare-assistance",
    title: "Healthcare Assistance Program",
    year: 2026,
    short_description:
      "Improving access to essential medical assistance for vulnerable individuals and families.",
    description:
      "Supporting individuals facing financial barriers to healthcare through essential medical assistance and community health initiatives.",
    status: "Planned",
    start_date: null,
    end_date: null,
    target_value: 150,
    current_value: 0,
    target_unit: "individuals",
    beneficiaries: 150,
    cover_image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    images: []
  },
  {
    id: "orphan-support",
    title: "Orphan and Child Support Initiative",
    year: 2026,
    short_description:
      "Supporting orphaned and vulnerable children through education and essential assistance.",
    description:
      "Providing educational materials, essential necessities, and development opportunities for orphaned and vulnerable children.",
    status: "Planned",
    start_date: null,
    end_date: null,
    target_value: 200,
    current_value: 0,
    target_unit: "children",
    beneficiaries: 200,
    cover_image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    images: []
  },
  {
    id: "community-development",
    title: "Community Development Initiative",
    year: 2026,
    short_description:
      "Strengthening underserved communities through volunteering and sustainable development activities.",
    description:
      "Encouraging community participation, responsible resource distribution, and practical initiatives that support long-term development.",
    status: "Planned",
    start_date: null,
    end_date: null,
    target_value: 300,
    current_value: 0,
    target_unit: "individuals",
    beneficiaries: 300,
    cover_image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    images: []
  }
];

const statusIcon = {
  Planned: Target,
  Upcoming: CalendarDays,
  Ongoing: Clock3,
  Completed: CheckCircle2
};

function progressOf(plan) {
  const target = Number(plan.target_value) || 0;
  const current = Number(plan.current_value) || 0;

  return target > 0
    ? Math.max(0, Math.min(100, Math.round(current / target * 100)))
    : 0;
}

export default function AnnualPlans() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    api("/annual-plans/public")
      .then((data) => {
        if (!alive) return;
        setItems(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (alive) setItems([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const display = useMemo(
    () => items.length > 0 ? items : fallback,
    [items]
  );

  const year = display[0]?.year || new Date().getFullYear();

  return (
    <main className="annual-plans-page">
      <section className="page-hero shell">
        <PageHeader
          eyebrow={`${year} ANNUAL PLANS`}
          title="This year's commitments, documented with clear progress."
          description="Explore Ishraq's annual initiatives, implementation periods, beneficiaries, targets, and progress toward meaningful community impact."
        />
      </section>

      <section className="section shell annual-plan-list-section">
        <div className="annual-plan-intro">
          <span className="annual-plan-document-label">
            ANNUAL IMPLEMENTATION RECORD
          </span>

          <p>
            Each annual plan represents a commitment to
            addressing community needs through carefully
            planned initiatives, responsible resource
            management, and measurable progress.
          </p>
        </div>

        <div className="annual-plan-grid">
          {display.map((plan, index) => {
            const StatusIcon =
              statusIcon[plan.status] || Target;

            const progress = progressOf(plan);

            return (
              <article
                className="annual-plan-card"
                key={plan.id || plan.title}
              >
                <div className="annual-plan-image-wrap">
                  {plan.cover_image && (
                    <img
                      src={plan.cover_image}
                      alt={plan.title}
                      className="annual-plan-image"
                      loading="lazy"
                    />
                  )}

                  <span
                    className={`annual-plan-status status-${String(
                      plan.status || "Planned"
                    ).toLowerCase()}`}
                  >
                    <StatusIcon size={14} />
                    {plan.status || "Planned"}
                  </span>
                </div>

                <div className="annual-plan-card-body">
                  <span className="annual-plan-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{plan.title}</h2>

                  <p>
                    {plan.short_description || plan.description}
                  </p>

                  <div className="annual-plan-meta">
                    {(plan.start_date || plan.end_date) && (
                      <span>
                        <CalendarDays size={15} />
                        {plan.start_date
                          ? String(plan.start_date).slice(0, 10)
                          : "TBA"}
                        {plan.end_date
                          ? ` – ${String(plan.end_date).slice(0, 10)}`
                          : ""}
                      </span>
                    )}

                    {Number(plan.beneficiaries) > 0 && (
                      <span>
                        <Users size={15} />
                        {Number(plan.beneficiaries).toLocaleString()}{" "}
                        beneficiaries
                      </span>
                    )}
                  </div>

                  {Number(plan.target_value) > 0 && (
                    <div className="annual-plan-progress-block">
                      <div className="annual-plan-progress-head">
                        <span>Progress</span>
                        <strong>{progress}%</strong>
                      </div>

                      <div className="annual-plan-progress-track">
                        <span
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <small>
                        {Number(
                          plan.current_value || 0
                        ).toLocaleString()}{" "}
                        /{" "}
                        {Number(
                          plan.target_value
                        ).toLocaleString()}{" "}
                        {plan.target_unit || "target"}
                      </small>
                    </div>
                  )}

                  <Link
                    to={`/annual-plans/${plan.id}`}
                    className="annual-plan-link"
                  >
                    View plan
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {!loading && items.length === 0 && (
          <p className="annual-plan-fallback-note">
            Showing sample annual plans until published
            plans are available.
          </p>
        )}
      </section>
    </main>
  );
}
