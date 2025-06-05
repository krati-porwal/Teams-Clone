import TeamCards from "./TeamCards";
import CardData from "./CardData";

const TeamSection = () => {

	return (
		<>
			<div className="py-5 text-center add-to-team"> {/*row*/}
				<div className="title-add">
					<h2>Add to Teams</h2>
				</div>
				<div className="row mx-0 gy-5">
					{
						CardData.map((item, index) => (
							<div className="col-md-3 col-12" key={index}>
								<TeamCards  title={item.title} description={item.description} />
							</div>
						))
					}

				</div>
			</div>
		</>
	)
}

export default TeamSection;