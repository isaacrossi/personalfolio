import Arrow from "/src/assets/images/arrow.svg?react";

const LinkToPage = ({ isDarkBackground }) => {
  const textColorClass = isDarkBackground ? "text-light" : "text-dark";

  return (
    <a className="flex self-end items-center float-right">
      <span className={`mr-2 text-sm ${textColorClass} uppercase`}>
        See Projects
      </span>
      <Arrow />
    </a>
  );
};

export { LinkToPage };
