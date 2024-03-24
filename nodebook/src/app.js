import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  // when we first open the page we want to get an advice without having to click the button
  // useEffect takes two arguments, a function that we want to be executed
  // and a second argument called the dependency array, []
  // if the dependency array is empty [], it will be executed once

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>What's up m8? Here's your advice:</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <p>The advice has {advice.length} characters</p>
      <p>
        You have read <strong>23</strong> pieces of advice
      </p>
      <Message count={count} />
    </div>
  );
}

// use State is a function in React that returns an array
// from the console to the output

// setAdvice is a function that we use to update the state

//for the 2nd <p> we want to update it over time so we use another state

// in react we try to divide user interfaces into components
// first component will be a Message

function Message(props) {
  return <p> You have read {props.count} pieces of advice</p>;
}
