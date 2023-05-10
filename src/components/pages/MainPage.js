import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharForm from "../сharForm/CharForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/bg.png"
import { useState } from "react";
import { Helmet } from "react-helmet";

const MainPage = () => {
	const [selectedChar, setChar] = useState(null)

	const onCharSelected = (id) => {
	  setChar(id);
	}
	return (
		<>
			<Helmet>
				<meta name="description" content="Marvel information portal"/>
   			<title>Marvel Information Portal</title>
			</Helmet>
			<ErrorBoundary>
					<RandomChar/>
			</ErrorBoundary>
			<div className="app__content content-app">
				<div className="content-app__container">
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected}/>
					</ErrorBoundary>
					<div className="content-app__secondary">
						<ErrorBoundary>
							<CharInfo charId={selectedChar}/>
						</ErrorBoundary>
						<ErrorBoundary>
							<CharForm/>
						</ErrorBoundary>
					</div>
				</div>
			</div>       
			<div className="app__decoration">
        		<img src={decoration} alt="vision"/>
      	</div>
		</>
	)
}

export default MainPage;