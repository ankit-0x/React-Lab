const header1 = document.createElement("h1");
header1.innerText = "Hello Everyone";
header1.style.backgroundColor = "green";
header1.style.color = "orange";
header1.fontSize = "30px";

const header2 = document.createElement("h2");
header2.innerText = "Welcome to my Website";
header2.style.backgroundColor = "blue";
header2.style.color = "white";
header2.fontSize = "30px";

const root = document.getElementById("root");
root.append(header1);
root.append(header2);

// creating react object
const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);

    if (typeof children == "object") {
      for (let val of children) {
        element.append(val);
      }
    } else {
      element.innerText = children;
    }

    for (let key in styles) {
      element.style[key] = styles[key];
    }

    return element;
  },
};

const ReactDom = {
  render: function (element, root) {
    root.append(element);
  },
};

const e1 = React.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "green", color: "orange" },
  "Hello React",
);
const e2 = React.createElement(
  "h2",
  { fontSize: "20px", backgroundColor: "blue", color: "white" },
  "Welcome to React first project",
);

const l1 = React.createElement("li", {}, "HTML");
const l2 = React.createElement("li", {}, "CSS");
const l3 = React.createElement("li", {}, "JavaScript");
const l4 = React.createElement("li", {}, "TypeScript");
const l5 = React.createElement("li", {}, "GitHub");

const UL = React.createElement("ul", {fontSize:"15px",backgroundColor:"pink",color:"green"}, [l1, l2, l3, l4, l5]);

ReactDom.render(e1, document.getElementById("root"));
ReactDom.render(e2, document.getElementById("root"));
ReactDom.render(UL, document.getElementById("root"));
