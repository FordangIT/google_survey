import { IoEyeSharp } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../redux/slices/questionSlice";
import { RootState } from "../../redux/store";
function AddPreview() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );
  const handleAddQuestion = () => {
    const lastIndex = Math.max(
      ...questions.map((question) => question.index),
      0,
    );
    const newQuestionData = {
      index: lastIndex + 1,
    };
    dispatch(addQuestion(newQuestionData));
    console.log(newQuestionData);
  };

  return (
    <div className="w-14 h-24 bg-white rounded-md grid grid-cols-1 place-items-center">
      <FiPlusCircle
        className="text-icon-gray text-2xl"
        onClick={handleAddQuestion}
      />
      <IoEyeSharp className="text-icon-gray text-2xl" />
    </div>
  );
}
export default AddPreview;
