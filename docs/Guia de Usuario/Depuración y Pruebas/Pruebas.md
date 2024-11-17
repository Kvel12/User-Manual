# Pruebas

Las pruebas de software son un aspecto crucial del proceso de desarrollo. Ayudan a garantizar que tu código funcione como se espera y a detectar errores temprano en el ciclo de desarrollo. Visual Studio Code ofrece un conjunto rico de funciones para realizar pruebas en tu código. Puedes descubrir automáticamente pruebas en tu proyecto, ejecutarlas, depurarlas y obtener resultados de cobertura de pruebas.

En este artículo, aprenderás cómo comenzar con las pruebas en VS Code, descubrir extensiones populares para pruebas y explorar las capacidades relacionadas con este tema.

![testinghero](/img/user-guide/testing/testing-hero.png)

## Introducción a las pruebas en VS Code

El soporte para pruebas en Visual Studio Code es específico del lenguaje y depende de las extensiones instaladas. Las extensiones de lenguaje o extensiones independientes pueden implementar funciones de prueba para un lenguaje o marco de pruebas en particular. Para comenzar a realizar pruebas en VS Code, primero instala la extensión adecuada para tu proyecto.

Una vez que hayas instalado la extensión, puedes comenzar a descubrir y ejecutar pruebas en tu proyecto. El Explorador de Pruebas ofrece un lugar centralizado para gestionar y ejecutar pruebas.

Después de ejecutar tus pruebas, puedes ver los resultados en la vista del Explorador de Pruebas, en los márgenes del editor y en el panel de resultados de pruebas. Para diagnosticar problemas, también puedes ejecutar y depurar pruebas, además de establecer breakpoints en el código de prueba y en el de la aplicación.

También es posible ejecutar pruebas con cobertura (coverage) para verificar qué partes de tu código están siendo probadas. La cobertura de pruebas te ayuda a identificar áreas que no están cubiertas, asegurando que tus pruebas sean exhaustivas. Los resultados de la cobertura pueden visualizarse en distintas vistas del editor y en el panel de cobertura de pruebas.

Para optimizar tu flujo de trabajo, puedes crear tareas para ejecutar pruebas y, opcionalmente, configurarlas para que se ejecuten en segundo plano con cada cambio en el código.

## Extensiones para pruebas

Puedes encontrar extensiones que soporten pruebas explorando el Visual Studio Marketplace. También puedes acceder a la vista de extensiones en VS Code (atajo: Ctrl+Shift+X) y filtrar las extensiones utilizando la categoría Testing.

Estas extensiones permiten agregar soporte para diferentes lenguajes o marcos de prueba, ampliando las capacidades de VS Code para descubrir, ejecutar y depurar pruebas de manera eficiente en tus proyectos.

- [Python] (https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Test Runner for Java] (https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)
- [Go] (https://marketplace.visualstudio.com/items?itemName=golang.Go)
- [C# Dev Kit] (https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)
- [Playwright Test for VSCode] (https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Detección automática de pruebas en el Test Explorer

La vista Test Explorer es un lugar centralizado para gestionar y ejecutar pruebas. Puedes acceder a esta vista seleccionando el icono de vaso de precipitados en la Barra de Actividades o utilizando el comando Testing: Focus on Test Explorer View en la Paleta de Comandos (atajo: Ctrl+Shift+P).

Si tu proyecto contiene pruebas, Test Explorer las detectará automáticamente y las mostrará en tu espacio de trabajo. Por defecto, las pruebas detectadas se presentan en una vista de árbol que refleja la estructura jerárquica de tus pruebas, lo que facilita su navegación y ejecución.

![testexplorerview](/img/user-guide/testing/test-explorer-view.png)

Puedes ejecutar pruebas desde el Test Explorer seleccionando el botón de reproducción (play button). Para más detalles sobre cómo ejecutar y depurar pruebas, consulta la sección Run and debug tests.

La vista en árbol muestra el estado de los resultados de las pruebas mediante indicadores visuales. Además, te permite ejecutar y depurar pruebas, así como navegar directamente al código de las mismas.

![testexplorerviewtestresults](/img/user-guide/testing/test-explorer-view-test-results.png)

> Consejo: Puedes navegar al código de la prueba haciendo doble clic sobre ella en la vista del Test Explorer. Si seleccionas una prueba que falló, el editor abrirá el archivo de la prueba, resaltará la prueba fallida y mostrará el mensaje de error.

Si tienes muchas pruebas, puedes usar las opciones de filtrado para encontrar rápidamente las que te interesen. El botón de Filter permite filtrar las pruebas por estado o mostrar solo las pruebas del archivo actual. También puedes utilizar el cuadro de búsqueda para buscar pruebas específicas por nombre o usar el símbolo @ para buscar por estado.

![testexplorerviewfiltering](/img/user-guide/testing/test-explorer-view-filtering.png)

En el menú More Actions, puedes acceder a funcionalidades adicionales, como opciones de ordenación y visualización.

Si agregas nuevas pruebas o realizas cambios en tus pruebas, usa el botón Refresh Tests para actualizar la lista de pruebas en el Test Explorer. También puedes utilizar el comando Test Explorer: Reload tests en la Command Palette (Ctrl+Shift+P).

> Nota: Dependiendo de la extensión de pruebas que utilices, es posible que primero tengas que configurar el marco de pruebas o el ejecutor de pruebas para que descubra las pruebas en tu proyecto. Consulta la documentación de la extensión de pruebas para obtener más información.

## Ejecutar y depurar pruebas

Después de que se descubran las pruebas en tu proyecto, puedes ejecutar y depurar las pruebas, y ver los resultados directamente dentro de VS Code. Tienes varias opciones para ejecutar y depurar pruebas:

- Usa las acciones en la vista Test Explorer para ejecutar todas o una subserie de pruebas.
- Usa los controles en el margen del editor para ejecutar pruebas mientras editas tu código de prueba.
- Usa los comandos para ejecutar pruebas desde la Command Palette (Ctrl+Shift+P).

En el Test Explorer, utiliza los controles en el encabezado de la sección para ejecutar o depurar todas las pruebas. También puedes ejecutar o depurar pruebas individuales seleccionando el icono de reproducción o depuración junto al nombre de la prueba. En la vista en árbol, cuando seleccionas ejecutar o depurar en un nodo específico, se ejecutan o depuran todas las pruebas bajo ese nodo.

![rundebugteststestexplorer](/img/user-guide/testing/run-debug-tests-test-explorer.png)

Mientras ves tu código de prueba en el editor, puedes usar el control de reproducción en el margen (gutter) para ejecutar la prueba en la posición actual del cursor. Haz clic derecho en el control del margen para ver otras acciones, como depurar la prueba.

![rundebugtestseditorgutter](/img/user-guide/testing/run-debug-tests-editor-gutter.png)

> Consejo: puedes configurar la acción de prueba predeterminada para el control del margen (gutter) utilizando la configuración testing.defaultGutterClickAction.

Después de ejecutar una prueba, el margen del editor muestra el estado de la prueba.

Cuando ejecutas pruebas, el estado de los resultados de las pruebas se muestra en la vista de Test Explorer y en el margen del editor. Los resultados de las pruebas están codificados por colores para indicar el estado de la prueba (aprobada o fallida). Si una prueba falla, el mensaje de error de la prueba se muestra como una capa superpuesta  en el editor.

Usa el botón Show Output en el Test Explorer para ver la salida de la prueba en el panel de Test Results.

![testresultspanel](/img/user-guide/testing/test-results-panel.png)

Puedes acceder a los comandos del Explorador de Pruebas, como ejecutar o depurar pruebas, a través de la Paleta de Comandos (Ctrl+Shift+P). Escribe Test Explorer: para encontrar los comandos correspondientes.

## Cobertura de Pruebas

La cobertura de pruebas es una medida de cuánto de tu código está cubierto por tus pruebas. Te ayuda a identificar las áreas de tu código que no están siendo probadas. VS Code admite la ejecución de pruebas con cobertura y la visualización de los resultados de cobertura, siempre que la extensión de pruebas correspondiente soporte esta funcionalidad.

Al igual que con la ejecución y depuración de pruebas, puedes ejecutar pruebas con cobertura utilizando las acciones en el Explorador de Pruebas, el gutter del editor o los comandos en la Paleta de Comandos (Ctrl+Shift+P).

![runtestswithcoverage](/img/user-guide/testing/run-tests-with-coverage.png)

## Ejecutar pruebas con cobertura

Después de ejecutar las pruebas con cobertura, puedes ver los resultados de la cobertura en diferentes ubicaciones:

* En la vista de Cobertura de Pruebas.

  Una vista en árbol muestra las pruebas con su porcentaje de cobertura. Un indicador de color también proporciona una pista visual sobre el porcentaje de cobertura. Pasa el cursor sobre cada línea para ver más detalles sobre los resultados de la cobertura.

  ![testcoverageview](/img/user-guide/testing/test-coverage-view.png)

* Como una capa superpuesta en el editor

  Para los archivos de código que tienen cobertura de pruebas, el editor muestra una capa superpuesta de color en el margen para indicar qué líneas están cubiertas por pruebas y cuáles no. Al pasar el cursor sobre el margen, observa que, para las líneas cubiertas, también hay un indicador del número de veces que la línea fue ejecutada.

  Además, puedes seleccionar el botón Mostrar Cobertura en Línea en la barra de título del editor o usar el comando Test: Show Inline Coverage (Ctrl+; Ctrl+Shift+I) para alternar la capa superpuesta de cobertura.

  ![viewcoverageineditor](/img/user-guide/testing/view-coverage-in-editor.png)

* En la vista Explorador, que muestra el porcentaje de cobertura de tus archivos de código.

  La vista Explorador muestra el porcentaje de cobertura de tus archivos de código. Al pasar el cursor sobre un archivo o nodo en el Explorador, puedes ver más detalles sobre los resultados de la cobertura.

  ![viewcoverageinexplorer](/img/user-guide/testing/view-coverage-in-explorer.png)

* En el editor de diferencias

  Si tienes abierto un editor de diferencias, los resultados de la cobertura también se muestran en este, de forma similar a cómo se presentan en el editor estándar.

## Integración de tareas

Las tareas en VS Code pueden configurarse para ejecutar scripts e iniciar procesos dentro del entorno, sin necesidad de utilizar la línea de comandos o escribir nuevo código. En VS Code, puedes definir una tarea de prueba predeterminada que ejecute tus pruebas y, opcionalmente, crear atajos de teclado para ejecutarlas.

Utiliza el comando Tasks: Configure Default Test Task para configurar la tarea de prueba predeterminada. VS Code intenta detectar automáticamente la tarea de prueba, por ejemplo, basándose en tu archivo package.json. Después de seleccionar la tarea de prueba predeterminada, se abrirá el archivo tasks.json para que puedas personalizarla.

El siguiente fragmento de código muestra un archivo tasks.json que especifica el comando node --test como la tarea de prueba predeterminada:

```json
{
  "version": "2.0.0",
  "tasks": [
	{
  	"type": "npm",
  	"script": "test",
  	"group": {
    	"kind": "test",
    	"isDefault": true
  	},
  	"problemMatcher": [],
  	"label": "npm: test",
  	"detail": "node --test src/tests/**.js"
	}
  ]
}
```

Para ejecutar la tarea de prueba, utiliza el comando Tasks: Run Test Task o crea un atajo de teclado para este comando.


## Configuración de pruebas

- Hay varias configuraciones que puedes personalizar para ajustar la experiencia de pruebas en VS Code. Cada extensión de lenguaje puede proporcionar configuraciones adicionales específicas para las pruebas en ese lenguaje. A continuación, se presentan algunas configuraciones comunes que puedes ajustar:
- testing.countBadge: Controla el contador en el icono de Pruebas en la barra de actividades.
- testing.gutterEnabled: Configura si se muestra el control de pruebas en la capa superpuesta del editor.
- testing.defaultGutterClickAction: Configura la acción predeterminada al seleccionar el control de pruebas en la capa superpuesta.
- testing.coverageBarThresholds: Configura los colores para los umbrales de la barra de cobertura en la vista de cobertura de pruebas.
- testing.displayedCoveragePercent: Configura qué valor porcentual se muestra en la vista de cobertura de pruebas (total, declaración o mínimo).
- testing.showCoverageInExplorer: Configura si se muestra el porcentaje de cobertura en la vista del Explorador.

Puedes encontrar todas las configuraciones relacionadas con pruebas en el editor de Configuración (Ctrl+,).
