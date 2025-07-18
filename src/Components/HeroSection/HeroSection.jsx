import videoCall_img from '../../assets/videoCall_img.png';

const HeroSection = () => {

	return (
		<>
			<div className="container-fluid px-5 py-5 main-content">
				<div className="row mx-0 align-items-center">
					<div className="col-md-6 col-12 left-content">
						<h1>
							Grow your business with Microsoft Teams
						</h1>
						<p>
							Meet, chat, call, and collaborate with
							communications software that makes it easy to work, plan,
							and innovate together.
						</p>
						<div className="buttons">
							<button className="btn btn-primary">See plans and pricing</button>
							<button className="btn btn-outline">Sign in</button>
						</div>
					</div>
					<div className="col-md-6 col-12 right-content">
						<img src={videoCall_img} alt="Teams Hero" className="main-hero-img" />
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroSection;