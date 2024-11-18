---
Order: 3
Area: setup
TOCTitle: macOS
ContentId: EEADB50A-F5E3-41E9-89DA-35F165196691
PageTitle: Ejecutando Visual Studio Code en macOS
DateApproved: 29/10/2024
MetaDescription: Configura Visual Studio Code en macOS.
---
# macOS

## Instalación

1. Descargar Visual Studio Code para macOS.
2. Abre la lista de descargas del navegador y localiza la aplicación o archivo descargado.
3. Si es un archivo comprimido, extrae su contenido. Algunos navegadores permiten hacer doble clic para extraerlo, o selecciona el ícono de la 'lupa' en Safari.
4. Arrastra Visual Studio Code.app a la carpeta **Aplicaciones**, haciéndolo disponible en el Launchpad de macOS.
5. Abre VS Code desde la carpeta **Aplicaciones**, haciendo doble clic sobre el ícono.
6. Añade VS Code al Dock haciendo clic derecho sobre el ícono en el Dock, abriendo el menú contextual y eligiendo **Opciones**, **Mantener en el Dock**.

## Ejecución desde la línea de comandos

También puedes ejecutar VS Code desde la terminal escribiendo 'code' después de agregarlo al PATH:

* Lanza VS Code.
* Abre la **Paleta de Comandos** (kbstyle(Cmd+Shift+P)) y escribe 'shell command' para encontrar el comando **Shell Command: Instalar el comando 'code' en el PATH**.

![macOS shell commands](/img/mac/shell-command.png)

* Reinicia la terminal para que el nuevo valor de $PATH surta efecto. Podrás escribir 'code .' en cualquier carpeta para comenzar a editar archivos en esa carpeta.

>**Nota:** Si aún tienes el alias de código antiguo en tu archivo .bash_profile (o equivalente) de una versión anterior de VS Code, elimínalo y reemplázalo ejecutando el comando **Shell Command: Instalar el comando 'code' en el PATH**.

### Instrucciones manuales alternativas

En lugar de ejecutar el comando anterior, puedes agregar manualmente VS Code a tu PATH, para ello ejecuta los siguientes comandos:

```bash
cat << EOF >> ~/.bash_profile
# Agregar Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```


Inicia una nueva terminal para aplicar los cambios en tu .bash_profile.

**Nota**: La barra inclinada inicial \ es necesaria para evitar que $PATH se expanda durante la concatenación. Elimínala si deseas ejecutar el comando export directamente en la terminal.

**Nota**: Dado que zsh se convirtió en el shell predeterminado en macOS Catalina, ejecuta los siguientes comandos para agregar VS Code a tu PATH:

```zsh
cat << EOF >> ~/.zprofile
# Agregar Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```


## Soporte para Touch Bar

De forma predeterminada, VS Code agrega acciones para navegar en el historial del editor, así como la barra de herramientas completa de depuración para controlar el depurador desde tu Touch Bar:

![macOS Touch Bar](/img/mac/touchbar.gif)

## Protecciones de privacidad en Mojave

Después de actualizar a macOS Mojave, puedes ver diálogos que dicen "Visual Studio Code desea acceder a tu "calendario/contactos/fotos". Esto se debe a las nuevas protecciones de privacidad en Mojave y no es específico de VS Code. Los mismos diálogos pueden aparecer cuando se ejecutan otras aplicaciones. El diálogo se muestra una vez por cada tipo de dato personal y está bien elegir **No permitir**, ya que VS Code no necesita acceso a esas carpetas.

## Actualizaciones

VS Code publica versiones mensuales de lanzamientos y admite actualizaciones automáticas cuando hay una nueva versión disponible. Si VS Code te lo solicita, acepta la actualización más reciente y se instalará automáticamente (no necesitarás hacer nada más para obtener los últimos cambios).

>Nota: Puedes desactivar la actualización automática si prefieres actualizar VS Code en tu propio horario.

## Menú de preferencias

Puedes configurar VS Code a través de ajustes, temas de color y combinaciones de teclas personalizadas disponibles en el menú **Archivo** > **Preferencias**.

## Preguntas comunes

### ¿Por qué veo "Visual Studio Code desea acceder a tu calendario"?

Si estás ejecutando la versión de macOS Mojave, puedes ver diálogos que dicen "Visual Studio Code desea acceder a tu "calendario/contactos/fotos"." Esto se debe a las nuevas protecciones de privacidad en Mojave mencionadas arriba. Está bien elegir **No permitir**, ya que VS Code no necesita acceso a esas carpetas.

### VS Code no se actualiza

Si VS Code no se actualiza después de reiniciarse, podría estar bajo cuarentena por macOS. Sigue los pasos de este problema para resolverlo.

### ¿VS Code funciona en máquinas con Apple Silicon?

Sí, VS Code es compatible con las versiones de macOS Arm64 que pueden ejecutarse en Macs con chips Apple Silicon. Puedes instalar la versión Universal, que incluye tanto versiones para Intel como para Apple Silicon, o una de las versiones específicas para cada plataforma.
