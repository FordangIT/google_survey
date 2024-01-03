import { FaRegCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addOption,
  removeOption,
  updateOptionValue,
} from "../../redux/slices/optionSlice";
import { ChangeEvent } from "react";
import { MdOutlineCancel } from "react-icons/md";

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
    <div className="flex-col w-full">
      <div className="flex-col ">
        {options.map((option) => (
          <div key={option.index} className="flex ">
            <div className="flex basis-[89.2857143%]">
              <FaRegCircle className="text-gray-300 text-2xl my-2 mr-3" />
              <input
                type="text"
                placeholder="옵션을 작성하세요"
                value={option.value}
                onChange={(e) => handleOptionChange(e, option.index)}
                className="placeholder-black text-lg"
              ></input>
            </div>
            <MdOutlineCancel
              onClick={() => handlerRemoveOption(option.index)}
              className="text-icon-gray text-2xl basis-[10.7141857%]"
            />
          </div>
        ))}
      </div>
      <div className="flex my-2 items-center" onClick={handlerAddOption}>
        <FaRegCircle className="text-gray-300 text-2xl mr-3" />
        <p className="text-gray-500 text-lg hover:underline hover:text-gray-500">
          옵션 추가
        </p>
      </div>
    </div>
  );
}
export default MultipleChoice;
