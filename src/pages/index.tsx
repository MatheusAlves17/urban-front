import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import { Input } from "../components/Input/Input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban - faça seu login!</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.content}/>
        <form className={styles.formContainer}>
          <div className={styles.formHeader}>
            <img alt="Urban" className={styles.logoContainer} />
            <h1 className={styles.title}>Bom te ver de volta<br/>Faça login!</h1>
          </div>
          <div className={styles.formContent}>
            <Input label="E-mail" placeholder="Informe o e-mail" type="email" />
          </div>
        </form>

      </main>
    </>
  );
}
