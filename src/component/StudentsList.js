import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentItem from "./StudentItem";
import { getStudents } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./StudentsList.css";
function StudentsList() {
    const [filter, setFilter] = useState("");
    const [tagFilter, setTagFilter] = useState("");
    const disptach = useDispatch();
    const students = useSelector((state) => state.studentsReducer.students);
    useEffect(() => disptach(getStudents()), []);

    const handelChange = (e) => {
        setFilter(e.target.value);
    };
    const handelInput = (e) => {
        setTagFilter(e.target.value);
    };

    return (
        <div className="list">
            <input
                type="text"
                placeholder="Search by NAME"
                onChange={handelChange}
            />
            <input
                type="text"
                placeholder="Search by tag"
                onChange={handelInput}
            />
            {tagFilter
                ? students
                      .filter(
                          (student) =>
                              student.firstName
                                  .toLowerCase()
                                  .includes(filter.toLowerCase()) &&
                              student.tags.find((elt) =>
                                  elt.includes(tagFilter)
                              )
                      )
                      .map((student) => (
                          <div key={student.id}>
                              <StudentItem student={student} />
                          </div>
                      ))
                : students
                      .filter((student) =>
                          student.firstName
                              .toLowerCase()
                              .includes(filter.toLowerCase())
                      )
                      .map((student) => (
                          <div key={student.id}>
                              <StudentItem student={student} />
                          </div>
                      ))}
        </div>
    );
}

export default StudentsList;
