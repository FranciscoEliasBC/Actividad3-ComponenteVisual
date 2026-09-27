
document.addEventListener('DOMContentLoaded', () => {

    // Boton Modal Informativa
    const btnInfo = document.getElementById('btn-info');
    if (btnInfo) {
        btnInfo.addEventListener('click', () => {
            Modal.open({
                title: 'Información del Sistema',
                content: '<p>Esta es una modal informativa sencilla generada de forma totalmente dinámica mediante la librería JavaScript.</p>',
                buttons: [
                    {
                        text: 'Entendido',
                        type: 'primary',
                        onClick: () => Modal.close()
                    }
                ]
            });
        });
    }

    // Boton Modal de Confirmacion
    const btnConfirm = document.getElementById('btn-confirm');
    if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
            Modal.open({
                title: 'Confirmar Acción',
                content: '<p>¿Estás seguro de que deseas realizar esta acción? Esta operación no se puede deshacer.</p>',
                buttons: [
                    {
                        text: 'Cancelar',
                        type: 'secondary',
                        onClick: () => Modal.close()
                    },
                    {
                        text: 'Sí, Continuar',
                        type: 'danger',
                        onClick: () => {
                            alert('Acción confirmada correctamente.');
                            Modal.close();
                        }
                    }
                ]
            });
        });
    }

    // Boton Modal  HTML
    const btnCustom = document.getElementById('btn-custom');
    if (btnCustom) {
        btnCustom.addEventListener('click', () => {
            Modal.open({
                title: 'Registro Rápido',
                content: `
                    <p style="margin-bottom: 10px;">Ingresa tus datos a continuación:</p>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <input type="text" placeholder="Nombre completo" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                        <input type="email" placeholder="Correo electrónico" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
                    </div>
                `,
                buttons: [
                    {
                        text: 'Cancelar',
                        type: 'secondary',
                        onClick: () => Modal.close()
                    },
                    {
                        text: 'Enviar Datos',
                        type: 'success',
                        onClick: () => {
                            alert('Datos enviados con éxito.');
                            Modal.close();
                        }
                    }
                ]
            });
        });
    }

});