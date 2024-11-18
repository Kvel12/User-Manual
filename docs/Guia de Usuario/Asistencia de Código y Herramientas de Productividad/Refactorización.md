# Refactorización
El refactorizado del código fuente puede mejorar la calidad y mantenibilidad de tu proyecto al reestructurar el código, sin modificar el comportamiento en tiempo de ejecución. Visual Studio Code admite operaciones de refactorización (como Extraer Método y Extraer Variable) para mejorar tu base de código directamente desde el editor.

![refactoring](/img/user-guide/refactoring/refactoring-hero.png)

Por ejemplo, una refactorización común utilizada para evitar la duplicación de código (un dolor de cabeza en el mantenimiento) es la refactorización Extraer Método, en la cual seleccionas un fragmento de código fuente y lo extraes en su propio método compartido, para que puedas reutilizar ese código en otros lugares.

Las refactorizaciones son proporcionadas por un servicio de lenguaje. VS Code tiene soporte integrado para refactorización de TypeScript y JavaScript a través del servicio de lenguaje de TypeScript. El soporte de refactorización para otros lenguajes de programación se habilita mediante extensiones de VS Code que aportan servicios de lenguaje.

Los elementos de la interfaz de usuario y los comandos de VS Code para refactorización son los mismos a través de los diferentes lenguajes. Este artículo demuestra el soporte de refactorización en VS Code con el servicio de lenguaje de TypeScript.

## Acciones de Código = Correcciones rápidas y refactorizaciones

En VS Code, las Acciones de Código pueden proporcionar tanto refactorizaciones como correcciones rápidas para problemas detectados (resaltados con subrayados rojos). Cuando el cursor está sobre un subrayado o una región de texto seleccionada, VS Code muestra un ícono de bombilla en el editor para indicar que hay una acción de código disponible. Si seleccionas la bombilla de la acción de código o usas el comando de Corrección rápida (Ctrl+.), se presenta el control de correcciones rápidas y refactorizaciones.

Si prefieres ver solo las refactorizaciones sin las correcciones rápidas, puedes usar el comando Refactorizar (Ctrl+Shift+R).

> Nota: Puedes desactivar completamente las bombillas de acciones de código en el editor con la configuración editor.lightbulb.enable. Aun así, puedes abrir las correcciones rápidas a través del comando de corrección rápida y el atajo de teclado Ctrl+.

## Herramientas de refactorización
### Acciones de refactorización
#### Extraer Método

Selecciona el fragmento de código que deseas extraer y luego selecciona la bombilla en la barra lateral o presiona (Ctrl+.) para ver las refactorizaciones disponibles. Los fragmentos de código pueden ser extraídos a un nuevo método, o a una nueva función en diferentes ámbitos. Durante la refactorización de extracción, se te pedirá que proporciones un nombre significativo.

#### Extraer Variable

El servicio de lenguaje de TypeScript proporciona la refactorización Extraer a const para crear una nueva variable local para la expresión seleccionada actualmente.

![ts-extract-local](/img/user-guide/refactoring/ts-extract-local.gif)

Cuando trabajas con clases, también puedes extraer un valor a una nueva propiedad.

#### Renombrar símbolo
Renombrar es una operación común relacionada con la refactorización del código fuente, y VS Code tiene un comando separado para Renombrar Símbolo (F2). Algunos lenguajes permiten renombrar un símbolo en múltiples archivos. Para hacerlo, coloca el cursor sobre el símbolo que deseas renombrar, presiona F2, escribe el nuevo nombre deseado y presiona Enter. Todas las instancias del símbolo, en todos los archivos, serán renombradas automáticamente.

![rename](/img/user-guide/refactoring/rename.png)

## Vista previa de refactorización

Cuando aplicas una refactorización, los cambios se implementan directamente en tu código. En el panel de Vista previa de refactorización, puedes ver los cambios que se aplicarán con una operación de refactorización.

Para abrir el panel de Vista previa de refactorización, abre el control de Acciones de código, coloca el cursor sobre una refactorización y luego presiona Ctrl+Enter.

![refactorpreviewlaunch](/img/user-guide/refactoring/refactor-preview-launch.gif)

Puedes seleccionar cualquiera de los cambios en el panel de Vista previa de refactorización para ver una vista de las diferencias (diff) de los cambios que resultan de la operación de refactorización.

![refactorpreview](/img/user-guide/refactoring/refactor-preview.png)

Utiliza los controles Aceptar o Descartar para aplicar o cancelar los cambios propuestos en la refactorización.

Opcionalmente, puedes aplicar parcialmente los cambios de refactorización desmarcando algunos de los cambios propuestos en el panel de Vista previa de refactorización.

![refactorpreviewpartial](/img/user-guide/refactoring/refactor-preview-partial.png)

## Personalización y Extensiones
### Atajos de Teclado como Acciones de Código

El comando editor.action.codeAction te permite configurar atajos de teclado para acciones de código específicas. Este atajo, por ejemplo, activa la refactorización de función de extracción.

```json
{
  "key": "ctrl+shift+r ctrl+e",
  "command": "editor.action.codeAction",
  "args": {
	"kind": "refactor.extract.function"
  }
}
```

Los tipos de acciones de código (Code Action kinds) son especificados por las extensiones utilizando la API mejorada de CodeActionProvider. Los tipos son jerárquicos, por lo que "kind": "refactor" muestra todas las acciones de refactorización, mientras que "kind": "refactor.extract.function" solo muestra las refactorizaciones de extracción de funciones.

Usando el atajo de teclado mencionado, si solo hay una acción de código "refactor.extract.function" disponible, se aplica automáticamente. Si hay múltiples acciones de extracción de funciones disponibles, VS Code muestra un menú contextual para seleccionarlas.

![codeactioncontextmenu](/img/user-guide/refactoring/code-action-context-menu.png)

También puedes controlar cómo y cuándo se aplican automáticamente las acciones de código (Code Actions) utilizando el argumento apply:

```json
{
  "key": "ctrl+shift+r ctrl+e",
  "command": "editor.action.codeAction",
  "args": {
	"kind": "refactor.extract.function",
	"apply": "first"
  }
}
```

Valores válidos para apply:

- first - Aplica automáticamente siempre la primera acción de código disponible.
- ifSingle - (Predeterminado) Aplica automáticamente la acción de código si solo hay una disponible. De lo contrario, muestra el menú contextual.
- never - Siempre muestra el menú contextual de acciones de código, incluso si solo hay una acción de código disponible.

Cuando se configura una acción de código con "preferred": true, solo se muestran las correcciones rápidas y refactorizaciones preferidas. Una corrección rápida preferida aborda el error subyacente, mientras que una refactorización preferida es la opción de refactorización más común. Por ejemplo, aunque puedan existir múltiples refactorizaciones refactor.extract.constant, cada una extrayendo a un alcance diferente en el archivo, la refactorización preferida refactor.extract.constant es la que extrae a una variable local.

Este atajo utiliza "preferred": true para crear una refactorización que siempre intente extraer el código fuente seleccionado a una constante en el alcance local:

```json
{
  "key": "shift+ctrl+e",
  "command": "editor.action.codeAction",
  "args": {
	"kind": "refactor.extract.constant",
	"preferred": true,
	"apply": "ifSingle"
  }
}
```

### Extensiones con refactorizaciones

Puedes encontrar extensiones que soportan refactorizaciones buscando en el Marketplace de VS Code. Puedes ir a la vista de Extensiones (Ctrl+Shift+X) y escribir 'refactor' en el cuadro de búsqueda. Luego, puedes ordenar por cantidad de instalaciones o calificaciones para ver cuáles son las extensiones más populares.

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)

## Preguntas comunes
### ¿Por qué no veo ningún bombillo cuando hay errores en mi código?

Los bombillos (Acciones de código) solo se muestran cuando el cursor está sobre el texto que muestra el error. Al pasar el cursor sobre el texto se muestra la descripción del error, pero necesitas mover el cursor o seleccionar el texto para ver los bombillos para las correcciones rápidas y las refactorizaciones.

