import SmallBusinessCards from "./SmallBusinessCards";
import CardData from "./CardData";

const SmallBusinessSection = () => {

	return (
		<>
			<div className="py-5 text-center small-business">
				<div className="text-center title">
					<h2>Small business software made for all the ways you work</h2>
				</div>
				<div className="text-center subtitle">
					<p>
						Easily communicate with customers and employees.
						create, share, and store files securely from a single cloud-first platform.
					</p>
				</div>
				<div className="row mx-0 gy-5">
					{
						CardData.map((item, index) => (
							<div className="col-md-3 col-12" key={index}>
								<SmallBusinessCards icon={item.icon} title={item.title} description={item.description} />
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default SmallBusinessSection;