
import "./charSingle.scss";

const SingleCharPage = ({data}) => {
	const {name, description, thumbnail} = data;

	return (
		<div className="app__single single-char">
			<div className="single-char__container">
				<div className="single-char__inner">
					<div className="single-char__item">
						<div className="single-char__image">
							<img src={thumbnail} style={thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? {objectPosition: 'left'} : null} alt={name} />
						</div>
					</div>
					<div className="single-char__info">
						<div className="single-char__title">{name}</div>
						<p className="single-char__text">
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingleCharPage;