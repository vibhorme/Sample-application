import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import "./selectBox.scss";

const width = "22%";

const SelectBox = props => {
    const isArrayOfObject = props.options[0] instanceof Object;
    let options;
    if (isArrayOfObject) {
        options = props.options.map(opt => {
            return (
                <MenuItem value={opt.value} key={opt.value}>
                    {opt.text}
                </MenuItem>
            );
        });
    } else {
        options = props.options.map(opt => {
            return (
                <MenuItem value={opt} key={opt}>
                    {opt}
                </MenuItem>
            );
        });
    }

    return (
        <React.Fragment>
            <FormControl
                required={props.required}
                style={{
                    width: props.width || width,
                    marginRight: props.marginRight,
                }}
                className="dt-input__select"
            >
                <InputLabel htmlFor={props.id}>{props.label}</InputLabel>

                <Select
                    {...props.input}
                    inputProps={{
                        name: props.name,
                        id: props.name,
                    }}
                    name={props.name}
                    disabled={props.disabled}
                    onChange={event => {
                        props.input.onChange(event.target.value);
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options}
                </Select>
                <div className="hint"> {props.hint}</div>
                <div className="dt-input__error">
                    {props.meta && props.meta.touched ? props.meta.error : ""}
                </div>
            </FormControl>
        </React.Fragment>
    );
};

export default SelectBox;
