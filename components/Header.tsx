// const img = require('../img/pferdis.jpg');
export default function Header({ small }: any) {
  return (
    <header
      className="px-6 md:text-right pt-8 md:pt-16 bg-bottom bg-left bg-cover bg-fixed"
      style={{
        height: small ? '280px' : '800px',
        backgroundImage: `url(./img/header.jpg)`,
        // backgroundImage: `url(./img/934e1bd9-75b2-4536-b19d-a8536feb94b9.JPG)`,
      }}
    >
      <h1 className="text-black text-4xl md:text-6xl text-primary">Les Ecuries du Flecken</h1>
      <h2 className="text-2xl md:text-4xl text-primary">Reiten & Wandern im Elsass</h2>
    </header>
  );
}
