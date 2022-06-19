import {encrypt} from "../services/encryption";

class EditorController {

    get getContent() {
        return encrypt(`<div>
        <strong>The standard Lorem Ipsum passage, used since the 1500s</strong>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
</p>
    </div>`);
    }
    
    howIsWritten(behavior: string) {
        return document.queryCommandState(behavior);
    }

    checkHowIsWritten = () => {
        const bolder = document.getElementById("boldy");
        const italicer = document.getElementById("italic");
        const underliner = document.getElementById("underline");
        const alignLeft = document.getElementById("align-left");
        const alignRight = document.getElementById("align-right");
        const alignCenter = document.getElementById("align-center");
        const alignJustify = document.getElementById("align-justify");
        if(bolder) {
            bolder.classList.toggle('_active', this.howIsWritten("bold"));
        }
        if(italicer) {
            italicer.classList.toggle('_active', this.howIsWritten("italic"));
        }
        if(underliner) {
            underliner.classList.toggle('_active', this.howIsWritten("underline"));
        }
        if(alignLeft) {
            alignLeft.classList.toggle('_active', this.howIsWritten("justifyLeft"));
        }
        if(alignRight) {
            alignRight.classList.toggle('_active', this.howIsWritten("justifyRight"));
        }
        if(alignCenter) {
            alignCenter.classList.toggle('_active', this.howIsWritten("justifyCenter"));
        }
        if(alignJustify) {
            alignJustify.classList.toggle('_active', this.howIsWritten("justifyFull"));
        }
    }

    fontSize(size: number, unit: string) {
        const px = size + unit;
        document.execCommand("fontSize", false, "7");
        let fontElements = document.getElementsByTagName("font");
        for (let i = 0, len = fontElements.length; i < len; ++i) {
            if (fontElements[i].size === "7") {
                fontElements[i].removeAttribute("size");
                fontElements[i].style.fontSize = px;
            }
        }
    };

}

export default new EditorController();
