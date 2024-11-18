# Depuración

Una de las características clave de Visual Studio Code es su excelente soporte de depuración. El depurador integrado de VS Code ayuda a acelerar tu ciclo de edición, compilación y depuración.

## Interfaz de usuario

El siguiente diagrama muestra los principales componentes de la interfaz de usuario de depuración:


![debugging](/img/user-guide/debugging/debugging_hero.png)

1. Vista de Ejecutar y Depurar: muestra toda la información relacionada con la ejecución, depuración y gestión de la configuración de depuración.
2. Barra de herramientas de depuración: tiene botones para las acciones de depuración más comunes.
3. Consola de depuración: permite ver e interactuar con la salida de tu código ejecutándose en el depurador.
4. Barra lateral de depuración: durante una sesión de depuración, te permite interactuar con la pila de llamadas, los puntos de interrupción, las variables y las variables de seguimiento.

## Vista de Ejecución y Depuración

Para abrir la vista de Ejecución y Depuración, selecciona el icono de Ejecución y Depuración en la Barra de Actividad en el lado de VS Code. También puedes usar el atajo de teclado Ctrl+Shift+D.

![run](/img/user-guide/debugging/run.png)

La vista de Ejecución y Depuración muestra toda la información relacionada con la ejecución y depuración, y tiene una barra superior con comandos de depuración y configuraciones de ajustes.

Si la ejecución y depuración aún no están configuradas (no se ha creado un archivo launch.json), VS Code muestra la vista de inicio de Ejecución.

![debugstart](/img/user-guide/debugging/debug-start.png)

## Menú de ejecución

El menú de nivel superior "Ejecutar" tiene los comandos más comunes de ejecución y depuración:

![debugmenu](/img/user-guide/debugging/debug-menu.png)

## Configuraciones de lanzamiento

Para ejecutar o depurar una aplicación simple en VS Code, selecciona "Ejecutar y depurar" en la vista de inicio de depuración o presiona F5, y VS Code intentará ejecutar tu archivo activo.

Sin embargo, para la mayoría de los escenarios de depuración, es beneficioso crear un archivo de configuración de lanzamiento, ya que permite configurar y guardar los detalles de la configuración de depuración. VS Code guarda la información de la configuración de depuración en un archivo launch.json ubicado en una carpeta .vscode en tu espacio de trabajo (carpeta raíz del proyecto) o en tus configuraciones de usuario o de espacio de trabajo.

Para crear un archivo launch.json, selecciona "crear un archivo launch.json" en la vista de inicio de depuración.

![launchconfiguration](/img/user-guide/debugging/launch-configuration.png)

VS Code intentará detectar automáticamente tu entorno de depuración, pero si esto falla, deberás elegirlo manualmente:

![debugenvironments](/img/user-guide/debugging/debug-environments.png)

Aquí está la configuración de inicio generada para la depuración de Node.js:
```json
{
  "version": "0.2.0",
  "configurations": [
	{
  	"type": "node",
  	"request": "launch",
  	"name": "Launch Program",
  	"skipFiles": ["<node_internals>/**"],
  	"program": "${workspaceFolder}\\app.js"
	}
  ]
}
```
Si regresas a la vista del Explorador de Archivos (Ctrl+Shift+E), verás que VS Code ha creado una carpeta .vscode y ha agregado el archivo launch.json a tu espacio de trabajo.

![launchjsoninexplorer](/img/user-guide/debugging/launch-json-in-explorer.png)

> Nota: Puedes depurar una aplicación simple incluso si no tienes una carpeta abierta en VS Code, pero no es posible gestionar configuraciones de lanzamiento ni configurar depuración avanzada. La barra de estado de VS Code será de color púrpura si no tienes una carpeta abierta.

Ten en cuenta que los atributos disponibles en las configuraciones de lanzamiento varían de un depurador a otro. Puedes usar las sugerencias de IntelliSense (Ctrl+Space) para descubrir qué atributos existen para un depurador específico. También está disponible la ayuda al pasar el cursor sobre todos los atributos.

No supongas que un atributo disponible para un depurador funcionará automáticamente para otros depuradores. Si ves líneas rojas en tu configuración de lanzamiento, pasa el cursor sobre ellas para ver cuál es el problema e intenta corregirlo antes de iniciar una sesión de depuración.

![launchjsonintellisense](/img/user-guide/debugging/launch-json-intellisense.png)

Revisa todos los valores generados automáticamente y asegúrate de que tengan sentido para tu proyecto y entorno de depuración.

## Acciones de depuración

Una vez que comience una sesión de depuración, la barra de herramientas de depuración aparecerá en la parte superior de la ventana.

![toolbar](/img/user-guide/debugging/toolbar.png)

| Acción                                                | Explicación                                                                                                                                                        |
|-------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuar / Pausar  `F5` | **Continuar**: Reanuda la ejecución normal del programa/script (hasta el próximo punto de interrupción).  **Pausar**: Permite inspeccionar el código ejecutado en la línea actual y depurar línea por línea. |
| Paso sobre  `F10`       | Ejecuta el siguiente método como un único comando sin inspeccionar ni seguir sus pasos internos.                                                                   |
| Paso dentro  `F11`       | Ingresa al siguiente método para seguir su ejecución línea por línea.                                                                                              |
| Salir  `Shift+F11`             | Cuando estás dentro de un método o subrutina, regresa al contexto de ejecución anterior completando las líneas restantes del método actual como si fueran un único comando. |
| Reiniciar  ` Ctrl+Shift+F5`         | Termina la ejecución actual del programa y comienza de nuevo la depuración utilizando la configuración de ejecución actual.                                         |
| Detener  `Shift+F5`              | Termina la ejecución actual del programa.                                                                                                                          |


> Consejo: Usa la configuración debug.toolBarLocation para controlar la ubicación de la barra de herramientas de depuración. Puede ser flotante por defecto, acoplada a la vista de "Run and Debug", o estar oculta. Una barra de herramientas de depuración flotante puede ser arrastrada horizontalmente y también hacia abajo en el área del editor (hasta una cierta distancia desde el borde superior).

## Puntos de interrupción (Breakpoints)
Un breakpoint (punto de interrupción) es una herramienta de depuración que se utiliza para pausar la ejecución de un programa en una línea específica de código. Esto permite al desarrollador examinar el estado del programa, como los valores de las variables, el flujo de ejecución, y otros aspectos, para identificar y corregir errores o comportamientos inesperados.
Los breakpoints se pueden alternar haciendo clic en el margen del editor o usando F9 en la línea actual. Un control más fino de los breakpoints (habilitar/deshabilitar/reaplicar) se puede realizar en la sección BREAKPOINTS de la vista de "Run and Debug".

- Los breakpoints en el margen del editor normalmente se muestran como círculos rojos rellenos.
- Los breakpoints deshabilitados tienen un círculo gris relleno.
- Cuando comienza una sesión de depuración, los breakpoints que no pueden registrarse con el depurador cambian a un círculo gris vacío. Lo mismo puede ocurrir si el código fuente se edita mientras se ejecuta una sesión de depuración sin soporte de edición en vivo.

Si el depurador admite interrupciones en diferentes tipos de errores o excepciones, estos también estarán disponibles en la vista de BREAKPOINTS.

El comando "Reaplicar todos los breakpoints" vuelve a colocar todos los breakpoints en su ubicación original. Esto es útil si tu entorno de depuración es "lento" y "desordena" los breakpoints en el código fuente que aún no se ha ejecutado.

![breakpoints](/img/user-guide/debugging/breakpoints.png)

Opcionalmente, los breakpoints pueden mostrarse en la regla de vista general del editor habilitando la configuración debug.showBreakpointsInOverviewRuler.

![bptsinoverview](/img/user-guide/debugging/bpts-in-overview.png)

## Logpoints
Un Logpoint es una variante de un breakpoint que no "interrumpe" la ejecución del depurador, sino que en su lugar registra un mensaje en la consola de depuración. Los logpoints te permiten inyectar registros mientras depuras sin modificar el código fuente. Son especialmente útiles cuando depuras servidores en producción que no pueden ser pausados o detenidos. Los logpoints también te ayudan a ahorrar tiempo, ya que no es necesario agregar o eliminar instrucciones de registro en tu código.

Un Logpoint se representa con un ícono con forma de "rombo". Los mensajes de registro son texto plano, pero pueden incluir expresiones que se evalúan dentro de llaves ('{}').

Para agregar un logpoint, utiliza el comando Add Logpoint en el menú contextual de la barra lateral del editor, o el comando Debug: Add Logpoint.... También puedes configurar la opción debug.gutterMiddleClickAction para alternar un logpoint al presionar el botón central del ratón en la barra lateral del editor.

![logpoints](/img/user-guide/debugging/log-points.gif)

Al igual que los breakpoints regulares, los Logpoints pueden ser habilitados o deshabilitados y también pueden ser controlados mediante una condición y/o un conteo de ejecuciones (hit count).

> Nota: Los Logpoints son compatibles con el depurador incorporado de Node.js en VS Code, pero también pueden ser implementados por otras extensiones de depuración. Por ejemplo, las extensiones de Python y Java también son compatibles con los Logpoints.

## Inspección de datos

Las variables pueden ser inspeccionadas en la sección VARIABLES de la vista de Run and Debug o al pasar el cursor sobre su origen en el editor. Los valores de las variables y la evaluación de expresiones son relativas al stack frame seleccionado en la sección CALL STACK.

![variables](/img/user-guide/debugging/variables.png)

Los valores de las variables pueden ser modificados con la acción Set Value desde el menú contextual de la variable. Además, puedes usar la acción Copy Value para copiar el valor de la variable, o la acción Copy as Expression para copiar una expresión que acceda a la variable.

Las variables y expresiones también pueden ser evaluadas y observadas en la sección WATCH de la vista Run and Debug.

![watch](/img/user-guide/debugging/watch.png)

Los nombres y valores de las variables se pueden filtrar escribiendo mientras el foco esté en la sección VARIABLES.

![filteringvariables](/img/user-guide/debugging/filtering-variables.png)

## Atributos de launch.json

Existen muchos atributos en launch.json para soportar diferentes depuradores y escenarios de depuración. Como se mencionó anteriormente, puedes usar IntelliSense (Ctrl+Space) para ver la lista de atributos disponibles una vez que hayas especificado un valor para el atributo type.

![launchjsonsuggestions](/img/user-guide/debugging/launch-json-suggestions.png)

Los siguientes atributos son obligatorios para cada configuración de lanzamiento:

- type: el tipo de depurador a usar para esta configuración de lanzamiento. Cada extensión de depuración instalada introduce un tipo, como node para el depurador integrado de Node, o php y go para las extensiones de PHP y Go.
- request: el tipo de solicitud de esta configuración de lanzamiento. Actualmente, se soportan launch y attach.
- name: el nombre legible para el usuario que aparecerá en el menú desplegable de configuraciones de lanzamiento de depuración.

## Consola de Depuración REPL

Las expresiones pueden evaluarse con la función REPL (Read-Eval-Print Loop) de la Consola de Depuración. Para abrir la Consola de Depuración, utiliza la acción de la Consola de Depuración en la parte superior del panel de Depuración o usa el comando View: Debug Console (Ctrl+Shift+Y).

Las expresiones se evalúan después de presionar Enter, y la Consola de Depuración REPL muestra sugerencias mientras escribes. Si necesitas ingresar múltiples líneas, usa Shift+Enter entre las líneas y luego envía todas las líneas para evaluación con Enter.

La entrada de la Consola de Depuración utiliza el modo del editor activo, lo que significa que la entrada de la Consola de Depuración es compatible con características como el coloreado de sintaxis, la indentación, el cierre automático de comillas y otras características del lenguaje.

![debugconsole](/img/user-guide/debugging/debugconsole.png)

> Nota: Debes estar en una sesión de depuración activa para poder usar la Consola de Depuración REPL.

## Preguntas comunes
### ¿Cuáles son los escenarios de depuración soportados?
La depuración de aplicaciones basadas en Node.js es compatible de manera nativa en Linux, macOS y Windows con VS Code. Muchos otros escenarios son compatibles mediante extensiones de VS Code disponibles en el Marketplace.
### No veo ninguna configuración de lanzamiento en el menú desplegable de la vista de Ejecución y Depuración. ¿Qué puede estar mal?
El problema más común es que no configuraste un archivo launch.json o que existe un error de sintaxis en dicho archivo. Alternativamente, puede que necesites abrir una carpeta, ya que la depuración sin carpeta no es compatible con las configuraciones de lanzamiento.

