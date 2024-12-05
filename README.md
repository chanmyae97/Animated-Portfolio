# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

for testing code //

import React, { useState } from "react";

const Counter = () => {
const [count, setCount] = useState(0); // Declare state with an initial value of 0

const increment = () => setCount(count + 1); // Update state
const decrement = () => setCount(count - 1);

return (
<div>
<h1>Counter: {count}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
);
};

export default Counter;

import React, { useState, useEffect } from "react";

const FetchData = () => {
const [data, setData] = useState(null);

useEffect(() => {
// Perform side effect: Fetch data from an API
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => setData(data));
}, []); // Empty dependency array: Runs only once after the component mounts

return (
<div>
<h1>Data Fetch Example</h1>
{data ? <p>{data.title}</p> : <p>Loading...</p>}
</div>
);
};

export default FetchData;

import React, { useRef } from "react";

const InputFocus = () => {
const inputRef = useRef(null); // Create a reference to the input element

const focusInput = () => {
inputRef.current.focus(); // Use the ref to focus the input
};

return (
<div>
<input ref={inputRef} type="text" placeholder="Type something..." />
<button onClick={focusInput}>Focus Input</button>
</div>
);
};

export default InputFocus;

import React, { useRef, useState } from "react";

const Timer = () => {
const [count, setCount] = useState(0);
const intervalRef = useRef(null); // Store the interval ID

const startTimer = () => {
if (intervalRef.current) return; // Prevent multiple timers
intervalRef.current = setInterval(() => {
setCount((prevCount) => prevCount + 1);
}, 1000);
};

const stopTimer = () => {
clearInterval(intervalRef.current); // Clear the timer
intervalRef.current = null; // Reset the ref
};

return (
<div>
<h1>Timer: {count}</h1>
<button onClick={startTimer}>Start</button>
<button onClick={stopTimer}>Stop</button>
</div>
);
};

export default Timer;

import React, { useState, useEffect, useRef } from "react";

const TimerApp = () => {
const [count, setCount] = useState(0); // State to store the timer count
const intervalRef = useRef(null); // Ref to store the interval ID
const headingRef = useRef(null); // Ref to access the DOM element

useEffect(() => {
headingRef.current.style.color = "blue"; // Change heading color when the component mounts
}, []); // Empty dependency array ensures this runs only once

const startTimer = () => {
if (intervalRef.current) return; // Prevent multiple timers
intervalRef.current = setInterval(() => {
setCount((prev) => prev + 1);
}, 1000);
};

const stopTimer = () => {
clearInterval(intervalRef.current);
intervalRef.current = null;
};

return (
<div>
<h1 ref={headingRef}>Timer: {count}</h1>
<button onClick={startTimer}>Start</button>
<button onClick={stopTimer}>Stop</button>
</div>
);
};

export default TimerApp;
