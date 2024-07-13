import { useEffect, useState } from "react";
// import Row from ".c./../../components/Row/Row";
import Row from "../../../Components/Row/Row";
import "./home.css"
// import { getPageData } from "../../../api/movies";
import { getPageData } from "../../../Api/Movies";
import Navbar2 from "../../../Components/Navbar/Navbar2"
// import Herobanner from "../../../components/Herobanner/Herobanner";
import Herobanner from "../../../Components/Herobanner/Herobanner";
// import Footersignin from "../../../components/FooterSignin/Footersignin";
import Footersignup from "../../../Components/Footersignin/Footersignup";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Text from "../../../Components/Text";
// import Text from "../../../components/Textbox/Text";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((request) => setData(request));
  }, []);

  return (
    <>
    <main className="main_home">
    <Navbar2 isUser />
      <Herobanner />
      {data && (
        <div className="movie-row">
          <div className="movie-row1">
          <Row
            title="NETFLIX ORIGINALS"
            data={data.netflixOriginals?.results}
			      className={"NETFLIXORIGINALS"}
          />
          <Row title="TRENDING NOW" data={data.trendingNow?.results}  className={"trending"}/>
          <Row title="TOP RATED" data={data.topRated?.results} className={"top-rated"}/>
          <Row title="ACTION MOVIES" data={data.actionMovies?.results}  className={"action"}/>
          
          <Row title="HORROR MOVIES" data={data.horrorMovies?.results}  className={"horror"}/>
          <Row title="ROMANCE MOVIES" data={data.romanceMovies?.results}  className={"romance"}/>
          <Row title="WAR MOVIES" data={data.warMovies?.results} className={"war"}/>
          <Row
            title="SCIENCE FICTION MOVIE"
            data={data.scienceFictionMovies?.results} 
            className={"science"}
          />
          <Row title="DOCUMENTARIES" data={data.documentaries?.results}  className={"documentaries"}/>
		  {/* <Row title="COMEDY MOVIES" data={data.comedyMovies?.results} /> */}
          </div>
          
        </div>
        
      )}
       <div className="home-footer">
     
     <div className="footer-icons">
       <FaFacebook className="fa-face"/>
       <FaInstagram className="fa-insta"/>
       <FaTwitter className="fa-twit"/>
       <FaYoutube className="fa-you"/>
     </div>
     <div className="home-footer1">
 <Footersignup content={"Audio Description"} classname={"audio-foot"}/>
 <Footersignup content={"Help Center"}classname={"audio-foot"}/>
 <Footersignup content={"Gift Cards"}classname={"audio-foot"}/>
 <Footersignup content={"Media Center"}classname={"audio-foot"}/>
 <Footersignup content={"Investor Relation"}classname={"audio-foot"}/>
 <Footersignup content={"Jobs"}classname={"audio-foot"}/>
 <Footersignup content={"Terms of Use"}classname={"audio-foot"}/>
 <Footersignup content={"Privacy"}classname={"audio-foot"}/>
 <Footersignup content={"Legal Notices"}classname={"audio-foot"}/>
 <Footersignup content={"Cookie Preferences"}classname={"audio-foot"}/>
 <Footersignup content={"Corporate Information"}classname={"audio-foot"}/>
 <Footersignup content={"Contact Us"}classname={"audio-foot"}/>
 <div className="home-footer2">
  <Text value="Service Code" className="service-home"/>
  <Text value="1917-2024 Netflix. Inc." className="num-home"/>

 </div>
 </div>
 
 {/* <Text value={"Service Code"} classname={"service-home"}/>
 <Text value={"1917-2024 Netflix. Inc."} classname={"inc-home"}/> */}
</div>
    </main>
   
  </>
  );

};

export default Home;