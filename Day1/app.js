const element = React.createElement('h1',{},"Hello Everybody");

// ReactDOM.render(element,document.getElementById("root"));  // depricated in React 18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);