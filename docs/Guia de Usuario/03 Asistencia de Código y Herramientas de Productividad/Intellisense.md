# IntelliSense

IntelliSense es un término general que abarca diversas características de edición de código, como:

- Code Completion (autocompletado de código): Sugerencias automáticas para completar palabras clave, variables, funciones, etc.
- Parameter Info (información de parámetros): Muestra los parámetros de una función mientras la escribes.
- Quick Info (información rápida): Proporciona información detallada sobre el símbolo o el código seleccionado, como el tipo de variable o la documentación de una función.
- Member Lists (listas de miembros): Lista de propiedades, métodos y eventos disponibles para el objeto o tipo en uso.

Estas características, a veces denominadas "asistencia de contenido" o "sugerencias de código", ayudan a mejorar la eficiencia al escribir y comprender código, facilitando una experiencia de desarrollo más ágil y con menos errores.

![intellisense](/img/user-guide/intellisense/intellisense.gif)

IntelliSense para tu lenguaje de programación

IntelliSense en Visual Studio Code ofrece soporte integrado para lenguajes como JavaScript, TypeScript, JSON, HTML, CSS, SCSS y Less. Aunque VS Code proporciona autocompletado básico basado en palabras para cualquier lenguaje, puedes mejorar la funcionalidad de IntelliSense instalando extensiones específicas del lenguaje para obtener una experiencia más completa.

A continuación, se encuentran algunas de las extensiones de lenguajes más populares en el Marketplace.

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
- [Extension pack for Jave](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
- [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)
- [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)
- [PHP Extension Pack](https://marketplace.visualstudio.com/items?itemName=xdebug.php-pack)
- [Ruby LSP](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp)

## Funcionalidades de IntelliSense

Las funcionalidades de IntelliSense en VS Code son impulsadas por un servicio de lenguaje que proporciona autocompletado inteligente, basado en la semántica del lenguaje y el análisis de tu código fuente. Si el servicio de lenguaje reconoce posibles opciones de completado, las sugerencias de IntelliSense aparecerán automáticamente mientras escribes. Al continuar ingresando caracteres, la lista de miembros (como variables o métodos) se filtrará para mostrar solo aquellos que contienen los caracteres que escribiste. Presionando Tab o Enter se insertará el miembro seleccionado.

Puedes activar IntelliSense en cualquier ventana del editor presionando Ctrl+Espacio o utilizando un carácter de activación (como el punto (.) en JavaScript).

![intellisensepackagejson](/img/user-guide/intellisense/intellisense_packagejson.gif)

> Consejo: El widget de sugerencias de IntelliSense admite el filtrado por CamelCase, lo que significa que puedes escribir solo las letras mayúsculas en el nombre de un método para limitar las sugerencias. Por ejemplo, "cra" traerá rápidamente "createApplication".

Si prefieres, puedes desactivar IntelliSense mientras escribes. Consulta la sección de Personalización de IntelliSense más abajo para aprender a deshabilitar o personalizar las funciones de IntelliSense de VS Code.

Si es proporcionado por el servicio de lenguaje, puedes ver información rápida de cada método presionando Ctrl+Espacio o haciendo clic en el ícono de información. La documentación correspondiente al método se expandirá a un lado. Esta documentación permanecerá visible y se actualizará a medida que navegues por la lista de sugerencias. Puedes cerrarla presionando Ctrl+Espacio nuevamente o haciendo clic en el ícono de cierre.

![intellisensedocs](/img/user-guide/intellisense/intellisense_docs.gif)

Después de seleccionar un método, IntelliSense te proporciona información sobre sus parámetros. Esto incluye una lista de los parámetros necesarios para el método y sus tipos, lo cual te ayuda a comprender rápidamente qué información debes proporcionar para su correcta ejecución. Esta funcionalidad es especialmente útil para recordar el orden y propósito de los parámetros sin tener que consultar documentación externa.

![paramaterinfo](/img/user-guide/intellisense/parameter_info.png)

En la imagen anterior, se observan varios tipos any. Dado que JavaScript es un lenguaje dinámico que no requiere ni impone tipos, any indica que la variable puede ser de cualquier tipo. Esto permite flexibilidad, pero también puede llevar a errores difíciles de detectar si se introducen valores inesperados.

## Tipos de completado

En el código JavaScript siguiente se muestra cómo IntelliSense proporciona varias sugerencias de completado. IntelliSense sugiere tanto propuestas inferidas como identificadores globales del proyecto. Primero aparecen los símbolos inferidos, seguidos de los identificadores globales, que se representan con el ícono de "Word".

Esto ayuda a los desarrolladores a elegir rápidamente variables, funciones o clases basadas en el contexto actual del código y en los elementos globales disponibles en el proyecto.



| Ícono | Nombre | Tipo de símbolo |
| ----- | ------- | --------------- |
| ![ícono de método](/img/user-guide/intellisense/Method_16x.svg) | Métodos y funciones | `method`, `function`, `constructor` |
| ![ícono de variable](/img/user-guide/intellisense/Variable_16x.svg) | Variables | `variable` |
| ![ícono de campo](/img/user-guide/intellisense/Field_16x.svg) | Campos | `field` |
| ![parámetro de tipo](/img/user-guide/intellisense/symbol-parameter.svg) | Parámetros de tipo | `typeParameter` |
| ![constante](/img/user-guide/intellisense/symbol-constant.svg) | Constantes | `constant` |
| ![clase](/img/user-guide/intellisense/Class_16x.svg) | Clases | `class` |
| ![interfaz](/img/user-guide/intellisense/Interface_16x.svg) | Interfaces | `interface` |
| ![estructura](/img/user-guide/intellisense/symbol-structure.svg) | Estructuras | `struct` |
| ![evento](/img/user-guide/intellisense/symbol-event.svg) | Eventos | `event` |
| ![operador](/img/user-guide/intellisense/symbol-operator.svg) | Operadores | `operator` |
| ![módulo](/img/user-guide/intellisense/Namespace_16x.svg) | Módulos | `module` |
| ![propiedad](/img/user-guide/intellisense/Property_16x.svg) | Propiedades y atributos | `property` |
| ![ícono de enumeración](/img/user-guide/intellisense/EnumItem_16x.svg) | Valores y enumeraciones | `value`, `enum` |
| ![referencia](/img/user-guide/intellisense/Reference_16x.svg) | Referencias | `reference` |
| ![palabra clave](/img/user-guide/intellisense/Keyword_16x.svg) | Palabras clave | `keyword` |
| ![archivo](/img/user-guide/intellisense/symbol-file.svg) | Archivos | `file` |
| ![carpeta](/img/user-guide/intellisense/folder.svg) | Carpetas | `folder` |
| ![color](/img/user-guide/intellisense/ColorPalette_16x.svg) | Colores | `color` |
| ![unidad](/img/user-guide/intellisense/Ruler_16x.svg) | Unidad | `unit` |
| ![cuadro con elipses representando prefijos de fragmento](/img/user-guide/intellisense/Snippet_16x.svg) | Prefijos de fragmentos | `snippet` |
| ![cuadro con letras abc representando palabras completas](/img/user-guide/intellisense/String_16x.svg) | Palabras | `text` |


## Personalización de IntelliSense
Puedes personalizar tu experiencia con IntelliSense en Visual Studio Code ajustando la configuración y los atajos de teclado.

### Configuración

A continuación se muestran las configuraciones predeterminadas de IntelliSense en Visual Studio Code. Puedes modificar estas configuraciones en tu archivo settings.json, como se describe en las secciones de Configuración de Usuario y Configuración de Espacio de Trabajo.

Al personalizar estas opciones, puedes ajustar IntelliSense para que se adapte mejor a tu flujo de trabajo, permitiéndote controlar aspectos como la activación automática de sugerencias, los elementos visibles en la lista de autocompletado, y otros comportamientos específicos de la funcionalidad.

```json
{
	// Controls if quick suggestions should show up while typing
	"editor.quickSuggestions": {
    	"other": true,
    	"comments": false,
    	"strings": false
	},

 	// Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.
	"editor.acceptSuggestionOnCommitCharacter": true,

	// Controls if suggestions should be accepted on 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions. The value 'smart' means only accept a suggestion with Enter when it makes a textual change
	"editor.acceptSuggestionOnEnter": "on",

	// Controls the delay in ms after which quick suggestions will show up.
	"editor.quickSuggestionsDelay": 10,

	// Controls if suggestions should automatically show up when typing trigger characters
	"editor.suggestOnTriggerCharacters": true,

	// Controls if pressing tab inserts the best suggestion and if tab cycles through other suggestions
	"editor.tabCompletion": "off",

	// Controls whether sorting favours words that appear close to the cursor
	"editor.suggest.localityBonus": true,

	// Controls how suggestions are pre-selected when showing the suggest list
	"editor.suggestSelection": "first",

	// Enable word based suggestions
	"editor.wordBasedSuggestions": "matchingDocuments",

	// Enable parameter hints
	"editor.parameterHints.enabled": true,
}
```

### Autocompletado con Tab

El editor admite el autocompletado con Tab, que inserta la sugerencia que mejor coincide al presionar la tecla Tab, independientemente de si el cuadro de sugerencias está visible o no. Además, al presionar Tab después de haber insertado una sugerencia, se insertará la siguiente mejor coincidencia.

Esta funcionalidad agiliza el proceso de autocompletar, permitiéndote navegar rápidamente entre sugerencias sin interrupciones en el flujo de edición.

![tabcompletion](/img/user-guide/intellisense/tabCompletion.gif)

Por defecto, el autocompletado con Tab está deshabilitado. Utiliza la configuración editor.tabCompletion para activarlo. Existen los siguientes valores:

- off - (predeterminado) El autocompletado con Tab está deshabilitado.
- on - El autocompletado con Tab está habilitado para todas las sugerencias, y al repetir la acción, se inserta la siguiente mejor sugerencia.
- onlySnippets - El autocompletado con Tab solo inserta fragmentos de código estáticos que coinciden con el prefijo de la línea actual.

Seleccionar el elemento utilizado más recientemente es muy útil, ya que permite insertar rápidamente la misma sugerencia varias veces.

"Type to select" significa que el prefijo actual (aproximadamente el texto a la izquierda del cursor) se usa para filtrar y ordenar las sugerencias. Cuando el resultado de este filtro difiere del resultado de recentlyUsed, el sistema dará prioridad al resultado basado en el prefijo actual.

Con la opción recentlyUsedByPrefix, VS Code recuerda qué elemento fue seleccionado para un prefijo específico (texto parcial). Por ejemplo, si escribes co y seleccionas console, la próxima vez que escribas co, la sugerencia console estará preseleccionada. Esto permite asignar rápidamente distintos prefijos a diferentes sugerencias, como co -> console y con -> const.

### Snippets en sugerencias

Por defecto, VS Code muestra fragmentos de código (snippets) y propuestas de autocompletado en un único widget. Puedes controlar este comportamiento con la configuración editor.snippetSuggestions. Para eliminar los fragmentos del widget de sugerencias, establece el valor en "none". Si deseas ver los fragmentos, puedes especificar su orden relativo a las sugerencias: al inicio ("top"), al final ("bottom"), o integrados en orden alfabético ("inline"). El valor predeterminado es "inline".

### Atajos de teclado

Los atajos de teclado mostrados a continuación son los valores predeterminados. Puedes modificarlos en tu archivo keybindings.json, como se describe en la sección de Atajos de Teclado.

> Nota: Hay muchos más atajos de teclado relacionados con IntelliSense. Abre el archivo de Atajos de Teclado Predeterminados (Archivo > Preferencias (o Código > Preferencias en macOS) > Atajos de Teclado) y busca "suggest" para verlos todos.

```json
[
  {
	"key": "ctrl+space",
	"command": "editor.action.triggerSuggest",
	"when": "editorHasCompletionItemProvider && editorTextFocus && !editorReadonly"
  },
  {
	"key": "ctrl+space",
	"command": "toggleSuggestionDetails",
	"when": "editorTextFocus && suggestWidgetVisible"
  },
  {
	"key": "ctrl+alt+space",
	"command": "toggleSuggestionFocus",
	"when": "editorTextFocus && suggestWidgetVisible"
  }
]
```

## Mejorar autocompletado con IA

En VS Code, puedes mejorar tu experiencia de programación utilizando inteligencia artificial (IA), que ofrece sugerencias para líneas de código o funciones completas, creación rápida de documentación y ayuda para generar elementos relacionados con el código, como pruebas.

GitHub Copilot es una herramienta de autocompletado de código impulsada por IA que te ayuda a escribir código de forma más rápida e inteligente. Puedes usar la extensión GitHub Copilot en VS Code para generar código o aprender del código que genera.

![copilotextension](/img/user-guide/intellisense/copilot-extension.png)

Puedes obtener más información sobre cómo empezar con Copilot en la documentación de Copilot.

## Solución a problemas
Si descubres que IntelliSense ha dejado de funcionar, es posible que el servicio de lenguaje no esté activo. Intenta reiniciar VS Code, lo que debería resolver el problema. Si sigues sin ver las características de IntelliSense después de instalar una extensión de lenguaje, reporta el problema en el repositorio de la extensión correspondiente.

Es posible que una extensión de lenguaje en particular no soporte todas las funciones de IntelliSense de VS Code. Revisa el archivo README de la extensión para conocer las funciones compatibles. Si encuentras problemas con una extensión de lenguaje, generalmente puedes acceder al repositorio de la extensión a través del Marketplace de VS Code. El repositorio de la extensión es un espacio en línea, como GitHub, donde se encuentra el código fuente de la extensión y donde los usuarios pueden reportar problemas, hacer preguntas o colaborar en el desarrollo de la extensión. Para acceder a este repositorio, navega a la página de detalles de la extensión en el Marketplace y selecciona el enlace de Soporte. Esto te llevará directamente al repositorio donde podrás abrir un reporte de problemas o revisar información adicional sobre la extensión.

> Consejo: Para configurar y resolver problemas con IntelliSense en JavaScript, consulta la documentación de JavaScript.

## Preguntas frecuentes
### ¿Por qué no recibo sugerencias?
![intellisenseerror](/img/user-guide/intellisense/intellisense_error.png)

Esto puede ser causado por varias razones. Primero, intenta reiniciar VS Code. Si el problema persiste, consulta la documentación de la extensión de lenguaje que estás utilizando. 

### ¿Por qué no veo sugerencias de métodos y variables?
![missingtypings](/img/user-guide/intellisense/missing_typings.png)

Este problema suele ser causado por la falta de archivos de declaración de tipos (typings) en JavaScript. Muchas bibliotecas comunes de JavaScript incluyen archivos de declaración o tienen archivos de tipo disponibles. Asegúrate de instalar el paquete npm o yarn correspondiente para la biblioteca que estás utilizando. Esto proporcionará a IntelliSense la información necesaria para ofrecer sugerencias precisas para métodos y variables.