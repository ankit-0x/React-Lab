function Increment({ counts,setCount }) {
  return (
    <button onClick={() => setCount( counts + 1)}>
      Increment
    </button>
  );
}

export default Increment;
