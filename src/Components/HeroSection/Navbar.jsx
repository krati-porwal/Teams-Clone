import logo from "../../assets/logo.png";

const Navbar = () => {

	return (
		<>
			<nav className = "navbar navbar-expand-lg navbar-light bg-white">
				<div className = "container-fluid justify-content-between px-4">
					<a className = "navbar-brand" href = "#">
						<img src = {logo} alt = "Microsoft Logo" height = "23px" width = "108px" />
					</a>
					<button
						className = "navbar-toggler"
						type = "button"
						data-bs-toggle = "collapse"
						data-bs-target = "#navbarSupportedContent"
						aria-controls = "navbarSupportedContent"
						aria-expanded = "false"
						aria-label = "Toggle navigation">
						<span className = "navbar-toggler-icon"></span>
					</button>
					<div className = "collapse navbar-collapse" id = "navbarSupportedContent">
						<ul className = "navbar-nav me-auto mb-2 mb-lg-0">
							<li className = "nav-item">
								<a className = "nav-link active" aria-current = "page" href = "#">Teams</a>
							</li>
							<li className = "nav-item dropdown">
								<a className = "nav-link dropdown-toggle" href = "#">Products</a>
							</li>
							<li className = "nav-item dropdown">
								<a className = "nav-link dropdown-toggle" href = "#">Features</a>
							</li>
							<li className = "nav-item">
								<a className = "nav-link" href = "#">Pricing</a>
							</li>
							<li className = "nav-item dropdown">
								<a className = "nav-link dropdown-toggle" href = "#">Solutions</a>
							</li>
							<li className = "nav-item dropdown">
								<a className = "nav-link dropdown-toggle" href = "#">Resources</a>
							</li>
							<li className = "nav-item">
								<a className = "nav-link" href = "#">Support</a>
							</li>
						</ul>
						<div className = "d-flex gap-3">
							<button className = "btn custom-outline-black" type = "button">Download Teams</button>
							<button className = "btn custom-outline-black" type = "button">Sign in</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;