import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
// importing Database
import products from './db/data'
import  Card  from "./components/Card";


function App() {

  const [selectedCategory,setSelectedCategory] = useState(null)

  // ---------------input filter-----------------

  const [query,setQuery] = useState('')

  const handleInputChange = (event) => {
    setQuery(event.target.value)
    
  }

    const filteredItems = products.filter((product) => 
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );


   // ---------------Radio filter-----------------

   const handleChange = (event) => {
      setSelectedCategory(event.target.value)
   }


   // ---------------Buttons filter-----------------
   const handleClick = (event) =>{
    setSelectedCategory(event.target.value)
   }

   function filteredData(products,selected,query){
    let filteredProducts = products

    // filtering input items 
    if (query){
      filteredProducts = filteredItems
    }

    // selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category,color,company,newPrice,prevPrice,title}) => 
        category === selected ||
        company === selected ||
        newPrice === selected ||
        prevPrice === selected ||
        title === selected ||
        color === selected 
      );
    }
    return filteredProducts.map(
      ({img,title,star,reviews,prevPrice,newPrice}) => (
      <Card 
      key={Math.random()}
      img={img} 
      title={title} 
      star ={star} 
      reviews={reviews} 
      prevPrice={prevPrice} 
      newPrice={newPrice}
      />
      
      )
     
    )

   }
  
  const result = filteredData(products,selectedCategory,query)

  return (
   <>
    <Sidebar handleChange= {handleChange} />
    <Navigation query={query} handleInputChange= {handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    
   </>

  );
}


export default App;
// this exporting is for other file can use this component
