function Decrement({ counts,setCount }) {
  return (
    <button onClick={() => setCount(counts - 1)}>
      Decrement
    </button>
  );
}

export default Decrement;
