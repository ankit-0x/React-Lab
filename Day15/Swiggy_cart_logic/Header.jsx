import { useSelector } from "react-redux";

function Header() {
    const count = useSelector((state)=>state.slice1.count);
  return (
    <>
      <h1>Swiggy</h1>
      <h2>Cart : {count}</h2>
    </>
  );
}

export default Header;
