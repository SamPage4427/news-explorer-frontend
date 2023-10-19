import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard.js";
import SavedCardsContext from "../../contexts/SavedCardsContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function SavedNewsCardList() {
  const { savedCards } = useContext(SavedCardsContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="saved-news__card">
      <div className="saved-news__card-container">
        {savedCards.map((news) => {
          if (news.owner === currentUser?._id) {
            return <NewsCard key={news.link} newsItem={news} />;
          }
        })}
      </div>
    </section>
  );
}

export default SavedNewsCardList;
