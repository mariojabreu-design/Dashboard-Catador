const CLICKUP_TOKEN = "pk_180130505_1OBNPKK0MPUH9V6ZAYPK7BZCH9U7GEFS";

const LISTS = {
  "Marca Catador": "6-901711254034-1?pr=90174133669",
  "Experiencia Clientes": "901711508851?pr=90174133669",
  "Trade Marketing": "6-901713283738-1?pr=90174133669",
  "Marcas Masivas": "901711254602?pr=90174133669",
  "Promociones": "901713283884?pr=90174133669",
  "Perfect Store": "901713283978?pr=90174133669"
};

async function getTasks(listId) {
  const res = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    headers: {
      "Authorization": CLICKUP_TOKEN
    }
  });

  const data = await res.json();
  return data.tasks || [];
}

function renderLayout(content) {
  document.getElementById("app").innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <h2>El Catador</h2>
        <button onclick="showHome()">🏠 Command Center</button>
        <button onclick="showPS()">🏪 Perfect Store</button>
        <button onclick="showSuppliers()">🧩 Proveedores</button>
      </aside>

      <main class="content">
        ${content}
      </main>
    </div>
  `;
}

/////////////////////////////
// HOME - BOARDROOM
/////////////////////////////

function showHome() {
  renderLayout(`
    <h1>Command Center</h1>

    <div class="teams">
      ${teamCard("Marca Catador")}
      ${teamCard("Experiencia Clientes")}
      ${teamCard("Trade Marketing")}
      ${teamCard("Marcas Masivas")}
      ${teamCard("Promociones")}
      ${teamCard("Perfect Store")}
    </div>

    <div class="grid-2">
      <div class="card big">
        <h3>Perfect Store Score</h3>
        <h1>46.7%</h1>
        <p class="bad">Needs Improvement</p>
      </div>

      <div class="card big">
        <h3>Supplier Capacity</h3>
        <h1>4/6</h1>
        <p class="mid">1 slot remaining</p>
      </div>
    </div>

    <div class="card">
      <h3>Executive Snapshot</h3>
      <p>Ejecución débil por baja exhibición adicional</p>
      <p>Capacidad casi llena</p>
      <p>Desalineación ejecución vs agenda</p>
    </div>

    <div class="grid-2">
      <div class="card">
        <h3>Top 3 Prioridades</h3>
        <ol>
          <li>Fix execution in key stores</li>
          <li>Prioritize high-impact accounts</li>
          <li>Align suppliers with PS gaps</li>
        </ol>
      </div>

      <div class="card">
        <h3>Strategic Alerts</h3>
        <p class="bad">Buzzballz underperforming</p>
        <p class="bad">Exhibición no priorizada</p>
        <p class="mid">Demasiadas visitas low impact</p>
      </div>
    </div>

    <div class="card">
      <h3>Weekly Focus</h3>
      <ul>
        <li>Fireball → mejorar exhibición</li>
        <li>Buzzballz → visibilidad</li>
        <li>Grand Cuvée → premium push</li>
      </ul>
    </div>
  `);
}

function teamCard(name) {
  return `
    <div class="team-card" onclick="showTeam('${name}')">
      ${name}
    </div>
  `;
}

/////////////////////////////
// TEAM VIEW
/////////////////////////////

async function showTeam(name) {
  const listId = LISTS[name];
  const tasks = await getTasks(listId);

  renderLayout(`
    <h1>${name}</h1>

    <div class="card">
      <h3>Tareas</h3>

      ${tasks.map(t => `
        <div class="card" style="margin-bottom:10px;">
          <b>${t.name}</b><br/>
          Status: ${t.status.status}<br/>
          Priority: ${t.priority ? t.priority.priority : "None"}
        </div>
      `).join("")}
    </div>
  `);
}

/////////////////////////////
// PERFECT STORE PRO
/////////////////////////////

function showPS() {
  renderLayout(`
    <h1>Perfect Store</h1>

    <div class="card filters">
      <select><option>Clase</option></select>
      <select><option>Marca</option></select>
      <select><option>Tamaño</option></select>
    </div>

    <div class="grid-3">
      <div class="card">
        <h3>Score</h3>
        <h1>46.7%</h1>
      </div>

      <div class="card">
        <h3>Customers</h3>
        <h1>2</h1>
      </div>

      <div class="card">
        <h3>Motor</h3>
        <h1>100% Exp</h1>
      </div>
    </div>

    <div class="card">
      <h3>Execution Drivers</h3>
<p>Exhibición 0%</p>
<div class="progress"><div class="progress-bar red" style="width:0%"></div></div>

<p>Visibilidad 50%</p>
<div class="progress"><div class="progress-bar orange" style="width:50%"></div></div>

<p>Zona Natural 100%</p>
<div class="progress"><div class="progress-bar" style="width:100%"></div></div>
      <p>Visibilidad <span class="mid">50%</span></p>
      <p>Zona Natural <span class="good">100%</span></p>
    </div>

    <div class="grid-2">
      <div class="card">
        <h3>Top Brands</h3>
        <p>1. Fireball (67%)</p>
        <p>2. Buzzballz (27%)</p>
      </div>

      <div class="card">
        <h3>Opportunities</h3>
        <p>Exhibición es el mayor gap</p>
        <p>Colmados peor desempeño</p>
      </div>
    </div>
  `);
}

/////////////////////////////
// SUPPLIERS PRO + CALENDAR
/////////////////////////////

function showSuppliers() {
  renderLayout(`
    <h1>Atención Proveedores</h1>

    <div class="grid-3">
      <div class="card">
        <h3>Used</h3>
        <h1>4</h1>
      </div>

      <div class="card">
        <h3>Available</h3>
        <h1>2</h1>
      </div>

      <div class="card">
        <h3>Total</h3>
        <h1>6</h1>
      </div>
    </div>
<div class="card">
<h3>Supplier Capacity Usage</h3>
  
  <div class="progress">
    <div class="progress-bar" style="width:66%"></div>
  </div>

  <p style="margin-top:10px;">4 de 6 visitas utilizadas</p>
</div>
    <div class="card">
      <h3>Calendar</h3>
      <div class="calendar">
        <div>Semana 1 → Diageo</div>
        <div>Semana 2 → Libre</div>
        <div>Semana 3 → Beam</div>
        <div>Semana 4 → Libre</div>
      </div>
    </div>

    <div class="card">
      <h3>Insight</h3>
      <p>No se está priorizando impacto en ejecución</p>
    </div>
  `);
}

/////////////////////////////

showHome();
