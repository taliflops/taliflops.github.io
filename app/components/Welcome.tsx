import { Geist } from "next/font/google";
import styles from "styles/welcome.module.scss";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export default ({
  subtitle = "What shall we learn today?",
}: {
  subtitle?: string;
}) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome</h1>
    <p className={`${geist.className} ${styles.subtitle}`}>{subtitle}</p>
  </div>
);
