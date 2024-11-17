# Tienda de Extensiones

Las funcionalidades incluidas en Visual Studio Code de forma predeterminada son solo el comienzo. Las extensiones de VS Code permiten añadir lenguajes, depuradores y herramientas a tu instalación para mejorar tu flujo de trabajo de desarrollo. Su modelo de extensibilidad permite a los desarrolladores de extensiones integrarse directamente en la interfaz de VS Code y contribuir con funciones a través de las mismas API que usa VS Code. Este artículo explica cómo encontrar, instalar y gestionar extensiones de VS Code desde el Mercado de Visual Studio Code (Marketplace).

## Explorar extensiones

Puedes explorar e instalar extensiones desde dentro de VS Code. Abre la vista de Extensiones haciendo clic en el ícono de Extensiones en la Barra de Actividades al lado de VS Code o usando el comando View: Extensions (Ctrl+Shift+X).

![extensionsviewicon](/img/user-guide/extensions/extensions-view-icon.png)

Esto te mostrará una lista de las extensiones más populares de VS Code en el Marketplace de VS Code.

![extensionspopular](/img/user-guide/extensions/extensions-popular.png)

Cada extensión en la lista incluye una breve descripción, el editor, el número de descargas y una calificación de cinco estrellas. Puedes seleccionar el elemento de la extensión para mostrar la página de detalles de la extensión, donde podrás obtener más información.

> Nota: Si el acceso a Internet de tu computadora pasa a través de un servidor proxy, necesitarás configurar el servidor proxy.

## Instalar una extensión

Para instalar una extensión, selecciona el botón Instalar. Una vez que la instalación se haya completado, el botón Instalar cambiará al botón de Administrar (ícono de engranaje).

Si deseas instalar una versión específica de una extensión, haz clic derecho sobre la extensión y selecciona Instalar Otra Versión. Luego podrás seleccionar una versión de la lista disponible.

Cuando la sincronización de configuraciones esté habilitada, puedes compartir tus configuraciones de VS Code, como las extensiones, entre tus máquinas. Para instalar una extensión y evitar que se sincronice entre tus máquinas, haz clic derecho sobre la extensión y selecciona Instalar (No sincronizar).

### Encontrar e instalar una extensión

Por ejemplo, instalemos la popular extensión TODO Highlight. Esta extensión resalta textos como 'TODO:' y 'FIXME:' en tu código fuente, lo que te permite encontrar rápidamente las secciones pendientes.

![todohighlighting](/img/user-guide/extensions/todo-highlighting.png)

En la vista de Extensiones (Ctrl+Shift+X), escribe 'todo' en el cuadro de búsqueda para filtrar las ofertas del Marketplace a extensiones que tengan 'todo' en el título o en los metadatos. Deberías ver la extensión TODO Highlight en la lista.

![searchfortodoextension](/img/user-guide/extensions/search-for-todo-extension.png)

Una extensión se identifica de manera única por su editor y el ID de la extensión. Si seleccionas la extensión TODO Highlight, verás la página de detalles de la extensión, donde podrás encontrar el ID de la extensión, en este caso, wayou.vscode-todo-highlight. Conocer el ID de la extensión puede ser útil si hay varias extensiones con nombres similares.

![todohighlightdetails](/img/user-guide/extensions/todo-highlight-details.png)

Selecciona el botón Instalar, y VS Code descargará e instalará la extensión desde el Marketplace. Cuando la instalación esté completa, el botón Instalar será reemplazado por un botón de engranaje de Administrar.

![managebutton](/img/user-guide/extensions/manage-button.png)

Para ver la extensión TODO Highlight en acción, abre cualquier archivo de código fuente y agrega el texto 'TODO:', y verás el texto resaltado.

La extensión TODO Highlight contribuye con los comandos TODO-Highlight: List highlighted annotations y TODO-Highlight: Toggle highlight, que puedes encontrar en la Paleta de Comandos (Ctrl+Shift+P). El comando TODO-Highlight: Toggle highlight te permite deshabilitar o habilitar rápidamente el resaltado.

![todohighlightcommands](/img/user-guide/extensions/todo-highlight-commands.png)

La extensión también proporciona configuraciones para ajustar su comportamiento, las cuales puedes encontrar en el editor de Configuración (Ctrl+,). Por ejemplo, si deseas que la búsqueda de texto no distinga entre mayúsculas y minúsculas, puedes desmarcar la opción Todohighlight: Is Case Sensitive.

![todohighlightsettings](/img/user-guide/extensions/todo-highlight-settings.png)

Si una extensión no ofrece la funcionalidad que deseas, siempre puedes desinstalarla desde el menú contextual del botón de Administrar.

![todohighlightuninstall](/img/user-guide/extensions/todo-highlight-uninstall.png)

Este ha sido solo un ejemplo de cómo instalar y usar una extensión. El Marketplace de VS Code tiene miles de extensiones que soportan cientos de lenguajes de programación y tareas. Desde soporte completo para lenguajes como Java, Python, Go y C++, hasta extensiones simples que crean GUIDs, cambian el tema de color o agregan mascotas virtuales al editor.

### Detalles de Extensiones

En la página de detalles de una extensión, puedes leer el README de la extensión y revisar los siguientes aspectos:

- Contribuciones de Funcionalidades: Las adiciones que la extensión aporta a VS Code, como configuraciones, comandos, atajos de teclado, gramáticas de lenguajes, depuradores, etc.
- Historial de Cambios: El archivo CHANGELOG del repositorio de la extensión, si está disponible.
- Dependencias: Una lista que indica si la extensión depende de otras extensiones.

![extensioncontributions](/img/user-guide/extensions/extension-contributions.png)

Si una extensión es un Paquete de Extensiones, la sección de Paquete de Extensiones mostrará qué extensiones se instalarán al instalar el paquete. Los Paquetes de Extensiones agrupan varias extensiones para que puedan instalarse fácilmente al mismo tiempo.

![extensionpack](/img/user-guide/extensions/extension-pack.png)

### Filtro de vista de extensiones y comandos

Puedes filtrar la vista de extensiones con el menú contextual Filtro de Extensiones.

![extensions-view-filter-menu](/img/user-guide/extensions/extensions-view-filter-menu.png)

Hay filtros para mostrar:

- La lista de extensiones desactualizadas que pueden ser actualizadas.
- La lista de extensiones actualmente habilitadas/deshabilitadas.
- La lista de extensiones recomendadas basadas en tu espacio de trabajo.
- La lista de extensiones globalmente populares.

Puedes ordenar la lista de extensiones por el Contador de Instalaciones, Calificación, Nombre, Fecha de Publicación o Fecha de Actualización en orden ascendente o descendente. Puedes aprender más sobre los filtros de búsqueda de extensiones a continuación.

Puedes ejecutar comandos adicionales de la vista de extensiones a través del botón ... View and More Actions.

![more-button](/img/user-guide/extensions/more-button.png)

A través de este menú contextual puedes controlar las actualizaciones de extensiones, habilitar o deshabilitar todas las extensiones, y utilizar la utilidad Bisect de Extensiones, que te permite aislar un comportamiento problemático de una extensión al dividir el conjunto de extensiones activas en mitades sucesivas, permitiéndote identificar cuál extensión causa el problema.

### Buscar una extensión

Puedes borrar el cuadro de búsqueda en la parte superior de la vista de Extensiones e ingresar el nombre de la extensión, herramienta o lenguaje de programación que estás buscando.

Por ejemplo, al escribir 'python' aparecerá una lista de extensiones relacionadas con el lenguaje Python:

![extensions-python](/img/user-guide/extensions/extensions-python.png)

Si conoces el identificador exacto de una extensión que buscas, puedes usar el prefijo @id:, por ejemplo, @id.vue.volar. Además, para filtrar o ordenar los resultados, puedes usar los comandos de filtro y ordenación, detallados a continuación.

## Gestionar extensiones

Visual Studio Code facilita la gestión de extensiones. Puedes instalar, deshabilitar, actualizar y desinstalar extensiones desde la vista de Extensions, la paleta de comandos (con comandos que inician con el prefijo Extensions:) o mediante comandos en la línea de comandos.

### Listar extensiones instaladas

Por defecto, la vista de Extensions muestra las extensiones que tienes instaladas actualmente y todas las extensiones recomendadas para ti. Puedes usar el comando Extensions: Focus on Installed View (disponible en la paleta de comandos con Ctrl+Shift+P o en el menú More Actions (...) > Views > Installed) para borrar cualquier texto en el cuadro de búsqueda y ver la lista completa de extensiones instaladas, incluidas las que están deshabilitadas.

### Desinstalar una extensión

Para desinstalar una extensión, selecciona el botón de Manage (icono de engranaje) a la derecha de la entrada de la extensión y elige Uninstall en el menú desplegable. Esto desinstalará la extensión y te pedirá reiniciar el  gestionador de extensiones.

![uninstallextension](/img/user-guide/extensions/uninstall-extension.png)

### Deshabilitar una extensión

Si no deseas eliminar permanentemente una extensión, puedes deshabilitarla temporalmente haciendo clic en el botón de Manage (icono de engranaje) a la derecha de la extensión. Puedes deshabilitar una extensión globalmente o solo para el Workspace actual. Se te pedirá reiniciar el host de extensiones después de deshabilitarla.

Si deseas deshabilitar rápidamente todas las extensiones instaladas, puedes usar el comando Disable All Installed Extensions en la paleta de comandos o en el menú More Actions (...).

Las extensiones permanecerán deshabilitadas en todas las sesiones de VS Code hasta que las vuelvas a habilitar.

### Habilitar una extensión

De manera similar, si has deshabilitado una extensión (aparecerá en la sección Disabled de la lista y marcada como Disabled), puedes volver a habilitarla con los comandos Enable o Enable (Workspace) en el menú desplegable.

- Enable habilita la extensión para todas las sesiones de VS Code.
- Enable (Workspace) habilita la extensión solo para el Workspace actual.

![enableextension](/img/user-guide/extensions/enable-extension.png)

También existe un comando Enable All Extensions en el menú More Actions (...) para habilitar todas las extensiones.

### Actualización automática de extensiones

VS Code busca actualizaciones de extensiones e instala automáticamente las disponibles. Después de una actualización, se te pedirá reiniciar el host de extensiones.

Si prefieres actualizar las extensiones manualmente, puedes deshabilitar la actualización automática con el comando Disable Auto Update for All Extensions o la acción correspondiente en la vista de Extensions. También puedes configurar el ajuste extensions.autoUpdate. Usa el comando Enable Auto Update for All Extensions para volver a habilitar la actualización automática.

![disableautoupdateallextensions](/img/user-guide/extensions/disable-auto-update-all-extensions.png)

También puedes configurar la actualización automática para extensiones individuales haciendo clic derecho sobre una extensión y activando o desactivando la opción Auto Update.

Si no deseas que VS Code busque actualizaciones, puedes establecer el ajuste extensions.autoCheckUpdates en false.

### Actualizar una extensión manualmente

Si tienes deshabilitada la actualización automática de extensiones, puedes buscar actualizaciones rápidamente utilizando el comando Show Outdated Extensions que usa el filtro @updates. Esto mostrará las actualizaciones disponibles para las extensiones que tienes instaladas.

Selecciona el botón Update para la extensión desactualizada. La actualización se instalará y se te pedirá reiniciar el host de extensiones (Restart Extensions). También puedes actualizar todas tus extensiones desactualizadas al mismo tiempo con el comando Update All Extensions.

Si además tienes deshabilitada la verificación automática de actualizaciones, puedes usar el comando Check for Extension Updates para comprobar qué extensiones pueden ser actualizadas.

## Extensiones recomendadas

Puedes ver una lista de extensiones recomendadas utilizando el comando Show Recommended Extensions, que aplica el filtro @recommended. Las recomendaciones de extensiones pueden ser:

- Workspace Recommendations: Recomendadas por otros usuarios de tu Workspace actual.
- Other Recommendations: Recomendadas en base a archivos recientemente abiertos.

Consulta la sección a continuación para aprender cómo contribuir con recomendaciones para otros usuarios en tu proyecto.

### Ignorar recomendaciones

Para descartar una recomendación, selecciona el ítem de la extensión para abrir la página de detalles y luego selecciona el botón de Manage (icono de engranaje) para mostrar el menú contextual. Elige la opción Ignore Recommendation. Las recomendaciones ignoradas ya no te serán sugeridas.

![ignorerecommendation](/img/user-guide/extensions/ignore-recommendation.png)

## Configurar extensiones

Las extensiones de VS Code pueden tener configuraciones y requisitos muy diferentes. Algunas extensiones agregan ajustes a VS Code, los cuales se pueden modificar en el editor de Settings. Otras extensiones pueden tener sus propios archivos de configuración. Además, algunas extensiones pueden requerir la instalación y configuración de componentes adicionales, como compiladores, depuradores y herramientas de línea de comandos. Consulta el README de la extensión (visible en la página de detalles de la vista de Extensions) o visita la página de la extensión en el VS Code Marketplace (haciendo clic en el nombre de la extensión en la página de detalles). Muchas extensiones son de código abierto y tienen un enlace a su repositorio en su página del Marketplace.

## Gestión de extensiones desde la línea de comandos

Para facilitar la automatización y configuración de VS Code, es posible listar, instalar y desinstalar extensiones desde la línea de comandos. Al identificar una extensión, debes proporcionar el nombre completo en el formato publisher.extension, por ejemplo, ms-python.python.

Ejemplo:
```bash
code --extensions-dir `<dir>`
	Set the root path for extensions.
code --list-extensions
	List the installed extensions.
code --show-versions
	Show versions of installed extensions, when using --list-extension.
code --install-extension (<extension-id> | <extension-vsix-path>)
	Installs an extension.
code --uninstall-extension (<extension-id> | <extension-vsix-path>)
	Uninstalls an extension.
code --enable-proposed-api (<extension-id>)
	Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually.
```

Puedes ver el ID de la extensión en la página de detalles de la extensión, bajo la sección Marketplace Info.

![extensionidentifier](/img/user-guide/extensions/extension-identifier.png)

## Filtros en la vista de extensiones

El cuadro de búsqueda en la vista de Extensions admite filtros para ayudarte a encontrar y gestionar extensiones. Es posible que hayas visto filtros como @installed y @recommended si usaste los comandos Show Installed Extensions y Show Recommended Extensions. También existen filtros disponibles para ordenar por popularidad o calificación, así como para buscar por categoría (por ejemplo, 'Linters') y etiquetas (por ejemplo, 'node'). Puedes ver una lista completa de todos los filtros y comandos de ordenación escribiendo @ en el cuadro de búsqueda de extensiones y navegando por las sugerencias.

![extensionsearchfilters](/img/user-guide/extensions/extension-search-filters.png)

Algunos de los filtros de la vista de extensiones son los siguientes:

* @builtin: Muestra las extensiones que vienen con VS Code, agrupadas por tipo (Lenguajes de programación, Temas, etc.).
* @deprecated: Muestra las extensiones obsoletas.
* @disabled: Muestra las extensiones instaladas que están deshabilitadas.
* @enabled: Muestra las extensiones instaladas que están habilitadas. Las extensiones pueden habilitarse o deshabilitarse individualmente.
* @featured: Muestra las extensiones destacadas.
* @installed: Muestra las extensiones instaladas.
* @popular: Muestra las extensiones populares.
* @recentlyPublished: Muestra las extensiones que fueron publicadas recientemente en el Marketplace.
* @recommended: Muestra las extensiones recomendadas, agrupadas como específicas para el Workspace o de uso general.
* @updates: Muestra las extensiones instaladas desactualizadas. Hay una versión más nueva disponible en el Marketplace.
* @workspaceUnsupported: Muestra las extensiones que no son compatibles con este Workspace.
* @category: Muestra las extensiones que pertenecen a una categoría específica. A continuación, algunos ejemplos de categorías soportadas. Para ver la lista completa, escribe @category y selecciona las opciones sugeridas:
  * @category:themes
  * @category:formatters
  * @category:linters
  * @category:snippets

Estos filtros también se pueden combinar. Por ejemplo, usa @installed @category:themes
para ver todos los temas instalados.

Si no se proporciona ningún filtro, la vista de Extensions muestra las extensiones instaladas y recomendadas actualmente.

Ordenar

Puedes ordenar las extensiones utilizando el filtro @sort, que puede tomar los siguientes valores:
- installs: Ordena por el número de instalaciones en el Marketplace, en orden descendente.
- name: Ordena alfabéticamente por el nombre de la extensión.
- publishedDate: Ordena por la fecha de publicación de la extensión.
- rating: Ordena por la calificación del Marketplace (1-5 estrellas), en orden descendente.
- updateDate: Ordena por la fecha de la última actualización de la extensión.

![sortinstallcount](/img/user-guide/extensions/sort-install-count.png)

### Categorías y etiquetas
Las extensiones pueden tener Categorías y Etiquetas que describen sus características.

![categoriesandtags](/img/user-guide/extensions/categories-and-tags.png)

Puedes filtrar por categoría y etiqueta utilizando category: y tag:.

Las categorías soportadas son: [Azure, Data Science, Debuggers, Education, Extension Packs, Formatters, Keymaps, Language Packs, Linters, Machine Learning, Notebooks, Others, Programming Languages, SCM Providers, Snippets, Testing, Themes, Visualization]. Pueden accederse a través de IntelliSense en el cuadro de búsqueda de extensiones.

![extensionsearchcategories](/img/user-guide/extensions/extension-search-categories.png)

Ten en cuenta que debes rodear el nombre de la categoría con comillas si consta de más de una palabra (por ejemplo, category:"SCM Providers").

Las etiquetas pueden contener cualquier cadena de texto y no son proporcionadas por IntelliSense, por lo que es recomendable revisar el Marketplace para encontrar etiquetas útiles.

## Instalar desde un VSIX

Puedes instalar manualmente una extensión de VS Code empaquetada en un archivo .vsix. Usando el comando Instalar desde VSIX en el menú desplegable de comandos de la vista de Extensions, o el comando Extensions: Install from VSIX en la Command Palette, apuntando al archivo .vsix.

También puedes instalar la extensión utilizando la línea de comandos.

```bash
code --install-extension myextension.vsix
```

Puedes proporcionar el parámetro --install-extension varias veces en la línea de comandos para instalar varias extensiones al mismo tiempo.

> Nota: Cuando instalas una extensión a través de VSIX, la actualización automática para esa extensión está deshabilitada por defecto.

Si deseas aprender más sobre el empaquetado y la publicación de extensiones, consulta nuestro artículo sobre Publishing Extensions en la Extension API.

## Extensiones recomendadas para el espacio de trabajo

Un buen conjunto de extensiones puede hacer que trabajar con un espacio de trabajo o un lenguaje de programación en particular sea más productivo, y a menudo querrás compartir esta lista con tu equipo o compañeros. Puedes crear una lista recomendada de extensiones para un espacio de trabajo usando el comando Extensions: Configure Recommended Extensions (Workspace Folder).

En un espacio de trabajo de una sola carpeta, el comando crea un archivo extensions.json ubicado en la carpeta .vscode del espacio de trabajo, donde puedes agregar una lista de identificadores de extensiones (`{publisherName}.{extensionName}`).

En un espacio de trabajo de múltiples carpetas, el comando abrirá tu archivo .code-workspace, donde podrás listar las extensiones bajo extensions.recommendations. Aún puedes agregar recomendaciones de extensiones a carpetas individuales en un espacio de trabajo de múltiples carpetas usando el comando Extensions: Configure Recommended Extensions (Workspace Folder).

Un ejemplo de extensions.json podría ser:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

la cual, recomienda una extensión de linter y una extensión de formateador de código.

Una extensión se identifica utilizando su identificador de publicador e identificador de extensión publisher.extension. Puedes ver el nombre en la página de detalles de la extensión. VS Code te proporcionará autocompletado para las extensiones instaladas dentro de estos archivos.

![extensionidentifier](/img/user-guide/extensions/extension-identifier.png)

VS Code solicita al usuario que instale las extensiones recomendadas cuando se abre un espacio de trabajo por primera vez. El usuario también puede revisar la lista usando el comando Extensions: Show Recommended Extensions.

![recommendations](/img/user-guide/extensions/recommendations.png)

## Preguntas frecuentes
### ¿Dónde se instalan las extensiones?

Las extensiones se instalan en una carpeta de extensiones por usuario. Dependiendo de tu plataforma, la ubicación es la siguiente:

Windows: %USERPROFILE%.vscode\extensions
macOS: ~/.vscode/extensions
Linux: ~/.vscode/extensions

Puedes cambiar la ubicación lanzando VS Code con la opción de línea de comandos --extensions-dir `<dir>`.

### Cada vez que intento instalar una extensión, aparece un error de conexión ETIMEDOUT

Este error puede ocurrir si tu equipo accede a Internet a través de un servidor proxy. Consulta la sección de Soporte para servidores proxy en el tema de configuración para más detalles.

### ¿Puedo descargar una extensión directamente desde el Marketplace?

Algunos usuarios prefieren descargar una extensión del Marketplace una sola vez y luego instalarla varias veces desde un recurso local compartido. Esto es útil si existen problemas de conectividad o si el equipo de desarrollo desea utilizar un conjunto fijo de extensiones.

Para descargar una extensión, ve a la página de detalles de la extensión específica en el Marketplace. En esa página, encontrarás un enlace llamado Download Extension en la sección de Recursos, ubicada en el lado derecho.
Una vez descargada, puedes instalar la extensión usando el comando Install from VSIX en el menú desplegable de comandos de la vista de extensiones.

### ¿Puedo evitar que VS Code ofrezca recomendaciones de extensiones?

Sí, si prefieres que VS Code no muestre recomendaciones de extensiones en la vista de Extensiones o a través de notificaciones, puedes modificar las siguientes configuraciones:

- extensions.showRecommendationsOnlyOnDemand: Establécelo en true para eliminar la sección RECOMMENDED.
- extensions.ignoreRecommendations: Establécelo en true para silenciar las notificaciones de recomendaciones de extensiones.

El comando Show Recommended Extensions siempre estará disponible si en algún momento deseas ver las recomendaciones.

### ¿Puedo confiar en las extensiones del Marketplace?

El Marketplace de VS Code realiza un escaneo de malware en cada paquete de extensión publicado, utilizando varios motores de antivirus. Este escaneo se lleva a cabo para cada nueva extensión y para cada actualización. La extensión no se publica en el Marketplace hasta que pase este control de seguridad.

Además, el Marketplace evita que los autores de extensiones usen nombres de editores oficiales, como Microsoft o RedHat, y nombres de extensiones populares, como GitHub Copilot, para evitar confusiones o engaños.

Si se reporta y verifica una extensión maliciosa o se encuentra una vulnerabilidad en alguna dependencia:

- La extensión se elimina del Marketplace.
- Se agrega a una "lista de bloqueo" para que, si está instalada, VS Code la desinstale automáticamente.

El Marketplace ofrece también herramientas para ayudarte a tomar una decisión informada sobre las extensiones que instalas:

- Ratings & Review: Lee las opiniones de otros usuarios sobre la extensión.
- Q & A: Consulta preguntas previas y el nivel de respuesta del editor. También puedes comunicarte con los editores si tienes inquietudes.
- Issues, Repository, and License: Verifica si el editor ha proporcionado estos recursos y el nivel de soporte disponible.
- Verified Publisher: Busca el check azul junto al nombre del editor como señal de confianza. Este indica que el editor ha verificado la propiedad de su dominio y que tiene buena reputación en el Marketplace durante al menos seis meses.

![bluecheck](/img/user-guide/extensions/bluecheck.png)

Si encuentras una extensión que parece sospechosa, puedes reportarla al Marketplace utilizando el enlace Report Abuse que se encuentra al final de la sección More Info de la extensión. Esto ayuda al equipo de VS Code a identificar y eliminar posibles amenazas en el Marketplace, protegiendo así a otros usuarios.

### El código de integridad de la extensión no pudo ser verificada

El Visual Studio Marketplace firma todas las extensiones al publicarlas, y VS Code verifica esta firma al instalar una extensión para asegurar la integridad y autenticidad del paquete.

Al instalar una extensión, podrías ver el siguiente mensaje de error: "Cannot install extension because Visual Studio Code cannot verify the extension signature." Esto puede ocurrir por varias razones, como un entorno no compatible o, en casos raros, problemas de integridad del paquete.

Si encuentras este error, se recomienda precaución antes de proceder con la instalación. Puedes reportar el problema al equipo de Visual Studio Marketplace, incluyendo el ID de la extensión. Para deshabilitar la verificación de firma de extensiones, puedes ajustar la configuración extensions.verifySignature.

### Mis extensiones no se sincronizan cuando estoy conectado a una ventana remota.

La función Settings Sync en Visual Studio Code permite compartir configuraciones como ajustes, combinaciones de teclas y extensiones instaladas en múltiples dispositivos para mantener un entorno de trabajo uniforme. Sin embargo, VS Code no sincroniza tus extensiones en una ventana remota. Esto significa que, cuando te conectas a un entorno remoto como SSH, un contenedor de desarrollo (devcontainer) o WSL, las extensiones instaladas en tu máquina local no se sincronizan automáticamente en la ventana remota, y viceversa.

Si necesitas extensiones en un entorno remoto, deberás instalarlas específicamente en ese entorno remoto a través de la interfaz de Remote Extensions en VS Code.
