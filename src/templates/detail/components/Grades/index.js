const container = document.querySelector('.student-graph-grades')
const MAX_AVERAGE = 100;

const barColor = (bar, value) => {
    if (value <= 30) { 
        bar.style.boxShadow = "0px 0px 24px #C11010";
        bar.style.background = `#C11010`; 
        return;
    }
    if (value > 30 && value < 70) {
        bar.style.boxShadow = "0px 0px 24px #E5B657";
        bar.style.background  = `#E5B657`
        return;
    }
    else {
        bar.style.boxShadow = "0px 0px 24px #3347B0";
        bar.style.background = `#3347B0`
        return;
    };
}
const addColor = (div, value) => {
    if (value < 50) { 
        div.style.color = `#C11010`; 
    }
    if (value >= 50 && value < 70) {
        div.style.color  = `#E5B657`
    }
    else {
        div.style.color = `#3347B0`
    };
}
const refactorName = (name) => name.split(' ').map(str => str[0]).join('')

const createGrade = ({ nome, media }) => {
    const container = document.createElement('div');
    container.classList.add('discipline-wrapper')

    const gradeWrapper = document.createElement('div');
    gradeWrapper.classList.add('wrap-progress')

    const grade = document.createElement('div')
    grade.classList.add('progress')

    grade.style.height = media + '%'

    barColor(grade, media)

    const value = document.createElement('h3');
    value.textContent = media
    
    const name = document.createElement('h2');
    name.textContent = refactorName(nome);
    
    addColor(value, media)
    
    gradeWrapper.append(grade);
    
    container.append(value);
    container.append(gradeWrapper);
    container.append(name);

    return container
}
const render = (grades = []) => {
    // render the grades
    grades.forEach(({ nome, media }) => {
        container.append(createGrade({ nome, media }))
    });
}

export default render;