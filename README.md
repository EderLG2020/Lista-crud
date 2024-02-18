# Proyecto LISTA-CRUD

Este proyecto utiliza tecnologías modernas para desarrollar un sitio web cautivador. A continuación, se proporciona más información sobre el proyecto.

## Sitio Web

El sitio web está disponible en [https://dulcet-dusk-1944b5.netlify.app](https://dulcet-dusk-1944b5.netlify.app). Visítalo para experimentar las características en vivo.

## Despliegue

El despliegue del proyecto se realiza mediante Netlify, garantizando una implementación rápida y confiable.

## Tecnologías Utilizadas

El proyecto se construye principalmente con las siguientes tecnologías:

- **React**: Un marco de trabajo JavaScript de vanguardia que facilita el desarrollo de interfaces de usuario interactivas y eficientes.

- **Tailwind CSS**: Un marco de trabajo de estilos utilizable y personalizable que facilita la creación de diseños modernos y receptivos.

## Tecnologías

### React

**¿Por qué usar React?**
React es elegido por su capacidad para construir interfaces de usuario interactivas y eficientes, su arquitectura basada en componentes y su amplio ecosistema de bibliotecas y herramientas.

**Historia de React**
React fue desarrollado por Facebook y lanzado en 2013 como una biblioteca de código abierto. Desde entonces, ha ganado popularidad y se ha convertido en una de las bibliotecas más utilizadas para el desarrollo front-end.

**Ventajas y Desventajas**

| Ventajas                                            | Desventajas                                   |
| --------------------------------------------------- | --------------------------------------------- |
| 1. Desarrollo eficiente                             | 1. Curva de aprendizaje inicial               |
| 2. Reutilización de código                          | 2. Puede ser excesivo para proyectos pequeños |
| 3. Virtual DOM para optimización                    |                                               |
| 4. Gran comunidad y soporte                         |                                               |
| 5. Ecosistema robusto de bibliotecas y herramientas |                                               |

### Netlify

**¿Por qué usar Netlify?**
Netlify se elige por su fácil integración con proyectos de React, su despliegue continuo, alojamiento gratuito y funciones como formularios y funciones de servidor.

**Historia de Netlify**
Netlify fue fundado en 2014 y se ha convertido en una plataforma popular para el desarrollo web, ofreciendo servicios de alojamiento y despliegue continuo.

**Ventajas y Desventajas**

| Ventajas                                     | Desventajas                                     |
| -------------------------------------------- | ----------------------------------------------- |
| 1. Despliegue continuo automático            | 1. Limitaciones en la capa gratuita             |
| 2. Funciones de servidor integradas          | 2. Personalización limitada en el plan gratuito |
| 3. Integración sencilla con repositorios git |                                                 |

### Almacenamiento

En este proyecto, se utiliza LocalStorage para el almacenamiento. Otra alternativa podría ser el uso de sessionStorage, pero como estos datos no requieren roles, se optó por localStorage ya que no se necesita persistencia solo durante la sesión.

### Validaciones

En el archivo \src\components\Formulario\Formulario.jsx, se utilizan expresiones regulares para validar los campos de entrada. Aquí hay ejemplos válidos e inválidos para cada expresión:

```javascript
const propietarioRegex = /^[A-Za-z ]+$/;

const propietarioValido1 = "Juan";
const propietarioValido2 = "Ana Maria";

const propietarioInvalido1 = "123";
const propietarioInvalido2 = "Juan123";

const nombreRegex = /^[A-Za-z ]+$/;

const nombreValido1 = "Carlos";
const nombreValido2 = "María Elena";

const nombreInvalido1 = "456";
const nombreInvalido2 = "Carlos123";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailValido1 = "correo@ejemplo.com";
const emailValido2 = "usuario@dominio.co";

const emailInvalido1 = "correo@ejemplo@com";
const emailInvalido2 = "usuario@dominio";

const sintomasRegex = /^[A-Za-z\s.,!?]+$/;

const sintomasValidos1 = "Dolor de cabeza.";
const sintomasValidos2 = "Fiebre y tos.";

const sintomasInvalidos1 = "123";
const sintomasInvalidos2 = "Síntomas@invalidos";
```

### RECURSO

Modo escritorio

1.

![Imagen principal](https://i.ibb.co/KVRH6j9/375shots-so.png)

2.

![Rellenando datos](https://i.ibb.co/Rc616BY/544shots-so.png)

Pantalla movil Pixel 7 "412 x 915"

1.

![Imagen principal](https://i.ibb.co/8269nzN/127shots-so.png)
