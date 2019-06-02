const mod = (x, n) => (x % n + n) % n

function change_slide(elm, new_index, relative) {
    let container = elm.closest(".carousel-container");
    let current_index = parseInt(container.getAttribute("data-current"));
    let id = container.getAttribute("id");
    let slides = document.getElementsByClassName(id + "-slide");
    let dots = document.getElementsByClassName(id + "-dot");

    if (relative) {
        new_index = mod(current_index + new_index, slides.length);
    } else {
        new_index = new_index;
    }

    container.setAttribute("data-current", new_index);

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hide');
        dots[i].classList.remove("dot-active");
    }

    slides[new_index].classList.remove('hide');
    dots[new_index].classList.add("dot-active");
}
