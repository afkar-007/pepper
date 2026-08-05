import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/product.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import MobileBottomNav from "../components/MobileBottomNav";




function Product() {
    const {GetcartContext,getWishlistContext}=useContext(CartContext)
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()
    const {category}=useParams()
    const[product,setProduct]=useState([])
    const [filter,setFilter]=useState("")
    const [search,setSearch]=useState("")


    useEffect(()=>{

        getProducts()
    },[search,filter,category])

    async function getProducts() {
try{
         setLoading(true);
        const token = localStorage.getItem("token")
        
        const response= await fetch(`https://pepper-backend-2.onrender.com/pepper/products/getProducts?category=${category}&filter=${filter}&search=${search}`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        })
        
        const data = await response.json()
        console.log(data);
        if(response.ok){
            setProduct(data.data)
        }}catch(err){
console.log(err);

        }
        finally{
    setLoading(false);
        }
    }

    async function addtocart(id) {
        const token = localStorage.getItem("token")
        const response= await fetch("https://pepper-backend-2.onrender.com/pepper/products/postcart",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                productId:id
            })
        })
        const data = await response.json()
        if(response.ok){
            
            GetcartContext()
        }
        else{
            alert(data.message)
        }
        
    }


    async function Addtowishlist(id) {
        const token = localStorage.getItem("token")
        const response = await fetch("https://pepper-backend-2.onrender.com/pepper/products/postWishlist",{
            method:"POST",
              headers:{
                "Content-Type": "application/json",
                authorization:`Bearer ${token}`
            },
            body:JSON.stringify({
                productId:id
            })
        })

        const data =await response.json()
        if(response.ok){
            
            getWishlistContext()
        }else{
            alert(data)
        }
        
    }











  return (
   <>
   <Navbar/>

<div className="search-section">
    <input
    onChange={(e)=>setSearch(e.target.value)}
      type="text"
      className="product-search"
      placeholder="🔍 Search products..."
    />
  </div>


<div className="filter-box">
  <select
    className="premium-select"
    onChange={(e) => setFilter(e.target.value)}
  >
    <option  value="">✨ Default</option>
    <option  value="low">📈 Price:  Low to High</option>
    <option  value="high">📉 Price: High to Low</option>
    <option  value="highRating"> ⭐ Rating: High to Low</option>
  </select>
</div>


 
   
   <div className="products-page">
    

    <div className="page-title">
        
        
    </div>

    {loading ? (
    <div className="loader-container">
        <div className="loader"></div>
        <p>Loading Products...</p>
    </div>
) : (

    <div className="products-wrapper">

        {product.map((item)=>(

        <div className="product-card" key={item._id}>

            {/* Left */}

            <div className="left-section">

                <div className="image-box">

                    <img
                    src={`https://pepper-backend-2.onrender.com/uploads/${item.image}`}
                    alt={item.name}
                    className="product-image"
                    onClick={()=>navigate(`/productsDetails/${item._id}`)}
                    />

                </div>

            </div>

            {/* Center */}

            <div className="middle-section"  onClick={()=>navigate(`/productsDetails/${item._id}`)}>

                <p className="brand">

                    {item.brand}

                </p>

                <h2 className="product-name"  onClick={()=>navigate(`/productsDetails/${item._id}`)}>

                    {item.name}

                </h2>

                <div className="rating-row"  onClick={()=>navigate(`/productsDetails/${item._id}`)}>

                    <span className="star">
                        ★★★★★ {item.rating}
                    </span>

                    <span className="review">

                        ({item.reviews} Reviews)

                    </span>

                </div>

                <p className="description"  onClick={()=>navigate(`/productsDetails/${item._id}`)}>

                    {
                        item.phoneDescription ||
                        item.laptopDescription ||
                        item.headphoneDescription ||
                        item.watchDescription ||
                        item.shoeDescription ||
                        item.dressDescription
                    }

                </p>

            </div>

            {/* Right */}

            <div className="right-section">

                <div className="price-box"  onClick={()=>navigate(`/productsDetails/${item._id}`)}>

                    <span className="discount">

                        {item.discount}% OFF

                    </span>

                    <h2  onClick={()=>navigate(`/productsDetails/${item._id}`)}>

                        ₹{item.price}

                    </h2>

                </div>

                <div className="delivery-box">

                    <span>

                        FREE Delivery

                    </span>

                    <p>

                        {item.date}

                    </p>

                </div>

                <div className="stock">

                    {item.stock>0 ? "In Stock" : "Out Of Stock"}

                </div>

                <div className="button-group">

                    <button className="cart-btn" onClick={()=>addtocart(item._id)}>
    
                         
                        Add To Cart

                    </button>

                    <button className="buy-btn" onClick={()=>Addtowishlist(item._id)}>

                    Add to wishlist

                    </button>

                </div>

            </div>

        </div>

        ))}

    </div>)}

</div>



<MobileBottomNav/>
   </>
  )
}

export default Product
