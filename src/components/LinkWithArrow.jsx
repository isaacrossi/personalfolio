import Arrow from "/src/assets/images/arrow.svg?react";

const LinkWithArrow = ({ isDarkBackground, children }) => {
  const textColorClass = isDarkBackground ? "text-light" : "text-dark";

  return (
    <a className="mt-20 flex self-end items-center float-right">
      <span className={`mr-2 text-sm ${textColorClass} uppercase`}>
        {children}
      </span>
      <Arrow />
    </a>
  );
};

export { LinkWithArrow };
