import { useEffect, useState } from "react";
import { createClient } from "contentful";

import { LinkToPage } from "./LinkToPage";

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  const client = createClient({
    space: "rkpzp9a9pbb4",
    accessToken: "NoCeuRErHjv99-L6DwrzHDcR3BFnRxcqNKI0jXS8lPk",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
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
    <section className="container mx-auto pt-24 pb-28">
      <div className="mx-20 grid grid-cols-12 justify-between mb-10">
        <h2 className="text-4xl font-heading uppercase leading-[0.53] col-span-1">
          Work
        </h2>
        <div className="flex flex-wrap justify-end col-span-11 gap-x-8">
          {featuredProjects?.items?.map((project) => {
            return (
              <div key={project.sys.id} className="even:mt-8 w-5/12">
                <div className="px-4 pb-6 bg-secondary rounded-tr-4xl">
                  <img
                    src={project.fields.cardImage.fields.file.url}
                    className="mx-auto py-20"
                  />
                  <h3 className="mb-2 pb-2 border-b border-light font-body text-xl text-light">
                    {project.fields.projectTitle}
                  </h3>
                  <p className="pb-2 border-b border-light font-body text-light text-sm uppercase">
                    {project.metadata.tags[0].sys.id}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LinkToPage isDarkBackground={false} />
    </section>
  );
};

export { FeaturedProjects };
