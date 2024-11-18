---
Order: 6
Area: setup
TOCTitle: Red de Conexiones
ContentId: 84F36EDE-4D66-4A2E-B4D1-F020C73EB2AD
PageTitle: Configuración de la Conexión de Red de Visual Studio Code
DateApproved: 10/29/2024
MetaDescription: Configuración de la conexión de red en VS Code.
---

# Conexiones de Red

Visual Studio Code está construido sobre Electron y se beneficia de todas las capacidades de red del stack de Chromium. Esto también significa que los usuarios de VS Code obtienen gran parte del soporte de red disponible en Google Chrome.

## Nombres de host comunes

Algunas características dentro de VS Code requieren comunicación de red para funcionar, como el mecanismo de actualización automática, la consulta e instalación de extensiones y la recopilación de datos de telemetría. Para que estas características funcionen correctamente en un entorno con proxy, debes tener el producto configurado correctamente.

Si estás detrás de un cortafuegos que necesita permitir dominios específicos utilizados por VS Code, aquí está la lista de nombres de host a los que deberías permitir la comunicación:

* `update.code.visualstudio.com` - Servidor de descarga y actualización de Visual Studio Code
* `code.visualstudio.com` - Documentación de Visual Studio Code
* `go.microsoft.com` - Servicio de reenvío de enlaces de Microsoft
* `vscode.blob.core.windows.net` - Almacenamiento de blobs de Visual Studio Code, utilizado para servidores remotos
* `marketplace.visualstudio.com` - Visual Studio Marketplace
* `*.gallery.vsassets.io` - Visual Studio Marketplace
* `*.gallerycdn.vsassets.io` - Visual Studio Marketplace
* `rink.hockeyapp.net` - Servicio de informes de fallos
* `bingsettingssearch.trafficmanager.net` - Búsqueda de configuración dentro del producto
* `vscode.search.windows.net` - Búsqueda de configuración dentro del producto
* `raw.githubusercontent.com` - Acceso a archivos crudos de repositorios de GitHub
* `vsmarketplacebadges.dev` - Servicio de insignias de Visual Studio Marketplace
* `az764295.vo.msecnd.net` - CDN de descargas de Visual Studio Code (obsoleto)
* `vscode.download.prss.microsoft.com` - CDN de descargas de Visual Studio Code
* `download.visualstudio.microsoft.com` - Servidor de descargas de Visual Studio, proporciona dependencias para algunas extensiones de VS Code (C++, C#)
* `vscode-sync.trafficmanager.net` - Servicio de sincronización de configuraciones de Visual Studio Code
* `vscode-sync-insiders.trafficmanager.net` - Servicio de sincronización de configuraciones de Visual Studio Code (Insiders)
* `vscode.dev` - Usado cuando inicias sesión con GitHub o Microsoft para una extensión o la sincronización de configuraciones
* `*.vscode-unpkg.net` - Usado al cargar extensiones web
* `default.exp-tas.com` - Servicio de experimentación de Visual Studio Code, utilizado para proporcionar experiencias experimentales de usuario

## Soporte para servidores proxy

VS Code tiene exactamente el mismo soporte para servidores proxy que Google Chromium. Aquí hay un extracto de la documentación de Chromium:

# Configuración de Proxy y Problemas Comunes en VS Code

Para aprender más sobre estos argumentos de línea de comandos, consulta Configuración de Red en Chromium.

### Proxies autenticados

Los proxies autenticados deberían funcionar sin problemas dentro de VS Code con la adición de PR #22369.

Los métodos de autenticación soportados son:

* Básico
* Digest
* NTLM
* Negociar

Cuando se usa VS Code detrás de un proxy HTTP autenticado, debería aparecer la siguiente ventana emergente de autenticación:

```
"The Chromium network stack uses the system network settings so that users and administrators can control the network settings of all applications easily. The network settings include:

 - proxy settings
 - SSL/TLS settings
 - certificate revocation check settings
 - certificate and private key stores"
```

Esto significa que la configuración de su proxy debería ser tomada automáticamente.

De lo contrario, puede usar los siguientes argumentos de línea de comandos para controlar la configuración del proxy:

```bash
# Disable proxy
--no-proxy-server

# Manual proxy address
--proxy-server=<scheme>=<uri>[:<port>][;...] | <uri>[:<port>] | "direct://"

# Manual PAC address
--proxy-pac-url=<pac-file-url>

# Disable proxy per host
--proxy-bypass-list=(<trailing_domain>|<ip-address>)[:<port>][;...]
```
Para aprender más sobre estos argumentos de línea de comandos, consulta Configuración de Red en Chromium.

### Proxies autenticados

Los proxies autenticados deberían funcionar sin problemas dentro de VS Code con la adición de PR #22369.

Los métodos de autenticación soportados son:

* Básico
* Digest
* NTLM
* Negociar

Cuando se usa VS Code detrás de un proxy HTTP autenticado, debería aparecer la siguiente ventana emergente de autenticación:

![proxy](/img/network/proxy.png)

Es importante destacar que aún no se ha implementado el soporte para autenticación en proxies SOCKS5. Puedes seguir el problema en el rastreador de problemas de Chromium.

Consulta Autenticación HTTP en Chromium para leer más sobre la autenticación de proxies HTTP en VS Code.

### Certificados SSL

Con frecuencia, los proxies HTTPS reescriben los certificados SSL de las solicitudes entrantes. Chromium fue diseñado para rechazar respuestas firmadas por certificados que no confía. Si enfrentas problemas de confianza con SSL, tienes algunas opciones disponibles:

* Dado que Chromium usa la infraestructura de confianza de certificados del sistema operativo, la opción preferida es agregar el certificado de tu proxy a la cadena de confianza del sistema operativo. Consulta la documentación de la Política de Certificados Raíz de Chromium para obtener más información.
* Si tu proxy se ejecuta en `localhost`, siempre puedes intentar con el parámetro de línea de comandos --allow-insecure-localhost.
* Si todo lo demás falla, puedes indicarle a VS Code que ignore todos los errores de certificados usando el parámetro de línea de comandos --ignore-certificate-errors. **Advertencia:** Esto es **peligroso** y **no se recomienda**, ya que abre la puerta a problemas de seguridad.

## Soporte para servidores proxy heredados

Las extensiones aún no se benefician del mismo soporte de proxy que VS Code. Puedes seguir el desarrollo de este problema en GitHub.

De manera similar a las extensiones, algunas otras características de VS Code aún no soportan completamente la red de proxies, como la interfaz CLI. La interfaz CLI es la que obtienes cuando ejecutas `code --install-extension vscodevim.vim` desde un símbolo del sistema o terminal. Puedes seguir el desarrollo de este problema en GitHub.

Debido a estas limitaciones, las variables `setting(http.proxy)`, `setting(http.proxyStrictSSL)` y `setting(http.proxyAuthorization)` siguen formando parte de la configuración de VS Code, pero solo se respetan en estos dos escenarios.

## Solución de problemas

Aquí hay algunos enlaces útiles que podrían ayudarte a solucionar problemas de red en VS Code:

* Configuración de red
* Depuración de problemas con el proxy de red
* Configuración de un servidor proxy SOCKS en Chrome
* Configuración de proxies y opciones de respaldo (Windows)
