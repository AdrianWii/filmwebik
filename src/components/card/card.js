import "./card.css";

export function Card({ movie }) {
    return (
        <div className="card">
            <h2 className="card__title">{movie.title}</h2>

            <p className="card__description">
                {movie.description}
            </p>

            <div className="card__footer">
                <span className="card__director">
                    🎬 {movie.director}
                </span>

                <span className="card__likes">
                    ❤️ {movie.likes}
                </span>
            </div>
        </div>
    );
}

export default Card;