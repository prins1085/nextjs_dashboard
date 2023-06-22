import React, { useState } from "react";

const dnd = () => {
  const [pendingInputBox, setPendingInputBox] = useState(false);
  const [progressInputBox, setProgressInputBox] = useState(false);
  const [completeInputBox, setCompleteInputBox] = useState(false);
  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold">DRAG AND DROP</h1>
      <p className="text-center mb-10 text-[#5BC9B4]">React Beautiful DND</p>

      <div className="flex justify-between w-full gap-10 flex-wrap md:flex-nowrap">
        {/* pending list */}
        <div className="md:w-1/3 w-full flex flex-col">
          <div className="flex justify-between text-xl mb-6 font-bold">
            <span>Pending</span>
            <button onClick={() => setPendingInputBox(true)}>+</button>
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
              />
              <button className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold">
                Add
              </button>
            </div>
          )}
          <div>
            <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
              <p>Task 1</p>
              <div className="flex justify-end items-end h-8">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
              <p>Task 2</p>
              <div className="flex justify-end items-end h-8">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
              <p>Task 3</p>
              <div className="flex justify-end items-end h-8">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        {/* in progress list */}
        <div className="md:w-1/3 w-full flex flex-col">
          <div className="flex justify-between text-xl mb-6 font-bold">
            <span>In Progress</span>
            <button onClick={() => setProgressInputBox(true)}>+</button>
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
              />
              <button className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold">
                Add
              </button>
            </div>
          )}
          <div>
            <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
              <p>Task 1</p>
              <div className="flex justify-end items-end h-8">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
              <p>Task 2</p>
              <div className="flex justify-end items-end h-8">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        {/* completed list */}
        <div className="md:w-1/3 w-full flex flex-col">
          <div className="flex justify-between text-xl mb-6 font-bold">
            <span>Completed</span>
            <button onClick={() => setCompleteInputBox(true)}>+</button>
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
              />
              <button className="text-left bg-[#32BBB4] w-fit px-2 py-1 rounded-sm text-black text-sm font-semibold">
                Add
              </button>
            </div>
          )}
          <div>
            <div className="bg-[#1F2A40] px-3 pb-2 pt-1 border border-[#3C3F4C]">
              <p>Task 1</p>
              <div className="flex justify-end items-end h-8">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dnd;
