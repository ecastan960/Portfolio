import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

const initialQuote = {
  text: "Quote",
  author: "Author",
};

function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(true);

  const updateQuote = async () => {
    setLoading(true);
    const url = "https://breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQoute] = await res.json();

    const { quote: text, author } = newQoute;
    setQuote({
      text,
      author,
    });
    setLoading(false);
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => updateQuote()}>Get Another</button>
      {loading ? <Spinner /> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
