function SavedNewsHeader() {
  return (
    <div className="saved-news__header">
      <h3>Saved News</h3>
      <h2>
        {currentUser.username}, you have {savedArticles.length} saved articles
      </h2>
      <p>By keywords: {keywords}</p>
    </div>
  );
}
