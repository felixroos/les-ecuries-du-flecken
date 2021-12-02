import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const locales = ['fr', 'de'];
const defaultLocale = 'fr';

const getLocale = (pathname) => {
  const firstRoute = pathname?.split('/')[1];
  const routeLocale = locales.find((l) => firstRoute === l);
  return routeLocale || defaultLocale;
};

export function useLocales() {
  const router = useRouter();
  const [locale, setLocale] = useState(getLocale(router.pathname));
  useEffect(() => {
    setLocale(getLocale(router.pathname)); // will not rerender if it stays the same
  }, [router.pathname]);
  return locales.map((l) => locale === l);
}
