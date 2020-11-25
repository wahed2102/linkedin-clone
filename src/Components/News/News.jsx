import React from "react";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.main}>
      <h2>
        LinkedIn News
        <span
          style={{
            float: "right",
            marginRight: "20px",
            color: "rgba(0,0,0,0.6)",
          }}
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
              Google is eyeing ShareChat: Report
            </div>
            <span className={styles.news_subtext}>1d ago • 1,026 readers</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.truncate}>
            <div>
              <span className={styles.news_bullet}></span>
              Elon Musk is world's second-riches
            </div>
            <span className={styles.news_subtext}>1d ago • 1,026 readers</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.truncate}>
            <div>
              <span className={styles.news_bullet}></span>
              What's next for OYO
            </div>
            <span className={styles.news_subtext}>1d ago • 1,026 readers</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.truncate}>
            <div>
              <span className={styles.news_bullet}></span>
              Branded content big on OTT platforms
            </div>
            <span className={styles.news_subtext}>1d ago • 1,026 readers</span>
          </a>
        </li>
        <li>
          <a href="#" className={styles.truncate}>
            <div>
              <span className={styles.news_bullet}></span>
              Google is eyeing ShareChat: Report
            </div>
            <span className={styles.news_subtext}>1d ago • 1,026 readers</span>
          </a>
        </li>
      </ul>
      <button>
        <span>Show more ⌵</span>
      </button>
    </div>
  );
};

export default News;
