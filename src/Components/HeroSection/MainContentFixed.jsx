import videoCall_img from '../../assets/videoCall_img.png';
import './Hero.scss';

function MainContent(){
    return(
        <>

            <div className="main-content container-fluid px-5 py-5">
                <div className="row align-items-center">

                    <div className="col-md-6 left-content">

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

                    <div className="col-md-6 right-content">
                    <img src={videoCall_img} alt="Teams Hero" className="main-hero-img" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default MainContent;