import { useEffect, useState } from "react";
import { getWishlist } from "../../Api/Movies";
import '../Row/row.css'
// import Carousel from "../../components/carousel/Carousel";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

// import Card from "../../components/card/Card";

const Row = ({ title, data, className }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getWishlist().then((data) => setMovies(data.results));
  }, []);
  const movieId = movies?.map((item) => item.id);

  return (
    <section className={`${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      <Carousel
        data={data}
        render={(item) => <Card movie={item} favMovies={movieId} />}
      />
    </section>
  );
};

export default Row;