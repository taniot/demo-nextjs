const DefaultLayout = ({ entry }) => {
  return (
    <div>
      <h1>{entry?.title}</h1>
      {entry.content && (
        <div dangerouslySetInnerHTML={{ __html: entry.content }} />
      )}
    </div>
  );
};

export default DefaultLayout;
