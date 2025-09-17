// app/products/[productId]/page.jsx

const ProductDetails = async ({ params }) => {
  const  { productsId } =await params;

  return (
    <div>
      <h1>Product Details of : {productsId}</h1>
    </div>
  );
};
// this is dynamic routing keep in mind foldername is must be in square brackets and foldername and destrucring name must be same 
export default ProductDetails;
