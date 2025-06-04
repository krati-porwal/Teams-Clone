import icon1 from '../../assets/1st_icon.png';
import icon2 from '../../assets/2nd_icon.png';
import icon3 from '../../assets/3rd_icon.png';
import icon4 from '../../assets/4th_icon.png';

const SmallBusinessSection = () => {

	return (
		<>
			<div className = "py-5 text-center small-business">
				<div className = "title text-center">
					<h2>Small business software made for all the ways you work</h2>
				</div>
				<div className = "subtitle text-center">
					<p>
						Easily communicate with customers and employees.
						create, share, and store files securely from a single cloud-first platform.
					</p>
				</div>
				<div className = "row mx-0 gy-5">
					<div className = "col-md-3 col-12">
						<div className = "card" >
							<img src = {icon1} className = "card-img-top" alt = "..." />
							<div className = "card-body">
								<h5 className = "card-title">Meet from anywhere</h5>
								<p className = "card-text">
									Start meetings with anyone and
									boost engagement with virtual backgrounds, recordings, transcriptions, and AI-powered recaps.
								</p>
							</div>
						</div>
					</div>
					<div className = "col-md-3 col-12">
						<div className = "card" >
							<img src = {icon2} className = "card-img-top" alt = "..." />
							<div className = "card-body">
								<h5 className = "card-title">Chat with anyone</h5>
								<p className = "card-text">
									Get work done with people inside and outside your company.
									Send messages, react with emojis, create teams, and coordinate events—all from one app.
								</p>
							</div>
						</div>
					</div>
					<div className = "col-md-3 col-12">
						<div className = "card" >
							<img src = {icon3} className="card-img-top" alt = "..." />
							<div className = "card-body">
								<h5 className = "card-title">Get things done in one place</h5>
								<p className = "card-text">
									Collaborate on documents in real time and reduce
									context switching by working in Microsoft 365 apps right from Teams.
								</p>
							</div>
						</div>
					</div>
					<div className = "col-md-3 col-12">
						<div className = "card" >
							<img src = {icon4} className = "card-img-top" alt = "..." />
							<div className = "card-body">
								<h5 className = "card-title">Stay secure and productive</h5>
								<p className = "card-text">
									Proactively reduce risk while helping employees stay in the flow of work.
									Have peace of mind knowing sensitive information is encrypted in all chats, calls, meetings, and files.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SmallBusinessSection;