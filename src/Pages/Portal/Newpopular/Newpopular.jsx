import React from 'react'
import './newpopular.css'
import Navbar2 from '../../../Components/Navbar/Navbar2'
import Footersignup from '../../../Components/Footersignin/Footersignup';
import Row from '../../../Components/Row/Row';
import { getPageData } from "../../../Api/Movies";
import { useEffect, useState } from "react";

 const Newpopular = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      getPageData().then((request) => setData(request));
    }, []);
  
  return (
    <div className='popular-movie'>
        <div className='popular-nav'>
            <Navbar2 />
        </div>
        <div className='popular-row'>
        <>
    <main className="main-home">
    {/* <Navbar2 isUser /> */}
      {/* <Herobanner /> */}
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
    </main>
    <div className="home-footer">
      <div className="home-footer1">
    <Footersignup content={"Audio Description"}/>
    <Footersignup content={"Help Center"}/>
    <Footersignup content={"Gift Cards"}/>
    <Footersignup content={"Media Center"}/>
    <Footersignup content={"Investor Relation"}/>
    <Footersignup content={"Jobs"}/>
    <Footersignup content={"Terms of Use"}/>
    <Footersignup content={"Privacy"}/>
    <Footersignup content={"Legal Notices"}/>
    <Footersignup content={"Cookie Preferences"}/>
    <Footersignup content={"Corporate Information"}/>
    <Footersignup content={"Contact Us"}/>
    </div>
    {/* <Text value={"Service Code"} classname={"service-home"}/>
    <Text value={"1917-2024 Netflix. Inc."} classname={"inc-home"}/> */}
   </div>
  </>
        </div>
    </div>
  )
}

export default Newpopular;
