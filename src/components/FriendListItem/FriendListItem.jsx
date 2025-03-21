import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = clsx(css.status, isOnline && css.online);

  return (
    <div className={css.item}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
