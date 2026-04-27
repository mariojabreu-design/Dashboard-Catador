const content = document.getElementById("content");

//////////////////////////////////////////////////////////
// DATA BASE SIMPLE (puedes luego conectar Excel)
//////////////////////////////////////////////////////////

let data = {
  psScore: 46.7,
  suppliersUsed: 4,
  suppliersTotal: 6
};

//////////////////////////////////////////////////////////
// COMMAND CENTER
//////////////////////////////////////////////////////////

function showHome() {
  content.innerHTML = `
    <h1>Command Center</h1>

    <div class="grid">

      <div class="card">
        <h3>Perfect Store Score</h3>
        <div class="kpi">${data.psScore}%</div>
      </div>

      <div class="card">
        <h3>Supplier Capacity</h3>
        <div class="kpi">${data.suppliersUsed}/${data.suppliersTotal}</div>
      </div>

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
        <li>Implementar exhibiciones adicionales</li>
        <li>Revisar Buzzballz</li>
        <li>Optimizar agenda proveedores</li>
      </ul>
    </div>

    <div class="card">
      <h3>Leadership Cadence (6 equipos)</h3>
      <ul>
        <li>Marca Catador</li>
        <li>Experiencia Clientes</li>
        <li>Trade Marketing</li>
        <li>Marcas Masivas</li>
        <li>Promociones</li>
        <li>Perfect Store</li>
      </ul>
    </div>
  `;
}

//////////////////////////////////////////////////////////
// PERFECT STORE (CON FILTROS)
//////////////////////////////////////////////////////////

let filters = {
  clase: "all",
  marca: "all"
};

function showPS() {
  content.innerHTML = `
    <h1>Perfect Store</h1>

    <div class="card">
      <h3>Filtros</h3>

      <select onchange="filters.clase=this.value; showPS()">
        <option value="all">Clase</option>
        <option value="super">Supermercados</option>
        <option value="colmado">Colmados</option>
      </select>

      <select onchange="filters.marca=this.value; showPS()">
        <option value="all">Marca</option>
        <option value="fireball">Fireball</option>
        <option value="buzz">Buzzballz</option>
      </select>
    </div>

    <div class="grid">

      <div class="card">
        <h3>Score</h3>
        <div class="kpi">${data.psScore}%</div>
      </div>

      <div class="card">
        <h3>Drivers</h3>
        <p>Exhibición <span class="danger">0%</span></p>
        <p>Visibilidad 50%</p>
        <p>Zona Natural <span class="success">100%</span></p>
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

    <div class="card">
      <h3>Action Plan</h3>
      <ul>
        <li>Implementar exhibiciones adicionales</li>
        <li>Mejorar visibilidad en colmados</li>
      </ul>
    </div>
  `;
}

//////////////////////////////////////////////////////////
// PROVEEDORES
//////////////////////////////////////////////////////////

function showSuppliers() {
  content.innerHTML = `
    <h1>Atención Proveedores</h1>

    <div class="grid">

      <div class="card">
        <h3>Capacidad</h3>
        <div class="kpi">${data.suppliersUsed}/${data.suppliersTotal}</div>
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
      <h3>Agenda</h3>
      <ul>
        <li>Diageo - Semana 1</li>
        <li>Beam - Semana 3</li>
      </ul>
    </div>
  `;
}

//////////////////////////////////////////////////////////

showHome();