import Navigation from "./Navigation.js";

function SavedNewsHeader() {
  const currentUser = "Sam";
  const savedArticles = 4;
  return (
    <div className="saved-news__header">
      <Navigation />
      <h2 className="saved-news__title">Saved News</h2>
      <h3 className="saved-news__article-count">
        {currentUser}, you have _ saved articles
      </h3>
      <p className="saved-news__keywords">By keywords:</p>
    </div>
  );
}

export default SavedNewsHeader;
