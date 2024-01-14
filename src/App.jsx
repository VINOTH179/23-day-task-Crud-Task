import React,{useState} from 'react'
import Card from './components/Card'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  let data=[
    {
    title:"Fancy Product",
    price2:" $40.00 - $80.00",
    sale:false,
    star:false
    },
    {
        title:"Special Item",
        price1:"$20.00",
        price2:"$18.00",
        sale:"sale",
        star:"bi-star-fill"   
    },
    {
        title:"Sale Item",
        price1:"$50.00", 
        price2:"$25.00",
        sale:"sale",
        star:"false"
    },
    {
    title:"Popular Item",
    price2:" $40.00 ",
    sale:false,
    star:"bi-star-fill"
    },
    {
    title:"Sale Item",
    price1:" $50.00",
    price2:"$25.00",
    sale:"sale"
    },
    {
    title:"Fancy Product",
    price2:" $120.00 - $280.00",
    sale:false
    },
    {
    title:"Special Item",
    price1:" $20.00",
    price2:"$18.00",
    sale:"sale",
    star:"bi-star-fill"
    },
    {
    title:"Popular Item",
    price2:" $40.00 ",
    sale:false,
    star:"bi-star-fill"
    }
]
  let [cart,setCart] = useState(0)
  return <>
    <TopBar cart={cart} setCart={setCart}/>
    <Header cart={cart} setCart={setCart}/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
      data.map((e,i)=>{
        return <Card cart={cart} setCart={setCart} data={e} key={i}/>
      })
     }
            
          </div>
      </div>
    </section>
    <Footer cart={cart} setCart={setCart}/>
  </>
}

export default App