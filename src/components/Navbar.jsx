import logo from "../assets/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="viteroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <PageLinks parentClass="nav-links" itemClass="nav-link" />

          <ul className="nav-icons">
            <SocialLink socialLinks={socialLinks} />
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
