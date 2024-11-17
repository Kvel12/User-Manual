# Emmets en Visual Studio Code

Emmet es una herramienta que permite escribir código HTML y CSS de forma más rápida y eficiente mediante el uso de abreviaturas o atajos que se expanden automáticamente en estructuras completas. Por ejemplo, al escribir div.container>ul>li*3, se genera un bloque de HTML equivalente a un `<div>` con una lista `<ul>` que contiene tres elementos `<li>`. El soporte para snippets y expansión de Emmet está integrado directamente en Visual Studio Code, sin necesidad de extensiones. Emmet 2.0 es compatible con la mayoría de las acciones de Emmet, incluidas la expansión de abreviaturas y snippets de Emmet.

## ¿Cómo expandir abreviaturas y snippets de Emmet?

La expansión de abreviaturas y snippets de Emmet está habilitada por defecto en archivos de html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less y stylus, así como en cualquier lenguaje que herede de estos, como handlebars y php.

![emmet](/img/user-guide/emmet/emmet.gif)

Cuando comienzas a escribir una abreviatura de Emmet, verás la abreviatura mostrada en la lista de sugerencias. Si tienes abierta la ventana emergente de documentación de sugerencias, verás una vista previa de la expansión mientras escribes. Si estás en un archivo de hoja de estilos, la abreviatura expandida aparecerá en la lista de sugerencias ordenada entre las demás sugerencias de CSS.

Para habilitar la expansión de abreviaturas de Emmet en tipos de archivos donde no está disponible de forma predeterminada, utiliza la configuración emmet.includeLanguages. Asegúrate de usar identificadores de idioma para ambos lados del mapeo, siendo el lado derecho el identificador de idioma de un lenguaje compatible con Emmet (ver la lista arriba).

Por ejemplo:
```json
"emmet.includeLanguages": {
	"javascript": "javascriptreact",
	"vue": "html"
}
```
En este ejemplo, las abreviaturas de Emmet se habilitarán para archivos JavaScript y Vue, asignándolos a los lenguajes soportados por Emmet como javascriptreact y html, respectivamente.

## Emmet con múltiples cursores
Emmet también es compatible con múltiples cursores en Visual Studio Code. Puedes usar la mayoría de las acciones de Emmet con varios cursores al mismo tiempo, lo que te permite expandir abreviaturas o ejecutar comandos de Emmet en múltiples ubicaciones del archivo simultáneamente.

Para usar Emmet con múltiples cursores:

- Selecciona múltiples ubicaciones con el ratón o el atajo de teclado: Usa Ctrl + D (Windows/Linux) o Cmd + D (Mac) para seleccionar palabras o líneas adicionales, o usa Ctrl + Alt + Down/Up (Windows/Linux) o Cmd + Alt + Down/Up (Mac) para agregar cursores adicionales.
- Escribe tu abreviatura Emmet: Con los cursores en su lugar, comienza a escribir la abreviatura de Emmet que deseas expandir.
- Expande las abreviaturas: Presiona Tab (o el atajo configurado para expandir) y la abreviatura de Emmet se expandirá en cada ubicación del cursor.

Esto te permite aplicar expansiones de Emmet de forma eficiente en varias líneas o áreas del archivo de una sola vez.

![emmetmulticursor](/img/user-guide/emmet/emmet-multi-cursor.gif)

## Configuración de Emmet

A continuación se presentan los ajustes de Emmet que puedes utilizar para personalizar tu experiencia con Emmet en VS Code.

* emmet.includeLanguages

  Usa este ajuste para agregar un mapeo entre el lenguaje de tu elección y uno de los lenguajes soportados por Emmet para habilitar Emmet en el primero utilizando la sintaxis del segundo. Asegúrate de usar identificadores de lenguaje en ambos lados del mapeo.

  Por ejemplo:

  ```json
  "emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "plaintext": "pug"
    }
  ```

* emmet.excludeLanguages
  Si hay un lenguaje en el que no deseas ver las expansiones de Emmet, añádelo en este ajuste, que acepta un array de cadenas de identificadores de lenguaje.


* emmet.syntaxProfiles

  Consulta la personalización de Emmet para el perfil de salida para aprender cómo puedes personalizar la salida de tus abreviaturas HTML.

  Por ejemplo:

  ```json
  "emmet.syntaxProfiles": {
  "html": {
	"attr_quotes": "single"
  },
  "jsx": {
	"self_closing_tag": true
  }
    }
  ```

* emmet.variables

  Personaliza las variables utilizadas por las abreviaturas de Emmet.

  Por ejemplo:
  ```json
  "emmet.variables": {
  "lang": "de",
  "charset": "UTF-16"
    }

  ```

* emmet.showExpandedAbbreviation

  Controla las sugerencias de Emmet que aparecen en la lista de sugerencias/completación.

  Configuración | Descripción
  ------------- | -----------
  `never` | Nunca mostrar abreviaturas de Emmet en la lista de sugerencias para ningún lenguaje.
  `inMarkupAndStylesheetFilesOnly` | Mostrar sugerencias de Emmet solo para lenguajes basados puramente en marcado y hojas de estilo ('html', 'pug', 'slim', 'haml', 'xml', 'xsl', 'css', 'scss', 'sass', 'less', 'stylus').
  `always` | Mostrar sugerencias de Emmet en todos los modos compatibles con Emmet, así como en los lenguajes que tienen un mapeo en la configuración `setting(emmet.includeLanguages)`.
  
  > Nota: En el modo always, la nueva implementación de Emmet no es consciente del contexto. Por ejemplo, si estás editando un archivo JavaScript React, recibirás sugerencias de Emmet no solo cuando estés escribiendo markup (código HTML o JSX), sino también mientras escribes código JavaScript.

* emmet.showAbbreviationSuggestions
  Muestra las abreviaciones de Emmet posibles como sugerencias. Está habilitado por defecto.
  Por ejemplo, cuando escribes "li", obtienes sugerencias de todas las abreviaciones de Emmet que comienzan con "li", como "link". Esto es útil para aprender abreviaciones de Emmet que tal vez no conocías, a menos que te supieras de memoria la hoja de trucos de Emmet.
  No es aplicable en hojas de estilo o cuando emmet.showExpandedAbbreviation está configurado como "never".
  
* emmet.extensionsPath
  Proporciona la ubicación del directorio que contiene el archivo snippets.json, el cual tiene tus fragmentos personalizados.

* emmet.triggerExpansionOnTab
  Configúralo como "true" para habilitar la expansión de las abreviaciones de Emmet con la tecla Tab. Usamos esta configuración para proporcionar la indentación apropiada cuando no hay una abreviación para expandir.

* emmet.showSuggestionsAsSnippets
  Si se configura en "true", las sugerencias de Emmet se agruparán junto con otros fragmentos, permitiéndote ordenarlas según la configuración editor.snippetSuggestions. Configúralo en "true" y en editor.snippetSuggestions en "top" para asegurar que las sugerencias de Emmet siempre aparezcan en la parte superior entre otras sugerencias.

* emmet.preferences
  Puedes usar esta configuración para personalizar Emmet como se documenta en las Preferencias de Emmet. Las siguientes personalizaciones son actualmente compatibles
  * css.propertyEnd
  * css.valueSeparator
  * sass.propertyEnd
  * sass.valueSeparator
  * stylus.propertyEnd
  * stylus.valueSeparator
  * css.unitAliases
  * css.intUnit
  * css.floatUnit
  * bem.elementSeparator
  * bem.modifierSeparator
  * filter.commentBefore
  * filter.commentTrigger
  * filter.commentAfter
  * format.noIndentTags
  * format.forceIndentationForTags
  * profile.allowCompactBoolean
  * css.fuzzySearchMinScore
  El formato para la preferencia filter.commentAfter es diferente y más simple en Emmet 2.0.

  Por ejemplo, en lugar del formato anterior:

  ```json
  "emmet.preferences": {
  "filter.commentAfter": "\n<!-- /<%= attr('id', '#') %><%= attr('class', '.') %> -->"
    }
  ```

  podrías usar:

  ```json
    "emmet.preferences": {
  "filter.commentAfter": "\n<!-- /[#ID][.CLASS] -->"
    }
  ```

  Si deseas soporte para alguna de las otras preferencias documentadas en las Preferencias de Emmet, por favor realiza una solicitud de función.

## Solución de problemas
### Los tags personalizados no se expanden en la lista de sugerencias

Los tags personalizados, cuando se usan en una expresión como MyTag>YourTag o MyTag.someclass, sí aparecen en la lista de sugerencias. Sin embargo, cuando se usan por sí solos, como MyTag, no aparecen en la lista de sugerencias. Esto está diseñado para evitar el ruido en la lista de sugerencias, ya que cada palabra es un posible tag personalizado.

Agrega la siguiente configuración para habilitar la expansión de las abreviaturas de Emmet utilizando la tecla Tab, lo que permitirá expandir los tags personalizados en todos los casos.

```json
"emmet.triggerExpansionOnTab": true
```

### Mis fragmentos de HTML que terminan con + no funcionan
Los fragmentos de HTML que terminan con +, como select+ y ul+ de la hoja de trucos de Emmet, no son compatibles. Este es un problema conocido en Emmet 2.0 (Problema: emmetio/html-matcher#1). Una solución alternativa es crear tus propios fragmentos personalizados de Emmet para tales escenarios.

### Las abreviaturas no se expanden

Primero, verifica si estás utilizando fragmentos personalizados (si hay un archivo snippets.json que esté siendo utilizado por la configuración emmet.extensionsPath). El formato de los fragmentos personalizados cambió en la versión 1.53 de VS Code. En lugar de usar el símbolo | para indicar la posición del cursor, ahora se deben usar tokens como ${1}, ${2}, etc. El archivo de fragmentos CSS por defecto del repositorio emmetio/emmet muestra ejemplos del nuevo formato de posición del cursor.

Si las abreviaturas aún no se expanden:
- Verifica las extensiones incorporadas para asegurarte de que Emmet no esté deshabilitado.
- Intenta reiniciar el host de la extensión ejecutando el comando "Developer: Restart Extension Host" (workbench.action.restartExtensionHost) desde la Paleta de Comandos.


### ¿Dónde puedo configurar todas las preferencias como se documenta en las preferencias de Emmet?
Puedes configurar las preferencias utilizando la configuración emmet.preferences. Solo un subconjunto de las preferencias documentadas en las preferencias de Emmet se pueden personalizar.



