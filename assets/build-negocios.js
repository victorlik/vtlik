// Genera la portada (/index.html), el hub /negocios/ y una página por rubro
// (/negocios/<slug>/index.html). Se corre a mano: `node assets/build-negocios.js`.
// La versión anterior de la portada vive ahora en /empresas/index.html.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WA = '573026119411';
const wa = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const cop = (n) => '$' + n.toLocaleString('es-CO');

// ---------------------------------------------------------------- PLANES
// Precios en COP. Ver propuesta: cubren vendedor fijo + mantenimiento.
const PLANS = [
  { key: 'arranque', name: 'Arranque', monthly: 89000, setup: 250000,
    for: 'Para empezar a ordenar tu agenda o tus pedidos.' },
  { key: 'crece', name: 'Crece', monthly: 149000, setup: 450000, featured: true,
    for: 'Para que los clientes vuelvan solos y sepás cómo va tu negocio.' },
  { key: 'pro', name: 'Pro con IA', monthly: 249000, setup: 750000,
    for: 'Para negocios con varios empleados o sedes que reciben muchos mensajes.' },
];

// ---------------------------------------------------------------- RUBROS
const RUBROS = [
  {
    slug: 'peluquerias-y-belleza',
    emoji: '💇',
    name: 'Peluquerías y belleza',
    short: 'Barberías, salones, uñas, spa y estética.',
    title: 'Agenda por WhatsApp para peluquerías y centros de belleza en Medellín | Vtlik',
    metaDesc: 'Agenda de citas por WhatsApp 24/7, recordatorios para que no te dejen plantado y clientes que vuelven solos. Para peluquerías, barberías, uñas y spa. Piloto gratis 15 días.',
    h1: 'Tu peluquería con <span class="warm">agenda llena</span> y sin clientes que te dejen plantado',
    sub: 'Tus clientes reservan por WhatsApp a cualquier hora, reciben recordatorio y vuelven cuando les toca. Vos te dedicás a atender.',
    waMsg: 'Hola Vtlik, tengo una peluquería / centro de belleza y quiero automatizar mi agenda',
    pains: [
      { before: 'Te escriben a las 10 de la noche pidiendo cita y nadie responde.', title: 'Agenda por WhatsApp 24/7', desc: 'El cliente elige servicio, día, hora y estilista. Queda en tu agenda sin que tengás que contestar.' },
      { before: 'Clientes que reservan y no llegan.', title: 'Recordatorios automáticos', desc: 'Un mensaje el día anterior y otro 2 horas antes, con opción de confirmar o cancelar. Si cancela, el espacio se libera solo.' },
      { before: 'Clientes que vinieron una vez y no volvieron.', title: 'Clientes que vuelven solos', desc: '"Hace 30 días no venís, ¿te agendamos?" y saludo de cumpleaños con promo. Automático.' },
      { before: 'No sabés cuánto produjo cada estilista en la semana.', title: 'Reporte al dueño', desc: 'Cada lunes te llega al WhatsApp: citas atendidas, servicios más pedidos e ingresos por empleado.' },
    ],
    calc: { qLabel: '¿Cuántas citas se te caen o no llegan por semana?', qMin: 1, qMax: 30, qDef: 5, perWeek: true,
            tLabel: '¿Cuánto vale un servicio promedio?', tMin: 10000, tMax: 200000, tStep: 5000, tDef: 35000 },
    features: {
      arranque: ['Agenda de citas por WhatsApp 24/7', 'Recordatorio antes de cada cita', 'Confirmación o cancelación con un toque', 'Agenda visible desde tu celular'],
      crece: ['Todo lo de Arranque', 'Agenda por estilista', 'Aviso "hace 30 días no venís"', 'Saludo y promo de cumpleaños', 'Reporte semanal al dueño'],
      pro: ['Todo lo de Crece', 'Asistente con IA que responde precios y dudas', 'Varias sedes en un mismo panel', 'Campañas para días flojos'],
    },
  },
  {
    slug: 'talleres-mecanicos',
    emoji: '🔧',
    name: 'Talleres mecánicos',
    short: 'Talleres de carros y motos, lubricentros, latonería.',
    title: 'Software para talleres mecánicos y de motos en Medellín | Vtlik',
    metaDesc: 'Órdenes de trabajo con fotos, aviso automático de "tu carro está listo" y recordatorio de cambio de aceite por WhatsApp. Para talleres de carros y motos. Piloto gratis 15 días.',
    h1: 'Tu taller <span class="warm">avisa solo</span> y tus clientes vuelven a tiempo',
    sub: 'El cliente sabe en qué va su carro sin llamarte, aprueba la cotización desde el celular y le recordamos su próximo mantenimiento.',
    waMsg: 'Hola Vtlik, tengo un taller y quiero automatizar avisos y órdenes de trabajo',
    pains: [
      { before: 'El cliente llama cinco veces a preguntar si el carro ya está.', title: 'Avisos de estado automáticos', desc: 'Recibido, en diagnóstico, esperando repuesto, listo para recoger: cada cambio le llega por WhatsApp.' },
      { before: 'Cotizaciones en papel que se pierden o se discuten.', title: 'Orden de trabajo digital', desc: 'Con fotos del daño y cotización que el cliente aprueba desde el celular. Queda todo por escrito.' },
      { before: 'El cliente se hace el cambio de aceite en otro lado.', title: 'Recordatorio por fecha o kilometraje', desc: '"Tu moto ya va por los 3.000 km, ¿te la recibimos el sábado?" Se envía solo.' },
      { before: 'No tenés claro qué te deja más plata ni quién te debe.', title: 'Reporte semanal', desc: 'Vehículos atendidos, servicios más vendidos y cuentas por cobrar, directo a tu WhatsApp.' },
    ],
    calc: { qLabel: '¿Cuántos clientes no vuelven para su mantenimiento al mes?', qMin: 1, qMax: 60, qDef: 8, perWeek: false,
            tLabel: '¿Cuánto vale un servicio promedio?', tMin: 30000, tMax: 800000, tStep: 10000, tDef: 120000 },
    features: {
      arranque: ['Avisos de estado por WhatsApp', 'Aviso automático de "listo para recoger"', 'Registro de vehículos y clientes', 'Historial por placa'],
      crece: ['Todo lo de Arranque', 'Orden de trabajo con fotos', 'Cotización que el cliente aprueba en línea', 'Recordatorio de mantenimiento por fecha o km', 'Reporte semanal al dueño'],
      pro: ['Todo lo de Crece', 'Asistente con IA que agenda y responde dudas', 'Control de cuentas por cobrar', 'Varios mecánicos o sedes'],
    },
  },
  {
    slug: 'tiendas-de-barrio',
    emoji: '🏪',
    name: 'Tiendas de barrio',
    short: 'Tiendas, minimercados, droguerías y misceláneas.',
    title: 'Fiados digitales y pedidos por WhatsApp para tiendas de barrio en Medellín | Vtlik',
    metaDesc: 'Cuaderno de fiados digital con recordatorio de pago, pedidos a domicilio por WhatsApp y alerta de productos por agotarse. Para tiendas de barrio y minimercados. Piloto gratis 15 días.',
    h1: 'Tu tienda sin <span class="warm">cuaderno de fiados</span> y con pedidos ordenados',
    sub: 'Sabés quién te debe y cuánto, el cliente pide el domicilio por WhatsApp y te avisamos antes de que se acabe un producto.',
    waMsg: 'Hola Vtlik, tengo una tienda y quiero digitalizar fiados y pedidos',
    pains: [
      { before: 'El cuaderno de fiados: no sabés bien quién debe ni cuánto.', title: 'Fiados digitales', desc: 'Anotás desde el celular en segundos. El cliente recibe su saldo por WhatsApp y un recordatorio amable de pago.' },
      { before: 'Te enterás de que se acabó algo cuando el cliente lo pide.', title: 'Alerta de productos por agotarse', desc: 'Te avisamos con tiempo y te armamos la lista de pedido para el proveedor.' },
      { before: 'Pedidos a domicilio por WhatsApp que se enredan.', title: 'Pedidos por WhatsApp ordenados', desc: 'El cliente pide, vos confirmás con un toque y queda la lista lista para despachar.' },
      { before: 'Al final del día no sabés cuánto vendiste.', title: 'Cierre del día automático', desc: 'Ventas, fiados nuevos y abonos del día, en un mensaje a tu WhatsApp.' },
    ],
    calc: { qLabel: '¿Cuántos pedidos o ventas se te escapan por semana (sin responder, sin producto o fiado sin cobrar)?', qMin: 1, qMax: 80, qDef: 10, perWeek: true,
            tLabel: '¿Cuánto es una compra promedio?', tMin: 5000, tMax: 150000, tStep: 5000, tDef: 25000 },
    features: {
      arranque: ['Cuaderno de fiados digital', 'Saldo del cliente por WhatsApp', 'Recordatorio de pago automático', 'Cierre del día'],
      crece: ['Todo lo de Arranque', 'Pedidos a domicilio por WhatsApp', 'Alerta de productos por agotarse', 'Lista de pedido para proveedores', 'Reporte semanal al dueño'],
      pro: ['Todo lo de Crece', 'Asistente con IA que toma pedidos solo', 'Catálogo con precios por WhatsApp', 'Varias cajas o sedes'],
    },
  },
  {
    slug: 'restaurantes-y-bares',
    emoji: '🍽️',
    name: 'Restaurantes y bares',
    short: 'Restaurantes, comidas rápidas, cafés, bares y discotecas.',
    title: 'Pedidos y reservas por WhatsApp para restaurantes y bares en Medellín | Vtlik',
    metaDesc: 'Menú y pedidos por WhatsApp, reservas automáticas con recordatorio y promos para clientes frecuentes. Para restaurantes, comidas rápidas y bares. Piloto gratis 15 días.',
    h1: 'Tu restaurante <span class="warm">responde al instante</span>, incluso en hora pico',
    sub: 'Pedidos y reservas por WhatsApp que se confirman solos, y clientes frecuentes que vuelven con una promo a tiempo.',
    waMsg: 'Hola Vtlik, tengo un restaurante / bar y quiero automatizar pedidos y reservas',
    pains: [
      { before: 'En hora pico los pedidos por WhatsApp se responden tarde.', title: 'Pedidos por WhatsApp', desc: 'Menú, pedido, confirmación y tiempo estimado, sin que nadie del equipo suelte lo que está haciendo.' },
      { before: 'Reservas anotadas en una libreta.', title: 'Reservas automáticas', desc: 'El cliente reserva, recibe recordatorio y, si cancela, el espacio vuelve a quedar disponible.' },
      { before: 'Clientes que vinieron una vez y no volvieron.', title: 'Clientes frecuentes', desc: 'Promos automáticas para los que más vienen y para llenar los días flojos.' },
      { before: 'Noches de bar con mesas, cover y pedidos en desorden.', title: 'Discos, para bares y discotecas', desc: 'Acceso por QR, mesas en vivo, pedidos y cover digital. <a href="/discos/" style="color:var(--warm)">Conocé Discos →</a>' },
    ],
    calc: { qLabel: '¿Cuántos pedidos o reservas se te pierden por semana?', qMin: 1, qMax: 60, qDef: 8, perWeek: true,
            tLabel: '¿Cuánto vale un pedido promedio?', tMin: 10000, tMax: 300000, tStep: 5000, tDef: 45000 },
    features: {
      arranque: ['Menú y pedidos por WhatsApp', 'Confirmación automática con tiempo estimado', 'Reservas con recordatorio', 'Panel desde el celular'],
      crece: ['Todo lo de Arranque', 'Lista de espera automática', 'Promos para clientes frecuentes', 'Campañas para días flojos', 'Reporte semanal al dueño'],
      pro: ['Todo lo de Crece', 'Asistente con IA que toma pedidos solo', 'Varias sedes o cocinas', 'Integración con Discos para bares'],
    },
  },
];

// ---------------------------------------------------------------- DEMOS DE WHATSAPP
// from: c = cliente, b = asistente del negocio, o = aviso al dueño, s = separador de tiempo.
// step: índice del paso (en `steps`) que se ilumina cuando aparece ese mensaje.
// chips: botones de respuesta rápida; `pick` marca cuál elige el cliente después.
const DEMOS = {
  'peluquerias-y-belleza': {
    biz: 'Salón Bella Vista', avatar: '💇',
    steps: ['Responde a cualquier hora y reconoce al cliente', 'Muestra solo los horarios libres', 'Agenda con el estilista que el cliente elige', 'Recordatorio automático: menos clientes que no llegan'],
    msgs: [
      { from: 'c', text: 'Hola, ¿tienen cita para mañana? Quiero corte y cepillado', step: 0 },
      { from: 'b', text: '¡Hola Laura! 👋 Para corte + cepillado (1 h 30 min) mañana jueves tengo libre:', chips: ['10:00 a.m.', '2:30 p.m.', '5:00 p.m.'], pick: 1, step: 1 },
      { from: 'c', text: '2:30 p.m.' },
      { from: 'b', text: '¿Con quién preferís?', chips: ['Caro', 'Sebas', 'Me da igual'], pick: 0, step: 2 },
      { from: 'c', text: 'Caro' },
      { from: 'b', text: '✅ ¡Listo! Jueves 2:30 p.m. con Caro. Corte + cepillado: $65.000. Mañana te recuerdo.' },
      { from: 's', text: 'Al otro día, 12:00 m.' },
      { from: 'b', text: 'Hola Laura, hoy a las 2:30 tenés cita con Caro 💇‍♀️ ¿Confirmás?', chips: ['✅ Confirmo', 'Reprogramar'], pick: 0, step: 3 },
      { from: 'c', text: '✅ Confirmo' },
    ],
  },
  'talleres-mecanicos': {
    biz: 'Taller El Pistón', avatar: '🔧',
    steps: ['El cliente sabe cómo va su carro sin llamar', 'Cotización con foto, aprobada desde el celular', 'Aviso automático de "listo para recoger"', 'Recordatorio del próximo mantenimiento'],
    msgs: [
      { from: 'c', text: 'Buenas, ¿cómo va mi carro? Placa KLM482', step: 0 },
      { from: 'b', text: 'Hola Andrés 👋 Tu Mazda 3 está en diagnóstico. Encontramos las pastillas de freno delanteras gastadas.', photo: '📷 Foto del daño' },
      { from: 'b', text: 'Cotización: pastillas + mano de obra $280.000', chips: ['✅ Aprobar', 'Llamarme'], pick: 0, step: 1 },
      { from: 'c', text: '✅ Aprobar' },
      { from: 'b', text: 'Aprobado ✅ Queda listo hoy a las 4:00 p.m. Te avisamos por acá.' },
      { from: 's', text: '3:52 p.m.' },
      { from: 'b', text: '🚗 ¡Tu Mazda 3 está listo para recoger! Total: $280.000', step: 2 },
      { from: 'b', text: 'Tu próximo cambio de aceite es a los 55.000 km. Te escribimos cuando te toque 😉', step: 3 },
    ],
  },
  'tiendas-de-barrio': {
    biz: 'Tienda Doña Marta', avatar: '🏪',
    steps: ['Pedido a domicilio por WhatsApp, con total calculado', 'Fiado anotado solo, con saldo al día', 'Recordatorio de pago amable y automático', 'Alerta al dueño antes de que se acabe un producto'],
    msgs: [
      { from: 'c', text: 'Hola doña Marta, me manda 1 libra de arroz, 6 huevos y una gaseosa de litro y medio a la casa 12', step: 0 },
      { from: 'b', text: '¡Hola Jhon! Tu pedido:\n• Arroz 1 lb — $3.200\n• Huevos x6 — $4.800\n• Gaseosa 1,5 L — $5.500\nTotal: $13.500', chips: ['Pago al recibir', 'Anotar al fiado'], pick: 1 },
      { from: 'c', text: 'Anotar al fiado' },
      { from: 'b', text: '✅ Anotado. Tu fiado queda en $41.500. El domicilio sale en 15 minutos 🛵', step: 1 },
      { from: 'o', text: '⚠️ Quedan 2 cubetas de huevos. ¿Las agrego al pedido del proveedor?', step: 3 },
      { from: 's', text: 'Viernes, 6:00 p.m.' },
      { from: 'b', text: 'Hola Jhon 😊 Te recordamos que tu fiado va en $41.500. Podés abonar en la tienda o por transferencia. ¡Gracias por comprarnos!', step: 2 },
    ],
  },
  'restaurantes-y-bares': {
    biz: 'Asados La 70', avatar: '🍽️',
    steps: ['Menú y pedido por WhatsApp, incluso en hora pico', 'Confirmación automática con total y tiempo de entrega', 'El cliente sabe en qué va su pedido', 'Promo automática para clientes frecuentes'],
    msgs: [
      { from: 'c', text: 'Hola, ¿qué tienen hoy?', step: 0 },
      { from: 'b', text: '¡Hola Paula! 🍽️ Menú de hoy:', chips: ['Bandeja paisa $32.000', 'Churrasco $38.000', 'Menú del día $18.000'], pick: 2 },
      { from: 'c', text: '2 menús del día a domicilio, calle 44 #70-12' },
      { from: 'b', text: '✅ Pedido #127: 2 menús del día $36.000 + domicilio $4.000 = $40.000. Llega en 35 a 40 min 🛵', step: 1 },
      { from: 'b', text: '👨‍🍳 Tu pedido ya está en preparación.', step: 2 },
      { from: 'b', text: '🛵 ¡Va en camino! Buen provecho.' },
      { from: 's', text: 'El martes siguiente' },
      { from: 'b', text: 'Hola Paula 🎉 Como sos clienta frecuente, hoy tenés 2x1 en el menú del día. ¿Te lo mandamos?', step: 3 },
    ],
  },
};

const demoSection = (slugs, sub) => `
<section id="demo">
  <div class="section-header center">
    <div class="section-tag">Miralo funcionando</div>
    <h2>Así le habla tu negocio <span class="warm">a tus clientes</span></h2>
    <p class="section-sub">${sub}</p>
  </div>
${slugs.length > 1 ? `  <div class="demo-pick" role="tablist" aria-label="Elegí un rubro">
${slugs.map((s, i) => { const r = RUBROS.find((x) => x.slug === s); return `    <button class="chip demo-pick-btn" role="tab" data-demo="${s}" aria-selected="${i === 0}">${r.emoji} ${r.name}</button>`; }).join('\n')}
  </div>` : ''}
  <div class="demo">
    <div class="phone" aria-label="Demostración de conversación por WhatsApp">
      <div class="phone-head"><span class="phone-av"></span><div><div class="phone-name"></div><div class="phone-status">en línea</div></div></div>
      <div class="phone-chat" aria-live="off"></div>
      <div class="phone-foot"><span>Escribí un mensaje</span><span class="phone-mic">🎤</span></div>
    </div>
    <div class="demo-side">
      <ol class="demo-steps"></ol>
      <button class="btn-secondary demo-replay" type="button">↻ Ver de nuevo</button>
      <p class="demo-note">Conversación de ejemplo. Los nombres del negocio y de los clientes son ficticios.</p>
    </div>
  </div>
  <script type="application/json" id="demo-data">${JSON.stringify(Object.fromEntries(slugs.map((s) => [s, DEMOS[s]]))).replace(/</g, '\\u003c')}</script>
</section>
`;

const demoScript = `
<script>
  (function () {
    var root = document.getElementById('demo'); if (!root) return;
    var DATA = JSON.parse(document.getElementById('demo-data').textContent);
    var chat = root.querySelector('.phone-chat'), stepsEl = root.querySelector('.demo-steps');
    var statusEl = root.querySelector('.phone-status');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = Object.keys(DATA)[0], run = 0, started = false;

    function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
    function wait(ms) { return new Promise(function (r) { setTimeout(r, reduce ? 0 : ms); }); }
    function scroll() { chat.scrollTop = chat.scrollHeight; }
    function markStep(i) {
      if (i == null) return;
      Array.prototype.forEach.call(stepsEl.children, function (li, k) { if (k <= i) li.classList.add('done'); li.classList.toggle('now', k === i); });
    }
    function bubble(m) {
      if (m.from === 's') return el('div', 'msg-sep', m.text);
      if (m.from === 'o') { var o = el('div', 'msg-owner'); o.appendChild(el('b', null, '📲 Al dueño le llega:')); o.appendChild(el('span', null, m.text)); return o; }
      var b = el('div', 'msg ' + (m.from === 'c' ? 'msg-c' : 'msg-b'));
      if (m.photo) b.appendChild(el('div', 'msg-photo', m.photo));
      b.appendChild(el('div', 'msg-text', m.text));
      if (m.chips) { var w = el('div', 'msg-chips'); m.chips.forEach(function (c) { w.appendChild(el('span', 'msg-chip', c)); }); b.appendChild(w); }
      return b;
    }
    function setup(key) {
      var d = DATA[key];
      chat.innerHTML = ''; stepsEl.innerHTML = ''; statusEl.textContent = 'en línea';
      root.querySelector('.phone-av').textContent = d.avatar;
      root.querySelector('.phone-name').textContent = d.biz;
      d.steps.forEach(function (s) { stepsEl.appendChild(el('li', null, s)); });
      return d;
    }
    async function play(key) {
      var my = ++run, d = setup(key);
      var lastChips = null;
      for (var i = 0; i < d.msgs.length; i++) {
        var m = d.msgs[i];
        if (m.from === 'b') {
          statusEl.textContent = 'escribiendo…';
          var t = el('div', 'msg msg-b typing'); t.innerHTML = '<span></span><span></span><span></span>';
          chat.appendChild(t); scroll(); await wait(1100);
          if (my !== run) return; t.remove(); statusEl.textContent = 'en línea';
        } else { await wait(m.from === 'c' ? 1300 : 900); if (my !== run) return; }
        if (m.from === 'c' && lastChips) { lastChips.classList.add('picked'); lastChips = null; }
        var node = bubble(m); chat.appendChild(node); scroll(); markStep(m.step);
        if (m.chips && m.pick != null) lastChips = node.querySelectorAll('.msg-chip')[m.pick];
        await wait(500); if (my !== run) return;
      }
    }
    root.querySelector('.demo-replay').addEventListener('click', function () { play(current); });
    Array.prototype.forEach.call(root.querySelectorAll('.demo-pick-btn'), function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(root.querySelectorAll('.demo-pick-btn'), function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
        current = b.getAttribute('data-demo'); play(current);
      });
    });
    setup(current);
    if (!('IntersectionObserver' in window) || reduce) { play(current); return; }
    var io = new IntersectionObserver(function (es) {
      if (es[0].isIntersecting && !started) { started = true; io.disconnect(); play(current); }
    }, { threshold: 0.35 });
    io.observe(root.querySelector('.phone'));
  })();
</script>
`;

// ---------------------------------------------------------------- PIEZAS COMUNES
const head = ({ title, desc, canonical, extraLd = '' }) => `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="author" content="Vtlik" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" href="/vtlik.jpeg" type="image/jpeg" />
  <link rel="apple-touch-icon" href="/vtlik.jpeg" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:locale" content="es_CO" />
  <meta property="og:image" content="https://vtlik.com/vtlik.jpeg" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-6N509L5H1C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6N509L5H1C');
  </script>
${extraLd}
  <link rel="stylesheet" href="/assets/style.css" />
  <link rel="stylesheet" href="/assets/negocios.css" />
</head>
<body>
`;

const ld = (obj) => `  <script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n  </script>`;

const nav = (links, ctaMsg) => `
<nav>
  <a href="/"><img src="/vtlik.jpeg" alt="Vtlik Solutions" class="logo-img" /></a>
  <div class="nav-links">
${links.map(([h, t]) => `    <a href="${h}">${t}</a>`).join('\n')}
  </div>
  <a href="${wa(ctaMsg)}" class="nav-cta" target="_blank" rel="noopener">WhatsApp →</a>
</nav>
`;

const footer = (floatMsg) => `
<footer>
  <div class="footer-logo"><img src="/vtlik.jpeg" alt="Vtlik Solutions" /></div>
  <p>© ${new Date().getFullYear()} Vtlik Solutions · Medellín, Colombia · <a href="mailto:gerencia@vtlik.com" style="color:inherit">gerencia@vtlik.com</a></p>
  <p><a href="/empresas/" style="color:inherit">Para empresas</a> · <a href="/negocios/" style="color:inherit">Para negocios</a></p>
  <div class="footer-social">
    <a href="https://www.linkedin.com/company/vtlik" target="_blank" rel="noopener" class="social-link" title="LinkedIn">💼</a>
    <a href="https://www.instagram.com/gerenciavtlik/" target="_blank" rel="noopener" class="social-link" title="Instagram">📸</a>
    <a href="https://www.facebook.com/profile.php?id=61593305437571" target="_blank" rel="noopener" class="social-link" title="Facebook">📘</a>
    <a href="https://www.tiktok.com/@gerenciavtlik" target="_blank" rel="noopener" class="social-link" title="TikTok">🎵</a>
    <a href="https://wa.me/${WA}" target="_blank" rel="noopener" class="social-link" title="WhatsApp">💬</a>
    <a href="mailto:gerencia@vtlik.com" class="social-link" title="Email">✉️</a>
  </div>
</footer>

<a href="${wa(floatMsg)}" class="wa-float" target="_blank" rel="noopener" title="Escribinos por WhatsApp" aria-label="Escribinos por WhatsApp">💬</a>
`;

const commonScript = `
<script>
  function toggleFaq(btn) { btn.parentElement.classList.toggle('open'); }
  (function () {
    var els = document.querySelectorAll('.door, .cred-item, .rubro-card, .pain, .plan, .step, .faq-item, .fade-in');
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(function (el) { el.classList.add('fade-in'); io.observe(el); });
  })();
</script>
`;

// Cifras reales del ecosistema construido para la multinacional (ver Xtend6/*/CLAUDE.md).
const CRED = [
  ['25+', 'Sistemas en producción trabajando juntos'],
  ['24/7', 'Operación cubierta, incluidos los turnos de madrugada'],
  ['1 min', 'Cada cuánto se revisan agentes, chats y casos, con alertas automáticas'],
  ['12', 'Tipos de auditoría de calidad hechos con IA'],
  ['15 min', 'Ciclo en que los breaks de los agentes se calculan y asignan solos'],
  ['< 5 min', 'Desde que se reporta un error hasta que el agente recibe su feedback'],
];

const credSection = (bridge) => `
<section class="cred" id="experiencia">
  <div class="section-header center">
    <div class="section-tag">Experiencia comprobada</div>
    <h2>Esto ya corre todos los días en una multinacional de delivery</h2>
    <p class="section-sub">Construimos y mantenemos el ecosistema de automatización de la operación de soporte 24/7 de una multinacional de delivery líder en Latinoamérica.</p>
  </div>
  <div class="cred-grid">
${CRED.map(([n, l]) => `    <div class="cred-item"><div class="cred-num">${n}</div><div class="cred-label">${l}</div></div>`).join('\n')}
  </div>
  <p class="cred-bridge">${bridge}</p>
</section>
`;

const faqBlock = (items) => `
  <div class="faq-list">
${items.map(({ q, a }) => `    <div class="faq-item">
      <button class="faq-question" onclick="toggleFaq(this)">${q}<span class="faq-icon">+</span></button>
      <div class="faq-answer"><p>${a}</p></div>
    </div>`).join('\n')}
  </div>`;

const faqLd = (items) => ld({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
});

const NEG_FAQ = [
  { q: '¿Necesito saber de tecnología?', a: 'No. Si sabés usar WhatsApp, ya sabés usar esto. Te lo dejamos instalado y te enseñamos a vos y a tu equipo en una sesión corta.' },
  { q: '¿Tengo que cambiar mi número de WhatsApp?', a: 'Funciona con el número de tu negocio. Si hoy usás tu WhatsApp personal para todo, te asesoramos sobre si conviene una línea aparte para el negocio.' },
  { q: '¿Cómo funciona el piloto gratis de 15 días?', a: 'Lo instalamos y lo usás con clientes reales durante 15 días. Si te sirve, pagás la instalación y arranca la mensualidad. Si no te convence, no pagás nada.' },
  { q: '¿Hay cláusula de permanencia?', a: 'No. Pagás mes a mes y cancelás cuando quieras. Si preferís pagar el año completo, te regalamos 2 meses.' },
  { q: '¿Puedo cambiar de plan después?', a: 'Sí. Podés empezar con Arranque y pasar a Crece o Pro cuando tu negocio lo pida, sin volver a pagar la instalación completa: solo la diferencia.' },
  { q: '¿Y si algo deja de funcionar?', a: 'Nos escribís por WhatsApp y lo resolvemos. Además, nuestros sistemas se vigilan solos y nos avisan si algo se cae: es la misma tecnología que usamos en la operación de una multinacional de delivery.' },
];

// ---------------------------------------------------------------- BLOQUES DE /negocios
const plansSection = (feat, waBase) => `
<section id="planes">
  <div class="section-header center">
    <div class="section-tag">Planes</div>
    <h2>Precios claros, <span class="warm">sin letra pequeña</span></h2>
    <p class="section-sub">Una instalación única y una mensualidad fija. Probalo 15 días gratis antes de pagar.</p>
  </div>
  <div class="plans">
${PLANS.map((p) => `    <div class="plan${p.featured ? ' featured' : ''}">
      ${p.featured ? '<div class="plan-flag">El más elegido</div>' : ''}
      <h3>${p.name}</h3>
      <p class="plan-for">${p.for}</p>
      <div class="plan-price">${cop(p.monthly)} <span>/ mes</span></div>
      <div class="plan-setup">Instalación única: ${cop(p.setup)}</div>
      <ul>
${(feat ? feat[p.key] : GENERIC_FEATURES[p.key]).map((f) => `        <li>${f}</li>`).join('\n')}
      </ul>
      <a href="${wa(`${waBase} — me interesa el plan ${p.name}`)}" class="${p.featured ? 'btn-primary' : 'btn-secondary'}" target="_blank" rel="noopener">Quiero el plan ${p.name}</a>
    </div>`).join('\n')}
  </div>
  <div class="plans-foot">
    <span class="chip">🎁 Piloto gratis 15 días</span>
    <span class="chip">🔓 Sin permanencia</span>
    <span class="chip">📅 Pago anual: 2 meses gratis</span>
    <span class="chip">💬 Soporte por WhatsApp</span>
  </div>
</section>
`;

const GENERIC_FEATURES = {
  arranque: ['Citas, pedidos o fiados por WhatsApp', 'Recordatorios automáticos', 'Panel desde tu celular', 'Configuración para tu rubro'],
  crece: ['Todo lo de Arranque', 'Clientes que vuelven solos (recordatorios, cumpleaños, promos)', 'Reporte semanal al dueño', 'Varios empleados'],
  pro: ['Todo lo de Crece', 'Asistente con IA que responde y toma pedidos', 'Varias sedes en un mismo panel', 'Campañas para días flojos'],
};

const calcSection = (c, tag) => `
<section id="calculadora" class="alt">
  <div class="section-header center">
    <div class="section-tag">Calculadora</div>
    <h2>¿Cuánta plata <span class="warm">se te está yendo</span>?</h2>
    <p class="section-sub">${tag}</p>
  </div>
  <div class="calc" data-perweek="${c.perWeek ? 1 : 0}">
    <div>
      <div class="calc-field">
        <label for="calcQ">${c.qLabel}</label>
        <div class="row"><input type="range" id="calcQ" min="${c.qMin}" max="${c.qMax}" step="1" value="${c.qDef}" /><output id="calcQo"></output></div>
      </div>
      <div class="calc-field">
        <label for="calcT">${c.tLabel}</label>
        <div class="row"><input type="range" id="calcT" min="${c.tMin}" max="${c.tMax}" step="${c.tStep}" value="${c.tDef}" /><output id="calcTo"></output></div>
      </div>
    </div>
    <div class="calc-result" aria-live="polite">
      <div class="calc-small">Hoy estás dejando de ganar cerca de</div>
      <div class="calc-big" id="calcLoss">$0</div>
      <div class="calc-small">al mes.</div>
      <div class="calc-win" id="calcWin"></div>
    </div>
    <p class="calc-note">Cálculo de referencia: suponemos que con la automatización recuperás solo la mitad de lo que hoy se pierde, y lo comparamos con el plan Crece (${cop(149000)} al mes).</p>
  </div>
</section>
`;

const calcScript = `
<script>
  (function () {
    var box = document.querySelector('.calc'); if (!box) return;
    var perWeek = box.getAttribute('data-perweek') === '1';
    var q = document.getElementById('calcQ'), t = document.getElementById('calcT');
    var fmt = function (n) { return '$' + Math.round(n).toLocaleString('es-CO'); };
    var PLAN = 149000;
    function upd() {
      var qn = +q.value, tn = +t.value;
      document.getElementById('calcQo').textContent = qn + (perWeek ? ' / sem' : ' / mes');
      document.getElementById('calcTo').textContent = fmt(tn);
      var loss = qn * tn * (perWeek ? 4.3 : 1);
      var rec = loss * 0.5;
      document.getElementById('calcLoss').textContent = fmt(loss);
      var win = document.getElementById('calcWin');
      if (rec >= PLAN) {
        win.innerHTML = 'Recuperando solo la mitad son <strong>' + fmt(rec) + '</strong> al mes: el plan se paga <strong>' + (rec / PLAN).toFixed(1).replace('.', ',') + ' veces</strong>.';
      } else {
        win.innerHTML = 'Recuperando la mitad son <strong>' + fmt(rec) + '</strong> al mes. Para tu caso, el plan <strong>Arranque</strong> es el punto de partida.';
      }
    }
    q.addEventListener('input', upd); t.addEventListener('input', upd); upd();
  })();
</script>
`;

const pilotSection = (msg) => `
<section>
  <div class="pilot">
    <h2>Probalo <span class="warm">15 días gratis</span></h2>
    <p>Lo instalamos en tu negocio y lo usás con clientes reales. Si no te sirve, no pagás nada. Escribinos y en menos de 24 horas te contamos cómo arrancar.</p>
    <a href="${wa(msg)}" class="btn-primary" target="_blank" rel="noopener">💬 Quiero mi piloto gratis</a>
  </div>
</section>
`;

const stepsSection = `
<section id="como">
  <div class="section-header center">
    <div class="section-tag">Cómo funciona</div>
    <h2>Funcionando en tu negocio en <span class="warm">menos de una semana</span></h2>
  </div>
  <div class="steps">
    <div class="step"><div class="step-num">01</div><h3>Nos escribís</h3><p>Por WhatsApp nos contás qué te quita tiempo o plata. Si estás en Medellín, te visitamos.</p></div>
    <div class="step"><div class="step-num">02</div><h3>Lo configuramos</h3><p>Cargamos tus servicios, precios, horarios y empleados. Vos no tocás nada técnico.</p></div>
    <div class="step"><div class="step-num">03</div><h3>Piloto de 15 días</h3><p>Lo usás con clientes reales. Ajustamos lo que haga falta.</p></div>
    <div class="step"><div class="step-num">04</div><h3>Seguimos con vos</h3><p>Soporte por WhatsApp y mejoras a medida que tu negocio crece.</p></div>
  </div>
</section>
`;

// ---------------------------------------------------------------- PÁGINAS
function buildHome() {
  const doorsFeat = {
    biz: ['Monitoreo y alertas en tiempo real', 'Dashboards y reportes que se arman solos', 'Agentes de WhatsApp con IA y CRM', 'Auditorías de calidad automatizadas'],
    shop: ['Citas y pedidos por WhatsApp, 24/7', 'Recordatorios para que no te dejen plantado', 'Clientes que vuelven solos', `Planes desde ${cop(PLANS[0].monthly)} al mes`],
  };
  const title = 'Vtlik Solutions | Automatización para empresas y negocios en Medellín';
  const desc = 'Automatizamos la operación 24/7 de una multinacional de delivery. Ahora llevamos esa tecnología a empresas y a negocios de barrio: peluquerías, talleres, tiendas y restaurantes en Medellín.';
  const org = ld({
    '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': 'https://vtlik.com/#organization',
    name: 'Vtlik Solutions', url: 'https://vtlik.com', email: 'gerencia@vtlik.com', telephone: '+573026119411',
    image: 'https://vtlik.com/vtlik.jpeg', priceRange: '$$',
    description: 'Automatización, agentes con IA y sistemas a medida para empresas y pequeños negocios.',
    address: { '@type': 'PostalAddress', addressLocality: 'Medellín', addressRegion: 'Antioquia', addressCountry: 'CO' },
    areaServed: ['Medellín', 'Colombia', 'Latinoamérica'],
    sameAs: ['https://www.linkedin.com/company/vtlik', 'https://www.instagram.com/gerenciavtlik/', 'https://www.tiktok.com/@gerenciavtlik', 'https://www.facebook.com/profile.php?id=61593305437571'],
  });
  return head({ title, desc, canonical: 'https://vtlik.com/', extraLd: org })
    + nav([['/empresas/', 'Para empresas'], ['/negocios/', 'Para negocios'], ['#experiencia', 'Experiencia'], ['#proyectos', 'Proyectos']], 'Hola Vtlik, quiero saber más sobre sus servicios')
    + `
<section class="hero">
  <img src="/vtlik.jpeg" alt="Vtlik Solutions" class="hero-logo fade-in" />
  <p class="hero-slogan">Focused on making technology better</p>
  <h1>Automatizamos la operación de una multinacional de delivery. <span class="warm">Ahora también la de tu negocio.</span></h1>
  <p class="hero-sub">Desde un call center 24/7 hasta la peluquería de la esquina: sistemas que trabajan solos para que vos te enfoqués en lo tuyo.</p>
  <div class="doors">
    <a class="door biz" href="/empresas/">
      <span class="door-kicker">Para empresas</span>
      <h2>Tengo una empresa o un equipo</h2>
      <p>Call centers, BPO, operaciones y pymes con procesos repetitivos.</p>
      <ul>${doorsFeat.biz.map((f) => `<li>${f}</li>`).join('')}</ul>
      <span class="door-go">Ver soluciones para empresas →</span>
    </a>
    <a class="door shop" href="/negocios/">
      <span class="door-kicker">Para negocios</span>
      <h2>Tengo un negocio o un local</h2>
      <p>Peluquerías, talleres, tiendas de barrio, restaurantes y más.</p>
      <ul>${doorsFeat.shop.map((f) => `<li>${f}</li>`).join('')}</ul>
      <span class="door-go">Ver planes para mi negocio →</span>
    </a>
  </div>
</section>
`
    + credSection('Si aguanta el ritmo de una multinacional, imaginá lo que puede hacer por tu negocio.')
    + `
<section id="proyectos">
  <div class="section-header center">
    <div class="section-tag">Otros proyectos</div>
    <h2>También construimos productos propios</h2>
  </div>
  <div class="rubros-grid">
    <a class="rubro-card" href="/discos/"><span class="rubro-emoji">🎶</span><h3>Discos</h3><p>Panel para discotecas y bares: acceso por QR, mesas en vivo, pedidos y cover digital.</p><span class="door-go">Ver Discos →</span></a>
    <a class="rubro-card" href="/walkearn/"><span class="rubro-emoji">🚶</span><h3>WalkEarn</h3><p>App de recompensas por caminar.</p><span class="door-go">Ver WalkEarn →</span></a>
    <a class="rubro-card" href="/juegos-personalizados/"><span class="rubro-emoji">🎮</span><h3>Juegos personalizados</h3><p>Un regalo con nombre, foto y voz.</p><span class="door-go">Ver juegos →</span></a>
  </div>
</section>

<section class="alt">
  <div class="pilot">
    <h2>¿No sabés por dónde empezar?</h2>
    <p>Contanos qué te quita tiempo o plata. En menos de 24 horas te respondemos con una propuesta concreta, sin costo.</p>
    <a href="${wa('Hola Vtlik, quiero automatizar algo y no sé por dónde empezar')}" class="btn-primary" target="_blank" rel="noopener">💬 Escribinos por WhatsApp</a>
  </div>
</section>
`
    + footer('Hola Vtlik, quiero saber más sobre sus servicios') + commonScript + '\n</body>\n</html>\n';
}

function buildHub() {
  const title = 'Automatización para negocios en Medellín: peluquerías, talleres, tiendas y restaurantes | Vtlik';
  const desc = 'Citas y pedidos por WhatsApp, recordatorios, fiados digitales y clientes que vuelven solos. Planes desde $89.000 al mes y piloto gratis de 15 días. Para pequeños negocios en Medellín.';
  const waBase = 'Hola Vtlik, tengo un negocio y quiero automatizarlo';
  const hubCalc = { qLabel: '¿Cuántos clientes, citas o pedidos se te escapan por semana?', qMin: 1, qMax: 60, qDef: 6, perWeek: true,
                    tLabel: '¿Cuánto vale una venta o servicio promedio?', tMin: 5000, tMax: 300000, tStep: 5000, tDef: 40000 };
  return head({ title, desc, canonical: 'https://vtlik.com/negocios/', extraLd: faqLd(NEG_FAQ) })
    + nav([['/', 'Inicio'], ['#rubros', 'Rubros'], ['#calculadora', 'Calculadora'], ['#planes', 'Planes'], ['#faq', 'Preguntas']], waBase)
    + `
<section class="hero compact">
  <div class="hero-badge"><span class="dot"></span>Para negocios de barrio y pymes</div>
  <h1>Tu negocio <span class="warm">trabajando solo</span> mientras vos atendés</h1>
  <p class="hero-sub">Citas y pedidos por WhatsApp a cualquier hora, recordatorios para que no te dejen plantado y clientes que vuelven solos. Sin saber de tecnología.</p>
  <div class="hero-actions">
    <a href="#rubros" class="btn-primary">Elegí tu tipo de negocio ↓</a>
    <a href="#calculadora" class="btn-secondary">¿Cuánto estoy perdiendo?</a>
  </div>
  <div class="hero-stats">
    <div class="stat"><div class="stat-num">${cop(PLANS[0].monthly)}</div><div class="stat-label">Desde, al mes</div></div>
    <div class="stat"><div class="stat-num">15 días</div><div class="stat-label">De piloto gratis</div></div>
    <div class="stat"><div class="stat-num">24/7</div><div class="stat-label">Atendiendo por vos</div></div>
  </div>
</section>

<section id="rubros" class="alt">
  <div class="section-header center">
    <div class="section-tag">Elegí tu rubro</div>
    <h2>Hecho para <span class="warm">tu tipo de negocio</span></h2>
    <p class="section-sub">Cada rubro tiene sus propios dolores. Por eso no vendemos una app genérica.</p>
  </div>
  <div class="rubros-grid">
${RUBROS.map((r) => `    <a class="rubro-card" href="/negocios/${r.slug}/"><span class="rubro-emoji">${r.emoji}</span><h3>${r.name}</h3><p>${r.short}</p><span class="door-go">Ver qué hace por mí →</span></a>`).join('\n')}
  </div>
  <p class="cred-bridge" style="font-size:1rem;font-weight:500;color:var(--text-muted)">¿Tu negocio no está en la lista? Consultorios, gimnasios, lavaderos, veterinarias… <a href="${wa('Hola Vtlik, tengo un negocio que no está en la lista y quiero automatizarlo')}" target="_blank" rel="noopener" style="color:var(--warm)">Escribinos</a>, seguramente también aplica.</p>
</section>
`
    + demoSection(RUBROS.map((r) => r.slug), 'Elegí un rubro y mirá una conversación real de principio a fin: el cliente escribe, el sistema responde solo.')
    + calcSection(hubCalc, 'Movés las barras y te mostramos cuánto se te escapa cada mes por mensajes sin responder, citas perdidas o clientes que no vuelven.')
    + plansSection(null, waBase)
    + stepsSection
    + credSection('La misma tecnología, ajustada al tamaño de tu negocio.')
    + `
<section id="faq">
  <div class="section-header center">
    <div class="section-tag">Preguntas frecuentes</div>
    <h2>Lo que nos preguntan los dueños de negocio</h2>
  </div>
${faqBlock(NEG_FAQ)}
</section>
`
    + pilotSection('Hola Vtlik, quiero el piloto gratis de 15 días para mi negocio')
    + footer(waBase) + commonScript + calcScript + demoScript + '\n</body>\n</html>\n';
}

function buildRubro(r) {
  const canonical = `https://vtlik.com/negocios/${r.slug}/`;
  const service = ld({
    '@context': 'https://schema.org', '@type': 'Service', name: r.name, serviceType: r.title.split(' | ')[0],
    description: r.metaDesc, url: canonical, areaServed: 'Medellín',
    provider: { '@id': 'https://vtlik.com/#organization' },
    offers: PLANS.map((p) => ({ '@type': 'Offer', name: `Plan ${p.name}`, price: p.monthly, priceCurrency: 'COP' })),
  });
  return head({ title: r.title, desc: r.metaDesc, canonical, extraLd: service + '\n' + faqLd(NEG_FAQ) })
    + nav([['/negocios/', 'Negocios'], ['#demo', 'Demo'], ['#que-hace', 'Qué hace'], ['#calculadora', 'Calculadora'], ['#planes', 'Planes'], ['#faq', 'Preguntas']], r.waMsg)
    + `
<section class="hero compact">
  <p class="crumbs"><a href="/">Inicio</a> › <a href="/negocios/">Negocios</a> › ${r.name}</p>
  <div class="hero-badge"><span class="dot"></span>${r.emoji} ${r.name}</div>
  <h1>${r.h1}</h1>
  <p class="hero-sub">${r.sub}</p>
  <div class="hero-actions">
    <a href="${wa(r.waMsg)}" class="btn-primary" target="_blank" rel="noopener">💬 Quiero probarlo gratis</a>
    <a href="#demo" class="btn-secondary">Ver cómo funciona ↓</a>
  </div>
</section>
${demoSection([r.slug], 'Una conversación de ejemplo, de principio a fin. Todo lo que responde el negocio sale solo.')}
<section id="que-hace" class="alt">
  <div class="section-header center">
    <div class="section-tag">Qué hace por vos</div>
    <h2>Lo que hoy te quita tiempo, <span class="warm">resuelto</span></h2>
  </div>
  <div class="pain-grid">
${r.pains.map((p) => `    <div class="pain"><div class="pain-before">${p.before}</div><h3>${p.title}</h3><p>${p.desc}</p></div>`).join('\n')}
  </div>
</section>
`
    + calcSection(r.calc, 'Movés las barras con los números de tu negocio y te mostramos cuánto se te escapa cada mes.')
    + plansSection(r.features, r.waMsg)
    + stepsSection
    + credSection('La misma tecnología que mueve una operación 24/7, ajustada a tu negocio.')
    + `
<section id="faq">
  <div class="section-header center">
    <div class="section-tag">Preguntas frecuentes</div>
    <h2>Antes de arrancar</h2>
  </div>
${faqBlock(NEG_FAQ)}
</section>
`
    + pilotSection(r.waMsg + ' — quiero el piloto gratis de 15 días')
    + footer(r.waMsg) + commonScript + calcScript + demoScript + '\n</body>\n</html>\n';
}

function write(rel, html) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, 'utf8');
  console.log('✓', rel, `(${html.length} bytes)`);
}

write('index.html', buildHome());
write('negocios/index.html', buildHub());
RUBROS.forEach((r) => write(`negocios/${r.slug}/index.html`, buildRubro(r)));
