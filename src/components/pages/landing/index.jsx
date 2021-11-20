import "./styles.css"
import PropTypes from 'prop-types'
import { ProductRow } from "../../product-row"

export const Index = (props) => {
    return (
        <div>
            { props.products.map( category =>
                <ProductRow name={category.name} products={category.products}/>
            ) }
        </div>
    )
}

Index.propTypes = {
    products: PropTypes.array
};