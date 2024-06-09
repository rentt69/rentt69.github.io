import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Image 
          src="/rentt.jpg"
          alt="Rentt"
          width={200}
          height={200}
          className={styles.image}
        />
        <div className={styles.content}>
          <p className={styles.name}>RENTT ADAMS</p>
          <p className={styles.about}>Favorite awayin ni <span><a href="https://www.facebook.com/niqsane">@Jewel Cwelisy</a></span></p>
          <p className={styles.gp}><a href="https://www.facebook.com/groups/college.roulette">COF: COLLEGE ROULETTE</a></p>
        </div>
      </div>
    </main>
  );
}
