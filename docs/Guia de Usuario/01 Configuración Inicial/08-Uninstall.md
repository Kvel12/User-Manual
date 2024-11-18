
# Desinstalar

Los pasos para desinstalar Visual Studio Code dependerán de tu plataforma (Windows, macOS o Linux) y la opción de instalación que hayas utilizado. Por ejemplo, en Windows, puedes usar los instaladores de Sistema o Usuario de Windows o descargar un archivo `.zip` y extraer su contenido en cualquier lugar de tu máquina.

En general, debes desinstalar VS Code como lo harías con cualquier otra aplicación de escritorio y seguir el flujo recomendado por tu plataforma para desinstalar software. A continuación, se proporciona una guía específica para cada plataforma, así como cómo limpiar completamente cualquier archivo de configuración restante de VS Code.

## Windows

### Instalador de Windows

Si instalaste VS Code mediante el Instalador de Windows, ya sea la versión de Usuario o del Sistema, utiliza el instalador para eliminar VS Code.

* Menú de inicio
  * Busca **Agregar o quitar programas** y encuentra Visual Studio Code en la lista de **Aplicaciones** > **Aplicaciones y características**.
  * Selecciona **Desinstalar** desde el menú desplegable de acciones en el lado derecho (tres puntos verticales).
  * Sigue las indicaciones para desinstalar VS Code.
* Panel de Control
  * Bajo **Programas**, selecciona el enlace **Desinstalar un programa**.
  * Encuentra la entrada de Visual Studio Code, haz clic derecho y selecciona la opción **Desinstalar**.
  * Sigue las indicaciones para desinstalar VS Code.

### Instalación desde archivo .zip

Si instalaste VS Code en Windows descargando y extrayendo uno de los archivos `.zip` desde el sitio web de Visual Studio Code, puedes desinstalar eliminando la carpeta donde extrajiste el contenido del `.zip`.

## macOS

Para desinstalar VS Code en macOS, abre **Finder** y ve a **Aplicaciones**. Haz clic derecho en la aplicación Visual Studio Code y selecciona **Mover a la Papelera**.

## Linux

Para desinstalar VS Code en Linux, debes usar la opción de desinstalar o eliminar de tu gestor de paquetes. El comando exacto variará dependiendo de qué gestor de paquetes hayas utilizado (por ejemplo, `apt-get`, `rpn`, `dnf`, `yum`, etc.).

Los nombres de los paquetes de VS Code son:

* `code` - Versión estable de VS Code
* `code-insiders` - Versión Insiders de VS Code

Por ejemplo, si instalaste VS Code mediante el paquete Debian (`.deb`) y el gestor de paquetes `apt-get`, ejecutarías el siguiente comando:

```bash
sudo apt-get remove code
```

# Donde `code` es el nombre del paquete Debian de VS Code.

## Desinstalación limpia

Si deseas eliminar todos los datos de usuario después de desinstalar VS Code, puedes eliminar las carpetas de datos de usuario `Code` y `.vscode`. Esto te devolverá al estado anterior a la instalación de VS Code. Esto también se puede usar para restablecer todas las configuraciones si no deseas desinstalar VS Code.

Las ubicaciones de las carpetas variarán según tu plataforma:

* **Windows** - Elimina `%APPDATA%\Code` y `%USERPROFILE%\.vscode`.
* **macOS** - Elimina `$HOME/Library/Application Support/Code` y `~/.vscode`.
* **Linux** - Elimina `$HOME/.config/Code` y `~/.vscode`.
