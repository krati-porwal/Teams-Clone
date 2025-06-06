const PriceCards = ({ index, isPopular, title, price, note, extraNote, subheading, features }) => {

  return (
    <>
      <div className="price-card">
        {isPopular && (
          <div className="py-3 card-header">
            <h4 >Most Popular</h4>
          </div>
        )}
        <h4 className={index !== 0 ? 'pt-custom-title' : 'pt-1'}>{title}</h4>
        <div className="card-body">
          <h2 className="pricing-card-title">{price}</h2>
          <p> {note}</p>
          <p>{extraNote}</p>
          <button type="button" className="btn-price">Buy Now</button>
          <div className="list">
            {subheading && <h4 className="subheading">{subheading}</h4>}
            <ul className="tick-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceCards;