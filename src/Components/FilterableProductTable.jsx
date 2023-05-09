import React, { Component } from 'react'
// import ReactDOM from 'react-dom/client';



function ProductRow({ product }) {
    const name = product.stocked ? product.name : <span className='text-danger'>{product.name}</span>
    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
}

function ProductCategoryRow({ category }) {
    return <tr>
        <th colSpan="2">{category}</th>
    </tr>

}

function ProductTable({ products, inStockOnly, filterText }) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if (inStockOnly && !product.stocked) {
            return
        }
        
        if (product.name.indexOf(filterText) === -1) {
            return
        }
        if (product.catefory !== lastCategory) {
            lastCategory = product.category
            rows.push(<ProductCategoryRow key={lastCategory} category={lastCategory} />)
        }
        rows.push(<ProductRow key={product.name} product={product} />)
    })
    return <div className="container">
        <div className="row">
    <table className='table'>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>

            </tr>
        </thead>
        <tbody>{rows}</tbody>

    </table>

        </div>

    </div>

}

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }
    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange(e){
        this.props.onStockChange(e.target.checked)
    }


    render() {
        const {filterText, inStockOnly} = this.props
        return <div className="container">
            <div className="row">
        <div className='mb-2'>
            <div className='form-group mb-2'>
                <input type="text" value={filterText} className='form-control w-50' placeholder='Recherchez un produit' onChange={this.handleFilterTextChange}/>
            </div>

            <div className='form-check '>
                <input type="checkbox"  checked={inStockOnly} className='form-check-input' id='stock' onChange={this.handleInStockChange}/>
                <label htmlFor="stock" className='form-check-label'>Produit en stock seulement</label>

            </div>

        </div>

            </div>

        </div>
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText : "",
            inStockOnly : false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange (filterText) {
this.setState({filterText})
    }

    handleInStockChange  (inStockOnly) {
        this.setState({inStockOnly})
            }
    render() {
        const { products } = this.props
        return <React.Fragment>
            {JSON.stringify(this.state)}
            <SearchBar 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onStockChange={this.handleInStockChange}/>
            <ProductTable products={products} 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}/>
        </React.Fragment>
    }

}
//  
export default FilterableProductTable
