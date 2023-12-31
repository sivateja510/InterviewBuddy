import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const TaskBoards = () => {
  const navigate = useNavigate();
  const handleAddNew = () => {
    // Navigate to the "Insert" route
    navigate('/Insert');
  };
  const handleEdit = () => {
    // Navigate to the "Insert" route
    navigate('/Data');
  };


  const [startDate, setStartDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [taskName, setTaskName] = useState('');

  const [toDoTasks, setToDoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [inReviewTasks, setInReviewTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const localStorageData = localStorage.getItem('yourDataKey');
    console.log(localStorageData);
    if (localStorageData) {
      const data = JSON.parse(localStorageData);
      // window.alert(data.status)
      switch (data.status) {
        case 'todo':
          setToDoTasks((prevTasks) => [...prevTasks, data]);
          setTaskName(data.taskName);
          setStartDate(data.startTime);
          setDeadline(data.deadline);
          console.log("Toddo")
          break;
        case 'process':
          setInProgressTasks((prevTasks) => [...prevTasks, data]);
          setTaskName(data.taskName);
          setStartDate(data.startTime);
          setDeadline(data.deadline);
          break;
        case 'inreview':
          setInReviewTasks((prevTasks) => [...prevTasks, data]);
          setTaskName(data.taskName);
          setStartDate(data.startTime);
          setDeadline(data.deadline);
          break;
        case 'completed':
          setCompletedTasks((prevTasks) => [...prevTasks, data]);
          setTaskName(data.taskName);
          setStartDate(data.startTime);
          setDeadline(data.deadline);
          break;
        default:
          break;
      }

      setTaskName(data.taskName);

      if (data.startTime) {
        setStartDate(data.startTime);
      }
      if (data.deadline) {
        setDeadline(data.deadline);
      }
    }
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-4  bg-white  ">
      {/* Task Boards Section */}
      <div className="col-span-1 ">
        <div className=" relative items-start justify-start items-center text-lg gap-10 content-center">
          <div className="relative flex flex-row py-4 px-6 justify-center  border-b-[1px] border-solid border-foundation-brand-brand-50">
            <b className="leading-[28px]">Task boards</b>
          </div>
          <div className="relative flex flex-col items-start justify-start py-0 pt-5 pb-5 gap-8 px-2.5 box-border text-base">
            <div className="self-stretch rounded-lg bg-foundation-brand-brand-50 flex flex-row items-center justify-center py-2.5 px-6">
              <div className="relative leading-[24px]">Freelance Project</div>
            </div>
            <div className="hover:bg-foundation-brand-brand-50 self-stretch rounded-lg bg-white flex flex-row items-center justify-center py-2.5 px-6">
              <div className="relative leading-[24px]">SBI Outsource</div>
            </div>
            <div className="hover:bg-foundation-brand-brand-50 self-stretch rounded-lg bg-white flex flex-row items-center justify-center py-2.5 px-6">
              <div className="relative leading-[24px]">HPCL Project 1</div>
            </div>
          </div>
          <div className="relative bg-white box-border flex flex-row items-center justify-center py-2.5 px-6 text-xs text-foundation-brand-brand-500 border-t-[1px] border-solid border-foundation-brand-brand-50">
            <div className="relative leading-[20px]">Add new Project</div>
          </div>
        </div>
      </div>

      {/* My Projects Section */}
      <div className="col-span-3 md:col-span-3">
        <div className="box-border top-[0px] left-[0px] flex flex-row py-4 px-6 text-lg text-foundation-text-colors-primary-text-color border-[b]-[1px] border-solid border-foundation-brand-brand-50">
          <div className="relative leading-[28px] font-semibold">
            My Projects
          </div>
        </div>
        <div className="grid grid-cols-4">
          {/* First Column */}
          <div className="col-span-1 flex flex-col " >

            <div className="shrink-0 flex flex-col items-start justify-start m-4 mr-0 ">

              <div className="rounded-xl bg-foundation-brand-brand-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
                <div className="flex flex-row items-center justify-center gap-[4px]" onClick={handleAddNew} style={{
                  cursor: 'pointer'
                }}>
                  <div className="relative leading-[20px]">To Do</div>
                </div>
              </div>
            </div>
            <>
              <div className="flex flex-col items-start justify-center m-6 mr-0 mt-2">
                {/* Render the specified JSX only when the task status is "To Do" */}
                {toDoTasks.length > 0 && (
                  <div
                    className="rounded-lg bg-white shadow-[0px_0px_8px_rgba(54,_89,_226,_0.16)] w-[270px] overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[10px]"
                    onClick={handleEdit} style={{ cursor: 'pointer' }}>
                    <div className="relative leading-[24px] font-semibold">
                      {taskName}
                    </div>
                    <div
                      className="flex flex-row items-start justify-start gap-[24px] text-xs text-foundation-text-colors-secondary-text-color">
                      <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[20px]">Start date</div>
                        <div
                          className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                          <div
                            className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                              <div className="relative leading-[20px]">
                                {startDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative leading-[20px]">Deadline</div>
                        <div
                          className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                          <div
                            className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                              <div className="relative leading-[20px]">
                                {deadline}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>


            </>
            <div className="justify-center m-2 ">
              <div
                className="rounded-lg bg-foundation-brand-brand-50  h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">

                <div className="flex flex-row items-center justify-center py-0 px-2" onClick={handleAddNew} style={{
                  cursor: 'pointer'
                }}>
                  <div className="relative leading-[20px] ">Add new</div>
                </div>

              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-span-1">
            <div className="shrink-0 flex flex-col items-start justify-start m-4 mr-0">
              <div
                className="rounded-xl bg-secondary-colour-pink-pink-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
                <div className="flex flex-row items-center justify-center gap-[4px]" onClick={handleAddNew} style={{
                  cursor: 'pointer'
                }}>
                  
                  <div className="relative leading-[20px]">In Progress</div>
                </div>
              </div>
            </div>
            <>
              <div className="flex flex-col items-start justify-center m-6 mr-0 mt-8">
                {/* Render the specified JSX only when the task status is "To Do" */}
                {inProgressTasks.length > 0 && (
                  <div
                    className="rounded-lg bg-white shadow-[0px_0px_8px_rgba(54,_89,_226,_0.16)] w-[270px] overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[10px]"
                    onClick={handleEdit} style={{ cursor: 'pointer' }}>
                    <div className="relative leading-[24px] font-semibold">
                      {taskName}
                    </div>
                    <div
                      className="flex flex-row items-start justify-start gap-[24px] text-xs text-foundation-text-colors-secondary-text-color">
                      <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[20px]">Start date</div>
                        <div
                          className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                          <div
                            className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                              <div className="relative leading-[20px]">
                                {startDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative leading-[20px]">Deadline</div>
                        <div
                          className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                          <div
                            className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                              <div className="relative leading-[20px]">
                                {deadline}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>


            </>
            <div className="justify-center m-2 ">
              <div className="rounded-lg bg-secondary-colour-pink-pink-50  h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">

                <div className="flex flex-row items-center justify-center py-0 px-2" onClick={handleAddNew} style={{
                  cursor: 'pointer'
                }}>
                  <div className="relative leading-[20px]">Add new</div>
                </div>
              </div>
            </div>

          </div>


          {/* Third Column */}
          <div className="col-span-1">
            <div className="shrink-0 flex flex-col items-start justify-start m-4 mr-0">
              <div className="rounded-xl bg-foundation-info-info-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
                <div className="flex flex-row items-center justify-center gap-[4px]" onClick={handleAddNew} style={{ cursor: 'pointer' }} >
                  <img
                    className="relative w-2 h-2 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/circlef@2x.png"
                  />
                  <div className="relative leading-[20px]">In Review</div>
                </div>
              </div>
            </div>
            <>
              <div className="flex flex-col items-start justify-center m-6 mr-0 mt-8">
                {/* Render the specified JSX only when the task status is "To Do" */}
                {inReviewTasks.length > 0 && (
                  <div className="rounded-lg bg-white shadow-[0px_0px_8px_rgba(54,_89,_226,_0.16)] w-[270px] overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[10px]" onClick={handleEdit} style={{ cursor: 'pointer' }}>
                    <div className="relative leading-[24px] font-semibold">
                      {taskName}
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[24px] text-xs text-foundation-text-colors-secondary-text-color">
                      <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[20px]">Start date</div>
                        <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                          <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                              <div className="relative leading-[20px]">
                                {startDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative leading-[20px]">Deadline</div>
                        <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                          <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                              <div className="relative leading-[20px]">
                                {deadline}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>


            </>
            

            <div className="justify-center m-2 ">
              <div className="rounded-lg bg-secondary-colour-blue-blue-50  h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">

                <div className="flex flex-row items-center justify-center py-0 px-2" onClick={handleAddNew} style={{
                  cursor: 'pointer'
                }}>
                  <div className="relative leading-[20px]">Add new</div>
                </div>
              </div>
            </div>

          </div>

          {/* Fourth Column */}
          <div className="col-span-1 ">
          <div className="shrink-0 flex flex-col items-start justify-start m-4 mr-0">
            <div className="rounded-xl bg-foundation-success-success-50 h-8 flex flex-row items-center justify-center py-1 px-3 box-border">
              <div className="flex flex-row items-center justify-center gap-[4px]" onClick={handleAddNew} style={{ cursor: 'pointer' }}>

                <div className="relative leading-[20px]">Completed</div>
              </div>
            </div>
          </div>
          <>
          <div className="flex flex-col items-start justify-center m-6 mr-0 mt-8">
      {/* Render the specified JSX only when the task status is "To Do" */}
      {completedTasks.length > 0 && (
        <div className="rounded-lg bg-white shadow-[0px_0px_8px_rgba(54,_89,_226,_0.16)] w-[270px] overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[10px]" onClick={handleEdit} style={{ cursor: 'pointer' }}>
          <div className="relative leading-[24px] font-semibold">
            {taskName}
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] text-xs text-foundation-text-colors-secondary-text-color">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[20px]">Start date</div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                  <div className="flex flex-row items-center justify-center gap-[4px]">
                    <div className="relative leading-[20px]">
                      {startDate}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative leading-[20px]">Deadline</div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
                <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
                  <div className="flex flex-row items-center justify-center gap-[4px]">
                    <div className="relative leading-[20px]">
                      {deadline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>


          </>
          <div className="justify-center m-2">
            <div className="rounded-lg bg-foundation-success-success-50  h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]">
              
              <div className="flex flex-row items-center justify-center py-0 px-2" onClick={handleAddNew} style={{ cursor: 'pointer' }}>
                <div className="relative leading-[20px]">Add new</div>
              </div>
              
            </div>
          </div>

            {/* Content for the fourth column */}
          </div>
        </div>
      </div>
    </div>



  );
};

export default TaskBoards;
