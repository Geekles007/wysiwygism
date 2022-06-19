import {encrypt} from "../services/encryption";
import {ChangeEvent, ReactNode} from "react";

class EditorController {

    get getContent() {
        return encrypt(`<div>
        <strong>The standard Lorem Ipsum passage, used since the 1500s</strong>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
<strong>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</strong>
<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</p>
<strong>1914 translation by H. Rackham</strong>
<p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
</p>
<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
</p>

<div class="quote">Always do what you want to do.</div>
    </div>`);
    }

    howIsWritten(behavior: string) {
        return document.queryCommandState(behavior);
    }

    checkHowIsWritten = () => {
        const bolder = document.getElementById("bold");
        const italicer = document.getElementById("italic");
        const strike = document.getElementById("strikethrough");
        const underliner = document.getElementById("underline");
        const alignLeft = document.getElementById("align-left");
        const alignRight = document.getElementById("align-right");
        const alignCenter = document.getElementById("align-center");
        const alignJustify = document.getElementById("align-justify");
        if (bolder) {
            bolder.classList.toggle('_active', this.howIsWritten("bold"));
        }
        if (strike) {
            strike.classList.toggle('_active', this.howIsWritten("strikeThrough"));
        }
        if (italicer) {
            italicer.classList.toggle('_active', this.howIsWritten("italic"));
        }
        if (underliner) {
            underliner.classList.toggle('_active', this.howIsWritten("underline"));
        }
        if (alignLeft) {
            alignLeft.classList.toggle('_active', this.howIsWritten("justifyLeft"));
        }
        if (alignRight) {
            alignRight.classList.toggle('_active', this.howIsWritten("justifyRight"));
        }
        if (alignCenter) {
            alignCenter.classList.toggle('_active', this.howIsWritten("justifyCenter"));
        }
        if (alignJustify) {
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

    executeCommand(command: string, setContent: (old: ReactNode | string) => void, e: ChangeEvent<HTMLDivElement>) {
        const editor = document.getElementById("editor");
        const S = window.getSelection();
        if (editor) {
            switch (command) {
                case "h1":
                    document.execCommand('insertHTML', false, '<h1>' + S + '</h1>');
                    break;
                case "h2":
                    document.execCommand('insertHTML', false, '<h2>' + S + '</h2>');
                    break;
                case "h3":
                    document.execCommand('insertHTML', false, '<h3>' + S + '</h3>');
                    break;
                case "h4":
                    document.execCommand('insertHTML', false, '<h4>' + S + '</h4>');
                    break;
                case "h5":
                    document.execCommand('insertHTML', false, '<h5>' + S + '</h5>');
                    break;
                case "h6":
                    document.execCommand('insertHTML', false, '<h6>' + S + '</h6>');
                    break;
                case "link":
                    const url = prompt("Enter the link URL", "http://");
                    document.execCommand('insertHTML', false, '<a target="_blank" href="' + url + '">' + S + '</a>');
                    break;
                case "insertImage":
                    const image = prompt("Enter the link URL", "http://") ?? "";
                    document.execCommand('insertImage', false, image);
                    break;
                case "fontName":
                    const fontName = prompt("Enter the font name", "") ?? "";
                    document.execCommand('fontName', false, fontName);
                    break;
                case "code":
                    document.execCommand('insertHTML', false, '<code>' + S + '</code>');
                    break;
                case "quote":
                    document.execCommand('insertHTML', false, '<div class="quote">' + S + '</div>');
                    break;
                case "trash":
                    document.execCommand('delete', false, '');
                    break;
                default:
                    document.execCommand(command, false);
                    break;
            }
            setContent(encrypt(editor.innerHTML));
            e.preventDefault();
        }
    }

}

export default new EditorController();
