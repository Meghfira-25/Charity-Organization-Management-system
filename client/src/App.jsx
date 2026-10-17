
import { Navigate, Route, Routes } from "react-router-dom";

import PublicLayout from "./components/PublicLayout/PublicLayout.jsx";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";

import Home from "./pages/public/Home/Home.jsx";
import About from "./pages/public/About/About.jsx";
import PublicContentPage from "./pages/public/PublicContentPage/PublicContentPage.jsx";
import Programs from "./pages/public/Programs/Programs.jsx";
import SuccessStories from "./pages/public/SuccessStories/SuccessStories.jsx";
import AnnualPlans from "./pages/public/AnnualPlans/AnnualPlans.jsx";
import AnnualPlanDetail from "./pages/public/AnnualPlanDetail/AnnualPlanDetail.jsx";
import Contact from "./pages/public/Contact/Contact.jsx";
import Membership from "./pages/public/Membership/Membership.jsx";
import Donate from "./pages/public/Donate/Donate.jsx";
import Login from "./pages/public/Login/Login.jsx";

import DashboardHome from "./pages/dashboard/DashboardHome/DashboardHome.jsx";
import Staff from "./pages/dashboard/Staff/Staff.jsx";
import Beneficiaries from "./pages/dashboard/Beneficiaries/Beneficiaries.jsx";
import Assistance from "./pages/dashboard/Assistance/Assistance.jsx";
import Members from "./pages/dashboard/Members/Members.jsx";
import Donations from "./pages/dashboard/Donations/Donations.jsx";
import Resources from "./pages/dashboard/Resources/Resources.jsx";
import Distributions from "./pages/dashboard/Distributions/Distributions.jsx";
import Activities from "./pages/dashboard/Activities/Activities.jsx";
import Content from "./pages/dashboard/Content/Content.jsx";
import Reports from "./pages/dashboard/Reports/Reports.jsx";
import Messages from "./pages/dashboard/Messages/Messages.jsx";
import Profile from "./pages/dashboard/Profile/Profile.jsx";
import AnnualPlansAdmin from "./pages/dashboard/AnnualPlans/AnnualPlans.jsx";

const secure = (node, roles) => (
  <ProtectedRoute roles={roles}>
    {node}
  </ProtectedRoute>
);

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/annual-plans" element={<AnnualPlans />} />
          <Route path="/annual-plans/:id" element={<AnnualPlanDetail />} />

          <Route
            path="/news"
            element={
              <PublicContentPage
                type="News"
                combineEvents
                eyebrow="EVENTS & NEWS"
                title="Events, activities and news from Ishraq."
                description="Follow upcoming activities, completed events, announcements and community updates from Ishraq Charity Organization."
              />
            }
          />

          <Route path="/stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/donate" element={<Donate />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={secure(<DashboardLayout />)}
        >
          <Route index element={<DashboardHome />} />

          <Route path="profile" element={<Profile />} />

          <Route
            path="staff"
            element={secure(<Staff />, ["Admin"])}
          />

          <Route
            path="beneficiaries"
            element={secure(<Beneficiaries />, [
              "Admin",
              "Registration-Officer",
              "Distribution-Officer",
            ])}
          />

          <Route
            path="assistance"
            element={secure(<Assistance />, [
              "Admin",
              "Registration-Officer",
              "Distribution-Officer",
            ])}
          />

          <Route
            path="members"
            element={secure(<Members />, ["Admin"])}
          />

          <Route
            path="donations"
            element={secure(<Donations />, [
              "Admin",
              "Distribution-Officer",
            ])}
          />

          <Route
            path="resources"
            element={secure(<Resources />, [
              "Admin",
              "Distribution-Officer",
            ])}
          />

          <Route
            path="distributions"
            element={secure(<Distributions />, [
              "Admin",
              "Distribution-Officer",
            ])}
          />

          <Route
            path="activities"
            element={secure(<Activities />, [
              "Admin",
              "Distribution-Officer",
            ])}
          />

          <Route
            path="content"
            element={secure(<Content />, ["Admin"])}
          />

          <Route
            path="annual-plans"
            element={secure(<AnnualPlansAdmin />, ["Admin"])}
          />

          <Route
            path="messages"
            element={secure(<Messages />, ["Admin"])}
          />

          <Route
            path="reports"
            element={secure(<Reports />, ["Admin"])}
          />
        </Route>

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}
