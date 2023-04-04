const PageLink = ({ pageLinks, itemClass }) => {
  return (
    <>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default PageLink;
