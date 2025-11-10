const chatBox = document.getElementById("chat-box");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  // mostrar tu mensaje
  appendMessage("Yo", text, "bg-success text-white", "end");

  // enviar al backend
  const res = await fetch("/api/chat/respond", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: str })
  });
  const data = await res.json();

  // mostrar respuesta del backend
  appendMessage("Doctora", data.response, "bg-primary text-white", "start");

  input.value = "";
});

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
  msgDiv.textContent = message;

  wrapper.appendChild(nameDiv);
  wrapper.appendChild(msgDiv);
  chatBox.appendChild(wrapper);

  chatBox.scrollTop = chatBox.scrollHeight;
}

async function loadSpecialties() {
  const res = await fetch("/api/directory/specialties");
  const data = await res.json();
  appendMessage("Doctora", "Especialidades: " + data.specialties.join(", "), "bg-primary text-white", "start");
}