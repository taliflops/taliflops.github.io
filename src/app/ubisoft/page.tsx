"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "../page.module.scss";

const Ubisoft = () => {
  const [isAiming, setAiming] = useState(false);
  const [weapons, showWeapons] = useState(false);
  const [weapon, setWeapon] = useState(1);
  const keydown = useCallback(
    (event: { key: any; keyCode: any }) => {
      const { keyCode } = event;
      if (keyCode === 81) {
        setAiming(true);
      }
      if (keyCode === 87) {
        showWeapons(true);
      }
      if (keyCode === 38 && weapons) {
        let sum = (weapon - 1) % 7;
        sum = sum === 0 ? 7 : sum;
        setWeapon(sum);
      }
      if (keyCode === 40 && weapons) {
        let sum = (weapon + 1) % 7;
        sum = sum === 0 ? 7 : sum;
        setWeapon(sum);
      }
    },
    [weapon, weapons]
  );
  const keyup = useCallback((event: { key: any; keyCode: any }) => {
    const { keyCode } = event;
    if (keyCode === 81) {
      setAiming(false);
    }
    if (keyCode === 87) {
      showWeapons(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    };
  }, [keydown, keyup]);

  return (
    <div
      className={
        isAiming ? styles.zoomedBackgroundImage : styles.backgroundImage
      }
    >
      <Image src="/background.jpg" alt="environment" fill={true} />
      <div className={isAiming ? styles.monster : styles.hiddenMonster}>
        <Image src="/monster.svg" alt="monster" fill={true} />
      </div>
      <div className={isAiming ? styles.hiddenChar : styles.char}>
        <Image src="/char.svg" alt="char" fill={true} />
      </div>
      <div className={isAiming ? styles.shooter : styles.hiddenShooter}>
        <Image src="/shooter.svg" alt="shooter" fill={true} />
      </div>
      <div className={isAiming ? styles.enemyDot : styles.dot}></div>
      <div className={isAiming ? styles.bullets : styles.hiddenBullets}>
        <Image src={"/bullets.svg"} alt="bullets" fill={true} />
      </div>
      <div className={styles.health}>
        <Image src={"/health.svg"} alt="health" fill={true} />
      </div>
      <div className={isAiming ? styles.aim : styles.relaxed}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={weapons ? styles.weaponsMenu : styles.hideMenu}>
        <Image
          className={weapon === 1 ? styles.weapon15 : styles.weapon1}
          src="/weapon1.svg"
          alt="weapon1"
          width={150}
          height={60}
        />
        <Image
          className={weapon === 2 ? styles.weapon25 : styles.weapon2}
          src="/weapon2.svg"
          alt="weapon2"
          width={150}
          height={60}
        />
        <Image
          className={weapon === 3 ? styles.weapon35 : styles.weapon3}
          src="/weapon3.svg"
          alt="weapon3"
          width={200}
          height={54}
        />
        <Image
          className={weapon === 4 ? styles.weapon45 : styles.weapon4}
          src="/weapon4.svg"
          alt="weapon4"
          width={260}
          height={46}
        />
        <Image
          className={weapon === 5 ? styles.weapon55 : styles.weapon5}
          src="/weapon5.svg"
          alt="weapon5"
          width={70}
          height={70}
        />
        <Image
          className={weapon === 6 ? styles.weapon65 : styles.weapon6}
          src="/weapon6.svg"
          alt="weapon6"
          width={90}
          height={60}
        />
        <Image
          className={weapon === 7 ? styles.weapon75 : styles.weapon7}
          src="/weapon7.svg"
          alt="weapon7"
          width={90}
          height={90}
        />
      </div>
      <div className={weapons ? styles.hideWeaponHud : styles.weaponHud}>
        <Image src={`/weapon${weapon}.svg`} fill={true} alt="weapon" />
        <div className={styles.flag}>
          <p>L1</p>
        </div>
      </div>
    </div>
  );
};

export default Ubisoft;
