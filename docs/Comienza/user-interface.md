---
sidebar_position: 3
title: Interfaz de usuario
description: Conoce la interfaz de usuario de Visual Studio Code y sus componentes principales
---

# Interfaz de usuario

En su esencia, Visual Studio Code es un editor de código. Al igual que muchos otros editores de código, VS Code adopta una interfaz de usuario común que consiste en un explorador a la izquierda, que muestra todos los archivos y carpetas a los que tienes acceso, y un editor a la derecha, que muestra el contenido de los archivos que has abierto.

<div style={{
  position: 'relative',
  width: '100%',
  paddingBottom: '56.25%',
  marginBottom: '1rem',
  }}>
  <iframe
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    }}
    src="https://www.youtube.com/embed/CxF3ykWP1H4"
    title="Tutorial de Visual Studio Code"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

## Diseño básico

VS Code viene con un diseño simple e intuitivo que maximiza el espacio proporcionado para el editor, mientras deja suficiente espacio para navegar y acceder al contexto completo de tu carpeta o proyecto. La interfaz de usuario está dividida en cinco áreas principales:

- **Editor** - El área principal para editar tus archivos. Puedes abrir tantos editores como desees, lado a lado vertical y horizontalmente.
- **Barra Lateral Principal** - Contiene diferentes vistas como el Explorador para ayudarte mientras trabajas en tu proyecto.
- **Barra de Estado** - Información sobre el proyecto abierto y los archivos que editas.
- **Barra de Actividades** - Ubicada en el extremo izquierdo. Te permite cambiar entre vistas y te proporciona indicadores adicionales específicos del contexto, como el número de cambios pendientes cuando Git está habilitado. Puedes cambiar la posición de la Barra de Actividades.
- **Panel** - Un espacio adicional para vistas debajo de la región del editor. Por defecto, contiene salida, información de depuración, errores y advertencias, y una terminal integrada. El Panel también se puede mover a la izquierda o derecha para obtener más espacio vertical.

![quicknav](/img/get-started/user-interface/editor.png)

> **Consejo**: También está disponible una Barra Lateral Secundaria para mostrar vistas opuestas a la Barra Lateral Principal. Puedes mostrarla con `Ctrl+Alt+B` y arrastrar una vista desde la Barra Lateral Principal a la Barra Lateral Secundaria.

## Edición lado a lado

Puedes abrir tantos editores como desees, lado a lado vertical y horizontalmente. Si ya tienes un editor abierto, hay múltiples formas de abrir otro editor al lado:

- `Alt` y seleccionar un archivo en la vista del Explorador.
- `Ctrl+\` para dividir el editor activo en dos.
- **Abrir al lado** (`Ctrl+Enter`) desde el menú contextual del Explorador en un archivo.
- Seleccionar el botón **Dividir Editor** en la parte superior derecha de un editor.
- Arrastrar y soltar un archivo a cualquier lado de la región del editor.
- Presionar `Ctrl+Enter` en la lista de archivos de Apertura Rápida (`Ctrl+P`).

![quicknav](/img/get-started/user-interface/lado.png)

Cuando abres otro archivo, el editor que está activo mostrará el contenido de ese archivo. Si tienes dos editores lado a lado y quieres abrir el archivo 'foo.cs' en el editor de la derecha, asegúrate de que este editor esté activo (haciendo clic dentro de él) antes de abrir el archivo 'foo.cs'.

Cuando tienes más de un editor abierto, puedes cambiar entre ellos rápidamente manteniendo presionada la tecla `Ctrl` (Cmd en macOS) y presionando 1, 2 o 3.

> **Consejo**: Puedes redimensionar editores y reordenarlos. Arrastra y suelta el área del título del editor para reposicionar o redimensionar el editor.

## Minimapa

Un Minimapa (esquema de código) te proporciona una vista general de alto nivel de tu código fuente, lo cual es útil para la navegación rápida y la comprensión del código. El minimapa de un archivo se muestra en el lado derecho del editor. Puedes seleccionar o arrastrar el área sombreada para saltar rápidamente a diferentes secciones en tu archivo.

Si tienes marcadores de plegado en el editor, como comentarios `//#region` o `MARK:`, entonces el minimapa muestra los nombres de los marcadores de plegado.

![quicknav](/img/get-started/user-interface/minimap.png)

> **Consejo**: Puedes mover el minimapa al lado izquierdo o desactivarlo completamente configurando respectivamente `"editor.minimap.side": "left"` o `"editor.minimap.enabled": false"` en la configuración del usuario o del espacio de trabajo.

## Migas de pan (Breadcrumbs)

El editor tiene una barra de navegación en la parte superior, también llamada migas de pan. Las migas de pan siempre muestran la ruta del archivo y, si el tipo de archivo actual tiene soporte de lenguaje para símbolos, la ruta del símbolo hasta la posición del cursor. Las migas de pan te permiten navegar rápidamente entre carpetas, archivos y símbolos.

![quicknav](/img/get-started/user-interface/migas.png)

Puedes desactivar las migas de pan con el elemento de menú **Ver > Apariencia > Alternar Migas de pan** o el comando **Ver: Alternar Migas de pan**. Para obtener más información sobre la característica de migas de pan, como personalizar su apariencia, consulta la sección Migas de pan del artículo Navegación de Código.

## Vistas

La vista del Explorador es solo una de las vistas disponibles en VS Code. También hay vistas para:

- **Búsqueda** - Proporciona búsqueda y reemplazo global en tu carpeta abierta.
- **Control de código fuente** - VS Code incluye control de código fuente Git por defecto.
- **Ejecutar** - La Vista de Ejecutar y Depurar de VS Code muestra variables, pilas de llamadas y puntos de interrupción.
- **Extensiones** - Instala y administra tus extensiones dentro de VS Code.
- **Vistas personalizadas** - Vistas contribuidas por extensiones.

![quicknav](/img/get-started/user-interface/vista1.png)

> **Consejo**: Puedes abrir cualquier vista usando el comando **Ver: Abrir Vista**.

Puedes mostrar u ocultar vistas haciendo clic derecho en la Barra de Actividades, y reordenarlas usando arrastrar y soltar. Dentro de la vista del Explorador, puedes mostrar u ocultar secciones a través del menú '...', o arrastrar y soltar secciones para reordenarlas.

![quicknav](/img/get-started/user-interface/vista2.gif)

## Próximos pasos

Ahora que conoces el diseño general de VS Code, comienza a personalizar el editor según tu forma de trabajo consultando los siguientes artículos:

- [Cambiar el tema](https://code.visualstudio.com/docs/getstarted/themes) - Establece un tema de Color y/o Iconos de Archivo según tus preferencias.
- [Usar diseños personalizados](https://code.visualstudio.com/docs/editor/custom-layout) - Aprende más sobre las personalizaciones del diseño del área de trabajo y del editor de VS Code.

