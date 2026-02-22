function Filter({sortfunc,filtered}) {

  function openPopup(){
    document.getElementById("filter-popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("filter-popup").style.display = "none";
  }

  function sortByPrice(){
    sortfunc();
    closePopup();
  }

  function itemsUnder1000(){
    filtered();
    closePopup();
  }
  
  return (
    <div>
      <div className="sec">
          <img
            className="icons" onClick={openPopup}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvK34ZLaSVLsoxuVMx4bG3ajcXcEHlNsDkQ&s"
          />
          <button className="opt" onClick={openPopup}>Filter</button>
        </div>
      <div id="filter-popup" className="popup" >
        <p>Filter Options</p>
        <button onClick={sortByPrice}>Price (High to Low)</button>
        <br />
        <button onClick={itemsUnder1000}>Items under 1000</button>
        <br />
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Filter