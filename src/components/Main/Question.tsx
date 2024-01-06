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
import { addQuestion, removeQuestion } from "../../redux/slices/questionSlice";
function Question() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questions.questions || [],
  );
  // const handleCopyQuestion = (index: number) => {
  //   dispatch(copyQuestion({index}));
  // };

  const handleRemoveQuestion = (index: number) => {
    dispatch(removeQuestion({ index }));
    console.log(index, "삭제 index");
  };

  const selectedQuestionTypeIndex = useSelector(
    (state: RootState) => state.type.indexedTypes,
  );
  console.log(questions, "남아 있는 배열확인");
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        {questions.map((question, index: number) => {
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
              selectedComponent = <MultipleChoice qIdx={question.index} />;
              break;
            case 40:
              selectedComponent = <Checkbox qIdx={question.index} />;
              break;
            case 50:
              selectedComponent = <Dropdown qIdx={question.index} />;
              break;
            default:
              break;
          }

          return (
            <div
              key={index}
              className="w-[455px] md:w-[855px] bg-white mt-4 rounded-lg flex-col pt-4"
            >
              <div className="flex-row justify-center items-center mt-7 pl-7 md:pl-10">
                <input
                  type="text"
                  placeholder="제목없는 질문"
                  className="w-[14rem] md:w-[35rem] h-16 bg-gray-50 hover:bg-gray-100 placeholder-black md:my-0 md:mx-2"
                />
                <Selects
                  index={question.index}
                  className="w-44 h-20 my-4 py-6 md:h-8 "
                />
              </div>

              <div className="flex justify-center mx-12 mt-2">
                {selectedComponent}
              </div>
              <div className="flex justify-center mx-3 h-[4.5rem]">
                <div className="w-11/12 border-t-2 border-gray-300 flex justify-end items-center">
                  <MdOutlineContentCopy
                    // onClick={() => handleCopyQuestion(index)}
                    className="text-icon-gray text-2xl mx-6"
                  />
                  <RiDeleteBin6Line
                    onClick={() => handleRemoveQuestion(question.index)}
                    className="text-icon-gray text-2xl mr-6"
                  />
                  <div className="border-dotted bg-gray-300 h-8 w-[0.03rem]"></div>
                  <SwitchSelect index={question.index} />
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
