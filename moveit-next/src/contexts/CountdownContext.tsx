import { createContext, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

export const CountdownContext = createContext({} as CountdownContextData);

let countdowmnTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC = ({ children }) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    clearTimeout(countdowmnTimeout);
    setIsActive(isActive => !isActive);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdowmnTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{ minutes, seconds, hasFinished, isActive, startCountdown }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
