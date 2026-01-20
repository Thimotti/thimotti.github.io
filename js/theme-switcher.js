// Gerenciador de temas
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        // Remover classes antigas
        document.body.classList.remove('dark-theme', 'light-theme');

        // Adicionar nova classe
        document.body.classList.add(this.theme === 'dark' ? 'dark-theme' : 'light-theme');
        document.body.setAttribute('data-theme', this.theme);

        // Atualizar ícone do botão
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            } else {
                themeToggle.innerHTML = this.theme === 'dark'
                    ? '<i class="fas fa-moon"></i>'
                    : '<i class="fas fa-sun"></i>';
            }
        }

        // Atualizar partículas
        setTimeout(() => this.updateParticles(), 100);
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Observar mudanças no tema
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme' || mutation.attributeName === 'class') {
                    this.updateParticles();
                }
            });
        });

        observer.observe(document.body, { attributes: true });
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();

        // Efeito visual no botão
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.style.transform = 'scale(1.2)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 200);
        }
    }

    updateParticles() {
        // Atualizar cores das partículas
        if (window.pJSDom && window.pJSDom.length > 0) {
            const pJS = window.pJSDom[0].pJS;
            const primaryColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary-color').trim();

            if (pJS && pJS.particles) {
                pJS.particles.color.value = primaryColor;
                if (pJS.particles.line_linked) {
                    pJS.particles.line_linked.color = primaryColor;
                }
                pJS.fn.particlesRefresh();
            }
        }
    }

    // Verificar preferência do sistema
    checkSystemPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            this.theme = 'light';
        }
        this.applyTheme();
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();

    // Verificar preferência do sistema se nenhum tema foi salvo
    if (!localStorage.getItem('theme')) {
        themeManager.checkSystemPreference();
    }

    // Observar mudanças no tema do sistema
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                themeManager.theme = e.matches ? 'light' : 'dark';
                themeManager.applyTheme();
            }
        };

        // Adicionar listener
        mediaQuery.addEventListener('change', handleChange);
    }
});
