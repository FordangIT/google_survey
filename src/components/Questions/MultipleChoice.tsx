import { FaRegCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addOption,
  removeOption,
  updateOptionValue,
} from "../../redux/slices/optionSlice";
import { ChangeEvent } from "react";
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

  const handleOptionChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue: string = event.target.value;
    dispatch(updateOptionValue({ index, value: newValue }));
  };
  return (
    <>
      {options.map((option, index: number) => (
        <div key={index}>
          <div className="flex">
            <FaRegCircle />
            <input
              type="text"
              placeholder="옵션"
              value={option.value}
              onChange={(e) => handleOptionChange(e, option.index)}
            ></input>
          </div>
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
