const container = document.querySelector('.container-cards');


// add the title with the name of the course


const createStundentCards = (students) => {
    students.forEach(({
        foto,
        nome,
        matricula,
        status,
    }) => {
        // implement the matricula value as id of the main div
        const card = document.createElement('div');
        card.setAttribute('id', matricula);
        card.classList.add('card');

        // add the bg color
        if (status.toLowerCase() === 'cursando') card.classList.add('cursando')
        else card.classList.add('finalizado')

        // add the student picture
        const picture = document.createElement('img');
        picture.src = foto
        picture.referrerPolicy = 'no-referrer'

        // add the student name
        const studentName = document.createElement('h3');
        studentName.textContent = nome

        // add the picture and the name to the card 
        card.append(picture);
        card.append(studentName);

        // add card to the container
        container.append(card);
    })
}

export default createStundentCards;