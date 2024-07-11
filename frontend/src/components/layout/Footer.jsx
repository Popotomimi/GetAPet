import styles from "./Footer.module.css";

const Footer = () => {
  let year = new Date();

  return (
    <footer className={styles.footer}>
      <p>
        <span className="bold">Get a Pet</span> &copy; {year.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
