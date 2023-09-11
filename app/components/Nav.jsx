"use client";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "../page.module.css";
import { userCart } from "../context/context";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cart, removeAll } = userCart();
  const itemQty = cart.reduce((total, item) => total + item.quantity, 0);

  console.log(openCart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 3rem",
        borderColor: "transparent transparent #E4E4E4 transparent",
        borderWidth: "3px",
        borderStyle: "solid",
      }}
    >
      <h2 style={{ cursor: "default" }}>LOGO</h2>

      <span
        style={{
          fontSize: "2rem",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <AiOutlineShoppingCart onClick={() => setOpenCart(!openCart)} />
        {cart.length > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: "-.1rem",
              left: "-.4rem",
              width: "1.5rem",
              height: "1.5rem",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <p style={{ fontSize: "14px" }}>{itemQty}</p>
          </div>
        )}
        {cart.length > 0 ? (
          <div
            className={`${openCart ? styles.open_cart : styles.close_cart}`}
            style={{
              position: "absolute",
              right: "0",
              top: "3rem",
              zIndex: "2",
              background: "#fff",
              borderColor: "#E4E4E4",
              borderStyle: "solid",
              borderWidth: "1px",
              color: "#000",
              width: "17rem",
              height: "max-content",
              padding: "0 1rem 1rem 1rem",
              cursor: "default",
            }}
          >
            <AiOutlineClose
              style={{
                fontSize: "18px",
                cursor: "pointer",
                margin: "0 0 .2rem 0",
              }}
              onClick={() => setOpenCart(!openCart)}
            />
            <>
              {cart.map((item) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <p style={{ fontSize: "20px" }}>{item.name}</p>
                    <span style={{ display: "flex" }}>
                      <p style={{ fontSize: "17px", color: "#656565" }}>
                        {`$${item.price}`}*
                      </p>
                      <p style={{ fontSize: "17px", color: "#656565" }}>
                        {" "}
                        {item.quantity}
                      </p>
                    </span>
                  </div>
                  <div>
                    <Image src={item.image.src} width={70} height={90} />
                  </div>
                </div>
              ))}
              <button className={styles.btn_clear} onClick={() => removeAll()}>
                CLEAR
              </button>
            </>
          </div>
        ) : (
          <div
            className={`${openCart ? styles.open_cart : styles.close_cart}`}
            style={{
              position: "absolute",
              right: "0",
              top: "3rem",
              zIndex: "2",
              background: "#fff",
              borderColor: "#E4E4E4",
              borderStyle: "solid",
              borderWidth: "1px",
              color: "#000",
              width: "15rem",
              height: "max-content",
              padding: " 0 1rem 1rem 1rem ",
            }}
          >
            <AiOutlineClose
              style={{
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={() => setOpenCart(!openCart)}
            />
            <p style={{ fontSize: "18px" }}>cart is empty</p>
          </div>
        )}
      </span>
    </div>
  );
};

export default Nav;
