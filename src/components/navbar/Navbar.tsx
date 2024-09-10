import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import style from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <ul className={style.link}>
          <a href="#">
            Home <span className={style.slash}>/</span>
          </a>
          <a href="#">
            Contact <span className={style.slash}>/</span>
          </a>
          <a href="#">About us</a>
        </ul>
        <ul className={style.midea}>
          <a href="#">{<TwitterIcon style={{ color: "white" }} />}</a>
          <a href="#">{<FacebookIcon style={{ color: "white" }} />} </a>
          <a href="#">{<InstagramIcon style={{ color: "white" }} />}</a>
          <a href="#">{<YouTubeIcon style={{ color: "white" }} />}</a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
