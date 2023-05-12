import React from 'react'
import "./MilkCard.css"
export const MilkCard = () => {
  return (
    <div className='card-container'>
        <div className='encabezado'>
            <div className='img-container'>
                <img src="/static/images/Rectangle 22.jpg" alt="" />
                <div className='img'>
                <img src="/static/images/Elipse 11.jpg" alt="" />
                </div>
            </div>

        </div>
        <span>Crunchy Butterscotch </span>
        <div className='description'>
            <p>Butterscotch & Cashews</p>
            <div className='precio'>
                <p>Bs 18</p>

            </div>

        </div>

    </div>
  )
}

