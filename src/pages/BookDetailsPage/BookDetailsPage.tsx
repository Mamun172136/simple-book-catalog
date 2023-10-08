import React from "react";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../redux/api/apiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductReview from "../ProductReview/ProductReview";
import { toast } from "react-toast";
import { useAppSelector } from "../../redux/hook";

const BookDetailsPage = () => {
  // Replace with actual book data or fetch data from your API
  //   const book = {
  //     title: "To Kill a Mockingbird",
  //     author: "Harper Lee",
  //     genre: "Fiction",
  //     publicationDate: "July 11, 1960",
  //     comments: [],
  //     photo: "https://i.ibb.co/JvSn7Mf/book20.jpg",
  //   };

  const { id } = useParams<{ id: string }>(); // Specify that id is a string

  const {
    data: book,
    isLoading,
    error,
  } = useSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });

  const { user } = useAppSelector((state) => state.user);

  const [isDeleting, setIsDeleting] = React.useState(false);

  const [deleteBook, options] = useDeleteBookMutation();
  console.log(options);
  const navige = useNavigate();

  const isUserAuthorized = user?.email === book?.email;

  console.log(book, id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: error</p>;
  }

  const handleDelete = (id: string) => {
    console.log(id);
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (isConfirmed) {
      deleteBook(id)
        .unwrap()
        .then(() => {
          // Deletion successful
          toast("delete successfully");
          navige("/allBooks");
        })
        .catch((error) => {
          // Handle deletion error
          console.log(error);
          toast("Error deleteing book");
        })
        .finally(() => {
          setIsDeleting(false);
        });
    }
  };

  return (
    <div>
      <div className="p-6 space-y-2">
        <div className="p-6 space-y-2">
          <div className="grid  md:grid-cols-2">
            <div className="image">
              <img
                src={book?.photo}
                alt={book?.title}
                className="max-w-full h-auto   md:max-h-96 mx-auto"
              />
            </div>
            <div className=" space-y-2 otherinformation ">
              <div className=" space-y-2 mt-4 ml-10 md:ml-0 md:mt-0">
                <h1 className="text-3xl font-bold ">{book?.title}</h1>
                <p className="text-gray-600">Author: {book?.author}</p>
                <p className="text-gray-600">Genre: {book?.genre}</p>
                <p className="text-gray-600">
                  Publication Date: {book?.publicationDate}
                </p>
                {/* <p className="text-gray-800">{book.description}</p>
          <p className="text-2xl font-bold">${book.price}</p> */}
                <div className="card-actions ">
                  <Link to={`/updateBook/${id}`}>
                    <button
                      disabled={!isUserAuthorized}
                      className="btn btn-primary"
                    >
                      EDIT BOOK
                    </button>
                  </Link>

                  {!isUserAuthorized && (
                    <p className="text-red-500">
                      You are not authorized to edit this book.
                    </p>
                  )}
                </div>

                <div className="card-actions ">
                  <button
                    onClick={() => handleDelete(id!)}
                    className={`btn btn-primary ${isDeleting ? "loading" : ""}`}
                    // !isUserAuthorized
                    disabled={isDeleting || !isUserAuthorized}
                  >
                    DELETE BOOK
                  </button>
                  {!isUserAuthorized && (
                    <p className="text-red-500">
                      You are not authorized to delete this book.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Add more details here */}
        </div>
        {/* Add more details here */}
      </div>

      <ProductReview id={id!} />
    </div>
  );
};

export default BookDetailsPage;

// <div className="p-6 space-y-4">
//   <div className="md:flex md:space-x-4">
//     {/* Display image and description in a single column on small screens */}
//     <div className="md:w-1/2">
//       <img
//         src={book.photo}
//         alt={book.title}
//         className="max-w-full mb-4 md:mb-0"
//       />
//     </div>
//     <div className="md:w-1/2 space-y-2">
//       <h1 className="text-3xl font-bold">{book.title}</h1>
//       <p className="text-gray-600">Author: {book.author}</p>
//       <p className="text-gray-600">Genre: {book.genre}</p>
//       <p className="text-gray-600">
//         Publication Date: {book.publicationDate}
//       </p>
//       <p className="text-gray-800">{book.description}</p>
//       <p className="text-2xl font-bold">${book.price}</p>
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
//   {/* Add more details here */}
// </div>
