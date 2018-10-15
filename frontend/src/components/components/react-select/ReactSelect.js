import React from "react";
import Select from "react-select";

import "./reactSelect.scss";

export const ReactSelect = ({
    input,
    multi,
    placeholder,
    simpleValue,
    errorMsg,
    width,
    marginRight,
    meta: { touched, error },
    ...field
}) => {
    return (
        <div
            className="react-select-control"
            style={{
                width: width || "200px",
                marginRight: marginRight || "4%",
            }}
        >
            <Select
                noResultsText="No Results Found"
                // style={{ width: width ||"200px", marginRight: "4%" }}
                multi={multi}
                simpleValue={simpleValue}
                errorText={touched && error}
                value={input.value}
                placeholder={placeholder}
                onBlur={() => input.onBlur(input.value)}
                onChange={value => {
                    input.onChange(value);
                }}
                {...field}
            />
            <div
                style={{
                    color: "red",
                    fontSize: "10px",
                    marginTop: "5px",
                }}
            >
                {touched && error && <div>{errorMsg}</div>}
            </div>
        </div>
    );
};
