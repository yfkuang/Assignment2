import "./styles.css"
import PropTypes from 'prop-types'

export const ProductRow = (props) => {
    return (
        <div className="product-row">
            <h2>{ props.name }</h2>
            <div>
                { props.products.map( product =>
                    <p key={product.id}>{ product.id }. { product.name }</p>
                ) }
            </div>
        </div>
    )
}

ProductRow.propTypes = {
    name: PropTypes.string,
    products: PropTypes.array
};