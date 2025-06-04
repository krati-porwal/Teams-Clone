import copilot from '../../assets/Copilot.png';

const StreamlineSection = () => {

	return (
		<>
			<div className = "container-fluid px-5 py-5 main">
				<div className = "row mx-0 align-items-center">
					<div className = "col-md-6 left-content">
						<h1>
							Streamline communication with Copilot in Teams
						</h1>
						<p>
							Track discussions in real time and summarize conversations.
						</p>
						<div className = "buttons">
							<button className = "btn btn-primary">Shop now</button>
							<button className = "btn btn-outline">Learn more</button>
						</div>
					</div>
					<div className = "col-md-6 right-content">
						<img src = {copilot} className = "main-copilot-img" />
					</div>
				</div>
			</div>
		</>
	)
}

export default StreamlineSection;