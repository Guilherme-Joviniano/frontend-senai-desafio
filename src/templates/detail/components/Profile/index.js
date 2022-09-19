
const render = (props) => {
    // render the profile
    const { foto, nome } = props;
    
    document.querySelector('.picture').src = foto; 
    document.querySelector('.name').textContent = nome;
}


export default render