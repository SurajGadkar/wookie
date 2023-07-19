import React from "react";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.img_container}>
      <img
        className={styles.img}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F264631%2Fscreenshots%2F2399998%2Fw-logo.jpg&f=1&nofb=1&ipt=369fd49ad0d6544565f3115698b4681ac5bfbeae9d42382b0e1323218baf5a24&ipo=images"
        alt="logo"
        height={"40px"}
        width="auto"
      />
    </div>
  );
}

export default Logo;
