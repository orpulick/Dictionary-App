import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Def">
              <strong>Definition: </strong>
              {definition.definition}
            </div>

            <div className="Example">{definition.example}</div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
