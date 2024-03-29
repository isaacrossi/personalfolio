import { LinkWithArrow } from "./LinkWithArrow";

const Hero = () => (
  <section className="bg-dark pt-56 pb-80 h-lvh xl:h-auto">
    <div className="container mx-auto grid grid-cols-12 items-center">
      <h1 className="flex flex-col col-start-2 font-heading text-5xl leading-tightest text-light uppercase ">
        Frontend
        <span className="ml-24">Developer</span>
      </h1>
      <div className="flex flex-col items-stretch col-start-8 col-span-4">
        <p className="w-64 border-b pb-4 mb-20 text-sm text-light">
          Frontend developer based in Sydney, who is currently looking for an
          entry-level role. I am passionate about building projects that look
          good and scale well.
        </p>
        <LinkWithArrow isDarkBackground={true}>See Projects</LinkWithArrow>
      </div>
    </div>
  </section>
);

export { Hero };
