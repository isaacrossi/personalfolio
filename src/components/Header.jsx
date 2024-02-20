import Logo from "/src/assets/images/logo-light.svg?react";

const Header = () => (
  <div className="bg-dark">
    <header className="bg-dark mx-20 py-5 flex justify-between">
      <Logo />
      <nav>
        <ul className="flex">
          <li className="uppercase text-sm text-light mr-10">
            <a>Work</a>
          </li>
          <li className="uppercase text-sm text-light mr-10">
            <a>Musings</a>
          </li>
          <li className="uppercase text-sm text-light">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export { Header };
