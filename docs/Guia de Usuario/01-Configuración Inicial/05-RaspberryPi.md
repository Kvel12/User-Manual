# Raspberry Pi

Aunque no es oficialmente soportado, puedes ejecutar Visual Studio Code en dispositivos Raspberry Pi.

![Logo de Raspberry Pi](/img/raspberry-pi-os/RPi-Logo-Landscape-Reg-SCREEN.png)

Al descargar y usar Visual Studio Code, aceptas los términos de la licencia y la declaración de privacidad.

## Instalación

Visual Studio Code se distribuye oficialmente a través del repositorio APT de Raspberry Pi OS (anteriormente llamado Raspbian), en variantes de 32 bits y 64 bits.

Puedes instalarlo ejecutando:

```bash
sudo apt update
sudo apt install code
```


markdown
Copy code
### Ejecutando VS Code

Después de instalar el paquete de VS Code, puedes ejecutar VS Code escribiendo `code` en una terminal o lanzándolo desde el menú **Programación**.

![Visual Studio Code en el menú Programación de Raspberry Pi](/img/raspberry-pi-os/vscode-under-programming.jpg)

## Actualizaciones

Tu Raspberry Pi debería manejar las actualizaciones de VS Code de la misma manera que otros paquetes del sistema:

```bash
sudo apt update
sudo apt upgrade code
```

Siempre puedes verificar cuando hay una nueva versión disponible en nuestra página de Actualizaciones.

## Requisitos del sistema

VS Code no es oficialmente soportado en Raspberry Pi. Consulta nuestras discusiones de la comunidad para obtener información sobre plataformas que se sabe que funcionan.

