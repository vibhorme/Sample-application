import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import classNames from "classnames";
// import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import "../../assets/styles/common.scss";

const styles1 = theme => ({
    success: {
        backgroundColor: "#43a047",
    },
    error: {
        backgroundColor: "#d32f2f",
    },
    info: {
        backgroundColor: "#1976d2",
    },
    warning: {
        backgroundColor: "#ffa000",
    },
    message: {
        display: "flex",
        alignItems: "center",
    },
});
function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;

    return (
        <SnackbarContent
            className={classNames(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    {message}
                </span>
            }
            {...other}
        />
    );
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);
class Toastr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
        };
    }

    handleClick = state => () => {
        this.setState({ open: true, ...state });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state;
        const { type, message } = this.props;
        console.log("toastr props", this.props);
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={open}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={this.handleClose}
                        variant={type ? type : "info"}
                        message={message}
                    />
                </Snackbar>
            </div>
        );
    }
}

export default Toastr;
