# Soporte empresarial

Visual Studio Code puede ser utilizado como una herramienta de desarrollo para equipos empresariales de todos los tamaños. Como administrador de TI, puedes configurar VS Code para lograr consistencia y compatibilidad en toda tu organización.

## Red: Nombres de host comunes

Algunas características dentro de VS Code requieren comunicación en red para funcionar, como el mecanismo de actualización automática, la consulta e instalación de extensiones y la telemetría. Para que estas funciones funcionen correctamente en un entorno con proxy, debes tener el producto configurado correctamente.

Consulta la lista de nombres de host comunes de red para conocer los dominios requeridos.

## Política de grupo en Windows

Los administradores de sistemas necesitan una forma de controlar la configuración predeterminada del software en todas las máquinas cliente de su organización. La Política de Grupo es una solución para clientes que brinda a los administradores flexibilidad para implementar el comportamiento de cada una de las políticas y configuraciones disponibles.

VS Code ahora es compatible con la Política de Grupo basada en el registro de Windows. A partir de la versión 1.69 de VS Code, cada lanzamiento incluirá un directorio `policies` que contiene archivos de plantillas ADMX que se pueden agregar a la siguiente ruta: `C:\Windows\PolicyDefinitions`.

Una vez que las definiciones de políticas están instaladas, los administradores pueden usar el Editor de políticas de grupo local para gestionar los valores de las políticas.

Las políticas pueden configurarse tanto a nivel de Computadora como a nivel de Usuario. Si ambas están configuradas, el nivel de Computadora tendrá prioridad. Cuando se establece un valor de política, este valor reemplaza la configuración de ajustes de VS Code configurada en cualquier nivel (predeterminado, usuario, espacio de trabajo, etc.).

## Políticas adicionales

El objetivo es promover la configuración actual de VS Code como Políticas y seguir de cerca las configuraciones existentes, para que los nombres y el comportamiento sean consistentes. Si hay solicitudes para implementar más políticas, abre un problema en el repositorio de GitHub de VS Code. El equipo determinará si ya existe una configuración correspondiente para el comportamiento o si se debe crear una nueva configuración para controlar el comportamiento deseado.
