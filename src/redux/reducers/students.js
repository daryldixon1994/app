import { GET_STUDENTS, ADD_TAG } from "../constants/action-types";
const initState = {
    students: [],
};

const studentsReducer = (state = initState, action) => {
    // eslint-disable-next-line
    const { type, payload, tag, students, student } = action;

    switch (type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: payload.map((student) => {
                    return { ...student, tags: [] };
                }),
            };
        case ADD_TAG:
            return {
                ...state,
                students: students.map((el) => {
                    return el.id === student.id
                        ? { ...el, tags: [...el.tags, tag] }
                        : el;
                }),
            };
        default:
            return state;
    }
};
export default studentsReducer;
