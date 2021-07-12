import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";

export default function GroupField({ handleChangeGrupal, grupal }) {
  return (
    <>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Grupal/Individual</FormLabel>
          <RadioGroup value={grupal.toString()} onChange={handleChangeGrupal}>
            <FormControlLabel value='true' control={<Radio />} label='Grupal' />
            <FormControlLabel
              value='false'
              control={<Radio />}
              label='Individual'
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
