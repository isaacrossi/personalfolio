import { useEffect, useState } from "react";
import { createClient } from "contentful";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { LinkWithArrow } from "./LinkWithArrow";
import { HeadingWithTags } from "./HeadingWithTags";

const RecentMusings = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
  });

  const [latestMusings, setLatestMusings] = useState([]);

  const client = createClient({
    space: "rkpzp9a9pbb4",
    accessToken: "NoCeuRErHjv99-L6DwrzHDcR3BFnRxcqNKI0jXS8lPk",
  });

  const getAllEntries = async () => {
    try {
      await client
        .getEntries({
          content_type: "musing",
        })
        .then((entries) => {
          console.log(entries);
          setLatestMusings(entries);
          slider?.current?.update();
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEntries();
  }, []);

  return (
    <section className="pt-24 pb-28 overflow-hidden bg-secondary">
      <div className="container mx-auto">
        <div className="mx-10">
          <h2 className="mb-16 text-4xl text-light font-heading uppercase leading-[0.53]">
            Musings
          </h2>
        </div>
      </div>
      <div className="px-4 overflow-x-hidden">
        <div
          ref={sliderRef}
          className="keen-slider text-primary overflow-visible"
        >
          {latestMusings?.items?.map((musing) => {
            return (
              <div key={musing.sys.id} className="keen-slider__slide">
                <div className="rounded-tr-4xl">
                  <img
                    src={musing.fields.musingHeroImage.fields.file.url}
                    className="rounded-tr-4xl mx-auto"
                  />
                </div>
                <HeadingWithTags contentType={musing} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mx-10">
          <LinkWithArrow isDarkBackground={true}>See All Musings</LinkWithArrow>
        </div>
      </div>
    </section>
  );
};

export { RecentMusings };
