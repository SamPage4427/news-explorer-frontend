import { newsOptions } from "../utils/constants.js";
import NewsCard from "./NewsCard.js";

function NewsCardList() {
  return (
    <div className="card__section">
      {newsOptions.map((news) => {
        return <NewsCard key={news.key} newsItem={news} />;
      })}
    </div>
  );
}

export default NewsCardList;
