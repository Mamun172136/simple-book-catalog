import { useDispatch } from "react-redux";
import AllBookCard from "../../components/AllBookCard";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";
import { getDate, getGenre, getSearchTerm } from "../../redux/filterSlice";
import React from "react";

const AllBooksData = () => {
  let { searchTerm } = useAppSelector((state) => state.search);

  // console.log("searchTerm from allbookdata", searchTerm);
  const { publicationDate } = useAppSelector((state) => state.search);

  const { genre } = useAppSelector((state) => state.search);

  const { data, isLoading } = useGetBooksQuery(
    {
      searchTerm: searchTerm,
      genre: genre,
      publicationDate: publicationDate,
    }
    // { refetchOnMountOrArgChange: true, pollingInterval: 1000 }
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(" searchterm in useEffect", searchTerm);
    dispatch(getSearchTerm(""));
    dispatch(getGenre(""));
    dispatch(getDate(""));
  }, [dispatch]);

  return (
    // <div>
    //   <h2 className="text-3xl font-extrabold">Featured Books</h2>
    //   {isLoading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {data?.data.map((item: IBook) => (
    //         <AllBookCard key={item._id} item={item} />
    //       ))}
    //     </div>
    //   )}
    // </div>

    <div>
      <h2 className="text-3xl font-extrabold">Featured Books</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.data.length === 0 ? (
            <p className="text-center text-3xl">No books found.</p>
          ) : (
            data?.data.map((item: IBook) => (
              <AllBookCard key={item._id} item={item} />
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default AllBooksData;
