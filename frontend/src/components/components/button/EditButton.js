import React from "react";
import "./editButton.scss";
import edit_icon from "./../../assets/images/icons/edit_icon@black.png";

const EditButton = ({ buttonName, icon, handleSubmit, editMode }) => {
    return (
        <button
            className="dt-button1"
            onClick={handleSubmit}
            disabled={editMode}
        >
            <div className=" dt-editc" style={{ alignItems: "center" }}>
                <div>
                    {icon ? (
                        <img
                            src={edit_icon}
                            className="dt-button-icon"
                            style={{ height: 22 }}
                            alt=""
                        />
                    ) : (
                        ""
                    )}
                </div>
                <div style={{ marginLeft: 5 }}>{buttonName}</div>
            </div>
        </button>
    );
};

export default EditButton;
