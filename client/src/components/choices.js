import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Choices = (props) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex">
      <h1 className="mr-1 mt-8 mb-1 text-xl">{props.headline}</h1>
      <div className="mr-8 pt-7 flex justify-center items-end">
        <FormControl component="fieldset">
          <RadioGroup row value={value} onChange={handleChange}>
            {props.c1 ? (
              <FormControlLabel
                value="choice-1"
                control={<Radio color="primary" />}
                label={props.c1}
                labelPlacement="start"
              />
            ) : (
              <></>
            )}

            {props.c2 ? (
              <FormControlLabel
                value="choice-2"
                control={<Radio color="primary" />}
                label={props.c2}
                labelPlacement="start"
              />
            ) : (
              <></>
            )}
            {props.c3 ? (
              <FormControlLabel
                value="choice-3"
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
