# Accesibilidad

Visual Studio Code tiene muchas características para hacer que el editor sea accesible para todos los usuarios. Los niveles de zoom y los colores de alto contraste mejoran la visibilidad del editor, la navegación solo con teclado soporta el uso sin un ratón, y el editor está optimizado para lectores de pantalla.

## Zoom

Puedes ajustar el nivel de zoom en VS Code utilizando los comandos de Ver > Apariencia > Zoom. Cada comando de zoom aumenta o disminuye el nivel de zoom en un 20 por ciento.

- Ver > Apariencia > Acercar (Ctrl+=) - aumentar el nivel de zoom.
- Ver > Apariencia > Alejar (Ctrl+-) - disminuir el nivel de zoom.
- Ver > Apariencia > Restablecer zoom (Ctrl+Numpad0) - restablecer el nivel de zoom a 0.

> Nota: Si estás usando un aumento de pantalla, mantén presionada la tecla Alt mientras ves el hover para mover el cursor sobre el hover.

![zoomedin](/img/user-guide/accessibility/zoomed-in.png)

### Nivel de zoom persistente

Cuando ajustas el nivel de zoom con los comandos Ver > Apariencia > Acercar / Alejar, el nivel de zoom se guarda en la configuración window.zoomLevel. El valor predeterminado es 0 y cada incremento/decremento cambia el nivel de zoom en un 20 por ciento.

## Ayuda de accesibilidad

El comando Abrir Ayuda de Accesibilidad (Shift+Alt+F1) abre un menú de ayuda basado en el contexto actual. Actualmente, se aplica al editor, terminal, cuaderno, vista de chat y funciones de chat en línea.

Puedes descartar el menú de ayuda de accesibilidad o abrir documentación adicional desde dentro del menú de ayuda.

![status](/img/user-guide/accessibility/status.png)

La traducción del mensaje es el siguiente:


  “Gracias por probar las opciones de accesibilidad de VS Code.
  
  Estado:
  
  El editor está configurado para detectar automáticamente cuando un lector de pantalla está conectado, lo cual no es el caso en este momento. Para configurar el editor de manera que siempre esté optimizado para su uso con un lector de pantalla, presiona Control+E ahora.
  Al presionar Tab en el editor actual, se insertará el carácter de tabulación. Puedes alternar este comportamiento presionando Control+M.
  
  Presiona Control+H ahora para abrir una ventana del navegador con más información sobre accesibilidad en VS Code.
  
  Puedes descartar este mensaje y volver al editor presionando Escape o Shift+Escape.”

## Tema de alto contraste

VS Code es compatible con un tema de alto contraste en todas las plataformas. Para activarlo, utiliza el siguiente procedimiento:

Ve a Archivo > Preferencias (o Code > Preferencias en macOS).
Selecciona Tema > Tema de color (Ctrl+K Ctrl+T).
En el menú desplegable de selección de tema, elige el tema Alto contraste.

![highcontrast](/img/user-guide/accessibility/high-contrast.png)

## Accesibilidad para la visión del color

Puedes buscar extensiones en el Visual Studio Marketplace que sean compatibles con deficiencias en la visión del color. Para hacerlo:

Abre la vista de Extensiones con Ctrl+Shift+X.
Busca "color blind" para mostrar las opciones relevantes que puedan ayudarte a mejorar la accesibilidad según las necesidades de visión del color.

![accessibilityextensionmarketplace](/img/user-guide/accessibility/accessibility-extension-marketplace.png)

Una vez que hayas instalado un tema de color desde el Marketplace, puedes cambiar el tema de color siguiendo estos pasos:

1. Ve a File > Preferences (o Code > Preferences o Code > Settings en macOS).
2. Selecciona Theme > Color Theme.
3. Usa el atajo Ctrl+K Ctrl+T para abrir el selector de temas y elegir el que prefieras.

### Temas recomendados para accesibilidad en visión del color
- GitHub: Accesible para la mayoría de las formas de daltonismo y coincide con los temas en la configuración de GitHub.
- Gotthard: Optimizado para aproximadamente 20 lenguajes de programación.
- Blinds: Creado para personas con deuteranopia, con una relación de contraste de colores alta.
- Greative: Considera tanto el daltonismo como la sensibilidad a la luz.
- Pitaya Smoothie: Accesible para la mayoría de las formas de daltonismo y cumple con los criterios WCAG 2.1 para el contraste de colores.

## Personalización de los colores de advertencia

El tema de color predeterminado para VS Code es Dark+. Sin embargo, puedes personalizar tanto el tema como los colores de las propiedades en la interfaz de usuario.

> Nota: Ve a *Customizing a Color Theme* para obtener más información sobre cómo anular los colores de tu tema actual.

Para personalizar los subrayados de error y advertencia, ve a File > Preferences (Code > Preferences o Code > Settings en macOS) > Settings para configuraciones de usuario. Busca "color customizations" para encontrar la configuración Workbench: Color Customizations, y abre tu archivo user settings.json seleccionando Edit in settings.json.

![accessibilitysettingsjsonfile](/img/user-guide/accessibility/accessibility-settings-json-file.png)

En tu archivo settings.json, anida el siguiente código dentro de las llaves más externas. Puedes asignar un color a cada objeto ingresando un código hexadecimal.

```json
"workbench.colorCustomizations": {
	"editorError.foreground": "#ffef0f",
	"editorWarning.foreground": "#3777ff"
}
```

En el siguiente ejemplo, el color de advertencia se aplica cuando falta una coma después de un elemento en JSON.

![accessibilityextensionsquiggles](/img/user-guide/accessibility/accessibility-extension-squiggles.png)

- editorError.foreground: Sobrescribe la línea ondulada debajo de un error.
- editorWarning.foreground: Sobrescribe la línea ondulada debajo de una advertencia.
- editorError.background: Sobrescribe el color de resalto de un error.
- editorWarning.background: Sobrescribe el color de resalto de una advertencia.

Asignar un color al fondo de editorError y editorWarning también ayuda a identificar problemas potenciales. El color que elijas resaltará el respectivo error o advertencia. Los colores mostrados en el ejemplo anterior, #ffef0f (amarillo) y #37777ff (azul), son más accesibles para personas con formas comunes de deficiencias en la visión del color.

### Seleccionar colores accesibles

La accesibilidad de los colores es subjetiva según el tipo de tricromacia anómala (ceguera al color). El nivel de severidad varía de persona a persona y puede dividirse en cuatro tipos de condiciones:
- Deuteranopía: Sensibilidad reducida a la luz verde. Es la forma más común de ceguera al color.
- Protanopía: Sensibilidad reducida a la luz roja.
- Tritanopía: Sensibilidad reducida a la luz azul. Esta condición se considera rara.
- Monocromía: Incapacidad de ver todos los colores, también conocida como acromatopsia. 
Más información sobre la forma más rara de ceguera al color: Foundation for Fighting Blindness.

Una de las mejores formas de seleccionar los colores más adecuados para una condición específica es aplicar colores complementarios. Estos son los colores que se encuentran opuestos entre sí en la rueda de colores.

![accessibilitycolorwheels](/img/user-guide/accessibility/accessibility-color-wheels.png)

> Nota: Para más información sobre cómo encontrar colores complementarios, accede al simulador de ceguera al color y la rueda de colores interactiva en Adobe Color.

## Atenuar editores y terminales no enfocados

Las vistas no enfocadas pueden atenuarse para que sea más claro a dónde se dirigirá la entrada de texto. Esto es especialmente útil cuando trabajas con múltiples grupos de editores o terminales. Activa esta función configurando "accessibility.dimUnfocused.enabled": true. Puedes controlar el nivel de atenuación con accessibility.dimUnfocused.opacity, que toma un valor de opacidad entre 0.2 y 1 (por defecto 0.75).

## Navegación por teclado

VS Code ofrece una lista exhaustiva de comandos en la Paleta de Comandos (Ctrl+Shift+P), para que puedas usar VS Code sin necesidad de un ratón. Presiona Ctrl+Shift+P, luego escribe el nombre de un comando (por ejemplo, 'git') para filtrar la lista de comandos.

VS Code también tiene muchos accesos directos de teclado preconfigurados para los comandos.

![keyboardshortcuts](/img/user-guide/accessibility/keyboard-shortcuts.png)

También puedes configurar tus propios atajos de teclado. Ve a File > Preferences (o Code > Preferences o Code > Settings en macOS) > Keyboard Shortcuts (Ctrl+K Ctrl+S) para abrir el editor de atajos de teclado, donde podrás explorar y modificar las combinaciones de teclas para las acciones de VS Code.

Para una navegación rápida a través del área de trabajo, recomendamos usar los comandos Focus Next Part (F6) y Focus Previous Part (Shift+F6).
Selección de anclaje

Para facilitar el inicio y fin de selecciones con el teclado, hay cuatro comandos:

- Set Selection Anchor (Ctrl+K Ctrl+B)
- Select From Anchor to Cursor (Ctrl+K Ctrl+K)
- Cancel Selection Anchor (Escape)
- Go to Selection Anchor

## Navegación por pestañas

Puedes usar la tecla Tab para navegar entre los controles de la interfaz de usuario en VS Code. Usa Shift+Tab para navegar en orden inverso. A medida que navegas por los controles de la interfaz, aparecerá un indicador alrededor de cada elemento de la interfaz cuando tenga el foco.

Todos los elementos en el área de trabajo admiten la navegación por pestañas. Para evitar tener demasiados puntos de tabulación, las barras de herramientas y las listas de pestañas del área de trabajo solo tienen uno. Una vez que una barra de herramientas o una lista de pestañas tenga el foco, puedes usar las teclas de flecha para navegar dentro de ellas.

## Trampas de Tabulación

Por defecto, al presionar Tab dentro de un archivo de código fuente, se inserta el carácter de tabulación (o espacios dependiendo de tu configuración de sangría) y no se sale del archivo abierto. Puedes activar o desactivar la trampa de Tabulación con Ctrl+M, y las teclas de Tabulador posteriores moverán el foco fuera del archivo. Cuando la trampa de tabulación esté desactivada, verás un indicador Tab moves focus en la barra de estado.

La trampa de tabulación también existe en la terminal integrada. El comportamiento predeterminado de esta función se puede configurar con la opción: editor.tabFocusMode. Un ítem en la barra de estado Tab moves focus se muestra cuando el modo está activo.

![tabmovesfocus](/img/user-guide/accessibility/tab-moves-focus.png)

Un ítem de la barra de estado Tab moves focus aparece cuando el modo está activo.

También puedes activar o desactivar la trampa de tabulación desde la Command Palette (Ctrl+Shift+P) con la acción Toggle Tab Key Moves Focus.

Los archivos de solo lectura nunca atrapan la tecla Tab. El panel de la Terminal Integrada respeta el modo de trampa de tabulación y se puede alternar con Ctrl+M.

## Lectores de pantalla

VS Code es compatible con lectores de pantalla en el editor utilizando una estrategia basada en la paginación de texto. Los siguientes lectores de pantalla han sido probados:

- Windows: NVDA y JAWS
- macOS: VoiceOver
- Linux: Orca

Para NVDA, se recomienda permanecer en el modo de enfoque y usar las teclas de acceso rápido para navegar, en lugar de usar el modo de navegación.

Las acciones Go to Next/Previous Error or Warning (F8 y Shift+F8) permiten que los lectores de pantalla anuncien los mensajes de error y advertencia.

Cuando aparecen sugerencias, los lectores de pantalla las anuncian. Navega entre las sugerencias usando Ctrl+Up y Ctrl+Down y deséchalas con Shift+Escape. Si las sugerencias te resultan molestas, puedes desactivarlas con la configuración editor.quickSuggestions.

En el panel de vista de diferencias (diff view), las acciones Go to Next/Previous Difference (F7 y Shift+F7) mostrarán el Accessible Diff Viewer con las diferencias presentadas en un formato de parche unificado. Navega por las líneas no modificadas, insertadas o eliminadas usando las teclas Up y Down. Presiona Enter para devolver el foco al panel modificado del editor de diferencias en el número de línea seleccionado (o el número de línea más cercano que aún exista, si se ha seleccionado una línea eliminada). Usa Escape o Shift+Escape para cerrar el Accessible Diff Viewer.

## Modo de lector de pantalla

Cuando VS Code detecta que se está utilizando un lector de pantalla, entra en un modo optimizado para lectores de pantalla para interfaces como el editor y la terminal integrada. La barra de estado mostrará "Screen Reader Optimized" en la parte inferior derecha. Puedes salir del modo de lector de pantalla haciendo clic en el texto mostrado o utilizando el comando Toggle Screen Reader Accessibility Mode.

![screenreadermode](/img/user-guide/accessibility/screen-reader-mode.png)

Algunas características, como el plegado y el minimapa (visión general del código), están deshabilitadas cuando se está en el modo de lector de pantalla. Puedes controlar si VS Code usa el modo de lector de pantalla con la configuración Editor: Accessibility Support (editor.accessibilitySupport). Los valores disponibles son on, off o el valor predeterminado auto, que detecta automáticamente un lector de pantalla a través de una consulta a la plataforma.

## Redimensionar columnas de tabla mediante el teclado

El comando list.resizeColumn te permite redimensionar columnas utilizando el teclado. Puedes asignar un acceso directo de teclado para activar este comando.

Cuando activas este comando, selecciona la columna que deseas redimensionar y proporciona un porcentaje del ancho que deseas establecer.

## Vista accesible

Ejecuta el comando Open Accessible View (Shift+Alt+F2) para mostrar una Vista Accesible e inspeccionar el contenido carácter por carácter, línea por línea. La Vista Accesible está disponible actualmente para hover, notificaciones, comentarios, salida de cuadernos, salida del terminal, respuestas de chat, autocompletados en línea, salida de la consola de depuración, y más.
## Control de entrada y navegación de resultados

En Visual Studio Code, la navegación entre un control de entrada (como campos de búsqueda, filtros o entradas de texto) y los resultados correspondientes se puede hacer utilizando accesos directos de teclado consistentes a través de diferentes paneles, como Vista de Extensiones, Editor de Atajos de Teclado, y los paneles de Comentarios, Problemas y Consola de Depuración.

- Ctrl+Abajo: Mueve el enfoque al siguiente resultado o al siguiente ítem en la lista de resultados.
- Ctrl+Arriba: Mueve el enfoque al resultado anterior o al ítem anterior en la lista de resultados.

Este comportamiento de navegación consistente te permite moverte fácilmente entre los campos de búsqueda y los resultados que devuelven dentro de diferentes secciones de VS Code, mejorando la eficiencia al gestionar tareas como depuración, búsqueda o navegación a través de extensiones y comentarios de código.

## Accesibilidad de la terminal

Puedes mostrar la ayuda de accesibilidad de la terminal mediante Shift+Alt+F1, que describe consejos útiles al usar un lector de pantalla. Un consejo es usar Shift+Alt+F2 para acceder al búfer de la terminal, lo que te permite obtener una vista accesible de todo el contenido mostrado en la terminal.

Usa editor.tabFocusMode para controlar si la terminal recibe la tecla Tab en lugar de la interfaz principal, similar al editor.

### Integración de Shell

La terminal tiene una característica llamada integración de shell que habilita muchas funcionalidades adicionales que no se encuentran en otras terminales. Al usar un lector de pantalla, las funciones Ejecutar Comando Reciente y Ir al Directorio Reciente son particularmente útiles.

Otro comando habilitado por la integración de shell, Ir al Símbolo en Vista Accesible (Ctrl+Shift+O), te permite navegar entre los comandos de la terminal de manera similar a la navegación Ir al Símbolo en el Editor en el editor.

## Relación mínima de contraste

Configura terminal.integrated.minimumContrastRatio a un número entre 1 y 21 para ajustar la luminancia del color del texto hasta que se alcance la relación de contraste deseada o se llegue al blanco puro (#FFFFFF) y negro (#000000).

Ten en cuenta que la configuración terminal.integrated.minimumContrastRatio no se aplicará a los caracteres de powerline, que son elementos visuales especiales usados en algunas interfaces de terminal para mostrar información adicional, como el estado del sistema o el entorno.

## Accesibilidad de la barra de estado

Una vez que el enfoque esté en la barra de estado a través de Focus Next Part (F6), puedes usar la navegación con las flechas para mover el enfoque entre las entradas de la barra de estado.
## Accesibilidad del editor de diferencias

Hay un Visor de Diferencias Accesible en el editor de diferencias que presenta los cambios en un formato de parche unificado. Puedes navegar entre los cambios con Go to Next Difference (F7) y Go to Previous Difference (Shift+F7). Navega por las líneas con las teclas de flecha y presiona Enter para regresar al editor de diferencias en la línea seleccionada.

## Accesibilidad del depurador

La interfaz de usuario del depurador de VS Code es accesible y tiene las siguientes características:

- Los cambios de estado del depurador son anunciados (por ejemplo, 'iniciado', 'punto de interrupción alcanzado', 'terminado', ...).
- Todas las acciones de depuración son accesibles por teclado.
- Tanto la vista Run and Debug como la Debug Console permiten la navegación por Tab.
- El hover del depurador es accesible por teclado (Ctrl+K Ctrl+I).
- Se pueden crear atajos de teclado para enfocar cada área del depurador.
- Mientras se depura y con el foco en un editor, invocar el comando Debug: Add to Watch anuncia el valor de la variable.

## Señales de accesibilidad

Las señales de accesibilidad indican si la línea actual tiene ciertos marcadores, como: errores, advertencias, puntos de interrupción, regiones de texto plegadas o sugerencias en línea.

Se reproducen cuando el cursor principal cambia de línea o la primera vez que se agrega un marcador a la línea actual. Los sonidos y anuncios de las señales de accesibilidad pueden habilitarse automáticamente cuando se conecta un lector de pantalla y pueden controlarse mediante la configuración accessibility.signals.

El comando Help: List Signal Sounds muestra todos los sonidos disponibles, permite escucharlos mientras navegas por la lista y configura su estado de habilitado/deshabilitado.

Los anuncios de ARIA también informan a los usuarios de lectores de pantalla y braille cuando se han alcanzado ciertos marcadores. El comando Help: List Signal Announcements informa al usuario sobre cuáles están disponibles y permite configurar su estado de habilitado/deshabilitado.

## Accesibilidad de los elementos emergentes (hover)

Algunos elementos emergentes no se pueden acceder normalmente al pasar el cursor sobre ellos, lo que dificulta su uso con amplificadores de pantalla. Para solucionar esto, mantén presionada la tecla Alt (o Option en macOS) mientras el elemento emergente está activo para "bloquearlo" en su lugar y evitar que se oculte al pasar el cursor. Suelta la tecla para desbloquear el elemento emergente.


