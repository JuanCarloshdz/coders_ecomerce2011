
import Product from './components/Product/Produc'

function App(  ) {


  return (
      <Product name="Shoes" 
        subtitle="In Stock"  
        productType="Running shoes" 
        raiting={4} 
        description="Esta es la descripcion "
        price={50.00} />
  
  );
}

export default App;
 