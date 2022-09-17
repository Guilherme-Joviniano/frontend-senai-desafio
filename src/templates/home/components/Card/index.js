const container = document.querySelector('#courses-list')


const createCard = (courses) => {
    courses.forEach(({ sigla, icone }) => {
        const div = document.createElement('div');
        div.classList.add('card-course')
        
        const title = document.createElement('h3');
        title.classList.add('title')
        title.textContent = sigla

        const img = document.createElement('img');
        img.src = icone
        
        div.setAttribute('id', sigla) 
        div.append(title)
        div.append(img)


        container.append(div)
        
    });
}


export default createCard;