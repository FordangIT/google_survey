import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Title() {
  const title = useSelector((state: RootState) => state.title.title);
  const description = useSelector(
    (state: RootState) => state.title.description,
  );
  return (
    <div className="flex justify-center">
      <div className="pt-3">
        <div className=" w-[455px] md:w-[855px]  h-3 bg-dark-purple rounded-t-lg "></div>
        <div className=" w-[455px] md:w-[855px] h-36 bg-white rounded-b-lg flex flex-col">
          <p className="text-black text-4xl mx-6 mt-7 hover:border-none">
            {title}
          </p>
          <div className="placeholder-gray-500 text-gray-900 mx-6 mt-6 ">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Title;
