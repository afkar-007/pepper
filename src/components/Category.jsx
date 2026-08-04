import React from 'react'
import phone from '../assets/phone1.png'
import laptop from '../assets/laptop2.png'
import headphone from '../assets/head1.png'
import dress from '../assets/dress1.png'
import watch1 from '../assets/watch1.png'
import shoes from '../assets/shoe1.png'
import { useNavigate } from 'react-router-dom'

import '../components_Styles/Category.css'

function Category() {
    const navigate=useNavigate("")


  return (
    <>
<section className="category-section">

   <h2 className="category-title">
    Shop By Category
   </h2>

<div className="category-container">

    <div className="category-card" onClick={()=>navigate('/products/phones')}>
        <img src={phone} alt="" />
        <h3 className="category-name">Phones</h3>
        <p className="category-sub">120+ Products</p>
    </div>

    <div className="category-card" onClick={()=>navigate('/products/Laptops')}>
        <img src={laptop} alt="" />
        <h3 className="category-name">Laptops</h3>
        <p className="category-sub">25+ Products</p>
    </div>

    <div className="category-card" onClick={()=>navigate('/products/headphone')}>
        <img src={headphone} alt="" />
        <h3 className="category-name">Audio</h3>
        <p className="category-sub">60+ Products</p>
    </div>

      <div className="category-card" onClick={()=>navigate('/products/dress')}>
        <img src={dress} alt="" />
        <h3 className="category-name">Fashion</h3>
        <p className="category-sub">120+ Products</p>
    </div>

    <div className="category-card" onClick={()=>navigate('/products/watch')}>
        <img src={watch1} alt="" />
        <h3 className="category-name">watch</h3>
        <p className="category-sub">50+ Products</p>
    </div>

    <div className="category-card" onClick={()=>navigate('/products/shoes')}>
        <img src={shoes} alt="" />
        <h3 className="category-name">shoes</h3>
        <p className="category-sub">30+ Products</p>
    </div>






</div>

</section>
    
    
    
    </>
  )
}

export default Category