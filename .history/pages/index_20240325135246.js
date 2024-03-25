import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <ParentToChild/>
      </main>
    </>
  );
}
