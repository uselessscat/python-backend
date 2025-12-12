# Sistema de archivos y metadata

## Introducción al FHS y al modelo de filesystem Unix

* Objetivos del Filesystem Hierarchy Standard
* Beneficios: portabilidad, consistencia, administración
* UNIX: “todo es un archivo” (regulares, directorios, dispositivos, pseudo-FS)
* Árbol jerárquico del sistema y organización general

## Estructura de un sistema de archivos

* Árbol jerárquico desde `/`
* Relación entre directorios, inodos y enlaces
* Rutas absolutas vs rutas relativas
* Resolución de rutas y traversal del árbol

## Inodos y metadata

* Definición de inodo
* Campos fundamentales: owner, group, permisos, tamaño
* Tiempos del archivo:

  * `atime` — último acceso
  * `mtime` — última modificación
  * `ctime` — último cambio de metadata
* Atributos extendidos (xattrs)
* Enlaces a inodos: identidad del archivo vs nombre

## Permisos y ownership

* Bits de permisos: `r`, `w`, `x`
* Clases: `user`, `group`, `other`
* Umask y efecto sobre archivos y directorios
* Cambios de propietario y grupo
* ACLs (visión conceptual)
* Atributos especiales (inmutable, append-only — solo conceptual)

## Hardlinks y Symlinks

* Hardlinks:

  * Varios nombres apuntando al mismo inodo
  * Contador de enlaces y borrado
  * Limitaciones (no cruzan FS, no para directorios)
* Symlinks:

  * Enlaces simbólicos como archivos separados
  * Resolución dinámica de rutas
  * Riesgos: loops, roturas, seguridad
* Diferencias internas y casos de uso recomendados

## Montaje de sistemas de archivos

* Concepto de *mount point*
* Montajes persistentes vs temporales
* Tipos de sistemas de archivos (conceptual):

  * ext4
  * XFS
  * btrfs
  * ZFS
* Particiones vs FS
* Montaje automático y fstab (overview)

## Dispositivos en `/dev`

* Naturaleza del directorio `/dev` (generado dinámicamente)
* Block devices: discos, particiones
* Character devices: terminales, puertos seriales
* Pseudo-devices:

  * `/dev/null`
  * `/dev/zero`
  * `/dev/full`
  * `/dev/random`, `/dev/urandom`
* Udev y creación dinámica de nodos

## Directorios principales del FHS

### 8.1 `/bin` y `/sbin`

* Binarios esenciales del sistema
* Herramientas mínimas para modo rescate
* Tendencia moderna a fusionarse con `/usr/bin` y `/usr/sbin`

### 8.2 `/usr`

* `usr/bin` — aplicaciones del usuario
* `usr/sbin` — herramientas administrativas
* `usr/lib` — bibliotecas
* `usr/include` — headers
* `usr/share` — contenido no ejecutable
* `usr/local` — software instalado manualmente

### 8.3 `/etc`

* Configuración global del sistema
* Estructura y convenciones
* Archivos de shell y de servicios

### 8.4 `/var`

* Datos variables y runtime:

  * `var/log`
  * `var/cache`
  * `var/spool`
  * `var/lib`
* Diferencias entre `/var/run` y `/run`

### 8.5 `/opt`

* Software de terceros
* Estructuras tipo `/opt/vendor/app/`

### 8.6 `/lib` y `/lib64`

* Bibliotecas fundamentales del sistema
* Soporte multi-arquitectura
* Relación con `/usr/lib`

### 8.7 `/proc`

* Sistema de archivos virtual
* Información del kernel, procesos, memoria
* Directorios por PID

### 8.8 `/sys`

* Interfaz del kernel hacia userland
* Atributos de drivers, buses y dispositivos

### 8.9 `/home` y `/root`

* Carpetas personales
* Dotfiles y configuración del usuario
* Diferencias entre usuario normal y superusuario

### 8.10 `/boot`

* Kernel, initramfs
* Bootloaders y configuraciones asociadas

### 8.11 `/tmp` y `/var/tmp`

* Temporalidad

  * `/tmp`: volátil, puede limpiarse al reiniciar
  * `/var/tmp`: persistente
* Sticky bit y seguridad

### 8.12 `/media` y `/mnt`

* Montaje de dispositivos externos
* Convenciones modernas en escritorio

## Variaciones entre distribuciones

* Diferencias y fusiones `/usr`
* Debian/Ubuntu vs Fedora vs Arch
* Distribuciones no FHS (NixOS)
* Compatibilidad y portabilidad

## Buenas prácticas para desarrolladores y sysadmins

* Dónde instalar binarios propios
* Dónde ubicar configuraciones y datos persistentes
* No romper la jerarquía del sistema
* Limpieza, orden y estándares
* Evitar configuraciones “por fuera” del FHS
