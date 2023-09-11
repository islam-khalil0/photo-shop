"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Recycled_Plastic from "../public/images/Recycled_Plastic.png";
import imageOne from "../public/images/image_deta_one.png";
import imageTow from "../public/images/image_deta_two.png";
import imageThree from "../public/images/image_deta_three.png";
import { TiArrowUnsorted } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFilterSquareFill } from "react-icons/bs";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { products } from "./data/data";
import { AiOutlineClose } from "react-icons/ai";

export default function Home() {
  const [selected, setSelected] = useState([]);
  let filterData = products.filter((item) =>
    selected.length > 0 ? selected?.includes(item.category) : item
  );
  // const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const SMALL_WIDTH = 545;
  const MED_WIDTH = 768;
  const itemsPerPage = 2;
  // screenSize.width <= SMALL_WIDTH ? 2 : screenSize.width <= MED_WIDTH ? 4 : 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterData.length / itemsPerPage);
  let filters = ["glass", "steel", "plastic"];
  const [filterPopup, setFilterPopup] = useState(false);

  // function getCurrentDimension() {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };
  // }

  // useEffect(() => {
  //   const updateDimension = () => {
  //     setScreenSize(getCurrentDimension());
  //   };
  //   window.addEventListener("resize", updateDimension);

  //   return () => {
  //     window.removeEventListener("resize", updateDimension);
  //   };
  // }, [screenSize]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const handleChange = (e, index) => {
    const category = e.target.value;
    const activeData = document.getElementById(index).checked;

    if (activeData) {
      setSelected([...selected, category]);
    } else {
      setSelected(selected.filter((item) => item !== category));
    }
  };

  return (
    <>
      <div
        className={styles.container}
        // onClick={() => (filterPopup ? setFilterPopup(!filterPopup) : "")}
      >
        <div className={styles.landing_page}>
          <div className={styles.top}>
            <h3>Recycled Plastic</h3>
            <button className={styles.btn_pc_screen}>ADD TO CART</button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={styles.img}>
              <span>Featured</span>
              <Image
                src={Recycled_Plastic}
                alt="Recycled Plastic"
                style={{ width: "100%", objectFit: "cover" }}
              />
              <button className={styles.btn_mobile_screen}>ADD TO CART</button>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.left}>
              <h6>Materials people also use</h6>
              <div className={styles.images_details}>
                <Image src={imageOne} width={100} />
                <Image src={imageTow} width={100} />
                <Image src={imageThree} width={100} />
              </div>
              <p>Details</p>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0",
                }}
              >
                <small>Weight: 2340g/m2</small>
                <small>Thickness: 3cm</small>
              </span>
            </div>
            <div className={styles.right}>
              <h5>About the Recycled Plastic</h5>
              <p>Plastic</p>
              <small>
                Plastic recycling is the reprocessing of plastic waste into new
                and useful products. When performed correctly, this can reduce
                dependence on landfill, conserve resources and protect the
                environment from plastic pollution and greenhouse gas emissions.
                Although recycling rates are increasing, they lag behind those
                of other recoverable materials, such as aluminium, glass and
                paper. The global recycling rate in 2015 was 19.5%, while 25.5%
                was incinerated and the remaining 55% disposed of to landfill.
                Since the beginning of plastic production in the 20th century,
                until 2015, the world has produced some 6.3 billion tonnes of
                plastic waste, only 9% of which has been recycled, and only ~1%
                has been recycled more than once.[6]
              </small>
            </div>
          </div>
        </div>
        <div className={styles.materials}>
          <div className={styles.materials_title}>
            <span>
              <h4>Materials/</h4>
              <p>Premium Photos</p>
            </span>
            <span>
              <h4>
                <TiArrowUnsorted />
                Sort By/
              </h4>
              <p>
                Price
                <TiArrowSortedDown />
              </p>
            </span>
          </div>
          <div className={styles.content}>
            <span
              className={styles.filters_icon}
              onClick={() => setFilterPopup(!filterPopup)}
            >
              <BsFilterSquareFill />
            </span>

            <div className={styles.filters}>
              <div className={styles.cate_filter}>
                <h3>Materials</h3>
              </div>
              <div>
                {filters.map((cate, index) => (
                  <span>
                    <input
                      id={index}
                      type="checkbox"
                      value={cate}
                      onChange={(e) => handleChange(e, index)}
                    />
                    {cate}
                  </span>
                ))}
              </div>
              <div
                className={styles.cate_filter}
                style={{
                  borderColor: " #C2C2C2 transparent transparent transparent",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  margin: "1rem 0",
                }}
              >
                <h3>Price range</h3>
              </div>
              <span>
                <input
                  type="checkbox"
                  // id="topping"
                  // name="topping"
                  // value="Paneer"
                />
                Lower than $20
              </span>
              <span>
                <input
                  type="checkbox"
                  // id="topping"
                  // name="topping"
                  // value="Paneer"
                />
                $20 - $100
              </span>
              <span>
                <input
                  type="checkbox"
                  // id="topping"
                  // name="topping"
                  // value="Paneer"
                />
                $100 - $200
              </span>
              <span>
                <input
                  type="checkbox"
                  // id="topping"
                  // name="topping"
                  // value="Paneer"
                />
                More than $200
              </span>
            </div>

            <div className={styles.container_items}>
              <div className={styles.items}>
                {currentItems.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </div>

              <div className={styles.paginate}>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  containerClassName={styles.container_paginate}
                  pageClassName={styles.li_paginate}
                  activeLinkClassName={styles.li_paginate_active}
                  previousClassName={styles.previous}
                  nextClassName={styles.next}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            filterPopup ? styles.filters_popup : styles.filters_popup_close
          }
        >
          <AiOutlineClose
            style={{ fontSize: "22px", margin: "1rem" }}
            onClick={() => setFilterPopup(!filterPopup)}
          />
          <div className={styles.filters}>
            <div className={styles.cate_filter}>
              <h3>Materials</h3>
            </div>
            <div>
              {filters.map((cate, index) => (
                <span>
                  <input
                    id={index}
                    type="checkbox"
                    value={cate}
                    onChange={(e) => handleChange(e, index)}
                  />
                  {cate}
                </span>
              ))}
            </div>
            <div
              className={styles.cate_filter}
              style={{
                borderColor: " #C2C2C2 transparent transparent transparent",
                borderWidth: "2px",
                borderStyle: "solid",
                margin: "1rem 0",
              }}
            >
              <h3>Price range</h3>
            </div>
            <span>
              <input
                type="checkbox"
                // id="topping"
                // name="topping"
                // value="Paneer"
              />
              Lower than $20
            </span>
            <span>
              <input
                type="checkbox"
                // id="topping"
                // name="topping"
                // value="Paneer"
              />
              $20 - $100
            </span>
            <span>
              <input
                type="checkbox"
                // id="topping"
                // name="topping"
                // value="Paneer"
              />
              $100 - $200
            </span>
            <span>
              <input
                type="checkbox"
                // id="topping"
                // name="topping"
                // value="Paneer"
              />
              More than $200
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
