// Genera las páginas de servicio (/SLUG/index.html) a partir de una plantilla
// compartida. Se ejecuta una sola vez para producir los archivos estáticos;
// no corre en el servidor.
const fs = require('fs');
const path = require('path');

const WA = '573026119411';
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const services = [
  {
    slug: 'agente-whatsapp-ia',
    icon: '🤖',
    name: 'Agente de WhatsApp con IA',
    title: 'Agente de WhatsApp con IA para empresas en Medellín',
    metaDesc: 'Bot de WhatsApp con inteligencia artificial que atiende clientes 24/7, responde consultas y deriva a un humano cuando hace falta. Implementado por Vtlik Solutions.',
    h1: 'Un agente de WhatsApp que <span class="accent">atiende como tu mejor vendedor</span>, 24/7',
    sub: 'Bot inteligente conectado a un número real de WhatsApp. Responde consultas, entiende el contexto de cada conversación y sabe cuándo pasarle el chat a una persona.',
    waMsg: 'Hola, quiero un agente de WhatsApp con IA para mi empresa',
    includes: [
      { icon: '💬', title: 'Respuestas con contexto', desc: 'No es un árbol de opciones — entiende la conversación completa y responde en lenguaje natural, no en respuestas enlatadas.' },
      { icon: '🔀', title: 'Derivación a humano', desc: 'Detecta cuándo un caso necesita a una persona real y transfiere la conversación sin que el cliente tenga que repetir nada.' },
      { icon: '📋', title: 'Panel de administración', desc: 'Ves las conversaciones, ajustas respuestas y consultas métricas de uso sin tocar código.' },
      { icon: '🔔', title: 'Alertas en tiempo real', desc: 'Notificaciones por Telegram o email cuando el bot detecta una conversación que requiere atención inmediata.' },
    ],
    steps: [
      { title: 'Conectamos tu número', desc: 'Vinculamos el bot a tu WhatsApp Business real, sin cambiar el número que ya usan tus clientes.' },
      { title: 'Entrenamos el contexto', desc: 'Cargamos la información de tu negocio: productos, precios, preguntas frecuentes, tono de voz.' },
      { title: 'Probamos en paralelo', desc: 'El bot responde en modo prueba mientras tu equipo lo valida, antes de ponerlo en producción.' },
      { title: 'Activamos y monitoreamos', desc: 'Sale en vivo y seguimos ajustando respuestas con datos reales de las primeras conversaciones.' },
    ],
    advantages: [
      { icon: '🧠', title: 'IA que suma valor real', desc: 'Usamos DeepSeek, GPT o Claude según el caso — no IA de adorno, la que mejor responda tu contexto.' },
      { icon: '🔗', title: 'Multi-canal si lo necesitas', desc: 'El mismo motor puede atender WhatsApp, tu sitio web y otros canales sin duplicar trabajo.' },
      { icon: '⚡', title: 'Primera versión en días', desc: 'No meses de consultoría: tenés un bot respondiendo de verdad en la primera semana.' },
      { icon: '🔒', title: 'El bot es tuyo', desc: 'Código propio, sin depender de una plataforma de terceros que te pueda cerrar la cuenta.' },
    ],
    faq: [
      { q: '¿El bot puede tomar pedidos o solo responde preguntas?', a: 'Puede hacer ambas cosas. Lo configuramos según tu caso: desde responder preguntas frecuentes hasta tomar pedidos completos y confirmar disponibilidad.' },
      { q: '¿Qué pasa si el bot no sabe responder algo?', a: 'Detecta cuándo no tiene una respuesta confiable y deriva la conversación a un humano en vez de inventar información.' },
      { q: '¿Necesito un número de WhatsApp Business nuevo?', a: 'No necesariamente. Podemos trabajar con el número que ya usás, siempre que puedas migrarlo a WhatsApp Business API.' },
      { q: '¿Cuánto cuesta un agente de WhatsApp con IA?', a: 'Depende de la complejidad del flujo de conversación, pero proyectos de este tipo suelen estar entre USD 650 y USD 2.500. Con herramientas de IA en el desarrollo entregamos más rápido que un freelancer tradicional, y eso se refleja en el precio. Te damos un presupuesto fijo antes de empezar.' },
    ],
    related: ['chatbot-atencion-cliente', 'crm-gestion-leads', 'automatizacion-python'],
    caseLink: { name: 'WOpen', desc: 'Bot multimodal enterprise en producción, con DeepSeek, alertas por Telegram y panel de administración.' },
  },
  {
    slug: 'dashboards-reportes-automaticos',
    icon: '📊',
    name: 'Dashboards y reportes automáticos',
    title: 'Dashboards y reportes automáticos para empresas | Vtlik',
    metaDesc: 'Tableros de control conectados a tus datos en tiempo real: ventas, agentes y operaciones en Google Sheets o una app web. Sin armar reportes a mano.',
    h1: 'Reportes que se arman <span class="accent">solos</span>, todos los días',
    sub: 'Tableros conectados directamente a tus datos. Métricas de ventas, operación o agentes actualizadas en tiempo real, en Google Sheets o en una app web propia.',
    waMsg: 'Hola, quiero un dashboard con reportes automáticos para mi empresa',
    includes: [
      { icon: '🔄', title: 'Datos siempre actualizados', desc: 'El dashboard se actualiza solo desde tu fuente de datos — nadie tiene que copiar y pegar números al final del día.' },
      { icon: '📈', title: 'Métricas que importan', desc: 'Definimos juntos los KPIs reales de tu operación, no una plantilla genérica con gráficos de relleno.' },
      { icon: '🗂️', title: 'Google Sheets o app web', desc: 'Si tu equipo ya vive en Sheets, el reporte llega ahí. Si necesitás algo más robusto, construimos una app web dedicada.' },
      { icon: '👥', title: 'Vistas por rol', desc: 'Un coordinador ve el resumen general; un agente ve solo lo suyo. El mismo dashboard, distintos niveles de detalle.' },
    ],
    steps: [
      { title: 'Mapeamos tus fuentes de datos', desc: 'Identificamos de dónde salen los números hoy: un sistema interno, un Excel, una API, un CRM.' },
      { title: 'Definimos los KPIs', desc: 'Elegimos con vos qué métricas realmente necesitan ver a diario y con qué frecuencia se actualizan.' },
      { title: 'Construimos el tablero', desc: 'Armamos las vistas, los filtros y las alertas sobre la plataforma que mejor se adapte a tu equipo.' },
      { title: 'Automatizamos la actualización', desc: 'El reporte se refresca solo, sin que nadie tenga que tocarlo manualmente cada mañana.' },
    ],
    advantages: [
      { icon: '⏱️', title: 'Sin armado manual', desc: 'Lo que hoy le toma horas a alguien armar en Excel, corre solo todos los días.' },
      { icon: '🎯', title: 'A tu medida', desc: 'No es una plantilla de BI genérica — se construye alrededor de las métricas que tu operación realmente usa.' },
      { icon: '🔗', title: 'Se conecta con lo que ya tenés', desc: 'Google Sheets, bases de datos propias, APIs de terceros — el dashboard lee de donde ya vivan tus datos.' },
      { icon: '📈', title: 'ROI visible desde el día 1', desc: 'El tiempo que hoy se pierde armando reportes a mano se ve reflejado desde la primera semana.' },
    ],
    faq: [
      { q: '¿El dashboard funciona si mis datos están en Excel?', a: 'Sí. Podemos conectarlo a Google Sheets o a archivos Excel que subas periódicamente, y automatizar la actualización desde ahí.' },
      { q: '¿Puedo pedir cambios en las métricas después de entregado?', a: 'Sí, incluimos un período de ajustes post-entrega. Para agregar métricas nuevas más adelante, coordinamos un presupuesto adicional.' },
      { q: '¿Necesito contratar una plataforma de BI aparte?', a: 'No necesariamente. Muchos dashboards los construimos directo en Google Sheets con Apps Script, sin costo de licencias adicionales.' },
      { q: '¿Cuánto cuesta un dashboard automatizado?', a: 'Un dashboard en Google Sheets suele arrancar en USD 280–750. Una app web dedicada con base de datos propia va de USD 900 en adelante, según el alcance.' },
    ],
    related: ['monitoreo-tiempo-real', 'integracion-google-workspace', 'automatizacion-python'],
    caseLink: { name: 'DashBig', desc: 'Portal de métricas con motor de reportes que combina datos de múltiples fuentes en producción.' },
  },
  {
    slug: 'monitoreo-tiempo-real',
    icon: '🔔',
    name: 'Monitoreo en tiempo real',
    title: 'Monitoreo en tiempo real de procesos y KPIs | Vtlik',
    metaDesc: 'Sistema que vigila tus procesos, agentes o KPIs y envía alertas automáticas a Slack o email cuando algo sale de rango. Ideal para call centers y operaciones críticas.',
    h1: 'Que te avisen <span class="accent">antes</span> de que el problema sea grande',
    sub: 'Monitoreo automático de procesos, agentes o KPIs, con alertas a Slack o email en el momento en que algo sale de rango — no al final del día, cuando ya es tarde.',
    waMsg: 'Hola, quiero un sistema de monitoreo en tiempo real para mi operación',
    includes: [
      { icon: '📡', title: 'Vigilancia continua', desc: 'El sistema revisa tus procesos o KPIs a intervalos definidos, sin depender de que alguien esté mirando una pantalla.' },
      { icon: '🎚️', title: 'Umbrales configurables', desc: 'Vos decidís qué rango es normal y qué dispara una alerta — ajustable sin reiniciar el sistema.' },
      { icon: '🔔', title: 'Alertas a Slack o email', desc: 'El equipo se entera en el momento, en el canal donde ya trabaja, no en un reporte que nadie revisa.' },
      { icon: '⚡', title: 'Cache multicapa', desc: 'Diseñado para monitorear volumen alto de datos sin sobrecargar los sistemas que está vigilando.' },
    ],
    steps: [
      { title: 'Identificamos qué vigilar', desc: 'Agentes, procesos, tiempos de respuesta o cualquier KPI crítico de tu operación diaria.' },
      { title: 'Definimos los umbrales', desc: 'Establecemos qué valores son normales y a partir de cuál se dispara una alerta.' },
      { title: 'Conectamos las alertas', desc: 'Configuramos el canal — Slack, email o ambos — donde tu equipo ya recibe notificaciones.' },
      { title: 'Ajustamos con datos reales', desc: 'Las primeras semanas afinamos umbrales para evitar tanto el silencio como el ruido de alertas falsas.' },
    ],
    advantages: [
      { icon: '⏱️', title: 'Detección en el momento', desc: 'No esperás al reporte del día siguiente — te enterás mientras el proceso todavía se puede corregir.' },
      { icon: '🎯', title: 'Sin falsos positivos', desc: 'Umbrales dinámicos ajustados a tu operación real, no alertas genéricas que el equipo termina ignorando.' },
      { icon: '🔧', title: 'Configuración sin reiniciar', desc: 'Cambiás parámetros desde Google Sheets o el panel, sin tocar código ni bajar el sistema.' },
      { icon: '📊', title: 'Pensado para volumen', desc: 'Probado monitoreando decenas de agentes simultáneamente en operaciones de call center reales.' },
    ],
    faq: [
      { q: '¿Sirve para monitorear un equipo de agentes de call center?', a: 'Sí, es uno de los casos de uso más comunes: monitoreo de agentes y casos con alertas automáticas cuando algo sale de rango.' },
      { q: '¿Puedo cambiar los umbrales de alerta yo mismo?', a: 'Sí, muchos sistemas los configuramos para editarse desde Google Sheets, sin necesidad de reiniciar nada ni tocar código.' },
      { q: '¿A dónde llegan las alertas?', a: 'A donde tu equipo ya trabaje: Slack, email, o ambos. No agregamos un canal nuevo que nadie va a revisar.' },
      { q: '¿Cuánto cuesta un sistema de monitoreo?', a: 'Depende de cuántos procesos o agentes monitorea y la complejidad de los umbrales, pero suele estar entre USD 650 y USD 2.100.' },
    ],
    related: ['dashboards-reportes-automaticos', 'auditorias-calidad-automatizadas', 'scraping-extraccion-datos'],
    caseLink: { name: 'Monitor', desc: 'Sistema de alertas para call center en producción, con scraping automatizado y más de 60 agentes monitoreados en tiempo real.' },
  },
  {
    slug: 'crm-gestion-leads',
    icon: '🎯',
    name: 'CRM y gestión de leads',
    title: 'CRM a medida para gestión de leads | Vtlik Solutions',
    metaDesc: 'Sistema web para asignar, hacer seguimiento y cerrar leads. Panel para coordinadores y agentes, con historial completo y etapas configurables.',
    h1: 'Un CRM que se adapta a <span class="accent">tu</span> proceso de venta, no al revés',
    sub: 'Sistema web para asignar, dar seguimiento y cerrar leads. Panel para coordinadores y agentes, historial completo por contacto y etapas que definís vos.',
    waMsg: 'Hola, quiero un CRM a medida para gestionar mis leads',
    includes: [
      { icon: '🔀', title: 'Auto-asignación de leads', desc: 'Los leads entran y se reparten entre agentes según las reglas que definas — por carga, por zona, por producto.' },
      { icon: '📈', title: 'Etapas configurables', desc: 'El embudo de ventas es el tuyo: definís las etapas y el sistema se ajusta, no vos al sistema.' },
      { icon: '📝', title: 'Historial completo', desc: 'Cada contacto queda con su historial de interacciones, sin depender de la memoria del agente que lo atendió.' },
      { icon: '👤', title: 'Roles de coordinador y agente', desc: 'El coordinador ve todo el panorama; cada agente ve solo lo suyo, sin ruido.' },
    ],
    steps: [
      { title: 'Mapeamos tu proceso actual', desc: 'Cómo entra un lead hoy, quién lo atiende y en qué momento se pierde seguimiento.' },
      { title: 'Diseñamos el flujo', desc: 'Definimos etapas, reglas de asignación y qué datos necesita ver cada rol.' },
      { title: 'Construimos el sistema', desc: 'Panel web con login, roles y base de datos propia — no una hoja de cálculo con permisos improvisados.' },
      { title: 'Migramos y capacitamos', desc: 'Pasamos tus leads actuales al sistema nuevo y dejamos a tu equipo operando sin fricción.' },
    ],
    advantages: [
      { icon: '🎯', title: 'A tu proceso, no una plantilla', desc: 'No es un CRM genérico de mercado — se construye alrededor de cómo realmente vendés.' },
      { icon: '🔗', title: 'Se conecta con Gmail y Sheets', desc: 'Integración directa con Google Workspace vía Apps Script, sin plugins de terceros.' },
      { icon: '📊', title: 'Datos de tu operación real', desc: 'Reportes de conversión y seguimiento basados en tus propias etapas, no en categorías genéricas.' },
      { icon: '🔒', title: 'Código y datos propios', desc: 'El sistema y la base de datos son tuyos — sin depender de una plataforma SaaS de terceros.' },
    ],
    faq: [
      { q: '¿Puedo definir mis propias etapas del embudo de ventas?', a: 'Sí, las etapas son completamente configurables. El sistema se adapta a tu proceso de venta actual, no impone uno genérico.' },
      { q: '¿Cuántos agentes o coordinadores puede manejar?', a: 'No hay un límite fijo — lo dimensionamos según tu volumen de leads y tamaño de equipo desde el diseño inicial.' },
      { q: '¿Se integra con Gmail o WhatsApp?', a: 'Sí, podemos integrar seguimiento por Gmail vía Apps Script, y conectar WhatsApp si el flujo de tu equipo lo requiere.' },
      { q: '¿Cuánto cuesta un CRM a medida?', a: 'Un CRM completo con roles, base de datos y panel suele estar entre USD 850 y USD 2.500, según la cantidad de etapas e integraciones.' },
    ],
    related: ['agente-whatsapp-ia', 'dashboards-reportes-automaticos', 'sistemas-web-medida'],
    caseLink: { name: 'TigoApp', desc: 'CRM de leads en producción con auto-asignación, seguimiento por etapas e integración con Gmail vía Apps Script.' },
  },
  {
    slug: 'auditorias-calidad-automatizadas',
    icon: '✅',
    name: 'Auditorías de calidad automatizadas',
    title: 'Auditorías de calidad automatizadas para call center | Vtlik',
    metaDesc: 'Automatización de auditorías QA sobre gestiones de agentes. Descarga, procesa y genera reportes sin intervención humana. De horas a minutos.',
    h1: 'De <span class="accent">3 horas a 15 minutos</span> por auditoría de calidad',
    sub: 'Automatizamos la auditoría QA de gestiones de agentes: descarga los casos, los analiza y genera el informe sin que nadie tenga que revisarlos uno por uno.',
    waMsg: 'Hola, quiero automatizar las auditorías de calidad de mi equipo',
    includes: [
      { icon: '⬇️', title: 'Descarga automática', desc: 'El sistema trae las gestiones o llamadas a auditar directo del sistema donde ya viven, sin exportar manualmente.' },
      { icon: '🔍', title: 'Análisis de eficiencia', desc: 'Evalúa las gestiones contra los criterios de calidad que definas, de forma consistente en cada auditoría.' },
      { icon: '📄', title: 'Informe automático', desc: 'El reporte se genera solo, listo para coordinadores, sin una persona armándolo caso por caso.' },
      { icon: '🤖', title: 'Apoyo con IA', desc: 'Para criterios más subjetivos, usamos modelos de IA que evalúan texto y contexto, no solo reglas fijas.' },
    ],
    steps: [
      { title: 'Definimos los criterios de calidad', desc: 'Qué se evalúa en cada gestión y cómo se pondera cada criterio en el resultado final.' },
      { title: 'Conectamos la fuente de datos', desc: 'El sistema accede a las gestiones o llamadas donde ya están registradas, sin cambiar tu flujo actual.' },
      { title: 'Automatizamos el análisis', desc: 'Cada gestión se evalúa automáticamente contra los criterios definidos.' },
      { title: 'Entregamos el reporte', desc: 'Informe listo para coordinadores, con el detalle de cada gestión auditada.' },
    ],
    advantages: [
      { icon: '⏱️', title: '90% menos tiempo', desc: 'Auditorías que tomaban horas se reducen a minutos, liberando al equipo de calidad para lo que realmente importa.' },
      { icon: '📏', title: 'Criterios consistentes', desc: 'Cada gestión se evalúa con el mismo criterio, sin la variación natural de auditar manualmente.' },
      { icon: '🔍', title: 'Sin muestreo, cobertura total', desc: 'En vez de auditar una muestra, el sistema puede revisar el 100% de las gestiones.' },
      { icon: '📈', title: 'Historial para seguimiento', desc: 'Los resultados quedan registrados para ver evolución de calidad por agente en el tiempo.' },
    ],
    faq: [
      { q: '¿Reemplaza al equipo de calidad o lo apoya?', a: 'Lo apoya. El sistema hace el trabajo repetitivo de descargar y evaluar; tu equipo de calidad se enfoca en casos que realmente necesitan criterio humano.' },
      { q: '¿Puede auditar el 100% de las gestiones, no solo una muestra?', a: 'Sí, al automatizar el proceso ya no hace falta limitarse a una muestra — puede cubrir todas las gestiones del período.' },
      { q: '¿Funciona con cualquier sistema de gestión o CRM?', a: 'Se adapta al sistema donde ya trabajás. Si tiene una forma de exportar o consultar datos, lo podemos conectar.' },
      { q: '¿Cuánto cuesta automatizar las auditorías de calidad?', a: 'Depende de la complejidad de los criterios de evaluación, pero proyectos similares están entre USD 650 y USD 1.700.' },
    ],
    related: ['monitoreo-tiempo-real', 'scraping-extraccion-datos', 'control-asistencia-turnos'],
    caseLink: { name: 'Auditorías SMD', desc: 'Sistema en producción que redujo el tiempo de auditoría de 3 horas a 15 minutos, con reportes generados automáticamente.' },
  },
  {
    slug: 'control-asistencia-turnos',
    icon: '🗓️',
    name: 'Control de asistencia y turnos',
    title: 'Control de asistencia y gestión de turnos para equipos | Vtlik',
    metaDesc: 'Sistema web para gestionar turnos de trabajo, registrar presencia y visualizar coberturas por área o equipo, con alertas cuando alguien no se conecta.',
    h1: 'Sabé quién está trabajando <span class="accent">sin preguntar</span>',
    sub: 'Sistema web para gestionar turnos, registrar asistencia y visualizar coberturas por área. Alertas automáticas cuando un agente no se conecta en su horario.',
    waMsg: 'Hola, quiero un sistema de control de asistencia y turnos',
    includes: [
      { icon: '📅', title: 'Gestión de turnos', desc: 'Visualiza el cronograma completo por equipo o área, con asignación y rotación configurable.' },
      { icon: '✅', title: 'Registro de presencia', desc: 'Cada agente registra su entrada y salida; el sistema queda con el histórico exacto, sin planillas paralelas.' },
      { icon: '🔁', title: 'Cambios de turno', desc: 'Los agentes pueden solicitar cambios de turno entre ellos, con aprobación de coordinador desde el panel.' },
      { icon: '🔔', title: 'Alertas por ausencia', desc: 'Si alguien no se conecta en su horario asignado, el coordinador recibe una notificación automática.' },
    ],
    steps: [
      { title: 'Mapeamos tus turnos actuales', desc: 'Cómo están organizados hoy los horarios y quién los administra.' },
      { title: 'Configuramos las reglas', desc: 'Rotación, coberturas mínimas por franja horaria y reglas de cambio de turno.' },
      { title: 'Implementamos el registro', desc: 'Conectamos el registro de entrada/salida con el sistema, sin depender de planillas manuales.' },
      { title: 'Activamos las alertas', desc: 'El coordinador empieza a recibir notificaciones automáticas de ausencias o coberturas incompletas.' },
    ],
    advantages: [
      { icon: '👀', title: 'Visibilidad en tiempo real', desc: 'Sabés quién está conectado y quién no, sin tener que preguntar por chat a cada coordinador.' },
      { icon: '🔄', title: 'Cambios de turno sin caos', desc: 'Los agentes gestionan sus cambios desde el sistema, con aprobación de coordinador integrada.' },
      { icon: '📧', title: 'Notificaciones automáticas', desc: 'Emails y alertas cuando algo necesita atención, sin monitoreo manual constante.' },
      { icon: '🔐', title: 'Login con Google', desc: 'Cada agente entra con su cuenta corporativa, sin contraseñas nuevas que administrar.' },
    ],
    faq: [
      { q: '¿Los agentes pueden cambiar turnos entre ellos?', a: 'Sí, pueden solicitar cambios directamente en el sistema, y el coordinador los aprueba desde su panel sin coordinarlo por chat.' },
      { q: '¿Cómo se registra la asistencia?', a: 'Depende del sistema que ya uses — podemos integrarlo con login, con un check-in web, o con la fuente de datos donde hoy se registra.' },
      { q: '¿Puedo ver coberturas por área o equipo?', a: 'Sí, el panel muestra cronogramas y coberturas segmentadas por área, para detectar huecos antes de que sean un problema.' },
      { q: '¿Cuánto cuesta un sistema de control de asistencia?', a: 'Un sistema básico de registro y turnos arranca en USD 450. Con reglas de rotación y alertas automáticas, entre USD 700 y USD 1.500. A diferencia de plataformas como Buk o Rankmi, es pago único — sin mensualidad por empleado.' },
    ],
    related: ['auditorias-calidad-automatizadas', 'sistemas-web-medida', 'integracion-google-workspace'],
    caseLink: { name: 'Turnos', desc: 'Aplicación web en producción para gestionar cambios de turno, con login de Google, roles y notificaciones automáticas por email.' },
  },
  {
    slug: 'extensiones-chrome-medida',
    icon: '🧩',
    name: 'Extensiones de Chrome a medida',
    title: 'Extensiones de Chrome a medida para empresas | Vtlik',
    metaDesc: 'Herramientas que corren en el navegador de tus agentes: autocompletan formularios, extraen datos o automatizan flujos, sin cambiar tus sistemas actuales.',
    h1: 'Automatiza el navegador de tu equipo <span class="accent">sin tocar tus sistemas</span>',
    sub: 'Extensiones de Chrome que autocompletan formularios, extraen datos o automatizan flujos repetitivos — corren sobre las herramientas que tu equipo ya usa.',
    waMsg: 'Hola, quiero una extensión de Chrome a medida para mi equipo',
    includes: [
      { icon: '✍️', title: 'Autocompletado de formularios', desc: 'Llena campos repetitivos en sistemas internos o portales de terceros con un clic, sin copiar y pegar.' },
      { icon: '📤', title: 'Extracción de datos', desc: 'Saca información de páginas web o portales internos sin necesidad de acceso a su API.' },
      { icon: '🔗', title: 'Sin cambiar tus sistemas', desc: 'La extensión corre en el navegador — no requiere modificar el software que tu equipo ya usa a diario.' },
      { icon: '🏢', title: 'Distribución interna', desc: 'La instalamos en los navegadores de tu equipo sin publicarla en la Chrome Web Store, si preferís mantenerla privada.' },
    ],
    steps: [
      { title: 'Identificamos la tarea repetitiva', desc: 'Qué hace tu equipo manualmente en el navegador, muchas veces al día, que se puede automatizar.' },
      { title: 'Mapeamos el sistema objetivo', desc: 'Revisamos el portal o sistema donde corre la tarea para diseñar la extensión sobre su estructura real.' },
      { title: 'Construimos la extensión', desc: 'Manifest V3, con los permisos mínimos necesarios para hacer su trabajo, nada más.' },
      { title: 'Distribuimos e instalamos', desc: 'La ponemos a disposición de tu equipo, con instrucciones simples de instalación.' },
    ],
    advantages: [
      { icon: '⚡', title: 'Ahorro inmediato por agente', desc: 'Cada gestión repetitiva que hoy toma segundos o minutos, se reduce a un clic.' },
      { icon: '🔓', title: 'Sin depender de una API', desc: 'Funciona incluso sobre portales que no exponen una API pública, siempre que tengan interfaz web.' },
      { icon: '🔒', title: 'Permisos mínimos', desc: 'Solo pedimos acceso a lo que la extensión realmente necesita para funcionar.' },
      { icon: '🧩', title: 'Manifest V3', desc: 'Construida con el estándar actual de Chrome, no una versión legacy que Google va a descontinuar.' },
    ],
    faq: [
      { q: '¿La extensión queda pública en la Chrome Web Store?', a: 'No necesariamente. Si tu caso de uso es interno, la distribuimos de forma privada, sin publicarla para el público.' },
      { q: '¿Funciona en cualquier sitio web o portal interno?', a: 'En la gran mayoría de los casos sí, siempre que el sitio tenga una interfaz web accesible desde el navegador.' },
      { q: '¿Necesito acceso a la API del sistema donde va a correr?', a: 'No es necesario. La extensión interactúa con la página tal como la ve un usuario, sin requerir integración por API.' },
      { q: '¿Cuánto cuesta una extensión de Chrome a medida?', a: 'Proyectos de este tipo suelen estar entre USD 350 y USD 1.000, según cuántos flujos automatiza y la complejidad del sitio objetivo.' },
    ],
    related: ['scraping-extraccion-datos', 'automatizacion-python', 'auditorias-calidad-automatizadas'],
    caseLink: { name: 'IssueFiller', desc: 'Extensión de Chrome en producción para llenado automático de tickets e issues, usada a diario por agentes.' },
  },
  {
    slug: 'automatizacion-python',
    icon: '⚙️',
    name: 'Automatización con Python',
    title: 'Automatización de procesos con Python | Vtlik Solutions',
    metaDesc: 'Scripts y bots en Python que reemplazan tareas manuales: descargas de reportes, envío de emails, procesamiento de datos, sincronización entre sistemas.',
    h1: 'Si lo hacés a mano cada semana, <span class="accent">se puede automatizar</span>',
    sub: 'Scripts y bots en Python que reemplazan tareas manuales repetitivas: descargas de reportes, envíos de email, procesamiento de datos, sincronización entre sistemas.',
    waMsg: 'Hola, quiero automatizar un proceso manual con Python',
    includes: [
      { icon: '📥', title: 'Descargas automáticas', desc: 'Reportes o archivos que hoy alguien descarga manualmente cada día, se traen solos en el horario que definas.' },
      { icon: '🔄', title: 'Sincronización entre sistemas', desc: 'Cuando dos herramientas no se hablan entre sí de forma nativa, construimos el puente que las conecta.' },
      { icon: '📧', title: 'Envíos automáticos', desc: 'Emails, reportes o notificaciones que salen solos, en el momento y con el contenido correcto.' },
      { icon: '🧮', title: 'Procesamiento de datos', desc: 'Limpieza, transformación y cálculo sobre archivos o bases de datos, sin intervención manual.' },
    ],
    steps: [
      { title: 'Mapeamos la tarea manual', desc: 'Qué se hace hoy paso a paso, con qué frecuencia y quién lo hace.' },
      { title: 'Diseñamos el script', desc: 'Definimos la lógica exacta que reemplaza cada paso manual, incluyendo los casos borde.' },
      { title: 'Probamos en paralelo', desc: 'El script corre junto al proceso manual durante un período, para validar que el resultado coincide.' },
      { title: 'Programamos la ejecución', desc: 'Lo dejamos corriendo en el horario que necesites, sin que nadie tenga que iniciarlo a mano.' },
    ],
    advantages: [
      { icon: '⏱️', title: 'Horas devueltas cada semana', desc: 'Tareas que le costaban horas a tu equipo pasan a correr solas, sin intervención.' },
      { icon: '🎯', title: 'Hecho para tu caso', desc: 'No es un script genérico — se construye sobre tu proceso real, con tus reglas y tus sistemas.' },
      { icon: '🔗', title: 'Conecta lo que ya tenés', desc: 'APIs, bases de datos, archivos Excel, portales web — Python los conecta sin importar el origen.' },
      { icon: '🛠️', title: 'Robusto ante errores', desc: 'Manejo de errores y reintentos, para que un fallo puntual no rompa todo el proceso.' },
    ],
    faq: [
      { q: '¿Qué tipo de tareas se pueden automatizar con Python?', a: 'Prácticamente cualquier tarea repetitiva basada en datos: descargas, envíos de email, procesamiento de archivos, sincronización entre sistemas, scraping.' },
      { q: '¿El script corre en mi computador o en la nube?', a: 'Depende del caso — puede correr en un servidor en la nube de forma programada, o en tu infraestructura si lo preferís así.' },
      { q: '¿Qué pasa si el sistema de origen cambia?', a: 'Incluimos un período de ajustes post-entrega. Si el sistema externo cambia su estructura, coordinamos la actualización del script.' },
      { q: '¿Cuánto cuesta automatizar un proceso con Python?', a: 'Los scripts simples arrancan desde USD 250. Automatizaciones más complejas, con múltiples sistemas conectados, van de USD 600 a USD 1.600. Con asistentes de IA en el desarrollo, procesos que antes tomaban semanas hoy salen en días — y eso ya está reflejado en el precio.' },
    ],
    related: ['scraping-extraccion-datos', 'integracion-google-workspace', 'monitoreo-tiempo-real'],
    caseLink: { name: 'Monitor y Auditorías SMD', desc: 'Ambos sistemas en producción están construidos sobre automatización en Python con Selenium.' },
  },
  {
    slug: 'integracion-google-workspace',
    icon: '📋',
    name: 'Integración Google Workspace',
    title: 'Integración de Google Workspace para empresas | Vtlik',
    metaDesc: 'Conectamos Google Sheets, Gmail, Calendar y Drive con tus herramientas mediante Apps Script o la API de Google, sin plugins de terceros.',
    h1: 'Que Google Workspace <span class="accent">trabaje para vos</span>, no al revés',
    sub: 'Conectamos Sheets, Gmail, Calendar y Drive con tus herramientas y procesos, usando Apps Script o la API de Google — sin plugins de terceros ni licencias extra.',
    waMsg: 'Hola, quiero integrar Google Workspace con mis herramientas',
    includes: [
      { icon: '📊', title: 'Sheets como backend', desc: 'Usamos Google Sheets como base de datos liviana cuando tiene sentido, con triggers y automatizaciones vía Apps Script.' },
      { icon: '📧', title: 'Automatización de Gmail', desc: 'Envío y clasificación automática de correos según reglas de tu proceso, sin filtros manuales.' },
      { icon: '📅', title: 'Calendar conectado', desc: 'Agendamiento automático y recordatorios sincronizados con tus sistemas internos.' },
      { icon: '📁', title: 'Drive organizado solo', desc: 'Archivos que se guardan, renombran o mueven automáticamente según las reglas que definas.' },
    ],
    steps: [
      { title: 'Revisamos tu uso actual', desc: 'Cómo usa hoy tu equipo Sheets, Gmail, Calendar y Drive, y dónde hay fricción manual.' },
      { title: 'Diseñamos la integración', desc: 'Definimos qué se automatiza vía Apps Script y qué requiere la API de Google directamente.' },
      { title: 'Implementamos y probamos', desc: 'Construimos los triggers y flujos, validando que no rompan lo que tu equipo ya usa a diario.' },
      { title: 'Dejamos todo documentado', desc: 'Tu equipo sabe qué hace cada automatización, sin depender de que solo nosotros entendamos el sistema.' },
    ],
    advantages: [
      { icon: '💰', title: 'Sin licencias adicionales', desc: 'Si ya pagás Google Workspace, la automatización corre sobre lo que ya tenés, sin herramientas de terceros.' },
      { icon: '🔗', title: 'Todo conectado entre sí', desc: 'Sheets, Gmail, Calendar y Drive trabajando juntos, no como islas separadas.' },
      { icon: '⚡', title: 'Triggers en tiempo real', desc: 'Las automatizaciones corren cuando algo cambia, no en revisiones manuales periódicas.' },
      { icon: '🔒', title: 'Dentro de tu propia cuenta', desc: 'Todo corre sobre tu Workspace — no exportamos tus datos a una plataforma externa.' },
    ],
    faq: [
      { q: '¿Necesito Google Workspace de pago o funciona con Gmail gratis?', a: 'Algunas automatizaciones funcionan con cuentas gratuitas, pero para triggers avanzados y mayor volumen recomendamos Google Workspace de pago.' },
      { q: '¿Puedo automatizar el envío de correos según condiciones?', a: 'Sí, es uno de los casos más comunes: emails que se disparan automáticamente según reglas definidas en tu Sheet o sistema.' },
      { q: '¿Esto reemplaza un CRM o sigue siendo Sheets?', a: 'Depende de tu volumen. Para operaciones pequeñas, Sheets bien automatizado alcanza. Si creces, migramos a un sistema propio.' },
      { q: '¿Cuánto cuesta integrar Google Workspace?', a: 'Automatizaciones simples con Apps Script arrancan en USD 280. Integraciones más completas con múltiples servicios van de USD 550 a USD 1.300.' },
    ],
    related: ['dashboards-reportes-automaticos', 'control-asistencia-turnos', 'automatizacion-python'],
    caseLink: { name: 'DashBig y Wolftls', desc: 'Ambos construidos sobre Google Apps Script, en producción hoy conectando Sheets con procesos operativos reales.' },
  },
  {
    slug: 'scraping-extraccion-datos',
    icon: '🕷️',
    name: 'Scraping y extracción de datos',
    title: 'Scraping y extracción automatizada de datos web | Vtlik',
    metaDesc: 'Extraemos información de cualquier sitio web de forma automatizada: precios, publicaciones, datos de competencia o portales internos sin API pública.',
    h1: 'Los datos están en la web. <span class="accent">Los traemos automáticamente</span>',
    sub: 'Extraemos información de sitios web de forma automatizada: precios de competencia, publicaciones, datos de portales internos que no tienen API pública.',
    waMsg: 'Hola, quiero automatizar la extracción de datos de un sitio web',
    includes: [
      { icon: '💲', title: 'Monitoreo de precios', desc: 'Seguimiento automático de precios de competencia, actualizado con la frecuencia que necesites.' },
      { icon: '🗂️', title: 'Portales sin API', desc: 'Extraemos datos de sistemas internos o portales de terceros que no exponen una API pública.' },
      { icon: '🔄', title: 'Ejecución programada', desc: 'El scraping corre solo, en el horario que definas, sin que nadie tenga que iniciarlo manualmente.' },
      { icon: '📤', title: 'Salida en el formato que uses', desc: 'Los datos extraídos llegan a Google Sheets, una base de datos o un archivo, según cómo trabaje tu equipo.' },
    ],
    steps: [
      { title: 'Analizamos la fuente', desc: 'Revisamos la estructura del sitio o portal del que necesitás extraer información.' },
      { title: 'Construimos el extractor', desc: 'Con Python y Selenium, diseñado para resistir cambios menores en la estructura de la página.' },
      { title: 'Validamos los datos', desc: 'Comparamos la extracción automática contra una revisión manual, para asegurar precisión.' },
      { title: 'Programamos la frecuencia', desc: 'Definimos cada cuánto corre — diario, por hora, o el intervalo que tu caso necesite.' },
    ],
    advantages: [
      { icon: '🎯', title: 'Sin necesidad de API', desc: 'Funciona incluso en sitios que no ofrecen forma oficial de acceder a sus datos.' },
      { icon: '⏱️', title: 'Actualizado siempre', desc: 'Los datos se refrescan automáticamente, sin que alguien tenga que revisar el sitio manualmente.' },
      { icon: '🛡️', title: 'Resistente a cambios menores', desc: 'Diseñamos los extractores para tolerar pequeños cambios de diseño sin romperse.' },
      { icon: '📊', title: 'Listo para analizar', desc: 'Los datos llegan estructurados, listos para conectar a un dashboard o reporte.' },
    ],
    faq: [
      { q: '¿El scraping es legal?', a: 'Extraemos únicamente información pública y accesible, respetando los términos de uso de cada sitio. Te asesoramos si tu caso tiene alguna restricción específica.' },
      { q: '¿Qué pasa si el sitio cambia de diseño?', a: 'Diseñamos los extractores para tolerar cambios menores. Si el sitio cambia significativamente, coordinamos el ajuste del script.' },
      { q: '¿Puede extraer datos de un portal interno de mi empresa?', a: 'Sí, siempre que tengas los accesos correspondientes, podemos automatizar la extracción de portales internos sin API pública.' },
      { q: '¿Cuánto cuesta un sistema de scraping?', a: 'Depende de la complejidad del sitio y la frecuencia de extracción, pero suele estar entre USD 350 y USD 1.250.' },
    ],
    related: ['automatizacion-python', 'monitoreo-tiempo-real', 'extensiones-chrome-medida'],
    caseLink: { name: 'Monitor', desc: 'Usa scraping automatizado con Selenium como parte de su sistema de monitoreo de agentes en producción.' },
  },
  {
    slug: 'chatbot-atencion-cliente',
    icon: '💬',
    name: 'Chatbot para atención al cliente',
    title: 'Chatbot con IA para atención al cliente | Vtlik Solutions',
    metaDesc: 'Asistente virtual para tu sitio web o WhatsApp que responde preguntas frecuentes, toma pedidos y transfiere a humanos según reglas configurables.',
    h1: 'Atención al cliente que <span class="accent">no depende de un horario</span>',
    sub: 'Asistente virtual para tu sitio web o WhatsApp que responde preguntas frecuentes, toma pedidos y transfiere a un humano cuando el caso lo requiere.',
    waMsg: 'Hola, quiero un chatbot de atención al cliente para mi negocio',
    includes: [
      { icon: '❓', title: 'Preguntas frecuentes', desc: 'Responde las consultas que más se repiten sin que un agente tenga que escribir lo mismo cien veces al día.' },
      { icon: '🛒', title: 'Toma de pedidos', desc: 'Puede guiar al cliente por un flujo de pedido completo, con confirmación y datos de contacto.' },
      { icon: '🔀', title: 'Transferencia a humanos', desc: 'Reglas configurables para saber cuándo un caso necesita atención personalizada.' },
      { icon: '🌐', title: 'Multi-canal', desc: 'El mismo asistente puede vivir en tu sitio web y en WhatsApp, con una sola base de conocimiento.' },
    ],
    steps: [
      { title: 'Definimos el alcance', desc: 'Qué preguntas responde, si toma pedidos y cuándo debe transferir a un humano.' },
      { title: 'Cargamos el conocimiento', desc: 'Catálogo, preguntas frecuentes, políticas — todo lo que el bot necesita para responder bien.' },
      { title: 'Integramos el canal', desc: 'Lo conectamos a tu sitio web, WhatsApp, o ambos, según dónde estén tus clientes.' },
      { title: 'Afinamos con conversaciones reales', desc: 'Ajustamos respuestas en base a las primeras interacciones reales con clientes.' },
    ],
    advantages: [
      { icon: '🕐', title: 'Disponible 24/7', desc: 'Responde fuera de horario, fines de semana y feriados, sin costo de turno adicional.' },
      { icon: '🧠', title: 'IA con contexto real', desc: 'No respuestas enlatadas — entiende la pregunta y responde según tu información específica.' },
      { icon: '📉', title: 'Menos carga en tu equipo', desc: 'Libera a tus agentes de las preguntas repetitivas para que se enfoquen en casos que sí necesitan criterio humano.' },
      { icon: '🔧', title: 'Reglas que vos controlás', desc: 'Vos decidís cuándo el bot responde solo y cuándo debe pasar el caso a una persona.' },
    ],
    faq: [
      { q: '¿El chatbot puede vivir en mi sitio web y en WhatsApp a la vez?', a: 'Sí, podemos usar la misma base de conocimiento en ambos canales, manteniendo respuestas consistentes.' },
      { q: '¿Qué pasa si un cliente hace una pregunta que el bot no puede responder?', a: 'Detecta cuándo no tiene una respuesta confiable y transfiere la conversación a un agente humano, según las reglas que definamos.' },
      { q: '¿Puede tomar pedidos completos, no solo responder preguntas?', a: 'Sí, podemos configurar un flujo guiado de pedido con confirmación de datos, no solo respuestas a consultas.' },
      { q: '¿Cuánto cuesta un chatbot de atención al cliente?', a: 'Depende del alcance y los canales, pero proyectos de este tipo suelen estar entre USD 500 y USD 2.000. Es una fracción de lo que cobra una agencia tradicional por el mismo alcance, porque desarrollamos con apoyo de IA.' },
    ],
    related: ['agente-whatsapp-ia', 'crm-gestion-leads', 'sistemas-web-medida'],
    caseLink: { name: 'WOpen', desc: 'El mismo motor multi-canal usado en nuestro agente de WhatsApp en producción aplica a chatbots de atención al cliente.' },
  },
  {
    slug: 'sistemas-web-medida',
    icon: '🌐',
    name: 'Sistemas web a medida',
    title: 'Sistemas web a medida para empresas en Medellín | Vtlik',
    metaDesc: 'Aplicaciones web completas con login, roles, base de datos y API. Desde un panel interno hasta un sistema para tus clientes finales.',
    h1: 'El sistema que necesitás, <span class="accent">construido para vos</span>',
    sub: 'Aplicaciones web completas: login, roles, base de datos propia y API. Desde un panel interno para tu equipo hasta un sistema completo para tus clientes finales.',
    waMsg: 'Hola, quiero un sistema web a medida para mi empresa',
    includes: [
      { icon: '🔐', title: 'Login y roles', desc: 'Cada usuario entra con su cuenta y ve exactamente lo que le corresponde según su rol.' },
      { icon: '🗄️', title: 'Base de datos propia', desc: 'Tus datos viven en una base de datos que es tuya, no en una hoja de cálculo improvisada.' },
      { icon: '🔌', title: 'API si la necesitás', desc: 'Si tu sistema necesita hablar con otras herramientas, lo construimos con una API propia desde el inicio.' },
      { icon: '📱', title: 'Responsive', desc: 'Funciona igual de bien en el celular que en el computador, sin versión aparte para móvil.' },
    ],
    steps: [
      { title: 'Levantamos requerimientos', desc: 'Qué necesita hacer el sistema, quién lo va a usar y con qué otras herramientas debe conectarse.' },
      { title: 'Diseñamos la arquitectura', desc: 'Elegimos el stack — FastAPI, Flask, Next.js — según la complejidad y el crecimiento esperado.' },
      { title: 'Desarrollamos por iteraciones', desc: 'Entregamos versiones funcionales desde la primera semana, no un bloque cerrado al final.' },
      { title: 'Desplegamos y acompañamos', desc: 'Lo ponemos en producción y seguimos disponibles para ajustes una vez que tu equipo lo está usando.' },
    ],
    advantages: [
      { icon: '🎯', title: 'Construido para tu caso', desc: 'No es una plantilla adaptada — es un sistema diseñado desde cero para tu proceso específico.' },
      { icon: '🔗', title: 'Se integra con lo que ya usás', desc: 'Google Workspace, WhatsApp, Slack, portales internos — el sistema se conecta a tu ecosistema actual.' },
      { icon: '📈', title: 'Escala con vos', desc: 'Empezás con lo esencial y agregás funcionalidad a medida que tu operación crece.' },
      { icon: '🔒', title: 'Código propio', desc: 'Todo lo que construimos es tuyo, sin depender de una plataforma de terceros que te pueda cerrar la cuenta.' },
    ],
    faq: [
      { q: '¿Qué tecnología usan para construir los sistemas?', a: 'Depende del caso — trabajamos principalmente con FastAPI, Flask y Next.js, con PostgreSQL o Supabase como base de datos.' },
      { q: '¿Puedo pedir un sistema para que lo usen mis clientes finales, no solo mi equipo?', a: 'Sí, construimos tanto paneles internos como sistemas de cara al cliente final, con los niveles de seguridad correspondientes.' },
      { q: '¿Cuánto tarda un sistema web completo?', a: 'Un sistema con login, roles y base de datos suele tomar entre 2 y 4 semanas, con una primera versión funcional en la primera semana.' },
      { q: '¿Cuánto cuesta un sistema web a medida?', a: 'Sistemas completos con login, roles y API suelen estar entre USD 1.300 y USD 3.400, según el alcance funcional.' },
    ],
    related: ['crm-gestion-leads', 'control-asistencia-turnos', 'chatbot-atencion-cliente'],
    caseLink: { name: 'TigoApp y Turnos', desc: 'Ambos son sistemas web completos en producción, con login, roles y base de datos propia.' },
  },
];

const byName = Object.fromEntries(services.map(s => [s.slug, s]));

function faqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
}

function serviceSchema(s) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": s.name,
    "name": s.name,
    "description": s.metaDesc,
    "provider": { "@type": "ProfessionalService", "name": "Vtlik Solutions", "url": "https://vtlik.com" },
    "areaServed": ["Medellín", "Colombia", "Latinoamérica"],
    "url": `https://vtlik.com/${s.slug}/`
  };
}

function breadcrumbSchema(s) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://vtlik.com/" },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://vtlik.com/#servicios" },
      { "@type": "ListItem", "position": 3, "name": s.name, "item": `https://vtlik.com/${s.slug}/` }
    ]
  };
}

function page(s) {
  const related = s.related.map(slug => byName[slug]).filter(Boolean);
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${s.title}</title>
  <meta name="description" content="${s.metaDesc}" />
  <meta name="author" content="Vtlik" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://vtlik.com/${s.slug}/" />
  <link rel="icon" href="../vtlik.jpeg" type="image/jpeg" />
  <link rel="apple-touch-icon" href="../vtlik.jpeg" />

  <meta property="og:title" content="${s.title}" />
  <meta property="og:description" content="${s.metaDesc}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vtlik.com/${s.slug}/" />
  <meta property="og:locale" content="es_CO" />
  <meta property="og:image" content="https://vtlik.com/vtlik.jpeg" />

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-6N509L5H1C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6N509L5H1C');
  </script>

  <script type="application/ld+json">${JSON.stringify(serviceSchema(s), null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema(s), null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema(s.faq), null, 2)}</script>

  <link rel="stylesheet" href="/assets/style.css" />
</head>
<body>

<nav>
  <a href="/"><img src="../vtlik.jpeg" alt="Vtlik Solutions" class="logo-img" /></a>
  <div class="nav-links">
    <a href="/#servicios">Servicios</a>
    <a href="/#proyectos">Portfolio</a>
    <a href="/#faq">FAQ</a>
  </div>
  <a href="${wa(s.waMsg)}" class="nav-cta" target="_blank" rel="noopener">Hablar por WhatsApp →</a>
</nav>

<section class="hero mini">
  <div class="breadcrumb fade-in">
    <a href="/">Inicio</a><span class="sep">/</span><a href="/#servicios">Servicios</a><span class="sep">/</span><span class="current">${s.name}</span>
  </div>
  <div class="hero-badge fade-in">
    <span class="dot"></span>
    ${s.icon} ${s.name}
  </div>
  <h1 class="fade-in">${s.h1}</h1>
  <p class="hero-sub fade-in">${s.sub}</p>
  <div class="hero-actions fade-in">
    <a href="${wa(s.waMsg)}" class="btn-primary" target="_blank" rel="noopener">💬 Consulta gratis</a>
    <a href="#incluye" class="btn-secondary">Ver qué incluye ↓</a>
  </div>
</section>

<section id="incluye">
  <div class="section-header center fade-in">
    <div class="section-tag">Qué incluye</div>
    <h2>Cómo funciona en la práctica</h2>
  </div>
  <div class="services-grid">
${s.includes.map(i => `    <div class="service-card fade-in">
      <div class="service-icon">${i.icon}</div>
      <h3>${i.title}</h3>
      <p>${i.desc}</p>
    </div>`).join('\n')}
  </div>
</section>

<section id="proceso" style="background:var(--dark-2)">
  <div class="section-header center fade-in">
    <div class="section-tag">Cómo trabajamos</div>
    <h2>De la idea al sistema funcionando</h2>
    <p class="section-sub">Proceso ágil y sin burocracia, igual que en el resto de nuestros proyectos.</p>
  </div>
  <div class="steps">
${s.steps.map((st, i) => `    <div class="step fade-in">
      <div class="step-num">0${i + 1}</div>
      <h3>${st.title}</h3>
      <p>${st.desc}</p>
    </div>`).join('\n')}
  </div>
</section>

<section id="ventajas">
  <div class="section-header center fade-in">
    <div class="section-tag">Por qué con Vtlik</div>
    <h2>Ventajas que sí importan</h2>
  </div>
  <div class="advantages-grid">
${s.advantages.map(a => `    <div class="advantage fade-in">
      <div class="advantage-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
    </div>`).join('\n')}
  </div>
</section>

${s.caseLink ? `<section style="background:var(--dark-2)">
  <div class="section-header center fade-in">
    <div class="section-tag">Ya lo hicimos</div>
    <h2>En producción, no en promesas</h2>
  </div>
  <div class="testimonial-wrapper fade-in" style="text-align:center">
    <p class="testimonial-text" style="font-style:normal;font-size:1.05rem">
      <strong>${s.caseLink.name}</strong> — ${s.caseLink.desc}
    </p>
    <div style="margin-top:20px">
      <a href="/#proyectos" class="btn-secondary">Ver el portfolio completo →</a>
    </div>
  </div>
</section>` : ''}

<section id="faq">
  <div class="section-header center fade-in">
    <div class="section-tag">Preguntas frecuentes</div>
    <h2>Antes de escribirnos</h2>
  </div>
  <div class="faq-list">
${s.faq.map(f => `    <div class="faq-item fade-in">
      <button class="faq-question" onclick="toggleFaq(this)">
        ${f.q}
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${f.a}</p>
      </div>
    </div>`).join('\n')}
  </div>
</section>

${related.length ? `<section style="background:var(--dark-2)">
  <div class="section-header center fade-in">
    <div class="section-tag">También te puede interesar</div>
    <h2>Otros servicios relacionados</h2>
  </div>
  <div class="advantages-grid">
${related.map(r => `    <a href="/${r.slug}/" class="advantage fade-in">
      <div class="advantage-icon">${r.icon}</div>
      <h3>${r.name}</h3>
      <p>Ver cómo funciona →</p>
    </a>`).join('\n')}
  </div>
</section>` : ''}

<section id="contacto" style="background: radial-gradient(ellipse at 50% 0%, rgba(123,47,190,0.25) 0%, transparent 70%), var(--dark); text-align:center;">
  <div class="section-header center fade-in">
    <div class="section-tag">Contacto</div>
    <h2>¿Querés automatizar esto en tu empresa?</h2>
    <p class="section-sub" style="margin:0 auto;">Contanos tu caso — sin costo ni compromiso. Respondemos en menos de 24 horas.</p>
  </div>
  <div class="contact-direct fade-in" style="justify-content:center">
    <a href="${wa(s.waMsg)}" class="contact-link" target="_blank" rel="noopener">
      <span class="link-icon">💬</span> WhatsApp: +57 302 611 9411
    </a>
    <a href="mailto:gerencia@vtlik.com?subject=${encodeURIComponent(s.name)}" class="contact-link">
      <span class="link-icon">✉️</span> gerencia@vtlik.com
    </a>
    <div class="contact-link" style="cursor:default">
      <span class="link-icon">📍</span> Medellín, Colombia · Remoto para toda Latinoamérica
    </div>
  </div>
</section>

<footer>
  <div class="footer-logo"><img src="../vtlik.jpeg" alt="Vtlik Solutions" /></div>
  <p>© 2025 Vtlik Solutions · <a href="mailto:gerencia@vtlik.com" style="color:inherit">gerencia@vtlik.com</a></p>
  <div class="footer-social">
    <a href="https://www.linkedin.com/company/vtlik" target="_blank" rel="noopener" class="social-link" title="LinkedIn">💼</a>
    <a href="https://www.instagram.com/gerenciavtlik/" target="_blank" rel="noopener" class="social-link" title="Instagram">📸</a>
    <a href="https://www.facebook.com/profile.php?id=61593305437571" target="_blank" rel="noopener" class="social-link" title="Facebook">📘</a>
    <a href="https://www.tiktok.com/@gerenciavtlik" target="_blank" rel="noopener" class="social-link" title="TikTok">🎵</a>
    <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="social-link" title="WhatsApp">💬</a>
    <a href="mailto:gerencia@vtlik.com" class="social-link" title="Email">✉️</a>
  </div>
</footer>

<a href="${wa(s.waMsg)}" class="wa-float" target="_blank" rel="noopener" title="Contactar por WhatsApp" aria-label="Contactar por WhatsApp">💬</a>

<script>
  function toggleFaq(btn) { btn.parentElement.classList.toggle('open'); }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
</script>

</body>
</html>
`;
}

const root = path.join(__dirname, '..');
for (const s of services) {
  const dir = path.join(root, s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(s));
  console.log('generado:', s.slug + '/index.html');
}
fs.writeFileSync(path.join(__dirname, 'services-data.json'), JSON.stringify(services.map(s => ({ slug: s.slug, name: s.name, icon: s.icon })), null, 2));
console.log('Total paginas:', services.length);
