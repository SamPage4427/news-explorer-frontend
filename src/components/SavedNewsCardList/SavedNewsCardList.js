import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard.js";
import SavedCardsContext from "../../contexts/SavedCardsContext.js";
import { newsOptions } from "../../utils/constants.js";

function SavedNewsCardList() {
  const { savedCards } = useContext(SavedCardsContext);

  return (
    <section className="saved-news__card">
      <div className="saved-news__card-container">
        {savedCards.map((news) => {
          return <NewsCard key={news.link} newsItem={news} />;
        })}
      </div>
    </section>
  );
}

export default SavedNewsCardList;
