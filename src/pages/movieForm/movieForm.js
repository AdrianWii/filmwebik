import { useState } from "react";

export function MovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    director: "",
  });

  const handleSubmit = async (event) => {};

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>ADD MOVIE</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          type="text"
          name="title"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <input
          placeholder="director"
          type="text"
          name="director"
          onChange={handleChange}
        ></input>
        <button type="submit">DODAJ FILM DO BAZY</button>
      </form>
    </>
  );
}

export default MovieForm;
