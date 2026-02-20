import { useState } from "react";
import "./movieForm.css";

export function MovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    director: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    try {
      const result = await fetch("http://localhost:3005/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (result.status !== 201) {
        console.error("wrong status");
        return;
      }

      const newMovie = await result.json();
      console.log(newMovie);
      alert("film dodany");
    } catch (e) {
      console.error(e.message);
      alert("Coś poszło nie tak 😢");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">ADD MOVIE</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          placeholder="Title"
          type="text"
          name="title"
          onChange={handleChange}
        />

        <textarea
          className="form-textarea"
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />

        <input
          className="form-input"
          placeholder="Director"
          type="text"
          name="director"
          onChange={handleChange}
        />

        <button className="form-button" type="submit">
          DODAJ FILM DO BAZY
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
