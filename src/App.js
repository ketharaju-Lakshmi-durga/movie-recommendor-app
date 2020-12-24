import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Comedy: [
    { name: "Ted", rating: "4/5" },
    { name: "BookSmart", rating: "3.5/5" },
    {
      name: "Crazy Rich Asians",
      rating: "4.5/5"
    },
    {
      name: "lady Bird",
      rating: "5/5"
    }
  ],

  Horror: [
    {
      name: "The Nun",
      rating: "5/5"
    },
    {
      name: "Annabelle",
      rating: "4.5/5"
    },
    {
      name: "The Conjuring",
      rating: "4/5"
    },
    {
      name: "Sinister",
      rating: "5/5"
    }
  ],
  Science_Fiction: [
    {
      name: "Interstellar",
      rating: "5/5"
    },
    {
      name: "Monsters",
      rating: "4.5/5"
    },

    {
      name: "Wall-E",
      rating: "5/5"
    },
    { name: "Gravity", rating: "4/5" }
  ],
  Thriller: [
    {
      name: "Intruders",
      rating: "5/5"
    },
    {
      name: "parasite",
      rating: "4.5/5"
    },

    {
      name: "Now you see me",
      rating: "5/5"
    },
    { name: "Shutter island", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#339966" }}> 🎬 Good Movies </h1>
      <p style={{ fontSize: "smaller", color: "#339966" }}>
        Checkout my favorite Movies. Select a genre to get started
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#339966",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((mve) => (
            <li
              key={mve.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #339966",
                width: "60%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {mve.name} </div>
              <div style={{ fontSize: "smaller" }}> {mve.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
