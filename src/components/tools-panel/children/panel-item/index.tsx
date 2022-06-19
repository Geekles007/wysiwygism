import React, {memo} from "react";

interface PanelItemProps {
    icon: React.ReactNode | string;
}

const PanelItem = ({icon}: PanelItemProps) => {

    return <a className={"panel--item"}>
        {icon}
    </a>

}

export default memo(PanelItem);
