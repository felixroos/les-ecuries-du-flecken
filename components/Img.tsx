function Img(props) {
  const src = props.src.startsWith('/') ? `.${props.src}` : props.src;
  return <img {...props} src={src} loading="lazy" />;
}

export default Img;
