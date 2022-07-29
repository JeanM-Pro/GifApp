import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, deleteCategory, cantidad }) => {
  const { images, isLoading } = useFetchGifs(category, cantidad);

  return (
    <>
      <hr />
      <div className="category-container">
        <h3>{category}</h3>
        <button
          onClick={() => {
            deleteCategory(category);
          }}
        >
          X
        </button>
      </div>

      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map(({ id, title, url }) => {
          return <GifItem key={id} title={title} url={url} />;
        })}
      </div>
    </>
  );
};
