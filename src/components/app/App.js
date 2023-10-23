import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
// import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setSelectedChar] = useState(null);     /* 2. устанавливается сюда */       

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* <AppBanner/> */}
                {/* <ComicsList/> */}
                <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/> 
                    </ErrorBoundary>                                        {/* 1. от сюда приходит айди */}
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>       {/* 3. передаётся сюда */}
                    </ErrorBoundary>            
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}


export default App;