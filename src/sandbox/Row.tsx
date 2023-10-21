import data from "./data";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Notches } from "@phosphor-icons/react";

import "./SandboxTable.scss";

const Row = ({ row }: { row: { name: string; profession: string } }) => {
  const {
    transform,
    transition,
    attributes,
    listeners,
    setNodeRef,
    isDragging,
  } = useSortable({
    id: row.name,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    width: "100%",
  };

  return (
    <>
      <tr className={isDragging ? "grabbed" : ""} ref={setNodeRef}>
        <td
          className={`drag-handle ${isDragging ? "grabbed" : null}`}
          {...listeners}
          {...attributes}
        >
          <Notches />
        </td>
        <td>{row.name}</td>
        <td>{row.profession}</td>
      </tr>
      {isDragging && (
        <tr>
          <td style={style} colSpan={3} className=".new-row-pos">
            hello
          </td>
        </tr>
      )}
    </>
  );
};

export default Row;
