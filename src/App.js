import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterableProductTable from './Components/FilterableProductTable';

const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function App() {
  
  return (
    <div className="App my-3 ">
      {/* <h1 className='text-center'>Liste des Produits</h1> */}
      <div className="container">
        <div className="row">
      <FilterableProductTable products={PRODUCTS}/>
      

        </div>
      </div>
    </div>
  );
}

export default App;
