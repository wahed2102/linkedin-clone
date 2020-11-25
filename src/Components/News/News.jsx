import React from "react";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.main}>
      <h2>LinkedIn News</h2>
      <ul>
        <li>
          <a href="#">
            <div>
              <span className={styles.news_bullet}></span>
              Google is eyeing ShareChat: Report
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default News;
