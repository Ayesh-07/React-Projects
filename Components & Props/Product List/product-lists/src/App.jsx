import React from "react";
import Product from "./Product";
import bag from './assets/bag.jpg'
import bracelet from './assets/bracelet.jpg'
import perfume  from './assets/perfume.jpg'
import ring from './assets/ring.jpg'
import sheo  from './assets/sheo.jpg'
import makeup from './assets/makeup.jpg'
import curtains  from './assets/curtains.jpg'
import watch from './assets/watch.jpg'
import earing  from './assets/earing.jpg'
import './index.css'

const App = () => {
  return (
    <div className="container">
      <Product name="Bags" price="500 RS" rating={4} image={bag} />
      <Product name="Rings" price="3000 RS" rating={5} image={ring} />
      <Product name="Makeup" price="25000 RS" rating={3} image={makeup} />
      <Product name="Curtains" price="30,000 RS" rating={4} image={curtains} />
      <Product name="Sandals" price="6800 RS" rating={3} image={sheo} />
      <Product name="Braclets" price="9000 RS" rating={2} image={bracelet} />
      <Product name="Perfume" price="5000 RS" rating={3}image={perfume} />
      <Product name="Earing" price="1200 RS" rating={4} image={earing}/>
      <Product name="Watch" price="9000 RS" rating={5} image={watch}/>
    </div>
  );
};

export default App;
