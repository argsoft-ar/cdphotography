import "./BreadCrumb.css";

interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
  className?: string;
}

export const BreadCrumb = ({ items, className = "" }: BreadCrumbProps) => {
  return (
    <nav className={`breadcrumb ${className}`.trim()} aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => (
          <li className="breadcrumb__item" key={index}>
            {index > 0 && <span className="breadcrumb__separator">/</span>}
            {item.href ? (
              <a href={item.href} className="breadcrumb__link">
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb__current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
