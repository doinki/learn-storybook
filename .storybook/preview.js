import '@/styles/global.css';

import { RouterContext } from 'next/dist/shared/lib/router-context';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  darkMode: { stylePreview: true },
  nextRouter: { Provider: RouterContext.Provider },
};
