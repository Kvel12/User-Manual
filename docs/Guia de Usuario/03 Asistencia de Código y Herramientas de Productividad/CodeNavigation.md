# Navegación en el código
Visual Studio Code es un editor de código optimizado para la productividad que, al combinarse con servicios de lenguajes de programación, ofrece la potencia de un entorno de desarrollo integrado (IDE) con la velocidad de un editor de texto. En esta sección, primero describiremos las características de inteligencia de lenguaje de VS Code (como sugerencias, pistas de parámetros y navegación inteligente del código) y luego exploraremos las capacidades fundamentales del editor de texto.

Este enfoque combinado permite a los desarrolladores aprovechar al máximo su flujo de trabajo con herramientas avanzadas para escribir, organizar y optimizar código de manera eficiente.

## Navegación básica
### Navegación rápida entre archivos
> Consejo: Puedes abrir cualquier archivo por su nombre presionando Ctrl+P (Apertura rápida).

El Explorador de VS Code es ideal para moverse entre archivos cuando estás explorando un proyecto. Sin embargo, al trabajar en una tarea específica, a menudo saltas rápidamente entre un conjunto recurrente de archivos. VS Code ofrece dos comandos poderosos para navegar dentro y entre archivos con combinaciones de teclas fáciles de usar.

Mantén presionado Ctrl y presiona Tab para ver una lista de todos los archivos abiertos en un grupo de editores. Usa Tab nuevamente para elegir el archivo al que deseas ir y, una vez seleccionado, suelta Ctrl para abrirlo.

![quicknav](/img/user-guide/code-navigation/quicknav.png)

Alternativamente, puedes usar Ctrl+Alt+- y Ctrl+Shift+- para navegar entre archivos y ubicaciones de edición. Si estás saltando entre diferentes líneas del mismo archivo, estos atajos te permiten moverte fácilmente entre esas ubicaciones.

### Migas de pan (Breadcrumb)

El editor tiene una barra de navegación encima de su contenido llamada Migas de pan. Muestra la ubicación actual y te permite navegar rápidamente entre carpetas, archivos y símbolos. Es aquella barra con la jerarquía de los ficheros: src > vs > base > browser …

![breadcrumbs](/img/user-guide/code-navigation/breadcrumbs.png)

Las migas de pan siempre muestran la ruta del archivo y, con la ayuda de las extensiones de lenguaje, inclusive la ruta de la definición del símbolo. Los símbolos mostrados son los mismos que en la vista de Esquema (Outline view) y Ir a Símbolo (Go to Symbol).

Al seleccionar una migaja de pan (breadcrumb) en la ruta, se muestra un menú desplegable con los elementos hermanos de ese nivel, lo que te permite navegar rápidamente a otras carpetas y archivos.

![breadcrumbfolderdropdown](/img/user-guide/code-navigation/breadcrumb-folder-dropdown.png)

Si el tipo de archivo actual tiene soporte de lenguaje para símbolos, verás la ruta del símbolo actual y un menú desplegable con otros símbolos en el mismo nivel y debajo de él.

![breadcrumbsymboldropdown](/img/user-guide/code-navigation/breadcrumb-symbol-dropdown.png)

Puedes desactivar las migas de pan (breadcrumbs) con el interruptor Ver > Mostrar migas de pan o utilizando la configuración breadcrumbs.enabled.

### Navegación por teclado de las migas de pan

Para interactuar con las migas de pan, utiliza el comando Enfocar migas de pan o presiona Ctrl+Shift+... Esto seleccionará el último elemento y abrirá un menú desplegable que te permitirá navegar a un archivo o símbolo hermano. Usa las teclas de flecha izquierda y derecha para desplazarte hacia los elementos anteriores o posteriores al elemento actual. Cuando aparezca el menú desplegable, comienza a escribir; todos los elementos que coincidan se resaltarán, y la mejor coincidencia será seleccionada para una navegación rápida.

También puedes interactuar con las migas de pan sin el menú desplegable. Presiona Ctrl+Shift+; para enfocar el último elemento, usa las teclas de flecha izquierda y derecha para navegar, y presiona Espacio para revelar el elemento en el editor.

## Navegación de símbolos y definiciones
### Ir a definición
Si un lenguaje lo admite, puedes ir a la definición de un símbolo presionando F12. Esto te llevará directamente a la ubicación en el código donde está definida la función, clase o variable que has seleccionado.

Si presionas Ctrl (o Cmd en macOS) y pasas el ratón sobre un símbolo, aparecerá una vista previa de su declaración. Esta vista previa te permitirá ver rápidamente información sobre el símbolo sin tener que navegar a su definición completa, lo que es útil para obtener contexto de manera rápida.

Estas funciones mejoran la eficiencia al navegar en el código, especialmente en proyectos grandes o cuando estás trabajando con múltiples archivos y símbolos a la vez.

![ctrlhover](/img/user-guide/code-navigation/ctrlhover.png)

> Consejo: Puedes ir a la definición con Ctrl+Clic o abrir la definición en un panel lateral con Ctrl+Alt+Clic.

## Ir al Símbolo

Puedes navegar entre los símbolos dentro de un archivo utilizando Ctrl+Shift+O. Esta función te permite ver y acceder rápidamente a funciones, clases, variables y otros símbolos definidos en el archivo actual.

Si escribes : después de abrir el menú de símbolos, los símbolos aparecerán agrupados por categoría, como métodos, propiedades o variables. Esto facilita encontrar y organizar los elementos de tu código. Usa las teclas de flecha arriba y flecha abajo para desplazarte entre los símbolos y selecciona el lugar al que deseas ir, agilizando así la navegación dentro del archivo.

![gotosymbol](/img/user-guide/code-navigation/gotosymbol.png)

### Abrir símbolo por nombre

En algunos lenguajes, puedes saltar a un símbolo en cualquier archivo del proyecto utilizando Ctrl+T. Simplemente escribe la primera letra o parte del nombre del tipo de símbolo al que deseas navegar, sin importar en qué archivo se encuentre, y luego presiona Enter.

Esta funcionalidad facilita la navegación rápida hacia clases, funciones, variables u otros símbolos distribuidos en diferentes archivos dentro de tu proyecto, mejorando tu flujo de trabajo al permitirte acceder a cualquier símbolo por su nombre.

## Vista rápida y referencia de información
### Vista rápida
Creemos que uno de los mayores obstáculos es tener que cambiar de contexto cuando solo deseas verificar algo rápidamente. Por eso, Visual Studio Code ofrece editores emergentes en modo peek. Cuando realizas una búsqueda de referencias con Shift+F12 o utilizas Vista rápida de definición con Ctrl+Shift+F10, los resultados se muestran directamente dentro del archivo actual, sin necesidad de cambiar de ventana o pestaña:

![references](/img/user-guide/code-navigation/references.png)

En el editor en modo Vista rápida, puedes navegar entre las diferentes referencias y realizar ediciones rápidas sin salir de la vista. Al hacer clic en el nombre del archivo o doble clic en la lista de resultados, la referencia se abrirá en el editor principal.

> Consejo: La ventana de vista rápida se cierra automáticamente si presionas Escape o haces doble clic en el área del editor peek. Puedes desactivar este comportamiento con la configuración editor.stablePeek.

### Información de referencia

Algunos lenguajes, como C#, ofrecen información de referencia en línea, que se actualiza en tiempo real. Esto permite analizar rápidamente el impacto de una edición o la frecuencia de uso de un método o propiedad específicos en todo el proyecto:

![referenceinfo](/img/user-guide/code-navigation/referenceinfo.png)

## Herramientas contextuales de código
### Coincidencia de paréntesis

Los paréntesis coincidentes se resaltarán automáticamente en cuanto el cursor esté cerca de uno de ellos. Esto facilita identificar las estructuras anidadas y evita errores de cierre.

![brackets](/img/user-guide/code-navigation/brackets.png)

> Consejo: Puedes saltar al paréntesis coincidente con Ctrl+Shift+\.

### Coloreado de pares de paréntesis

Los pares de paréntesis coincidentes también se pueden colorear configurando editor.bracketPairColorization.enabled en true.

![colorbracket](/img/user-guide/code-navigation/colorbracket.png)

Todos los colores son personalizables y se pueden configurar hasta seis colores.

Puedes usar workbench.colorCustomizations para sobrescribir estos colores proporcionados por el tema en tu archivo de configuración:

```json
"workbench.colorCustomizations": {
	"editorBracketHighlight.foreground1": "#FFD700",
	"editorBracketHighlight.foreground2": "#DA70D6",
	"editorBracketHighlight.foreground3": "#179fff",
},
```

### Errores y advertencias

Los errores y advertencias pueden generarse a través de tareas configuradas, servicios de lenguaje enriquecidos que analizan constantemente tu código en segundo plano. Como nos encanta el código sin errores, las advertencias y los errores aparecen en varios lugares:

- En la barra de estado, se muestra un resumen de la cantidad total de errores y advertencias.
- Puedes hacer clic en el resumen o presionar Ctrl+Shift+M para mostrar el panel PROBLEMS con una lista de todos los errores actuales.
- Si abres un archivo que tiene errores o advertencias, se mostrarán de forma inline en el texto y en la regla de resumen (overview ruler).

![errors](/img/user-guide/code-navigation/errors.png)

> Consejo: Para recorrer los errores o advertencias en el archivo actual, puedes presionar Alt+F8 o Shift+Alt+F8, lo que mostrará una zona en línea detallando el problema y las posibles Acciones de Código (si están disponibles).

![errorsinline](/img/user-guide/code-navigation/errorsinline.png)

### Acciones de código (Quick Fixes)
Las Acciones de Código en Visual Studio Code ofrecen soluciones automáticas para advertencias y errores en el código. Estas acciones están disponibles cuando un problema es detectado por un linteador, un servicio de lenguaje o tareas configuradas. La bombilla en el margen izquierdo del editor indica que hay una posible solución.

Al hacer clic en la bombilla, se abre un menú con sugerencias para solucionar el problema, como por ejemplo, corregir una sintaxis incorrecta, importar dependencias faltantes o cambiar la configuración. Si ya conoces la corrección que deseas, puedes hacer clic directamente en la sugerencia para aplicar la acción.

Además, las Acciones de Código son inteligentes y pueden mostrar varias opciones según el contexto del código. Para facilitar el acceso, también puedes usar el atajo de teclado Ctrl+. (o Cmd+. en macOS) para abrir el menú de acciones disponibles en la ubicación del cursor.

Si estás trabajando con un lenguaje soportado, las acciones rápidas pueden incluir refactorización de código, adiciones de comentarios, cambios de nombre y más, todo sin tener que salir del editor.

Las acciones también se pueden ejecutar de manera automática en ciertas configuraciones, lo que mejora aún más la productividad al resolver los errores o problemas en el código sin intervención manual.

### Sugerencias en línea
Algunos lenguajes proporcionan inlay hints: es decir, información adicional sobre el código fuente que se muestra en línea. Esto se utiliza generalmente para mostrar tipos inferidos. El siguiente ejemplo muestra inlay hints que muestran los tipos inferidos de las variables de JavaScript y los tipos de retorno de las funciones.

![inlay-hints](/img/user-guide/code-navigation/inlay-hints.png)

Las sugerencias en línea se pueden habilitar o deshabilitar con la configuración editor.inlayHints.enabled, siendo la opción predeterminada habilitada. Se necesitan extensiones, como TypeScript o Rust, para proporcionar la información real de las sugerencias en línea.


