
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Target,
  Users
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../api/client.js";
import Logo from "../../../components/Logo/Logo.jsx";
import { fallback } from "../AnnualPlans/AnnualPlans.jsx";
import "./AnnualPlanDetail.css";

function progressOf(plan) {
  const target = Number(plan?.target_value) || 0;
  const current = Number(plan?.current_value) || 0;

  return target > 0
    ? Math.max(0, Math.min(100, Math.round(current / target * 100)))
    : 0;
}

export default function AnnualPlanDetail() {
  const { id } = useParams();

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    setLoading(true);
    setError("");
    setPlan(null);

    api(`/annual-plans/public/${id}`)
      .then((data) => {
        if (!alive) return;

        const selected =
          data || fallback.find((item) => String(item.id) === String(id));

        setPlan(selected || null);

        if (!selected) {
          setError("This annual plan is not available yet.");
        }
      })
      .catch(() => {
        if (!alive) return;

        const selected = fallback.find(
          (item) => String(item.id) === String(id)
        );

        setPlan(selected || null);

        if (!selected) {
          setError("This annual plan is not available yet.");
        }
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [id]);

  const progress = useMemo(() => progressOf(plan), [plan]);

  if (loading) {
    return (
      <main className="section shell">
        <p>Loading annual plan...</p>
      </main>
    );
  }

  if (!plan || error) {
    return (
      <main className="section shell annual-plan-empty">
        <p>{error || "Annual plan not found."}</p>

        <Link to="/annual-plans" className="text-link">
          <ArrowLeft size={16} />
          Back to Annual Plans
        </Link>
      </main>
    );
  }

  const status = plan.status || "Planned";
  const images = Array.isArray(plan.images) ? plan.images : [];

  return (
    <main className="annual-plan-detail-page">
      <section className="annual-plan-detail-hero">
        <div className="shell annual-plan-detail-hero-inner">
          <div>
            <div className="annual-plan-detail-brand">
              <span>Annual Implementation Document</span>
            </div>

            <Link to="/annual-plans" className="annual-plan-back">
              <ArrowLeft size={15} />
              Annual Plans
            </Link>

            <span
              className={`annual-plan-status status-${status.toLowerCase()}`}
            >
              {status}
            </span>

            <h1>{plan.title}</h1>

            <p>
              {plan.short_description || plan.description}
            </p>
          </div>

          {plan.cover_image && (
            <img
              src={plan.cover_image}
              alt={plan.title}
              className="annual-plan-detail-cover"
            />
          )}
        </div>
      </section>

      <section className="section shell annual-plan-detail-content">
        <div className="annual-plan-detail-main">
          <span className="eyebrow">
            ABOUT THE INITIATIVE
          </span>

          <h2>Purpose and Implementation</h2>

          <p>{plan.description || plan.short_description}</p>

          {plan.result_summary && (
            <div className="annual-plan-result">
              <CheckCircle2 size={22} />
              <div>
                <strong>Result Summary</strong>
                <p>{plan.result_summary}</p>
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div className="annual-plan-gallery-section">
              <span className="eyebrow">ACTIVITY PHOTOS</span>
              <h2>Documented Progress</h2>

              <div className="annual-plan-gallery">
                {images.map((image, index) => (
                  <figure key={image.id || index}>
                    <img
                      src={image.image_url}
                      alt={image.caption || plan.title}
                      loading="lazy"
                    />

                    {image.caption && (
                      <figcaption>{image.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="annual-plan-facts">
          <div>
            <Target size={18} />
            <span>Target</span>
            <strong>
              {Number(plan.target_value || 0).toLocaleString()}{" "}
              {plan.target_unit || ""}
            </strong>
          </div>

          <div>
            <Users size={18} />
            <span>Beneficiaries</span>
            <strong>
              {Number(plan.beneficiaries || 0).toLocaleString()}
            </strong>
          </div>

          <div>
            <CalendarDays size={18} />
            <span>Duration</span>
            <strong>
              {plan.start_date
                ? String(plan.start_date).slice(0, 10)
                : "TBA"}
              {plan.end_date
                ? ` – ${String(plan.end_date).slice(0, 10)}`
                : ""}
            </strong>
          </div>

          {Number(plan.target_value) > 0 && (
            <div className="annual-plan-facts-progress">
              <span>Progress</span>
              <strong>{progress}%</strong>

              <div className="annual-plan-progress-track">
                <span style={{ width: `${progress}%` }} />
              </div>

              <small>
                {Number(plan.current_value || 0).toLocaleString()}{" "}
                / {Number(plan.target_value).toLocaleString()}{" "}
                {plan.target_unit || ""}
              </small>
            </div>
          )}
        </aside>
      </section>
    </main>
  );
}
