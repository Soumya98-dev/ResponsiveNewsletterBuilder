import React from "react";
import { useDrag } from "react-dnd";

function DraggableText(){
    const [{isDragging},drag] = useDrag(() => ({
        type: "text",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return(
        <div ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: "move"
        }}>
            Drag this text

        </div>
    )
}

export default DraggableText