import React from "react";
import MenuItem from "./MenuItem";
import Icon from "./Profile";

export default function Header(props) {
    return (
        <div className="flex justify-between items-center">
            <MenuItem/>
            <h1>{props.title}</h1>
            <Icon/>
        </div>
    )
}
