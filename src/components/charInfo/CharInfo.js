import "./charInfo.scss";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import SkeletonCard from "../skeletonCard/SkeletonCard"
class CharInfo extends Component {

	state = {
		char: null,
		loading: false,
		error: false
	}
	marvelService = new MarvelService();

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps){
		if(this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
	}

	updateChar = () => {
		const {charId} = this.props;
		if(!charId){
			return;
		}
		this.onCharLoading();
		this.marvelService.getCharacter(charId)
			 .then(this.onCharLoaded)
			 .catch(this.onError);
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true
		})
	}
	onCharLoaded = (char) => {
		this.setState({char, loading: false})
	}
	
	onCharLoading = () => {
		this.setState({
			loading: true
		})
	}
	render() {
		const {char,loading, error} = this.state;

		const skeleton = char || loading || error ? null : <SkeletonCard/>;
		const errorMessage = error ? <ErrorMessage/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = !(loading || error || !char) ? <View char={char}/> : null;

		return (
			<>			
			{skeleton}
			{errorMessage}
			{spinner}
			{content}
			</>
		);
	}
	
}

const View = ({char}) => {

	const {name, description, thumbnail, homepage, wiki, comics} = char;
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
export default CharInfo;