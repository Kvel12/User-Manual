# Windows

## Instalación

1. Descarga el instalador de Visual Studio Code para Windows.
2. Una vez descargado, ejecuta el instalador (VSCodeUserSetup-version.exe). Esto solo tomará un minuto.
3. Por defecto, VS Code se instala en `C:\Users\{NombreDeUsuario}\AppData\Local\Programs\Microsoft VS Code`.

Alternativamente, también puedes descargar un archivo Zip, extraerlo y ejecutar Code desde ahí.

>**Consejo:** El instalador añadirá Visual Studio Code a tu `%PATH%`, así que desde la consola puedes escribir 'code .' para abrir VS Code en esa carpeta. Necesitarás reiniciar la consola después de la instalación para que el cambio en la variable ambiental `%PATH%` tenga efecto.

## Instalación para usuario versus para sistema

VS Code ofrece dos tipos de instalación: a nivel de **usuario** y a nivel de **sistema**.

La instalación para usuario no requiere privilegios de Administrador, ya que la ubicación estará en la carpeta Local AppData (`LOCALAPPDATA`) del usuario. Dado que no requiere elevación, la instalación para usuario permite una experiencia de actualización más fluida en segundo plano. Esta es la forma recomendada para instalar VS Code en Windows.

>**Nota:** Si ejecutas VS Code como Administrador en una instalación de usuario, las actualizaciones se desactivarán.

La instalación para sistema requiere privilegios de Administrador para ejecutarse y colocará la instalación en la carpeta Program Files del sistema. El flujo de actualización dentro del producto también requerirá elevación, lo que lo hace menos fluido que la instalación para usuario. Por otro lado, instalar VS Code usando la instalación para sistema significa que estará disponible para todos los usuarios del sistema.

Consulta la página de Descargar Visual Studio Code para una lista completa de las opciones de instalación disponibles.

## Actualizaciones

VS Code lanza nuevas versiones mensualmente y soporta actualizaciones automáticas cuando hay una nueva versión disponible. Si VS Code te lo indica, acepta la nueva actualización y se instalará (no necesitarás hacer nada más para obtener la última versión).

>**Nota:** Puedes deshabilitar las actualizaciones automáticas si prefieres actualizar VS Code en tu propio horario.

## Subsistema de Windows para Linux

Windows es un sistema operativo popular y puede ser un excelente entorno de desarrollo multiplataforma. Esta sección describe características multiplataforma como el Subsistema de Windows para Linux (WSL) y el nuevo Windows Terminal.

### Versión reciente de Windows

Asegúrate de estar en una versión reciente de Windows 10. Revisa **Configuración** > **Actualización de Windows** para ver si estás al día.

### Windows como máquina de desarrollo

Con WSL, puedes instalar y ejecutar distribuciones de Linux en Windows. Esto te permite desarrollar y probar tu código fuente en Linux mientras sigues trabajando localmente en tu máquina con Windows.

Cuando se combina con la extensión WSL, obtienes soporte completo de edición y depuración de VS Code mientras se ejecuta en el contexto de WSL.

Consulta la documentación de Desarrollo en WSL para obtener más información o prueba el Tutorial de trabajo en WSL introductorio.

### Nuevo Windows Terminal

Disponible en la Microsoft Store, el Windows Terminal te permite abrir fácilmente PowerShell, el Símbolo del sistema y terminales WSL en una interfaz de múltiples pestañas.

## Preguntas comunes

### ¿Qué argumentos de línea de comandos son soportados por el instalador de Windows?

VS Code usa Inno Setup para crear su paquete de instalación para Windows. Así, todos los conmutadores de línea de comandos de Inno Setup están disponibles para su uso.

Adicionalmente, puedes evitar que el instalador lance VS Code después de completarse con `/mergetasks=!runcode`.

### El desplazamiento es lento y no suave

En algunos dispositivos, el desplazamiento en el editor no es suave sino que tiene retrasos. Si notas este problema, asegúrate de instalar la actualización de Windows 10 de octubre de 2018, donde se soluciona este problema.

### Tengo problemas con el instalador

Intenta usar el archivo zip en lugar del instalador. Para usar esto, descomprime VS Code en la carpeta `AppData\Local\Programs`.

>**Nota:** Cuando VS Code se instala a través de un archivo Zip, necesitarás actualizarlo manualmente para cada nueva versión.

### Faltan iconos

Instalé Visual Studio Code en mi máquina con Windows 8. ¿Por qué no aparecen algunos iconos en el espacio de trabajo y el editor?

VS Code usa iconos SVG y hemos encontrado casos en los que la extensión .SVG está asociada a algo diferente a `image/svg+xml`. Estamos considerando opciones para solucionarlo, pero por ahora aquí tienes una solución alternativa:

Usando el Símbolo del sistema:

1. Abre un Símbolo del sistema como Administrador.
2. Escribe `REG ADD HKCR\.svg /f /v "Content Type" /t REG_SZ /d image/svg+xml`.

Usando el Editor de registros (regedit):

1. Inicia `regedit`.
2. Abre la clave `HKEY_CLASSES_ROOT`.
3. Encuentra la clave `.svg`.
4. Establece su valor de datos `Content Type` a `image/svg+xml`.
5. Sal de `regedit`.

### No puedo ejecutar como administrador cuando AppLocker está habilitado

Con la introducción de la sandboxing de procesos (discutido en este blog), ejecutar como administrador no es compatible actualmente cuando AppLocker está configurado debido a una limitación de la sandboxing del runtime. Si tu trabajo requiere ejecutar VS Code desde un terminal elevado, puedes lanzar `code` con `--no-sandbox --disable-gpu-sandbox` como una solución alternativa.

Suscríbete a el problema #122951 para recibir actualizaciones.

### Trabajando con rutas UNC

A partir de la versión `1.78.1`, VS Code en Windows solo permitirá acceder a rutas UNC (que comienzan con `\\`) que hayan sido aprobadas por el usuario al iniciar o donde el nombre del host esté configurado para ser permitido mediante la nueva configuración `setting(security.allowedUNCHosts)`.

Si dependes de usar rutas UNC en VS Code, puedes:

* Configurar el host para ser permitido mediante la configuración `setting(security.allowedUNCHosts)` (por ejemplo, añadir `server-a` cuando abras una ruta como `\\server-a\path`).
* Mapear la ruta UNC como una unidad de red y usar la letra de la unidad en lugar de la ruta UNC (documentación).
* Definir una variable de entorno global `NODE_UNC_HOST_ALLOWLIST` con la lista de nombres de host permitidos, por ejemplo: `server-a\server-b` para permitir los hosts `server-a` y `server-b`.

*Nota:* Si estás usando alguna de las extensiones remotas para conectar con un espacio de trabajo de forma remota (como SSH), la configuración `setting(security.allowedUNCHosts)` debe configurarse en la máquina remota y no en la máquina local.

Este cambio se hizo para mejorar la seguridad al usar VS Code con rutas UNC. Consulta el aviso de seguridad relacionado para más información.
