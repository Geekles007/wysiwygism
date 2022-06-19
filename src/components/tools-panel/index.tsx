import React, {memo} from "react";
import "./default.scss";
import PanelItem from "./children/panel-item";
import {
    FaAlignCenter,
    FaAlignJustify,
    FaAlignLeft,
    FaAlignRight,
    FaBold,
    FaCopy,
    FaItalic,
    FaLink,
    FaListUl,
    FaListOl,
    FaCode,
    FaTrash,
    FaImage,
    FaFont,
    FaUnderline
} from "react-icons/fa";
import {IoIosReturnLeft, IoMdMove, IoIosReturnRight} from "react-icons/io";
import {MdSplitscreen} from "react-icons/md";

interface ToolsPanelProps {
    disabled?: boolean;
}

const ToolsPanel = ({disabled}: ToolsPanelProps) => {
    let offsetX = 0, offsetY = 0;

    const move = (e: any) => {
        const el = e.target
        el.style.left = `${e.pageX - offsetX}px`
        el.style.top = `${e.pageY - offsetY}px`
    }
    const add = (e: any) => {
        const el = e.target
        offsetX = e.clientX - el.getBoundingClientRect().left
        offsetY = e.clientY - el.getBoundingClientRect().top
        el.addEventListener('mousemove', move)

        e.preventDefault();
    }
    const remove = (e: any) => {
        const el = e.target
        el.removeEventListener('mousemove', move)

        e.preventDefault();
    }

    return <div className={"panel"} onMouseDown={add} onMouseUp={remove}>
        <div className="panel--mover">
            <IoMdMove/>
        </div>
        <div className="panel--items">
            <PanelItem icon={<IoIosReturnLeft/>}/>
            <PanelItem icon={<IoIosReturnRight/>}/>
            <PanelItem icon={"h1"}/>
            <PanelItem icon={"h2"}/>
            <PanelItem icon={"h3"}/>
            <PanelItem icon={"h4"}/>
            <PanelItem icon={"h5"}/>
            <PanelItem icon={"h6"}/>
            <PanelItem icon={"P"}/>
            <PanelItem icon={<FaBold/>}/>
            <PanelItem icon={<FaItalic/>}/>
            <PanelItem icon={<FaFont />}/>
            <PanelItem icon={<FaUnderline />}/>
            <PanelItem icon={<FaAlignLeft/>}/>
            <PanelItem icon={<FaAlignCenter/>}/>
            <PanelItem icon={<FaAlignRight/>}/>
            <PanelItem icon={<FaAlignJustify/>}/>
            <PanelItem icon={<FaLink/>}/>
            <PanelItem icon={<FaCopy/>}/>
            <PanelItem icon={<FaListOl/>}/>
            <PanelItem icon={<FaListUl/>}/>
            <PanelItem icon={<FaTrash/>}/>
            <PanelItem icon={<MdSplitscreen/>}/>
            <PanelItem icon={<FaImage />}/>
            <PanelItem icon={<FaCode/>}/>
        </div>
    </div>

}

export default memo(ToolsPanel);
