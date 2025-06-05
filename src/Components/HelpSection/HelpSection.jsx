import CardData from "./CardData";
import HelpCards from "./HelpCards";


const HelpSection = () => {

	return (
		<>
			<div className="py-5 text-center help">
				<div className="title">
					<h2>Need help?</h2>
				</div>
				<div className="row mx-0 gy-5">
					{
								CardData.map((item, index) => (
							<div className="col-md-3 col-12" key={index}>
								<HelpCards icon={item.icon} title={item.title} description={item.description} />
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default HelpSection;