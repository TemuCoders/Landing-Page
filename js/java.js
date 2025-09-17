const menuBTN = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');


const traduccion = {
  "EN": {
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-services": "Services",
    "nav-faq": "FAQ",
    "nav-contact": "Contact",
    "heart": "Restore with your heart",
    "WorkStation-title": "Solutions WITH WorkStation",
    "explore": "Explore More",
    "about-title": "ABOUT US",
    "who": "Who are we?",
    "who-desc": "We are WorkStation, and we focus on the emotional and physical well-being of the elderly, providing tools to monitor their health and facilitate communication with their loved ones.",
    "vision": "Vision",
    "vision-desc": "WorkStation aspires to be the leading platform in elderly care, fostering deeper connections and offering innovative solutions for holistic well-being.",
    "mission": "Mission",
    "mission-desc": "To empower older adults and their families through advanced digital tools that improve communication, health monitoring, and quality of life.",
    "services-title": "OUR SERVICES",
    "srv-appointments": "Schedule Appointments",
    "srv-appointments-desc": "We make it easy to schedule medical appointments and recreational activities for residents.",
    "srv-stats": "Statistics",
    "srv-stats-desc": "We provide detailed statistics on the health and well-being of the residents.",
    "srv-reports": "Reports",
    "srv-reports-desc": "We generate periodic reports on the health and well-being of the residents.",
    "srv-messages": "Messaging",
    "srv-messages-desc": "We facilitate communication between residents and their families through our platform.",
    "faq-title": "FREQUENTLY ASKED QUESTIONS",
    "faq-q1": "What is WorkStation?",
    "faq-q1-desc": "It is a digital platform to monitor the health and well-being of elderly people in nursing homes, facilitating connection with their families.",
    "faq-q2": "How do I access my relative’s reports?",
    "faq-q2-desc": "By logging into your account on our web platform or mobile app, you can access all reports in real-time.",
    "faq-q3": "Is information in WorkStation secure?",
    "faq-q3-desc": "Yes, we use security protocols and encryption to protect all personal and medical data of the residents.",
    "contact-title": "CONTACT US",
    "contact-desc": "We are here for you! At WorkStation, we value connection and support. If you have questions, need help, or simply want to learn more about our services, don't hesitate to contact us.",
    "contact-email-label": "Email",
    "contact-phone-label": "Phone",
    "form-title": "Send Message",
    "form-name": "Full Name",
    "form-email": "Email",
    "form-msg": "Write your message...",
    "form-send": "Send",
    "footer-desc": "Empowering elderly care through technology and real-time family connections.",
    "footer-contact": "Email: WorkStation@gmail.com | Phone: +51 970 526 672"
  },
  "ES": {
    "nav-home": "Inicio",
    "nav-about": "Sobre Nosotros",
    "nav-services": "Servicios",
    "nav-faq": "Preguntas Frecuentes",
    "nav-contact": "Contacto",
    "heart": "Restaura con el corazón",
    "WorkStation-title": "Soluciones con WorkStation",
    "explore": "Explorar Más",
    "about-title": "SOBRE NOSOTROS",
    "who": "¿Quiénes somos?",
    "who-desc": "Somos WorkStation y nos enfocamos en el bienestar emocional y físico de los adultos mayores, brindando herramientas para monitorear su salud y facilitar la comunicación con sus seres queridos.",
    "vision": "Visión",
    "vision-desc": "WorkStation aspira a ser la plataforma líder en el cuidado de adultos mayores, fomentando conexiones profundas y ofreciendo soluciones innovadoras para el bienestar integral.",
    "mission": "Misión",
    "mission-desc": "Empoderar a los adultos mayores y sus familias mediante herramientas digitales avanzadas que mejoren la comunicación, el monitoreo de salud y la calidad de vida.",
    "services-title": "NUESTROS SERVICIOS",
    "srv-appointments": "Programar Citas",
    "srv-appointments-desc": "Facilitamos la programación de citas médicas y actividades recreativas para los residentes.",
    "srv-stats": "Estadísticas",
    "srv-stats-desc": "Proporcionamos estadísticas detalladas sobre la salud y el bienestar de los residentes.",
    "srv-reports": "Reportes",
    "srv-reports-desc": "Generamos reportes periódicos sobre la salud y el bienestar de los residentes.",
    "srv-messages": "Mensajería",
    "srv-messages-desc": "Facilitamos la comunicación entre los residentes y sus familias a través de nuestra plataforma.",
    "faq-title": "PREGUNTAS FRECUENTES",
    "faq-q1": "¿Qué es WorkStation?",
    "faq-q1-desc": "Es una plataforma digital para monitorear la salud y el bienestar de personas mayores en hogares geriátricos, facilitando la conexión con sus familias.",
    "faq-q2": "¿Cómo accedo a los reportes de mi familiar?",
    "faq-q2-desc": "Al iniciar sesión en tu cuenta en nuestra plataforma web o app móvil, puedes acceder a todos los reportes en tiempo real.",
    "faq-q3": "¿La información en WorkStation es segura?",
    "faq-q3-desc": "Sí, usamos protocolos de seguridad y encriptación para proteger todos los datos personales y médicos de los residentes.",
    "contact-title": "CONTÁCTANOS",
    "contact-desc": "¡Estamos aquí para ti! En WorkStation valoramos la conexión y el apoyo. Si tienes preguntas, necesitas ayuda o simplemente deseas conocer más sobre nuestros servicios, no dudes en contactarnos.",
    "contact-email-label": "Correo",
    "contact-phone-label": "Teléfono",
    "form-title": "Enviar Mensaje",
    "form-name": "Nombre Completo",
    "form-email": "Correo",
    "form-msg": "Escribe tu mensaje...",
    "form-send": "Enviar",
    "footer-desc": "Impulsando el cuidado de los adultos mayores con tecnología y conexión familiar en tiempo real.",
    "footer-contact": "Correo: WorkStation@gmail.com | Teléfono: +51 970 526 672"
  }
};


function traducirPagina() {
    const elementos = document.querySelectorAll("h1, h2, h3, p, span, button, a, input[type='submit']");
    elementos.forEach(el => {
        const id = el.id;
        if (id){
          let lng;
           if (document.querySelector('.check').checked) lng = "ES"; else lng = "EN";
           if (id && traduccion[lng][id]) {
               el.innerText = traduccion[lng][id];
           }
           if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            const placeholder = el.getAttribute("placeholder") || el.getAttribute("value");
            if (traduccion[placeholder]) {
                el.setAttribute("placeholder", traduccion[placeholder]);
                el.setAttribute("value", traduccion[placeholder]);
            }
             }
          
        }
              
       
    });
   
    
}

document.querySelector(".check").addEventListener("change", function () {
    traducirPagina();
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

