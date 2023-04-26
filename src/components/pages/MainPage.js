import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/bg.png"
import { useState } from "react";

const MainPage = () => {
	const [selectedChar, setChar] = useState(null)

	const onCharSelected = (id) => {
	  setChar(id);
	}
	return (
		<>
			<ErrorBoundary>
					<RandomChar/>
			</ErrorBoundary>
			<div className="app__content content-app">
				<div className="content-app__container">
					<ErrorBoundary>
					<CharList onCharSelected={onCharSelected}/>
					</ErrorBoundary>

					<ErrorBoundary>
					<CharInfo charId={selectedChar}/>
					</ErrorBoundary>
				</div>
			</div>       
			<div className="app__decoration">
        		<img src={decoration} alt="vision"/>
      	</div>
		</>
	)
}

export default MainPage;