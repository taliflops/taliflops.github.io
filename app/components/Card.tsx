import styles from "styles/card.module.scss";
import Image, { StaticImageData } from "next/image";

const Card = ({
  title,
  subtitle,
  image,
  isStack,
  openModal,
}: {
  title: string;
  subtitle: string;
  isStack: boolean;
  image: StaticImageData;
  openModal: () => void;
}) => (
  <div
    className={isStack ? styles.stack : styles.card}
    onClick={openModal}
  >
    <Image
      className={styles.image}
      alt={`${title} card`}
      src={image}
    />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);

export default Card;
