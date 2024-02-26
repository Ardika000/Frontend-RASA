// const socket = io("http://localhost:5005"); // Socket.io connection to Rasa API

const socket = io("https://server.ditabot.online:5005"); // Socket.io connection to Rasa API

const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatLog2 = document.getElementById("chat-log2");
const userInput2 = document.getElementById("user-input2");
const sendButton2 = document.getElementById("send-button2");
const loadingDots = document.getElementById("loading-dots");
const loadingDots2 = document.getElementById("loading-dots2");

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

sendButton2.addEventListener("click", sendMessage2);
userInput2.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage2();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  displayMessage(
    "Selamat datang di DITA Bot kak! Supaya lebih mudah silakan pilih salah satu opsi di bawah ini. Atau kakak mau langsung chat juga boleh :)",
    "bot"
  );

  const options = [
    "Profil Sekolah",
    "Peluang Kerja",
    "Jadwal sekolah",
    "Materi Jurusan",
    "Profil Jurusan",
    "Produk Teaching Factory",
  ]; // Ganti dengan opsi sesuai kebutuhan Anda
  options.forEach((option) => {
    const button = {
      title: option,
      payload: option,
    };
    displayButton(button);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  displayMessage2(
    "Selamat datang di DITA Bot kak! Supaya lebih mudah silakan pilih salah satu opsi di bawah ini. Atau kakak mau langsung chat juga boleh :)",
    "bot"
  );

  const options = [
    "Profil Sekolah",
    "Peluang Kerja",
    "Jadwal sekolah",
    "Materi Jurusan",
    "Profil Jurusan",
    "Produk Teaching Factory",
  ]; // Ganti dengan opsi sesuai kebutuhan Anda
  options.forEach((option) => {
    const button = {
      title: option,
      payload: option,
    };
    displayButton2(button);
  });
});

function sendMessage(payload) {
  let message;
  if (payload) {
    message = payload;
  } else {
    message = userInput.value.trim();
  }

  if (message !== "") {
    displayMessage(message, "user");
    loadingDots.style.display = "inline-block";
    socket.emit("user_uttered", { message });
    userInput.value = "";
  }
}

function sendMessage2(payload) {
  let message;
  if (payload) {
    message = payload;
  } else {
    message = userInput2.value.trim();
  }

  if (message !== "") {
    displayMessage2(message, "user");
    loadingDots2.style.display = "inline-block";
    socket.emit("user_uttered", { message });
    userInput2.value = "";
  }
}

// function sendMessage() {
//     const message = userInput.value.trim();
//     if (message !== "") {
//         displayMessage(message, "user");
//         loadingDots.style.display = "inline-block";
//         socket.emit("user_uttered", { message });
//         userInput.value = "";
//     }
// }

// Receive and display bot responses from Rasa
socket.on("bot_uttered", (response) => {
  const botMessage = response.text;
  const buttons = response.buttons;
  loadingDots.style.display = "none";
  displayMessage(botMessage, "bot");

  if (buttons && buttons.length > 0) {
    buttons.forEach((button) => {
      displayButton(button);
    });
  }

  chatLog.scrollTop = chatLog.scrollHeight;
});

socket.on("bot_uttered", (response) => {
  const botMessage = response.text;
  const buttons = response.buttons;
  loadingDots2.style.display = "none";
  displayMessage2(botMessage, "bot");

  if (buttons && buttons.length > 0) {
    buttons.forEach((button) => {
      displayButton2(button);
    });
  }

  chatLog.scrollTop = chatLog.scrollHeight;
});

function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    "message",
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.innerText = message;
  chatLog.appendChild(messageElement);

  chatLog.scrollTop = chatLog.scrollHeight;
}

function displayMessage2(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    "message",
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.innerText = message;
  chatLog2.appendChild(messageElement);

  chatLog2.scrollTop = chatLog2.scrollHeight;
}

function displayButton(button) {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = button.title;
  buttonElement.addEventListener("click", () => {
    sendMessage(button.payload);
  });
  buttonElement.classList.add("bot-message-button");
  chatLog.appendChild(buttonElement);
}

function displayButton2(button) {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = button.title;
  buttonElement.addEventListener("click", () => {
    sendMessage2(button.payload);
  });
  buttonElement.classList.add("bot-message-button");
  chatLog2.appendChild(buttonElement);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const chatToggle = document.createElement("button");
const img = document.createElement("img");
img.src = "./img/chat_8273353.png"; // Ganti dengan path gambar Anda
chatToggle.appendChild(img);
chatToggle.classList.add("chat-toggle");
document.body.appendChild(chatToggle);

chatToggle.addEventListener("click", toggleChatBox);

function toggleChatBox() {
  const chatBox = document.querySelector(".chat-box");
  chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

document.addEventListener("click", function (event) {
  const chatBox = document.querySelector(".chat-box");
  if (
    !event.target.closest(".chat-toggle") &&
    !event.target.closest(".chat-box")
  ) {
    chatBox.style.display = "none";
  }
});

// Buat fungsi untuk membuat tombol toggle
function createChatToggle() {
  const chatToggle = document.createElement("button");
  const img = document.createElement("img");
  img.src = "./img/chat_8273353.png"; // Ganti dengan path gambar Anda
  chatToggle.appendChild(img);
  chatToggle.classList.add("chat-toggle");
  document.body.appendChild(chatToggle);
  chatToggle.addEventListener("click", toggleChatBox);
}

// Buat fungsi untuk menghapus tombol toggle
function removeChatToggle() {
  const chatToggle = document.querySelector(".chat-toggle");
  if (chatToggle) {
    chatToggle.removeEventListener("click", toggleChatBox);
    chatToggle.remove();
  }
}

// Fungsi untuk menampilkan atau menyembunyikan tombol toggle berdasarkan lebar layar
function handleScreenSizeChange() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 480) {
    createChatToggle();
  } else {
    removeChatToggle();
  }
}

// Panggil fungsi handleScreenSizeChange saat halaman dimuat dan saat ukuran layar berubah
document.addEventListener("DOMContentLoaded", handleScreenSizeChange);
window.addEventListener("resize", handleScreenSizeChange);

document.getElementById("toggleBtn").addEventListener("click", function () {
  let menu = document.getElementById("menu");
  if (window.innerWidth <= 480) {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex";
      menu.style.animation = "slide-down 0.5s ease";
    } else {
      menu.style.display = "none";
    }
  }
});

document.addEventListener("click", function (event) {
  let menu = document.getElementById("menu");
  let toggleBtn = document.getElementById("toggleBtn");
  if (window.innerWidth <= 480) {
    if (event.target !== menu && event.target !== toggleBtn) {
      menu.style.display = "none";
    }
  }
});

// Buat kirim email
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      (function () {
        emailjs.init("9LACS450s99jm7XP9");
      })();

      let params = {
        from: document.querySelector("#from").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };
      const serviceID = "service_nzfsjct";
      const templateID = "template_ht92pul";

      emailjs
        .send(serviceID, templateID, params)
        .then(function (res) {
          // Pesan berhasil terkirim
          alert("Email berhasil terkirim");

          // Menghapus nilai input setelah pesan terkirim
          document.querySelector("#from").value = "";
          document.querySelector("#subject").value = "";
          document.querySelector("#message").value = "";
        })
        .catch(function (error) {
          // Penanganan kesalahan jika pesan gagal terkirim
          console.error("Gagal mengirim pesan:", error);
          alert("Maaf, ada masalah dalam pengiriman pesan.");
        });
    });
});
