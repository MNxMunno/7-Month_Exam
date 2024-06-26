import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { useGetProductsQuery } from "../../context/api/productApi";
import Skeleton from "../skileton/Skeleton";

const Products = () => {
  const [selectCategory, setSelectCategory] = useState("/");
  const [offset, setOffset] = useState(1);
  const { data, isLoading } = useGetProductsQuery({
    params: { limit: 8 * offset },
    path: selectCategory,
  });

  const { data: category } = useGetCategoryQuery();

  return (
    <section className="product">
      <div className="container">
        <div className="content">
          <h1>BEST SELLER</h1>
          <ul className="category__btns">
            <li>
              <data onClick={() => setSelectCategory("/")} value="/">
                All
              </data>
            </li>

            {category?.map((el) => (
              <li key={el}>
                <data
                  onClick={(e) => setSelectCategory(e.target.value)}
                  value={`category/${el}`}
                >
                  {el}
                </data>
              </li>
            ))}
          </ul>
          {/* <Cart data={data} /> */}
          {isLoading ? <Skeleton count={8} /> : <></>}
          <Cart data={data} />
          <button onClick={() => setOffset((p) => p + 1)} className="btn">
            load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
