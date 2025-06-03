const Price = () => {

	return (
		<>
			<div className = "py-5 text-center price">
				<div className = "title-price">
					<h2>Find the right Teams plan for your small business</h2>
				</div>
				<div className = "subtitle-Price">
					<p>
						There are several ways to get Teams for your small business.
						Compare plans and pricing to find the small business software solution that works best for you.
					</p>
				</div>
				<div className = "row mx-0 gy-5">
					<div className = "col-md-4">
						<div className = "price-card">
							<div className = "py-3 card-header">
								<h4 >Most Popular</h4>
							</div>
							<h4 id = 'price-title1'>Microsoft Teams Essentials</h4>
							<div className = "card-body">
								<h2 className = "pricing-card-title">₹ 115.00</h2>
								<small> user/month, paid yearly (Annual subscription—auto renews)</small>
								<small >GST extra as applicable</small>
								<button type = "button" className = "btn-price">Buy Now</button>
								<ul className = "tick-list">
									<li>Unlimited group meetings for up to 30 hours and 300 participants</li>
									<li>10 GB of cloud storage per user</li>
									<li>Real-time collaboration with file sharing, tasks, and polling</li>
									<li>Team meeting recordings with transcripts and live captions (English)</li>
									<li>Standard security with data encryption for meetings, chats, calls, and files</li>
									<li>Microsoft 365 Copilot, available as an add-on</li>
								</ul>
							</div>
						</div>
					</div>
					<div className = "col-md-4">
						<div className = "price-card">
							<h4 id = 'price-title2'>Microsoft 365 Business Basic</h4>
							<div className = "card-body">
								<h2 className = "pricing-card-title">₹ 145.00</h2>
								<small> user/month, paid yearly(Annual subscription—auto renews)</small>
								<small >GST extra as applicable</small>
								<br />
								<button type = "button" className = "btn-price">Buy Now</button>
								<h4 className = 'subheading'>Everything offered in Teams Essentials, plus:</h4>
								<ul className = "tick-list">
									<li>Identity and access management for up to 300 users​</li>
									<li>Web and mobile versions of Word, Excel, PowerPoint, Outlook, and other apps​</li>
									<li>Custom business email​</li>
									<li>Chat, call, meet​</li>
									<li>1 TB of cloud storage per user​</li>
									<li>10+ additional apps (including Microsoft Bookings, Planner, and Forms)</li>
								</ul>
							</div>
						</div>
					</div>
					<div className = "col-md-4">
						<div className = "price-card">
							<h4 id = 'price-title3'>
								Microsoft 365 Business Standard
							</h4>
							<div className = "card-body">
								<h2 className = "pricing-card-title">₹ 770.00</h2>
								<small> user/month, paid yearly (Annual subscription—auto renews)</small>
								<small >GST extra as applicable</small>
								<button type = "button" className = "btn-price">Buy Now</button>
								<h4 className = 'subheading'>Everything offered in Business Basic, plus:</h4>
								<ul className = "tick-list">
									<li> Identity and access management for up to 300 users</li>
									<li>Desktop, web, and mobile versions of Word, Excel, PowerPoint, Outlook, and other apps​</li>
									<li>Custom business email​</li>
									<li>Chat, call, meet, and host webinars​</li>
									<li>1 TB of cloud storage per user​</li>
									<li>10+ additional apps (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Price;