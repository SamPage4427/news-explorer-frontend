import { useContext, useState } from "react";
import notFoundImage from "../../images/not-found_v1.svg";
import NewsCard from "../NewsCard/NewsCard.js";
import HasSearchedContext from "../../contexts/HasSearchedContext.js";
import SearchResultContext from "../../contexts/SearchResultsContext.js";
import IsLoadingContext from "../../contexts/IsLoadingContext.js";
import Preloader from "../Preloader/Preloader.js";

function NewsCardList() {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultContext);
  const { isLoading } = useContext(IsLoadingContext);
  const [cardsVisible, setCardsVisible] = useState(3);

  return (
    <section className="card__container">
      {!isLoading && hasSearched && searchResults.length === 0 ? (
        <div className="card__not-found">
          <img
            src={notFoundImage}
            className="card__image_not-found"
            alt="not-found"
          />
          <h3 className="card__title_not-found">Not Found</h3>
          <p className="card__description_not-found">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      ) : !isLoading && hasSearched && searchResults?.length >= 1 ? (
        <>
          <h3 className="card__results-title">Search Results</h3>
          <div className="card__section">
            {searchResults?.slice(0, cardsVisible).map((news) => {
              return <NewsCard key={news.url} newsItem={news} />;
            })}
          </div>
          <button
            className="card__show-more"
            type="button"
            onClick={() => {
              setCardsVisible(cardsVisible + 3);
            }}
          >
            Show More
          </button>
        </>
      ) : isLoading ? (
        <Preloader />
      ) : (
        ""
      )}
    </section>
  );
}

export default NewsCardList;
