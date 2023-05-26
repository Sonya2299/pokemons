import styles from "./styles.module.scss";

const StatItem = ({ statName, statValue, picture }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <div className={styles.statName}>{statName}</div>
        <img src={picture} alt="" width={40} height={40} />
      </div>
      <div className={styles.value}>{statValue}</div>
    </div>
  );
};

export default StatItem;
