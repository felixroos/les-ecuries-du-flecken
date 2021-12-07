import { useRouter } from 'next/dist/client/router';
import { useLocales } from '../pages/api/useLocales';

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
      </div>
    </div>
  );
};
export default About;
