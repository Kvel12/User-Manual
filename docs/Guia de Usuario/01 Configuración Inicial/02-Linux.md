# Linux

## Instalación

Consulta la página de Descargar Visual Studio Code para obtener una lista completa de opciones de instalación disponibles.

Al descargar y usar Visual Studio Code, aceptas los términos de la licencia y la declaración de privacidad.

### Distribuciones basadas en Debian y Ubuntu

La forma más fácil de instalar Visual Studio Code en distribuciones basadas en Debian/Ubuntu es descargar e instalar el paquete .deb (64 bits), ya sea a través del centro de software gráfico si está disponible, o mediante la línea de comandos con:

```bash
sudo apt install ./<file>.deb

# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
```

Ten en cuenta que también están disponibles otros binarios en la página de descarga de VS Code.

Al instalar el paquete .deb, se te pedirá que instales el repositorio apt y la clave de firma para habilitar la actualización automática mediante el gestor de paquetes del sistema. Para instalar automáticamente el repositorio apt y la clave de firma, como en un terminal no interactivo, ejecuta primero el siguiente comando:

```bash
echo "code code/add-microsoft-repo boolean true" | sudo debconf-set-selections
```

El repositorio apt y la clave también se pueden instalar manualmente con el siguiente script:

```bash
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
rm -f packages.microsoft.gpg
```

Luego, actualiza la caché de paquetes e instala el paquete usando:

```bash
sudo apt install apt-transport-https
sudo apt update
sudo apt install code # or code-insiders
```

### Distribuciones basadas en RHEL, Fedora y CentOS

Actualmente, ofrecemos la versión estable de 64 bits de VS Code en un repositorio yum. El siguiente script instalará la clave y el repositorio:

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null
```

Luego, actualiza la caché de paquetes e instala el paquete usando dnf (Fedora 22 y versiones superiores):

```bash
dnf check-update
sudo dnf install code # or code-insiders
```

O en versiones más antiguas usando yum:

```bash
yum check-update
sudo yum install code # or code-insiders
```

Debido al proceso de firma manual y al sistema que utilizamos para publicar, el repositorio yum puede retrasarse y no obtener la última versión de VS Code de inmediato.

### Snap

Visual Studio Code se distribuye oficialmente como un paquete Snap en la Snap Store:

![Get it from the Snap Store](/img/linux/snap-store.png)

Puedes instalarlo ejecutando:

```bash
sudo snap install --classic code # or code-insiders
```

Una vez instalado, el demonio Snap se encargará de actualizar automáticamente VS Code en segundo plano. Recibirás una notificación de actualización dentro del producto cada vez que haya una nueva versión disponible.

>**Nota:** Si `snap` no está disponible en tu distribución de Linux, consulta la siguiente guía de instalación de snap, que te ayudará a configurarlo.

Obtén más información sobre snaps en la Documentación oficial de Snap.

### Distribuciones basadas en openSUSE y SLE

El repositorio yum mencionado anteriormente también funciona para sistemas basados en openSUSE y SLE. El siguiente script instalará la clave y el repositorio:

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" |sudo tee /etc/zypp/repos.d/vscode.repo > /dev/null
```

Luego, actualiza la caché de paquetes e instala el paquete usando:

```bash
sudo zypper refresh
sudo zypper install code
```

### Paquete AUR para Arch Linux

Existe un paquete para VS Code mantenido por la comunidad en el Arch User Repository (AUR).

Para obtener más información sobre la instalación desde AUR, consulta la siguiente entrada en el wiki: Instalar Paquetes AUR.

### Paquete Nix para NixOS (o cualquier distribución de Linux que use el gestor de paquetes Nix)

Existe un paquete de VS Code mantenido por la comunidad en el repositorio nixpkgs. Para instalarlo usando Nix, establece la opción `allowUnfree` en `true` en tu archivo `config.nix` y ejecuta:

```bash
nix-env -i vscode
```

### Instalación manual del paquete .rpm

El paquete .rpm de VS Code (64 bits) también se puede descargar e instalar manualmente. Sin embargo, la actualización automática no funcionará a menos que se instale el repositorio mencionado anteriormente. Una vez descargado, se puede instalar utilizando tu gestor de paquetes, por ejemplo, con dnf:

```bash
sudo dnf install <file>.rpm
```

Ten en cuenta que también están disponibles otros binarios en la página de descarga de VS Code.

## Actualizaciones

VS Code se publica mensualmente y puedes ver cuándo está disponible una nueva versión consultando las notas de la versión. Si el repositorio de VS Code se instaló correctamente, el gestor de paquetes del sistema debería manejar las actualizaciones automáticas de la misma manera que otros paquetes en el sistema.

>**Nota:** Las actualizaciones son automáticas y se ejecutan en segundo plano para el paquete Snap.

## Node.js

Node.js es una plataforma y entorno de ejecución popular para construir y ejecutar aplicaciones JavaScript con facilidad. También incluye npm, un gestor de paquetes para módulos de Node.js. Verás que Node.js y npm se mencionan con frecuencia en nuestra documentación, y algunas herramientas opcionales de VS Code requieren Node.js (por ejemplo, el generador de extensiones de VS Code).

Si deseas instalar Node.js en Linux, consulta Instalar Node.js a través de un gestor de paquetes para encontrar el paquete de Node.js y las instrucciones de instalación adaptadas a tu distribución de Linux. También puedes instalar y gestionar múltiples versiones de Node.js utilizando el Node Version Manager.

Para aprender más sobre JavaScript y Node.js, consulta nuestro tutorial de Node.js, donde aprenderás a ejecutar y depurar aplicaciones Node.js con VS Code.

## Configurar VS Code como editor de texto predeterminado

### xdg-open

Puedes configurar el editor de texto predeterminado para los archivos de texto (text/plain) que usa `xdg-open` con el siguiente comando:

```bash
xdg-mime default code.desktop text/plain
```

### Sistema de alternativas de Debian

Las distribuciones basadas en Debian permiten configurar un editor predeterminado utilizando el sistema de alternativas de Debian, sin preocuparse por el tipo MIME. Puedes configurarlo ejecutando el siguiente comando y seleccionando code:

```bash
sudo update-alternatives --set editor /usr/bin/code
```

Si Visual Studio Code no aparece como una alternativa de editor, debes registrarlo:

```bash
sudo update-alternatives --install /usr/bin/editor editor $(which code) 10
```

## Windows como máquina de desarrollo Linux

Otra opción para el desarrollo en Linux con VS Code es utilizar una máquina con Windows y el Subsistema de Windows para Linux (WSL).

### Subsistema de Windows para Linux

Con WSL, puedes instalar y ejecutar distribuciones de Linux en Windows. Esto te permite desarrollar y probar tu código fuente en Linux mientras sigues trabajando localmente en una máquina con Windows. WSL es compatible con distribuciones de Linux como Ubuntu, Debian, SUSE y Alpine, disponibles en la Microsoft Store.

Cuando se combina con la extensión WSL, obtienes soporte completo para la edición y depuración en VS Code mientras trabajas en el contexto de una distribución Linux sobre WSL.

Consulta la documentación de Desarrollo en WSL para aprender más o prueba el tutorial introductorio de Trabajar en WSL.

## Preguntas comunes

### Problemas en máquinas virtuales de Azure

¿Estoy recibiendo un error "Running without the SUID sandbox"? 

Puedes ignorar este error con seguridad.

### Problemas con Debian y mover archivos a la papelera 

Si ves un error al eliminar archivos desde el Explorador de VS Code en el sistema operativo Debian, podría ser porque la implementación de la papelera que utiliza VS Code no está disponible.

Ejecuta estos comandos para solucionar este problema:

```bash
sudo apt-get install gvfs libglib2.0-bin
```

### Conflictos con paquetes de VS Code de otros repositorios

Algunas distribuciones, como Pop!_OS, proporcionan su propio paquete de código. Para asegurarte de que se use el repositorio oficial de VS Code, crea un archivo llamado `/etc/apt/preferences.d/code` con el siguiente contenido:

```
Package: code
Pin: origin "packages.microsoft.com"
Pin-Priority: 9999
```

### "Visual Studio Code no puede supervisar los cambios de archivos en este espacio de trabajo grande" (error ENOSPC)

Cuando veas esta notificación, significa que el sistema de supervisión de archivos de VS Code se está quedando sin manejadores de archivos, los cuales son necesarios para implementar la supervisión de archivos. Esto suele ocurrir al abrir un espacio de trabajo grande que contiene muchos archivos. Antes de ajustar los límites de la plataforma, asegúrate de que las carpetas potencialmente grandes, como las de Python `.venv`, estén agregadas en la configuración `files.watcherExclude` (más detalles a continuación). También es posible que otras aplicaciones en ejecución consuman tantos manejadores de archivos que no quede ninguno disponible para VS Code. En ese caso, podría ayudar cerrar esas otras aplicaciones.

Puedes ver el límite actual ejecutando:

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

El límite se puede aumentar a su máximo editando el archivo /etc/sysctl.conf (excepto en Arch Linux, lee más abajo) y añadiendo esta línea al final del archivo:

```bash
fs.inotify.max_user_watches=524288
```

El nuevo valor se puede cargar ejecutando  `sudo sysctl -p`.

Aunque 524,288 es el número máximo de archivos que se pueden vigilar, si estás en un entorno con restricciones de memoria, podrías considerar reducir el número. Cada vigilancia de archivo consume 1080 bytes, por lo que, si se consumen las 524,288 vigilancias, esto resultaría en un límite superior de alrededor de 540 MiB.

Las distribuciones basadas en Arch (incluido Manjaro) requieren que cambies un archivo diferente; sigue estos pasos en su lugar.

Otra opción es excluir directorios específicos del espacio de trabajo del vigilante de archivos de VS Code mediante la configuración `files.watcherExclude`. El valor predeterminado de `files.watcherExclude` excluye node_modules y algunas carpetas dentro de `.git`, pero puedes agregar otros directorios que no quieras que VS Code rastree.

```json
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
```

### No puedo ver caracteres chinos en Ubuntu

Estamos trabajando en una solución. Mientras tanto, abre el menú de la aplicación y luego selecciona **Archivo > Preferencias > Configuración**. En la sección **Editor de texto > Fuente**, establece "Familia de fuentes" en Droid Sans Mono, **Droid Sans Fallback**. Si prefieres editar directamente el archivo `settings.json`, establece `editor.fontFamily` de la siguiente manera:

```json
    "editor.fontFamily": "Droid Sans Mono, Droid Sans Fallback"
```

### El paquete git no está instalado

Este error puede aparecer durante la instalación y generalmente se debe a que las listas del gestor de paquetes están desactualizadas. Intenta actualizar las listas y volver a instalar:

```bash
# For .deb
sudo apt-get update

# For .rpm (Fedora 21 and below)
sudo yum check-update

# For .rpm (Fedora 22 and above)
sudo dnf check-update
```

### El comando code no trae la ventana al primer plano en Ubuntu

Al ejecutar code . en Ubuntu cuando VS Code ya está abierto en el directorio actual, VS Code no se lleva al primer plano. Esto es una característica del sistema operativo que se puede desactivar usando **ccsm** (CompizConfig Settings Manager).

```bash
# Install
sudo apt-get update
sudo apt-get install compizconfig-settings-manager

# Run
ccsm
```

Bajo **General > Opciones generales > Comportamiento de enfoque y elevación**, configura **"Nivel de prevención de enfoque"** a **"Desactivado"**. Recuerda que esta es una configuración a nivel de sistema operativo que se aplicará a todas las aplicaciones, no solo a VS Code.

### No se puede instalar el paquete .deb debido a "/etc/apt/sources.list.d/vscode.list: No such file or directory"

Esto puede ocurrir cuando el directorio `sources.list.d` no existe o no tienes acceso para crear el archivo. Para solucionar esto, intenta crear manualmente la carpeta y un archivo vacío `vscode.list` con los siguientes comandos:

```bash
sudo mkdir /etc/apt/sources.list.d
sudo touch /etc/apt/sources.list.d/vscode.list
```

### No se puede mover o redimensionar la ventana al usar X forwarding de una ventana remota

Si estás utilizando X forwarding para usar VS Code de manera remota, necesitarás usar la barra de título nativa para poder manipular correctamente la ventana. Puedes cambiar a la barra de título nativa configurando `window.titleBarStyle` a `native`.

### Usando la barra de título personalizada

La barra de título personalizada y los menús fueron habilitados por defecto en Linux durante varios meses. La barra de título personalizada ha sido un éxito en Windows, pero la respuesta de los usuarios en Linux ha sido diferente. Basándonos en los comentarios, hemos decidido hacer esta configuración opcional en Linux y dejar la barra de título nativa como la predeterminada.
La barra de título personalizada proporciona varios beneficios, incluidos un excelente soporte para temas y una mejor accesibilidad a través de la navegación con teclado y lectores de pantalla. Lamentablemente, estos beneficios no se traducen tan bien en la plataforma Linux. Linux tiene una variedad de entornos de escritorio y administradores de ventanas que pueden hacer que el tema de VS Code no se vea adecuado para los usuarios. Para aquellos usuarios que necesiten mejoras en accesibilidad, recomendamos habilitar la barra de título personalizada cuando se utilice el modo de accesibilidad con un lector de pantalla. Aún puedes configurar manualmente la barra de título con la opción **Window: Title Bar Style** (`setting(window.titleBarStyle)`) setting.

### Cursor roto en el editor con escala de pantalla habilitada

Debido a un problema en la versión de Electron (#14787), el cursor del ratón puede no renderizarse correctamente cuando la escala de pantalla está habilitada. Si notas que el cursor de texto habitual no se está mostrando correctamente en el editor, intenta volver a la barra de menú nativa configurando la opción `setting(window.titleBarStyle)` a `native`.

### El repositorio cambió su valor de origen

Si recibes un error similar al siguiente:

```
E: Repository '...' changed its 'Origin' value from '...' to '...'
N: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.
```

Usar `apt` en lugar de `apt-get` y se te pedirá que aceptes el cambio de origen:

```bash
sudo apt update
```
