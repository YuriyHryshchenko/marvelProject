import "./appHeader.scss";

const AppHeader = () => {
	return (
		<header className="app__header header-app">
			<div className="header-app__container">
				<h1 className="header-app__title">
					<a href="#">
						<span>Marvel</span> information portal
					</a>
				</h1>

				<nav className="header-app__menu menu">
					<ul className="menu__list">
						<li className="menu__item"><a href="#" className="menu__link">Characters</a></li>/
						<li className="menu__item"><a href="#" className="menu__link">Comics</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default AppHeader;
