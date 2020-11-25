import React from "react";
import styles from "./Courses.module.css";

const Courses = () => {
  return (
    <div className={styles.main}>
      <h2>
        Today's trending courses
        <span
          style={{ float: "right", marginRight: "20px", color: "lightgray" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            class="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
          </svg>
        </span>
      </h2>
      <ul>
        <li>
          <a href="#" className={styles.truncate}>
            <div>
              <span className={styles.news_bullet}></span>
              1. Impromptu Speaking
            </div>
            <span className={styles.news_subtext}>Todd Dewett</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.truncate}>
            <div>
              <span className={styles.news_bullet}></span>
              2. Preparing to Lead: Developing...
            </div>
            <span className={styles.news_subtext}>Richard Gerver</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.truncate}>
            <div>
              <span className={styles.news_bullet}></span>
              3. Customer Service: Handling Abu...
            </div>
            <span className={styles.news_subtext}>David Brownlee</span>
          </a>
        </li>
      </ul>
      <button>
        <span>Show more ⌵</span>
      </button>
    </div>
  );
};

export default Courses;
