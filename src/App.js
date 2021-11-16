import { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import enUS from './i18n/languages/en-US';
import esAR from './i18n/languages/es-AR';
import ptBR from './i18n/languages/pt-BR';

import './App.css';

const MESSAGES = {
  en: enUS,
  es: esAR,
  pt: ptBR,
};

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <IntlProvider messages={MESSAGES[language]} locale={language} defaultLocale="en">
      <div className='container'>
        
        <select className='select' value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value='en'>EN</option>
          <option value='pt'>PT</option>
          <option value='es'>ES</option>
        </select>

        <FormattedMessage id="HELLO_WORLD" />
      </div>
    </IntlProvider>
  );
}

export default App;
