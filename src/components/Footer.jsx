import Logo from "/src/assets/images/logo-light.svg?react";

const Footer = () => (
  <footer className="bg-dark text-xs text-light ">
    <div className="mx-20 py-6 bg-dark grid grid-cols-12">
      <div className="col-span-4">
        <Logo className="mb-2 w-5" />
        <p className="mb-2">Isaac Rossi</p>
        <p className="py-2 border-y text-light border-light">
          Frontend Developer, based in Sydney. ready for work. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export { Footer };
