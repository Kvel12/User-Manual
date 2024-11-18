# Edición básica
Visual Studio Code es, ante todo, un editor e incluye las funciones necesarias para una edición de código fuente altamente productiva. Este tema te guiará a través de los conceptos básicos del editor y te ayudará a comenzar con tu código.

## Atajos  de teclado
Poder mantener las manos en el teclado al escribir código es crucial para una alta productividad. VS Code ofrece un conjunto amplio de atajos de teclado predeterminados y también permite personalizarlos.
- Referencia de Atajos de Teclado[referencia]: Aprende los atajos de teclado más utilizados y populares descargando la hoja de referencia.
- Instalar una extensión de Keymap[referencia]: Utiliza los atajos de teclado de tu editor anterior (como Sublime Text, Atom o Vim) en VS Code instalando una extensión de Keymap.
- Personalizar Atajos de Teclado[referencia]: Cambia los atajos de teclado predeterminados para adaptarlos a tu estilo.

## Selecciones múltiples (multi-cursor)
VS Code permite realizar ediciones rápidas en varias partes del texto al mismo tiempo usando múltiples cursores. Un cursor es esa barra vertical que aparece dentro de un texto editable y muestra dónde se introducirán los caracteres que teclees. Puedes añadir cursores secundarios (que aparecen como barras verticales más delgadas) usando Alt+Click. Cada uno actúa de manera independiente según el lugar en el que esté. Una 
forma común de añadir más cursores es con Shift

> Nota: El controlador de tu tarjeta gráfica (por ejemplo, NVIDIA) podría sobrescribir estos atajos de teclado predeterminados. Si eso sucede, puedes restablecer los atajos de teclado en la configuración del controlador de la tarjeta gráfica o personalizarlos en la configuración de atajos de VS Code.

![Loading Animation](/img/user-guide/basic-edition/multicursor.gif)

Ctrl+D selecciona la palabra en el cursor, o la siguiente aparición de la selección actual.
Esto te permite seleccionar rápidamente varias instancias de una misma palabra o frase en el código para editarlas de manera simultánea.

![Loading Animation](/img/user-guide/basic-edition/multicursor-word.gif)

> Consejo: También puedes añadir más cursores con Ctrl+Shift+L, lo que añadirá una selección en cada aparición del texto actualmente seleccionado. Esto te permite editar todas las instancias de esa selección al mismo tiempo en el código.

## Modificar la tecla para añadir múltiples cursores con clic
Si deseas cambiar la tecla que acompaña al clic para aplicar múltiples cursores a Cmd+Click en macOS y Ctrl+Click en Windows y Linux, puedes hacerlo con la configuración editor.multiCursorModifier. Esto permite que los usuarios que provienen de otros editores como Sublime Text o Atom continúen usando la tecla con la que están familiarizados.

La configuración puede ser establecida en:

- ctrlCmd: Se asigna a Ctrl en Windows y Cmd en macOS.
- alt: El valor predeterminado actual, Alt.

También hay un ítem en el menú Selection > Switch to Ctrl+Click for Multi-Cursor o Selection > Switch to Alt+Click for Multi-Cursor para Multi-Cursor para alternar rápidamente esta configuración.

Los gestos de Ir a la definición y Abrir enlace también respetarán esta configuración y se adaptarán para no generar conflictos. Por ejemplo, cuando la configuración sea ctrlCmd, se pueden añadir múltiples cursores con Ctrl/Cmd+Click, y abrir enlaces o ir a definición se podrá hacer con Alt+Click.

> Nota: Ten en cuenta que pueden surgir conflictos con la configuración del entorno de ventanas, especialmente en algunas distribuciones de Linux, donde las combinaciones de teclas pueden estar reservadas para otras funciones del sistema operativo.

## Reducir/expandir la selección
Puedes reducir o expandir rápidamente la selección actual. Para hacerlo, usa las combinaciones de teclas Shift+Alt+Izquierda para reducir la selección y Shift+Alt+Derecha para expandirla.

Aquí tienes un ejemplo de cómo expandir la selección con Shift+Alt+Derecha:

![Loading Animation](/img/user-guide/basic-edition/expandselection.gif)

## Selección de columnas (cuadro)

Coloca el cursor en una esquina y luego mantén presionada Shift+Alt mientras arrastras hasta la esquina opuesta:

![Loading Animation](/img/user-guide/basic-edition/column-select.gif)

> Nota: Esto cambia a Shift+Ctrl/Cmd cuando se usa Ctrl/Cmd como modificador de múltiples cursores.

También existen combinaciones de teclas predeterminadas para la selección de columnas en macOS y Windows, pero no en Linux.

Key|Comando|ID del Comando
---|-------|---------------
`kb(cursorColumnSelectDown)`|Seleccionar columna hacia abajo|`cursorColumnSelectDown`
`kb(cursorColumnSelectUp)`|Seleccionar columna hacia arriba|`cursorColumnSelectUp`
`kb(cursorColumnSelectLeft)`|Seleccionar columna hacia la izquierda|`cursorColumnSelectLeft`
`kb(cursorColumnSelectRight)`|Seleccionar columna hacia la derecha|`cursorColumnSelectRight`
`kb(cursorColumnSelectPageDown)`|Seleccionar columna una página hacia abajo|`cursorColumnSelectPageDown`
`kb(cursorColumnSelectPageUp)`|Seleccionar columna una página hacia arriba|`cursorColumnSelectPageUp`

Puedes editar tu archivo keybindings.json para asignarles combinaciones de teclas más familiares si lo deseas. Para encontrar este archivo, ve a File > Preferences > Keyboard Shortcuts y luego selecciona el icono de archivo en la esquina superior derecha.

### Modo de selección en columna

La configuración de usuario Editor: Column Selection controla la capacidad de realizar una selección de texto en forma de columna. Cuando este modo está activado, lo cual se indica en la barra de estado (ubicada en la parte inferior de la ventana), tanto los gestos del mouse como las teclas de flecha permiten crear una selección en columna por defecto. Este modo también se puede activar o desactivar desde el menú Selection > Column Selection Mode. Además, puedes desactivar el modo de selección en columna directamente desde la barra de estado.

## Guardar / Guardado automático

Por defecto, VS Code requiere una acción manual para guardar tus cambios en el disco, como Ctrl+S.

Sin embargo, es fácil activar el Guardado automático, que guardará tus cambios después de un tiempo sin realizar acción o cuando el foco se mueva fuera del editor. Con esta opción activada, no es necesario guardar el archivo manualmente. La forma más sencilla de activar el Guardado automático es mediante el interruptor File > Auto Save, que lo activa o desactiva para guardar después de un tiempo de espera.

Para un control más detallado sobre el Guardado automático, abre la configuración de Usuario o Espacio de trabajo y encuentra los ajustes asociados:


* files.autoSave: Puede tener los siguientes valores:
  * off: para desactivar el guardado automático.
  * afterDelay: para guardar los archivos después de un tiempo sin realizar acción configurado (por defecto 1000 ms).
  * onFocusChange: para guardar los archivos cuando el foco se mueve fuera del editor del archivo modificado.
  * onWindowChange: para guardar los archivos cuando el foco se mueve fuera de la ventana de VS Code.
* files.autoSaveDelay: Configura el tiempo de espera en milisegundos cuando files.autoSave esté configurado en afterDelay. El valor por defecto es 1000 ms.

## Hot Exit (Conservación de cambios no guardados)

Por defecto, VS Code conserva los cambios no guardados en los archivos cuando cierras la aplicación. El Hot Exit se activa cuando la aplicación se cierra mediante File > Exit (o Code > Quit en macOS) o cuando se cierra la última ventana.

Puedes configurar el Hot Exit accediendo a File > Preferences > Settings o modificando directamente el archivo settings.json. La opción files.hotExit se puede ajustar con los siguientes valores:

- "off": Desactiva el Hot Exit.
- "onExit": El Hot Exit se activará cuando la aplicación se cierre, es decir, cuando se cierre la última ventana en Windows/Linux o cuando se ejecute el comando workbench.action.quit (desde la Paleta de Comandos, con el atajo de teclado o desde el menú). Todas las ventanas sin carpetas abiertas se restaurarán al iniciar nuevamente.
- "onExitAndWindowClose": El Hot Exit se activará cuando la aplicación se cierre, es decir, cuando se cierre la última ventana en Windows/Linux o cuando se ejecute el comando workbench.action.quit (desde la Paleta de Comandos, con el atajo de teclado o desde el menú), y también para cualquier ventana con una carpeta abierta, sin importar si es la última ventana. Todas las ventanas sin carpetas abiertas se restaurarán al iniciar nuevamente. Para restaurar las ventanas con carpetas tal como estaban antes del cierre, configura window.restoreWindows a all.

Si algo sale mal con el Hot Exit, todas las copias de seguridad se almacenan en las siguientes carpetas para ubicaciones de instalación estándar:

- Windows: %APPDATA%\Code\Backups
- macOS: $HOME/Library/Application Support/Code/Backups
- Linux: $HOME/.config/Code/Backups

## Buscar y Reemplazar
VS Code te permite buscar rápidamente texto y reemplazarlo en el archivo actualmente abierto. Pulsa Ctrl+F para abrir el widget de búsqueda en el editor, los resultados de búsqueda se destacarán en el editor, en la regla de vista general (ubicada en el margen derecho del editor) y en el minimapa (ubicado en la parte superior derecha del editor).

Si hay más de un resultado coincidente en el archivo abierto, puedes pulsar Enter y Shift+Enter para navegar al siguiente o al resultado anterior cuando el cuadro de búsqueda esté enfocado.

### Buscar por palabra bajo el cursor de texto
Cuando el widget de búsqueda está abierto, automáticamente se llenará el cuadro de búsqueda con el texto seleccionado en el editor. Si la selección está vacía, la palabra debajo del cursor se insertará en el cuadro de búsqueda.

![Loading Animation](/img/user-guide/basic-edition/seed-search-string-from-selection.gif)

Esta función se puede desactivar configurando editor.find.seedSearchStringFromSelection a "never".

### Buscar en la selección

Por defecto, las operaciones de búsqueda se realizan en todo el archivo abierto en el editor. También se pueden realizar solo sobre el texto seleccionado. Puedes activar esta función haciendo clic en el ícono de las tres líneas (hamburguesa) en el Widget de búsqueda.

![Loading Animation](/img/user-guide/basic-edition/find-in-selection.gif)

Si deseas que esta opción sea el comportamiento predeterminado del Widget de búsqueda, puedes configurarlo con:

- editor.find.autoFindInSelection a always para que siempre se realice la búsqueda sólo en el texto seleccionado.
- editor.find.autoFindInSelection a multiline para que solo se realice en el texto seleccionado cuando se seleccionan múltiples líneas de contenido.

### Opciones avanzadas de búsqueda y reemplazo

Además de realizar búsqueda y reemplazo con texto simple, el Widget de búsqueda ofrece tres opciones avanzadas:

- Coincidir mayúsculas y minúsculas: Encuentra coincidencias que respeten el uso exacto de mayúsculas y minúsculas en el texto buscado.
- Coincidir palabra completa: Limita la búsqueda a coincidencias que sean palabras completas.
- Expresión regular: Permite buscar utilizando expresiones regulares, facilitando patrones de búsqueda complejos.

Para abrir el cuadro de reemplazo, presiona Ctrl+H con el Widget de búsqueda abierto o haz clic en el botón de flecha que se despliega junto al cuadro de búsqueda.

El cuadro de entrada de reemplazo también admite la preservación de mayúsculas y minúsculas, útil para mantener la capitalización original del texto reemplazado. Por ejemplo, si el texto original contiene "Open" y se reemplaza por "close" con esta opción activada, se cambiaría a "Close". Puedes activar esta opción haciendo clic en el botón Preservar mayúsculas (AB).

### Soporte para múltiples líneas y redimensionamiento del Widget de búsqueda

Puedes buscar texto en varias líneas escribiéndolo o pegándolo en los cuadros de Buscar y Reemplazar. Además, para agregar una nueva línea dentro de estos cuadros, presiona Ctrl+Enter.

![Loading Animation](/img/user-guide/basic-edition/multiple-line-support.gif)

Al buscar texto largo, el tamaño predeterminado del Widget de búsqueda podría ser demasiado pequeño. Puedes arrastrar la barra lateral izquierda para agrandar el Widget de búsqueda o hacer doble clic en esta barra para maximizarlo o reducirlo a su tamaño predeterminado.

![Loading Animation](/img/user-guide/basic-edition/resize-find-widget.gif)

## Búsqueda en todos los archivos

VS Code permite buscar rápidamente en todos los archivos de la carpeta abierta. Presiona Ctrl+Shift+F e ingresa el término de búsqueda. Los resultados aparecerán agrupados por archivos que contienen el término buscado, con una indicación de la cantidad de coincidencias en cada archivo y su ubicación. Expande un archivo para ver una vista previa de todas las coincidencias dentro de él. Luego, haz clic en una coincidencia para verla en el editor.

![search](/img/user-guide/basic-edition/search.png)

> Consejo: También puedes realizar búsquedas usando expresiones regulares en el cuadro de búsqueda.

Puedes configurar opciones avanzadas de búsqueda haciendo clic en los tres puntos (Toggle Search Details) a la derecha debajo del cuadro de búsqueda (o presionando Ctrl+Shift+J). Esto mostrará campos adicionales para personalizar la búsqueda.

### Opciones avanzadas de búsqueda

![busquedaavanzada](/img/user-guide/basic-edition/searchadvanced.png)

En los dos cuadros de entrada debajo del cuadro de búsqueda, puedes ingresar patrones para incluir o excluir de la búsqueda. Si escribes "example", esto coincidirá con cualquier carpeta o archivo llamado "example" en el área de trabajo. Si escribes "./example", coincidirá con la carpeta "example/" en el nivel superior de tu espacio de trabajo. Utiliza "," para separar múltiples patrones. Los caminos deben usar barras diagonales ("/").

También puedes usar la sintaxis de patrones globos (globs), por ejemplo:

- * para coincidir con cero o más caracteres en un segmento de ruta.
- ? para coincidir con un solo carácter en un segmento de ruta.
- ** para coincidir con cualquier número de segmentos de ruta, incluidos ninguno.
- {} para agrupar condiciones (por ejemplo, `{**/*.html,**/*.txt}` coincidirá con todos los archivos HTML y de texto).
- [] para declarar un rango de caracteres a coincidir (por ejemplo, example.[0-9] coincidirá con "example.0", "example.1", …).
- [!...] para negar un rango de caracteres a coincidir (por ejemplo, example.[!0-9] coincidirá con "example.a", "example.b", pero no con "example.0").

Ejemplos adicionales:

- `*.{html,css,js}` para coincidir con archivos que tengan las extensiones .html, .css o .js.
- `**/test/*.js` para coincidir con todos los archivos .js dentro de cualquier carpeta llamada test en cualquier nivel de la jerarquía de carpetas.
- `!**/*.md` para excluir todos los archivos .md de la búsqueda.

Por defecto, VS Code excluye algunas carpetas para reducir la cantidad de resultados de búsqueda que probablemente no te interesan (por ejemplo: node_modules). Puedes modificar estas reglas en la configuración, en las secciones files.exclude y search.exclude.

Ten en cuenta que los patrones glob en la vista de búsqueda funcionan de manera diferente a como lo hacen en configuraciones como files.exclude y search.exclude. En la configuración, debes usar **/example para coincidir con una carpeta llamada example dentro de una subcarpeta folder1/example en tu espacio de trabajo. En la vista de búsqueda, el prefijo ** se asume automáticamente. Los patrones glob en estas configuraciones siempre se evalúan de manera relativa al camino de la carpeta de trabajo.

También observa el botón de alternancia Use Exclude Settings and Ignore Files (Usar configuración de exclusión e ignorar archivos), que es un botón con un icono de engranaje dentro del campo de texto. Este botón determina si se deben excluir los archivos que están ignorados por tus archivos .gitignore y/o aquellos que coinciden con las configuraciones en files.exclude y search.exclude.

> Consejo: Desde el Explorador, puedes hacer clic derecho en una carpeta y seleccionar Find in Folder (Buscar en la carpeta) para realizar una búsqueda sólo dentro de esa carpeta.

### Buscar y reemplazar

También puedes buscar y reemplazar a través de los archivos. Expande el widget de búsqueda para mostrar el cuadro de texto de reemplazo.

![globalsearchreplace](/img/user-guide/basic-edition/global-search-replace.png)

Cuando escribas texto en el cuadro de texto de reemplazo, verás una visualización de las diferencias de los cambios pendientes. Puedes realizar el reemplazo en todos los archivos desde el cuadro de texto de reemplazo, reemplazar todo en un archivo o reemplazar un solo cambio.

![searchreplaceexample](/img/user-guide/basic-edition/search-replace-example.png)

> Consejo: Puedes reutilizar rápidamente un término de búsqueda anterior utilizando las teclas de Flecha Abajo y Flecha Arriba para navegar por el historial de términos de búsqueda.

### Cambio de mayúsculas y minúsculas al reemplazar con expresiones regulares

VS Code admite el cambio de mayúsculas/minúsculas de los grupos que coinciden con una expresión regular mientras se realiza una búsqueda y reemplazo en el editor o globalmente. Esto se hace con los modificadores \u\U\l\L, donde \u y \l convierten una sola letra a mayúsculas o minúsculas, y \U y \L convierten el resto del grupo coincidente a mayúsculas o minúsculas.

![casechangereplace](/img/user-guide/basic-edition/case-change-replace.gif)

Los modificadores también se pueden apilar. Por ejemplo, \u\u\u$1 convertirá a mayúsculas los primeros tres caracteres del grupo, o \l\U$1 convertirá a minúsculas el primer carácter y a mayúsculas el resto. El grupo de captura se hace referencia con $n en la cadena de reemplazo, donde n es el orden del grupo de captura.

## Editor de Búsqueda

Los Editores de Búsqueda permiten ver los resultados de la búsqueda en el área de trabajo en un editor de tamaño completo, con resaltado de sintaxis y líneas opcionales de contexto adicional.

A continuación, se muestra una búsqueda de la palabra "SearchEditor" con dos líneas de texto antes y después de la coincidencia para proporcionar contexto:


![searcheditoroverview](/img/user-guide/basic-edition/search-editor-overview.png)

El comando Open Search Editor abre un Search Editor existente si ya hay uno disponible, o crea uno nuevo si no existe. El comando New Search Editor siempre creará un nuevo Search Editor.

Dentro del Search Editor, se puede navegar a los resultados utilizando acciones como Go to Definition (ir a la definición), por ejemplo, presionando F12 para abrir la ubicación de la fuente en el grupo de editores actual o Ctrl+K F12 para abrir la ubicación en un editor al lado. Además, puedes configurar el comportamiento de hacer clic en un resultado de búsqueda con las configuraciones search.searchEditor.singleClickBehaviour y search.searchEditor.doubleClickBehaviour. Por ejemplo, para abrir una ventana de vista previa de definición o abrir la ubicación de la fuente.

También puedes usar el botón Open New Search Editor en la parte superior de la vista de búsqueda, y copiar los resultados existentes de una vista de búsqueda al Search Editor con el enlace Open in editor en la parte superior del árbol de resultados, o el comando Search Editor: Open Results in Editor.

> Consejo: Puedes ejecutar comandos rápidamente presionando Ctrl+Shift+P para abrir la paleta de comandos y luego buscar el comando que deseas ejecutar.

![searcheditorbutton](/img/user-guide/basic-edition/search-editor-button.png)

El Search Editor anterior se abrió seleccionando el botón Open New Search Editor (tercer botón) en la parte superior de la vista de búsqueda.

### Comandos y argumentos del Search Editor

- search.action.openNewEditor - Abre el Search Editor en una nueva pestaña.
- search.action.openInEditor - Copia los resultados de búsqueda actuales en un nuevo Search Editor.
- search.action.openNewEditorToSide - Abre el Search Editor en una nueva ventana al lado de la ventana que tienes abierta.

Hay dos argumentos que puedes pasar a los comandos del Search Editor (search.action.openNewEditor, search.action.openNewEditorToSide) para permitir que las combinaciones de teclas configuren cómo debe comportarse un nuevo Search Editor:

- triggerSearch: Si se debe ejecutar automáticamente la búsqueda cuando se abre el Search Editor. El valor predeterminado es true.
- focusResults: Si se debe poner el foco en los resultados de la búsqueda o en el campo de entrada de la consulta. El valor predeterminado es true.

Por ejemplo, la siguiente combinación de teclas ejecuta la búsqueda cuando se abre el Search Editor, pero deja el foco en el control de la consulta de búsqueda.

```json
{
    "key": "ctrl+o",
    "command": "search.action.openNewEditor",
    "args": { "query": "VS Code", "triggerSearch":true, "focusResults": false }
}
```
### Contexto predeterminado del Editor de Búsqueda

La configuración search.searchEditor.defaultNumberOfContextLines tiene un valor predeterminado de 1, lo que significa que se mostrará una línea de contexto antes y después de cada línea de resultado en el Editor de Búsqueda.

### Reutilizar la configuración del último Editor de Búsqueda

La configuración search.searchEditor.reusePriorSearchConfiguration (el valor predeterminado es falso) permite reutilizar la configuración del último Editor de Búsqueda activo al crear un nuevo Editor de Búsqueda.

## IntelliSense

Siempre ofreceremos autocompletado de palabras, pero para lenguajes más completos, como JavaScript, JSON, HTML, CSS, SCSS, Less, C# y TypeScript, ofrecemos una experiencia de IntelliSense real. Si un servicio de lenguaje conoce las posibles completaciones, las sugerencias de IntelliSense aparecerán mientras escribes. Siempre puedes activarlo manualmente con Ctrl+Espacio. De manera predeterminada, las teclas de aceptación son Tab o Enter, pero también puedes personalizar estos atajos de teclado.

> Consejo: El filtrado de sugerencias admite CamelCase, por lo que puedes escribir las letras que están en mayúsculas en el nombre de un método para limitar las sugerencias. Por ejemplo, escribir "cra" mostrará rápidamente "createApplication".

> Consejo: Las sugerencias de IntelliSense se pueden configurar a través de los ajustes editor.quickSuggestions y editor.suggestOnTriggerCharacters.

Los desarrolladores de JavaScript y TypeScript pueden aprovechar el repositorio de archivos de declaración de tipos (typings) de npmjs para obtener IntelliSense en bibliotecas comunes de JavaScript (Node.js, React, Angular).

## Formato

VS Code tiene un excelente soporte para el formateo de código fuente. El editor tiene dos acciones explícitas de formato:

- Formato de documento (Ctrl+Shift+I) - Formatea todo el archivo activo.
- Formato de selección (Ctrl+K Ctrl+F) - Formatea el texto seleccionado.

Puedes invocar estas acciones desde la Paleta de comandos (Ctrl+Shift+P) o desde el menú contextual del editor.

VS Code incluye formateadores predeterminados para JavaScript, TypeScript, JSON, HTML y CSS. Cada lenguaje tiene opciones de formateo específicas (por ejemplo, html.format.indentInnerHtml), que puedes ajustar a tu preferencia en la configuración de usuario o del espacio de trabajo. También puedes deshabilitar el formateador predeterminado del lenguaje si tienes instalada una extensión que proporcione formateo para el mismo lenguaje.

```json
"html.format.enable": false
```

Además de invocar manualmente el formateo del código, también puedes activar el formateo basado en gestos del usuario, como al escribir, guardar o pegar. Estas opciones están desactivadas por defecto, pero puedes habilitarlas a través de las siguientes configuraciones:

- editor.formatOnType - Formatea la línea después de escribir.
- editor.formatOnSave - Formatea el archivo al guardarlo.
- editor.formatOnPaste - Formatea el contenido pegado.

> Nota: No todos los formateadores admiten el formateo al pegar, ya que para hacerlo deben ser capaces de formatear una selección o un rango de texto.

Además de los formateadores predeterminados, puedes encontrar extensiones en el Marketplace que soportan otros lenguajes o herramientas de formateo. Hay una categoría de Formateadores para que puedas buscar y encontrar extensiones de formateo fácilmente. En el cuadro de búsqueda de la vista de Extensiones, escribe 'formatters' o 'category' para ver una lista filtrada de extensiones dentro de VS Code.

## Plegado de código

Puedes plegar regiones de código fuente utilizando los íconos de plegado que aparecen en la barra lateral izquierda, entre los números de línea y el inicio de cada línea de código. Coloca el cursor sobre esta área y haz clic para plegar o desplegar las regiones de código. Usa Shift + clic en el ícono de plegado para plegar o desplegar la región y todas las regiones contenidas dentro de ella.

![folding](/img/user-guide/basic-edition/folding.png)

También puedes usar las siguientes acciones:

- Plegar (Ctrl+Shift+[): pliega la región más interna no plegada en el cursor.
- Desplegar (Ctrl+Shift+]): despliega la región plegada en el cursor.
- Alternar Plegado (Ctrl+K Ctrl+L): pliega o despliega la región en el cursor.
- Plegar Recursivamente (Ctrl+K Ctrl+[): pliega la región más interna no plegada en el cursor y todas las regiones dentro de esa región.
- Desplegar Recursivamente (Ctrl+K Ctrl+]): despliega la región en el cursor y todas las regiones dentro de esa región.
- Plegar Todo (Ctrl+K Ctrl+0): pliega todas las regiones en el editor.
- Desplegar Todo (Ctrl+K Ctrl+J): despliega todas las regiones en el editor.
- Plegar Nivel X (Ctrl+K Ctrl+2 para el nivel 2): pliega todas las regiones del nivel X, excepto la región en la posición actual del cursor.
- Plegar Todos los Comentarios en Bloque (Ctrl+K Ctrl+/): pliega todas las regiones que comienzan con un token de comentario en bloque.

Las regiones de plegado se evalúan por defecto en función de la indentación de las líneas. Una región de plegado comienza cuando una línea tiene una indentación menor que una o más líneas siguientes, y termina cuando hay una línea con la misma indentación o menor.

Las regiones de plegado también se pueden calcular en función de los tokens de sintaxis del lenguaje configurado en el editor. Los siguientes lenguajes ya proporcionan plegado basado en sintaxis: Markdown, HTML, CSS, LESS, SCSS y JSON.

Si prefieres volver al plegado basado en la indentación para uno (o todos) de los lenguajes mencionados, usa la siguiente configuración:

```json
"[html]": {
	"editor.foldingStrategy": "indentation"
},
```

Las regiones también se pueden definir mediante marcadores definidos por cada lenguaje. Los siguientes lenguajes tienen marcadores definidos actualmente:

Lenguaje|Inicio de región|Fin de región
--------|------------|----------
Bat|`::#region` o `REM #region`|`::#endregion` o `REM #endregion`
C#|`#region`|`#endregion`
C/C++|`#pragma region`|`#pragma endregion`
CSS/Less/SCSS|`/*#region*/`|`/*#endregion*/`
Coffeescript|`#region`|`#endregion`
F#|`//#region` o `(#region)`|`//#endregion` o `(#endregion)`
Java|`//#region` o `//<edito-fold>`|`//#endregion` o `//</edito-fold>`
Markdown|`<!-- #region -->`|`<!-- #endregion -->`
Perl5|`#region` o `=pod`|`#endregion` o `=cut`
PHP|`#region`|`#endregion`
PowerShell|`#region`|`#endregion`
Python|`#region` o `# region`|`#endregion` o `# endregion`
TypeScript/JavaScript|`//#region` |`//#endregion`
Visual Basic|`#Region`|`#End Region`

Para plegar y desplegar solo las regiones definidas por los marcadores, usa:

- Plegar Regiones de Marcadores (Ctrl+K Ctrl+8) pliega todas las regiones de marcadores.
- Desplegar Regiones de Marcadores (Ctrl+K Ctrl+9) despliega todas las regiones de marcadores.

### Pliegue de selección

El comando Create Manual Folding Ranges from Selection (Ctrl+K Ctrl+,) crea un rango de pliegue a partir de las líneas actualmente seleccionadas y lo colapsa. Ese rango se llama rango de pliegue manual y se coloca encima de los rangos calculados por los proveedores de pliegue.

Los rangos de pliegue manuales se pueden eliminar con el comando Remove Manual Folding Ranges (Ctrl+K Ctrl+.).

Los rangos de pliegue manuales son especialmente útiles en casos donde no hay soporte del lenguaje de programación para el pliegue.

## Indentación

VS Code te permite controlar la indentación del texto y decidir si prefieres usar espacios o tabuladores. De manera predeterminada, VS Code inserta espacios y usa 4 espacios por cada tecla Tab. Si deseas usar otro valor predeterminado, puedes modificar la configuración editor.insertSpaces y editor.tabSize.

```json
"editor.insertSpaces": true,
"editor.tabSize": 4,
```

### Detección automática

VS Code analiza el archivo que tienes abierto y determina la indentación utilizada en el documento. La indentación detectada anula tu configuración predeterminada de indentación. La configuración detectada se muestra en el lado derecho de la barra de estado:

![indentationdetection](/img/user-guide/basic-edition/indentation-detection.png)

Puedes hacer clic en la visualización de la indentación en la barra de estado para mostrar un menú desplegable con comandos de indentación que te permiten cambiar la configuración predeterminada para el archivo abierto o convertir entre tabulaciones y espacios.

![indentationcommands](/img/user-guide/basic-edition/indentation-commands.png)

> Nota: La detección automática de VS Code verifica indentaciones de 2, 4, 6 u 8 espacios. Si tu archivo usa un número diferente de espacios, la indentación puede no ser detectada correctamente. Por ejemplo, si tu convención es usar 3 espacios para la indentación, es posible que desees desactivar editor.detectIndentation y establecer explícitamente el tamaño de tabulación en 3.

"editor.detectIndentation": false,
```json
"editor.tabSize": 3,
```

## Soporte de codificación de archivos

La codificación de archivos determina cómo los caracteres se almacenan y se leen en un archivo. Puedes establecer la codificación de archivos de manera global o por espacio de trabajo utilizando la configuración files.encoding en la Configuración del Usuario o en la Configuración del Espacio de Trabajo.

![filesencodingsetting](/img/user-guide/basic-edition/filesencodingsetting.png)

Puedes ver la codificación del archivo en la barra de estado.

![filesencoding](/img/user-guide/basic-edition/filesencoding.png)

Haz clic en el botón de codificación en la barra de estado para reabrir o guardar el archivo activo con una codificación diferente.

![encodingclicked](/img/user-guide/basic-edition/encodingclicked.png)

Luego, elige una codificación.

![encodingselection](/img/user-guide/basic-edition/encodingselection.png)

## Comparar archivos
VS Code ofrece varias formas de comparar el contenido del archivo actual con otro archivo o de comparar dos archivos diferentes.

Cuando tienes un archivo abierto en el editor, puedes elegir entre las siguientes opciones de comparación:

- Comparar con un archivo del espacio de trabajo: en la Command Palette, selecciona File: Compare Active File With..., y luego elige otro archivo con el que comparar.
- Comparar con el portapapeles: en la Command Palette, selecciona File: Compare Active File with Clipboard (Ctrl+K C) para comparar el archivo actual con el contenido del portapapeles.
- Comparar con la versión guardada: en la Command Palette, selecciona File: Compare Active File with Saved (Ctrl+K D) para comparar el archivo actual con la última versión guardada.

> Consejo: Puedes iniciar VS Code desde la línea de comandos con la opción --diff para comparar dos archivos. Aprende más sobre la interfaz de línea de comandos de VS Code.

## Preguntas comunes

#### ¿Es posible buscar y reemplazar globalmente?

Sí, expande el cuadro de texto de la vista de búsqueda para incluir un campo de reemplazo. Puedes buscar y reemplazar en todos los archivos de tu espacio de trabajo. Ten en cuenta que si no abriste VS Code en una carpeta, la búsqueda solo se realizará en los archivos que tengas abiertos.

![globalsearchreplace](/img/user-guide/basic-edition/global-search-replace.png)

### Mostrar texto desbordado por ancho

Puedes controlar el ajuste de línea a través de la configuración editor.wordWrap. Por defecto, editor.wordWrap está desactivado, pero si lo configuras a on, el texto se ajustará al ancho del área de visualización del editor.

```json
"editor.wordWrap": "on"
```

Puedes alternar el ajuste de línea para la sesión de VS Code con Alt+Z.

También puedes agregar reglas verticales en el editor mediante la configuración editor.rulers, que acepta un arreglo de posiciones de columna donde deseas que aparezcan estas reglas.

Como en otros editores, comandos como Cortar y Copiar se aplican a toda la línea ajustada. Hacer triple clic selecciona la línea completa. Al presionar Home dos veces, el cursor se mueve al inicio de la línea completa, y al presionar End dos veces, el cursor se desplaza al final de la línea.

### ¿Cómo puedo evitar colocar cursores adicionales en líneas con ajuste de palabra?

Para evitar que los cursores adicionales se coloquen en las líneas ajustadas al ancho de la pantalla, puedes configurar los atajos de teclado pasando `{ "logicalLine": true }` en los argumentos (args) de la clave como se muestra a continuación:

```json
{
  "key": "shift+alt+down",
  "command": "editor.action.insertCursorBelow",
  "when": "textInputFocus",
  "args": { "logicalLine": true },
},
{
  "key": "shift+alt+up",
  "command": "editor.action.insertCursorAbove",
  "when": "textInputFocus",
  "args": { "logicalLine": true },
}
```


