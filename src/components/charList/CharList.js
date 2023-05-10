import "./charList.scss";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { useMemo } from "react";

const setContent = (process, Component, newItemLoading) => {
	switch(process) {
		case 'waiting':
			return <Spinner/>;
		case 'loading':
			return newItemLoading ? <Component/> : <Spinner/>;
		case 'error':
			return <ErrorMessage/>
		case 'confirmed': 
			return <Component/>
		default:
			throw new Error('Unexpected process state');
	}
}

const CharList = (props) => {

	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charEnded, setCharEnded] = useState(false);

	const {getAllCharacters, process, setProcess} = useMarvelService();
	
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
			 .then(onCharListLoaded)
			 .then(() => setProcess('confirmed'));
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
					<li key={item.id} tabIndex={0} ref={el => itemRefs.current[i] = el} className="char-list__item item" onClick={() => {
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
	const elements = useMemo(() => {
		return setContent(process, () => renderItems(charList), newItemLoading);
	}, [process]);

	return (
		<div className="content-app__list char-list">
			{elements}
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