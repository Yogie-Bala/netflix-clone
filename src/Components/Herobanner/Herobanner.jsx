import React, { useEffect, useState } from "react";
import "../Herobanner/herobanner.css"
// import Navbar from "../navbar/Navbar";
// import Heading from "../heading/Heading";
import Text from "../Text";
// import Button from "../button/Button";
import Button from "../Button/Button";
// import Navbar2 from "../Navbar/Navbar2"
import { FaPlay, } from "react-icons/fa";
// import Content from "../heading/Content";
import { getPageData } from "../../Api/Movies";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
// import { CiCircleInfo } from "react-icons/ci";
import { MdInfoOutline } from "react-icons/md";

const Herobanner = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getPageData();
        const randomIndex = Math.floor(
          Math.random() * response?.netflixOriginals?.results.length
        );
        setMovie(response?.netflixOriginals?.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();

    const intervalId = setInterval(fetchMovie, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };

  return (
    <main className="hero-banner">
      {/* <Navbar2 isUser /> */}
      {movie && (
        <>
          <div className="hero-img">
            <img className="hero-img1"
              src={`${baseUrl + movie?.backdrop_path}`}
              alt="hero banner img"
            />
          </div>
          <div className="hero-content">
            <Text className="hero-text" value={movie?.name || movie?.title} />
            <Text
              className="hero-text1"
              value={handleDescription(movie?.overview, 200)}
            />
            <div className="hero-buttons">
              <FaPlay className="fa-play"/> 
              <Button name="hero-button1"
                size="small-play"
                icon={<FaPlay />}
                color="black"
                // bgcolor="bg-white"
                content="Play"

              />
              <MdInfoOutline className="fa-info"/>
              <Button name="hero-button2"
                size="small-play"
                icon={<AiTwotoneExclamationCircle className="moreicon" />}
                className="watchlater"
                color="white"
                // bgcolor="bg-trans"
                content="More Info"
              />
            </div>
           
          </div>
        </>
      )}
    </main>
  );
};

export default Herobanner;