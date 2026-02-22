import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer";
import Cards from "./Cards";
import { useEffect } from "react";

function CoinCreate() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.slice1);

  useEffect(() => {
    dispatch(FetchData(20));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 style={{textAlign:'center', color:"Red"}}>Crypto Market Dashboard</h1>
      <div style={styles.container}>
        {data?.map((coin) => (
          <div key={coin.id} style={styles.card}>
            <Cards coin={coin}></Cards>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default CoinCreate;
