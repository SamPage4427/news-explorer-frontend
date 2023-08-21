import SavedNewsHeader from "./SavedNewsHeader.js";
import NewsCardList from "./NewsCardList.js";
import Footer from "./Footer.js";

function SavedNews() {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <NewsCardList />
      <Footer />
    </div>
  );
}

export default SavedNews;
