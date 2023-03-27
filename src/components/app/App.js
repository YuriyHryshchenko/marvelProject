import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from "../../resources/img/bg.png"
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import ComicsSingle from "../comicsSingle/ComicsSingle";
import { Component } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
// import SkeletonCard from "../skeletonCard/SkeletonCard";
class App extends Component {
  state = {
    selectedChar: null
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    return (
      <div className="app">
        <AppHeader/>
        <main>
          {/* <AppBanner/> */}
          {/* <ComicsSingle/> */}
          {/* <ComicsList/> */}
          <ErrorBoundary>
            <RandomChar/>
          </ErrorBoundary>
          <div className="app__content content-app">
            <div className="content-app__container">
              <ErrorBoundary>
                <CharList onCharSelected={this.onCharSelected}/>
              </ErrorBoundary>

              <ErrorBoundary>
               <CharInfo charId={this.state.selectedChar}/>
              </ErrorBoundary>
            </div>
          </div>
        </main>
        <div className="app__decoration">
          <img src={decoration} alt="vision"/>
        </div>
      </div>
    );
  }

}

export default App;
