import styles from '../styles/components/ExperienceBar.module.css';

export const ExperienceBar = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0 Xp</span>
      <div>
        <div style={{ width: '50%' }}></div>
        <span className={styles.currentExperience} style={{ left: '50%' }}>
          300 Xp
        </span>
      </div>
      <span>600 Xp</span>
    </header>
  );
};
