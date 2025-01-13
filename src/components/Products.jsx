import products from "../data/products"

export default function Products() {
    return (
        <main className="products-container">
            <h1>Products</h1>
            <select name="product-selection">
                {products.map((product) => (
                    <option value={product.name} key={product.id} className="product-option">{product.name}</option>
                ))}
            </select>
            <div>
                {products.map((product) => (
                    <ul key={product.id}>
                        <li>{product.name}</li>
                        <p>{product.price}</p>
                    </ul>
                ))}
            </div>
        </main >
    )
}
