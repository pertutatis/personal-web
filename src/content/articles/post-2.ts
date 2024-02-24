import { IArticleResponse } from '../../domain/models/Article';

const article: IArticleResponse = {
  title: 'Career conversations',
  slug: 'career-conversations',
  date: 'Publicada el 10 de enero',
  books: [1, 3],
  category: '',
  relatedLinks: [
    {
      text: 'https://medium.com/fellowapp/career-conversations-with-employees-questions-and-tips-for-managers-daf96b808ccd',
      link: 'https://medium.com/fellowapp/career-conversations-with-employees-questions-and-tips-for-managers-daf96b808ccd',
    },
    {
      text: 'https://coachingforleaders.com/podcast/370/',
      link: 'https://coachingforleaders.com/podcast/370/',
    },
    {
      text: 'https://coach.bunch.ai/preview/recLn7ljKHVJZ3eij',
      link: 'https://coach.bunch.ai/preview/recLn7ljKHVJZ3eij',
    },
    {
      text: 'https://www.radicalcandor.com/how-to-have-career-conversations/',
      link: 'https://www.radicalcandor.com/how-to-have-career-conversations/',
    },
    {
      text: 'https://improvisingradicalcandor.com/career-conversations/',
      link: 'https://improvisingradicalcandor.com/career-conversations/',
    },
  ],
  excerpt:
    'Las career conversations son un proceso que nos permite alinear los valores y sueños de cada uno de los integrantes de nuestro equipo con las expectativas de la compañía. Esto nos lleva a que estén más energizados y generen un impacto mayor en el negocio.',
  content: `

  ![Career conversations](/imgs/career-conversations.jpeg)
  <figcaption>Provided by Copilot</figcaption>

Como Engineering Manager uno de los cometidos que más tiempo me quitan es el de hiring. Tener que revisar todos esos curriculums, todas esas horas en entrevistas. El candidato que nunca llega, organizar el trabajo para suplir a esa persona. Esta situación a menudo me hace reflexionar sobre el elevado coste de montar un equipo. Es muy caro. Por una parte el tiempo que acabas invirtiendo y que dejas de dedicar a generar impacto directo. Por otro lado el coste por oportunidad perdido relacionado con el impacto que deja de tener el equipo por despriorizar oportunidades debido a un factor incontrolable.

Pero aún es más difícil mantener a los miembros de un equipo. Actualmente el sector tech es uno con los [ratios de turnover más altos](https://www.linkedin.com/business/talent/blog/talent-strategy/industries-with-the-highest-turnover-rates), y [España no se salva](https://www.eleconomista.es/empleo/noticias/11836689/06/22/La-rotacion-en-las-tecnologicas-se-dispara-hasta-el-35-de-sus-plantillas-.html). “la gran renuncia” o la “renuncia silenciosa” son términos que a todos nos suenan. En mi opinión esto solo saca a relucir un problema que se ha destapado con el teletrabajo forzoso. Muchas empresas no tenían un interés real (o no sabían gestionar dicho interés) sobre el bienestar y el crecimiento de sus equipos. Con el teletrabajo se ha complicado el mantener al equipo motivado y como resultado tenemos este hartazgo generalizado.

Es por esto que debemos encontrar las formas de mantener a nuestro equipo motivado con el proyecto. How can you, as a manager, make sure that your direct reports feel supported and develop professionally? How can you become a servant leader, in practice? The answer: Career conversations.

[toc]

---

Por dar un poco más de contexto y ponernos en situación, **[Rajeev Peshawaria](https://rajeevpeshawaria.com/)** en su libro “**[Too Many Bosses, Too Few Leaders](https://rajeevpeshawaria.com/books/tmbtfl/)**” nos habla sobre los niveles de engagement que puede tener un una persona. Nos comenta que existen tres niveles: Insatisfecho y disengaged, Safisfecho pero no engaged y Energizado.

![niveles de engagement](/imgs/niveles-de-engagement.png)

Hoy no vamos a hablar de la primera transición, que es cómo conseguimos empleados satisfechos. Esto pasa por tener cubiertos los [factores de higiene](https://study.com/academy/lesson/hygiene-factors-definition-lesson-quiz.html#:~:text=What%20Is%20a%20Hygiene%20Factor,appropriately%20applied%20by%20an%20organization.), tales como salario, etc. Vamos a dar esas necesidades básicas por cubiertas y nos vamos a centrar en cómo conseguir motivarles. Este punto es importante porque es posible que los esfuerzos que hagamos implementando en nuestro equipo estos planes sean en vano. Cada equipo es un caso completamente distinto. Es tu trabajo ser crítico y entender en que fase te encuentras.

En esta serie de posts nos centraremos en cómo motivar a nuestros directs a través del personal growth. Para ello usaremos un método que comparte Kim Scott en su libro Radical candor: 3 career conversations.

## What are career conversations?

Cada direct es diferente y tiene his own growth trajectory. Es por eso que las career conversations son un proceso que nos permite extraer lo que realmente es importante para ellos. Para cada direct el output será diferente pero siempre conseguiremos el mismo outcome, que es alinear los valores y sueños de cada uno de los integrantes de nuestro equipo con las expectativas de la compañía y el trabajo disponible. Esto nos lleva a que estén más energizados y generen un impacto mayor en el negocio.

Es importante entender cuales son sus inquietudes, que es lo importante para ellos, hacia donde quieren ir y con esto trabajar juntos en plantear el mejor plan posible para conseguirlo. Nuestro trabajo ahí será alinear las expectativas personales con las del equipo y toda la empresa y ser capaces de generar un plan que aporte valor a todos por igual.

## Why career conversations are important

### 1) Increase employee engagement and retention

Vivimos tiempos convulsos. En lo laboral, la era post pandemia nos ha dejado con un panorama desequilibrado donde términos como la gran renuncia o la renuncia silenciosa nos suenan a todos. A lo largo del planeta se está viendo que el [porcentaje de profesionales que se han planteado dejar el trabajo está en aumento](https://www.linkedin.com/pulse/great-resignation-why-so-many-thinking-quitting-alistair-cox/). 

Por otro lado vemos en estudios como el presentado por [Right Management](https://www.right.com/wps/wcm/connect/728860eb-e39f-4d31-a75c-aae2810e8864/RM_TalkTheTalk_Whitepaper_lo.pdf?MOD=AJPERES), que la gran mayoría de los profesionales que respondieron a la encuesta estarían más motivados en el trabajo si su manager mostrara más interés en la progresión de su carrera.

Esto nos lleva a entender los beneficios que nos puede aportar las career conversation. Es más probable que a nuestro equipo le motive el día a día del trabajo si este se alinea con sus objetivos a largo plazo.

Si volvemos a centrarnos en la retención, estas conversaciones pueden marcar la diferencia en cuanto a reducir el churn. Una de nuestras responsabilidades como manager de nuestro equipo, no solo es contratar al mejor equipo, pero retenerlo. Este punto es el más clave y para demostrar a nuestros directs que nos preocupamos por su desarrollo personal y que estamos dispuestos a proveerles con recursos y oportunidades para que puedan brillar.

### 2) Career conversations foster self-awareness in the workplace

Si nuestra intención es crear un equipo de alto impacto, donde el ownership y el accountability sean dos de sus características principales, lo que esperamos encontrar es que nuestro equipo tiene unas expectativas altas con la vida. 

Dicho esto, si empezamos a indagar, lo que posiblemente encontremos es que nuestro equipo no tiene mucha claridad sobre sus valores personales o su desired career path, y todo esto, en el mejor de los casos. Las nuevas generaciones (en las que me incluyo, soy millenial) viven al día. Podríamos entrar en los detalles, pero es un hecho.

Ayudarles a reflexionar sobre sus aspiraciones, guiarles en este ejercicio y estructurarles el pensamiento no hace más que ayudarles en reflexionar sobre qué es importante para ellos y sobre qué quieren conseguir en su carrera.

What activities and projects do they enjoy most? What kind of work environments do they prefer? What new skills would they like to learn? Where do they see themselves in ten years? How do their personal values relate to their job?

These are all questions that will help your employees become more self-aware. But remember, yo need to be self-aware first.

### 3) Develop positive relationships with your team

¿Cuántos 1:1 has cancelado por no tener temas de conversación? ¿En cuántos has revisado simplemente el estado de los proyectos? ¿Qué porcentaje de 1:1 han sido útiles para tu direct y cuantos para ti?

Es muy fácil perdernos en la táctica diaria y olvidarnos de cultivar nuestras relaciones, de mirar a largo plazo. Las career conversations nos ayudan con esto. Asking our direct reports about their aspirations is a great way to get to know them and show that you care personally about them.

Esto nos permitirá acercarnos a ellos, develop closer relationships with them, as they’ll see you as a coach and mentor, and not only as their boss.

## Algo de historia

Este framework lo desarrolló Russ Laraway cuando era Director of sales en Google. Kim Scott comenta que lo desarrolló en un periodo difícil allí en Google. A Russ se le pidió gestionar un equipo que provenía de una adquisición. El equipo estaba desmoralizado: pesimistas sobre sus oportunidades de crecimiento y convencidos de que sus managers no los valoraban. La adquisición había costado al rededor de un billón de dólares y google necesitaba el equipo intacto para que la inversión fuese rentable. En este contexto desarrolló este framework para demostrar al equipo que la empresa sí que se preocupaba por ellos y que sí que le importaba su crecimiento. 

El resultado fue que en la siguiente internal survey of employee satisfaction, se vio que en la gente de su equipo había un incremento en el optimismo sobre el futuro en la compañía y una mejora sobre la opinión de sus managers. Comenta Kim que nadie en el equipo de HR había visto tal mejora nunca.

## Career development framework:

> All people have their own growth trajectories, and it’s a mistake to push everyone to be either a “superstar” or a “rock star”. You need to balance growth and Stability.
> 

*Kim Scott*

Para entender las expectativas de crecimiento de alguien, es importante tener career conversations en las que poder conocer a tu direct mejor. Necesitas entender cuales sons sus sueños y así poder planear cómo conseguir sus aspiraciones. Da igual si decides optar por este framework o no, pero lo importante es que lo hagas. Si no conoces a tu equipo, difícilmente podrás ayudarles.

Si decides optar por este framework, recuerda que está organizado en tres pasos:

## Conversation one**: life story**

La primera conversación esta pensada para aprender sobre lo que motiva a cada uno de tus directs. La idea es sencilla, solo tienes que hacer una pregunta y dejar que tu interlocutor hable: “Starting with kindergarten, tell me about your life”.

Parece sencillo, pero no lo es tanto. Con esta pregunta intentamos darle la vuelta a la pregunta de “cuales son tus valores? que te motiva?”. Russ nos sugiere que nos enfoquemos en los cambios que han hecho y entender el porqué detrás de esos cambios. Por regla general detrás de esas decisiones afloran los valores de la persona.

Un cambio de colegio a los 16 años te puede decir mucho más de lo que crees. Te puede hacer ver que esa persona tiene claras sus prioridades y hará todo lo que esté en su mano para conseguir lo que se propone, aunque sea doloroso. O alguien que dejara la universidad para trabajar, si indagas, te puede mostrar que necesita independencia financiera, o que es mas pragmático y necesitaba sentirse realizada.

Recuerda que no buscas la verdad absoluta, solo entender mejor a tus directs y aquello que les preocupa. Tampoco esperes que se abran enteramente para ti. Hay gente que les costará más que a otros, solo necesitas ganar más confianza. Mostrarse vulnerable y humano con ellos suele funcionar.

Es posible que te sientas incómodo teniendo estas conversaciones. Tu trabajo es preocuparte por tu equipo y ayudarles a crecer y dar el 100% en su día a día. No puedes hacer eso si no los conoces. Y si no estás dispuesto a hacerlo, incluso a abrirte tu primero, igual no has elegido bien tu trabajo.

O puede que sientas que te estás entrometiendo en su vida. Mientras tengáis estas conversaciones en un entorno de trust y respeto, no pasa nada. tus directs seguramente estarán encantados de tenerlas. Puede que haya puntos que no quieran compartir, tendrás que respetarlo. Cuando veas signos de que no se sienten cómodos, cambia el tema, no presiones.

### Conversation two**: Dreams**

Una vez tenemos identificado lo que motiva a nuestro direct, pasamos a entender los sueños de dicha persona, que quieren conseguir en lo más alto de su carrera profesional, cómo se ven en el mejor momento de su carrera. 

En este punto hay dos cosas que tenemos que tener en cuenta. La primera es creer que todo el mundo busca ser el mejor en la profesión. Tenemos que estar preparados para cualquier respuesta, y no solo eso, dejar espacio para que salga. Es por eso que nos sugieren la palabra “sueños” concretamente y no “career aspirations” o “five-year plans”. Si realmente queremos ayudar a nuestro directs, queremos que sean honestos con nosotros, y para eso las palabras importan. “Cual es tu plan a 5 años” se va a centrar en el medio plazo y en lo estrictamente laboral pero, si por lo contrario, preguntamos a nuestro direct, “cuales son sus sueños”, podremos obtener respuestas con más valor como podría ser “me gustaría poder jubilarme pronto y viajar”. Además que si nos focalizamos mucho en el concepto de “career” en esta sesión, focalizamos la conversación en promociones y es algo que nunca lleva a buen puerto.

El segundo punto que tenemos que tener en cuenta es que nuestros directs nos dirán lo que piensan que queremos oír. Somos sus jefes, quieren que estemos contentos con ellos. Posiblemente nos digan que quieren hacer algo muy similar a lo que hacemos nosotros.

Kim Scott nos recomienda empezar con la pregunta “What do you want the pinnacle of your career to look like?”. A partir de este punto debemos pedirles que piensen entre 3 y 5 ideas que respondan a esta pregunta. Pidiendo esto, les permitimos incluir los sueños que creen que queremos oír mas los suyos propios.

Pídeles que creen una tabla con 5 columnas como la que se ve más abajo. En lo superior de cada columna pídeles que escriban los 3 a 5 sueños que tienen. Tendría que quedar algo similar a esto:

| CTO en startup | Directivo Tecnico | Consultor de startups | Retirado monitor de esqui | Crypto broker |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |

Una vez tengáis identificados estos 5 sueños, entabla una conversación y pensad juntos que skills necesitaría tu direct en cada uno de los escenarios. Reflexionad sobre su nivel de competencia para cada uno de estos skills. Suele ser bastante obvio cuales son los nuevos skills que la persona tiene que adquirir. Te debería de quedar algo similar a esto:

| CTO en startup | Directivo Tecnico | Consultor de startups | Retirado monitor de esqui | Crypto broker |
| --- | --- | --- | --- | --- |
| Leadership | Management | Selling skills | Ski skills | trading skills |
| Management | People skills | Presentations | Teamplayer | curiosity |
| Technical Excellence | Product Oriented | Problem solving | Mentoring | risk averse |
| Business Oriented | Communication | Analytical / Strategic vision | Network | research skills / identifying oppts |
| Presentations | Technical Excellence | Business process | Communication | Business oriented |
| Communication | Metric Oriented (Data driven) | Market/Industry knowledge | Selling skills | Market / Industry expertise |
| Decision Making | Accountability | Network | People skills |  |

A partir de aquí tu trabajo es ayudarles a pensar cómo podrían adquirir cada uno de esos skill: que proyectos puedes asignarles, a quien puede presentarles, que material formativo existe que les puede beneficiar.

### Conversation three**: The 18-month career action plan**

Ya tienes toda la información para empezar a trazar un plan. Sabes cuales son los valores de tu direct, cuales son sus triggers, que les motiva. Y por otro lado entiendes sus sueños, que skills les interesa perfeccionar. Solo te queda alinear sus expectativas con los de la empresa. ¡Manos a la obra!

Podrías empezar a plantearlo tu solo y crear una propuesta que luego contrastases con tu direct, pero sin duda lo que más engagement va a generar es que te plantees las primeras preguntas en un one on one junto con él. Aquí te dejo algunas preguntas que te pueden valer: 

- “What do I need to learn in order to move in the direction of my dreams?”
- “How should I prioritize the things I need to learn?”
- “Whom can I learn from?”
- “How can I change my role to learn it?”

Una vez tengas claras y contrastadas las respuestas a estas preguntas, te será mucho más fácil identificar oportunidades en el trabajo que le ayuden a desarrollar los skills, que ya habéis identificado en la segunda conversación, en los próximos 6 a 12 meses. Con esto los pondrás en el camino de al menos uno de sus sueños.

Nosotros en Seedtag los career action plan los trabajamos a 12 meses. Nuestra premisa es que deben tener un objetivo final, el cual debe ser SMART. Nuestro contexto puede ser muy cambiante y pueden aparecer o desaparecer oportunidades de aprendizaje a lo largo del tiempo, lo que nos puede llevar a iterar el plan. Es por eso que debemos tener siempre muy claro cual es el objetivo detrás del plan actual.

## Conclusión

Si somos capaces de clarificar valores y sueños de nuestros directs y alinearlo lo máximo posible con las expectativas de la compañía y el trabajo disponible, sin duda conseguiremos un equipo más fuerte. Cada uno de los integrantes de nuestro equipo tendrá un impacto mayor y estará más contento.

Esto nos permite llevar al equipo a otro nivel. Cuando tenemos dicho equipo contento y con un alto impacto, conseguimos un equipo con engagement. Todo esto unido nos permite retrasar la salida de los miembros del equipo e incrementar la media de tiempo en la compañía.



`,
};

export default article;
