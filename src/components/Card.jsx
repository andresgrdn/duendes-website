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
      <a href="https://wa.me/593978774872?text=Me%20interesa%20este%20producto" target='_blank'>Comprar</a>
    </div>
  )
}

export default Card