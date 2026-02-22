import icon from "url:../assets/github-icon.png";
function Header() {
  return (
    <div className="header">
      <div className="title">
        <img src={icon} alt="GitHub Icon" height="80" />
        <h1 className="mainHeading">GitHub <p className="subHeading">Profile Viewer</p></h1>
      </div>
      <p className="secondaryHeading">Browse GitHub Profiles</p>
    </div>
  );
}

export default Header;
