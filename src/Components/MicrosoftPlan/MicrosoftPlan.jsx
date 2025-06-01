import Plan from '../../assets/plan.avif';
import './MicrosoftPlan.scss';

const MicrosoftPlan = () => {
    return (
        <>

            <div className="Plan-content container-fluid px-5 py-5">
                <div className="row align-items-center">
                      
                    {/*left-content-section*/}
                    <div className="col-md-6 left-content">

                        <h1>
                            Add Copilot to your Microsoft plan.
                        </h1>

                        <p>
                            Sign in to add Copilot to your existing Microsoft 365 business plan.
                        </p>
                        <p>
                            If you’re not an existing customer, buy a Microsoft 365 plan to get started.
                        </p>

                        <div className="buttons">
                            <button className="btn btn-primary">See Microsoft 365 pricing </button>
                            <button className="btn btn-outline">Learn more</button>
                        </div>

                    </div>

                    {/*Right-image-section*/}
                    <div className="col-md-6 right-content">
                        <img src={Plan} alt="Teams Hero" className="main-hero-img" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default MicrosoftPlan;