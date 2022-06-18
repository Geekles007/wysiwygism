import React, {memo, useRef} from "react";
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
    FaTrash
} from "react-icons/fa";
import {IoIosReturnLeft, IoMdMove, IoIosReturnRight} from "react-icons/io";
import {useMoveDiv} from "../../hooks/use-move-div";

interface ToolsPanelProps {

}

const ToolsPanel = ({}: ToolsPanelProps) => {
    const ref = useRef<HTMLDivElement>(null);
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

    return <div ref={ref} className={"panel"} onMouseDown={add} onMouseUp={remove}>
        <div className="panel--mover">
            <IoMdMove/>
        </div>
        <div className="panel--items">
            <PanelItem icon={<FaAlignLeft/>}/>
            <PanelItem icon={<FaAlignCenter/>}/>
            <PanelItem icon={<FaAlignRight/>}/>
            <PanelItem icon={<FaAlignJustify/>}/>
            <PanelItem icon={<FaBold/>}/>
            <PanelItem icon={<FaItalic/>}/>
            <PanelItem icon={<FaLink/>}/>
            <PanelItem icon={<FaCopy/>}/>
            <PanelItem icon={"h1"}/>
            <PanelItem icon={"h2"}/>
            <PanelItem icon={"h3"}/>
            <PanelItem icon={"h4"}/>
            <PanelItem icon={"h5"}/>
            <PanelItem icon={"h6"}/>
            <PanelItem icon={<FaListOl/>}/>
            <PanelItem icon={<FaListUl/>}/>
            <PanelItem icon={<IoIosReturnLeft/>}/>
            <PanelItem icon={<IoIosReturnRight/>}/>
            <PanelItem icon={<FaCode/>}/>
            <PanelItem icon={<FaTrash/>}/>
        </div>
    </div>

}

export default memo(ToolsPanel);
