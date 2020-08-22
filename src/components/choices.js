import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Choices = (props) => {
  return (
    <div className="flex">
      <h1 className="mr-1 mt-8 mb-1 text-xl">{props.headline}</h1>
      <div className="mr-8 pt-7 flex justify-center items-end">
        <FormControl component="fieldset">
          <RadioGroup row onChange={(e) => props.handleChange(e.target.value)}>
            {props.c1 ? (
              <FormControlLabel
                value={props.c1}
                control={<Radio color="primary" />}
                label={props.c1}
                labelPlacement="start"
              />
            ) : (
              <></>
            )}

            {props.c2 ? (
              <FormControlLabel
                value={props.c2}
                control={<Radio color="primary" />}
                label={props.c2}
                labelPlacement="start"
              />
            ) : (
              <></>
            )}
            {props.c3 ? (
              <FormControlLabel
                value={props.c3}
                control={<Radio color="primary" />}
                label={props.c3}
                labelPlacement="start"
              />
            ) : (
              <></>
            )}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Choices;
