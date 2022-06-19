import React, {ChangeEvent, memo, ReactNode, useCallback, useContext, useEffect, useRef} from "react";
import "./default.scss";
import {EditorContext} from "../../modules/wysiwygism";
import {decrypt, encrypt} from "../../services/encryption";

interface ContentPanelProps {
    placeholder?: ReactNode | string;
    defaultValue?: string;
}

const ContentPanel = ({placeholder, defaultValue}: ContentPanelProps) => {

    const {content, setContent} = useContext(EditorContext);
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setContent(defaultValue);
        editorRef.current?.addEventListener("focus", () => {
            document.onselectionchange = e => {
                // console.log(e)
            }
        })
        editorRef?.current?.focus();
    }, []);

    useEffect(() => {
        setContent((old: ReactNode | string) => old);
    }, [content]);

    const onChange = useCallback((e: ChangeEvent<HTMLDivElement>) => {
        setContent(encrypt(e.target?.innerHTML));
    }, [setContent])

    return <div className="content">
        <div className={"content--placeholder " + (content ? "hidden" : "")}>
            <div className="content--placeholder_wrapper">
                {placeholder ? placeholder : <strong>Write something please...</strong>}
            </div>
        </div>
        <div className={"content--panel"}
             onChange={onChange}
             onBlur={onChange}
             ref={editorRef}
             placeholder={"Write something ..."}
             suppressContentEditableWarning={true}
             dangerouslySetInnerHTML={{__html: decrypt(content)}}
             contentEditable={true} />
    </div>

}

export default memo(ContentPanel);
