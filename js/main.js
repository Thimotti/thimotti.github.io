document.addEventListener('DOMContentLoaded', function() {
    // Menu móvel
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('#navMenu a').forEach(link => {
            if (!link.classList.contains('mobile-language-option')) {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            }
        });
    }

    // Atualizar ano atual no rodapé
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Efeito de digitação
    const typingText = document.getElementById('typingText');
    if (typingText) {
        const textArrays = {
            pt: [
                "<Projetos de TI/>",
                "<Ciberseguraça/>",
                "<Segurança de Rede/>",
                "<Tecnologia/>"
            ],
            en: [
                "<IT Project/>",
                "<Cybersecurity/>",
                "<Network Security/>",
                "<Technology/>"
            ],
            es: [
                "<Proyectos de TI/>",
                "<Ciberseguridad/>",
                "<Seguridad de Red/>",
                "<Tecnología/>"
            ]
        };

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentLang = localStorage.getItem('language') || 'pt';

        function getCurrentTextArray() {
            return textArrays[currentLang] || textArrays.pt;
        }

        function typeEffect() {
            const currentArray = getCurrentTextArray();
            const currentText = currentArray[textIndex];

            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % currentArray.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 50 : 100);
            }
        }

        // Iniciar efeito de digitação
        setTimeout(typeEffect, 1000);

        // Atualizar quando idioma mudar
        document.addEventListener('languageChanged', function() {
            currentLang = localStorage.getItem('language') || 'pt';
            textIndex = 0;
            charIndex = 0;
            isDeleting = false;
            typingText.textContent = '';
            setTimeout(typeEffect, 500);
        });
    }

    // Animar contadores
    function animateCounters() {
        const expYears = document.getElementById('expYears');
        const projectCount = document.getElementById('projectCount');
        const clientCount = document.getElementById('clientCount');

        if (expYears) {
            let expNum = 0;
            const expInterval = setInterval(() => {
                expNum++;
                expYears.textContent = expNum + '+';

                if (expNum >= 20) {
                    clearInterval(expInterval);
                }
            }, 150);
        }

        if (projectCount) {
            let projectNum = 0;
            const projectInterval = setInterval(() => {
                projectNum += 5;
                projectCount.textContent = projectNum + '+';

                if (projectNum >= 120) {
                    clearInterval(projectInterval);
                }
            }, 50);
        }

        if (clientCount) {
            let clientNum = 0;
            const clientInterval = setInterval(() => {
                clientNum += 30;
                clientCount.textContent = clientNum + '+';

                if (clientNum >= 690) {
                    clearInterval(clientInterval);
                }
            }, 80);
        }
    }

    // Animar barras de habilidade
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }

    // Observador de interseção para animações
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.id === 'sobre') {
                    animateCounters();
                }
                if (entry.target.id === 'habilidades') {
                    animateSkillBars();
                }

                // Animar elementos filhos
                if (entry.target.classList.contains('contact-info')) {
                    const contactItems = entry.target.querySelectorAll('.contact-item');
                    contactItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    });

                    const socialLinks = entry.target.querySelectorAll('.social-link');
                    socialLinks.forEach((link, index) => {
                        setTimeout(() => {
                            link.classList.add('visible');
                        }, contactItems.length * 200 + index * 100);
                    });
                }

                if (entry.target.classList.contains('contact-form')) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 300);
                }
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const elementsToObserve = [
        ...document.querySelectorAll('.section-fade-in'),
        ...document.querySelectorAll('.timeline-item'),
        ...document.querySelectorAll('.education-card'),
        ...document.querySelectorAll('.skill-category'),
        ...document.querySelectorAll('.certification-card'),
        ...document.querySelectorAll('.contact-item'),
        ...document.querySelectorAll('.social-link')
    ];

    elementsToObserve.forEach(element => {
        if (element) observer.observe(element);
    });

    // Observar seções específicas
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section) observer.observe(section);
    });

    // Formulário de contato funcional
    const contactForm = document.getElementById('formContato');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Coletar dados do formulário
            const formData = new FormData(this);
            const data = {
                nome: formData.get('nome'),
                email: formData.get('email'),
                assunto: formData.get('assunto'),
                mensagem: formData.get('mensagem'),
                _language: localStorage.getItem('language') || 'pt'
            };

            // Validar dados
            if (!data.nome || !data.email || !data.assunto || !data.mensagem) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }

            if (!isValidEmail(data.email)) {
                showNotification('Por favor, insira um email válido.', 'error');
                return;
            }

            // Simular envio do email usando EmailJS ou Formspree
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            const originalLang = submitBtn.getAttribute('data-i18n');

            // Obter texto baseado no idioma atual
            const currentLang = localStorage.getItem('language') || 'pt';
            const sendingText = {
                pt: 'ENVIANDO...',
                en: 'SENDING...',
                es: 'ENVIANDO...'
            };

            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${sendingText[currentLang]}`;
            submitBtn.disabled = true;

            // Usando Formspree para envio real de email
            // Substitua 'SEU_FORM_ID_AQUI' pelo ID do seu formulário Formspree
            fetch('https://formspree.io/f/mvovndpr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.nome,
                    email: data.email,
                    subject: data.assunto,
                    message: data.mensagem,
                    _replyto: data.email,
                    _subject: `Contato Portfolio: ${data.assunto}`,
                    _language: data._language
                })
            })
            .then(response => {
                if (response.ok) {
                    const successMessages = {
                        pt: 'MENSAGEM ENVIADA COM SUCESSO! ENTRAREI EM CONTATO EM BREVE.',
                        en: 'MESSAGE SENT SUCCESSFULLY! I WILL CONTACT YOU SOON.',
                        es: 'MENSAJE ENVIADO CON ÉXITO! ME PONDRÉ EN CONTACTO PRONTO.'
                    };
                    showNotification(successMessages[currentLang], 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Erro ao enviar mensagem');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                const errorMessages = {
                    pt: 'Houve um erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato diretamente por email.',
                    en: 'There was an error sending the message. Please try again or contact directly by email.',
                    es: 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo o contacte directamente por correo electrónico.'
                };
                showNotification(errorMessages[currentLang], 'error');
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        });

        // Função de validação de email
        function isValidEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        // Função para mostrar notificação
        function showNotification(message, type) {
            // Remover notificação anterior se existir
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }

            // Criar nova notificação
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                    <span>${message}</span>
                </div>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            `;

            document.body.appendChild(notification);

            // Adicionar estilos
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? 'var(--primary-color)' : '#ff4444'};
                color: white;
                padding: 15px 20px;
                border-radius: var(--border-radius);
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                z-index: 10000;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                animation: slideIn 0.3s ease;
                max-width: 400px;
            `;

            // Estilos para conteúdo
            const notificationContent = notification.querySelector('.notification-content');
            notificationContent.style.cssText = `
                display: flex;
                align-items: center;
                gap: 10px;
            `;

            // Estilo para botão de fechar
            const closeBtn = notification.querySelector('.notification-close');
            closeBtn.style.cssText = `
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1.2rem;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            `;

            closeBtn.addEventListener('click', () => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            });

            // Auto-remover após 5 segundos
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 5000);
        }

        // Adicionar keyframes CSS para animação
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Dropdown de Idioma
    const languageDropdownBtn = document.getElementById('languageDropdownBtn');
    const languageDropdownContent = document.getElementById('languageDropdownContent');

    if (languageDropdownBtn && languageDropdownContent) {
        languageDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdownContent.classList.toggle('show');
        });

        // Fechar dropdown ao clicar fora
        document.addEventListener('click', function(e) {
            if (!languageDropdownBtn.contains(e.target) && !languageDropdownContent.contains(e.target)) {
                languageDropdownContent.classList.remove('show');
            }
        });
    }
    // CORREÇÃO 1: Fechar dropdown após seleção de idioma
document.querySelectorAll('.language-option, .mobile-language-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');

        // Fechar dropdowns
        const desktopDropdown = document.getElementById('languageDropdownContent');
        const mobileMenu = document.getElementById('navMenu');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');

        if (desktopDropdown) {
            desktopDropdown.classList.remove('show');
        }

        // Fechar menu móvel se estiver aberto
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }

        updateTexts(lang);
    });
});

    // Idioma no menu móvel
    document.querySelectorAll('.mobile-language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            // Fechar menu móvel após seleção
            const navMenu = document.getElementById('navMenu');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            if (navMenu && mobileMenuBtn) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // ============================================
    // DOWNLOAD DO CV - VERSÃO CORRIGIDA
    // ============================================

    const cvDownloadBtn = document.getElementById('cvDownloadBtn');
    const cvOptions = document.getElementById('cvOptions');

    if (cvDownloadBtn && cvOptions) {
        let cvMenuOpen = false;

        // Função para abrir/fechar menu
        function toggleCVMenu() {
            cvMenuOpen = !cvMenuOpen;
            cvOptions.style.display = cvMenuOpen ? 'flex' : 'none';

            // Reposicionar se necessário
            if (cvMenuOpen) {
                const rect = cvDownloadBtn.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Verificar se há espaço abaixo
                if (rect.bottom + cvOptions.offsetHeight > viewportHeight) {
                    // Colocar acima
                    cvOptions.style.top = 'auto';
                    cvOptions.style.bottom = '100%';
                    cvOptions.style.marginBottom = '10px';
                } else {
                    // Colocar abaixo
                    cvOptions.style.top = '100%';
                    cvOptions.style.bottom = 'auto';
                    cvOptions.style.marginTop = '10px';
                }
            }
        }

        // Abrir/fechar ao clicar no botão
        cvDownloadBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleCVMenu();
        });

        // Fechar ao clicar fora
        document.addEventListener('click', function(e) {
            if (cvMenuOpen && !cvDownloadBtn.contains(e.target) && !cvOptions.contains(e.target)) {
                toggleCVMenu();
            }
        });

        // Fechar ao selecionar uma opção
        cvOptions.addEventListener('click', function(e) {
            if (e.target.closest('.cv-option')) {
                setTimeout(() => {
                    toggleCVMenu();
                }, 300);
            }
        });

        // Fechar ao pressionar ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && cvMenuOpen) {
                toggleCVMenu();
            }
        });

        // Inicializar estado
        cvOptions.style.display = 'none';

        // Função para atualizar destaque das opções do CV
        function updateCVOptionsHighlight(lang) {
            const allOptions = cvOptions.querySelectorAll('.cv-option');
            allOptions.forEach(option => {
                // Remover destaque anterior
                option.classList.remove('active-cv-option');

                // Destacar opção do idioma atual
                if (option.getAttribute('data-lang') === lang) {
                    option.classList.add('active-cv-option');
                }
            });
        }

        // Atualizar quando idioma mudar
        document.addEventListener('languageChanged', function() {
            const currentLang = localStorage.getItem('language') || 'pt';
            updateCVOptionsHighlight(currentLang);
        });

        // Destacar opção inicial
        const initialLang = localStorage.getItem('language') || 'pt';
        updateCVOptionsHighlight(initialLang);
    }
    // Efeito de brilho aleatório
    function addRandomGlow() {
        const elements = document.querySelectorAll('.section-title, .btn, .highlight-item, .education-card, .certification-card');

        elements.forEach(element => {
            if (Math.random() > 0.7) {
                element.style.boxShadow = '0 0 20px var(--primary-glow)';

                setTimeout(() => {
                    element.style.boxShadow = '';
                }, 2000);
            }
        });
    }

    // Executar efeito de brilho aleatório a cada 3 segundos
    setInterval(addRandomGlow, 3000);

    // Efeito de brilho no avatar ao carregar
    setTimeout(() => {
        const avatar = document.querySelector('.avatar-large');
        if (avatar) {
            avatar.style.boxShadow = '0 0 60px var(--primary-glow)';
            setTimeout(() => {
                avatar.style.boxShadow = '0 0 40px var(--primary-glow)';
            }, 2000);
        }
    }, 500);

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito parallax para elementos de fundo
    function initParallax() {
        // Criar elementos parallax
        const parallaxContainer = document.createElement('div');
        parallaxContainer.className = 'parallax-container';
        parallaxContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;

        // Criar elementos parallax
        const parallaxElements = [];
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'parallax-element';
            element.style.cssText = `
                position: absolute;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: var(--primary-transparent);
                border: 1px solid var(--primary-color);
                border-radius: 50%;
                opacity: ${Math.random() * 0.3 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                filter: blur(${Math.random() * 10}px);
            `;
            element.setAttribute('data-speed', Math.random() * 0.5 + 0.1);
            parallaxContainer.appendChild(element);
            parallaxElements.push(element);
        }

        document.body.appendChild(parallaxContainer);

        // Efeito parallax no scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = parseFloat(element.getAttribute('data-speed'));
                const yPos = scrollPosition * speed;
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Inicializar parallax
    initParallax();

    // Carregar partículas
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', function() {
            console.log('Partículas carregadas');
        });
    }
});
