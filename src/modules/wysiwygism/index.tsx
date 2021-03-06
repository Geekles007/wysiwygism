import React, {memo, ReactNode} from "react";
import "./default.scss";
import ToolsPanel from "../../components/tools-panel";
import ContentPanel from "../../components/content-panel";

interface WysigygismProps {
    defaultValue?: string;
    disabled?: boolean;
    changeNotifier?: (value: string) => void;
    placeholder?: ReactNode | string;
}

export const EditorContext = React.createContext<any>(null);

const Wysigygism = ({placeholder, defaultValue, changeNotifier, disabled = false}: WysigygismProps) => {

    const [content, setContent] = React.useState<ReactNode | string>("");

    return <EditorContext.Provider value={{content, setContent}}>
        <div className={"wrapper"}>
            <ToolsPanel disabled={disabled}/>
            <ContentPanel notifier={changeNotifier} disabled={disabled} defaultValue={defaultValue} placeholder={placeholder}/>
        </div>
    </EditorContext.Provider>

}

export default memo(Wysigygism);
