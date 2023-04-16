import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import React from "react";
import Orgs from "./orgs";
import Stream from "./stream";

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to Fluilanthropy!
        </h1>
        <Stream />
        <Orgs />
      </main>
    </div>
  );
}
