import "./charList.scss";
import abyss from "../../resources/img/abyss.jpg"
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
	}

	marvelService = new MarvelService();

	onError = () => {
		this.setState({
			loading: false,
			error: true
		})
	}
	componentDidMount() {
		this.updateCharList();
	}
	onCharListLoaded = (charList) => {
		this.setState({charList, loading: false})
	}
	
	updateCharList = () => {
		this.marvelService
			 .getAllCharacters()
			 .then(this.onCharListLoaded)
			 .catch(this.onError);
	}

	renderItems(arr) {
		const items = arr.map(item => {
			return (
				<li className="char-list__item item" key={item.id} onClick={() => {
					this.props.onCharSelected(item.id);
					}}>
					<div className="item__image">
						<img src={item.thumbnail} alt={item.name} style={item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectPosition: 'left'} : null}/>
					</div>
					<div className="item__name">{item.name}</div>
				</li>
			)
		});
		return (
			<ul className="char-list__items">
				{items}
			</ul>
		)
	}

	render() {
		const {charList, loading, error} = this.state;

		const items = this.renderItems(charList);

		const errorMessage = error ? <ErrorMessage/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = !(loading || error) ? items : null;

		return (
			<div className="content-app__list char-list">
				{errorMessage}
				{spinner}
				{content}
				<button className="char-list__button button button-main button-long">LOAD MORE</button>
			</div>
		);
	}
}

export default CharList;