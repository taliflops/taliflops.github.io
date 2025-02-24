import styles from "styles/modal.module.scss";
import Image from "next/image";
import { ModalContent } from "@/Types";

const Modal = ({ closeModal, title, subtitle, image }: ModalContent) => (
  <>
    <div
      className={title ? styles.overlay : styles.hidden}
      onClick={closeModal}
    />
    <div className={title ? styles.modal : styles.hiddenModal}>
      {image && (
        <Image
          className={styles.image}
          src={image}
          alt={title || ""}
        />
      )}
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {/* <div
        className={styles.close}
        onClick={closeModal}
      /> */}
    </div>
  </>
);

export default Modal;
