🏥 Clínica Chatbot – Frontend

Interfaz web para la clínica médica.
Este servicio ofrece un chatbot visual, permite consultar profesionales y manejar turnos básicos desde el navegador.

📂 Estructura general del proyecto
app/
 ├── Assets/
 │   ├── css/             # Estilos (main.css, theme.css, etc.)
 │   ├── imagenes/        # Logos, íconos, fotos de profesionales
 │   ├── js/              # Scripts JS (chat.js, api.js, etc.)
 ├── Templates/           # Vistas HTML (index.html, profesionales.html, turnos.html)

⚙️ Requisitos previos

Para ejecutar el proyecto podés usar dos formas:

🔹 Opción 1: ejecución local directa

Navegador moderno (Chrome, Firefox, Edge)

Servidor local opcional (ej. Python, PHP, Live Server)

🔹 Opción 2: con Docker

Docker Desktop o Docker Engine instalado

Conexión a internet para descargar imagen base

🚀 Configuración inicial (modo local)

1️⃣ Clonar el repositorio:

git clone https://github.com/CLINICA-CHATBOOT/clinica-chatbot-front.git
cd clinica-chatbot-front


2️⃣ Ejecutar el servidor:

uvicorn app.main:app --reload


📍 Servidor disponible en:
http://127.0.0.1:8000

🔍 Integración con Backend

El frontend se conecta al backend FastAPI usando fetch o XMLHttpRequest.

👉 API base: http://127.0.0.1:8000

Ejemplos de integración:

- chat.js → POST /chat/respond
- api.js → GET /directory/specialties, /directory/professionals
- turnos.js → POST /appointments

Ejemplos de uso

- Chat:
El usuario escribe → chat.js envía texto → muestra respuesta en el DOM.

- Especialidades:
api.js hace GET → renderiza lista en especialidades.html.

- Turnos:
Formulario en turnos.html → turnos.js envía datos → muestra confirmación.

Scripts útiles

chat.js     Lógica del chatbot (envío y renderizado) 
api.js      Funciones para consumir endpoints
turnos.js   Validación y envío de turnos
main.css    Estilos base

🧩 Flujo de desarrollo (GitFlow simple)

- Rama develop

- Pull Requests hacia develop

- Solo versiones estables se fusionan a main

- main protegida (no se pushea directo)

👥 Equipo
Rol	                    Nombre	               
Coordinador técnico	    Federico Musa	
Desarrolladora  	    Tamara Paez	

💡 Notas finales

El objetivo del proyecto es educativo: practicar trabajo en equipo, manejo de ramas, integración IA y despliegue con Docker.

El código busca ser claro, reproducible y sin dependencias innecesarias.

Puede expandirse fácilmente con un front React o una app de escritorio.