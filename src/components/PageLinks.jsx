import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <div>
      <ul className={parentClass}>
        <PageLink
          key={pageLinks.id}
          itemClass={itemClass}
          pageLinks={pageLinks}
        />
      </ul>
    </div>
  );
};
export default PageLinks;
