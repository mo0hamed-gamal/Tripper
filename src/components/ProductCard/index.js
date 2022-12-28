import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import Button from './../forms/Button';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import './styles.scss';

const mapState = state => ({
  product: state.productsData.product
});

const ProductCard = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productThumbnail,
    productName,
    productPrice,
    productDesc,
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  }

  const configAddToCartBtn = {
    type: 'button'
  }

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} alt="" />
      </div>
      <div className="productDetails">
        <ul>
          <li className="name">
            <h1>
              {productName}
            </h1>
          </li>
          <li className="price">
            <span>
              ${productPrice}/Night
            </span>
          </li>
          <li>
            <div className="datePick">
              <DateRangePickerComponent placeholder="CHECK-IN and CHECKOUT"
              ></DateRangePickerComponent>
            </div>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Reserve
              </Button>
            </div>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }} />
          </li>
          <div className="google-map-code">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.5736812783028!2d30.949030576008347!3d29.974073634501796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzI0LjYiTiAzMMKwNTYnNTkuMSJF!5e0!3m2!1sen!2seg!4v1624124490728!5m2!1sen!2seg" width="786" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ProductCard;
