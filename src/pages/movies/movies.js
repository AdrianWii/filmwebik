import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import "./movies.css";

export function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/movies")
      .then((res) => {
        return res.json();
      })
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <h1>MOVIES LIST</h1>

      <div className="cards-container">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie}></Card>
        ))}
      </div>
    </>
  );
}

export default Movies;
