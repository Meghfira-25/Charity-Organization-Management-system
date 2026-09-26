import { Outlet } from "react-router-dom";
import PublicNavbar from "../PublicNavbar/PublicNavbar.jsx";
import Footer from "../Footer/Footer.jsx";
import PublicMessageBox from "../PublicMessageBox/PublicMessageBox.jsx";
import "./PublicLayout.css";
export default function PublicLayout() {
  return <div className="public-app">
      <PublicNavbar />
      <Outlet />
      <Footer />
      <PublicMessageBox />
    </div>;
}
