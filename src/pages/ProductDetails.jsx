import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ProductDetails.css'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import MobileBottomNav from "../components/MobileBottomNav";

function ProductDetails() {
    const {GetcartContext,getWishlistContext}=useContext(CartContext)
    const {id}=useParams()
    const [loading, setLoading] = useState(true);

    const [product,setProduct]=useState(null)

    useEffect(()=>{
       getoneProduct()
    },[id])

    async function getoneProduct() {
         setLoading(true);
         const token = localStorage.getItem("token")

        const response = await fetch(`https://pepper-backend-2.onrender.com/pepper/products/getoneProduct/${id}`,{
             headers:{
                authorization:`Bearer ${token}`
            }
     
        })


       
        
        const data = await response.json()
         console.log(data);
        if(response.ok){
            setProduct(data.data)
        }else{
         console.log("product not fetched");
         
        } 
         setLoading(false);
    }


  if (loading) {
  return (
    <>
      <Navbar />

      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Product...</p>
      </div>
    </>
  );
}

if (!product) {
  return (
    <>
      <Navbar />
      <h2>Product Not Found</h2>
    </>
  );
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
    
    <div className="productPage">

<div className="productContainer">

<div className="leftSection">

<div className="imageCard">
<img  src={product.image} alt="" />
</div>

</div>

<div className="rightSection">

<p className="brand">{product.brand}</p>

<h1 className="title">{product.name}</h1>

<div className="rating">

★★★★★

<span className="review">
({product.reviews} Reviews)
</span>

</div>

<div className="price">

<h2 className="currentPrice">
₹{product.price}
</h2>



<span className="discount">
{product.discount}% OFF
</span>




</div>

<p className="description">
{product.description}
</p>
{/* =========================specification================ */}

<div className="specGrid">

 {product.processor && <div className="spec">
<h4>Processor</h4>
<p>{product.processor}</p>
</div>}

 {product.camera && <div className="spec">
<h4>Camera</h4>
<p>{product.camera}</p>
</div>}

 {product.battery && <div className="spec">
<h4>Battery</h4>
<p>{product.battery}</p>
</div>}

 {product.ram && <div className="spec">
<h4>RAM</h4>
<p>{product.ram}</p>
</div>}

 {product.storage && <div className="spec">
<h4>Storage</h4>
<p>{product.storage}</p>
</div>}

 {product.date && <div className="spec">
<h4>Delivery Date</h4>
<p>{product.date}</p>
</div>}



 {product.phoneDescription && <div className="spec">
<h4>Description</h4>
<p>{product.phoneDescription}</p>
</div>}

{/* =================dress================= */}

 {product.size && <div className="spec">
<h4>Size</h4>
<p>{product.size}</p>
</div>}


 {product.color && <div className="spec">
<h4>Colors</h4>
<p>{product.color}</p>
</div>}


 {product.material && <div className="spec">
<h4>material</h4>
<p>{product.material}</p>
</div>}


 {product.fit && <div className="spec">
<h4>FIT</h4>
<p>{product.fit}</p>
</div>}


 {product.gender && <div className="spec">
<h4>Gender</h4>
<p>{product.gender}</p>
</div>}



 {product.dressDescription && <div className="spec">
<h4>DEScription</h4>
<p>{product.dressDescription}</p>
</div>}

{/* ===================laptops======================== */}

 {product.lRam && <div className="spec">
<h4>RAM</h4>
<p>{product.lRam}</p>
</div>}



 {product.ssd && <div className="spec">
<h4>Storage</h4>
<p>{product.ssd}</p>
</div>}



 {product.lProcessor && <div className="spec">
<h4>Processor</h4>
<p>{product.lProcessor}</p>
</div>}



 {product.graphicsCard && <div className="spec">
<h4>graphics Card</h4>
<p>{product.graphicsCard}</p>
</div>}



 {product.screenSize && <div className="spec">
<h4>Screen Size</h4>
<p>{product.screenSize}</p>
</div>}



 {product.laptopDescription && <div className="spec">
<h4>Description</h4>
<p>{product.laptopDescription}</p>
</div>}


{/* ================headphones========================= */}

 {product.driverSize && <div className="spec">
<h4>Driver Size</h4>
<p>{product.driverSize}</p>
</div>}




 {product.anc && <div className="spec">
<h4>Noise Cancellation</h4>
<p>{product.anc}</p>
</div>}




 {product.batteryLife && <div className="spec">
<h4>Battery Life</h4>
<p>{product.batteryLife}</p>
</div>}

 {product.bluetoothVersion && <div className="spec">
<h4>Bluetooth Version</h4>
<p>{product.bluetoothVersion}</p>
</div>}

 {product.weight && <div className="spec">
<h4>Weight</h4>
<p>{product.weight}</p>
</div>}


 {product.headphoneDescription && <div className="spec">
<h4>Description</h4>
<p>{product.headphoneDescription}</p>
</div>}


 {product.wDisplay && <div className="spec">
<h4>Display</h4>
<p>{product.wDisplay}</p>
</div>}

 {product.wBattery && <div className="spec">
<h4>Battery</h4>
<p>{product.wBattery}</p>
</div>}



 {product.wBluetoothVersion && <div className="spec">
<h4>Bluetooth Version</h4>
<p>{product.wBluetoothVersion}</p>
</div>}


 {product.gps && <div className="spec">
<h4>GPS</h4>
<p>{product.gps}</p>
</div>}


 {product.waterResistance && <div className="spec">
<h4>Water Resistance</h4>
<p>{product.waterResistance}</p>
</div>}


 {product.wDescription && <div className="spec">
<h4>Description</h4>
<p>{product.wDescription}</p>
</div>}

{/* ----------shoes----------- */}

 {product.type && <div className="spec">
<h4>type</h4>
<p>{product.type}</p>
</div>}

 {product.sGender && <div className="spec">
<h4>Gender</h4>
<p>{product.sGender}</p>
</div>}

 {product.sColor && <div className="spec">
<h4>Colors</h4>
<p>{product.sColor}</p>
</div>}

 {product.sSize && <div className="spec">
<h4>Sizes</h4>
<p>{product.sSize}</p>
</div>}

 {product.warrenty && <div className="spec">
<h4>Warrenty</h4>
<p>{product.warrenty}</p>
</div>}

 {product.shoeDescription && <div className="spec">
<h4>Description</h4>
<p>{product.shoeDescription}</p>
</div>}


</div>

<div className="buttonGroup">

<button className="cart" onClick={()=>addtocart(product._id)}>
Add To Cart
</button>

<button className="buy" onClick={()=>Addtowishlist(product._id)}>
Add to Wishlist
</button>

</div>

<div className="delivery">

<h3>🚚 Delivery Information</h3>

<p>
Free Delivery • Secure Payment • 7 Days Replacement •
1 Year Warranty • Premium Customer Support
</p>

</div>

</div>

</div>

</div>
    
    
    <MobileBottomNav/>
    
</>
  )
}

export default ProductDetails