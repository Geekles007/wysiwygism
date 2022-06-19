import React, {memo} from "react";

interface PanelItemProps {
    icon: React.ReactNode | string;
    disabled?: boolean;
}

const PanelItem = ({icon, disabled}: PanelItemProps) => {

    return <button disabled={disabled} className={"panel--item"}>
        {icon}
    </button>

}

export default memo(PanelItem);
