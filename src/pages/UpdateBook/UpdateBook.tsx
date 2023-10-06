import { toast } from "react-toast";
import { useAppSelector } from "../../redux/hook";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../../redux/api/apiSlice";
import { useNavigate, useParams } from "react-router-dom";

const AddBook = () => {
  const { user } = useAppSelector((state) => state.user);

  const [updateBook, { isLoading, isError, isSuccess }] =
    useUpdateBookMutation();

  const { id } = useParams<{ id: string }>(); // Specify that id is a string
  const { data: book } = useSingleBookQuery(id);
  console.log("book", book, id);

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  const navigate = useNavigate();

  const handleAddBook = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publicationDate = form.publication.value;
    const photo = form.photo.value;
    const email = user?.email;
    console.log("updated book", title, author, genre, publicationDate);
    const newBook = { title, author, genre, publicationDate, photo, email };

    console.log(newBook);
    const options = {
      id: id,
      data: newBook,
    };
    updateBook(options);
    toast("Book updated successfully");
    // navigate("/allBooks");
  };
  return (
    <div className="p-24 bg-[#F4F3F0]">
      <h2 className="text-3xl font-exrabold">update a Book</h2>

      <form onSubmit={handleAddBook}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={book?.title}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              name="author"
              defaultValue={book?.author}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <input
              type="text"
              name="genre"
              defaultValue={book?.genre}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Publication Date</span>
            </label>
            <input
              type="text"
              name="publication"
              defaultValue={book?.publicationDate}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={book?.photo}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        {/* <div className="">
          <input
            type="submit"
            value="add book"
            className="btn btn-block btn-neutral"
          />
        </div> */}

        <div className="">
          <input
            type="submit"
            value="Update Book"
            className="btn btn-block btn-neutral"
          />
        </div>
        {/* <div className="">
          {isLoading && <p>Loading...</p>}
          {isSuccess && <p>Book updated successfully!</p>}
          {isError && <p>Error updating the book. Please try again.</p>}
          {!isLoading && (
            <input
              type="submit"
              value="Update Book"
              className="btn btn-block btn-neutral"
            />
          )}
        </div> */}
      </form>
    </div>
  );
};

export default AddBook;
