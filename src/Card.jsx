import './Card.css'

import Description from "./Description"

const Card = () => {
  return (
    <div className="Card">
      <img
        src="https://cdna.artstation.com/p/assets/images/images/029/618/236/large/primitivo-felias-iii-duwendecomposite-v4.jpg?1598121850"
        alt="Duende"
        className='Card_img' />
      <Description />
    </div>
  )
}

export default Card