const SocialLink = ({ socialLinks }) => {
  return (
    <li>
      {socialLinks.map((link) => {
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            className="nav-icon"
            rel="noreferrer"
          >
            <i className={link.icon}></i>
          </a>
        );
      })}
    </li>
  );
};
export default SocialLink;
