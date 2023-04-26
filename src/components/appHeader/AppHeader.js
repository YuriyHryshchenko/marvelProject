import "./appHeader.scss";
import { Link, NavLink } from "react-router-dom";
const AppHeader = () => {
	return (
		<header className="app__header header-app">
			<div className="header-app__container">
				<h1 className="header-app__title">
					<Link to="/">
						<span>Marvel</span> information portal
					</Link>
				</h1>

				<nav className="header-app__menu menu">
					<ul className="menu__list">
						<li className="menu__item">
							<NavLink to="/" 
										className={({isActive}) => "menu__link" + (isActive ? " selected" : "")}
										>Characters</NavLink></li>/
						<li className="menu__item">
							<NavLink to="/comics" 
										className={({isActive}) => "menu__link" + (isActive ? " selected" : "")}
										>Comics</NavLink></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default AppHeader;
