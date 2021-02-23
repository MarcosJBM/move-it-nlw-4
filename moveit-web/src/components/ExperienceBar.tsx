export const ExperienceBar = () => {
  return (
    <header className='experience-bar'>
      <span>0 Xp</span>
      <div>
        <div style={{ width: "50%" }}></div>
        <span className='current-experience' style={{ left: "50%" }}>
          300 Xp
        </span>
      </div>
      <span>600 Xp</span>
    </header>
  );
};
