// Traduções
const translations = {
    pt: {
        // Navegação
        'nav.home': 'INÍCIO',
        'nav.about': 'SOBRE',
        'nav.experience': 'EXPERIÊNCIA',
        'nav.education': 'FORMAÇÃO',
        'nav.skills': 'HABILIDADES',
        'nav.certifications': 'CERTIFICAÇÕES',
        'nav.contact': 'CONTATO',

        // Home
        'home.greeting': 'OLÁ, EU SOU<br><span>DAVID THIMOTTI</span>',
        'home.description': 'Profissional de Tecnologia da Informação com ampla experiência na construção, suporte e otimização de infraestruturas de redes e internet em ambientes corporativos.',
        'home.contact': 'ENTRAR EM CONTATO',
        'home.skills': 'VER HABILIDADES',

        // Sobre
        'about.title': 'SOBRE MIM',
        'about.text1': 'Como Especialista em Novos Produtos na Dinâmica Telecomunicações, atuei na concepção, desenvolvimento e implementação de soluções tecnológicas para atender às demandas específicas dos clientes, colaborando de perto com fabricantes e parceiros estratégicos.',
        'about.text2': 'Com mais de 20 anos de experiência em tecnologia da informação, contribuo para a implantação e suporte de tecnologias de redes seguras robustas, incluindo LAN, WLAN, WAN, NGFW e SD-WAN, sempre buscando a excelência operacional e a satisfação do cliente.',
        'about.text3': 'Tenho como missão oferecer soluções inovadoras e eficazes, aplicando meu conhecimento em análise, implementação e suporte de ambientes multi-vendor.',
        'about.text4': 'Sou apaixonado por identificar e resolver problemas complexos no setor de rede e telecomunicações, e me destaco na elaboração de estratégias para projetos de TI desafiadores que geram impacto positivo para as organizações.',
        'about.interestsTitle': 'INTERESSES E HOBBIES',
        'about.interestsText': 'Além de Analista Especialista, sou entusiasta de segurança cibernética, inteligência artificial e tecnologia emergente. Nos momentos de lazer, gosto de:',
        'about.interest1': 'Explorar novas tecnologias e frameworks',
        'about.interest2': 'Participar de hackathons e desafios de programação',
        'about.interest3': 'Contribuir para projetos open source',
        'about.interest4': 'Estudar sobre segurança da informação',
        'about.yearsExp': 'Anos de Experiência',
        'about.credlyBadges': 'Medalhas Credly',
        'about.competencies': 'Competências',

        // Experiência
        'experience.title': 'EXPERIÊNCIA PROFISSIONAL',
        'experience.job1.title': 'Especialista em Novos Produtos',
        'experience.job1.company': 'Dinâmica Telecomunicações',
        'experience.job1.description': 'Responsável técnico pelo desenvolvimento e implementação de soluções inovadoras em infraestrutura de redes e segurança, alinhadas às necessidades estratégicas dos clientes.',
        'experience.job1.task1': 'Desenvolvimento de parcerias estratégicas',
        'experience.job1.task2': 'Implementação de Redes Seguras',
        'experience.job1.task3': 'Otimização de performance e segurança',
        'experience.job2.title': 'Consultor de Projetos de TI',
        'experience.job2.company': 'ISH Tecnologia',
        'experience.job2.description': 'Atuação estratégica em projetos de Network Security, desde o planejamento até a implementação e suporte, garantindo conformidade com os melhores padrões de mercado.',
        'experience.job2.task1': 'Implementação de soluções de LAN/WLAN',
        'experience.job2.task2': 'Implementação de Firewalls de Nova Geração',
        'experience.job2.task3': 'Experiência com Aruba, CheckPoint, Cisco, Forcepoint e Fortinet',
        'experience.job3.title': 'Analista de Redes SR.',
        'experience.job3.company': 'Algar TI Consultoria',
        'experience.job3.description': 'Atuei na equipe TI, responsável pelo monitoramento/suporte dos equipamentos de redes alocados em Barragens da VALE.',
        'experience.job3.task1': 'Suporte a dispositivos de rede Cisco',
        'experience.job3.task2': 'Participação técnica em Salas de Crise',
        'experience.job3.task3': 'Monitoramento via CA Spectrum',

        // Formação
        'education.title': 'FORMAÇÃO ACADÊMICA',
        'education.degree1.title': 'Tecnólogo em Redes de Computadores',
        'education.degree1.school': 'Universidade Estácio de Sá',
        'education.degree1.description': 'Formação completa em Redes de Computadores com carga horária de 2200+ Horas totais.',
        'education.degree2.title': 'Esp. em Telecomunicações e Redes de Computadores',
        'education.degree2.school': 'Universidade Estácio de Sá',
        'education.degree2.description': 'Especialização em Telecomunicações e Redes de Computadores com foco em Tecnologias Convergentes.',
        'education.degree3.title': 'Repensando o Brasil: Sociedade, política e história',
        'education.degree3.description': 'Essa Pós-Graduação oferece as ferramentas para uma visão cidadã, desenvolvendo conhecimento e habilidades para contribuir com a transformação da realidade brasileira.',

        // Habilidades
        'skills.title': 'HABILIDADES TÉCNICAS',
        'skills.category1': 'NETWORK SECURITY',
        'skills.category2': 'CLOUD',
        'skills.category3': 'OUTRAS HABILIDADES',
        'skills.network1': 'Firewalls',
        'skills.network2': 'Network management',
        'skills.network3': 'Network planning and design',
        'skills.network4': 'Internet Protocol (IPv4/IPv6)',
        'skills.cloud3': 'Cloud Security',
        'skills.cloud4': 'Cloud Services',
        'skills.other2': 'Ethical hacking',
        'skills.other3': 'Cybersecurity',
        'skills.other4': 'Incident response',

        // Certificações
        'certifications.title': 'CERTIFICAÇÕES',
        'certifications.expires': 'Expira em:',
        'certifications.ccna': 'Os detentores da certificação Cisco CCNA demonstraram conhecimento e habilidades relacionados a fundamentos de rede, acesso à rede, conectividade IP, serviços IP, fundamentos de segurança e automação e programabilidade.',
        'certifications.fortinet': 'O certificado de Administrador do FortiGate 7.4 reconhece a expertise em administração do FortiGate. O profissional que obtiver o certificado demonstrará conhecimento da configuração, operação e administração diária do FortiGate.',
        'certifications.aws': 'Os detentores desta certificação possuem um conhecimento fundamental de serviços de TI e suas aplicações na Nuvem AWS. Eles demonstram fluência em nuvem e conhecimento básico da AWS.',

        // Contato
        'contact.title': 'ENTRE EM CONTATO',
        'contact.description': 'Tem um projeto em mente, quer discutir oportunidades de colaboração ou tomar um café? Entre em contato, adoraria conversar!',
        'contact.email': 'EMAIL',
        'contact.phone': 'TELEFONE',
        'contact.location': 'LOCALIZAÇÃO',
        'contact.address': 'Vila Velha, ES - Brasil',
        'contact.formName': 'SEU NOME',
        'contact.formEmail': 'SEU EMAIL',
        'contact.formSubject': 'ASSUNTO',
        'contact.formMessage': 'SUA MENSAGEM',
        'contact.formSubmit': 'ENVIAR MENSAGEM',

        // Rodapé
        'footer.rights': 'Todos os direitos reservados.',
        'footer.downloadCV': 'BAIXAR CV'
    },

    en: {
        // Navegação
        'nav.home': 'HOME',
        'nav.about': 'ABOUT',
        'nav.experience': 'EXPERIENCE',
        'nav.education': 'EDUCATION',
        'nav.skills': 'SKILLS',
        'nav.certifications': 'CERTIFICATIONS',
        'nav.contact': 'CONTACT',

        // Home
        'home.greeting': 'HELLO, I\'M<br><span>DAVID THIMOTTI</span>',
        'home.description': 'Information Technology professional with extensive experience in building, supporting, and optimizing network and internet infrastructures in corporate environments.',
        'home.contact': 'CONTACT ME',
        'home.skills': 'VIEW SKILLS',

        // Sobre
        'about.title': 'ABOUT ME',
        'about.text1': 'As a New Products Specialist at Dinâmica Telecomunicações, I worked on the conception, development, and implementation of technological solutions to meet specific customer demands, closely collaborating with manufacturers and strategic partners.',
        'about.text2': 'With over 20 years of experience in information technology, I contribute to the implementation and support of robust secure network technologies, including LAN, WLAN, WAN, NGFW, and SD-WAN, always seeking operational excellence and customer satisfaction.',
        'about.text3': 'My mission is to provide innovative and effective solutions, applying my knowledge in analysis, implementation, and support of multi-vendor environments.',
        'about.text4': 'I am passionate about identifying and solving complex problems in the network and telecommunications sector, and I excel in developing strategies for challenging IT projects that generate positive impact for organizations.',
        'about.interestsTitle': 'INTERESTS & HOBBIES',
        'about.interestsText': 'Besides being a Specialist Analyst, I am a cybersecurity, artificial intelligence, and emerging technology enthusiast. In my leisure time, I enjoy:',
        'about.interest1': 'Exploring new technologies and frameworks',
        'about.interest2': 'Participating in hackathons and programming challenges',
        'about.interest3': 'Contributing to open source projects',
        'about.interest4': 'Studying information security',
        'about.yearsExp': 'Years of Experience',
        'about.credlyBadges': 'Credly Badges',
        'about.competencies': 'Competencies',

        // Experiência
        'experience.title': 'PROFESSIONAL EXPERIENCE',
        'experience.job1.title': 'New Products Specialist',
        'experience.job1.company': 'Dinâmica Telecomunicações',
        'experience.job1.description': 'Technical responsible for the development and implementation of innovative solutions in network infrastructure and security, aligned with customers\' strategic needs.',
        'experience.job1.task1': 'Development of strategic partnerships',
        'experience.job1.task2': 'Secure Network Implementation',
        'experience.job1.task3': 'Performance and security optimization',
        'experience.job2.title': 'IT Project Consultant',
        'experience.job2.company': 'ISH Tecnologia',
        'experience.job2.description': 'Strategic involvement in Network Security projects, from planning to implementation and support, ensuring compliance with the best market standards.',
        'experience.job2.task1': 'Implementation of LAN/WLAN solutions',
        'experience.job2.task2': 'Implementation of Next-Generation Firewalls',
        'experience.job2.task3': 'Experience with Aruba, CheckPoint, Cisco, Forcepoint and Fortinet',
        'experience.job3.title': 'Senior Network Analyst',
        'experience.job3.company': 'Algar TI Consultoria',
        'experience.job3.description': 'Worked in the IT team, responsible for monitoring/supporting network equipment allocated at VALE Dams.',
        'experience.job3.task1': 'Support for Cisco network devices',
        'experience.job3.task2': 'Technical participation in Crisis Rooms',
        'experience.job3.task3': 'Monitoring via CA Spectrum',

        // Formação
        'education.title': 'ACADEMIC EDUCATION',
        'education.degree1.title': 'Computer Networks Technologist',
        'education.degree1.school': 'Universidade Estácio de Sá',
        'education.degree1.description': 'Complete training in Computer Networks with a total workload of 2200+ hours.',
        'education.degree2.title': 'Specialist in Telecommunications and Computer Networks',
        'education.degree2.school': 'Universidade Estácio de Sá',
        'education.degree2.description': 'Specialization in Telecommunications and Computer Networks with a focus on Convergent Technologies.',
        'education.degree3.title': 'Rethinking Brazil: Society, politics and history',
        'education.degree3.description': 'This Postgraduate course offers the tools for a citizen\'s view, developing knowledge and skills to contribute to the transformation of Brazilian reality.',

        // Habilidades
        'skills.title': 'TECHNICAL SKILLS',
        'skills.category1': 'NETWORK SECURITY',
        'skills.category2': 'CLOUD',
        'skills.category3': 'OTHER SKILLS',
        'skills.network1': 'Firewalls',
        'skills.network2': 'Network management',
        'skills.network3': 'Network planning and design',
        'skills.network4': 'Internet Protocol (IPv4/IPv6)',
        'skills.cloud3': 'Cloud Security',
        'skills.cloud4': 'Cloud Services',
        'skills.other2': 'Ethical hacking',
        'skills.other3': 'Cybersecurity',
        'skills.other4': 'Incident response',

        // Certificações
        'certifications.title': 'CERTIFICATIONS',
        'certifications.expires': 'Expires on:',
        'certifications.ccna': 'Cisco CCNA certification holders have demonstrated knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.',
        'certifications.fortinet': 'The FortiGate 7.4 Administrator certificate recognizes expertise in FortiGate administration. The certified professional will demonstrate knowledge of FortiGate configuration, operation, and daily administration.',
        'certifications.aws': 'Holders of this certification have fundamental knowledge of IT services and their applications in the AWS Cloud. They demonstrate cloud fluency and foundational AWS knowledge.',

        // Contato
        'contact.title': 'CONTACT ME',
        'contact.description': 'Have a project in mind, want to discuss collaboration opportunities, or grab a coffee? Get in touch, I\'d love to chat!',
        'contact.email': 'EMAIL',
        'contact.phone': 'PHONE',
        'contact.location': 'LOCATION',
        'contact.address': 'Vila Velha, ES - Brazil',
        'contact.formName': 'YOUR NAME',
        'contact.formEmail': 'YOUR EMAIL',
        'contact.formSubject': 'SUBJECT',
        'contact.formMessage': 'YOUR MESSAGE',
        'contact.formSubmit': 'SEND MESSAGE',

        // Rodapé
        'footer.rights': 'All rights reserved.',
        'footer.downloadCV': 'DOWNLOAD CV'
    },

    es: {
        // Navegação
        'nav.home': 'INICIO',
        'nav.about': 'SOBRE',
        'nav.experience': 'EXPERIENCIA',
        'nav.education': 'FORMACIÓN',
        'nav.skills': 'HABILIDADES',
        'nav.certifications': 'CERTIFICACIONES',
        'nav.contact': 'CONTACTO',

        // Home
        'home.greeting': 'HOLA, SOY<br><span>DAVID THIMOTTI</span>',
        'home.description': 'Profesional de Tecnologías de la Información con amplia experiencia en la construcción, soporte y optimización de infraestructuras de redes e internet en entornos corporativos.',
        'home.contact': 'CONTACTAR',
        'home.skills': 'VER HABILIDADES',

        // Sobre
        'about.title': 'SOBRE MÍ',
        'about.text1': 'Como Especialista en Nuevos Productos en Dinâmica Telecomunicações, actué en la concepción, desarrollo e implementación de soluciones tecnológicas para atender las demandas específicas de los clientes, colaborando estrechamente con fabricantes y socios estratégicos.',
        'about.text2': 'Con más de 20 años de experiencia en tecnología de la información, contribuyo a la implantación y soporte de tecnologías de redes seguras robustas, incluyendo LAN, WLAN, WAN, NGFW y SD-WAN, siempre buscando la excelencia operacional y la satisfacción del cliente.',
        'about.text3': 'Mi misión es ofrecer soluciones innovadoras y eficaces, aplicando mi conocimiento en análisis, implementación y soporte de entornos multi-vendor.',
        'about.text4': 'Soy apasionado por identificar y resolver problemas complejos en el sector de redes y telecomunicaciones, y me destaco en la elaboración de estrategias para proyectos de TI desafiantes que generan impacto positivo para las organizaciones.',
        'about.interestsTitle': 'INTERESES Y HOBBIES',
        'about.interestsText': 'Además de Analista Especialista, soy entusiasta de la ciberseguridad, inteligencia artificial y tecnología emergente. En mis momentos de ocio, me gusta:',
        'about.interest1': 'Explorar nuevas tecnologías y frameworks',
        'about.interest2': 'Participar en hackathones y desafíos de programación',
        'about.interest3': 'Contribuir a proyectos open source',
        'about.interest4': 'Estudiar sobre seguridad de la información',
        'about.yearsExp': 'Años de Experiencia',
        'about.credlyBadges': 'Insignias Credly',
        'about.competencies': 'Competencias',

        // Experiência
        'experience.title': 'EXPERIENCIA PROFESIONAL',
        'experience.job1.title': 'Especialista en Nuevos Productos',
        'experience.job1.company': 'Dinâmica Telecomunicações',
        'experience.job1.description': 'Responsable técnico del desarrollo e implementación de soluciones innovadoras en infraestructura de redes y seguridad, alineadas con las necesidades estratégicas de los clientes.',
        'experience.job1.task1': 'Desarrollo de asociaciones estratégicas',
        'experience.job1.task2': 'Implementación de Redes Seguras',
        'experience.job1.task3': 'Optimización de rendimiento y seguridad',
        'experience.job2.title': 'Consultor de Proyectos de TI',
        'experience.job2.company': 'ISH Tecnología',
        'experience.job2.description': 'Actuación estratégica en proyectos de Network Security, desde la planificación hasta la implementación y soporte, garantizando el cumplimiento de los mejores estándares del mercado.',
        'experience.job2.task1': 'Implementación de soluciones LAN/WLAN',
        'experience.job2.task2': 'Implementación de Firewalls de Nueva Generación',
        'experience.job2.task3': 'Experiencia con Aruba, CheckPoint, Cisco, Forcepoint y Fortinet',
        'experience.job3.title': 'Analista de Redes SR.',
        'experience.job3.company': 'Algar TI Consultoría',
        'experience.job3.description': 'Actué en el equipo de TI, responsable del monitoreo/soporte de los equipos de redes ubicados en las Represas de VALE.',
        'experience.job3.task1': 'Soporte a dispositivos de red Cisco',
        'experience.job3.task2': 'Participación técnica en Salas de Crisis',
        'experience.job3.task3': 'Monitoreo vía CA Spectrum',

        // Formação
        'education.title': 'FORMACIÓN ACADÉMICA',
        'education.degree1.title': 'Tecnólogo en Redes de Computadoras',
        'education.degree1.school': 'Universidade Estácio de Sá',
        'education.degree1.description': 'Formación completa en Redes de Computadoras con carga horaria total de 2200+ horas.',
        'education.degree2.title': 'Esp. en Telecomunicaciones y Redes de Computadoras',
        'education.degree2.school': 'Universidade Estácio de Sá',
        'education.degree2.description': 'Especialización en Telecomunicaciones y Redes de Computadoras con enfoque en Tecnologías Convergentes.',
        'education.degree3.title': 'Repensando Brasil: Sociedad, política e historia',
        'education.degree3.description': 'Este Posgrado ofrece las herramientas para una visión ciudadana, desarrollando conocimiento y habilidades para contribuir a la transformación de la realidad brasileña.',

        // Habilidades
        'skills.title': 'HABILIDADES TÉCNICAS',
        'skills.category1': 'SEGURIDAD DE RED',
        'skills.category2': 'CLOUD',
        'skills.category3': 'OTRAS HABILIDADES',
        'skills.network1': 'Firewalls',
        'skills.network2': 'Gestión de red',
        'skills.network3': 'Planificación y diseño de red',
        'skills.network4': 'Protocolo de Internet (IPv4/IPv6)',
        'skills.cloud3': 'Seguridad en la Nube',
        'skills.cloud4': 'Servicios en la Nube',
        'skills.other2': 'Hacking ético',
        'skills.other3': 'Ciberseguridad',
        'skills.other4': 'Respuesta a incidentes',

        // Certificações
        'certifications.title': 'CERTIFICACIONES',
        'certifications.expires': 'Expira el:',
        'certifications.ccna': 'Los titulares de la certificación Cisco CCNA han demostrado conocimientos y habilidades relacionados con fundamentos de red, acceso a la red, conectividad IP, servicios IP, fundamentos de seguridad, y automatización y programabilidad.',
        'certifications.fortinet': 'El certificado de Administrador de FortiGate 7.4 reconoce la experiencia en administración de FortiGate. El profesional certificado demostrará conocimiento de la configuración, operación y administración diaria de FortiGate.',
        'certifications.aws': 'Los titulares de esta certificación poseen un conocimiento fundamental de los servicios de TI y sus aplicaciones en la Nube AWS. Demuestran fluidez en la nube y conocimiento básico de AWS.',

        // Contato
        'contact.title': 'CONTÁCTAME',
        'contact.description': '¿Tienes un proyecto en mente, quieres discutir oportunidades de colaboración o tomar un café? Ponte en contacto, ¡me encantaría charlar!',
        'contact.email': 'EMAIL',
        'contact.phone': 'TELÉFONO',
        'contact.location': 'UBICACIÓN',
        'contact.address': 'Vila Velha, ES - Brasil',
        'contact.formName': 'TU NOMBRE',
        'contact.formEmail': 'TU EMAIL',
        'contact.formSubject': 'ASUNTO',
        'contact.formMessage': 'TU MENSAJE',
        'contact.formSubmit': 'ENVIAR MENSAJE',

        // Rodapé
        'footer.rights': 'Todos los derechos reservados.',
        'footer.downloadCV': 'DESCARGAR CV'
    }
};

// Carregar idioma salvo ou usar padrão
let currentLanguage = localStorage.getItem('language') || 'pt';

// Função para atualizar textos
function updateTexts(lang) {
    // Atualizar textos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                const translation = translations[lang][key];
                // Preservar HTML interno se tiver tags
                if (translation.includes('<br>') || translation.includes('<span>')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        }
    });

    // Atualizar placeholders com data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // CORREÇÃO 2: Atualizar bandeira corretamente
    const currentFlag = document.querySelector('.current-language-flag');
    if (currentFlag) {
        // Remover classes antigas
        currentFlag.className = 'current-language-flag flag-icon';

        // Adicionar classe correta baseada no idioma
        if (lang === 'en') {
            currentFlag.classList.add('flag-icon-us');
            currentFlag.style.backgroundImage = 'url("https://flagcdn.com/w40/us.png")';
        } else if (lang === 'es') {
            currentFlag.classList.add('flag-icon-es');
            currentFlag.style.backgroundImage = 'url("https://flagcdn.com/w40/es.png")';
        } else {
            currentFlag.classList.add('flag-icon-br');
            currentFlag.style.backgroundImage = 'url("https://flagcdn.com/w40/br.png")';
        }
    }

    // Atualizar opções ativas
    document.querySelectorAll('.language-option, .mobile-language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Salvar idioma selecionado
    localStorage.setItem('language', lang);
    currentLanguage = lang;

    // Atualizar links do CV
    // updateCVLinks(lang);

    // Disparar evento para outros scripts
    const event = new Event('languageChanged');
    document.dispatchEvent(event);
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Configurar dropdown de idioma
    document.querySelectorAll('.language-option, .mobile-language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            updateTexts(lang);
        });
    });

    // Carregar idioma salvo
    updateTexts(currentLanguage);

    // Atualizar links de download do CV
    function updateCVLinks(lang) {
        const cvOptions = document.querySelectorAll('.cv-option');
        cvOptions.forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === lang) {
                option.style.display = 'flex';
            } else {
                option.style.display = 'none';
            }
        });
    }

    // Observar mudanças de idioma
    document.addEventListener('languageChanged', function() {
        updateCVLinks(currentLanguage);
    });

    updateCVLinks(currentLanguage);
});
