const chatBox = document.getElementById("chat-box");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("/api/");
  const data = await res.json();
  appendMessage("Doctora", data.message, "bg-primary text-white", "start");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  // mostrar mi mensaje
  appendMessage("Yo", text, "bg-success text-white", "end");
  input.value = "";

  // mostrar burbuja temporal
  const typingDiv = document.createElement("div");
  typingDiv.className = "d-flex flex-column align-items-start mb-2";
  typingDiv.innerHTML = `
    <div class="p-2 bg-light rounded d-inline-block"><strong>Doctora:</strong></div>
    <div class="p-2 bg-primary text-white rounded d-inline-block typing"><span></span><span></span><span></span></div>
  `;
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    // enviar al backend
    const res = await fetch("/api/chat/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text })
    });
    const data = await res.json();

    // quitar burbuja "..."
    chatBox.removeChild(typingDiv);

    // mostrar respuesta real
    appendMessage("Doctora", data.response, "bg-primary text-white", "start");
  } catch (err) {
    chatBox.removeChild(typingDiv);
    appendMessage("Sistema", "Error al conectar con el servidor", "bg-danger text-white", "start");
  }
});

async function loadSpecialties() {
  const res = await fetch("/api/directory/specialties");
  const data = await res.json();
  appendMessage("Doctora", "Especialidades: " + data.specialties.join(""), "bg-primary text-white", "start");
}

async function loadProfessionals(specialty) {
  const res = await fetch(`/api/directory/professionals/${specialty}`);
  const data = await res.json();
  const lista = data.professionals.map(p => `- ${p}`).join("\n");
  appendMessage("Doctora", `Profesionales en ${data.specialty}:\n${lista}`, "bg-primary text-white", "start");
}

function appendMessage(sender, message, classes, align = "start") {
  const wrapper = document.createElement("div");
  wrapper.className = `d-flex flex-column align-items-${align} mb-2`;

  const nameDiv = document.createElement("div");
  nameDiv.className = "p-2 bg-light rounded d-inline-block";
  nameDiv.innerHTML = `<strong>${sender}:</strong>`;

  const msgDiv = document.createElement("div");
  msgDiv.className = `p-2 rounded d-inline-block ${classes}`;
  msgDiv.style.maxWidth = "70%";
  msgDiv.style.wordWrap = "break-word";
  msgDiv.innerHTML = marked.parse(message);

  wrapper.appendChild(nameDiv);
  wrapper.appendChild(msgDiv);
  chatBox.appendChild(wrapper);

  chatBox.scrollTop = chatBox.scrollHeight;
}