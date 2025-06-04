import iconH1 from '../../assets/Help_icon1.png';
import iconH2 from '../../assets/Help_icon2.avif';
import iconH3 from '../../assets/Help_icon3.avif';
import iconH4 from '../../assets/Help_icon4.avif';

const HelpSection = () => {

	return (
		<>
			<div className = "py-5 text-center help">
				<div className = "title">
					<h2>Need help?</h2>
				</div>
				<div className = "row mx-0 gy-5">
					<div className = "col-md-3">
						<div className = "card" >
							<img src = {iconH1} className = "card-img-top" alt="..." />
							<div className = "card-body">
								<h5 className = "card-title">Teams support</h5>
								<p className = "card-text">
									Find how-to articles, tutorials, FAQs, and instructional
									content to help you get started.
								</p>
							</div>
						</div>
					</div>
					<div className = "col-md-3">
						<div className = "card" >
							<img src = {iconH2} className = "card-img-top" alt="..." />
							<div className = "card-body">
								<h5 className = "card-title">Documentation</h5>
								<p className = "card-text">
									Explore guidance and learning resources to help your
									small business get the most out of Teams.
								</p>
							</div>
						</div>
					</div>
					<div className = "col-md-3">
						<div className = "card" >
							<img src = {iconH3} className = "card-img-top" alt="..." />
							<div className = "card-body">
								<h5 className = "card-title">Video trainings and tips</h5>
								<p className = "card-text">
									Subscribe to the Teams YouTube channel
									to learn more about the latest features.
								</p>
							</div>
						</div>
					</div>
					<div className = "col-md-3">
						<div className = "card" >
							<img src = {iconH4} className = "card-img-top" alt="..." />
							<div className = "card-body">
								<h5 className = "card-title">Quick start tutorial</h5>
								<p className = "card-text">
									Get up and running in Teams with the basic info you need
									to be productive right away.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default  HelpSection;