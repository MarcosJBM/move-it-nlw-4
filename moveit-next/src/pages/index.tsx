import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div className={styles.left}>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
