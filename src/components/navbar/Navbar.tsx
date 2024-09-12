import React from "react";
import * as DS from "@nlmk/ds-2.0";
import Logo from "../logo/Logo";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <DS.Box className={styles.navbar} background="var(--background-primary)">
      <DS.Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        height="64px"
        px="var(--64-space)"
      >
        <Logo height={40} />
        <DS.Typography variant="Subheading2-Medium" className={styles.title}>
          Генератор интерфейсов
        </DS.Typography>
      </DS.Box>
    </DS.Box>
  );
};

export default Navbar;
