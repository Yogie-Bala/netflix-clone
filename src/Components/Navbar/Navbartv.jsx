import React from 'react'
import Text from '../Text';
import './navbartv.css'

 const Navbartv = () => {
  return (
    <div className='tv-nav'>
        <Text value="TV shows" className="tv-text"/>
        <div>
            <select name="Genres" id="" className='tv-select'>
                {/* <optgroup style={{color:"white"}}>Genres</optgroup>
                <Text value="Genres" className="tv-tex"/> */}
                <option value="">Genres</option>
                <option value="For Bridgerton Fans">For Bridgerton Fans</option>
                <option value="Sports">Sports</option>
                <option value="Pride Month">Pride Month</option>
                <option value="Indian">Indian</option>
                <option value="US">US</option>
                <option value="British">British</option>
                <option value="European">European</option>
                <option value="Asian">Asian</option>
                <option value="Reality & Talk">Reality & Talk</option>
                <option value="Action">Action</option>
                <option value="Dramas">Dramas</option>
                <option value="Comedies">Comedies</option>
                <option value="Sci-fi & Fantasy">Sci-fi & Fantasy</option>
                <option value="Crime">Crime</option>
                <option value="Family">Family</option>
                <option value="Kids">Kids</option>
                <option value="Docuseries">Docuseries</option>
                <option value="Romance">Romance</option>
                <option value="Thriller">Thriller</option>
                <option value="Horror">Horror</option>
                <option value="Teen">Teen</option>
                <option value="Anime">Anime</option>
                <option value="Science & Nature">Science & Nature</option>
                <option value="Food & Travel">Food & Travel</option>
            </select>
        </div>

    </div>
  )
}

export default Navbartv;
