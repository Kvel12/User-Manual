# Snippets en Visual Studio Code
Los snippets son plantillas que facilitan la entrada de patrones de código repetitivos, como bucles o declaraciones condicionales.

En Visual Studio Code, los snippets aparecen en IntelliSense (Ctrl+Espacio) junto con otras sugerencias, y también en un selector de snippets dedicado (Insertar Snippet en la Paleta de Comandos). También se admite la finalización con tabulación: actívala con "editor.tabCompletion": "on", escribe un prefijo de snippet (texto de activación) y presiona Tab para insertar un snippet.

La sintaxis de los snippets sigue la sintaxis de TextMate, con las excepciones de 'código de shell interpolado' y el uso de \u, ya que ambos no son compatibles.

![ajaxsnippets](/img/user-guide/snippets/ajax-snippet.gif)


## Snippets integrados

VS Code tiene snippets integrados para varios lenguajes, como JavaScript, TypeScript, Markdown y PHP.

![builtinjavascriptsnippets](/img/user-guide/snippets/builtin-javascript-snippets.png)

Puedes ver los snippets disponibles para un lenguaje ejecutando el comando Insert Snippet en la Paleta de Comandos para obtener una lista de los snippets del lenguaje del archivo actual. Sin embargo, ten en cuenta que esta lista también incluye los snippets definidos por el usuario y los snippets proporcionados por las extensiones que hayas instalado.

## Instala snippets desde el Marketplace

Muchas extensiones en el VS Code Marketplace incluyen snippets. Puedes buscar extensiones que contengan snippets en la vista de Extensiones (Ctrl+Shift+X) usando el filtro @category:"snippets".

![categorysnippets](/img/user-guide/snippets/category-snippets.png)

Si encuentras una extensión que deseas usar, instálala, luego reinicia VS Code y los nuevos snippets estarán disponibles.

## Crear tus propios snippets

Puedes definir tus propios snippets fácilmente sin necesidad de una extensión. Para crear o editar tus propios snippets, selecciona Configure User Snippets en File > Preferences (Code > Preferences o Code > Settings en macOS), y luego selecciona el lenguaje (por identificador de lenguaje) para el cual deben aparecer los snippets, o la opción New Global Snippets file si deben aparecer para todos los lenguajes. VS Code se encarga de la creación y actualización de los archivos de snippets subyacentes por ti.

![snippetdropdown](/img/user-guide/snippets/snippet-dropdown.png)

Los archivos de snippets se escriben en formato JSON, admiten comentarios estilo C y pueden definir un número ilimitado de snippets. Los snippets son compatibles con la mayoría de la sintaxis de TextMate para comportamiento dinámico, formatean inteligentemente el espacio en blanco según el contexto de inserción y permiten una fácil edición en múltiples líneas.

A continuación, se muestra un ejemplo de un snippet para un bucle for en JavaScript:

```json
// in file 'Code/User/snippets/javascript.json'
{
  "For Loop": {
	"prefix": ["for", "for-const"],
	"body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"],
	"description": "A for loop."
  }
}
```

En el ejemplo anterior:

- "For Loop" es el nombre del snippet. Se muestra a través de IntelliSense si no se proporciona una descripción.
- prefix define una o más palabras de activación que muestran el snippet en IntelliSense. Se realiza una coincidencia de subcadenas en los prefijos, por lo que en este caso, "fc" podría coincidir con "for-const".
- body es una o más líneas de contenido, que se unirán como múltiples líneas al insertarse. Las nuevas líneas y las pestañas incrustadas se formatearán según el contexto en el que se inserte el snippet.
- description es una descripción opcional del snippet que se muestra en IntelliSense.

Además, el cuerpo del ejemplo anterior tiene tres marcadores de posición (listados en el orden de recorrido): ${1}, ${2}, y $0. Puedes saltar rápidamente al siguiente marcador de posición con Tab, momento en el que podrás editar el marcador o saltar al siguiente. El texto después de los dos puntos : (si lo hay) es el texto predeterminado, por ejemplo, element en ${2}. El orden de recorrido de los marcadores de posición es ascendente por número, comenzando desde el uno; el cero es un caso especial opcional que siempre aparece al final y sale del modo de snippet colocando el cursor en la posición especificada.

### Snippets de plantilla de archivo

Puedes agregar el atributo isFileTemplate a la definición de tu snippet si este está diseñado para poblar o reemplazar el contenido de un archivo. Los snippets de plantilla de archivo se muestran en un menú desplegable al ejecutar el comando Snippets: Populate File from Snippet en un archivo nuevo o existente.

## Alcance de los snippets

Los snippets tienen un alcance definido para que solo se sugieran aquellos relevantes. Pueden estar delimitados según:

- Lenguaje(s): Los snippets se limitan a los lenguajes a los que están asociados(posiblemente a todos).
- Proyecto(s): Los snippets pueden restringirse a proyectos específicos (probablemente a todos).

### Alcance de los snippets por lenguaje

Cada snippet está asociado a uno, varios o a todos los lenguajes ("global") según dónde se defina:

- Archivo de snippets para un lenguaje: Los snippets definidos en un archivo de snippets específico para un lenguaje (por ejemplo, javascript.json) están disponibles únicamente al editar en ese lenguaje. Puedes acceder a estos archivos usando el comando Snippets: Configure User Snippets con el identificador del lenguaje.
- Archivo global de snippets: Los snippets definidos en un archivo global (.code-snippets) pueden estar disponibles para varios lenguajes o de forma universal. En estos archivos, una propiedad adicional llamada scope puede especificar los identificadores de lenguaje en los que el snippet estará disponible. Si no se incluye la propiedad scope, el snippet estará disponible en todos los lenguajes.

La mayoría de los snippets definidos por el usuario están limitados a un único lenguaje y se definen en un archivo específico para ese lenguaje.

### Alcance de los snippets por proyecto

También puedes tener un archivo global de snippets (.code-snippets) limitado al alcance de tu proyecto. Los snippets específicos para un proyecto se crean seleccionando la opción New Snippets file for ''... en el menú desplegable de Snippets: Configure User Snippets. Estos archivos se ubican en la carpeta raíz del proyecto dentro de una carpeta .vscode.

Los archivos de snippets de proyecto son útiles para compartir snippets con todos los usuarios que trabajen en ese proyecto. Al igual que los snippets globales, los snippets de proyecto pueden limitarse a lenguajes específicos mediante la propiedad scope.

## Sintaxis de los Snippets

El cuerpo de un snippet puede usar construcciones especiales para controlar los cursores y el texto que se inserta. Las siguientes son las características compatibles y sus sintaxis correspondientes:

### Tabstops
Con los tabstops, puedes hacer que el cursor del editor se mueva dentro del snippet. Usa $1, $2 para especificar ubicaciones del cursor. El número indica el orden en el que se visitarán los tabstops, mientras que $0 denota la posición final del cursor. Las múltiples ocurrencias de un mismo tabstop están vinculadas y se actualizan en sincronía.
### Placeholders
Los placeholders son tabstops con valores, como `${1:foo}`. El texto del placeholder se insertará y seleccionará para facilitar su modificación. Los placeholders pueden anidarse, como `${1:another ${2:placeholder}}`.

### Choices (Opciones)

Los placeholders pueden tener opciones como valores. La sintaxis es una enumeración separada por comas, encerrada entre caracteres de barra vertical (|). Por ejemplo: `${1|one,two,three|}`.

Cuando se inserta el snippet y se selecciona el placeholder, se solicitará al usuario que elija uno de los valores disponibles.

## Variables

Con $name o `${name:default}`, puedes insertar el valor de una variable. Si la variable no está definida, se insertará su valor predeterminado o una cadena vacía. Si la variable es desconocida (es decir, no está definida), se inserta el nombre de la variable y se convierte en un placeholder.

Las siguientes variables están disponibles:

- TM_SELECTED_TEXT: Texto seleccionado actualmente o cadena vacía.
- TM_CURRENT_LINE: Contenido de la línea actual.
- TM_CURRENT_WORD: Palabra bajo el cursor o cadena vacía.
- TM_LINE_INDEX: Número de línea basado en índice cero.
- TM_LINE_NUMBER: Número de línea basado en índice uno.
- TM_FILENAME: Nombre del archivo actual.
- TM_FILENAME_BASE: Nombre del archivo sin extensiones.
- TM_DIRECTORY: Directorio del archivo actual.
- TM_FILEPATH: Ruta completa del archivo actual.
- RELATIVE_FILEPATH: Ruta relativa (al espacio de trabajo abierto) del archivo actual.
- CLIPBOARD: Contenido del portapapeles.
- WORKSPACE_NAME: Nombre del espacio de trabajo o carpeta abiertos.
- WORKSPACE_FOLDER: Ruta del espacio de trabajo o carpeta abiertos.
- CURSOR_INDEX: Número del cursor basado en índice cero.
- CURSOR_NUMBER: Número del cursor basado en índice uno.

Fecha y hora actuales

- CURRENT_YEAR: Año actual.
- CURRENT_YEAR_SHORT: Últimos dos dígitos del año actual.
- CURRENT_MONTH: Mes en formato de dos dígitos (por ejemplo, 02).
- CURRENT_MONTH_NAME: Nombre completo del mes (por ejemplo, July).	CURRENT_MONTH_NAME_SHORT: Nombre abreviado del mes (por ejemplo, Jul).
- CURRENT_DATE: Día del mes en formato de dos dígitos (por ejemplo, 08).
- CURRENT_DAY_NAME: Nombre del día (por ejemplo, Monday).
- CURRENT_DAY_NAME_SHORT: Nombre abreviado del día (por ejemplo, Mon).
- CURRENT_HOUR: Hora actual en formato 24 horas.
- CURRENT_MINUTE: Minuto actual en dos dígitos.
- CURRENT_SECOND: Segundo actual en dos dígitos.
- CURRENT_SECONDS_UNIX: Segundos desde la época Unix.
- CURRENT_TIMEZONE_OFFSET: Diferencia de zona horaria UTC en formato +HH:MM o -HH:MM (por ejemplo, -07:00).

Valores aleatorios

- RANDOM: 6 dígitos aleatorios Base-10.
- RANDOM_HEX: 6 dígitos aleatorios Base-16.
- UUID: UUID versión 4.
Comentarios según el lenguaje


- BLOCK_COMMENT_START: Inicio del bloque de comentario `(ejemplo: en PHP /*, en HTML <!--) `.
- BLOCK_COMMENT_END: Fin del bloque de comentario (ejemplo: en PHP */, en HTML -->).
- LINE_COMMENT: Inicio del comentario de línea (ejemplo: en PHP //).

El siguiente snippet inserta /* Hello World */ en archivos JavaScript y <!-- Hello World --> en archivos HTML:

```json
{
  "hello": {
	"scope": "javascript,html",
	"prefix": "hello",
	"body": "$BLOCK_COMMENT_START Hello World $BLOCK_COMMENT_END"
  }
}
```

## Asignar combinaciones de teclas a Snippets

Puedes crear combinaciones de teclas personalizadas para insertar snippets específicos. Para hacerlo, abre el archivo keybindings.json usando el comando Preferences: Open Keyboard Shortcuts File y añade una configuración de combinación de teclas pasando "snippet" como argumento adicional.

```json
{
  "key": "cmd+k 1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
	"snippet": "console.log($1)$0"
  }
}
```

La combinación de teclas invocará el comando Insert Snippet, pero en lugar de pedirte que selecciones un snippet, insertará el snippet proporcionado. Defines la combinación de teclas personalizada como de costumbre, con un atajo de teclado, un ID de comando y una cláusula when opcional para determinar cuándo está habilitada.

Además, en lugar de usar el valor del argumento snippet para definir tu snippet en línea, puedes hacer referencia a un snippet existente utilizando los argumentos langId y name. El argumento langId selecciona el lenguaje para el cual se inserta el snippet indicado por name, por ejemplo, en el siguiente ejemplo se selecciona el snippet myFavSnippet disponible para archivos de C#.

```json
{
  "key": "cmd+k 1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
	"langId": "csharp",
	"name": "myFavSnippet"
  }
}
```

## Preguntas frecuentes
### ¿Qué hago si quiero usar snippets de TextMate existentes desde un archivo .tmSnippet?
Puedes empaquetar fácilmente archivos de snippets de TextMate para utilizarlos en VS Code. Consulta la documentación Using TextMate Snippets en la API de extensiones.

### ¿Cómo puedo incluir una variable en el script insertado por un snippet?
Para incluir una variable en el script insertado, necesitas escapar el símbolo '$' del nombre de la variable usando \, de modo que no sea procesado durante la expansión del snippet.

```json
"VariableSnippet":{
	"prefix": "_Var",
	"body": "\\$MyVar = 2",
	"description": "A basic snippet that places a variable into script with the $ prefix"
  }
```

Los resultados son los siguientes:
```json
$MyVar = 2
```

### ¿Puedo eliminar snippets de IntelliSense?

Sí, puedes ocultar snippets específicos para que no aparezcan en IntelliSense (lista de autocompletado) seleccionando el botón Ocultar de IntelliSense que se encuentra a la derecha de los elementos de snippet en el menú desplegable del comando Insert Snippet.

![hidefromintellisense](/img/user-guide/snippets/hide-from-intellisense.png)

Aún puedes seleccionar el snippet con el comando Insert Snippet, pero el snippet oculto no aparecerá en IntelliSense.