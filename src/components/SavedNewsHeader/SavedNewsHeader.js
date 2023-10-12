import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { useState } from "react";
import SavedCardsContext from "../../contexts/SavedCardsContext.js";
import Navigation from "../Navigation/Navigation.js";
import { useContext } from "react";

function SavedNewsHeader() {
  const { savedCards } = useContext(SavedCardsContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [keywords, setKeywords] = useState([]);

  const getCardsKeywords = () => {};

  return (
    <div className="saved-news__header">
      <Navigation />
      <h2 className="saved-news__title">Saved Articles</h2>
      <h3 className="saved-news__article-count">
        {currentUser.name}, you have {savedCards.length} saved articles
      </h3>
      <p className="saved-news__keywords">By keywords: </p>
    </div>
  );
}

export default SavedNewsHeader;
