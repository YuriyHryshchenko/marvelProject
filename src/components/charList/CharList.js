import "./charList.scss";
import { Component } from "react";
import PropTypes from "prop-types";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
		newItemLoading: false,
		offset: 210,
		charEnded: false
	}

	marvelService = new MarvelService();
	
	componentDidMount() {
		this.onRequest();
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		})
	}

	onCharListLoaded = (newCharList) => {
		let ended = false;
		if(newCharList.length < 9) {
			ended = true;
		}

		this.setState(({offset, charList}) => ({
			charList: [...charList, ...newCharList], 
			loading: false, 
			newItemLoading: false,
			offset: offset + 9,
			charEnded: ended
		}))
	}
	onRequest = (offset) => {
		this.onCharListLoading();
		this.marvelService.getAllCharacters(offset)
			 .then(this.onCharListLoaded)
			 .catch(this.onError);
	}

	onCharListLoading = () => {
		this.setState({
			newItemLoading: true
		})
	}

	onCharListFocused = (id) => {
		this.itemRefs.forEach(element => {
			element.classList.remove("item_active");
		});
		this.itemRefs[id].classList.add("item_active");
		this.itemRefs[id].focus();
	}

	itemRefs = [];
	setCharListRef = ref => {
		this.itemRefs.push(ref);
	}

	renderItems(arr) {
		const items = arr.map((item,i) => {
			return (
				<li tabIndex={0} ref={this.setCharListRef} className="char-list__item item" key={item.id} onClick={() => {
					this.props.onCharSelected(item.id);
					this.onCharListFocused(i);
					}}
					onKeyDown={(e) => {
						if(e.key === " " || e.key === "Enter"){
							this.props.onCharSelected(item.id);
							this.onCharListFocused(i);
						}
					}}
					>
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
		const {charList, loading, error, newItemLoading, offset, charEnded} = this.state;

		const items = this.renderItems(charList);

		const errorMessage = error ? <ErrorMessage/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = !(loading || error) ? items : null;

		return (
			<div className="content-app__list char-list">
				{errorMessage}
				{spinner}
				{content}
				<button 
				className="char-list__button button button-main button-long"
				disabled={newItemLoading}
				style={{'display': charEnded ? "none" : 'block'}}
				onClick={() => this.onRequest(offset)}>LOAD MORE</button>
			</div>
		);
	}
}

CharList.propTypes = {
	onCharSelected: PropTypes.func
}
export default CharList;