# Configura Visual Studio Code

Poner en marcha Visual Studio Code es rápido y sencillo. Es una descarga pequeña, por lo que puedes instalarlo en cuestión de minutos y probar VS Code.

## Multiplataforma

VS Code es un editor de código gratuito que funciona en macOS, Linux y Windows.

Sigue las guías específicas para tu plataforma a continuación:

* [macOS](/docs/Guia%20de%20Usuario/01%20Configuraci%C3%B3n%20Inicial/macOS)
* [Linux](/docs/Guia%20de%20Usuario/01%20Configuración%20Inicial/Linux)
* [Windows](/docs/Guia%20de%20Usuario/01%20Configuración%20Inicial/Windows)

VS Code es ligero y debería funcionar en la mayoría de los equipos y versiones de plataformas disponibles. Puedes revisar los Requisitos del Sistema para comprobar si la configuración de tu computadora es compatible.

## Ciclo de actualizaciones

VS Code lanza una nueva versión cada mes con nuevas funciones y correcciones importantes de errores. La mayoría de las plataformas admiten actualizaciones automáticas y se te pedirá que instales la nueva versión cuando esté disponible. También puedes buscar actualizaciones manualmente en **Ayuda** > **Buscar actualizaciones** en Linux y Windows, o en **Code** > **Buscar actualizaciones** en macOS.

> Nota: Puedes desactivar las actualizaciones automáticas si prefieres actualizar VS Code según tu propio cronograma.

## Build nocturna de Insiders

Si deseas probar nuestras builds nocturnas para ver nuevas funciones antes de su lanzamiento o verificar correcciones de errores, puedes instalar nuestra build de Insiders La build de Insiders se instala junto con la build estable mensual y puedes usar ambas en la misma máquina. Esta build es la misma que el equipo de desarrollo de VS Code utiliza diariamente, y agradecemos mucho que la pruebes y des tu opinión.

## Modo portátil

Visual Studio Code admite la instalación en modo portátil. Este modo permite que todos los datos creados y mantenidos por VS Code se guarden cerca del propio editor, de forma que puedan moverse entre entornos, por ejemplo, en una unidad USB. Consulta la documentación sobre el Modo Portátil de VS Code para más detalles.

## Componentes adicionales

VS Code es, ante todo, un editor y se enorgullece de su pequeño tamaño. A diferencia de los IDE tradicionales que incluyen todo, puedes ajustar tu instalación a las tecnologías de desarrollo que te interesen. Asegúrate de leer el tema de Componentes Adicionales después de leer las guías de la plataforma para aprender cómo personalizar tu instalación de VS Code.

## Extensiones

Las extensiones de VS Code permiten que terceros agreguen soporte para:

* Lenguajes - C++, C#, Go, Java, Python.
* Herramientas - ESLint, JSHint, PowerShell.
* Depuradores - PHP XDebug.
* Mapas de teclas - Vim, Sublime Text, IntelliJ, Emacs, Atom, Brackets, Eclipse.

Las extensiones se integran en la interfaz, los comandos y el sistema de tareas de VS Code, por lo que te resultará fácil trabajar con diferentes tecnologías mediante una interfaz compartida. Consulta el Marketplace de extensiones de VS Code para ver lo que está disponible.

## Próximos pasos

Una vez que hayas instalado y configurado VS Code, estos temas te ayudarán a aprender más sobre el editor:

* Componentes adicionales - Aprende a instalar Git, Node.js, TypeScript y herramientas como Yeoman.
* Interfaz de usuario - Una orientación rápida sobre VS Code.
* Edición básica - Aprende sobre el potente editor de VS Code.
* Navegación por código - Muévete rápidamente por tu código fuente.
* Depuración - Depura tu código directamente en el editor de VS Code.
* Soporte para servidores proxy - Configura tus ajustes de proxy.

Si deseas algo rápido, prueba el tutorial de Node.js, que te permitirá depurar una aplicación web de Node.js con VS Code en minutos.

## Preguntas comunes

### ¿Cuáles son los requisitos del sistema para VS Code?

Tenemos una lista de Requisitos del Sistema.

### ¿Cuánto ocupa VS Code?

VS Code es una descarga pequeña (< 200 MB) y ocupa menos de 500 MB en disco, por lo que puedes instalarlo y probarlo rápidamente.

### ¿Cómo creo y ejecuto un nuevo proyecto?

VS Code no incluye un diálogo tradicional de **Archivo** > **Nuevo proyecto** ni plantillas preinstaladas. Tendrás que agregar componentes adicionales y generadores según tus intereses de desarrollo. Con herramientas como Yeoman y los módulos disponibles en el gestor npm, encontrarás plantillas y herramientas adecuadas para tus proyectos.

### ¿Cómo sé qué versión estoy usando?

En Linux y Windows, selecciona **Ayuda** > **Acerca de**. En macOS, usa **Code** > **Acerca de Visual Studio Code**.

### ¿Por qué VS Code dice que mi instalación no es compatible?

VS Code ha detectado que algunos archivos de instalación han sido modificados, posiblemente por una extensión. Reinstalar VS Code reemplazará los archivos afectados. Consulta nuestro tema de FAQ para más detalles.

### ¿Cómo puedo hacer una desinstalación "limpia" de VS Code?

Si deseas eliminar todos los datos de usuario después de desinstalar VS Code, puedes borrar las carpetas `Code` y `.vscode`. Esto restaurará el estado inicial previo a la instalación de VS Code y puede utilizarse también para restablecer todas las configuraciones.

Las ubicaciones de las carpetas varían según la plataforma:

* **Windows** - Borra `%APPDATA%\Code` y `%USERPROFILE%\.vscode`.
* **macOS** - Borra `$HOME/Library/Application Support/Code` y `~/.vscode`.
* **Linux** - Borra `$HOME/.config/Code` y `~/.vscode`.
