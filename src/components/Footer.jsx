import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { href, id, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Viteroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
};
export default Footer;
