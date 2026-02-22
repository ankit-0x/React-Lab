import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Github() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [username]);

  return (
    <div>
      <h2>Github Profile</h2>

      {profile ? (
        <div>
          <img src={profile?.avatar_url} width="120" alt="avatar" />
          <h3>{profile?.name}</h3>
          <p>Followers: {profile?.followers}</p>
          <p>Public Repos: {profile?.public_repos}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Github;
