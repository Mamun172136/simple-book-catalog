// const BookCard = ({ item }) => {
//   const { title, author, genre, photo } = item;

import { IBook } from "../types/globalTypes";
import "./book.css";
interface IProps {
  item: IBook;
}
//   // Define responsive image styles
//   //   const imageStyle = {
//   //     maxWidth: "100%", // Maximum width is the container's width
//   //     height: "h-1/2", // Maintain aspect ratio
//   //   };

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure>
//         <img src={photo} alt="Shoes" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">
//           Shoes!
//           <div className="badge badge-secondary">NEW</div>
//         </h2>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div className="card-actions justify-end">
//           <div className="badge badge-outline">Fashion</div>
//           <div className="badge badge-outline">Products</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

const BookCard = ({ item }: IProps) => {
  const { title, photo } = item;

  // Define responsive image styles
  const imageStyle = {
    width: "100%", // Full width of the container
    paddingBottom: "50%", // Height is 50% of width (maintains aspect ratio)
    backgroundSize: "cover", // Cover the entire container
    backgroundImage: `url(${photo})`, // Set the image as background
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className=" book-card card-image" style={imageStyle}></div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/bookDetailsPage/${item._id}`}>
            <button className="btn btn-primary">Book Details</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BookCard;
