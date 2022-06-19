import React, {memo, useContext} from "react";
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
    FaUnderline,
    FaStrikethrough
} from "react-icons/fa";
import {IoIosReturnLeft, IoMdMove, IoIosReturnRight, IoMdQuote} from "react-icons/io";
import {MdSplitscreen} from "react-icons/md";
import EditorController from "../../controller";
import {EditorContext} from "../../modules/wysiwygism";

interface ToolsPanelProps {
    disabled?: boolean;
}

const ToolsPanel = ({disabled}: ToolsPanelProps) => {
    let offsetX = 0, offsetY = 0;
    const {executeCommand} = EditorController;
    const {setContent} = useContext(EditorContext);

    const move = (e: any) => {
        const el = e.target
        el.style.left = `${e.pageX - offsetX}px`
        el.style.top = `${e.pageY - offsetY}px`
    }
    const add = (e: any) => {
        const el = e.target
        offsetX = e.clientX - el.getBoundingClientRect().left;
        offsetY = e.clientY - el.getBoundingClientRect().top;
        el.addEventListener('mousemove', move);

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
            <PanelItem onClick={(e: any) => executeCommand("undo", setContent, e)} id={"previous"} icon={<IoIosReturnLeft/>}/>
            <PanelItem onClick={(e: any) => executeCommand("redo", setContent, e)} id={"next"} icon={<IoIosReturnRight/>}/>
            <PanelItem onClick={(e: any) => executeCommand("h1", setContent, e)} id={"h1"} icon={"h1"}/>
            <PanelItem onClick={(e: any) => executeCommand("h2", setContent, e)} id={"h2"} icon={"h2"}/>
            <PanelItem onClick={(e: any) => executeCommand("h3", setContent, e)} id={"h3"} icon={"h3"}/>
            <PanelItem onClick={(e: any) => executeCommand("h4", setContent, e)} id={"h4"} icon={"h4"}/>
            <PanelItem onClick={(e: any) => executeCommand("h5", setContent, e)} id={"h5"} icon={"h5"}/>
            <PanelItem onClick={(e: any) => executeCommand("h6", setContent, e)} id={"h6"} icon={"h6"}/>
            <PanelItem onClick={(e: any) => executeCommand("insertParagraph", setContent, e)} id={"paragraph"} icon={"P"}/>
            <PanelItem onClick={(e: any) => executeCommand("bold", setContent, e)} id={"bold"} icon={<FaBold/>}/>
            <PanelItem onClick={(e: any) => executeCommand("strikeThrough", setContent, e)} id={"strikethrough"} icon={<FaStrikethrough/>}/>
            <PanelItem onClick={(e: any) => executeCommand("italic", setContent, e)} id={"italic"} icon={<FaItalic/>}/>
            <PanelItem onClick={(e: any) => executeCommand("fontName", setContent, e)} id={"font-family"} icon={<FaFont />}/>
            <PanelItem onClick={(e: any) => executeCommand("underline", setContent, e)} id={"underline"} icon={<FaUnderline />}/>
            <PanelItem onClick={(e: any) => executeCommand("justifyLeft", setContent, e)} id={"align-left"} icon={<FaAlignLeft/>}/>
            <PanelItem onClick={(e: any) => executeCommand("justifyCenter", setContent, e)} id={"align-center"} icon={<FaAlignCenter/>}/>
            <PanelItem onClick={(e: any) => executeCommand("justifyRight", setContent, e)} id={"align-right"} icon={<FaAlignRight/>}/>
            <PanelItem onClick={(e: any) => executeCommand("justifyFull", setContent, e)} id={"align-justify"} icon={<FaAlignJustify/>}/>
            <PanelItem onClick={(e: any) => executeCommand("link", setContent, e)} id={"link"} icon={<FaLink/>}/>
            <PanelItem onClick={(e: any) => executeCommand("copy", setContent, e)} id={"copy"} icon={<FaCopy/>}/>
            <PanelItem onClick={(e: any) => executeCommand("insertOrderedList", setContent, e)} id={"ol"} icon={<FaListOl/>}/>
            <PanelItem onClick={(e: any) => executeCommand("insertUnorderedList", setContent, e)} id={"ul"} icon={<FaListUl/>}/>
            <PanelItem onClick={(e: any) => executeCommand("trash", setContent, e)} id={"trash"} icon={<FaTrash/>}/>
            <PanelItem onClick={(e: any) => executeCommand("insertBrOnReturn", setContent, e)} id={"splitty"} icon={<MdSplitscreen/>}/>
            <PanelItem onClick={(e: any) => executeCommand("insertImage", setContent, e)} id={"image"} icon={<FaImage />}/>
            <PanelItem onClick={(e: any) => executeCommand("code", setContent, e)} id={"code"} icon={<FaCode/>}/>
            <PanelItem onClick={(e: any) => executeCommand("quote", setContent, e)} id={"quote"} icon={<IoMdQuote />}/>
        </div>
    </div>

}

export default memo(ToolsPanel);
