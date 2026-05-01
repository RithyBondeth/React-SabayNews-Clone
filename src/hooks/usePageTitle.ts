import { useEffect } from 'react';

const SITE_NAME = 'Sabay News';

export const usePageTitle = (pageTitle: string): void => {
  useEffect(() => {
    document.title = `${pageTitle} | ${SITE_NAME}`;
    return () => {
      document.title = SITE_NAME;
    };
  }, [pageTitle]);
};
