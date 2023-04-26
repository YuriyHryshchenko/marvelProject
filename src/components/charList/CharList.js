import "./charList.scss";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const CharList = (props) => {

	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charEnded, setCharEnded] = useState(false);

	const {getAllCharacters, loading, error} = useMarvelService();
	
	useEffect(() => {
		onRequest(offset, true);
	}, [])

	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if(newCharList.length < 9) {
			ended = true;
		}

		setCharList(charList => [...charList, ...newCharList]);
		setNewItemLoading(false);
		setOffset(offset => offset + 9);
		setCharEnded(ended);
	}
	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCharacters(offset)
			 .then(onCharListLoaded);
	}

	const onCharListFocused = (id) => {
		itemRefs.current.forEach(element => {
			element.classList.remove("item_active");
		});
		itemRefs.current[id].classList.add("item_active");
		itemRefs.current[id].focus();
	}

	const itemRefs = useRef([]);

	function renderItems(arr) {
		const items = arr.map((item,i) => {
			return (
				<li tabIndex={0} ref={el => itemRefs.current[i] = el} className="char-list__item item" key={item.id} onClick={() => {
					props.onCharSelected(item.id);
					onCharListFocused(i);
					}}
					onKeyDown={(e) => {
						if(e.key === " " || e.key === "Enter"){
							props.onCharSelected(item.id);
							onCharListFocused(i);
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

	const items = renderItems(charList);

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading && !newItemLoading ? <Spinner/> : null;

	return (
		<div className="content-app__list char-list">
			{errorMessage}
			{spinner}
			{items}
			<button 
			className="char-list__button button button-main button-long"
			disabled={newItemLoading}
			style={{'display': charEnded ? "none" : 'block'}}
			onClick={() => onRequest(offset)}>LOAD MORE</button>
		</div>
	);
}

CharList.propTypes = {
	onCharSelected: PropTypes.func
}
export default CharList;