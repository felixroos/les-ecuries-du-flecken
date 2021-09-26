export default function ParallaxImage({ src }) {
  return (
    <section
      className="p-6 bg-bottom bg-left bg-cover bg-fixed"
      style={{
        height: '400px',
        backgroundImage: `url(${src})`,
        // backgroundImage: `url(./img/934e1bd9-75b2-4536-b19d-a8536feb94b9.JPG)`,
      }}
    >
      {/* <div className=" grid grid-cols-2 grid-rows-2">
            <div />
            <div className="bg-white bg-opacity-40 height-full width-full">irland</div>
          </div> */}
    </section>
  );
}
