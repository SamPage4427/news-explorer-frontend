import { newsOptions } from "../utils/constants.js";
import NewsCard from "./NewsCard.js";

function NewsCardList() {
  return (
    <div className="card__section">
      <h3 className="card__section-title">Search Results</h3>
      {newsOptions.map((news) => {
        return <NewsCard key={news} newsItem={news} />;
      })}
    </div>
  );
}

export default NewsCardList;
