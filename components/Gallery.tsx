import { useLocales } from '../pages/api/useLocales';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import React, { useState } from 'react';
import Img from './Img';

/* import boxenimherbst from '../public/img/gallery/boxenimherbst.png';
import box from '../public/img/gallery/box.jpg';
import manegebarres from '../public/img/gallery/manegebarres.jpg';
import koppel from '../public/img/gallery/koppel.jpg';
import foinfaitmaison from '../public/img/gallery/foinfaitmaison.jpg';
import laufstall from '../public/img/gallery/laufstall.jpg';
import halleundoffenstallaussicht from '../public/img/gallery/halleundoffenstallaussicht.jpg';
import enjoykutsche from '../public/img/gallery/enjoykutsche.png'; */

const files = [
  {
    title_fr: 'Boxes',
    title_de: 'Box',
    description_fr: '',
    description_de: '',
    source: './img/gallery/box.jpg', // not from mail
    width: 1600,
    height: 1200,
  },
  {
    title_fr: 'Ecuries',
    title_de: 'Ställe',
    description_fr: 'ouvertes, protégées du vent, mais avec une bonne circulation de l’air (moins de poussière)',
    description_de: 'Offen, gut durchlüftet, aber windgeschützt (staubarm)',
    source: './img/gallery/boxenimherbst.png',
    width: 2860,
    height: 2299,
  },
  {
    title_fr: 'Manège éclairé',
    title_de: 'Lichtdurchflutete Halle',
    description_fr: 'avec barres, chandeliers, plots…',
    description_de: 'mit Stangen, Hütchen und anderem Bodenarbeitszubehör',
    source: './img/gallery/manegebarres.jpg',
    width: 960,
    height: 720,
  },
  {
    title_fr: 'Plusieurs hectares de pâtures',
    title_de: 'Mehrere Hektar hügeliger Weiden',
    description_fr: 'vallonées et clôturées 3 fils électrifiés sur secteur',
    description_de: ' mit Elektrozaun 3 Litzen',
    source: './img/gallery/koppel.jpg',
    width: 2016,
    height: 954,
  },
  {
    title_fr: 'Foin produit sur la ferme',
    title_de: 'Heu aus eigener Produktion',
    description_fr: '',
    description_de: '',
    source: './img/gallery/foinfaitmaison.jpg',
    width: 4160,
    height: 3120,
  },
  {
    title_fr: 'Stabulation intérieure',
    title_de: 'Laufstall',
    description_fr: '',
    description_de: '',
    source: './img/gallery/laufstall.jpg',
    width: 4160,
    height: 3120,
  },
  {
    title_fr: 'Stabulation ouverte sur parcours',
    title_de: 'Offenstall',
    description_fr: '',
    description_de: '',
    source: './img/gallery/halleundoffenstallaussicht.jpg',
    width: 4160,
    height: 3120,
  },
  {
    title_fr: 'Calèche',
    title_de: 'Kutsche',
    description_fr: '',
    description_de: '',
    source: './img/gallery/enjoykutsche.png',
    width: 2448,
    height: 1961,
  }/* ,
  {
    title_fr: 'Nos Vaches Vosgiennes',
    title_de: 'Unsere Vogeser Kühe',
    description_fr: 'Erica et Richelieu',
    description_de: 'Erica und Richelieu',
    source: './img/gallery/vosgienne.png',
    width: 2448,
    height: 1961,
  }, */
];

const images = files.map((file) => file.source);

export default function Gallery() {
  const [fr, de] = useLocales();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const next = photoIndex < images.length ? images[(photoIndex + 1) % images.length] : undefined;
  return (
    <>
      {open && (
        <Lightbox
          enableZoom={true}
          mainSrc={images[photoIndex]}
          nextSrc={photoIndex < images.length - 1 ? images[(photoIndex + 1) % images.length] : undefined}
          prevSrc={photoIndex === 0 ? undefined : images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageCaption={
            <>
              {fr && files[photoIndex].title_fr}
              {de && files[photoIndex].title_de}
              <br />
              {fr && files[photoIndex].description_fr}
              {de && files[photoIndex].description_de}
            </>
          }
        />
      )}
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file, index) => (
          <li key={index} className="relative">
            <a
              onClick={() => {
                setPhotoIndex(index);
                setOpen(true);
              }}
              className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary overflow-hidden"
            >
              <Img
                src={file.source}
                alt=""
                className="object-cover pointer-events-none group-hover:opacity-75"
                layout="responsive"
              />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">
                  {fr && file.title_fr}
                  {de && file.title_de}
                </span>
              </button>
            </a>
            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
              {fr && file.title_fr}
              {de && file.title_de}
            </p>
            {/* <p className="block text-sm font-medium text-gray-500 pointer-events-none">
              {fr && file.description_fr}
              {de && file.description_de}
            </p> */}
          </li>
        ))}
      </ul>
    </>
  );
}
