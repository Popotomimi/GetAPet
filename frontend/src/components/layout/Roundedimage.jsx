import styles from "./Roudendimage.module.css";

const Roundedimage = ({ src, alt, width }) => {
  return (
    <img
      className={`${styles.rounded_image} ${styles[width]}`}
      src={src}
      alt={alt}
    />
  );
};

export default Roundedimage;
