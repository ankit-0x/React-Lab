import Header from "./components/Header";
import Home from "./components/Home";
import Card from "./components/Card";
import Footer from "./components/Footer";
import products from "./utils/products";
import {useState} from "react";

function App() {
  const [arr, setArray] = useState(products);

  function sortByPrice() {
    const sorted = [...arr].sort((a, b) => a.price - b.price);
    setArray(sorted);
  }

  function itemsUnder1000(){
    const filtered = arr.filter(value=>value.price<=1000);
    setArray(filtered);
  }

  return (
    <>
      <Header sortfunc={sortByPrice} filtered={itemsUnder1000}/>
      <Home />
      <div className="main">
        {/* <Card cloth="Ethinic Wear" offer="50-80%off"/>
        <Card cloth="Jeans" offer="20-80%off"/>
        <Card cloth="T-Shirts" offer="50-60%off"/>
        <Card cloth="Ethinic Wear" offer="50-80%off"/>
        <Card cloth="Ethinic Wear" offer="50-80%off"/>
        <Card cloth="Ethinic Wear" offer="50-80%off"/> */}

        {arr.map((value) => (
          <Card
            key={value.id}
            item={value.item}
            offer={value.offer}
            image={value.image}
            price={value.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
