import React from 'react'
import Docentes from './Docentes'
import ShopStyle from '../Styles/Shop.module.css'

const Shop = ({ docentes, setClase }) => {
  return (
    <div>
      <div className={ShopStyle.listContainer}>
        {docentes.map((item) => (
          <Docentes key={item.id} setClase={setClase} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Shop
