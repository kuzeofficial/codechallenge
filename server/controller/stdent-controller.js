
export const getStudents = (request, response) => {
        response.status(200).json('Hi this is a CodeChallenge of a Interview')
}

export const addStudent = (request, response) => {
        console.log("Student Added successfully")
        response.send("Student Added")
}