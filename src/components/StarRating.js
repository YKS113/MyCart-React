import React from 'react'
import { FaStar, FaStarHalfAlt} from "react-icons/fa"
import { FaRegStar} from "react-icons/fa"
import styled from 'styled-components'
const StarRating = ({rating,reviews}) => {
  const RatingStar=  Array.from({length:5},(elem,index)=>{
      let numbers= index+0.5;
      return (
        <span key={index}>
          {rating >= index+1 
          ? <FaStar className='icon'/>
          : rating >= numbers 
          ? <FaStarHalfAlt className='icon'/>
          : <FaRegStar className='icon'/>}

        </span>
      )
    });
   return <Wrapper>
      <div className="icon-style">
        {RatingStar}
        <p>{reviews} customer reviews</p>
      </div>
   </Wrapper> 
}

export default StarRating

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
