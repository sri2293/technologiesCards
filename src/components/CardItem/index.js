// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardItemContainer} = props
  const {title, description, imgUrl, className} = cardItemContainer

  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img className="img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
