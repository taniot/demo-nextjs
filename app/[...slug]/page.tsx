const PageSlug = (props) => {
  console.log(props.params.slug);
  return <div>Slug {props.params.slug}</div>;
};

export default PageSlug;
