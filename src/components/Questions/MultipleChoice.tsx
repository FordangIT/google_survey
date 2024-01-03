import { FaRegCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addOption, removeOption } from "../../redux/slices/optionSlice";
function MultipleChoice() {
  const dispatch = useDispatch();
  const options = useSelector((state: RootState) => state.option.options);

  const handlerAddOption = () => {
    const lastIndex = Math.max(...options.map((el) => el.index), 0);
    const newOption = {
      index: lastIndex + 1,
    };
    dispatch(addOption(newOption));
  };

  const handlerRemoveOption = (index: number) => {
    dispatch(removeOption(index));
  };

  return (
    <>
      {options.map((_, index: number) => (
        <div key={index}>
          <FaRegCircle /> 옵션
          <div onClick={() => handlerRemoveOption(index)}>삭제버튼</div>
        </div>
      ))}
      <div className="flex" onClick={handlerAddOption}>
        <FaRegCircle /> 옵션 추가
      </div>
    </>
  );
}
export default MultipleChoice;
