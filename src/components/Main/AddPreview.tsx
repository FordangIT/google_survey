import { IoEyeSharp } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../redux/slices/questionSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
function AddPreview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );
  const handleAddQuestion = () => {
    const newQuestionData = {
      index: questions.length,
    };
    console.log(newQuestionData, "들어갈 index");
    dispatch(addQuestion(newQuestionData));
  };
  const handlePreview = () => {
    navigate("/preview");
  };

  return (
    <div className="w-14 h-24 bg-white rounded-md grid grid-cols-1 place-items-center ml-3 mt-10 ">
      <FiPlusCircle
        className="text-icon-gray text-3xl rounded-full p-1 hover:bg-gray-200 transition duration-300"
        onClick={handleAddQuestion}
      />
      <IoEyeSharp
        className="text-icon-gray text-3xl rounded-full p-1 hover:bg-gray-200 transition duration-300"
        onClick={handlePreview}
      />
    </div>
  );
}
export default AddPreview;
