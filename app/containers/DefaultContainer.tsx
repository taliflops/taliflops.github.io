"use client";
import Welcome from "components/Welcome";
import Card from "components/Card";
import styles from "styles/page.module.scss";
import img1 from "assets/icons/img1.png";
import img2 from "assets/icons/img2.png";
import img3 from "assets/icons/img3.png";
import img4 from "assets/icons/img4.png";
import img5 from "assets/icons/img5.png";
import img6 from "assets/icons/img6.png";
import img7 from "assets/icons/img7.png";
import img8 from "assets/icons/img8.png";
import { useState } from "react";
import Modal from "components/Modal";
import { StaticImageData } from "next/image";
import { CardContent } from "@/Types";

const mock = {
  title: "Lorem Ipsum",
  subtitle:
    "Vivamus luctus ex risus, quis aliquet velit egestas in. Phasellus semper mollis purus in sollicitudin. Vivamus luctus ex risus.",
};
const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

export default ({ slug }: { slug?: string }) => {
  const [isModalOpen, showModal] = useState<null | CardContent>(null);
  console.log(slug);
  return (
    <>
      <Welcome subtitle={`What shall we ${slug || "learn"} today`} />
      <div className={styles.container}>
        {Array(16)
          .fill(mock)
          .map(({ title, subtitle, image }, i) => (
            <Card
              openModal={() =>
                showModal({
                  title,
                  subtitle,
                  image: imgs[i],
                  isStack: i % 2 === 0,
                  openModal: () => showModal(null),
                })
              }
              {...{ title, subtitle }}
              image={imgs[i]}
              isStack={i % 2 === 0}
              key={title + i}
            />
          ))}
      </div>
      <Modal
        {...isModalOpen}
        closeModal={() => showModal(null)}
      />
    </>
  );
};
