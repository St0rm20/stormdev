document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('header nav ul li a');
    const contactBtn = document.querySelector('.contact-btn');

    // Language content dictionary
    const translations = {
        es: {
            // Header
            'about': 'Acerca de Mí',
            'skills': 'Habilidades',
            'experience': 'Experiencia',
            'contact': 'Contacto',
            'contact-me-btn': 'Contáctame',
            // Hero
            'hero-title': 'Desarrollador Full Stack - Estudiante de Ingeniería de Sistemas y Computación',
            'hero-description': '¡Bienvenido a mi portafolio! Soy Miguel Ángel Vargas Peláez, un estudiante entusiasta y proactivo de Ingeniería de Sistemas y Computación con una profunda pasión por crear soluciones web robustas e innovadoras. Mi trayectoria en tecnología me ha llevado a convertirme en un desarrollador Full Stack competente, ansioso por aprovechar mis habilidades para construir aplicaciones impactantes y contribuir a proyectos dinámicos.',
            // Experience
            'experience-title': '💼 Experiencia Laboral',
            'exp1-title': 'Especialista en Soporte Técnico',
            'exp1-period': '10 de enero de 2024 – 13 de diciembre de 2024',
            'exp1-description': 'Durante mi período como Especialista en Soporte Técnico, se me confiaron responsabilidades críticas que perfeccionaron mi perspicacia para la resolución de problemas y mi competencia técnica. Proporcioné soporte integral de primer y segundo nivel para una amplia gama de incidentes de hardware y software, asegurando un tiempo de inactividad mínimo y un rendimiento óptimo del sistema para los usuarios finales. Esto implicó diagnosticar meticulosamente los problemas, implementar resoluciones efectivas y escalar casos complejos a equipos especializados cuando fue necesario. Mi rol también abarcó el mantenimiento preventivo y correctivo proactivo de equipos tecnológicos, lo que incluyó revisiones rutinarias del sistema, actualizaciones de software y reparaciones de hardware para extender la vida útil y la eficiencia de los dispositivos. Fui competente en la configuración de varios periféricos, la configuración y gestión de infraestructuras de red básicas, y la oferta de soporte directo a los usuarios en herramientas esenciales de ofimática como Microsoft Office Suite, garantizando operaciones diarias sin problemas. Además, un aspecto clave de mi trabajo implicó la documentación meticulosa de todos los casos atendidos y un seguimiento diligente de las solicitudes de servicio utilizando herramientas de gestión internas, lo que contribuyó significativamente a un proceso de soporte optimizado y a una base de conocimientos mejorada. También desempeñé un papel de apoyo en la implementación de nuevas mejoras técnicas y proporcioné un acompañamiento crucial durante el despliegue de infraestructura básica, obteniendo valiosos conocimientos sobre el ciclo de vida del proyecto y la integración de sistemas.',
            'exp2-title': 'Desarrollador de E-commerce - Quindibrahma.com',
            'exp2-period': '1 Mes',
            'exp2-description': 'Contribuí al desarrollo y la mejora de www.quindibrahma.com, una innovadora plataforma de comercio electrónico dedicada a promover y vender productos orgánicos y agrícolas locales. Esta experiencia me brindó una exposición práctica a todo el ciclo de vida del comercio electrónico, desde mejoras en la experiencia del usuario front-end hasta la integración del backend. Estuve involucrado en la creación de atractivas exhibiciones de productos, la optimización de la interfaz de usuario para una navegación intuitiva y la garantía de un proceso de pago fluido. Mi trabajo apoyó directamente la misión de la plataforma de empoderar a los agricultores y artesanos locales proporcionándoles un mercado digital robusto, fomentando así el crecimiento de la comunidad y las prácticas sostenibles. Este proyecto corto pero intensivo me permitió adaptarme rápidamente a un entorno de desarrollo de ritmo rápido y contribuir significativamente a una aplicación comercial en vivo.',
            // About Me
            'about-title': '👋 Acerca de Mí',
            'about-description': '¡Hola! Soy Miguel Ángel Vargas Peláez, un estudiante de 19 años de Ingeniería de Sistemas y Computación en la prestigiosa Universidad del Quindío, actualmente inmerso en el emocionante mundo del desarrollo full-stack. Mi trayectoria académica está impulsada por una curiosidad insaciable y una profunda pasión por la tecnología, empujándome constantemente a profundizar en desafíos complejos y soluciones innovadoras. Me enorgullezco de mis sólidas habilidades para la resolución de problemas, que he cultivado diligentemente a través de rigurosos proyectos académicos y esfuerzos personales de codificación. Mi lógica de programación es aguda y adaptable, lo que me permite abordar diversos paradigmas de codificación con confianza y eficiencia. Más allá de los aspectos técnicos, soy un firme creyente en el poder de la colaboración y la comunicación. Sobresalgo en entornos de trabajo en equipo, a menudo asumiendo roles de liderazgo para guiar proyectos hacia una finalización exitosa, y entiendo la importancia de una comunicación clara y concisa para fomentar un proceso de desarrollo productivo y armonioso. Estoy perpetuamente buscando nuevas oportunidades para aprender y crecer, ya sea enfrentando intrincados desafíos de codificación, explorando tecnologías de vanguardia o contribuyendo a proyectos colaborativos impactantes que marquen una diferencia real.',
            'languages-title': '🗣️ Idiomas',
            'lang-es': 'Español (Nativo)',
            'lang-en': 'Inglés (Fluido)',
            // Skills
            'skills-title': '💻 Habilidades y Tecnologías',
            'web-dev-title': '🌐 Desarrollo Web',
            'databases-title': '🗄️ Bases de Datos',
            'cloud-dev-title': '☁️ Nube y Despliegue',
            'tools-title': '🛠️ Herramientas',
            'ai-title': '🧠 Inteligencia Artificial (IA)',
            'ai-description': 'Soy un entusiasta incipiente en el mundo de la IA, explorando sus conceptos fundamentales y aplicaciones prácticas.',
            // Competitive Programming
            'comp-prog-title': '🚀 Programación Competitiva',
            'comp-prog-description': 'Soy un participante activo en concursos de Programación Competitiva, incluyendo los organizados por la muy estimada ICPC (International Collegiate Programming Contest). Este ámbito intelectualmente estimulante y desafiante ha sido fundamental para perfeccionar rigurosamente mis habilidades en varias áreas clave. Me apasiona diseccionar problemas algorítmicos intrincados y diseñar las soluciones más eficientes y elegantes, empujando constantemente los límites de mis capacidades avanzadas de resolución de problemas. La programación competitiva ha agudizado inequívocamente mi pensamiento lógico, permitiéndome construir algoritmos robustos, optimizados e ingeniosos bajo presión. Además, la naturaleza colaborativa de estos concursos, donde trabajo junto a compañeros de equipo para resolver problemas complejos dentro de límites de tiempo estrictos, ha mejorado significativamente la dinámica de mi trabajo en equipo y ha refinado mis habilidades de comunicación, enseñándome a articular ideas complejas de manera clara y efectiva. A través de innumerables horas de práctica y competencia, he adquirido una valiosa experiencia en la escritura de código altamente optimizado y de alto rendimiento, comprendiendo los matices de la eficiencia computacional. Mi viaje en la programación competitiva no se trata meramente de ganar; se trata de expandir continuamente mis límites intelectuales, aprender de cada desafío encontrado y aplicar diligentemente estas valiosas habilidades a las complejidades del desarrollo de software en el mundo real.',
            // Download CV
            'download-cv-title': 'Descarga Mi CV',
            'download-cv-en': 'Descargar CV (PDF en Inglés)',
            'download-cv-es': 'Descargar CV (PDF en Español)',
            // Contact
            'contact-title': '📞 Contáctame',
            'contact-intro': '¡No dudes en contactarme! Siempre estoy abierto a discutir nuevas oportunidades, colaboraciones o simplemente conectar con otros entusiastas de la tecnología.'
        },
        en: {
            // Header
            'about': 'About',
            'skills': 'Skills',
            'experience': 'Experience',
            'contact': 'Contact',
            'contact-me-btn': 'Contact Me',
            // Hero
            'hero-title': 'Full Stack Developer - Systems and Computer Engineering Student',
            'hero-description': "Welcome to my portfolio! I'm Miguel Angel Vargas Pelaez, an enthusiastic and driven Systems and Computer Engineering student with a profound passion for crafting robust and innovative web solutions. My journey in technology has led me to become a proficient Full Stack Developer, eager to leverage my skills to build impactful applications and contribute to dynamic projects.",
            // Experience
            'experience-title': '💼 Work Experience',
            'exp1-title': 'Technical Support Specialist',
            'exp1-period': 'January 10, 2024 – December 13, 2024',
            'exp1-description': "During my tenure as a Technical Support Specialist, I was entrusted with critical responsibilities that honed my problem-solving acumen and technical proficiency. I provided comprehensive first and second-level support for a wide array of hardware and software incidents, ensuring minimal downtime and optimal system performance for end-users. This involved meticulously diagnosing issues, implementing effective resolutions, and escalating complex cases to specialized teams when necessary. My role also encompassed proactive preventive and corrective maintenance of technological equipment, which included routine system checks, software updates, and hardware repairs to extend the lifespan and efficiency of devices. I was proficient in configuring various peripherals, setting up and managing basic network infrastructures, and offering direct support to users on essential office automation tools such as Microsoft Office Suite, ensuring seamless daily operations. Furthermore, a key aspect of my work involved meticulous documentation of all attended cases and diligent follow-up on service requests using internal management tools, which significantly contributed to a streamlined support process and improved knowledge base. I also played a supportive role in the implementation of new technical improvements and provided crucial accompaniment during the deployment of basic infrastructure, gaining valuable insights into project lifecycle and system integration.",
            'exp2-title': 'E-commerce Developer - Quindibrahma.com',
            'exp2-period': '1 Month',
            'exp2-description': 'I contributed to the development and enhancement of www.quindibrahma.com, an innovative e-commerce platform dedicated to promoting and selling local organic and farm products. This experience provided me with hands-on exposure to the entire e-commerce lifecycle, from front-end user experience enhancements to backend integration. I was involved in creating engaging product displays, optimizing the user interface for intuitive navigation, and ensuring a seamless checkout process. My work directly supported the platform\'s mission to empower local farmers and artisans by providing them with a robust digital marketplace, thereby fostering community growth and sustainable practices. This short but intensive project allowed me to quickly adapt to a fast-paced development environment and contribute meaningfully to a live commercial application.',
            // About Me
            'about-title': '👋 About Me',
            'about-description': "Hey there! I'm Miguel Angel Vargas Pelaez, a 19-year-old Systems and Computer Engineering student at the prestigious University of Quindio, currently immersed in the exciting world of full-stack development. My academic journey is fueled by an insatiable curiosity and a profound passion for technology, constantly pushing me to delve deeper into complex challenges and innovative solutions. I pride myself on my robust problem-solving skills, which I've diligently cultivated through rigorous academic projects and personal coding endeavors. My programming logic is sharp and adaptable, allowing me to approach diverse coding paradigms with confidence and efficiency. Beyond the technical aspects, I am a firm believer in the power of collaboration and communication. I excel in teamwork environments, often taking on leadership roles to guide projects to successful completion, and I understand the importance of clear and concise communication to foster a productive and harmonious development process. I am perpetually seeking new opportunities to learn and grow, whether it's by tackling intricate coding challenges, exploring cutting-edge technologies, or contributing to impactful collaborative projects that make a real difference.",
            'languages-title': '🗣️ Languages',
            'lang-es': 'Spanish (Native)',
            'lang-en': 'English (Fluent)',
            // Skills
            'skills-title': '💻 Skills & Technologies',
            'web-dev-title': '🌐 Web Development',
            'databases-title': '🗄️ Databases',
            'cloud-dev-title': '☁️ Cloud & Deployment',
            'tools-title': '🛠️ Tools',
            'ai-title': '🧠 Artificial Intelligence (AI)',
            'ai-description': "I'm a budding enthusiast in the world of AI, exploring its foundational concepts and practical applications.",
            // Competitive Programming
            'comp-prog-title': '🚀 Competitive Programming',
            'comp-prog-description': "I am an active participant in Competitive Programming contests, including those organized by the highly esteemed ICPC (International Collegiate Programming Contest). This intellectually stimulating and challenging arena has been instrumental in rigorously honing my abilities in several key areas. I thrive on dissecting intricate algorithmic problems and devising the most efficient and elegant solutions, constantly pushing the boundaries of my advanced problem-solving capabilities. Competitive programming has unequivocally sharpened my logical thinking, enabling me to construct robust, optimized, and ingenious algorithms under pressure. Moreover, the collaborative nature of these contests, where I work alongside teammates to solve complex problems within strict time limits, has significantly improved my teamwork dynamics and refined my communication skills, teaching me how to articulate complex ideas clearly and effectively. Through countless hours of practice and competition, I've gained invaluable experience in writing highly optimized and high-performing code, understanding the nuances of computational efficiency. My journey in competitive programming is not merely about winning; it's about continuously pushing my intellectual boundaries, learning from every challenge encountered, and diligently applying these invaluable skills to the real-world complexities of software development.",
            // Download CV
            'download-cv-title': 'Download My CV',
            'download-cv-en': 'Download CV (English PDF)',
            'download-cv-es': 'Download CV (Spanish PDF)',
            // Contact
            'contact-title': '📞 Contact Me',
            'contact-intro': "Feel free to reach out! I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow tech enthusiasts."
        }
    };

    // --- Theme Toggle ---
    // Check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'ligth';
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // --- Language Toggle ---
    let currentLang = localStorage.getItem('lang') || 'en'; // Default to Spanish

    const applyLanguage = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang; // Set HTML lang attribute
        langToggle.setAttribute('data-current-lang', lang);
        langToggle.textContent = lang === 'es' ? 'EN / ES' : 'ES / EN';
    };

    // Initialize language on page load
    applyLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('nav a, .contact-btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });
                // Remove active from all and add to clicked
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // --- Highlight active navigation link on scroll ---
    const sections = document.querySelectorAll('section[id]');

    const highlightNavLink = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight; // Adjust for header height
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on load to set initial active link

});
