import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(true);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary App</h1>
        <h4>What word interests you?</h4>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter word"
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">Suggested words: Yoga, wine, forest, etc.</div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
