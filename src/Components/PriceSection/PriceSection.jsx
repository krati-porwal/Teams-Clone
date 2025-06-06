import CardData from './CardData.js';
import PriceCards from './PriceCards';

const PriceSection = () => {
	return (
		<div className="py-5 text-center price">
			<div className="title-price">
				<h2>Find the right Teams plan for your small business</h2>
			</div>
			<div className="subtitle-Price">
				<p>
					There are several ways to get Teams for your small business.
					Compare plans and pricing to find the small business software solution that works best for you.
				</p>
			</div>
			<div className="row mx-0 gy-5">
				{CardData.map((item, index) => (
					<div className="col-md-4 col-12" key={index}>
						<PriceCards
							index={index}
							isPopular={item.isPopular}
							title={item.title}
							price={item.price}
							note={item.note}
							extraNote={item.extraNote}
							subheading={item.subheading}
							features={item.features}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PriceSection;