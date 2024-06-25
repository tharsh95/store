import useList from "../hooks/useList";
import ProductItem from "./ProductItem";
import Skeleton from "./Skeleton";

const ProductList = () => {
  const { data, loading } = useList();

  let length = 20;
  let filledArray = Array.from({ length }, (_, i) => (i % 20) + 1);

  if (loading)
    return (
      <div className="flex flex-wrap justify-center animate-pulse">
        {filledArray.map((_, id) => (
          <div key={id} >
            <Skeleton id={id} />
          </div>
        ))}
      </div>
    );

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((el) => (
        <ProductItem
          key={el.id}
          id={el.id}
          title={el.title}
          price={el.price}
          image={el.image}
        />
      ))}
    </div>
  );
};
export default ProductList;
