import "./appBanner.scss";
import avengers from "../../resources/img/avengers.png"
import avengersLogo from "../../resources/img/avengersLogo.png"
const AppBanner = () => {
	return (
		<div className="app__banner banner">
			<div className="banner__container">
				<div className="banner__inner">
					<div className="banner__image">
						<img src={avengers} alt="Avengers" />
					</div>
					<div className="banner__text">
						New comics every week! <br />
						Stay tuned!
					</div>
					<div className="banner__logo">
						<img src={avengersLogo} alt="Avengers Logo" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AppBanner;