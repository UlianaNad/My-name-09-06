const myBackground = document.querySelector('.background');
const yourName = document.querySelector('input[name="your-name"]');

yourName.addEventListener('change', (ev) =>{
   
    const yourName = ev.target.value;
    myBackground.innerHTML = 'Good job!';

     console.log("Привіт,", yourName);
})