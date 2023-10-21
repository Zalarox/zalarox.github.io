import data from "./data";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCenter,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import "./SandboxTable.scss";
import Row from "./Row";
import { useState } from "react";

const SandboxTable = () => {
  const [activeId, setActiveId] = useState<string | number>();
  const [dataState, setDataState] = useState(data);
  const idMap = dataState.map((x) => x.name);

  const onDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const onDragCancel = () => {
    setActiveId(undefined);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setDataState((data) => {
        const oldIndex = dataState.findIndex((x) => x.name === active.id);
        const newIndex = dataState.findIndex((x) => x.name === over?.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }

    setActiveId(undefined);
  };

  return (
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices
        purus ante. Mauris consectetur magna tristique dapibus fringilla. Donec
        aliquet turpis quam, non elementum arcu convallis vel. Proin tincidunt
        orci sed ligula facilisis iaculis. Sed nec diam eu enim finibus finibus.
        Cras porttitor efficitur lorem.
      </p>
      <p>
        Nunc laoreet ullamcorper tellus, eget pretium turpis vulputate eu.
        Quisque ullamcorper diam at nibh cursus tristique. Phasellus ultricies
        libero facilisis erat suscipit, vel aliquet tortor dignissim. Nulla
        ultricies finibus bibendum. Nulla porttitor neque eget sapien commodo
        consectetur. Quisque posuere ullamcorper est, a vehicula urna rutrum
        vitae. In eros quam, hendrerit sed elit eget, cursus blandit odio.
      </p>
      <p>
        Nulla sed lacus dictum urna ullamcorper elementum porta ac felis. Fusce
        at ipsum diam. Ut posuere viverra purus, vel tincidunt lorem vulputate
        ut. Suspendisse egestas dui id mauris interdum tempus. Nunc elit dolor,
        mollis nec ipsum ut, finibus vehicula justo. Nulla eleifend rhoncus enim
        id porta. Morbi elit orci, vehicula non molestie quis, dapibus in lorem.
        Nunc rutrum leo sit amet mauris tempus, ac cursus nibh tempor.
      </p>
      <DndContext
        onDragStart={onDragStart}
        onDragCancel={onDragCancel}
        onDragEnd={onDragEnd}
        modifiers={[restrictToVerticalAxis]}
        collisionDetection={closestCenter}
      >
        <SortableContext items={idMap} strategy={verticalListSortingStrategy}>
          <table id="dndtable">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Profession</th>
            </tr>
            {dataState.map((row) => (
              <Row row={row} />
            ))}
          </table>
        </SortableContext>
        <DragOverlay />
      </DndContext>
    </div>
  );
};

export default SandboxTable;
