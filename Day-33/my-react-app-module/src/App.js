import logo from "./logo.svg";
import "./App.css";
import yellow from "./img/image-yellow.png";
import aqua from "./img/image-aqua.png";
import rose from "./img/image-rose.png";
import steel from "./img/image-steel.png";
import arrow from "./img/arrow.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";
import Product1 from "./Product1";
import Product3 from "./Product3";
import Product4 from "./Product4";
import ProductFunc from "./ProductFunc";
import ProductFunc1 from "./ProductFunc1";
import ProductFunc3 from "./ProductFunc3";
import ProductFunc2 from "./ProductFunc2";
import products from "./Seed";
import { useState } from "react";

function App() {

    const [productsList , setProducstList] = useState(products)




    function handleProductUpVote(productID) {
        console.log('upvoted', productID);
        const foundProduct = products.filter(product => {
            if(product.id == productID){
                return product
            }
        })
        // console.log(foundProduct[0].votes);

        /// change votes in product array
        // console.log(products)
        const newProducts = productsList.map(product => {
            if(product.id === productID) {
                return Object.assign({},product,{
                    votes : product.votes + 1
                })
            } else {
                return product;
            }
        })
        console.log(newProducts)
        setProducstList(newProducts)
    }


    const productComponents = productsList.map((product) => {
        return <ProductFunc url = { product.url }
        id= {product.id}
        title = { product.title }
        votes = { product.votes }
        submitterAvatarUrl = { product.submitterAvatarUrl }
        productImageUrl = { product.productImageUrl }
        description = { product.description }
        stars = { product.stars }
        onVote={handleProductUpVote}
        />
    })
    return (
        // <div className="App container">
        //   <h2> Popular Products</h2>
        //   <hr></hr>
        //   {/* yellow */}
        //   <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        //     <img src={yellow} className="mainImg" />

        //     <div className="right w-25">
        //       <div className="title">
        //         <img src={arrow} alt="logo" />
        //         <h5>55</h5>
        //       </div>
        //       <a className="App-link" href="#">
        //         Haught or Naught
        //       </a>
        //       <p className="text-start">High-minded or absent-minded? You decide.</p>
        //       <div className="bottom">
        //         Submitted by : <img src={logo} className="App-logo" alt="logo" />
        //       </div>
        //     </div>
        //   </div>
        //   {/* aqua  */}
        //   <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        //     <img src={aqua} className="mainImg" />

        //     <div className="right w-25">
        //       <div className="title">
        //         <img src={arrow} alt="logo" />
        //         <h5>44</h5>
        //       </div>
        //       <a className="App-link" href="#">
        //         Yellow Pail
        //       </a>
        //       <p className="text-start">On-demand sand castle construction expertise.</p>
        //       <div className="bottom">
        //         Submitted by : <img src={logo} className="App-logo" alt="logo" />
        //       </div>
        //     </div>
        //   </div>

        //   {/* steel */}
        //   <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        //     <img src={steel} className="mainImg" />

        // <div className="right w-25">
        //   <div className="title">
        //     <img src={arrow} alt="logo" />
        //     <h5>42</h5>
        //   </div>
        //   <a className="App-link" href="#">
        //     Tinfoild: Tailored tinfoil hats
        //   </a>
        //   <p className="text-start">We already have your measurements and shipping address</p>
        //   <div className="bottom">
        //         Submitted by : <img src={logo} className="App-logo" alt="logo" />
        //       </div>
        //     </div>
        //   </div>

        //   {/* rose */}
        //   <div className="main container d-flex gap-5 justify-content-center align-items-center my-2">
        //     <img src={rose} className="mainImg" />

        // <div className="right w-25">
        //   <div className="title">
        //     <img src={arrow} alt="logo" />
        //     <h5>23</h5>
        //   </div>
        //   <a className="App-link text-start" href="#">
        //     Supermajority: The Fantasy Congress League
        //   </a>
        //   <p className="text-start">Earn points when your favorite policticians pass legislation.</p>
        //   <div className="bottom">
        //         Submitted by : <img src={logo} className="App-logo" alt="logo" />
        //       </div>
        //     </div>
        //   </div>
        // </div>
        // <div className="container">
        <div > {
            /* <Product />
                  <Product1 />
                  <Product3 />
                  <Product4 />
                  <ProductFunc />
                  <ProductFunc1 />
                  <ProductFunc3 />
                  <ProductFunc2 /> */
        } { productComponents } </div>
        
    );

}

export default App;