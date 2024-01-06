import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle, updateDescription } from "../../redux/slices/titleSlice";
import { RootState } from "../../redux/store";

function Title() {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.title.title);
  const description = useSelector(
    (state: RootState) => state.title.description,
  );

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle: string = event.target.value;
    dispatch(updateTitle(newTitle));
    console.log(newTitle, "newTitle");
  };
  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDescription: string = event.target.value;
    dispatch(updateDescription(newDescription));
    console.log(newDescription, "newDescription");
  };
  return (
    <div className="flex justify-center">
      <div className="pt-3">
        <div className=" w-[455px] md:w-[855px]  h-3 bg-dark-purple rounded-t-lg "></div>
        <div className=" w-[455px] md:w-[855px] h-36 bg-white rounded-b-lg flex flex-col">
          <input
            type="text"
            placeholder="제목 없는 설문지"
            value={title}
            onChange={handleTitleChange}
            className="placeholder-black text-black text-4xl mx-6 mt-7 hover:border-none "
          />
          <input
            type="text"
            placeholder="설문지 설명"
            value={description}
            onChange={handleDescriptionChange}
            className="placeholder-gray-500 text-gray-900 mx-6 mt-6  "
          />
        </div>
      </div>
    </div>
  );
}
export default Title;
