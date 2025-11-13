import { traduccion } from './lang.js';

const menuBTN = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const langSwitch = document.querySelector(".check");

function traducirPagina() {
    const lng = langSwitch.checked ? "ES" : "EN";
    const elementos = document.querySelectorAll("h1, h2, h3, p, span, button, a, input[type='submit'], textarea");

    elementos.forEach(el => {
        const id = el.id;
        if (!id || !traduccion[lng][id]) return;

        const text = traduccion[lng][id];

        if (["INPUT", "TEXTAREA"].includes(el.tagName)) {
            el.setAttribute("placeholder", text);
            if (el.tagName === "INPUT") el.setAttribute("value", text);
        } else {
            el.innerText = text;
        }
    });
}

function actualizarIdioma() {
    const isSpanish = langSwitch.checked;

    document.querySelectorAll(".es").forEach(el => el.style.display = isSpanish ? "inline-block" : "none");
    document.querySelectorAll(".en").forEach(el => el.style.display = isSpanish ? "none" : "inline-block");

    traducirPagina();
}


window.addEventListener("DOMContentLoaded", actualizarIdioma);
langSwitch.addEventListener("change", actualizarIdioma);

menuBTN.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu');
    });
});

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
