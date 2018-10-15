import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        borderRadius: "40px",
        width: "250px",
        height: "45px",
        color: "white",
        background:
            "linear-gradient(165deg, rgb(77,131,251) 0%, rgb(136,101,188) 100%)",
    },
    buttonDisabled: {
        margin: theme.spacing.unit,
        borderRadius: "40px",
        width: "250px",
        height: "45px",
        color: "white",
        background: "grey",
    },

    input: {
        display: "none",
    },
});

const ButtonBox = props => {
    const { classes, width } = props;
    return (
        <div>
            {props.disabled ? (
                <Button
                    variant="contained"
                    className={classes.buttonDisabled}
                    onClick={props.buttonClick}
                    type={props.type}
                    disabled
                    style={{
                        marginLeft: "0",
                    }}
                >
                    {props.title}
                </Button>
            ) : (
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={props.buttonClick}
                    type={props.type}
                    // disabled={props.disabled}
                    style={{
                        marginLeft: "0",
                        width: width,
                    }}
                >
                    {props.title}
                </Button>
            )}
        </div>
    );
};

ButtonBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBox);
