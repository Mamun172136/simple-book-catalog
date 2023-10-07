interface IProps {
  id: string;
}

import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hook";

const ProductReview = ({ id }: IProps) => {
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);

    const options = {
      id: id,
      data: { comment: inputValue },
    };
    console.log(options);
    postComment(options);
    setInputValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <hr className="w-full border-t border-gray-300 my-2" />
      <form
        className="flex gap-5 items-center justify-center"
        onSubmit={handleSubmit}
      >
        {/* <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        /> */}

        <textarea
          onChange={handleChange}
          value={inputValue}
          placeholder="write your review"
          className="  textarea textarea-bordered textarea-xs w-full max-w-xs"
        ></textarea>
        <button
          className="btn btn-neutral"
          type="submit"
          disabled={!user?.email}
        >
          {" "}
          submit{" "}
        </button>
        {!user?.email && (
          <p className="text-red-500">
            You are not authorized to leave review this book.
          </p>
        )}
      </form>

      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            {/* <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <li className="text-3xl p-3"> user review: {comment}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
