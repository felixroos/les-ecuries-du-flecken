import { Parallax } from 'react-parallax';

export default function Header() {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1482779665037-990b5b461e91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
      bgImageAlt="Ecuries du Flecken"
      bgStyle={{ backgroundPosition: 'top' }}
      strength={300}
    >
      <header style={{ height: '600px' }} className="flex justify-center pt-16">
        <h1 className="text-black text-6xl">Les Ecuries du Flecken</h1>
      </header>
    </Parallax>
  );
}
