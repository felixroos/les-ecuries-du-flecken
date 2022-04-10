import React from 'react';
import { useLocales } from '../pages/api/useLocales';
import Anchor from './Anchor';
import Heading from './Heading';
import Img from './Img';

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />;
const Centered = ({ children }) => <div className="flex flex-col md:items-center">{children}</div>;
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

import image from '../public/img/helenesylvainuberuns_cropped2.jpg.webp';

export default function AboutMore() {
  const [fr, de] = useLocales();
  return (
    <>
      <Anchor id={'about'} />
      <Centered>
        <Heading>
          {de && 'Über Uns'}
          {fr && 'Qui sommes-nous ?'}
        </Heading>
        <div className="prose">
          <Img src={image.src} className="rounded-xl mx-auto mb-4" alt="" layout="responsive" />
          {fr && (
            <>
              <p>
                Les Ecuries du Flecken ont été rachetées en décembre 2019 par Hélène et Sylvain. Depuis, de nombreuses
                améliorations ont été apportées, et plusieurs projets s’apprêtent encore à voir le jour.
              </p>
              <p>
                Le système de litière permanente, qui existait jusqu’alors, a été totalement supprimée. Les stabulations
                ont été repensées, et une stabulation-parcours a été aménagée. Récemment le sol du manège a également
                été refait à neuf.
              </p>
            </>
          )}
          {de && (
            <p>
              Im Dezember 2019 haben Hélène und Sylvain die Ecuries du Flecken übernommen. Seitdem wurden bereits einige
              Verbesserungen vorgenommen und viele neue Projekte stehen noch an. Das bis dahin bestehende System der
              permanenten Einstreu wurde eingstellt, die Stallungen neu durchdacht und ein neuer Offenstall kam dazu.
              Vor Kurzem wurde der Hallenboden gänzlich erneuert.
            </p>
          )}
          {fr && <p>Nous innovons dès que nous le pouvons pour améliorer le quotidien de nos pensionnaires !</p>}
          {de && (
            <p>
              Wir erneuern und entwickeln uns stetig weiter, um den Alltag unserer Einsteller immer noch ein bisschen
              besser zu gestalten!
            </p>
          )}

          {fr && (
            <p>
              Passionnés depuis l’enfance et propriétaires de chevaux depuis de nombreuses années, nous nous sommes
              formés (Licence professionnelle “Management et Gestion des entreprises de la filière équine” et Galop 7
              pour Hélène, accompagnateur tourisme équestre (en cours) et Galop 5 d’attelage pour Sylvain) et avons
              développé notre savoir-faire au contact de professionnels (stage gestion de la reproduction et poulinage
              au Haras de Hus, stage de horsemanship avec Andy Booth, …).
            </p>
          )}
          {de && (
            <p>
              Wir sind seit unserer Kindheit leidenschaftliche Reiter und halten seit vielen Jahren auch selbst Pferde.
              Seither bilden wir uns stetig weiter: Hélène hat die Berufslizenz zur Pferdewirtin („Management et Gestion
              des entreprises de la filière équine“) und den Galop 7. Sylvain hat den Galop 5 im Fahren und absolviert
              zur Zeit seine Ausbildung zum Wanderrittführer. Während diverser Praktika im professionellen Bereich haben
              wir unser Savoir-faire verfeinert, wie z.B. im Zuchtbetrieb des Haras de Hus und beim
              Horsemanship-Lehrgang bei Andy Booth.
            </p>
          )}
          {fr && (
            <p>
              Compétiteurs dans notre jeunesse (CSO, concours complet, TREC), mais randonneurs dans l’âme, nous aimons
              découvrir des paysages à cheval et avons à coeur de partager notre passion des chevaux, de la nature et du
              terroir.
            </p>
          )}
          {de && (
            <>
              <p>
                In unserer Jugend haben wir unser Können auf Spring- und Vielseitigkeitsturnieren sowie
                Orientierungsritten gemessen, im Herzen sind wir aber Wanderreiter.
              </p>
              <p>
                Unsere Freude an Pferden und unsere Liebe zur Natur möchten wir mit Ihnen teilen und hoch zu Ross die
                Gegend entdecken und die traumhaften Landschaften der Nordvogesen genießen.
              </p>
            </>
          )}

          {/* <p>
        Située à Lembach (F-67510) dans le magnifique Parc naturel régional des Vosges du Nord, notre structure à taille
        humaine se veut avant tout être un havre de paix, où la beauté du paysage suffit à se ressourcer au contact de
        son compagnon à sabots.
      </p>
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
      </Centered>
    </>
  );
}
