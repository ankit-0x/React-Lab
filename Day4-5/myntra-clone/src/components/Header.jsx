import Filter from "./Filter";

function Header(props) {
  return (
    <div className="header">
      <img
        className="images"
        src="https://images.indianexpress.com/2021/01/myntra.png"
        height="80px"
        width="80px"
      />

      <div className="navLinks">
        <button className="btn">Men</button>
        <button className="btn">Women</button>
        <button className="btn">Kids</button>
        <button className="btn">Home and Living</button>
        <button className="btn">Beauty</button>
        <button className="btn">Studio</button>
      </div>

      <input
        className="searchbar"
        placeholder="Search for products brands and more"
      ></input>

      <div className="options">
        <div className="sec">
          <Filter sortfunc={props.sortfunc} filtered={props.filtered}/>
        </div>
        <div className="sec">
          <img
            className="icons"
            src="https://tse3.mm.bing.net/th/id/OIP.LCkI8vNfQ9Wor6EqZKFMXwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
          <button className="opt"> Profile</button>
        </div>
        <div className="sec">
          <img
            className="icons"
            src="https://tse4.mm.bing.net/th/id/OIP.QkOn6FZBvdCtk_ektUJ7ZQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
          <button className="opt">Wishlist</button>
        </div>
        <div className="sec">
          <img
            className="icons"
            src="https://cdn1.iconfinder.com/data/icons/e-commerce-320/512/bag-512.png"
          />
          <button className="opt">Bag</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
