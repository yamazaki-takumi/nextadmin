import styles from "./pagenation.module.css";

const Pagenation = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Previous
      </button>
      <button className={styles.button}>Next</button>
    </div>
  );
};

export default Pagenation;
