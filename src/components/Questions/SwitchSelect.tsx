import React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSwitchState,
  toggleSwitch,
} from "../../redux/slices/switchSlice";
import { RootState } from "../../redux/store";
interface SwitchSelectProps {
  index: number;
}
const SwitchSelect: React.FC<SwitchSelectProps> = ({ index }) => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state: RootState) =>
    selectSwitchState(state, index),
  );

  const handleSwitchToggle = () => {
    dispatch(toggleSwitch({ index }));
  };
  return (
    <div className="mx-3">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="필수"
            control={
              <Switch
                color="secondary"
                checked={isChecked}
                onChange={handleSwitchToggle}
              />
            }
            label="필수"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};
export default SwitchSelect;
