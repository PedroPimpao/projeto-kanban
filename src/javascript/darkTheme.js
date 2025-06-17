const themeChange = document.querySelector('#themeChange')
const html = document.getElementsByTagName('html')[0]

themeChange.addEventListener('change',() =>{
    html.classList.toggle('dark')
});