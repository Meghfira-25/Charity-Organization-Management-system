import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo/Logo.jsx";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";
import "./Login.css";

export default function Login() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      await login(email, password);
      navigate(location.state?.from || "/dashboard", { replace: true });
    } catch (loginError) {
      setError(loginError?.message || "Unable to sign in.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="login-page">
      <div className="login-toolbar">
        <Link to="/" className="login-back-link">
          <ArrowLeft size={17} />
          <span>Back to website</span>
        </Link>

        <ThemeToggle />
      </div>

      <section className="login-card">
        <div className="login-brand-panel">
          <Logo />

          <div className="login-intro">
            <span className="eyebrow">STAFF PORTAL</span>
            <h1>
              Manage impact with <em>clarity.</em>
            </h1>
            <p>
              A secure workspace for Ishraq administrators, registration officers and distribution officers.
            </p>
          </div>

          <div className="login-security-note">
            <ShieldCheck size={18} />
            <span>Protected staff access with role-based permissions.</span>
          </div>
        </div>

        <div className="login-content">
          <form className="login-form" onSubmit={submit}>
            <span className="eyebrow">WELCOME BACK</span>
            <h2>Sign in to Ishraq</h2>
            <p>Enter your staff account credentials to continue.</p>

            <label className="login-field">
              <span>Email address</span>
              <div className="login-input">
                <Mail size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </label>

            <label className="login-field">
              <span>Password</span>
              <div className="login-input">
                <LockKeyhole size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>

            {error && <div className="alert alert-error">{error}</div>}

            <button type="submit" className="login-submit" disabled={busy}>
              {busy ? "Signing in..." : "Sign In"}
            </button>

            <p className="login-help">Authorized Ishraq staff accounts only.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
