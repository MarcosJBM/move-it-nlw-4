import { createContext, useState } from 'react';

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {}

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
