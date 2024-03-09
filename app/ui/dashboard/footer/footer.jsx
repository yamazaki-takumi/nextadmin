import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nostak</div>
      <div className={styles.text}>© 2024 Nostak. All rights reserved</div>
    </div>
  );
};

export default Footer;
