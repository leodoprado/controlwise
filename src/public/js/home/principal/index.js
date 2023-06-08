// caso tenha links externos na mesma div ele irá pegar apenas com início '#'
// const menuItens = document.querySelectorAll('.menu a[href^="#")');

const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;

    window.scroll({
        top: section - 46,
        behavior: "smooth",
    });
}