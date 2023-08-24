import { useContext, useState } from "react";
import CurrentPageContext from "../contexts/CurrentPageContext.js";
import SavedCardsContext from "../contexts/SavedCardsContext.js";

function NewsCard({ newsItem }) {
  const { currentPage } = useContext(CurrentPageContext);
  const { saveCards, setSavedCards } = useContext(SavedCardsContext);
  const isSaved = saveCards.some((card) => card.title === newsItem.title);

  const handleSaveCards = (e) => {
    // refer to likecards in react project
  };

  return (
    <div className="card">
      <img
        src={newsItem.urlToImage}
        alt={newsItem.url}
        className="card__image"
      />
      <div className="card__description-container">
        <h4 className="card__date">{newsItem.publishedAt.slice(0, 10)}</h4>
        <h3 className="card__title">{newsItem.title}</h3>
        <p className="card__description">{newsItem.description}</p>
        <h4 className="card__publisher">{newsItem.source.name}</h4>
      </div>
      <div className="card__save-btn-container">
        {currentPage === "/saved-news" ? (
          <button className="card__delete" type="button"></button>
        ) : (
          <button
            className={`card__save ${isSaved ? "card__save_active" : ""}`}
            type="button"
            onClick={handleSaveCards}
          ></button>
        )}
      </div>
      {currentPage === "/saved-news" ? (
        <div className="card__keyword">keyword</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NewsCard;
