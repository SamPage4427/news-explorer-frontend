import { useContext } from "react";
import CurrentPageContext from "../contexts/CurrentPageContext.js";

function NewsCard({ newsItem }) {
  const { currentPage } = useContext(CurrentPageContext);

  return (
    <div className="card__container">
      <img
        src={newsItem.urlToImage}
        alt={newsItem.title}
        className="card__image"
      />
      <div className="card__description-container">
        <h4 className="card__date">{newsItem.publishedAt}</h4>
        <h3 className="card__title">{newsItem.title}</h3>
        <p className="card__description">{newsItem.description}</p>
        <h4 className="card__publisher">{newsItem.source}</h4>
      </div>
      <div className="card__save-btn-container">
        {currentPage === "/saved-news" ? (
          <button className="card__delete" type="button"></button>
        ) : (
          <button className="card__save" type="button"></button>
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
