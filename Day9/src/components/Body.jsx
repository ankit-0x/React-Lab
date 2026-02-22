import { useState, useEffect } from "react";
function Body() {
  const [profile, setProfile] = useState([]);
  const [numberOfProfiles, setNumberOfProfiles] = useState("");
  const [username, setUsername] = useState("");
  const [currentCount, setCurrentCount] = useState(10);
  const [error, setError] = useState("");

  async function generateProfile(count) {
    if (count < 1 || count > 100) {
      setError("Please enter a number between to 1-100");
      return;
    }

    try {
      const rand = Math.floor(1 + Math.random() * 10000000);
      const response = await fetch(
        `https://api.github.com/users?since=${rand}&per_page=${count}`,
      );
      if (!response.ok) {
        throw new Error("Failed to Fetch Profiles");
      }
      const data = await response.json();
      setProfile(data);
      setCurrentCount(count);
      setError("");
    } catch (err) {
      setError(err.message);
      setProfile([]);
    }
  }

  async function showProfile(user) {
    if (!user.trim()) {
      setError("Please Enter a username");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (response.status === 404) {
        throw new Error("User not found");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await response.json();
      setProfile([data]);
      setCurrentCount(1);
      setError("");
    } catch (err) {
      setError(err.message);
      setProfile([]);
    }
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  return (
    <div className="bodySection">
      {/* USERNAME SEARCH */}
      <div className="usernameSearch">
        <input
          type="text"
          placeholder="🔍 Search by username"
          value={username}
          onChange={(e) => {
            const newUsername = e.target.value;
            setUsername(newUsername);

            if (newUsername === "") {
              generateProfile(10);
            }
          }}
          className="inputSec"
        />
        <button className="ser-btn" onClick={() => showProfile(username)}>
          Search User
        </button>
      </div>

      {/* NUMBER SEARCH */}
      <div className="numberSearch">
        <input
          type="text"
          placeholder="📊 Number of profiles"
          value={numberOfProfiles}
          onChange={(e) => setNumberOfProfiles(e.target.value)}
          className="inputSec"
        />
        <button
          className="ser-btn"
          onClick={() => generateProfile(Number(numberOfProfiles))}
        >
          Random
        </button>
      </div>
      {/* ← ERROR DISPLAY if error comes then it displayed*/}
      {error && (
        <div className="error">
          <button
            className="error-close"
            onClick={() => {
              setError("");
              setCurrentCount(0);
              generateProfile(10);
            }}
          >
            ❌
          </button>{" "}
          {error}
        </div>
      )}
      <div className="profileSection">
        <div className="bodyTitle">
          {username ? (
            <p>Explore {currentCount} User Profile</p>
          ) : (
            <p>Explore {currentCount} Random GitHub Profiles</p>
          )}
          <span className="line"></span>
        </div>
        <div className="profiles">
          {profile.map((value) => {
            return (
              <div key={value.id} className="card">
                <img src={value.avatar_url}></img>
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank">
                  Profile Link
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
