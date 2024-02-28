import Logo from "/src/assets/images/logo-light.svg?react";

const Footer = () => (
  <footer className="bg-dark text-xs text-light ">
    <div className="mx-20 py-6 bg-dark grid grid-cols-12">
      <div className="col-span-4">
        <Logo className="mb-2 w-5" />
        <p className="mb-2">Isaac Rossi</p>
        <p className="py-2 border-y text-light border-light w-3/5">
          Frontend Developer, based in Sydney. ready for work. All rights
          reserved.
        </p>
      </div>
      <div className="col-span-4 flex flex-col">
        <a className="mb-2">Work</a>
        <a className="mb-2">Musings</a>
        <a className="">Contact</a>
      </div>
      <div className="col-span-4 flex flex-col">
        <a className="mb-2">Github</a>
        <a className="mb-2">LinkedIn</a>
        <a className="">X</a>
      </div>
      <div className="col-span-4"></div>
    </div>
  </footer>
);

export { Footer };
