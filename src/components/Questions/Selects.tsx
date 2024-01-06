import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { MdOutlineShortText } from "react-icons/md";
import { BsBodyText } from "react-icons/bs";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import { MdOutlineChecklistRtl } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateType } from "../../redux/slices/typeSlices";
import { RootState } from "../../redux/store";
interface SelectProps {
  index: number;
  className?: string;
}

function Selects({ index, className }: SelectProps) {
  const dispatch = useDispatch();
  const types = useSelector((state: RootState) => state.type.indexedTypes);

  const selectedType = types[index] || 10;

  const handleChange = (event: SelectChangeEvent) => {
    const newType = Number(event.target.value);
    dispatch(updateType({ index, type: newType }));
  };

  return (
    <FormControl className={className}>
      <InputLabel id={`demo-simple-select-label-${index}`}>Type</InputLabel>
      <Select
        labelId={`demo-simple-select-label-${index}`}
        id={`demo-simple-select-${index}`}
        value={String(selectedType)}
        label="type"
        onChange={handleChange}
        className="h-16"
      >
        <MenuItem value={10} className="h-14">
          <MdOutlineShortText className="w-6 h-6 text-icon-gray mr-3" />
          <div>단답형</div>
        </MenuItem>
        <MenuItem value={20} className="h-14">
          <BsBodyText className="w-6 h-6 text-icon-gray mr-3" />
          장문형
        </MenuItem>
        <MenuItem value={30} className="h-14">
          <MdOutlineRadioButtonChecked className="w-6 h-6 text-icon-gray mr-3" />
          객관식 질문
        </MenuItem>
        <MenuItem value={40} className="h-14">
          <IoCheckboxOutline className="w-6 h-6 text-icon-gray mr-3" />
          체크박스
        </MenuItem>
        <MenuItem value={50} className="h-14">
          <MdOutlineChecklistRtl className="w-6 h-6 text-icon-gray mr-3" />
          드롭다운
        </MenuItem>
      </Select>
    </FormControl>
  );
}
export default Selects;
