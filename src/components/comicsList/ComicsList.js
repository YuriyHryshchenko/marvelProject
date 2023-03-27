import "./comicsList.scss";
import uw from "../../resources/img/uw.png";
import xmen from "../../resources/img/xmen.png";

const ComicsList = () => {
	return (
		<div className="app__comics comics-app">
			<div className="comics-app__container">
				<ul className="comics-app__list list-comics">
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={uw} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</a>
							</h4>
							<div className="item-comics__price">9.99$</div>
						</div>
					</li>
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={xmen} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">X-Men: Days of Future Past</a>
							</h4>
							<div className="item-comics__price">NOT AVAILABLE</div>
						</div>
					</li>
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={uw} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</a>
							</h4>
							<div className="item-comics__price">9.99$</div>
						</div>
					</li>
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={xmen} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">X-Men: Days of Future Past</a>
							</h4>
							<div className="item-comics__price">NOT AVAILABLE</div>
						</div>
					</li>
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={uw} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</a>
							</h4>
							<div className="item-comics__price">9.99$</div>
						</div>
					</li>
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={xmen} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">X-Men: Days of Future Past</a>
							</h4>
							<div className="item-comics__price">NOT AVAILABLE</div>
						</div>
					</li>
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={uw} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</a>
							</h4>
							<div className="item-comics__price">9.99$</div>
						</div>
					</li>
					<li className="list-comics__item item-comics">
						<a href="#" className="item-comics__image"><img src={xmen} alt="comics cover"/></a>
						<div className="item-comics__body">
							<h4 className="item-comics__title">
								<a href="#" className="item-comics__link-title">X-Men: Days of Future Past</a>
							</h4>
							<div className="item-comics__price">NOT AVAILABLE</div>
						</div>
					</li>
				</ul>
				<button className="comics-app__button button button-main button-long">LOAD MORE</button>
			</div>
		</div>
	);
}

export default ComicsList;