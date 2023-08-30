// import { useContext } from "react";
import NewsCard from "./NewsCard.js";
// import SavedCardsContext from "../contexts/SavedCardsContext.js";
import { newsOptions } from "../utils/constants.js";

function SavedNewsCardList() {
  // const { saveCards } = useContext(SavedCardsContext);

  return (
    <div className="card__container">
      <div className="card__section">
        {newsOptions.map((news) => {
          return <NewsCard key={news.url} newsItem={news} />;
        })}
      </div>
    </div>
  );
}

export default SavedNewsCardList;
