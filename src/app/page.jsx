import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
        <h1 className={styles.title}>
        Uttarakhand Chronicles: Journey through the Land of Gods
        </h1>
        
        <p className={styles.desc}>
        Capture the essence of your Himalayan escapades in Uttarakhand, and let your words etch the exhilarating tales of your adventures in the land of enchantment.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      
    </div>
  );
}
