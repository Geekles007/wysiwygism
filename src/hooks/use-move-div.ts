import {useState} from "react";

// hooks for drag and drop div
export const useMoveDiv = (
    divRef: React.MutableRefObject<HTMLDivElement | null>,
) => {
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        divRef.current!.style.userSelect = "none";
        divRef.current!.style.cursor = "grabbing";
        divRef.current!.style.position = "absolute";
        divRef.current!.style.zIndex = "1";
        divRef.current!.style.left = `${e.clientX - position.x}px`;
        divRef.current!.style.top = `${e.clientY - position.y}px`;

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        setPosition({x: e.clientX - position.x, y: e.clientY - position.y});

        e.preventDefault();

        return false;
    }

    const handleMouseMove = (e: MouseEvent) => {
        divRef.current!.style.left = `${e.clientX - position.x}px`;
        divRef.current!.style.top = `${e.clientY - position.y}px`;

        e.preventDefault();

        return false;
    }

    const handleMouseUp = (e: MouseEvent) => {
        divRef.current!.style.userSelect = "auto";
        divRef.current!.style.cursor = "grab";
        divRef.current!.style.position = "static";
        divRef.current!.style.zIndex = "auto";
        divRef.current!.style.left = "0px";
        divRef.current!.style.top = "0px";

        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);

        e.preventDefault();

    }

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    }
}
