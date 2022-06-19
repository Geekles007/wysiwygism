import React, {memo} from "react";

interface PanelItemProps {
    icon: React.ReactNode | string;
    disabled?: boolean;
    id: string;
}

const PanelItem = ({icon, disabled, id}: PanelItemProps) => {

    return <button id={id} disabled={disabled} className={"panel--item"}>
        {icon}
    </button>

}

export default memo(PanelItem);
