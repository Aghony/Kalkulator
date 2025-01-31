let currentInput = ""; // Menyimpan input angka saat ini yang dimasukkan oleh pengguna
let operator = ""; // Menyimpan operator matematika yang dipilih pengguna (+, -, *, /)
let previousInput = ""; // Menyimpan angka sebelumnya yang digunakan dalam operasi
let history = []; // Menyimpan riwayat perhitungan dalam array


// Fungsi untuk menambahkan angka yang dipilih pengguna ke input saat ini
function appendNumber(number) {
  currentInput += number; // Menambahkan angka ke currentInput
  updateDisplay(currentInput); // Memperbarui tampilan dengan nilai currentInput yang baru
}

// Fungsi untuk memperbarui tampilan kalkulator
function updateDisplay(value) {
  document.getElementById("display").value = value; // Mengubah nilai tampilan di layar kalkulator
}

// Fungsi untuk menetapkan operator yang dipilih oleh pengguna
function setOperator(op) {
  if (currentInput === "") return; // Jika input saat ini kosong, tidak melakukan apa-apa
  if (previousInput !== "") calculate(); // Jika sebelumnya ada input, hitung hasilnya dulu
  operator = op; // Menyimpan operator yang dipilih

  // Mengubah simbol operator untuk tampilan
  if (operator === "*") {
    operator = "x"; // Ganti * menjadi x
  } else if (operator === "/") {
    operator = "÷"; // Ganti / menjadi ÷
  }

  previousInput = currentInput; // Menyimpan currentInput sebagai angka sebelumnya
  currentInput = ""; // Mengosongkan currentInput agar pengguna dapat mengetik angka berikutnya
  updateDisplay(previousInput + " " + operator); // Memperbarui tampilan untuk menampilkan angka sebelumnya dan operator
}

// Fungsi untuk melakukan perhitungan berdasarkan operator dan input yang diberikan
function calculate() {
  if (previousInput === "" || currentInput === "" || operator === "") return; // Memeriksa apakah semua input diperlukan ada

  const num1 = parseFloat(previousInput); // Mengonversi previousInput ke angka
  const num2 = parseFloat(currentInput); // Mengonversi currentInput ke angka
  let result; // Menyimpan hasil perhitungan

  // Melakukan perhitungan berdasarkan operator yang dipilih
  switch (operator) {
    case "+":
      result = num1 + num2; // Penjumlahan
      break;
    case "-":
      result = num1 - num2; // Pengurangan
      break;
    case "x": 
      result = num1 * num2; // Perkalian
      break;
    case "÷": 
      result = num2 === 0 ? "error" : num1 / num2; // Pembagian, jika pembagi 0 maka tampilkan error
      break;
    default:
      return; // Jika operator tidak valid, keluar dari fungsi
  }

  // Menyimpan riwayat dengan format yang benar sebelum mengosongkan operator
  history.push(`${previousInput} ${operator} ${currentInput} = ${result}`);
  updateHistoryDisplay(); // Memperbarui tampilan riwayat

  updateDisplay(result); // Memperbarui tampilan dengan hasil perhitungan
  previousInput = result; // Menyimpan hasil sebagai previousInput untuk perhitungan berikutnya
  currentInput = result.toString(); // Mengubah hasil ke string dan menyimpannya di currentInput
  operator = ""; // Mengosongkan operator setelah perhitungan selesai
}

// Fungsi untuk membersihkan layar kalkulator dan mengatur ulang semua input
function clearDisplay() {
  currentInput = ""; // Mengosongkan input saat ini
  previousInput = ""; // Mengosongkan input sebelumnya
  operator = ""; // Mengosongkan operator
  updateDisplay(""); // Mengosongkan tampilan kalkulator
}

// Fungsi untuk memperbarui tampilan riwayat perhitungan
function updateHistoryDisplay() {
  const historyContainer = document.getElementById("history");
  historyContainer.innerHTML = ""; // Mengosongkan tampilan riwayat sebelumnya
  
  // Menampilkan riwayat perhitungan terbaru
  for (let i = 0; i < history.length; i++) {
    const historyItem = document.createElement("div");
    historyItem.textContent = history[i]; // Menampilkan perhitungan dalam riwayat
    historyContainer.appendChild(historyItem); // Menambahkan item ke container riwayat
  }
}
