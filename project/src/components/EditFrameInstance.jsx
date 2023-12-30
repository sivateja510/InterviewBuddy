import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const EditFrameInstance = () => {



    const [taskName, setTaskName] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [deadline, setDeadline] = useState(null);
    const [status, setStatus] = useState(''); // Initialize with a default value if needed
    const history = useState(null);
    const navigate = useNavigate();
    const handleCancel = () => {
        // Navigate back to the home page
        navigate('/');
    };
    useEffect(() => {
        // Check if there is existing data in local storage
        const storedData = localStorage.getItem('yourDataKey');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setTaskName(parsedData.taskName || '');
            setStartTime(parsedData.startTime ? new Date(parsedData.startTime) : null);
            setDeadline(parsedData.deadline ? new Date(parsedData.deadline) : null);
            setStatus(parsedData.status || '');
        }
    }, []);

    const handleAdd = () => {
        // Create an object with all the data

        const newData = {
            taskName,
            startTime: startTime ? startTime.toISOString() : null, // Convert to ISO string for better compatibility
            deadline: deadline ? deadline.toISOString() : null,
            status,
        };

        // Save the data to local storage
        localStorage.setItem('yourDataKey', JSON.stringify(newData));
        const k = JSON.parse(localStorage.getItem("yourDataKey"));
        window.alert(JSON.stringify(k));
        console.log(k);
        navigate('/');
    };
    return (
        <div className=" flex items-center justify-center h-screen relative rounded-3xs w-full overflow-hidden flex flex-col items-start center text-left text-xs text-foundation-brand-brand-700 font-typography-styles-small-regular">
            <div className="bg-white box-border w-[670px] h-[52px] flex flex-row items-center justify-between py-2.5 px-6 text-base border-b-[1px] border-solid">
                <div className="relative leading-[24px]">Edit task</div>

            </div>
            <div className="bg-white w-[670px] flex flex-col items-start justify-start py-4 px-6 box-border gap-[24px] text-foundation-text-colors-teritiary-text-color">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative leading-[20px] text-foundation-text-colors-primary-text-color">
                        Name of the Task
                    </div>
                    <div className="self-stretch rounded-lg bg-white box-border h-11 flex flex-row items-center justify-between py-1 px-3 text-base border-[1px] border-solid border-foundation-gray-gray-300">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[7px]">

                            <input
                                type="text"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                className="shrink-0 flex flex-row items-center justify-start gap-[1px] bg-transparent border-none outline-none w-full text-base text-foundation-text-colors-primary-text-color"
                                placeholder="Name of the Task"
                            />
                        </div>
                    </div>

                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[20px] text-foundation-text-colors-primary-text-color">
                            Start date
                        </div>
                        <div className="self-stretch rounded-lg bg-white box-border h-11 flex flex-row items-center justify-between py-1 px-3 text-base border-[1px] border-solid border-foundation-gray-gray-300">
                            <DatePicker
                                selected={startTime}
                                onChange={(date) => setStartTime(date)}
                                dateFormat="dd/MM/yyyy"
                                className="shrink-0 flex flex-row items-center justify-start gap-[1px] bg-transparent border-none outline-none w-full text-base text-foundation-text-colors-primary-text-color"
                                placeholderText="Start Date"
                            />
                        </div>

                    </div>

                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative leading-[20px] text-foundation-text-colors-primary-text-color">
                            Deadline
                        </div>
                        <div className="self-stretch rounded-lg bg-white box-border h-11 flex flex-row items-center justify-between py-1 px-3 text-base border-[1px] border-solid border-foundation-gray-gray-300">
                            <DatePicker
                                selected={deadline}
                                onChange={(date) => setDeadline(date)}
                                dateFormat="dd/MM/yyyy"
                                className="shrink-0 flex flex-row items-center justify-start gap-[1px] bg-transparent border-none outline-none w-full text-base text-foundation-text-colors-primary-text-color"
                                placeholderText="Deadline"
                            />
                        </div>


                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-foundation-text-colors-primary-text-color">
                    <div className="relative leading-[20px]">Status</div>
                    <div className="self-stretch rounded-lg bg-white box-border h-11 flex flex-row items-center justify-between py-1 px-3 text-base border-[1px] border-solid border-foundation-gray-gray-300">
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="flex-1 flex flex-row items-center justify-start gap-[7px] bg-transparent border-none outline-none"
                        >
                            <option value="">Select Status</option>
                            <option value="todo">To Do</option>
                            <option value="process">Process</option>
                            <option value="inreview">In Review</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>


                </div>
            </div>
            <div className="bg-white box-border w-[670px] shrink-0 flex flex-row items-center justify-end py-2.5 px-6 gap-[10px] text-cornflowerblue border-t-[1px] border-solid border-foundation-brand-brand-75">
                <div
                    className="rounded-lg bg-foundation-brand-brand-50 h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px]"
                    onClick={handleCancel}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">Cancel</div>
                    </div>
                </div>

                <div
                    className="rounded-lg bg-foundation-brand-brand-500 h-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[4px] text-white"
                    onClick={handleAdd}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="flex flex-row items-center justify-center py-0 px-2">
                        <div className="relative leading-[20px]">Edit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditFrameInstance;
