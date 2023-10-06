import BookCard from "../../../components/BookCard";
import { useGetBooksQuery } from "../../../redux/api/apiSlice";
import { IBook } from "../../../types/globalTypes";

const AllBook = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  return (
    <div>
      <h2 className="text-3xl font-extrabold">Featured Books</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.data.slice(0, 10).map((item: IBook) => (
            <BookCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBook;
