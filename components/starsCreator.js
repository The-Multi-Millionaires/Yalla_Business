import React, { useState } from 'react';
// import {FaStar} from 'react-icon/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHighlighter } from '@fortawesome/free-solid-svg-icons';


// const StarRating = ()=> {
function GetStar(props) {


    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    props.new_rate(rating)
    // console.log("****************************",rating,setRating)

    return (
        <>
            <div className='stars_creator_res'>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input
                                type='radio'
                                name='rating'
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                onMouseOver={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                            {/* <FaStar
                        className='star'
                        color={ratingValue <=(hover || rating) ? "#ffc107" : "#e4e59"}
                        size={100}
                        onMouseOver={()=>setHover(ratingValue)}
                        onMouseLeave={()=>setHover(null)}
                        /> */}
                            <FontAwesomeIcon icon={faStar} className='star'
                                color={ratingValue <= (hover || rating) ? "#ff5a00" : "#C0C0C0"}
                                size={100}
                                onMouseOver={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)} />
                        </label>
                    )
                })}
            </div>
            {/* <p>{rating}</p> */}
        </>
    )
}
export default GetStar;
// import React, {useState} from 'react';   // for create-react-app, etc

// const {useState} = React;   // for codepen, jsbin, jsfiddle etc.

// function StarRating({count, value, 
//     inactiveColor='#ddd',
//     size=24,
//     activeColor='#f00', onChange}) {

//   // short trick 
// //   const stars = Array.from({length: count}, () => '🟊')
//   const stars = Array.from({length: count}, () => <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />)


//   // Internal handle change function
//   const handleChange = (value) => {
//     onChange(value + 1);
//   }

//   return (
//     <div>
//       {stars.map((s, index) => {
//         let style = inactiveColor;
//         if (index < value) {
//           style=activeColor;
//         }
//         return (
//           <span className={"star"}  
//             key={index}
//             style={{color: style, width:size, height:size, fontSize: size}}
//             onClick={()=>handleChange(index)}>{s}</span>
//         )
//       })}
//       {value}
//     </div>
//   )
// }


// function StarRatingDemo() {
//   // Get the rating from a db if required.
//   // The value 3 is just for testing.
//   const [rating, setRating] = useState(null);

//   const handleChange = (value) => {
//     setRating(value);
//   }
//   return (
//     <div>
//       <h2>Star Rating Demo</h2>

//      <StarRating 
//        count={5}
//        size={40}
//        value={rating}
//        activeColor ={'red'}
//        inactiveColor={'#ddd'}
//        onChange={handleChange}  />
//     </div>
//   )
// }
// export default StarRatingDemo;
// // const rootElement = document.querySelector("#root");
// // ReactDOM.render(<StarRatingDemo />, rootElement);  


