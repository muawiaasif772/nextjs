// app/[...slugs]/page.jsx
const Page = async ({ params }) => {
  const categories = ['product', 'review', 'profile', 'about','ali'];
  const slugs = params.slugs || [];
//  slugs folder created in app/docs/[...slugs]/page.jsx and keep in mind [...slugs] means it can capture multiple segments of the URL as an array.e.g /docs/product/review/profile on the first segments we show some things on the base of second seegment we show other things and so on review is first slug length 2 and profile is second slug length  it mean when url is docs/profie than length of slug is 1 

  return (
    <div>
      {/* If no slugs: show categories */}
     {slugs.length ==1  && (
  <div>
    {/* <h1>First slug: {slugs[0]}</h1> */}
    <h2>Showing category: {categories[0]}</h2>
  </div>
)}
  {slugs.length ==2  && (
  <div>
    {/* <h1>First slug: {slugs[0]}</h1> */}
    <h2>Showing category: {categories[1]}</h2>
  </div>
)}  {slugs.length ==3  && (
  <div>
    {/* <h1>First slug: {slugs[0]}</h1> */}
    <h2>Showing category: {categories[2]}</h2>
  </div>
)}
    </div>
  );
};

export default Page;
