import "./styles.css"
import PropTypes from 'prop-types'
import { Thumbnail } from './../thumbnail'

export const ProductRow = (props) => {
    return (
        <div className="product-row">
            <h2>{ props.name }</h2>
            <div className="inner-row">
                { props.products.map( product =>
                    <Thumbnail category={ props.name } product={ product }/>
                ) }
            </div>
        </div>
    )
}

ProductRow.propTypes = {
    name: PropTypes.string,
    products: PropTypes.array
};