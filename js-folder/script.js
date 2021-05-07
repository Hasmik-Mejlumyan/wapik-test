let span = document.getElementById("footer_reserved_year")
span.innerHTML = new Date().getFullYear()



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active')

        burger.classList.toggle('rotate')
    })
}
navSlide()