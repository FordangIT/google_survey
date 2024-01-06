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
    dispatch(addQuestion(newQuestionData));
  };
  const handlePreview = () => {
    navigate("/preview");
  };

  return (
    <div className="w-14 h-24 bg-white rounded-md grid grid-cols-1 place-items-center">
      <FiPlusCircle
        className="text-icon-gray text-2xl"
        onClick={handleAddQuestion}
      />
      <IoEyeSharp className="text-icon-gray text-2xl" onClick={handlePreview} />
    </div>
  );
}
export default AddPreview;
