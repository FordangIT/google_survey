import { MdOutlinePhoto } from "react-icons/md";
import Selects from "../Questions/Selects";
import Short from "../Questions/Short";
import Long from "../Questions/Long";
import MultipleChoice from "../Questions/MultipleChoice";
import Checkbox from "../Questions/Checkbox";
import Dropdown from "../Questions/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import SwitchSelect from "../Questions/SwitchSelect";
import { removeQuestion } from "../../redux/slices/questionSlice";

function Question() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );

  const handleRemoveQuestion = (index: number) => {
    dispatch(removeQuestion(index));
  };

  const selectedQuestionTypeIndex = useSelector(
    (state: RootState) => state.type.indexedTypes,
  );

  return (
    <div className="flex justify-center">
      <div className="flex-col">
        {questions.map((_, index: number) => {
          const questionType = selectedQuestionTypeIndex[index] || 10;
          let selectedComponent = null;

          switch (questionType) {
            case 10:
              selectedComponent = <Short />;
              break;
            case 20:
              selectedComponent = <Long />;
              break;
            case 30:
              selectedComponent = <MultipleChoice />;
              break;
            case 40:
              selectedComponent = <Checkbox />;
              break;
            case 50:
              selectedComponent = <Dropdown />;
              break;
            default:
              break;
          }
          return (
            <div
              key={index}
              className="w-[855px] bg-white mt-4 rounded-lg flex-col pt-4"
            >
              <div className="flex justify-center mt-7">
                <input
                  type="text"
                  placeholder="제목없는 질문"
                  className="w-[27rem] h-16 bg-gray-50 hover:bg-gray-100 placeholder-black"
                ></input>
                <MdOutlinePhoto className="w-7 h-7 text-icon-gray mx-8 my-5" />
                <Selects index={index} className="w-60 h-8" />
              </div>
              <div className="flex justify-center mx-12 mt-4">
                {selectedComponent}
              </div>
              <div className="flex justify-center mx-3 h-[4.5rem]">
                <div className="w-11/12 border-t-2 border-gray-300 flex justify-end items-center">
                  <MdOutlineContentCopy className="text-icon-gray text-2xl mx-6" />
                  <RiDeleteBin6Line
                    onClick={() => handleRemoveQuestion(index)}
                    className="text-icon-gray text-2xl mr-6"
                  />
                  <div className="border-dotted bg-gray-300 h-8 w-[0.03rem]"></div>
                  <SwitchSelect index={index} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Question;
