import styles from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
