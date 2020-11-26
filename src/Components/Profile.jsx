import styles from "./Profile.module.css";
import {UserContext} from '../Context/UserContextProvider' 
import React, { Component } from 'react';
import photo from "../images/wahed.jpg";
export default class Profile extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {cur_id,cur_user} = this.context
    console.log(cur_user)
    const {background} = this.props
    return (
      <div className={styles.main}>
          <div>
            <div className={styles.background}></div>
            <img className={styles.img} src={photo} alt={cur_user.alt} />
            <a className={styles.name}>{cur_user.name}</a>
            <p className={styles.description}>{cur_user.description}</p>
          </div>
          <div>
            <div>
              <div>
                <span className={styles.connections}>Connections</span>
                <div className={styles.growNetwork}>Grow your network</div>
              </div>
              <div className={styles.connectionsValue}>{cur_user.connections}</div>
            </div>
            <div>
              <div className={styles.whoViewed}>Who viewed your profile</div>
              <div className={styles.whoViewedValue}>{cur_user.viewed}</div>
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
    )
  }
}
Profile.contextType = UserContext