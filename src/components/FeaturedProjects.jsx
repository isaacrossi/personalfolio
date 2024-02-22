import { useEffect, useState } from "react";
import { createClient } from "contentful";

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
      <div className="mx-20 grid grid-cols-12 ">
        <h2 className="text-4xl font-heading uppercase">Work</h2>
        {featuredProjects?.items?.map((project) => {
          return (
            <div key={project.sys.id} className="col-span-5 bg-secondary">
              <img src={project.fields.cardImage.fields.file.url} />
              <h3 className="font-body text-dark">
                {project.fields.projectTitle}
              </h3>
              <p></p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { FeaturedProjects };