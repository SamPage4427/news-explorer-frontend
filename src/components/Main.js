import { useContext } from "react";
import Header from "./Header.js";
import NewsCardList from "./NewsCardList.js";
import About from "./About.js";
import IsLoadingContext from "../contexts/IsLoadingContext.js";
import Preloader from "./Preloader.js";

function Main({ signinClick, signoutClick }) {
  const { isLoading } = useContext(IsLoadingContext);

  return (
    <div className="main">
      <Header
        name="nav"
        onSigninClick={signinClick}
        onSignoutClick={signoutClick}
      />
      <div className="main__results">
        {isLoading === false ? (
          <>
            <NewsCardList />
          </>
        ) : (
          <Preloader />
        )}
      </div>
      <About />
    </div>
  );
}

export default Main;
