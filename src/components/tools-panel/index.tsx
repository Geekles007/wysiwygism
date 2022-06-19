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
            <PanelItem id={"previous"} icon={<IoIosReturnLeft/>}/>
            <PanelItem id={"next"} icon={<IoIosReturnRight/>}/>
            <PanelItem id={"h1"} icon={"h1"}/>
            <PanelItem id={"h2"} icon={"h2"}/>
            <PanelItem id={"h3"} icon={"h3"}/>
            <PanelItem id={"h4"} icon={"h4"}/>
            <PanelItem id={"h5"} icon={"h5"}/>
            <PanelItem id={"h6"} icon={"h6"}/>
            <PanelItem id={"paragraph"} icon={"P"}/>
            <PanelItem id={"boldy"} icon={<FaBold/>}/>
            <PanelItem id={"italic"} icon={<FaItalic/>}/>
            <PanelItem id={"font-family"} icon={<FaFont />}/>
            <PanelItem id={"underline"} icon={<FaUnderline />}/>
            <PanelItem id={"align-left"} icon={<FaAlignLeft/>}/>
            <PanelItem id={"align-center"} icon={<FaAlignCenter/>}/>
            <PanelItem id={"align-right"} icon={<FaAlignRight/>}/>
            <PanelItem id={"align-justify"} icon={<FaAlignJustify/>}/>
            <PanelItem id={"link"} icon={<FaLink/>}/>
            <PanelItem id={"copy"} icon={<FaCopy/>}/>
            <PanelItem id={"list-ol"} icon={<FaListOl/>}/>
            <PanelItem id={"list-ul"} icon={<FaListUl/>}/>
            <PanelItem id={"trash"} icon={<FaTrash/>}/>
            <PanelItem id={"splitty"} icon={<MdSplitscreen/>}/>
            <PanelItem id={"image"} icon={<FaImage />}/>
            <PanelItem id={"code"} icon={<FaCode/>}/>
        </div>
    </div>

}

export default memo(ToolsPanel);
