import React from "react";
import styles from "./Profile.module.css";
const Profile = (props) => {
  const { background } = props.background;
  console.log(props);
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.background}></div>
        <img className={styles.img} src={props.image} alt={props.alt} />
        <a className={styles.name}>{props.name}</a>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div>
        <div>
          <div>
            <span className={styles.connections}>Connections</span>
            <div className={styles.growNetwork}>Grow your network</div>
          </div>
          <div className={styles.connectionsValue}>{props.connections}</div>
        </div>
        <div>
          <div className={styles.whoViewed}>Who viewed your profile</div>
          <div className={styles.whoViewedValue}>{props.viewed}</div>
        </div>
        <div className={styles.border}>
          <div className={styles.access}>Access exclusive tools & insights</div>
          <div className={styles.try}>Try Premium Free for 1 Month</div>
        </div>
        <div className={styles.saved}>Saved Items</div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Profile;
