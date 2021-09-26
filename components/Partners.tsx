const partners = [
  {
    name: 'Deutsche Wanderreiter Akademie',
    logo: 'https://image.jimcdn.com/app/cms/image/transf/dimension=192x10000:format=png/path/sf9cc07944986b423/image/i9f4343edd40ae310/version/1597841712/image.png',
  },
  {
    name: 'Visit Alsace',
    logo: 'https://www.entela.fr/wp-content/uploads/Logo-alsace.png',
  },
  {
    name: 'Cheval Club de France',
    logo: 'https://www.ecuriesdumaistre.com/wp-content/uploads/sites/72/2017/12/FFE-Logo-Cheval-Club-de-France.jpg',
  },
];

export default function Partners() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <div key={i} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-24" src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
