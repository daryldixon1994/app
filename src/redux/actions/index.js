import { GET_STUDENTS, ADD_TAG } from "../constants/action-types";
import axios from "axios";
export const getStudents = (payload) => (dispatch) => {
    axios
        .get("https://api.hatchways.io/assessment/students")
        .then((response) => {
            // console.log(response.data.students);
            dispatch({ type: GET_STUDENTS, payload: response.data.students });
        })
        .catch((error) => console.dir(error));
};

export const setTags = (payload) => {
    return {
        type: ADD_TAG,
        tag: payload.tag,
        students: payload.students,
        student: payload.student,
    };
};
