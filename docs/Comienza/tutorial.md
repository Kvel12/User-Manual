---
sidebar_position: 1
title: Tutorial - Primeros pasos con Visual Studio Code
description: Aprende las características fundamentales de VS Code para comenzar a codificar rápidamente
---

# Tutorial: Primeros pasos con Visual Studio Code

En este tutorial, aprenderás sobre las características clave de Visual Studio Code que te ayudarán a comenzar a programar rápidamente. Conocerás los diferentes componentes de la interfaz de usuario y cómo personalizarla según tus preferencias. Luego, escribirás código y utilizarás las funciones de edición incorporadas, como IntelliSense y las Acciones de Código, además de aprender sobre la ejecución y depuración de tu código. Al instalar una extensión de lenguaje, agregarás soporte para un lenguaje de programación diferente.

> **Consejo**: Si prefieres seguir el tutorial en video, puedes ver el video de Introducción que cubre los mismos pasos que este tutorial.

## Prerrequisitos
- Descarga e instala Visual Studio Code en tu computadora

## 1. Abrir una carpeta en VS Code

Puedes usar Visual Studio Code para trabajar en archivos individuales y hacer ediciones rápidas, o puedes abrir una carpeta, también conocida como espacio de trabajo (workspace).

Comencemos creando una carpeta y abriéndola en VS Code. Usarás esta carpeta durante todo el tutorial.

1. Abre Visual Studio Code.
   Cuando abras Visual Studio Code por primera vez, deberías ver la página de Bienvenida con diferentes acciones para comenzar.

2. Selecciona **Archivo > Abrir Carpeta...** desde el menú para abrir una carpeta.
![quicknav](/img/get-started/tutorial/abrir_carpeta.png)

3. Selecciona una carpeta, y luego selecciona **Seleccionar Carpeta** (Abrir en Windows).
   La carpeta que crees será la raíz de tu espacio de trabajo.
![quicknav](/img/get-started/tutorial/seleccionar_carpeta.png)

4. En el diálogo de Confianza del Espacio de Trabajo, selecciona **Sí, confío en los autores** para habilitar todas las características en el espacio de trabajo.
![quicknav](/img/get-started/tutorial/confiar_autores.png)  

5. Ahora deberías ver la vista del Explorador a la izquierda, mostrando el nombre de la carpeta.
   Usa la vista del Explorador para ver y administrar los archivos y carpetas en tu espacio de trabajo.
![quicknav](/img/get-started/tutorial/visualizador.png)  

> **Consejo**: Cuando abres una carpeta en Visual Studio Code, el editor puede restaurar el estado de la interfaz de usuario para esa carpeta, como los archivos abiertos, la vista activa y el diseño del editor. También puedes configurar ajustes que solo se apliquen a esa carpeta o definir configuraciones de depuración. Obtén más información sobre los [espacios de trabajo](https://code.visualstudio.com/docs/editor/workspaces).

## 2. Explorar la interfaz de usuario

Ahora que tienes una carpeta abierta en VS Code, hagamos un recorrido rápido por la interfaz de usuario.

### Cambiar entre vistas con la Barra de Actividades

1. Utiliza la Barra de Actividades para cambiar entre diferentes vistas.

![quicknav](/img/get-started/tutorial/activity_bar.png)

> **Consejo**: Pasa el mouse sobre la Barra de Actividades para ver el nombre de cada vista y el atajo de teclado correspondiente. Puedes alternar entre abrir y cerrar una vista seleccionando la vista nuevamente o presionando el atajo de teclado.

2. Cuando seleccionas una vista en la Barra de Actividades, la Barra Lateral Principal se abre para mostrar información específica de la vista.

Por ejemplo, la vista de Ejecutar y Depurar te permite configurar e iniciar sesiones de depuración.

### Ver y editar archivos con el Editor

1. Selecciona la vista del Explorador en la Barra de Actividades y selecciona el botón **Nuevo Archivo...** para crear un nuevo archivo en tu espacio de trabajo.
![quicknav](/img/get-started/tutorial/nuevo_archivo.png)

2. Ingresa el nombre `index.html` y presiona Enter.

Se agregará un archivo a tu espacio de trabajo y se abrirá un Editor en el área principal de la ventana.

3. Comienza a escribir algo de código HTML en el archivo `index.html`.
![quicknav](/img/get-started/tutorial/html.png)

Mientras escribes, deberías ver sugerencias emergentes que te ayudan a completar tu código (IntelliSense). Puedes usar las teclas Arriba y Abajo para navegar por las sugerencias, y Tab para insertar la sugerencia seleccionada.

4. Agrega más archivos a tu espacio de trabajo y nota que cada archivo abre una nueva pestaña de Editor.
![quicknav](/img/get-started/tutorial/mas_archivos.png)

Puedes abrir tantos editores como desees y verlos lado a lado vertical u horizontalmente. Aprende más sobre la [edición lado a lado](https://code.visualstudio.com/docs/getstarted/userinterface#_side-by-side-editing).

### Acceder a la terminal desde el área del Panel

1. Visual Studio Code tiene una terminal integrada. Ábrela presionando `Ctrl+Mayus+``.
![quicknav](/img/get-started/tutorial/terminal.png)
Puedes elegir entre diferentes shells, como PowerShell, Command Prompt o Bash, dependiendo de la configuración de tu sistema operativo.

2. En la terminal, ingresa el siguiente comando para crear un nuevo archivo en tu espacio de trabajo:
```bash
echo "Hola Mundo" > hola.txt
```
![quicknav](/img/get-started/tutorial/terminal2.png)

La carpeta de trabajo predeterminada es la raíz de tu espacio de trabajo. Observa que la vista del Explorador automáticamente detecta y muestra el nuevo archivo.

3. Puedes abrir múltiples terminales simultáneamente. Selecciona el menú desplegable **Iniciar Perfil** para ver los shells disponibles y elegir uno.
![quicknav](/img/get-started/tutorial/terminal3.png)

## 3. Escribir código

Visual Studio Code tiene soporte incorporado para JavaScript, TypeScript, HTML, CSS y más. En este tutorial, crearás un archivo JavaScript de ejemplo y utilizarás algunas de las funciones de edición de código que ofrece VS Code.

VS Code admite muchos lenguajes de programación y, en el siguiente paso, instalarás una extensión de lenguaje para agregar soporte para un lenguaje diferente, en este caso Python.

1. En la vista del Explorador, crea un nuevo archivo `app.js` y comienza a escribir el siguiente código JavaScript:

```javascript
function sayHello(name) {
    console.log("Hello, " + name);
}

sayHello('VS Code');
```

Mientras escribes, deberías ver sugerencias emergentes que te ayudan a completar tu código (IntelliSense). Puedes usar las teclas Arriba y Abajo para navegar por las sugerencias y Tab para insertar la sugerencia seleccionada.

![quicknav](/img/get-started/tutorial/javascript-intellisense.gif)

Observa también el formato del código (resaltado de sintaxis) que ayuda a distinguir entre diferentes partes del código.

2. Cuando coloques el cursor en la cadena "Hello,", deberías ver aparecer un icono de bombilla que indica que hay una Acción de Código disponible.

También puedes usar el atajo de teclado `Ctrl+Espacio` para abrir el menú de la bombilla.

3. Selecciona el icono de la bombilla y luego selecciona **Convertir a plantilla de cadena**.
![quicknav](/img/get-started/tutorial/javascript2.png)

Las Acciones de Código son sugerencias para aplicar correcciones rápidas a tu código. En este caso, la Acción de Código convierte `"Hello, " + name` en una plantilla de cadena `` `Hello, ${name}` ``, que es una construcción especial de JavaScript para incrustar expresiones en cadenas.

> **Consejo**: Aprende más sobre las [características de edición de código](https://code.visualstudio.com/docs/editor/codebasics), [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense), [navegación de código](https://code.visualstudio.com/docs/editor/editingevolved) y [refactorización](https://code.visualstudio.com/docs/editor/refactoring) en VS Code.

## 4. Instalar una extensión de lenguaje

VS Code tiene un rico ecosistema de extensiones que te permiten agregar lenguajes, depuradores y herramientas a tu instalación para admitir tu flujo de trabajo de desarrollo específico. Hay miles de extensiones disponibles en el Visual Studio Marketplace.

Vamos a instalar una extensión de lenguaje para agregar soporte para Python, o cualquier otro lenguaje de programación que te interese.

1. Selecciona la vista de Extensiones en la Barra de Actividades.
   La vista de Extensiones te permite buscar e instalar extensiones desde dentro de VS Code.

![quicknav](/img/get-started/tutorial/python1.png)

2. Ingresa "Python" en el cuadro de búsqueda de la vista de Extensiones para buscar extensiones relacionadas con Python. Selecciona la extensión Python publicada por Microsoft y luego selecciona el botón Instalar.

![quicknav](/img/get-started/tutorial/python2.png)

3. Ahora, crea un nuevo archivo `hello.py` en tu espacio de trabajo y comienza a escribir el siguiente código Python:

```python
def greet(name):
    print(f"¡Hola, {name}!")

greet("VS Code")
```

Observa que ahora también obtienes sugerencias e IntelliSense para el código Python.
![quicknav](/img/get-started/tutorial/python3.gif)

## Próximos pasos

¡Felicitaciones! Has completado el tutorial y explorado algunas de las características clave de Visual Studio Code. Ahora que has aprendido los conceptos básicos de Visual Studio Code, obtén más información sobre cómo:

- [Descubrir y ejecutar pruebas unitarias para tu código](https://code.visualstudio.com/docs/editor/testing)
- [Usar la terminal integrada](https://code.visualstudio.com/docs/terminal/getting-started)
- [Configurar un entorno de desarrollo remoto](https://code.visualstudio.com/docs/remote/remote-overview)
