const TeamCards = ({ title, description }) => {

  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </>
  )
}

export default TeamCards;
