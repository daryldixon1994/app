import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTags } from "../redux//actions";
import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";
import "./StudentItem.css";

function StudentItem({ student }) {
    const [open, setOpen] = useState(false);
    const disptach = useDispatch();
    const students = useSelector((state) => state.studentsReducer.students);

    const handelClick = () => {
        setOpen(!open);
    };
    const saveTag = (e) => {
        let tag = e.target.value;
        if (e.key === "Enter") {
            disptach(setTags({ students, student, tag }));
        }
    };
    return (
        <div className="item">
            <img src={student.pic} alt="student_pic" width="120px" />
            <div className="student_informations">
                <h1>
                    {student.firstName.toUpperCase()}{" "}
                    {student.lastName.toUpperCase()}
                </h1>
                <div className="second-titles">
                    <h5>Email: {student.email} </h5>
                    <h5>Company: {student.company}</h5>
                    <h5>Skill: {student.skill}</h5>
                    <h5>
                        Average:{" "}
                        {student.grades
                            .map((elt) => parseInt(elt))
                            .reduce((total, current) => {
                                return total + current;
                            }) / student.grades.length}{" "}
                        %
                    </h5>
                    <h5 className={open ? "open" : "close"}>
                        {student.grades.map((note, index) => (
                            <div key={index}>
                                <h5>
                                    Test {index + 1}: {note}%
                                </h5>
                            </div>
                        ))}
                    </h5>
                    <div className="tags">
                        {student.tags.map((tag, index) => (
                            <h5 key={index}>{tag}</h5>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="add tag"
                        onKeyPress={saveTag}
                    />
                </div>
            </div>
            <label>
                {open ? <IoIosRemove size="50px" /> : <GrFormAdd size="50px" />}
                <input type="checkbox" value="checkbox" onClick={handelClick} />
            </label>
        </div>
    );
}

export default StudentItem;
