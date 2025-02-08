// 🐶 每日一句
const dailySentences = [
    "小狗，今天要乖乖的哦！",
    "Daddy永远喜欢小狗。",
    "今天的小狗也是Daddy最爱的小宝贝！"
];

document.addEventListener("DOMContentLoaded", function () {
    let index = new Date().getDate() % dailySentences.length;
    document.getElementById("dailyText").innerText = dailySentences[index];
});

// 💖 积分系统
let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0;
document.getElementById("points").innerText = points;

function earnPoints(amount) {
    points += amount;
    if (points < 0) points = 0;
    document.getElementById("points").innerText = points;
    localStorage.setItem("points", points);
}

// 🎮 便签功能
document.addEventListener("DOMContentLoaded", function () {
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
        document.getElementById("noteInput").value = savedNote;
    }
});

function saveNote() {
    const noteContent = document.getElementById("noteInput").value;
    localStorage.setItem("note", noteContent);
    alert("便签已保存！");
}

function clearNote() {
    document.getElementById("noteInput").value = "";
    localStorage.removeItem("note");
    alert("便签已清空！");
}

// 🎨 像素画板
const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", drawPixel);

function drawPixel(event) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / 10);
    const y = Math.floor((event.clientY - rect.top) / 10);
    ctx.fillStyle = "#ff6699";
    ctx.fillRect(x * 10, y * 10, 10, 10);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 💬 留言区
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (message) {
        const messages = document.getElementById("messages");
        const newMessage = document.createElement("p");
        newMessage.innerText = `🐶 小狗：${message}`;
        messages.appendChild(newMessage);
        messageInput.value = "";
    }
}