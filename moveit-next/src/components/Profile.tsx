import styles from '../styles/components/Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/marcosjbm.png' alt='Marcos Botene' />
      <div>
        <strong>Marcos Botene</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
};
