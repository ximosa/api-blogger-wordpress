// Componente Header
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    background-color: #021603;
                    padding: 1rem;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    text-decoration: none;
                }

                .nav-menu {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .nav-menu a {
                    color: white;
                    text-decoration: none;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }

                .nav-menu a:hover {
                    color: #4CAF50;
                }

                .menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                }

                @media (max-width: 768px) {
                    .menu-toggle {
                        display: block;
                    }

                    .nav-menu {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background-color: #021603;
                        flex-direction: column;
                        padding: 1rem;
                        gap: 1rem;
                    }

                    .nav-menu.active {
                        display: flex;
                    }

                    .nav-menu a {
                        padding: 0.5rem 0;
                        display: block;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="nav-container">
                    <a href="/index.html" class="logo">Webgae</a>
                    <button class="menu-toggle">☰</button>
                    <ul class="nav-menu" id="nav-menu">
                        <li><a href="/index.html">Inicio</a></li>
                        <li><a href="/blog.html">Blog (Blogger)</a></li>
                        <li><a href="/wp-blog.html">Blog (WordPress)</a></li>
                    </ul>
                </div>
            </nav>
        `;

        // Agregar event listeners
        const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
        const navMenu = this.shadowRoot.querySelector('.nav-menu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (en móvil)
        const links = this.shadowRoot.querySelectorAll('.nav-menu a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Cerrar menú al redimensionar la ventana
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// Componente Footer
class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .footer {
                    background-color: #021603;
                    color: white;
                    padding: 2rem 1rem;
                    margin-top: 3rem;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                }

                .footer p {
                    margin: 0;
                    font-size: 0.9rem;
                }

                .footer a {
                    color: #4CAF50;
                    text-decoration: none;
                }

                .footer a:hover {
                    text-decoration: underline;
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <p>© ${new Date().getFullYear()} Webgae. Todos los derechos reservados.</p>
                    <p>Ejemplos de implementación de APIs de Blog</p>
                </div>
            </footer>
        `;
    }
}

// Registrar los componentes
customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);