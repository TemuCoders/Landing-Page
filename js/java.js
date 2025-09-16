const menuBTN = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

const traducciones = {
    "Home": "Inicio",
    "About Us": "Sobre Nosotros",
    "Services": "Servicios",
    "FAQ": "Preguntas Frecuentes",
    "Contact": "Contacto",
    "English": "Ingles",
    "Spanish": "Español",
    "Caring with Heart": "Cuidando con el Corazón",
    "CARE WITH AGECARE": "CUIDADO CON AGECARE",
    "Explore More": "Explorar Más",
    "ABOUT US": "SOBRE NOSOTROS",
    "Who are we?": "¿Quiénes somos?",
    "We are AgeCare, and we focus on the emotional and physical well-being of the elderly, providing tools to monitor their health and facilitate communication with their loved ones.":
        "Somos AgeCare y nos enfocamos en el bienestar emocional y físico de los adultos mayores, brindando herramientas para monitorear su salud y facilitar la comunicación con sus seres queridos.",
    "Vision": "Visión",
    "AgeCare aspires to be the leading platform in elderly care, fostering deeper connections and offering innovative solutions for holistic well-being.":
        "AgeCare aspira a ser la plataforma líder en el cuidado de adultos mayores, fomentando conexiones profundas y ofreciendo soluciones innovadoras para el bienestar integral.",
    "Mission": "Misión",
    "To empower older adults and their families through advanced digital tools that improve communication, health monitoring, and quality of life.":
        "Empoderar a los adultos mayores y sus familias mediante herramientas digitales avanzadas que mejoren la comunicación, el monitoreo de salud y la calidad de vida.",
    "OUR SERVICES": "NUESTROS SERVICIOS",
    "Schedule Appointments": "Programar Citas",
    "We make it easy to schedule medical appointments and recreational activities for residents.":
        "Facilitamos la programación de citas médicas y actividades recreativas para los residentes.",
    "Statistics": "Estadísticas",
    "We provide detailed statistics on the health and well-being of the residents.":
        "Proporcionamos estadísticas detalladas sobre la salud y el bienestar de los residentes.",
    "Reports": "Reportes",
    "We generate periodic reports on the health and well-being of the residents.":
        "Generamos reportes periódicos sobre la salud y el bienestar de los residentes.",
    "Messaging": "Mensajería",
    "We facilitate communication between residents and their families through our platform.":
        "Facilitamos la comunicación entre los residentes y sus familias a través de nuestra plataforma.",
    "FREQUENTLY ASKED QUESTIONS": "PREGUNTAS FRECUENTES",
    "What is AgeCare?": "¿Qué es AgeCare?",
    "It is a digital platform to monitor the health and well-being of elderly people in nursing homes, facilitating connection with their families.":
        "Es una plataforma digital para monitorear la salud y el bienestar de personas mayores en hogares geriátricos, facilitando la conexión con sus familias.",
    "How do I access my relative’s reports?": "¿Cómo accedo a los reportes de mi familiar?",
    "By logging into your account on our web platform or mobile app, you can access all reports in real-time.":
        "Al iniciar sesión en tu cuenta en nuestra plataforma web o app móvil, puedes acceder a todos los reportes en tiempo real.",
    "Is information in AgeCare secure?": "¿La información en AgeCare es segura?",
    "Yes, we use security protocols and encryption to protect all personal and medical data of the residents.":
        "Sí, usamos protocolos de seguridad y encriptación para proteger todos los datos personales y médicos de los residentes.",
    "CONTACT US": "CONTÁCTANOS",
    "We are here for you! At AgeCare, we value connection and support. If you have questions, need help, or simply want to learn more about our services, don't hesitate to contact us.":
        "¡Estamos aquí para ti! En AgeCare valoramos la conexión y el apoyo. Si tienes preguntas, necesitas ayuda o simplemente deseas conocer más sobre nuestros servicios, no dudes en contactarnos.",
    "Email": "Correo",
    "Phone": "Teléfono",
    "Send Message": "Enviar Mensaje",
    "Full Name": "Nombre Completo",
    "Write your message...": "Escribe tu mensaje...",
    "Send": "Enviar",
    "Empowering elderly care through technology and real-time family connections.":
        "Impulsando el cuidado de los adultos mayores con tecnología y conexión familiar en tiempo real."
};

function traducirPagina() {
    const elementos = document.querySelectorAll("h1, h2, h3, p, span, button, a, input[type='submit']");
    elementos.forEach(el => {
        const texto = el.innerText.trim();
        if (traducciones[texto]) {
            el.innerText = traducciones[texto];
        }
        // Para los placeholders tipo "Full Name", etc.
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            const placeholder = el.getAttribute("placeholder") || el.getAttribute("value");
            if (traducciones[placeholder]) {
                el.setAttribute("placeholder", traducciones[placeholder]);
                el.setAttribute("value", traducciones[placeholder]);
            }
        }
    });
}

document.querySelector(".check").addEventListener("change", function () {
    if (this.checked) traducirPagina();
    else location.reload(); // Recarga para volver al inglés original
});


menuBTN.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

