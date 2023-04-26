import "./comicsList.scss";
import uw from "../../resources/img/uw.png";
import xmen from "../../resources/img/xmen.png";

import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const ComicsList = () => {
	const [comicsList, setComicsList] = useState([]);
	const {loading, error, getAllComics} = useMarvelService();
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [comicsEnded, setComicsEnded] = useState(false);

	useEffect(() => {
		onRequest(offset, true);
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset)
			 .then(onComicsListLoaded);
	}
	
	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if(newComicsList.length < 8) {
			ended = true;
		}

		setComicsList(comicsList => [...comicsList, ...newComicsList]);
		setNewItemLoading(false);
		setOffset(offset => offset + 8);
		setComicsEnded(ended);
	}

	function renderItems(arr) {
		const items = arr.map((item,i) => {
			return (
				<li key={i} className="list-comics__item item-comics">
					<a href="#" className="item-comics__image"><img src={item.thumbnail} alt={item.title} style={item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectPosition: 'left'} : null}/></a>
					<div className="item-comics__body">
						<h4 className="item-comics__title">
							<a href="#" className="item-comics__link-title">{item.title}</a>
						</h4>
						<div className="item-comics__price">{item.price}</div>
					</div>
				</li>	
			)
		});
		return (
			<ul className="comics-app__list list-comics">
				{items}
			</ul>
		)
	}

	const items = renderItems(comicsList);

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading && !newItemLoading ? <Spinner/> : null;

	return (
		<div className="app__comics comics-app">
			<div className="comics-app__container">
			{errorMessage}
			{spinner}
			{items}
			<button 
			className="comics-app__button button button-main button-long"
			disabled={newItemLoading}
			style={{'display': comicsEnded ? "none" : 'block'}}
			onClick={() => onRequest(offset)}>LOAD MORE</button>
			</div>
		</div>
	);
}

export default ComicsList;