import React from 'react';
import { useLocales } from '../pages/api/useLocales';

export default function Header({ small, children }: any) {
  {
    /* <Parallax className="overflow-hidden" y={[-50, 50]} tagOuter="figure"> */
  }
  const [fr, de] = useLocales();
  return (
    <>
      <div className="block w-full my-6" style={{ maxWidth: '65ch' }}>
        <a
          href="mailto:lesecuriesduflecken@gmail.com"
          className="w-full mb-2 no-underline inline-flex justify-center py-3 px-4 border border-transparent shadow-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {!children && de && 'Jetzt kontaktieren'}
          {!children && fr && 'Contactez nous'}
          {children}
        </a>
        {/* <span className="w-full no-underline inline-flex justify-center py-3 px-4 border border-transparent shadow-sm font-medium rounded-md text-black bg-gray-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
          {fr && 'Ou par telephone au 06 99 93 64 34'}
          {de && 'Oder per Telefon unter +33 69993634'}
        </span> */}
      </div>
    </>
  );
}
