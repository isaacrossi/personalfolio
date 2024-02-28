import Logo from "/src/assets/images/logo-light.svg?react";

const Header = () => (
  <header className="bg-dark">
    <div className="bg-dark mx-20 py-6 flex justify-between">
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
    </div>
  </header>
);

export { Header };
