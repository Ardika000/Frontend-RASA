// const socket = io("https://server.ditabot.online:5005/"); // Socket.io connection to Rasa API
const socket = io("https://server.ditabot.online:5005/"); // Socket.io connection to Rasa API

const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatLog2 = document.getElementById("chat-log2");
const userInput2 = document.getElementById("user-input2");
const sendButton2 = document.getElementById("send-button2");
const loadingDots = document.getElementById("loading-dots");
const loadingDots2 = document.getElementById("loading-dots2");

sendButton.addEventListener("click", () => sendMessage());
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

sendButton2.addEventListener("click", () => sendMessage2());
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
  ];
  options.forEach((option) => {
    const button = {
      title: option,
      payload: option,
    };
    displayButton(button);
  });
});

function handleMainOptionButtonClick(option) {
  sendMessage(option);
}

function handleSecondaryOptionButtonClick(jurusan) {
  sendMessage(jurusan);
}

function handleSecondaryOptionButtonClick(materi) {
  sendMessage(materi);
}
function handleMainOptionButtonClick2(option) {
  sendMessage2(option);
}

function handleSecondaryOptionButtonClick2(jurusan) {
  sendMessage2(jurusan);
}

function handleSecondaryOptionButtonClick2(materi) {
  sendMessage2(materi);
}

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
  ];
  options.forEach((option) => {
    const button = {
      title: option,
      payload: option,
    };
    displayButton2(button);
  });
});

function displayJurusanButton(){
  const jurusanOptions =[
    "TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "OTO (Otomotif)",
    "DKV (Desain Komunikasi Visual)",
    "TM (Teknik Mesin)",
    "LAS (Teknik Las)",
    "KA (Kimia Analis)"
  ]
  jurusanOptions.forEach((jurusan)=>{
    const button ={
      title: jurusan,
      payload: jurusan,
    };
    displayButton(button, handleSecondaryOptionButtonClick)
  })
}
function displayJurusanButton2(){
  const jurusanOptions =[
    "TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "OTO (Otomotif)",
    "DKV (Desain Komunikasi Visual)",
    "TM (Teknik Mesin)",
    "LAS (Teknik Las)",
    "KA (Kimia Analis)"
  ]
  jurusanOptions.forEach((jurusan)=>{
    const button ={
      title: jurusan,
      payload: jurusan,
    };
    displayButton2(button, handleSecondaryOptionButtonClick2)
  })
}
function displayMateriButton(){
  const materiOptions =[
    "Matematika",
    "B.indonesia",
    "B.Jawa",
    "B.Inggris",
    "PP",
    "PAI",
    "IPAS",
    "DTJKT",
    "PKK",
    "Olahraga",
  ]
  materiOptions.forEach((materi)=>{
    const button ={
      title: materi,
      payload: materi,
    };
    displayButton(button, handleSecondaryOptionButtonClick)
  })
}
function displayMateriButton2(){
  const materiOptions =[
    "Matematika",
    "B.indonesia",
    "B.Jawa",
    "B.Inggris",
    "PP",
    "PAI",
    "IPAS",
    "DTJKT",
    "PKK",
    "Olahraga",
  ]
  materiOptions.forEach((materi)=>{
    const button ={
      title: materi,
      payload: materi,
    };
    displayButton2(button, handleSecondaryOptionButtonClick2)
  })
}

function displayKelasJurusanButton(){
  const jurusanOptions =[
    "10 TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "11 TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "12 TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "10 OTO (Otomotif)",
    "11 OTO (Otomotif)",
    "12 OTO (Otomotif)",
    "10 DKV (Desain Komunikasi Visual)",
    "11 DKV (Desain Komunikasi Visual)",
    "12 DKV (Desain Komunikasi Visual)",
    "10 TM (Teknik Mesin)",
    "11 TM (Teknik Mesin)",
    "12 TM (Teknik Mesin)",
    "10 LAS (Teknik Las)",
    "11 LAS (Teknik Las)",
    "12 LAS (Teknik Las)",
    "10 KA (Kimia Analis)",
    "11 KA (Kimia Analis)",
    "12 KA (Kimia Analis)"
  ]
  jurusanOptions.forEach((jurusan)=>{
    const button ={
      title: jurusan,
      payload: jurusan,
    };
    displayButton(button, handleSecondaryOptionButtonClick)
  })
}
function displayKelasJurusanButton2(){
  const jurusanOptions =[
    "10 TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "11 TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "12 TJKT (Teknik Jaringan Komputer dan Telekomunikasi",
    "10 OTO (Otomotif)",
    "11 OTO (Otomotif)",
    "12 OTO (Otomotif)",
    "10 DKV (Desain Komunikasi Visual)",
    "11 DKV (Desain Komunikasi Visual)",
    "12 DKV (Desain Komunikasi Visual)",
    "10 TM (Teknik Mesin)",
    "11 TM (Teknik Mesin)",
    "12 TM (Teknik Mesin)",
    "10 LAS (Teknik Las)",
    "11 LAS (Teknik Las)",
    "12 LAS (Teknik Las)",
    "10 KA (Kimia Analis)",
    "11 KA (Kimia Analis)",
    "12 KA (Kimia Analis)"
  ]
  jurusanOptions.forEach((jurusan)=>{
    const button ={
      title: jurusan,
      payload: jurusan,
    };
    displayButton2(button, handleSecondaryOptionButtonClick2)
  })
}

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

// Receive and display bot responses from Rasa
socket.on("bot_uttered", (response) => {
  const botMessage = response.text;
  const buttons = response.buttons;
  loadingDots.style.display = "none";
  displayMessage(botMessage, "bot");

  if(botMessage.toLowerCase().includes("tolong masukkan jurusannya ya kak :)")){
    displayJurusanButton();
  }

  if(botMessage.toLowerCase().includes("tolong masukkan kelas dan jurusannya ya kak :)")){
    displayKelasJurusanButton();
  }

  if(botMessage.toLowerCase().includes("tolong masukkan materi yang diajar guru tersebut ya kak :)")){
    displayMateriButton();
  }

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

  if(botMessage.toLowerCase().includes("tolong masukkan jurusannya ya kak :)")){
    displayJurusanButton2();
  }

  if(botMessage.toLowerCase().includes("tolong masukkan kelas dan jurusannya ya kak :)")){
    displayKelasJurusanButton2();
  }

  if(botMessage.toLowerCase().includes("tolong masukkan materi yang diajar guru tersebut ya kak :)")){
    displayMateriButton2();
  }

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

// full screen
document.getElementById('size').addEventListener('click', ()=> {
  const chatBox = document.querySelector('.chat-box');
  const chatLog = document.getElementById('chat-log2');
  const userInput2 = document.getElementById('user-input2');

  chatBox.classList.toggle('full-screen');
  
  const batas2 = document.querySelector('.batas2');
  if (chatBox.classList.contains('full-screen')) {
    batas2.style.height = '530px'; 
  }else{
    batas2.style.height = '235px'; 
  
  }

  if (chatBox.classList.contains('full-screen')) {
    chatLog.style.height = '510px';
  }else{
    chatLog.style.height = '210px';
  }

  if (chatBox.classList.contains('full-screen')) {
    userInput2.style.width = '280px';
  }else{
    userInput2.style.width = '220px';
  }
});

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById('size1').addEventListener('click',()=>{
    
    if(window.innerWidth>=1280){
      const profile = document.querySelector('.profile');
      if(!profile.classList.contains('profile-full-screen')){
        profile.classList.add('profile-full-screen');
      }else{
        profile.classList.remove('profile-full-screen');
      }
  
      const chatLog = document.getElementById('chat-log');
      if (profile.classList.contains('profile-full-screen')) {
        chatLog.style.height = '580px'; 
      }else{
        chatLog.style.height = '350px'; 
      }
      
      const batas = document.querySelector('.batas');
      if (profile.classList.contains('profile-full-screen')) {
        batas.style.height = '600px'; 
      }else{
        batas.style.height = '370px'; 
      }
      
      const userInput= document.getElementById('user-input');
      if(profile.classList.contains('profile-full-screen')){
        userInput.style.width = '1000px';
        userInput.style.height= '30px'
      }else{
        userInput.style.width = '700px';
      }
    }
    if(window.innerWidth<=576){
      const profile = document.querySelector('.profile');
      if(!profile.classList.contains('profile-full-screen')){
        profile.classList.add('profile-full-screen');
      }else{
        profile.classList.remove('profile-full-screen');
      }
  
      const chatLog = document.getElementById('chat-log');
      if (profile.classList.contains('profile-full-screen')) {
        chatLog.style.height = '630px'; 
      }else{
        chatLog.style.height = '250px'; 
      }
      
      const batas = document.querySelector('.batas');
      if (profile.classList.contains('profile-full-screen')) {
        batas.style.height = '650px'; 
      }else{
        batas.style.height = '260px'; 
      }
      
      const userInput= document.getElementById('user-input');
      if(profile.classList.contains('profile-full-screen')){
        userInput.style.width = '490px';
        userInput.style.height= '30px'
      }else{
        userInput.style.width = '350px';
        userInput.style.height = '13px';
      }
      
      const sendImg = document.querySelector('.send-img');
      if(profile.classList.contains('profile-full-screen')){
        sendImg.style.width = '20px';
        sendImg.style.height= '20px'
      }else{
        sendImg.style.width = '10px';
        sendImg.style.height = '10px';
      }

    }
    if(window.innerWidth<=672){
      const profile = document.querySelector('.profile');
      if(!profile.classList.contains('profile-full-screen')){
        profile.classList.add('profile-full-screen');
      }else{
        profile.classList.remove('profile-full-screen');
      }
  
      const chatLog = document.getElementById('chat-log');
      if (profile.classList.contains('profile-full-screen')) {
        chatLog.style.height = '630px'; 
      }else{
        chatLog.style.height = '350px'; 
      }
      
      const batas = document.querySelector('.batas');
      if (profile.classList.contains('profile-full-screen')) {
        batas.style.height = '650px'; 
      }else{
        batas.style.height = '370px'; 
      }
      
      const userInput= document.getElementById('user-input');
      if(profile.classList.contains('profile-full-screen')){
        userInput.style.width = '490px';
        userInput.style.height= '30px'
      }else{
        userInput.style.width = '450px';
        userInput.style.height = '20px';
      }
      
      const sendImg = document.querySelector('.send-img');
      if(profile.classList.contains('profile-full-screen')){
        sendImg.style.width = '20px';
        sendImg.style.height= '20px'
      }else{
        sendImg.style.width = '18px';
        sendImg.style.height = '18px';
      }

    }
    if(window.innerWidth<=768){
      const profile = document.querySelector('.profile');
      if(!profile.classList.contains('profile-full-screen')){
        profile.classList.add('profile-full-screen');
      }else{
        profile.classList.remove('profile-full-screen');
      }
  
      const chatLog = document.getElementById('chat-log');
      if (profile.classList.contains('profile-full-screen')) {
        chatLog.style.height = '830px'; 
      }else{
        chatLog.style.height = '230px'; 
      }
      
      const batas = document.querySelector('.batas');
      if (profile.classList.contains('profile-full-screen')) {
        batas.style.height = '850px'; 
      }else{
        batas.style.height = '260px'; 
      }
      
      const userInput= document.getElementById('user-input');
      if(profile.classList.contains('profile-full-screen')){
        userInput.style.width = '600px';
        userInput.style.height= '30px'
      }else{
        userInput.style.width = '350px';
        userInput.style.height = '20px';
      }
      
      const sendImg = document.querySelector('.send-img');
      if(profile.classList.contains('profile-full-screen')){
        sendImg.style.width = '20px';
        sendImg.style.height= '20px'
      }else{
        sendImg.style.width = '18px';
        sendImg.style.height = '18px';
      }

    }
    if(window.innerWidth<=1015){
      const profile = document.querySelector('.profile');
      if(!profile.classList.contains('profile-full-screen')){
        profile.classList.add('profile-full-screen');
      }else{
        profile.classList.remove('profile-full-screen');
      }
  
      const chatLog = document.getElementById('chat-log');
      if (profile.classList.contains('profile-full-screen')) {
        chatLog.style.height = '850px'; 
      }else{
        chatLog.style.height = '310px'; 
      }
      
      const batas = document.querySelector('.batas');
      if (profile.classList.contains('profile-full-screen')) {
        batas.style.height = '870px'; 
      }else{
        batas.style.height = '330px'; 
      }
      
      const userInput= document.getElementById('user-input');
      if(profile.classList.contains('profile-full-screen')){
        userInput.style.width = '900px';
        userInput.style.height= '30px'
      }else{
        userInput.style.width = '500px';
        userInput.style.height = '20px';
      }
      
      const sendImg = document.querySelector('.send-img');
      if(profile.classList.contains('profile-full-screen')){
        sendImg.style.width = '20px';
        sendImg.style.height= '20px'
      }else{
        sendImg.style.width = '18px';
        sendImg.style.height = '18px';
      }

    }
  });
});

