import Styles from "../page.module.css";
import Image from "next/image";
import testImage from "../../public/images/image_deta_two.png";
import { userCart } from "../context/context";

const Card = ({ id, name, category, price, image }) => {
  const product = {
    id: id,
    name: name,
    category: category,
    price: price,
    image: image,
  };

  const { addToCart, cart } = userCart();

  const handleAddTOCart = (product) => {
    addToCart(product);
    console.log(cart);
  };

  return (
    <div className={Styles.container_card}>
      <Image src={image.src} width={200} height={260} />
      <button onClick={() => handleAddTOCart(product)}>ADD TO CART</button>
      <span className={Styles.content_Card}>
        <p style={{ fontSize: "12px" }}>{category}</p>
        <h4>{name}</h4>
        <p style={{ fontSize: "18px" }}>{`$${price}`}</p>
      </span>
    </div>
  );
};

export default Card;
