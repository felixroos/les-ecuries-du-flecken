import Image from 'next/image';

function Img(props) {
  const { nextImage, ...rest } = props;
  if (!nextImage) {
    return <img {...rest} />;
  }
  return (
    <>
      <Image alt="" {...rest} />
    </>
  );
}

export default Img;
