const HeadingWithTags = ({ contentType }) => {
  let title;

  if (contentType.sys.contentType.sys.id === "project") {
    // Use project title if the contentType is 'project'
    title = contentType.fields.projectTitle;
  } else if (contentType.sys.contentType.sys.id === "musing") {
    // Use musing title if the contentType is 'musing'
    title = contentType.fields.musingTitle;
  }
  return (
    <>
      <p className="pb-2 border-b border-light font-body text-light text-sm uppercase mt-6">
        {contentType.metadata.tags[0].sys.id}
      </p>
      <h3 className="pb-2 border-b border-light font-body text-xl text-light">
        {title}
      </h3>
    </>
  );
};

export { HeadingWithTags };
