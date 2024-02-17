import { IArticleResponse } from '../../domain/models/Article';

const article: IArticleResponse = {
  title: 'Empezando a gestionar un equipo',
  slug: 'empezando-a-gestionar-un-equipo',
  date: 'Publicada el 5 de enero en Categoría.',
  books: [4, 2, 3],
  category: "",
  excerpt:
    'Comenzar como Engineering Manager en una empresa puede ser emocionante y desafiante a partes iguales, especialmente cuando tu reto es liderar un equipo ya consolidado y con mucha más experiencia que tu.',
  content: `
## Introducción

Comenzar como Engineering Manager en una empresa puede ser emocionante y desafiante a partes iguales, especialmente cuando tu reto es liderar un equipo ya consolidado y con mucha más experiencia que tu. Puede que tengas experiencia en el puesto, incluso puede que hayas gestionado multiples equipos, la realidad es que la dinámica de cada equipo siempre es única. Incluso el reto al que se enfrenta puede no tener nada que ver con lo que hayas vivido nunca. Necesitas desplegar todas las habilidades de adaptación de las que dispongas. En este artículo, os quiero contar mi experiencia empezando a gestionar el que es mi actual equipo.

## **El detonante**

Hace poco un compañero me recordó el trabajo que hice al entrar como nuevo manager mi equipo actual. ¡Después de dos años de foco lo había olvidado completamente! La verdad, esto me hizo reflexionar. Hay que ver que fácil podemos olvidar las cosas cuando estamos en el día a día. Mi primer pensamiento después de oír a mi compañero fue: “Jo, no fue nada fácil la entrada en el equipo y la verdad es que me lo curré”. 

Quizás soy yo, pero me cuesta encontrar casos reales de managers solucionando sus problemas, donde compartan, no solo la teoría, si no como lo han llevado a la práctica. Cuesta ver que hay entre bambalinas, cuales son los retos reales y como han tenido que adaptarse. La verdad, lees que como manager tienes que abrirte al equipo y mostrarte de vez en cuando vulnerable, pero con tanto filtro en las redes sociales y tener que aparentar, nos cuesta mucho mostrar nuestras realidades hacia afuera.

Por todo esto, quiero compartir mis retos y como los soluciono, no solo para poder ayudar a los demás, sino como reflexión propia. Lo veo como una buena forma de poder aprender de mis errores y asentar mis aciertos. Honestamente, publico mis ideas no con la esperanza de ser leído por los demás, bastante poco tiempo libre tengo actualmente como para comprometerme. Es más bien un trabajo personal de reflexión del que, oye, si alguien se puede aprovechar, bienvenido sea.

## **El reto**

Para empezar os cuento como era por entonces la situación. Entro a formar parte de un equipo, por entonces formado por tres ingenieros, dos personas en producto y yo. actualmente somos 16 personas entre ingeniería, data y producto, pero por entonces aún éramos pocos y la línea de negocio estaba empezando a rodar.

Lo que me encuentro al entrar es que bajo mi guardia tenía a 3 ingenieros mucho más seniors que yo, los cuales dos de ellos eran ya veteranos en la compañía. A eso hay que sumarle que el negocio de adTech no es que sea lo más sencillo del mundo. Y para terminar de complicarlo, mi perfil, o donde yo me siento cómodo jugando, es de Frontend trabajando en plataformas SaaS. Pobre de mí, Seedtag era todo lo contrario. Y mi dominio más aún. Olvídate de fronts y de interfaces. Buenos días real time y cantidades ingentes de datos.

Recapitulando, tenía un equipo que técnicamente era mil veces mejor que yo, una industria con una curva de aprendizaje altísima, y un entorno donde no me era cómodo moverme. ¿Y que tenía yo? Un nivel de exigencia muy alto 🥲. Me propuse como objetivo el ser capaz de aportar valor antes de terminar el trimestre. En realidad intentar aportar valor lo antes posible. Y como de contradicciones vive el hombre, quise poner en práctica lo que me había sugerido un anterior manager que tuve. Me propuse tomarme un tiempo sin abrir la boca nada más que para preguntar, un tiempo de escucha activa, de shadowing.

Durante ese mes de escucha, me dediqué a listar todos los problemas que veía, sin mostrárselos a nadie. Listé todos los problemas, los categoricé y planteé soluciones. Trabajé en crear un plan para tratar de atajarlos, si no todos, los más importantes.

Un punto importante fue centrarme en los problemas y como solucionarlos. por ejemplo Soy fan de Kanban frente a scrum por diversos motivos que no vienen al caso. El primer impulso podría haber sido cambiar el framework agile, pero no respondía a ninguna necesidad real del equipo. Seguimos trabajando en scrum durante mucho tiempo, mejorando el aporte de valor que producía el equipo, solucionando problema a problema, centrándonos en aquellos con mayor impacto en el flujo de trabajo del equipo y su aporte de valor. 

## **El Trabajo**

Como he comentado, el primer mes me centré en listar los problemas que encontré. Cuando la lista creció los fui agrupando. El resultado se asemejaba a este listado. Lo he simplificado para mostrar el nivel de las anotaciones que fui tomando. Pero la lista era mucho más larga.

1. **Team**
    - Existen tensiones en el team que no permiten avanzar, reticencia al cambio.
    - …
2. **Delivery cycle**
    - Tenemos user stories con tareas relacionadas pero que no bloquean para terminarla, con lo que tenemos user stories finalizadas con subtareas en proceso o por hacer.
    - Las US no tienen actualizaciones de parte de ingeniería
    - Las US se pasan al sprint sin documentación.
    - Las decisiones se quedan en el aire y no se documentan
    - …
3. **Outcome**
    - El equipo está pidiendo estar más involucrado en producto.
    - No están teniendo todas las herramientas para poder medir y tomar decisiones.
    - No hay certeza sobre que la priorización de las oportunidades sea la correcta para maximizar el outcome
    - …
4. **Roadmap**
    - conclusiones de tests no existen en ninguna parte
    - Tech Leads se meten en las preplanings para ver que se tenga todo en cuenta. Se tienen que involucrar mucho antes en el DD
    - no tenemos roadmap a medio/largo plazo
    - …

Una vez saqué los principales problemas pasé a planearme los primeros steps:

| Dimensión | Objetivo | Pasos |
| --- | --- | --- |
| <legend>Dimensión</legend> Team | <legend>Objetivo</legend> Tener Definidos 3/3 career plans  | <legend>Pasos</legend> Setear 4 sesiones con cada uno de los directs para trabajar en el career plan (framework de radical candor [Link]) |
| <legend>Dimensión</legend> Delivery cycle | <legend>Objetivo</legend> Cumplir un 80% del trabajo comprometido en cada sprint | <legend>Pasos</legend> 1. Optimizar dailies a máximo 15 minutos para el XX/XX/2022. <br> 2. implementar conclusiones del análisis del delivery, reducir bottle necks para el XX/XX/2022. <br> 3. Promover asincronía en las tareas en Jira.<br> 4. Documentar el delivery cycle para el XX/XX/2022.<br> 5. Ver si necesitamos cambiar a kanban |
| <legend>Dimensión</legend> Outcome |  <legend>Objetivo</legend> tener un framework en el team para que todo el equipo tenga visibilidad del outcome de forma activa | <legend>Pasos</legend> 1 Definir funnel de métricas para el XX/XX/2022.<br> 2. Sacar dashboards de control para el XX/XX/2022.<br> 3. Propuesta de NSM y proxy metrics para el XX/XX/2022.<br> 4. Documentarlo para el XX/XX/2022.<br> 5. Presentarlo al team para el XX/XX/2022. |
| <legend>Dimensión</legend> Roadmap | <legend>Objetivo</legend> tener un roadmap a 6 meses | <legend>Pasos</legend> 1 Empezar a guardar pains y posibles oportunidades.<br> 2. Juntarse con product para ver next opportunities.<br>3. Empezar a mover los DD de estas oportunidades.<br> 4. En cuanto tengamos clara nuestra NSM, priorizar y crear el roadmap.<br> 5. Definir objetivos. Ver estacionalidad comparando años anteriores, intentar sacar un patrón para ver si podemos maximizar revenue detectando los puntos de más tráfico. |

Este plan lo fui compartiendo con el equipo, utilizando tanto los 1:1 como sesiones conjuntas. La idea era consensuarlo con ellos y mostrarles que compartía sus preocupaciones y que ellos eran partícipes en las soluciones.

## **El desenlace**

El avance durante los primeros meses fue muy positivo, no solo en cada una de las areas de trabajo, como se puede observar en el gráfico a continuación, si no en el equipo. Las mejoras en NPS y feedbacks del equipo fueron muy positivos. Por otro lado ese mismo año añadimos dos ingenieros más al grupo. A día de hoy hemos crecido tanto como para montar una tribu con dos equipos.

![Untitled](/imgs/team-commitment-evolution.png)

A lo largo de los siguientes artículos iremos viendo en detalle como profundizamos en cada una de las areas descritas al principio y viendo que acciones concretas llevamos a cabo.

## **Consejos doy que para mi no tengo**

Como resumen final os dejo unos consejos que he extraído de mi experiencia que quizás os sirvan:

**1. Conoce a tu equipo:**

Antes de sumergirte en proyectos y tareas, el día a día al fin y al cabo, dedica tiempo a conocer a los miembros de tu equipo. Organiza 1:1 para entender sus fortalezas, áreas de desarrollo, metas profesionales y sus expectativas para el equipo. Esto no solo te brindará una visión más profunda de sus habilidades, sino que también ayudará a construir relaciones sólidas y a establecer una base de confianza. Créeme que tu éxito depende de estas relaciones y la confianza que sembréis los unos de los otros.

---

**2. Escucha activamente:**

Permítete un periodo de escucha activa del equipo. No pretendas aportar desde el minuto cero, solo pregunta. En mi caso me di un mes. La comunicación efectiva es clave en cualquier equipo. Escucha las ideas, preocupaciones y perspectivas de los miembros del equipo. Anima a la participación abierta y fomenta un entorno donde todos se sientan valorados y escuchados. La información que obtengas te ayudará a comprender mejor la cultura del equipo y a tomar decisiones informadas.

---

**3. Comprende la cultura y procesos existentes:**

No busques cambiarlo todo, entiende como trabaja el equipo, adáptate, encuentra los problemas y propón soluciones a esos problemas. No vendas tu libro. Cada equipo tiene su propia cultura y procesos de trabajo. Observa cómo funcionan las cosas, identifica los flujos de trabajo existentes y comprende las normas no escritas. Adaptarte a estos elementos te permitirá integrarte de manera más fluida y evitar posibles fricciones en la transición.

---

**4. Establece expectativas claras:**

Desde el principio, comunica de manera clara y transparente las expectativas que tienes para el equipo y lo que el equipo puede esperar de ti. Esto incluye la visión, metas a corto y largo plazo, así como las responsabilidades individuales. La claridad en las expectativas fomenta la alineación y reduce la ambigüedad.

---

**5. Identifica oportunidades de mejora:**

Aprovecha tu experiencia para identificar oportunidades de mejora en los procesos existentes o en la eficiencia del equipo. Aborda estas áreas de manera colaborativa, involucrando a los miembros del equipo en la identificación de soluciones. Esto no solo demuestra tu compromiso con la mejora continua, sino que también fortalece la cohesión del equipo.

<aside>
💡 Briconsejo del día: Busca un win en los primeros meses con el team. Hacer cambios en la cultura y en los procesos es un camino largo. Encuentra un problema lo suficientemente importante para el equipo con una solución “sencilla” para demostrarle pronto al equipo que puedes aportarles valor y que sus preocupaciones son compartidas por ti.

</aside>

## Siempre hay un pero

No pretendo venderte mi libro, pretendo serte honesto. Esta fue mi realidad y los aprendizajes que he sacado. Son perfectos? obvio que no, pero a mi me han funcionado. Hazlos tuyos en la medida en que te apetezca. Y oye, puedes pensar que lo que te cuento es una mierda y que no te aporta valor, o que tu lo hubieses hecho diferente, o incluso mejor. Es posible. Y es posible que tengas razón. Yo hoy lo haría mejor seguramente. Pero así pasó y me hizo crecer.

El camino hasta aquí no ha sido fácil, han habido tensiones, algunos de los problemas seguimos arrastrándolos y nos queda mucho camino por recorrer. No es oro todo lo que reluce. Con lo que me quedo es que el equipo no ha dejado de crecer y no hemos perdido a nadie por el camino (al menos por ahora). El equipo está comprometido, como no he visto nunca y cumpliendo los objetivos que se propone. Me quedo con eso y no puedo estar más orgullosos de ellos. Como me gusta decir “mejor hecho que perfecto”.

## **Conclusión**

Adaptarse como Engineering Manager en un equipo ya existente requiere un enfoque equilibrado entre la comprensión de las dinámicas existentes y la introducción de nuevas perspectivas. El equilibrio es clave aunque muchas veces sea inalcanzable, juega bien tus cartas. 

Al invertir tiempo en conocer a los miembros del equipo, escuchar activamente y comprender la cultura y los procesos, puedes establecer una base sólida para liderar con éxito. Da igual lo bueno que seas en el detalle o en la visión, debes dominar esto para ganarte al equipo y que reme contigo.

Espero que este artículo sea útil para ti. Para mi lo ha sido. Cualquier duda o comentario que tengas, ¡no dudes en ponerte en contacto conmigo!
  `,
};

export default article;
