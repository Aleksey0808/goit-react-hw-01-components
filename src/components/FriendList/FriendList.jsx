import PropTypes from "prop-types";
import css from "./FriendList.module.css"
import FriendListItem from "./FriendListItem/FriendListItem"

export default function FriendList({friends}) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
      />
      })}
</ul>
  )
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
