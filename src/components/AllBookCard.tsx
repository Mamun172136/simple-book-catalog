import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import "./book.css";
interface IProps {
  item: IBook;
}

const AllBookCard = ({ item }: IProps) => {
  const { title, author, genre, photo, publicationDate } = item;

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
        <h2 className="card-title">title:{title}</h2>
        <h2 className="card-title">author:{author}</h2>
        <h2 className="card-title">genre:{genre}</h2>
        <h2 className="card-title">publicationDate:{publicationDate}</h2>

        <div className="card-actions justify-end">
          <Link to={`/bookDetailsPage/${item._id}`}>
            <button className="btn btn-primary">Book Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;
