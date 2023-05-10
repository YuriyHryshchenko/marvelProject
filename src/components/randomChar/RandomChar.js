import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";
import setContent from "../../utils/setContent";

const RandomChar = () => {

	const [char, setChar] = useState({});

	useEffect(() => {
		updateChar();
		const timerId = setInterval(updateChar, 600000);

		return () => {
			clearInterval(timerId);
		}
	}, []);

	const {getCharacter, clearError, process, setProcess} = useMarvelService();

	const onCharLoaded = (char) => {
		setChar(char);
	}
	

	const updateChar = () => {
		clearError();
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		getCharacter(id)
			 .then(onCharLoaded)
			 .then(() => setProcess('confirmed'));
	}	



	return (
		<div className="app__randomchar randomchar">
			<div className="randomchar__container">
				{setContent(process, View, char)}
				<div className="randomchar__static">
					<p className="randomchar__title">
						Random character for today! <br />
						Do you want to get to know him better?
					</p>
					<p className="randomchar__subtitle">
						Or choose another one
					</p>
					<div className="randomchar__btns">
						<button onClick={updateChar} className="randomchar__button button button-main">TRY IT</button>
					</div>
					<img src={mjolnir} alt="Mjolnir" className="randomchar__decoration"/>
				</div>
			</div>
		</div>
	);
}

const View = ({data}) => {
	const {name, description, thumbnail, homepage, wiki} = data;
	return (
		<div className="randomchar__block">
			<div className="randomchar__item">
				<div className="randomchar__image">
					<img src={thumbnail} alt="Random character" style={thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectPosition: 'left'} : null}/>
				</div>
			</div>
			<div className="randomchar__info">
				<div className="randomchar__name">{name}</div>
				<p className="randomchar__text">{description}</p>
				<div className="randomchar__buttons">
					<a href={homepage} target="blank" className="randomchar__button button button-main">HOMEPAGE</a>
					<a href={wiki} target="blank" className="randomchar__button button button-secondary">WIKI</a>
				</div>
			</div>
		</div>
	)
}

export default RandomChar;