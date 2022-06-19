import React, {memo} from "react";

interface PanelItemProps {
    icon: React.ReactNode | string;
    disabled?: boolean;
    id: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PanelItem = ({icon, disabled, id, onClick}: PanelItemProps) => {

    return <button onClick={onClick} id={id} disabled={disabled} className={"panel--item"}>
        {icon}
    </button>

}

export default memo(PanelItem);
