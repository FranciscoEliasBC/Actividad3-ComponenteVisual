
(function (global) {
    'use strict';

    class ModalComponent {
        constructor() {
            this.overlay = null;
            this.container = null;
            this.header = null;
            this.body = null;
            this.footer = null;
            this.activeModal = false;

            this._init();
        }

        /**Crea la estructura de la modal dinámicamente en el DOM si no existe.*/
        _init() {
            if (document.querySelector('.modal-overlay')) {
                this.overlay = document.querySelector('.modal-overlay');
                this.container = this.overlay.querySelector('.modal-container');
                this.header = this.overlay.querySelector('.modal-header');
                this.body = this.overlay.querySelector('.modal-body');
                this.footer = this.overlay.querySelector('.modal-footer');
                return;
            }

            // Overlay
            this.overlay = document.createElement('div');
            this.overlay.className = 'modal-overlay';

            // Contenedor P.
            this.container = document.createElement('div');
            this.container.className = 'modal-container';

            // Encabezado
            this.header = document.createElement('div');
            this.header.className = 'modal-header';

            // Cuerpo
            this.body = document.createElement('div');
            this.body.className = 'modal-body';

            // Pie de Pag.
            this.footer = document.createElement('div');
            this.footer.className = 'modal-footer';

            // Estructura
            this.container.appendChild(this.header);
            this.container.appendChild(this.body);
            this.container.appendChild(this.footer);
            this.overlay.appendChild(this.container);
            document.body.appendChild(this.overlay);

            // Eventos 
            this._setupListeners();
        }

        /**Cierra la modal al presionar fuera o ESC*/
        _setupListeners() {
            // Cerrar en el fondo oscuro
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });

            // Cerrar ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.activeModal) {
                    this.close();
                }
            });
        }


        open(options = {}) {
            const {
                title = 'Atención',
                content = '',
                buttons = []
            } = options;

            // Renderizar Encabezado
            this.header.innerHTML = `
                <h3 class="modal-title">${title}</h3>
                <button class="modal-close-btn">&times;</button>
            `;
            this.header.querySelector('.modal-close-btn').addEventListener('click', () => this.close());

            // Renderizar Cuerpo
            this.body.innerHTML = content;

            // Renderizar Botones
            this.footer.innerHTML = '';
            if (buttons.length > 0) {
                this.footer.style.display = 'flex';
                buttons.forEach(btnConfig => {
                    const btn = document.createElement('button');
                    btn.className = `btn btn-${btnConfig.type || 'secondary'}`;
                    btn.textContent = btnConfig.text || 'Aceptar';

                    btn.addEventListener('click', () => {
                        if (typeof btnConfig.onClick === 'function') {
                            btnConfig.onClick();
                        } else {
                            this.close();
                        }
                    });

                    this.footer.appendChild(btn);
                });
            } else {
                this.footer.style.display = 'flex';
                const defaultBtn = document.createElement('button');
                defaultBtn.className = 'btn btn-primary';
                defaultBtn.textContent = 'Cerrar';
                defaultBtn.addEventListener('click', () => this.close());
                this.footer.appendChild(defaultBtn);
            }

            // Modal en css
            this.overlay.classList.add('active');
            this.activeModal = true;
        }

        close() {
            if (this.overlay) {
                this.overlay.classList.remove('active');
                this.activeModal = false;
            }
        }
    }

    // Exponer la instancia
    global.Modal = new ModalComponent();

})(window);