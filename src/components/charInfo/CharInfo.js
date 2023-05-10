import "./charInfo.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

const CharInfo = (props) => {

	const [char, setChar] = useState(null);

	const {getCharacter, clearError, process, setProcess} = useMarvelService();

	useEffect(() => {
		updateChar();
	}, [props.charId])


	const updateChar = () => {
		const {charId} = props;
		if(!charId){
			return;
		}
		
		clearError();
		getCharacter(charId)
			 .then(onCharLoaded)
			 .then(() => setProcess('confirmed'))
	}

	const onCharLoaded = (char) => {
		setChar(char);
	}

	return (
		<>			
			{setContent(process, View,  char)}
		</>
	);
	
}

const View = ({data}) => {

	const {name, description, thumbnail, homepage, wiki, comics} = data;
	return (
	<div className="content-app__info char-info">
		<div className="char-info__basics basics">
			<div className="basics__item">
				<div className="basics__image">
					<img src={thumbnail} alt={name} style={thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectPosition: 'left'} : null} />
				</div>
			</div>
			<div className="basics__info info-basics">
				<div className="info-basics__name">{name}</div>
				<div className="info-basics__btns">
					<a target="blank" href={homepage} className="info-basics__button button button-main">Homepage</a>
					<a target="blank" href={wiki} className="info-basics__button button button-secondary">Wiki</a>
				</div>
			</div>
		</div>
		<div className="char-info__description">
			<p>{description}</p>
		</div>
		<div className="char-info__comics comics">
			<p className="comics__title">Comics:</p>
			<ul className="comics__list list">
				{comics.length > 0 ? null : "Comics not found :("}
				{
				comics.slice(0,10).map((item, i) => {
					return (
						<li key={i} className="list__item">
							{item.name}
						</li>
					)})
				}
			</ul>
		</div>
	</div>
	)
}

CharInfo.propTypes = {
	charId: PropTypes.number
}
export default CharInfo;