import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
};

export default App;
