import { FunctionComponent } from "react";
import * as styles from "./navbar.module.scss";

export const Navbar: FunctionComponent = () => {
  return (
    <section className={styles["navbar-container"]}>
      <input type="text" className={styles["search-box"]} />
    </section>
  );
};
