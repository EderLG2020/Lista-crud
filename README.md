# Proyecto LISTA-CRUD

Este proyecto utiliza tecnologías modernas para desarrollar un sitio web cautivador. A continuación, se proporciona más información sobre el proyecto.

## Sitio Web

El sitio web está disponible en [https://lista-veterinaria.netlify.app](https://lista-veterinaria.netlify.app). Visítalo para experimentar las características en vivo.

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

**Inicios de React**
En el turbulento paisaje del desarrollo web a principios de la década de 2010, Facebook se encontró con el desafío de gestionar interfaces de usuario complejas y dinámicas. En medio de este desafío, nació React.

En 2011, Jordan Walke, ingeniero de software en Facebook, ideó una solución innovadora para mejorar la eficiencia y la modularidad en el desarrollo de interfaces de usuario. Este concepto, conocido como React, introdujo la idea revolucionaria del "Virtual DOM". Al crear una representación virtual eficiente de los elementos de la interfaz de usuario, React permitía actualizaciones más rápidas y minimizaba la manipulación directa del DOM.

El lanzamiento oficial de React en 2013 como una biblioteca de código abierto marcó un hito en el desarrollo web. Su filosofía declarativa, que permitía describir cómo debería ser la interfaz de usuario y dejar a React manejar la manipulación del DOM, simplificó enormemente la creación de aplicaciones interactivas.

A medida que React ganaba tracción, la comunidad de desarrolladores comenzó a adoptar esta tecnología en masa. Su capacidad para construir componentes reutilizables, trabajar con un flujo de datos unidireccional y su enfoque en la composición modular fueron factores clave en su popularidad.

Con el tiempo, React evolucionó y se enriqueció con nuevas características, como JSX, React Router y los Hooks, que facilitaron aún más el desarrollo de aplicaciones web modernas.

En la actualidad, React no solo es una biblioteca de Facebook; es un pilar en el ecosistema de desarrollo web. Su impacto no se limita solo a grandes empresas, ya que también ha sido adoptado por desarrolladores independientes y pequeñas empresas.

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

**Inicios de Netlify**
En el vertiginoso paisaje de la infraestructura web, Netlify emergió como una solución disruptiva y transformadora. Su historia comienza en 2014, cuando Matt Biilmann y Chris Bach fundaron Netlify con el objetivo de simplificar el proceso de implementación y alojamiento de sitios web.

Netlify no solo aspiraba a ser un servicio de alojamiento, sino que también buscaba abordar los desafíos inherentes a la implementación continua y la arquitectura de sitios web modernos. El equipo de Netlify introdujo conceptos innovadores como la implementación continua integrada y el despliegue de sitios estáticos.

La plataforma abrazó la arquitectura JAMstack, que propugna la separación de la presentación y el contenido, permitiendo la entrega de sitios web rápidos y seguros. Netlify se convirtió en un pionero al aprovechar los beneficios de la arquitectura JAMstack, promoviendo la idea de pre-renderizar páginas y servirlas directamente desde una CDN.

Con el tiempo, Netlify no se limitó simplemente al alojamiento estático. Introdujo funciones serverless, permitiendo a los desarrolladores ejecutar código del lado del servidor sin la necesidad de administrar la infraestructura. Esta característica expandió significativamente las capacidades de la plataforma, abriendo nuevas posibilidades para el desarrollo web.

Uno de los puntos culminantes en la historia de Netlify fue la introducción del despliegue continuo y automatizado. Integró herramientas de construcción como Git y proporcionó una experiencia de desarrollo fluida, donde cada confirmación en el repositorio desencadenaba automáticamente una nueva implementación.

A medida que Netlify creció, su presencia se hizo sentir en la comunidad de desarrollo. La adopción masiva de la plataforma no solo se debió a su enfoque técnico innovador, sino también a la atención al usuario y a la comunidad. Netlify se convirtió en más que una plataforma de alojamiento, se convirtió en un ecosistema integral para el desarrollo web moderno.

Hoy en día, la historia de Netlify continúa evolucionando, marcando hitos en la automatización del desarrollo, la implementación continua y la arquitectura JAMstack. Su narrativa es la de una plataforma que no solo sigue el ritmo del cambio en el desarrollo web, sino que lo lidera con audacia y visión.

**Ventajas y Desventajas**

| Ventajas                                     | Desventajas                                     |
| -------------------------------------------- | ----------------------------------------------- |
| 1. Despliegue continuo automático            | 1. Limitaciones en la capa gratuita             |
| 2. Funciones de servidor integradas          | 2. Personalización limitada en el plan gratuito |
| 3. Integración sencilla con repositorios git |                                                 |

### Almacenamiento de Datos

En la implementación de este proyecto, se ha seleccionado **LocalStorage** como mecanismo de almacenamiento. Esta elección se basa en la necesidad de retener ciertos datos de manera persistente incluso después de que el usuario cierre el navegador y vuelva a acceder al sitio.

**LocalStorage** proporciona un espacio de almacenamiento en el navegador del usuario, permitiendo guardar y recuperar información de manera sencilla. En comparación con **SessionStorage**, la diferencia clave radica en la duración de los datos almacenados. Mientras que **SessionStorage** se limita a la duración de la sesión actual del navegador, los datos en **LocalStorage** persisten más allá de la sesión actual.

En este contexto específico, se descartó el uso de **SessionStorage** ya que los datos almacenados no requieren ser exclusivos de la sesión. En cambio, **LocalStorage** ofrece la ventaja de conservar la información incluso después de que el usuario cierre el navegador y vuelva a visitar el sitio en futuras sesiones.

Esta elección se alinea con la necesidad de mantener ciertos datos, aunque no estén vinculados a roles de usuario, y proporciona una experiencia más coherente y personalizada para los usuarios al recordar sus preferencias y datos relevantes.

### Tailwind

[Tailwind CSS](https://tailwindcss.com/) es un framework de utilidad de CSS que se ha vuelto popular en el desarrollo web. A diferencia de otros frameworks CSS, Tailwind adopta un enfoque único al proporcionar clases de utilidad directamente en el marcado HTML.

#### Razones para usar Tailwind:

1. **Flexibilidad y Configurabilidad:** Tailwind permite una personalización completa, lo que significa que puedes ajustar cada aspecto del diseño según tus necesidades específicas.

2. **Desarrollo Rápido:** Con clases predefinidas para estilos comunes, puedes construir rápidamente interfaces sin tener que escribir CSS desde cero.

3. **Legibilidad del Código:** Al utilizar clases de utilidad en el HTML, el código se vuelve más legible y comprensible. Además, facilita la colaboración en equipos y el mantenimiento del código.

4. **Tamaño del Archivo:** Tailwind se enfoca en la eficiencia del tamaño del archivo, generando solo el CSS necesario para tu proyecto, lo que ayuda a mantener el rendimiento.

5. **Consistencia de Diseño:** Tailwind fomenta la consistencia en el diseño mediante la reutilización de clases de utilidad, lo que resulta en una apariencia coherente en todo el sitio.

En resumen, Tailwind CSS ofrece una alternativa eficiente y altamente personalizable para el desarrollo de interfaces web, brindando flexibilidad, velocidad y consistencia a los desarrolladores.

### Validaciones

En el archivo \src\components\Formulario\Formulario.jsx, se utilizan expresiones regulares para validar los campos de entrada. Aquí hay ejemplos válidos e inválidos para cada expresión:

- Propietario Regex: /^[A-Za-z ]+$/

  - Válido 1: Juan
  - Válido 2: Ana Maria
  - Válido 3: Pedro López
  - Válido 4: María José Rodríguez
  - Válido 5: Carlos Fernández

  - Inválido 1: 123
  - Inválido 2: Juan123
  - Inválido 3: María@invalido
  - Inválido 4: 789Pedro
  - Inválido 5: Ana!Maria

- Nombre Regex: /^[A-Za-z ]+$/

  - Válido 1: Carlos
  - Válido 2: María Elena
  - Válido 3: Juan Pablo
  - Válido 4: Laura Sofía
  - Válido 5: Andrés Martínez

  - Inválido 1: 456
  - Inválido 2: Carlos123
  - Inválido 3: María@invalido
  - Inválido 4: 789Laura
  - Inválido 5: Andrés!Martínez

- Email Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  - Válido 1: correo@ejemplo.com
  - Válido 2: usuario@dominio.co
  - Válido 3: ejemplo@correo.com
  - Válido 4: prueba@dominio.net
  - Válido 5: usuario@correo.org

  - Inválido 1: correo@ejemplo@com
  - Inválido 2: usuario@dominio
  - Inválido 3: correo@.com
  - Inválido 4: prueba@dominio@net
  - Inválido 5: usuario@correo@org

- Síntomas Regex: /^[A-Za-z\s.,!?]+$/

  - Válido 1: Dolor de cabeza.
  - Válido 2: Fiebre y tos.
  - Válido 3: Mareos y náuseas.
  - Válido 4: Escalofríos y dolor muscular.
  - Válido 5: Fatiga y pérdida de apetito.

  - Inválido 1: 123
  - Inválido 2: Síntomas@invalidos
  - Inválido 3: Dolor_de_cabeza
  - Inválido 4: Escalofríos y dolor@muscular
  - Inválido 5: Fatiga y pérdida@de@apetito

## Lighthouse

Lighthouse es una herramienta automatizada de código abierto desarrollada por Google que se utiliza para auditar y mejorar la calidad general de las páginas web. Esta herramienta realiza evaluaciones en diferentes áreas clave, proporcionando métricas y sugerencias para mejorar el rendimiento, la accesibilidad, las mejores prácticas, la optimización para motores de búsqueda (SEO) y la progresividad de la aplicación web.

Al generar informes con Lighthouse, los desarrolladores pueden obtener una visión detallada del rendimiento de sus aplicaciones web, identificar posibles problemas y recibir recomendaciones específicas para optimizar la experiencia del usuario. Estos informes suelen incluir puntuaciones y métricas que permiten evaluar la eficacia de la aplicación en términos de velocidad de carga, accesibilidad para usuarios con discapacidades, prácticas recomendadas de desarrollo y otros aspectos importantes.

En el contexto proporcionado, el enlace [Pdg-Resumen-Lista-Crud](https://drive.google.com/file/d/1OIyjgzDParF23AoQEUyzPLl4j_L5TLvy/view?usp=sharing) dirige a un informe específico generado por Lighthouse para el proyecto "Lista-Crud". Compartir este enlace permite a los usuarios acceder y revisar las evaluaciones detalladas realizadas por Lighthouse en ese proyecto en particular.

**Evaluacion:**

![Evaluacion](https://i.ibb.co/N1j8MFx/2024-02-18-01-56-00-156807360ac7.png)

## RECURSO

Modo escritorio

1.

![Imagen principal](https://i.ibb.co/KVRH6j9/375shots-so.png)

2.

![Rellenando datos](https://i.ibb.co/Rc616BY/544shots-so.png)

Pantalla movil Pixel 7 "412 x 915"

1.

![Imagen principal](https://i.ibb.co/8269nzN/127shots-so.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4abfd77f-ab54-4141-9faa-118fda15f518/deploy-status)](https://app.netlify.com/sites/lista-veterinaria/deploys)
