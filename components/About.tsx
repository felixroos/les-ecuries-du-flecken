import { useRouter } from 'next/dist/client/router';
import { useLocales } from '../pages/api/useLocales';
import { FacebookIcon } from './FacebookIcon';

const About = () => {
  const [fr, de] = useLocales();
  return (
    <div className="flex justify-center text-lg">
      <div className="max-w-xl">
        {de && (
          <p>
            In Lembach, inmitten der grünen Berge der Nordvogesen, liegt unser familiärer Betrieb von beschaulicher
            Größe, der seinen Besuchern vor allem Ruhe bietet. Umgeben von der Schönheit der weiten Landschaft lässt es
            sich mit seinem vierhufigen Begleiter hervorragend entspannen. Das Wohlbefinden Ihres Pferdes liegt uns sehr
            am Herzen und hat oberste Priorität.
          </p>
        )}
        {fr && (
          <p>
            Située à Lembach dans le magnifique Parc naturel régional des Vosges du Nord, notre structure à taille
            humaine se veut avant tout être un havre de paix, où la beauté du paysage suffit à se ressourcer au contact
            de son compagnon à sabots. Le bien-être de votre cheval? Nous en faisons notre priorité.
          </p>
        )}
        <div className="block w-full p-0 m-0 mt-4" style={{ maxWidth: '65ch' }}>
          <a
            href="https://www.facebook.com/Les-Ecuries-du-Flecken-107285571760209"
            className="text-base flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="h-8 w-8 text-gray-600 mr-2" aria-hidden="true" /> Suivez les Écuries du Flecken sur
            Facebook
          </a>
          {/* <span className="w-full no-underline inline-flex justify-center py-3 px-4 border border-transparent shadow-sm font-medium rounded-md text-black bg-gray-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
          {fr && 'Ou par telephone au 06 99 93 64 34'}
          {de && 'Oder per Telefon unter +33 69993634'}
        </span> */}
        </div>
      </div>
    </div>
  );
};
export default About;
