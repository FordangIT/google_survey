import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function SwitchSelect() {
  return (
    <div className="mx-3">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="필수"
            control={<Switch color="secondary" />}
            label="필수"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
