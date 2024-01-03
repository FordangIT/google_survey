import { FaRegCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addOption,
  removeOption,
  updateOptionValue,
} from "../../redux/slices/optionSlice";
import { ChangeEvent } from "react";

function MultipleChoice({ qIdx }: { qIdx: number }) {
  const dispatch = useDispatch();
  const options = useSelector(
    (state: RootState) => state.option.options[qIdx] || [],
  );

  const handlerAddOption = () => {
    dispatch(addOption({ qIdx }));
  };

  const handlerRemoveOption = (optionIndex: number) => {
    dispatch(removeOption({ qIdx, optionIdx: optionIndex }));
  };

  const handleOptionChange = (
    event: ChangeEvent<HTMLInputElement>,
    optionIndex: number,
  ) => {
    const newValue: string = event.target.value;
    dispatch(
      updateOptionValue({ qIdx, optionIdx: optionIndex, value: newValue }),
    );
  };
  return (
    <>
      {options.map((option) => (
        <div key={option.index}>
          <div className="flex">
            <FaRegCircle />
            <input
              type="text"
              placeholder="옵션"
              value={option.value}
              onChange={(e) => handleOptionChange(e, option.index)}
            ></input>
          </div>
          <div onClick={() => handlerRemoveOption(option.index)}>삭제버튼</div>
        </div>
      ))}
      <div className="flex" onClick={handlerAddOption}>
        <FaRegCircle /> 옵션 추가
      </div>
    </>
  );
}
export default MultipleChoice;
