// const img = require('../img/pferdis.jpg');
export default function Header() {
  return (
    <header
      className="px-6 md:text-right pt-16 bg-bottom bg-left bg-cover"
      style={{
        height: '600px',
        backgroundImage: `url(./img/IMG_5144.JPG)`,
        // backgroundImage: `url(./img/934e1bd9-75b2-4536-b19d-a8536feb94b9.JPG)`,
      }}
    >
      <h1 className="text-black text-6xl">Les Ecuries du Flecken</h1>
    </header>
  );
}
