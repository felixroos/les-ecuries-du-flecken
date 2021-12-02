import { useRouter } from 'next/dist/client/router';
import { useLocale } from '../pages/api/useLocales';

const About = () => {
  const [locale] = useLocale();
  return (
    <div className="flex justify-center">
      <div className="max-w-lg">
        {locale === 'de' && (
          <p>
            In Lembach, inmitten der grünen Bergen der Nordvogesen, liegt unser familiärer Betrieb von beschaulicher
            Größe, der seinen Besuchern vor allem Ruhe bietet. Umgeben von der Schönheit der weiten Landschaft lässt es
            sich, zusammen mit seinem vierhufigen Begleiter, hervorragend entspannen. Das Wohlbefinden Ihres Pferdes?
            Liegt uns sehr am Herzen und hat bei uns oberste Priorität.
          </p>
        )}
        {locale === 'fr' && (
          <p>
            Située à Lembach (F-67510) dans le magnifique Parc naturel régional des Vosges du Nord, notre structure à
            taille humaine se veut avant tout être un havre de paix, où la beauté du paysage suffit à se ressourcer au
            contact de son compagnon à sabots. Le bien-être de votre cheval ? Nous en faisons notre priorité.
          </p>
        )}
        {/* <p>
        Située à Lembach (F-67510) dans le magnifique Parc naturel régional des Vosges du Nord, notre structure à taille
        humaine se veut avant tout être un havre de paix, où la beauté du paysage suffit à se ressourcer au contact de
        son compagnon à sabots.
      </p>
      <p>
        Les Ecuries du Flecken ont été rachetées en décembre 2019 par Hélène et Sylvain. Depuis, de nombreuses
        améliorations ont été apportées, et plusieurs projets s’apprêtent encore à voir le jour. Le système de litière
        permanente, qui existait jusqu’alors, a été totalement supprimée. Les stabulations ont été repensées, et une
        stabulation-parcours a été aménagée. Récemment le sol du manège a également été refait à neuf.</p
      
      <p>Im Dezember 2019 haben Hélène und Sylvain die Ecuries du Flecken übernommen. Seitdem wurden bereits einige Verbesserungen vorgenommen 
      und und viele neue Projekte stehen noch an. Das bis dahin bestehende System der permanenten Einstreu wurde eingstellt, 
      die Stallungen neu durchdacht und ein neuer Offenstall kam dazu. Vor Kurzem wurde der Hallenboden gänzlich erneuert.<p/>
      <p>Nous innovons dès que nous le pouvons pour améliorer le quotidien de nos pensionnaires !</p>
      <p>Wir erneuern und entwickeln uns stetig weiter, um den Alltag unserer Einsteller immer noch ein bisschen besser zu gestalten!
        

      <p>Le bien-être de votre cheval ? Nous en faisons notre priorité.</p>
      <p>
        Passionnés depuis l’enfance et propriétaires de chevaux depuis de nombreuses années, nous nous sommes formés
        (Licence professionnelle “Management et Gestion des entreprises de la filière équine” et Galop 7 pour Hélène,
        accompagnateur tourisme équestre (en cours) et Galop 5 d’attelage pour Sylvain) et avons développé notre
        savoir-faire au contact de professionnels (stage gestion de la reproduction et poulinage au Haras de Hus, stage
        de horsemanship avec Andy Booth, …). Compétiteurs dans notre jeunesse (CSO, concours complet, TREC), mais
        randonneurs dans l’âme, nous partageons notre goût pour les chevaux, la nature, le terroir et la découverte de
        paysages à cheval.{' '}</p>*/}
      </div>
    </div>
  );
};
export default About;
