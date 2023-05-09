import { Link } from 'react-router-dom';

import "./comicsSingle.scss";

const SingleComicPage = ({data}) => {
	const {title, description, pageCount, thumbnail, language, price} = data;

	return (
		<div className="app__single single-comic">
			<div className="single-comic__container">
				<div className="single-comic__inner">
					<div className="single-comic__item">
						<div className="single-comic__image">
							<img src={thumbnail} style={thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectPosition: 'left'} : null} alt={title} />
						</div>
					</div>
					<div className="single-comic__info">
						<div className="single-comic__title">{title}</div>
						<p className="single-comic__text">
							{description}
						</p>
						<p className="single-comic__pages">{pageCount}</p>
						<p className="single-comic__language">Language: {language}</p>
						<div className="single-comic__price">{price}</div>
					</div>
				</div>
				<div className="single-comic__link">
					<Link to="/comics" className="single-comic__link-back">Back to all</Link>
				</div>
			</div>
		</div>
	)
}

export default SingleComicPage;