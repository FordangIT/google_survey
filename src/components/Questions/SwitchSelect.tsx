import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSwitchState,
  toggleSwitch,
} from "../../redux/slices/switchSlice";
export default function SwitchSelect() {
  const dispatch = useDispatch();
  const isChecked = useSelector(selectSwitchState);

  const handleSwitchToggle = () => {
    dispatch(toggleSwitch());
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
}
