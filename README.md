# Componente Visual Reutilizable

**Asignatura:** Programación Web  
 
**Grupo:**  7SD

**Alumno:** Bautista Centeno Francisco Elias | 23160852

**Docente:** Martínez Nieto Adelina   


## Problema que Resuelve

En el desarrollo web, la interrupción visual amigable para mostrar alertas, formularios o confirmaciones 
críticas sin salir de la página actual es fundamental. 
Las funciones nativas como `alert()` o `confirm()` ofrecen un aspecto visual obsoleto y no personalizable.
Este componente visual resuelve esta limitación permitiendo crear ventanas emergentes interactivas, estéticas, 
accesibles y 100% dinámicas, integrándose fácilmente en cualquier proyecto web sin depender de frameworks complejos.

## Instalación

Para incluir este componente en tu proyecto:

1. Copia la carpeta `css/` con `componente.css`.
2. Copia la carpeta `js/` con `componente.js`.
3. Vincúlalos en tu documento `index.html`:

```html
<!-- En la cabecera <head> -->
<link rel="stylesheet" href="css/componente.css">

<!-- Antes de cerrar el </body> -->
<script src="js/componente.js"></script>
<script src="js/main.js"></script>
```

## Uso e invocación del componente

Primero se deben incluir los archivos del componente dentro del HTML:

```html
<link rel="stylesheet" href="css/componente.css">

<script src="js/componente.js"></script>
```

Después de cargar componente.js, el componente queda disponible mediante el objeto global Modal.

Para invocarlo se utiliza el método:

``` javascript
Modal.open({
    title: 'Título de la modal',
    content: '<p>Contenido de la ventana.</p>'
});
```

Por ejemplo, puede invocarse desde un botón:

```html
<button id="btnAbrir">Abrir Modal</button>

<script>
    document.getElementById('btnAbrir').addEventListener('click', () => {
        Modal.open({
            title: 'Hola',
            content: '<p>Modal funcionando correctamente.</p>'
        });
    });
</script>
```

Ejemplo 1: Modal informativa

``` javascript
Modal.open({
    title: 'Información',
    content: '<p>La modal funciona correctamente.</p>'
});
```

Ejemplo 2: Modal de confirmación

``` javascript
Modal.open({
    title: 'Confirmar acción',
    content: '<p>¿Deseas continuar?</p>',
    buttons: [
        {
            text: 'Cancelar',
            type: 'secondary',
            onClick: () => Modal.close()
        },
        {
            text: 'Continuar',
            type: 'success',
            onClick: () => {
                alert('Acción confirmada.');
                Modal.close();
            }
        }
    ]
});
```

Ejemplo 3: Modal con HTML personalizado

``` javascript
Modal.open({
    title: 'Registro',
    content: `
        <input type="text" placeholder="Nombre">
        <input type="email" placeholder="Correo">
    `
});
```
