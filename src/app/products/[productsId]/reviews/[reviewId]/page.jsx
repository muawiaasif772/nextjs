import React from 'react';

const ReviewsDetails = async({params}) => {
	const {slugs} = await params;
	const productsId = slugs[0];
	const reviewId = slugs[1];
  return (
	<div >
	  <h1 > ReviewsDetails id ={reviewId} and product details ={productsId}</h1>
	 

	</div> 
  );
};

export default ReviewsDetails;