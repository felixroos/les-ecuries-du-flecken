import { useLocales } from '../pages/api/useLocales';

const files = [
  {
    title_fr: 'Box',
    title_de: 'Box',
    description_fr: 'TBD',
    description_de: 'TBD',
    source: './img/gallery/box.jpg', // not from mail
  },
  {
    title_fr: 'Ecuries',
    title_de: 'Ställe',
    description_fr: 'ouvertes, protégées du vent, mais avec une bonne circulation de l’air (moins de poussière)',
    description_de: 'Offen, gut durchlüftet, aber windgeschützt (staubarm)',
    source: './img/gallery/boxenimherbst.png',
  },
  /* {
    title_fr: 'Manège éclairé',
    title_de: 'Lichtdurchflutete Halle',
    description_fr: 'avec barres, chandeliers, plots …',
    description_de: 'mit Stangen, Hütchen und anderem Bodenarbeitszubehör',
    source: './img/gallery/manegeeclairee.jpg',
  }, */
  /* {
    title_fr: 'Manège éclairé',
    title_de: 'Lichtdurchflutete Halle',
    description_fr: 'avec barres, chandeliers, plots …',
    description_de: 'mit Stangen, Hütchen und anderem Bodenarbeitszubehör',
    source: './img/halle.jpg',
  }, */
  {
    title_fr: 'Manège éclairé',
    title_de: 'Lichtdurchflutete Halle',
    description_fr: 'avec barres, chandeliers, plots …',
    description_de: 'mit Stangen, Hütchen und anderem Bodenarbeitszubehör',
    source: './img/gallery/manegebarres.jpg',
  },
  ,
  /* {
    title_fr: 'Paddocks',
    title_de: 'Paddocks',
    description_fr: '',
    description_de: '',
    source: './img/gallery/.jpg',
  } */ /* {
    title_fr: 'Douche et aire de pansage',
    title_de: '',
    description_fr: '',
    description_de: '',
    source: './img/gallery/.jpg',
  }, */
  {
    title_fr: 'Plusieurs hectares de pâtures vallonées et clôturées (3 fils électrifiés sur secteur)',
    title_de: 'Mehrere Hektar hügeliger Weiden mit Elektrozaun (3 Litzen)',
    description_fr: 'Unendlich weite Wiesen',
    description_de: 'Unendlich weite Wiesen',
    source: './img/gallery/koppel.jpg',
  },
  {
    title_fr: 'Foin de qualité supérieure',
    title_de: 'Heu von hervorragender Qualität',
    description_fr: 'entièrement produit sur la ferme',
    description_de: 'zu 100% aus eigener Produktion',
    source: './img/gallery/foinfaitmaison.jpg',
  },
  {
    title_fr: 'Stabulation aménagée',
    title_de: 'Laufstall',
    description_fr: '',
    description_de: '',
    source: './img/gallery/laufstall.jpg',
  },
  {
    title_fr: 'Stabulation parcours',
    title_de: 'Offenstall',
    description_fr: '',
    description_de: '',
    source: './img/gallery/halleundoffenstallaussicht.jpg',
  },
  {
    title_fr: '?',
    title_de: '',
    description_fr: '',
    description_de: '',
    source: './img/gallery/enjoykutsche.png',
  },
];

export default function Example() {
  const [fr, de] = useLocales();
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden">
            <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">
                {fr && file.title_fr}
                {de && file.title_de}
              </span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {fr && file.title_fr}
            {de && file.title_de}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {fr && file.description_fr}
            {de && file.description_de}
          </p>
        </li>
      ))}
    </ul>
  );
}
