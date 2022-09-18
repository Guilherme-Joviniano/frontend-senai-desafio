const container = document.querySelector('.student-graph-grades')
const MAX_AVERAGE = 100;

const createGrade = ({ nome, media }) => {
    const grade = document.createElement('progress')
    
    grade.max = MAX_AVERAGE
    grade.value = media;
    
    return grade
}
const render = (grades = []) => {
    // render the grades
    grades.forEach(({ nome, media }) => {
        container.append(createGrade({ nome, media }))
    });
}

export default render;