// =========================================================================//
//                          The Sneakers User App                           //
// =========================================================================//
//                      REACT NATIVE VERSION: 0.75.4                        //
//               STATE MANAGEMENT: REACT REDUX & REDUX PERSIST              //
//                      DEVELOPER'S PROFILE: ING CHINA                      //
//                   GitHub: https://github.com/Ing-China                   //
// =========================================================================//

import React from 'react';
import AppNavigation from './src/navigation';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/translations/i18n';
import {ThemeProvider} from './src/contexts';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <AppNavigation />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
