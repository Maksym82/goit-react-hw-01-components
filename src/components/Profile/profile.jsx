import PropTypes from 'prop-types';



export const Profile = ({ username, tag, location, avatar, followers, views, likes, }) =>
{
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt='User avatar'
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};



Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar:PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
