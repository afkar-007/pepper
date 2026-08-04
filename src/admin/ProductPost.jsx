import { useState } from "react"
import '../styles/ProductPost.css'


function ProductPost() {
    const [name,setName]=useState("")
    const [image,setImage]=useState(null)
    const [brand,setBrand]=useState("")
    const [price,setPrice]=useState("")
    const [discount,setDiscount]=useState("")
    const [stock,setStock]=useState("")
    const [rating,setRating]=useState("")
    const [reviews,setReviews]=useState("")
  
    const [date,setDate]=useState("")
    const [category,setCategory]=useState("")

    // =============phones===============
      const [Ram,setRam]=useState("")
      const [Storage,setStorage]=useState("")    
      const [Processor,setProcessor]=useState("")
      const [Battery,setBattery]=useState("")
      const [Camera,setCamera]=useState("")
      const [Display,setDisplay]=useState("")
      const [PhoneDescription,setPhoneDescription]=useState("")



    // ============phones=================


    // ============= dress=====================
    const [size ,setSize]=useState("")      
    const [Color ,setColor]=useState("")
    const [Material ,setMaterial]=useState("")
    const [Fit ,setFit]=useState("")
    const [Gender ,setGender]=useState("")
    const [dressDescription ,setDressDescription]=useState("")
// ==============dress======================


// =================laptops====================

           const[Lram,setLram]=useState("")
           const[SSD,setSSD]=useState("")
           const[LProcessor,setLProcessor]=useState("")
           const[GraphicsCard,setGraphicsCard]=useState("")
           const[ScreenSize,setScreenSize]=useState("")
           const[LaptopDescription,setLaptopDescription]=useState("")


// ====================laptops=====================


// ============== headphones========================

         const [Driversize ,setDriverSize]=useState("")
         const [ANC ,setANC]=useState("")
         const [BatteryLife ,setBatteryLife]=useState("")
         const [BluetoothVersion ,setBluetoothVersion]=useState("")
         const [Weight ,setWeight]=useState("")
         const [HeadphoneDescription ,setHeadphoneDescription]=useState("")
        //  ======headphones=================================
    
// =================watch================

    const [WDisplay,setWDisplay]=useState("")
    const [WBattery,setWBattery]=useState("")
    const [WBluetoothVersion,setWBluetoothVersion]=useState("")
    const [GPS,setGPS]=useState("")
    const [WaterResistance,setWaterResistance]=useState("")
    const [WDescription,setWDescription]=useState("")

// ===================shoes============================
  const [type,setType]=useState("") 
  const [SGender,setSGender]=useState("")
  const [Scolor,setSColor]=useState("")
  const [Ssize,setSsize]=useState("")
  const [warranty,setWarrenty]=useState("")
  const [shoeDescription,setShoeDescription]=useState("")































  async function ProductPost(e) {
    e.preventDefault()

      const formdata= new FormData()
    formdata.append(  "name"     ,name           )  
    formdata.append(  "image"    ,image          )  
    formdata.append(  "brand"    ,brand          )
    formdata.append(  "price"    ,price          )
    formdata.append(  "discount" ,discount       )
    formdata.append(  "stock"    ,stock          )
    formdata.append(  "rating"   ,rating         )
    formdata.append(  "reviews"  ,reviews        )
    formdata.append(  "date"     ,date           )
    formdata.append(  "category" ,category       )

    // =====================phone=================

            formdata.append("ram", Ram   )    
            formdata.append("storage", Storage   )
            formdata.append("processor", Processor   )
            formdata.append("battery", Battery   )
            formdata.append("camera", Camera   )
            formdata.append("display", Display   )
            formdata.append("phoneDescription",  PhoneDescription  )
//   ==============================dress================================
            formdata.append("size", size )  
            formdata.append("color", Color )
            formdata.append("material", Material )
            formdata.append("fit",Fit  )
            formdata.append("gender", Gender )
            formdata.append("dressDescription",dressDescription  )
            // ===================laptops=======================
             formdata.append("lRam", Lram )            
             formdata.append("ssd", SSD )
             formdata.append("lProcessor",LProcessor  )
             formdata.append("graphicsCard",GraphicsCard  )
             formdata.append("screenSize", ScreenSize )
             formdata.append("laptopDescription", LaptopDescription )
            //  =================== headphones================
            formdata.append("driverSize", Driversize)            
            formdata.append("anc",ANC )
            formdata.append("batteryLife",BatteryLife )
            formdata.append("bluetoothVersion",BluetoothVersion )
            formdata.append("weight", Weight)
            formdata.append("headphoneDescription",HeadphoneDescription )

            // ==========================watch==============
            formdata.append("wDisplay",WDisplay )            
            formdata.append("wBattery",WBattery )
            formdata.append("wBluetoothVersion",WBluetoothVersion )
            formdata.append("gps", GPS)
            formdata.append("waterResistance",WaterResistance )
            formdata.append("wDescription", WDescription)

// ==============================shoes==================

            formdata.append("type",type )
            formdata.append("sGender",SGender )
            formdata.append("sColor",Scolor )
            formdata.append("sSize",Ssize )
            formdata.append("warrenty",warranty )
            formdata.append("shoeDescription",shoeDescription )





    const response = await fetch("https://pepper-backend-2.onrender.com/pepper/products/product",{
        method:"POST",
      
  body:formdata


    })

    const data = await response.json()
    if(response.ok){
        alert(data.message)
        setName("")
        setImage(null)
        setBrand("")
        setPrice("")
        setDiscount("")
        setStock("")
        setRating("")
        setReviews("")
        setDate("")
        setCategory("")
setRam("")
setStorage("")
setProcessor("")
setBattery("")
setCamera("")
setDisplay("")
setPhoneDescription("")

setSize("")
setColor("")
setMaterial("")
setFit("")
setGender("")
setDressDescription("")

setLram("")
setSSD("")
setLProcessor("")
setGraphicsCard("")
setScreenSize("")
setLaptopDescription("")

setDriverSize("")
setANC("")
setBatteryLife("")
setWeight("")
setHeadphoneDescription("")

setWDisplay("")
setWBattery("")
setWBluetoothVersion("")
setGPS("")
setWaterResistance("")
setWDescription("")

setType("")
setSGender("")
setSColor("")
setSsize("")
setWarrenty("")
setShoeDescription("")





    }else{
        alert(data.message)
    }
    

  }





















































  return (
    <>
    <div className="product-post">
        <h2>Add New Product</h2>
    
<input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} name="" id="" />
<br /><br />    
<input type="file" placeholder='image'  onChange={(e)=>setImage(e.target.files[0])} name="" id="" />
<br /><br />
<input type="text" placeholder='brand' value={brand} onChange={(e)=>setBrand(e.target.value)} name="" id="" />
<br /><br />
<input type="text" placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)} name="" id="" />
<br /><br />
<input type="text" placeholder='discount' value={discount} onChange={(e)=>setDiscount(e.target.value)} name="" id="" />
<br /><br />
<input type="text" placeholder='stock' value={stock} onChange={(e)=>setStock(e.target.value)} name="" id="" />
<br /><br />
<input type="text" placeholder='rating' value={rating} onChange={(e)=>setRating(e.target.value)} name="" id="" />
<br /><br />
<input type="text" placeholder='reviews' value={reviews} onChange={(e)=>setReviews(e.target.value)} name="" id="" />
<br /><br />


<input type="text" placeholder="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
 <label htmlFor="category">Category</label><select value={category} onChange={(e)=>setCategory(e.target.value)} name="" id="category">

<option value="">default</option>
<option value="phones">phone</option>
<option value="laptops">Laptops</option>
<option value="watch">watch</option>
<option value="dress">dress</option>
<option value="headphone">headphone</option>
<option value="shoes">shoes</option>


 </select>


 {/* category inputs */}
 <div className="specification">

{
    category==="phones" &&
    <div>
    <input type="text" value={Ram} placeholder="RAM"  onChange={(e)=>setRam(e.target.value)} />
    <input type="text" value={Storage} placeholder="Storage"  onChange={(e)=>setStorage(e.target.value)}/>    
    <input type="text" value={Processor} placeholder="Processor"  onChange={(e)=>setProcessor(e.target.value)}/>
    <input type="text" value={Battery} placeholder="Battery"  onChange={(e)=>setBattery(e.target.value)}/>
    <input type="text" value={Camera} placeholder="Camera"  onChange={(e)=>setCamera(e.target.value)}/>
    <input type="text" value={Display} placeholder="Display"  onChange={(e)=>setDisplay(e.target.value)}/>
    <input type="text" value={PhoneDescription} placeholder="Phone Description"  onChange={(e)=>setPhoneDescription(e.target.value)}/>
</div>
}

{
    category === "dress" &&
    <div>
    <input type="text" value={size} placeholder="size"  onChange={(e)=>setSize(e.target.value)} />
    <input type="text" value={Color} placeholder="Color"  onChange={(e)=>setColor(e.target.value)}/>    
    <input type="text" value={Material} placeholder="Material"  onChange={(e)=>setMaterial(e.target.value)}/>
    <input type="text" value={Fit} placeholder="Fit"  onChange={(e)=>setFit(e.target.value)}/>
    <input type="text" value={Gender} placeholder="Gender"  onChange={(e)=>setGender(e.target.value)}/>
    <input type="text" value={dressDescription} placeholder="dress Description"  onChange={(e)=>setDressDescription(e.target.value)}/>
    </div>
}
{
    category ==="laptops" &&
    <div>

 <input type="text" value={Lram} placeholder="Laptop's Ram"  onChange={(e)=>setLram(e.target.value)} />
    <input type="text" value={SSD} placeholder="SSD"  onChange={(e)=>setSSD(e.target.value)}/>    
    <input type="text" value={GraphicsCard} placeholder="Graphics Card"  onChange={(e)=>setGraphicsCard(e.target.value)}/>
    <input type="text" value={LProcessor} placeholder="Laptop's Processor"  onChange={(e)=>setLProcessor(e.target.value)}/>
    <input type="text" value={ScreenSize} placeholder="Screen Size"  onChange={(e)=>setScreenSize(e.target.value)}/>
    <input type="text" value={LaptopDescription} placeholder="Laptop Description"  onChange={(e)=>setLaptopDescription(e.target.value)}/>


    </div>
}

{
    category ==="headphone" &&
    <div>

 <input type="text" value={Driversize} placeholder="Driversize"  onChange={(e)=>setDriverSize(e.target.value)} />
    <input type="text" value={ANC} placeholder="ANC"  onChange={(e)=>setANC(e.target.value)}/>    
    <input type="text" value={BatteryLife} placeholder="Battery Life"  onChange={(e)=>setBatteryLife(e.target.value)}/>
    <input type="text" value={BluetoothVersion} placeholder="Bluetooth Version"  onChange={(e)=>setBluetoothVersion(e.target.value)}/>
    <input type="text" value={Weight} placeholder="Weight"  onChange={(e)=> setWeight(e.target.value)}/>
    <input type="text" value={HeadphoneDescription} placeholder="Headphone Description"  onChange={(e)=>setHeadphoneDescription(e.target.value)}/>


    </div>
}


{
    category ==="watch" &&
    <div>

 <input type="text" value={WDisplay} placeholder="Watch's Display"  onChange={(e)=>setWDisplay(e.target.value)} />
    <input type="text" value={WBattery} placeholder="Watch's Battery"  onChange={(e)=>setWBattery(e.target.value)}/>    
    <input type="text" value={GPS} placeholder="GPS"  onChange={(e)=>setGPS(e.target.value)}/>
    <input type="text" value={WBluetoothVersion} placeholder="Bluetooth Version"  onChange={(e)=>setWBluetoothVersion(e.target.value)}/>
    <input type="text" value={WaterResistance} placeholder="Water Resistance"  onChange={(e)=> setWaterResistance(e.target.value)}/>
    <input type="text" value={WDescription} placeholder="Watch's Description "  onChange={(e)=>setWDescription(e.target.value)}/>


    </div>
}

{
    category ==="shoes" &&
    <div>

 <input type="text" value={type} placeholder=" shoe type eg:sneaker"  onChange={(e)=>setType(e.target.value)} />
    <input type="text" value={SGender} placeholder="Gender"  onChange={(e)=>setSGender(e.target.value)}/>    
    <input type="text" value={Scolor} placeholder="Color"  onChange={(e)=>setSColor(e.target.value)}/>
    <input type="text" value={Ssize} placeholder="Shoe's sizes"  onChange={(e)=>setSsize(e.target.value)}/>
    <input type="text" value={warranty} placeholder="Water Resistance"  onChange={(e)=> setWarrenty(e.target.value)}/>
    <input type="text" value={shoeDescription} placeholder="shoe Description "  onChange={(e)=>setShoeDescription(e.target.value)}/>


    </div>
}




</div>

    
 <button onClick={(e)=>ProductPost(e)}>submit</button>

    </div>
    </>
  )
}

export default ProductPost

