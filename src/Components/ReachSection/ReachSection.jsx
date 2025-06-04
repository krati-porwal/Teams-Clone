import reach from '../../assets/reach.png';

const ReachSection = () => {

	return (
		<>
			<div className = "container-fluid px-5 py-5 reach-content">
				<div className = "row mx-0 align-items-center">
					<div className = "col-md-6 col-12 left-content">
						<img src = {reach} alt = "Teams Hero" className = "img" />
					</div>
					<div className = "col-md-6 col-12 right-content">
						<h1>
							Expand your reach with Teams Essentials
						</h1>
						<p>
							Learn how Every Morning Consulting used Teams Essentials to not just
							weather a difficult business environment but to thrive—reducing costs
							while expanding access to new markets.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default ReachSection ;