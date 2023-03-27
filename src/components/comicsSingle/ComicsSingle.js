import "./comicsSingle.scss";
import xmen from "../../resources/img/xmen.png";
const ComicsSingle = () => {
	return (
		<div className="app_single single-comic">
			<div className="single-comic__container">
				<div className="single-comic__inner">
					<div className="single-comic__item">
						<div className="single-comic__image">
							<img src={xmen} alt="comics cover" />
						</div>
					</div>
					<div className="single-comic__info">
						<div className="single-comic__title">X-Men: Days of Future Past</div>
						<p className="single-comic__text">
						Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
						</p>
						<p className="single-comic__pages">144 pages</p>
						<p className="single-comic__language">Language: en-us</p>
						<div className="single-comic__price">9.99$</div>
					</div>
				</div>
				<div className="single-comic__link">
					<a href="#" className="single-comic__link-back">Back to all</a>
				</div>
			</div>
		</div>
	);
}

export default ComicsSingle;