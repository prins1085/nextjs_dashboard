import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const dnd = () => {
  const [pendingInputBox, setPendingInputBox] = useState(false);
  const [progressInputBox, setProgressInputBox] = useState(false);
  const [completeInputBox, setCompleteInputBox] = useState(false);

  const [pendingTask, setPendingTask] = useState("");
  const [pendingLists, setPendingLists] = useState([]);
  const [progressTask, setProgressTask] = useState("");
  const [progressLists, setProgressLists] = useState([]);
  const [completedTask, setCompletedTask] = useState("");
  const [completedLists, setCompletedLists] = useState([]);

  const addPendingTaskHandler = () => {
    if (pendingTask.trim().length > 0) {
      let id = Math.random() + 10;
      const pendingData = { name: pendingTask, id };
      setPendingLists((prevTask) => [...prevTask, { ...pendingData }]);
      setPendingTask("");
    }
  };
  const addProgressTaskHandler = () => {
    if (pendingTask.trim().length > 0) {
      let id = Math.random() + 10;
      const progressData = { name: progressTask, id };
      setProgressLists((prevTask) => [...prevTask, { ...progressData }]);
      setProgressTask("");
    }
  };
  const addCompletedTaskHandler = () => {
    if (pendingTask.trim().length > 0) {
      let id = Math.random() + 10;
      const completedData = { name: completedTask, id };
      setCompletedLists((prevTask) => [...prevTask, { ...completedData }]);
      setCompletedTask("");
    }
  };

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    let add;
    let pending = pendingLists;
    let progress = progressLists;
    let completed = completedLists;

    if (source.droppableId === "PendingList") {
      add = pending[source.index];
      pending.splice(source.index, 1);
    } else if (source.droppableId === "ProgressList") {
      add = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "PendingList") {
      pending.splice(destination.index, 0, add);
    } else if (destination.droppableId === "ProgressList") {
      progress.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setPendingLists(pending);
    setProgressLists(progress);
    setCompletedLists(completed);
  };

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold">DRAG AND DROP</h1>
      <p className="text-center mb-10 text-[#5BC9B4]">React Beautiful DND</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-between w-full gap-10 flex-wrap md:flex-nowrap">
          {/* pending list */}
          <Droppable droppableId="PendingList">
            {(provided) => (
              <div
                className="md:w-1/3 w-full flex flex-col"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="flex justify-between text-xl mb-6 font-bold">
                  <span>Pending</span>
                  <button
                    onClick={() => {
                      setPendingInputBox(true);
                      setProgressInputBox(false);
                      setCompleteInputBox(false);
                    }}
                  >
                    +
                  </button>
                </div>
                {pendingInputBox && (
                  <div className="flex flex-col bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C] space-y-2 mb-5">
                    <div className="flex justify-between">
                      <p className="text-sm">To-do Title</p>
                      <button
                        className="text-[10px]"
                        onClick={() => setPendingInputBox(false)}
                      >
                        <i className="fi fi-br-cross"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="bg-transparent outline-none border-b-[#32BBB4] border-b-[1px]"
                      placeholder="e.g. Send Invitation"
                      value={pendingTask}
                      onChange={(e) => setPendingTask(e.target.value)}
                    />
                    <button
                      onClick={addPendingTaskHandler}
                      className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold"
                    >
                      Add
                    </button>
                  </div>
                )}
                {pendingLists.map((pendingList, index) => (
                  <Draggable
                    draggableId={pendingList.id.toString()}
                    index={index}
                    key={pendingList.id}
                  >
                    {(provided) => (
                      <div
                        className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <p>{pendingList.name}</p>
                        <div className="flex justify-end items-end h-8">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* in progress list */}
          <Droppable droppableId="ProgressList">
            {(provided) => (
              <div
                className="md:w-1/3 w-full flex flex-col"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="flex justify-between text-xl mb-6 font-bold">
                  <span>In Progress</span>
                  <button
                    onClick={() => {
                      setProgressInputBox(true);
                      setPendingInputBox(false);
                      setCompleteInputBox(false);
                    }}
                  >
                    +
                  </button>
                </div>
                {progressInputBox && (
                  <div className="flex flex-col bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C] space-y-2 mb-5">
                    <div className="flex justify-between">
                      <p className="text-sm">To-do Title</p>
                      <button
                        className="text-[10px]"
                        onClick={() => setProgressInputBox(false)}
                      >
                        <i className="fi fi-br-cross"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="bg-transparent outline-none border-b-[#32BBB4] border-b-[1px]"
                      placeholder="e.g. Send Invitation"
                      value={progressTask}
                      onChange={(e) => setProgressTask(e.target.value)}
                    />
                    <button
                      onClick={addProgressTaskHandler}
                      className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold"
                    >
                      Add
                    </button>
                  </div>
                )}
                {progressLists.map((progressList, index) => (
                  <Draggable
                    draggableId={progressList.id.toString()}
                    index={index}
                    key={progressList.id}
                  >
                    {(provided) => (
                      <div
                        className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <p>{progressList.name}</p>
                        <div className="flex justify-end items-end h-8">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* completed list */}
          <Droppable droppableId="CompletedList">
            {(provided) => (
              <div
                className="md:w-1/3 w-full flex flex-col"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="flex justify-between text-xl mb-6 font-bold">
                  <span>Completed</span>
                  <button
                    onClick={() => {
                      setCompleteInputBox(true);
                      setPendingInputBox(false);
                      setProgressInputBox(false);
                    }}
                  >
                    +
                  </button>
                </div>
                {completeInputBox && (
                  <div className="flex flex-col bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C] space-y-2 mb-5">
                    <div className="flex justify-between">
                      <p className="text-sm">To-do Title</p>
                      <button
                        className="text-[10px]"
                        onClick={() => setCompleteInputBox(false)}
                      >
                        <i className="fi fi-br-cross"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="bg-transparent outline-none border-b-[#32BBB4] border-b-[1px]"
                      placeholder="e.g. Send Invitation"
                      value={completedTask}
                      onChange={(e) => setCompletedTask(e.target.value)}
                    />
                    <button
                      onClick={addCompletedTaskHandler}
                      className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold"
                    >
                      Add
                    </button>
                  </div>
                )}
                {completedLists.map((completedList, index) => (
                  <Draggable
                    draggableId={completedList.id.toString()}
                    index={index}
                    key={completedList.id}
                  >
                    {(provided) => (
                      <div
                        className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <p>{completedList.name}</p>
                        <div className="flex justify-end items-end h-8">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default dnd;
