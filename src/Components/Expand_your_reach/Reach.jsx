import reach from '../../assets/reach.png';
import './reach.scss';

const Reach = () => {
    return (
        <>

            <div className="reach-content container-fluid px-5 py-5">

                <div className="row align-items-center">

                    {/*image-section*/}
                    <div className="col-md-6 left-content">
                        <img src={reach} alt="Teams Hero" className="main-hero-img" />
                    </div>


                     {/*Right content section*/}
                    <div className="col-md-6 right-content">

                        <h1>
                            Expand your reach with Teams Essentials
                        </h1>

                        <p>
                            Learn how Every Morning Consulting used Teams Essentials to not just
                            weather a difficult business environment but to thrive—reducing costs
                            while expanding access to new markets.
                        </p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Reach;
