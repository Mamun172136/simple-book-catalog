// import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../../redux/hook";
// import { auth } from "../../../lib/firebase";
// import { signOut } from "firebase/auth";
// import { setUser } from "../../../redux/user/userSlice";

// const Navbar = () => {
//   const { user } = useAppSelector((state) => state.user);
//   const dispatch = useAppDispatch();
//   const handleLogOut = () => {
//     console.log("Logout");
//     signOut(auth).then(() => {
//       // Sign-out successful.
//       dispatch(setUser(null));
//     });
//   };
//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <Link to="/allbooks">All Books</Link>
//             </li>
//             <li>
//               <a>Parent</a>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a>Item 3</a>
//             </li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost normal-case text-xl">Book Catalog</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link to="/allbooks">All Books</Link>
//           </li>
//           <li tabIndex={0}>
//             <details>
//               <summary>Parent</summary>
//               <ul className="p-2">
//                 <li>
//                   <a>Submenu 1</a>
//                 </li>
//                 <li>
//                   <a>Submenu 2</a>
//                 </li>
//               </ul>
//             </details>
//           </li>
//           <li>
//             <a>Item 3</a>
//           </li>
//         </ul>
//       </div>
//       <div className="dropdown dropdown-end">
//         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//           <div className="w-10 rounded-full">
//             <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//           </div>
//         </label>
//         <ul
//           tabIndex={0}
//           className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//         >
//           {/* <li>
//             <a className="justify-between">
//               Profile
//               <span className="badge">New</span>
//             </a>
//           </li> */}
//           <li>
//             <Link to="/signup"> Signup</Link>
//           </li>
//           <li>
//             {user?.email ? (
//               <>
//                 {/* <span>{user?.displayName}</span> */}

//                 <button onClick={handleLogOut} className="btn btn-ghost">
//                   LogOut
//                 </button>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//               </>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { auth } from "../../../lib/firebase";
import { signOut } from "firebase/auth";
import { setUser } from "../../../redux/user/userSlice";
import { useState } from "react";
import { useGetBooksQuery } from "../../../redux/api/apiSlice";

import { IBook } from "../../../types/globalTypes";
import { getDate, getGenre, getSearchTerm } from "../../../redux/filterSlice";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const [searchTerms, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };

  // const { data, isLoading } = useGetBooksQuery(undefined);

  let { searchTerm } = useAppSelector((state) => state.search);

  // console.log("searchTerm from allbookdata", searchTerm);
  let { publicationDate } = useAppSelector((state) => state.search);

  let { genre } = useAppSelector((state) => state.search);
  (searchTerm = null), (publicationDate = null), (genre = null);
  const { data, isLoading } = useGetBooksQuery(
    {
      searchTerm: searchTerm,
      genre: genre,
      publicationDate: publicationDate,
    },
    { refetchOnMountOrArgChange: true }
  );

  const uniqueGenres = [
    ...new Set(data?.data.map((item: { genre: any }) => item.genre)),
  ];

  const uniqueDAtes = [
    ...new Set(
      data?.data.map((item: { publicationDate: any }) => item.publicationDate)
    ),
  ];

  console.log(isLoading);

  const handleSearch = () => {
    dispatch(getSearchTerm(searchTerms));
    console.log("Search Term from navbar:", searchTerms);
    // You can perform any actions related to searching here
  };

  const handleFilter = (value: any) => {
    console.log("Selected genre:", value);
    dispatch(getGenre(value));
    // You can perform any actions related to filtering here
  };
  const handleFilterDate = (value: any) => {
    console.log("Selected Date:", value);
    dispatch(getDate(value));
    // You can perform any actions related to filtering here
  };

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/allbooks">All Books</Link>
              </li>
              {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li tabIndex={0} className="relative group z-10 ">
                <details>
                  <summary>Filtering Genre</summary>
                  <ul className="p-2">
                    {uniqueGenres.map((item: any, index: any) => (
                      <li className="group">
                        <a
                          onClick={() => handleFilter(item)}
                          className="cursor-pointer"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              {/* <li className="relative group ">
                <details>
                  <summary>Filtering</summary>

                  <ul className="p-2">
                    {data?.data.map((item: any, index: any) => (
                      <li className="group">
                        <a
                          key={index}
                          onClick={() => handleFilter(item.genre)}
                          className="cursor-pointer"
                        >
                          {item.genre}
                        </a>

                        <ul
                          key={index}
                          className="menu menu-box dropdown-content hidden group-hover:block"
                        >
                          <li>
                            <a
                              onClick={() => handleFilter(item.publicationDate)}
                            >
                              {item.publicationDate}
                            </a>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </details>
              </li> */}
              {/* <li>
                <a>Item 3</a>
              </li> */}

              {/* <li tabIndex={0} className="relative group z-10 ">
                <details>
                  <summary>Filtering PublicationDAte</summary>
                  <ul className="p-2">
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Fiction")}
                        className="cursor-pointer"
                      >
                        Fiction
                      </a>
                    </li>
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Dystopian")}
                        className="cursor-pointer"
                      >
                        Dystopian
                      </a>
                    </li>
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Romance")}
                        className="cursor-pointer"
                      >
                        Romance
                      </a>
                    </li>
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Romance")}
                        className="cursor-pointer"
                      >
                        Romance
                      </a>
                    </li>
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Fiction")}
                        className="cursor-pointer"
                      >
                        Fiction
                      </a>
                    </li>
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Modernist")}
                        className="cursor-pointer"
                      >
                        Modernist
                      </a>
                    </li>
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Coming-of-age")}
                        className="cursor-pointer"
                      >
                        Coming-of-age
                      </a>
                    </li>
                    <li className="group">
                      <a
                        onClick={() => handleFilter("Adventure")}
                        className="cursor-pointer"
                      >
                        Adventure
                      </a>
                    </li>
                  </ul>
                </details>
              </li> */}

              <li tabIndex={0} className="relative group z-10 ">
                <details>
                  <summary>Filtering PublicationDAte</summary>
                  <ul className="p-2">
                    {uniqueDAtes.map((item: any, index: any) => (
                      <li className="group">
                        <a
                          onClick={() => handleFilterDate(item)}
                          className="cursor-pointer"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Book Catalog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/allbooks">All Books</Link>
            </li>
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>
            {/* <li tabIndex={0}>
              <details>
                <summary>Filtering</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            {/*
            <li tabIndex={0} className="relative group z-10 ">
              <details>
                <summary>Filtering Genre</summary>
                <ul className="p-2">
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Fiction")}
                      className="cursor-pointer"
                    >
                      Fiction
                    </a>
                  </li>
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Dystopian")}
                      className="cursor-pointer"
                    >
                      Dystopian
                    </a>
                  </li>
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Romance")}
                      className="cursor-pointer"
                    >
                      Romance
                    </a>
                  </li>
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Romance")}
                      className="cursor-pointer"
                    >
                      Romance
                    </a>
                  </li>
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Fiction")}
                      className="cursor-pointer"
                    >
                      Fiction
                    </a>
                  </li>
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Modernist")}
                      className="cursor-pointer"
                    >
                      Modernist
                    </a>
                  </li>
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Coming-of-age")}
                      className="cursor-pointer"
                    >
                      Coming-of-age
                    </a>
                  </li>
                  <li className="group">
                    <a
                      onClick={() => handleFilter("Adventure")}
                      className="cursor-pointer"
                    >
                      Adventure
                    </a>
                  </li>
                </ul>
              </details>
            </li> */}

            <li tabIndex={0} className="relative group z-10 ">
              <details>
                <summary>Filtering Genre</summary>
                <ul className="p-2">
                  {uniqueGenres.map((item: any, index: any) => (
                    <li className="group">
                      <a
                        onClick={() => handleFilter(item)}
                        className="cursor-pointer"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {/* <li tabIndex={0} className="relative group z-10">
              <details>
                <summary>Filtering</summary>

                <ul className="p-2">
                  {data?.data.map((item: any, index: any) => (
                    <li className="group">
                      <a
                        key={index}
                        onClick={() => handleFilter(item.genre)}
                        className="cursor-pointer"
                      >
                        {item.genre}
                      </a>

                      <ul
                        key={index}
                        className="menu menu-box dropdown-content hidden group-hover:block"
                      >
                        <li>
                          <a onClick={() => handleFilter(item.publicationDate)}>
                            {item.publicationDate}
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </details>
            </li> */}

            {/* <li>
              <a>Item 3</a>
            </li> */}

            <li tabIndex={0} className="relative group z-10 ">
              <details>
                <summary>Filtering PublicatonDate</summary>
                <ul className="p-2">
                  {uniqueDAtes.map((item: any, index: any) => (
                    <li className="group">
                      <a
                        onClick={() => handleFilterDate(item)}
                        className="cursor-pointer"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li> */}
            <li>
              <Link to="/signup"> Signup</Link>
            </li>
            <li>
              {user?.email ? (
                <>
                  {/* <span>{user?.displayName}</span> */}

                  <button onClick={handleLogOut} className="btn btn-ghost">
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="search-bar flex justify-center">
        <input
          type="text"
          placeholder="Search books..."
          className="border rounded p-1"
          name="search"
          // You can use state to control the value of the input
          // value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-primary ml-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
