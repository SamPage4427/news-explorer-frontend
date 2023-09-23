import { useContext } from "react";
import Header from "../Header/Header.js";
import NewsCardList from "../NewsCardList/NewsCardList.js";
import About from "../About/About.js";
import IsLoadingContext from "../../contexts/IsLoadingContext.js";
import Preloader from "../Preloader/Preloader.js";

function Main({ signinClick, signoutClick }) {
  const { isLoading } = useContext(IsLoadingContext);

  return (
    <>
      <Header onSigninClick={signinClick} onSignoutClick={signoutClick} />
      <section className="main">
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
      </section>
    </>
  );
}

export default Main;
