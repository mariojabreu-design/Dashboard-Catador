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
// HOME - 6 EQUIPOS
/////////////////////////////

function showHome() {
  renderLayout(`
    <h1>Command Center</h1>

    <div class="teams-grid">
      <div class="team-card" onclick="showTeam('marca')">Marca Catador</div>
      <div class="team-card" onclick="showTeam('cx')">Experiencia Clientes</div>
      <div class="team-card" onclick="showTeam('trade')">Trade Marketing</div>
      <div class="team-card" onclick="showTeam('masivo')">Marcas Masivas</div>
      <div class="team-card" onclick="showTeam('promo')">Promociones</div>
      <div class="team-card" onclick="showPS()">Perfect Store</div>
    </div>

    <div class="card">
      <h3>Executive Snapshot</h3>
      <p>Ejecución débil por baja exhibición adicional</p>
      <p>Capacidad de proveedores casi llena</p>
      <p>Desalineación entre ejecución y agenda</p>
    </div>

    <div class="card">
      <h3>Top 3 Prioridades</h3>
      <ol>
        <li>Corregir ejecución en tiendas clave</li>
        <li>Priorizar cuentas de alto impacto</li>
        <li>Alinear proveedores con Perfect Store</li>
      </ol>
    </div>

    <div class="card">
      <h3>Weekly Focus</h3>
      <ul>
        <li>Fireball - mejorar exhibición</li>
        <li>Buzzballz - aumentar visibilidad</li>
        <li>Grand Cuvée - activación premium</li>
      </ul>
    </div>
  `);
}

/////////////////////////////
// TEAM VIEW
/////////////////////////////

function showTeam(team) {
  renderLayout(`
    <h1>${team.toUpperCase()}</h1>

    <div class="card">
      <h3>Top Priorities</h3>
      <ul>
        <li>Acción 1</li>
        <li>Acción 2</li>
        <li>Acción 3</li>
      </ul>
    </div>

    <div class="card">
      <h3>KPIs</h3>
      <p>Performance: 72%</p>
      <p>Trend: +5%</p>
    </div>
  `);
}

/////////////////////////////
// PERFECT STORE
/////////////////////////////

function showPS() {
  renderLayout(`
    <h1>Perfect Store</h1>

    <div class="card filters">
      <h3>Filtros</h3>
      <select>
        <option>Clase</option>
        <option>Supermercados</option>
        <option>Colmados</option>
      </select>

      <select>
        <option>Marca</option>
        <option>Fireball</option>
        <option>Buzzballz</option>
      </select>
    </div>

    <div class="grid-2">
      <div class="card">
        <h3>Score</h3>
        <h1>46.7%</h1>
      </div>

      <div class="card">
        <h3>Drivers</h3>
        <p>Exhibición <span class="bad">0%</span></p>
        <p>Visibilidad <span class="mid">50%</span></p>
        <p>Zona Natural <span class="good">100%</span></p>
      </div>
    </div>

    <div class="card">
      <h3>Insights</h3>
      <ul>
        <li>Exhibición adicional es el mayor gap</li>
        <li>Colmados con menor ejecución</li>
        <li>Buzzballz necesita intervención</li>
      </ul>
    </div>
  `);
}

/////////////////////////////
// PROVEEDORES + CALENDARIO
/////////////////////////////

function showSuppliers() {
  renderLayout(`
    <h1>Atención Proveedores</h1>

    <div class="grid-2">
      <div class="card">
        <h3>Capacidad</h3>
        <h1>4/6</h1>
      </div>

      <div class="card">
        <h3>Insight</h3>
        <p>No se está priorizando impacto en ejecución</p>
      </div>
    </div>

    <div class="card">
      <h3>Reglas</h3>
      <ul>
        <li>Máximo 6 visitas mensuales</li>
        <li>Priorizar Grand Cuvée</li>
        <li>Evitar Nov-Dic</li>
      </ul>
    </div>

    <div class="card">
      <h3>Calendario</h3>
      <div class="calendar">
        <div>Semana 1: Diageo</div>
        <div>Semana 2: Libre</div>
        <div>Semana 3: Beam</div>
        <div>Semana 4: Libre</div>
      </div>
    </div>
  `);
}

/////////////////////////////

showHome();
