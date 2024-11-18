# Workspaces
## ¿Qué es un "workspace" en VS Code?

Un workspace (espacio de trabajo) en Visual Studio Code es la colección de una o más carpetas abiertas en una ventana (instancia) de VS Code. En la mayoría de los casos, tendrás una sola carpeta abierta como espacio de trabajo. Sin embargo, dependiendo de tu flujo de trabajo de desarrollo, puedes incluir más de una carpeta utilizando una configuración avanzada llamada Multi-root workspaces (espacios de trabajo de múltiples raíces).

El concepto de un espacio de trabajo permite que VS Code:

- Configure ajustes que solo se aplican a una carpeta o carpetas específicas, pero no a otras.
- Guarde configuraciones de tareas y de depuración que son válidas únicamente dentro del contexto de ese espacio de trabajo.
- Almacene y restaure el estado de la interfaz de usuario asociado a ese espacio de trabajo (por ejemplo, los archivos abiertos).
- Habilite o deshabilite extensiones de manera selectiva solo para ese espacio de trabajo.

En la documentación, problemas y discusiones de la comunidad de VS Code, es común que se usen los términos folder (carpeta) y workspace (espacio de trabajo) de manera intercambiable. Piensa en un espacio de trabajo como la raíz de un proyecto que incluye capacidades y conocimientos adicionales dentro de VS Code.

> Nota: También es posible abrir VS Code sin un espacio de trabajo. Por ejemplo, al abrir una nueva ventana seleccionando un archivo desde el menú de archivos de tu sistema operativo, no estarás dentro de un espacio de trabajo. En este modo, algunas capacidades de VS Code estarán limitadas, aunque aún puedes abrir y editar archivos de texto.

## Cómo abrir un "workspace" de VS Code
Usando el menú de archivo:
1. Ve a Archivo > Abrir carpeta... en la barra de menús.
2. Selecciona la carpeta que deseas abrir como tu espacio de trabajo.

Desde una terminal:
1. Si inicias VS Code desde una terminal, puedes pasar la ruta de la carpeta como argumento al comando code.   
Por ejemplo, para abrir la carpeta actual (.), usa el siguiente comando:
```bash
code .
```

## Espacios de trabajo de una sola carpeta
No necesitas hacer nada para que una carpeta se convierta en un espacio de trabajo de VS Code, aparte de abrir la carpeta con VS Code. Una vez que abres una carpeta, VS Code automáticamente realiza un seguimiento de la configuración, como tus archivos abiertos o el diseño del editor. Cuando vuelvas a abrir esa carpeta en VS Code, el editor estará tal como lo dejaste previamente.

También puedes agregar otras configuraciones específicas de la carpeta, como configuraciones del espacio de trabajo (en lugar de configuraciones globales de usuario), definiciones de tareas y archivos de lanzamiento de depuración (ver más abajo en la sección de configuraciones del espacio de trabajo).

![singlefolderworkspace](/img/user-guide/workspaces/single-folder-workspace.png)
Ejemplo de un espacio de trabajo de una sola carpeta abierto dentro de VS Code

## Espacios de trabajo de múltiples raíces

Los espacios de trabajo de múltiples raíces son una capacidad avanzada de VS Code que te permite configurar varias carpetas distintas para que formen parte del mismo espacio de trabajo. En lugar de abrir una carpeta como espacio de trabajo, abres un archivo JSON `<name>`.code-workspace que enumera todas las carpetas del espacio de trabajo. Por ejemplo:

```json
{
  "folders": [
	{
  	"path": "my-folder-a"
	},
	{
  	"path": "my-folder-b"
	}
  ]
}
```

![multirootworkspace](/img/user-guide/workspaces/multi-root-workspace.png)

Ejemplo de un espacio de trabajo de múltiples raíces abierto en VS Code.

> Nota: La diferencia visual entre tener una carpeta abierta o abrir un archivo .code-workspace puede ser sutil. Para indicarte que se ha abierto un archivo .code-workspace, algunas áreas de la interfaz de usuario (por ejemplo, la raíz del Explorador de Archivos) muestran un sufijo adicional "(Workspace)" junto al nombre.

### Espacios de trabajo multi-raíz sin título
Puedes agregar o quitar carpetas en tu espacio de trabajo de manera flexible. Comienza abriendo una carpeta en VS Code y, luego, puedes agregar más carpetas según lo necesites.

![addremovefolderinworkspace](/img/user-guide/workspaces/add-remove-folder-in-workspace.png)

Menú contextual del Explorador de archivos para agregar o eliminar una carpeta en un espacio de trabajo

A menos que ya hayas abierto un archivo .code-workspace, la primera vez que agregas una segunda carpeta a un espacio de trabajo, VS Code crea automáticamente un espacio de trabajo sin título. En segundo plano, VS Code mantiene automáticamente un archivo untitled.code-workspace que contiene todas las carpetas y configuraciones del espacio de trabajo de tu sesión actual. El espacio de trabajo permanece sin título hasta que decidas guardarlo en el disco.

![untitledworkspace](/img/user-guide/workspaces/untitled-workspace.png)

Un espacio de trabajo sin título abierto en VS Code

> Nota: No hay diferencia entre un espacio de trabajo sin título y un espacio de trabajo guardado, más allá del hecho de que un espacio de trabajo sin título se crea automáticamente para tu comodidad y siempre se restaura hasta que lo guardes. VS Code elimina automáticamente los espacios de trabajo sin título (después de pedir confirmación) cuando cierras una ventana en la que se ha abierto un espacio de trabajo sin título.

## Configuración del espacio de trabajo

Las configuraciones del espacio de trabajo te permite configurar ajustes en el contexto del espacio de trabajo que has abierto. Las configuraciones del espacio de trabajo siempre sobrescriben las configuraciones globales del usuario. Se almacenan físicamente en un archivo JSON y su ubicación depende de si abriste una carpeta como espacio de trabajo o si abriste un archivo .code-workspace.
### Configuraciones del espacio de trabajo de una sola carpeta

Las configuraciones del espacio de trabajo se almacenan en .vscode/settings.json cuando abres una carpeta como espacio de trabajo.

![singlefoldersettings](/img/user-guide/workspaces/single-folder-settings.png)

El editor de configuraciones cuando una carpeta está abierta como espacio de trabajo.

### Configuraciones de espacio de trabajo con múltiples raíces

Cuando abres un archivo .code-workspace como espacio de trabajo, todas las configuraciones del espacio de trabajo se agregan al archivo .code-workspace.

Aún puedes configurar configuraciones por carpeta raíz, y el editor de configuraciones presentará un tercer alcance de configuración llamado Configuración de la carpeta:

![multirootsettings](/img/user-guide/workspaces/multi-root-settings.png)

El editor de configuraciones cuando se abre un espacio de trabajo con múltiples raíces

## Tareas de espacio de trabajo y configuraciones de inicio

De manera similar a cómo las configuraciones de espacio de trabajo son específicas para un espacio de trabajo, las tareas y las configuraciones de inicio también pueden estar limitadas a un espacio de trabajo.

Dependiendo de si tienes una carpeta abierta como espacio de trabajo o un archivo .code-workspace, la ubicación de las configuraciones de tareas y configuraciones de inicio estará dentro de la carpeta .vscode o dentro del archivo .code-workspace. Además, las configuraciones de tareas y de inicio siempre se pueden definir a nivel de carpeta, incluso cuando hayas abierto un archivo .code-workspace.

# Preguntas comunes
### ¿Cuál es el beneficio de un espacio de trabajo multi-root en lugar de una carpeta?

La ventaja más evidente es que un espacio de trabajo multi-root te permite trabajar con varios proyectos que pueden no estar almacenados dentro de la misma carpeta principal en el disco. Puedes elegir carpetas de cualquier lugar para agregar al espacio de trabajo.

Incluso si principalmente estás trabajando en un proyecto basado en una sola carpeta, puedes beneficiarte al usar archivos .code-workspace. Puedes almacenar varios archivos .code-workspace dentro de la carpeta para proporcionar una vista filtrada del proyecto según el escenario (por ejemplo, client.code-workspace, server.code-workspace para filtrar carpetas no relacionadas en el Explorador de Archivos). Dado que los archivos .code-workspace admiten rutas relativas para la sección de carpetas, estos archivos de espacio de trabajo funcionan para todos, independientemente de dónde se almacene la carpeta.

Finalmente, si para algunos proyectos deseas aplicar el mismo conjunto de configuraciones de espacio de trabajo o tareas/configuraciones de inicio, considera agregar estos en un archivo .code-workspace y agregar o quitar estas carpetas de ese espacio de trabajo.

### ¿Por qué VS Code restaura todos los espacios de trabajo no guardados al reiniciar?

Los espacios de trabajo no guardados están diseñados para ser algo que debes decidir explícitamente si mantener o no. La primera vez que se crea un espacio de trabajo no guardado, VS Code agrega las carpetas especificadas en el archivo de espacio de trabajo y también agrega todas las configuraciones de espacio de trabajo existentes. Estos datos de usuario siempre se restauran y se muestran en una ventana de VS Code hasta que el espacio de trabajo no guardado se guarda o se elimina.

### ¿Cómo elimino un espacio de trabajo no guardado?
Para eliminar un espacio de trabajo no guardado, puedes cerrar la ventana de VS Code que lo contiene. VS Code te pedirá confirmación para eliminar el espacio de trabajo no guardado. Si decides eliminarlo, se borrará automáticamente.

### ¿Puedo usar un espacio de trabajo de múltiples carpetas sin carpetas?

Es posible dejar vacía la sección de carpetas de un archivo .code-workspace, de modo que termines con una instancia de VS Code que no muestre ninguna carpeta raíz. Aún así, puedes almacenar configuraciones de espacio de trabajo e incluso tareas o configuraciones de lanzamiento en este caso.

### ¿VS Code soporta proyectos o soluciones?

VS Code no tiene el concepto de "proyecto" o "solución" tal como se define en otras herramientas de desarrollo, como el IDE de Visual Studio. Puede que veas el término "proyecto" en la documentación de VS Code, pero generalmente se refiere a "la cosa en la que estás trabajando". Dependiendo de tu lenguaje de programación o framework, el propio conjunto de herramientas podría soportar algo llamado "proyecto" para ayudar a definir configuraciones de compilación o enumerar los archivos incluidos.



