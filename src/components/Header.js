import lightModeIcon from "../images/light-mode-icon.svg";
import "../css/header.css";

function Header() {
	return (
		<header className="header">
			<div className="left">
				<div className="sidebar-container">
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</div>
				<h1>Notes App</h1>
			</div>
			<div className="center">
				<input className="search-bar" type="search" placeholder="Search Notes"></input>
			</div>
			<div className="right">
				<img src={lightModeIcon} alt="dark mode icon" className="dark-light-mode" />
			</div>
		</header>
	);
}

export default Header;
