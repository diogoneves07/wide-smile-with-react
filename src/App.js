import { useEffect, useRef, useState } from "react";
import wS from "wide-smile";
import "./App.css";

function animateModalValue(element) {
  wS(
    element,
    1
  )([
    { translateX: 0, offset: [0, 1] },
    { 0: -10, offset: [0.1, 0.3, 0.5, 0.7, 0.9] },
    { 0: 10, offset: [0.2, 0.4, 0.6, 0.8] },
  ]);
}

function animateValue(element, color) {
  wS(element, 2)("color", color)("fontSize", [30, 50], {
    easing: "easeInExpo",
    dur: 1,
  });
}

function animateBars(element, count) {
  wS(element, 1)("rotate", `${count * 100}`);
}

function animate(count) {
  animateModalValue(".counter-modal-value");

  animateValue(
    ".counter-modal-value",
    count === 0 ? "rgb(148, 148, 6)" : count > 0 ? "blue" : "red"
  );

  animateBars(".bar-1", count);

  animateBars(".bar-2", -count);
}

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const element = useRef();

  useEffect(() => {
    animate(count);
  });

  return (
    <div ref={element} className="counter-modal">
      <div className="counter-modal-view-value">
        <strong className="counter-modal-value">{count}</strong>
      </div>
      <div className="counter-modal-bars bar-1"></div>
      <div className="counter-modal-bars bar-2 "></div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
}

function App() {
  return <Counter initialCount={0} />;
}

export default App;
