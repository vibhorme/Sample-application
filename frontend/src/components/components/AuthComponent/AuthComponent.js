import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { validateLoginToken } from "../utils/api";

function AuthComponent(WrappedComponent) {
    return connect(
        null,
        null
    )(
        class extends React.Component {
            state = { loading: true, tokenValidity: false };

            componentDidMount = async () => {
                if (
                    !(
                        this.props.location.pathname === "/login" &&
                        localStorage.getItem("token") == null
                    )
                ) {
                    await this.props.dispatch(
                        validateLoginToken(
                            "auth/validate-token",
                            this.setLocalState
                        )
                    );
                }
            };

            setLocalState = tokenSate => {
                this.setState({ loading: false, tokenValidity: tokenSate });
            };

            render() {
                return this.state.loading ? (
                    <div className="dt-loader">
                        <Loader
                            type="ThreeDots"
                            color="gray"
                            height={80}
                            width={80}
                        />
                    </div>
                ) : (
                    <WrappedComponent
                        tokenValidity={this.state.tokenValidity}
                    />
                );
            }
        }
    );
}

export default AuthComponent;
