import { useEffect, useState } from "react";
import { createClient } from "contentful";

import { LinkWithArrow } from "./LinkWithArrow";
import { HeadingWithTags } from "./HeadingWithTags";

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  const client = createClient({
    space: "rkpzp9a9pbb4",
    accessToken: "NoCeuRErHjv99-L6DwrzHDcR3BFnRxcqNKI0jXS8lPk",
  });
  client.getContentType;
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client
          .getEntries({
            content_type: "project",
          })
          .then((entries) => {
            console.log(entries);
            setFeaturedProjects(entries);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);
  return (
    <section className="container mx-auto">
      <div className="mx-10 mx-10 pt-24 pb-28 overflow-hidden">
        <div className="grid grid-cols-12 justify-between">
          <h2 className="text-4xl font-heading uppercase leading-[0.53] col-span-1">
            Work
          </h2>
          <div className="flex flex-wrap justify-end col-span-11 gap-x-8">
            {featuredProjects?.items?.map((project) => {
              return (
                <div key={project.sys.id} className="even:mt-8 w-5/12">
                  <div className="px-4 pb-6 bg-dark rounded-tr-4xl">
                    <img
                      src={project.fields.cardImage.fields.file.url}
                      className="mx-auto py-20"
                    />
                    <HeadingWithTags contentType={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <LinkWithArrow isDarkBackground={false}>See All Projects</LinkWithArrow>
      </div>
    </section>
  );
};

export { FeaturedProjects };
