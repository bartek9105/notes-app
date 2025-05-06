import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import styles from "./topbar.module.scss";
import { ROUTES } from "@/consts";

export const Topbar = () => {
  return (
    <div className={styles.container}>
      <NavLink to={ROUTES.notes.root()}>
        <Logo />
      </NavLink>
    </div>
  );
};
