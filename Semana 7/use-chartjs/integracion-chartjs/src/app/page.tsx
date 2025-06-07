'use client'
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="">
        <Link href={'/categorias'} className={styles.btn}>Ver grafico de categorias</Link>
        <Link href={'/lineas'} className={styles.btn}>Ver grafico de lineas</Link>
        <Link href={'/planificador'} className={styles.btn}>Ver grafico de planificadores</Link>
      </div>
    </div>
  );
}
