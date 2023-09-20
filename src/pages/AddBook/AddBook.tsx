const AddBook = () => {
  const handleAddBook = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const Publication = form.publication.value;
    const photo = form.photo.value;
  };
  return (
    <div className="p-24 bg-[#F4F3F0]">
      <h2 className="text-3xl font-exrabold">Add a Book</h2>

      <form onSubmit={handleAddBook}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
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
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="">
          <input
            type="submit"
            value="add book"
            className="btn btn-block btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
