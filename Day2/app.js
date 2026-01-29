const e = React.createElement;

// elements
const title = e(
  "h1",
  null,
  "React Core Project"
);

const desc1 = e(
  "p",
  null,
  "This UI uses only createElement"
);

const desc2 = e(
  "p",
  null,
  "No JSX, No Babel, No Hooks"
);

// parent container
const card = e(
  "div",
  { className: "card" },
  [title, desc1, desc2]
);

// render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(card);
