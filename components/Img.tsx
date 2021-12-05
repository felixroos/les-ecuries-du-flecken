function Img(props) {
  const src = props.src.startsWith('/') ? `.${props.src}` : props.src;
  return <img {...props} src={src} />;
}

export default Img;
