import React from "react";
import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";

export const MultipleCustomHooks = () => {
  const { state: counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0]; //check if hasData

  return (
    <div>
      <h1>Breaking bad quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-o">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
