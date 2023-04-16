import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import React from "react";
import Orgs from "./orgs";
import Stream from "./stream";

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fluilanthropy!
        </h1>
        <div className={styles.connect}>
          <ConnectWallet />
        </div>
        <Stream />
        <Orgs />
        <link rel="stylesheet" href="../styles/searchbar.css" />
      </main>
    </div>
  );
}
