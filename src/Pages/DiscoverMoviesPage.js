import { useState } from "react";
import axios from "axios";
import MovieItem from "../components/MovieItem";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const search = async () => {
    console.log("TODO search movies for:", searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=a96792ce&s=${searchText}`
    );

    console.log("Success!", response.data.Search);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
    </div>
  );
}
