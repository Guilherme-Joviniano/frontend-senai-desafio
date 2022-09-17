const container = document.querySelector('.container-cards');


// add the title with the name of the course


const createStundentCards = (students) => {
    students.forEach(({ foto, nome, matricula, status }) => {
        // create each student card and implement the matricula value as id
        const card = document.createElement('div');
        card.setAttribute('id', matricula);
        card.classList.add('card');

        // add the bg color
        if (status.toLowerCase() === 'cursando') card.classList.add('cursando')
        else card.classList.add('finalizado') 
        
        const picture = document.createElement('img');
        picture.src = foto

        const studentName = document.createElement('h3');
        studentName.textContent = nome  

        card.append(picture);
        card.append(studentName);

        container.append(card);
        console.log(card);
    })
    console.log(container);
}

export default createStundentCards;