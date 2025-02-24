let currentInput = ""; // Menyimpan input angka saat ini
let previousInput = ""; // Menyimpan angka sebelumnya
let operator = ""; // Menyimpan operator yang dipilih

// Fungsi untuk menambahkan angka ke input saat ini
function appendNumber(number) {
  if (number === "," && currentInput.includes(",")) return; // Cegah koma ganda
  currentInput += number; // Tambahkan angka ke currentInput
  updateDisplay(previousInput + operator + currentInput); // Update tampilan kalkulator
}

// Fungsi untuk memperbarui tampilan kalkulator
function updateDisplay(value) {
  if (value === "") {
    document.getElementById("display").value = "0";
  } else {
    document.getElementById("display").value = value; // Update tampilan dengan input saat ini
  }
}

// Fungsi untuk menetapkan operator yang dipilih pengguna
function setOperator(op) {
  if (currentInput === "") return; // Tidak melakukan apa-apa jika input kosong

  // Jika ada operator sebelumnya, lakukan perhitungan
  if (previousInput !== "" && operator !== "") {
    calculate(); // Jika ada perhitungan yang perlu dilakukan, lakukan perhitungan
  }

  operator = op; // Menyimpan operator yang dipilih
  previousInput = currentInput; // Menyimpan currentInput sebagai angka sebelumnya
  currentInput = ""; // Kosongkan currentInput agar siap untuk input berikutnya

  // Update tampilan
  updateDisplay(previousInput + " " + operator);
}

// Fungsi untuk menangani persen dan mengubahnya menjadi desimal
function handlePercentage() {
  if (currentInput !== "") {
    // Mengubah persen menjadi desimal, misalnya 50% menjadi 0.50
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay(currentInput); // Update tampilan dengan nilai baru
  }
}

// Fungsi untuk melakukan perhitungan berdasarkan operator dan input yang diberikan
function calculate() {
  if (previousInput === "" || currentInput === "" || operator === "") return; // Cek input valid

  let num1 = parseFloat(previousInput);
  let num2 = parseFloat(currentInput);
  let result;

  // Jika ada pembagian dengan nol
  if (operator === "÷" && num2 === 0) {
    updateDisplay("Infinity"); // Tampilkan error jika pembagian dengan nol
    return;
  }

  // Melakukan perhitungan berdasarkan operator
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
      result = num1 / num2; // Pembagian
      break;
    default:
      return;
  }

  updateDisplay(result); // Update tampilan dengan hasil perhitungan
  previousInput = result; // Simpan hasil sebagai previousInput untuk perhitungan berikutnya
  currentInput = result.toString(); // Ubah hasil ke string dan simpan ke currentInput
  operator = ""; // Reset operator setelah perhitungan selesai
}

// Fungsi untuk membersihkan layar kalkulator
function clearAllDisplay() {
  currentInput = ""; // Mengosongkan input saat ini
  previousInput = ""; // Mengosongkan input sebelumnya
  operator = ""; // Mengosongkan operator
  updateDisplay(""); // Mengosongkan tampilan kalkulator
}

// Fungsi untuk membersihkan hanya input saat ini (Clear Entry)
function clearEntry() {
  if (currentInput !== "") {
    // Hapus karakter terakhir jika ada input
    currentInput = currentInput.slice(0, -1);
  } else if (operator !== "") {
    // Jika currentInput kosong dan ada operator, hapus operator
    operator = "";
  } else if (previousInput !== "") {
    // Jika currentInput kosong, operator kosong, dan ada previousInput, hapus previousInput
    previousInput = "";
  }
  
  // Update tampilan setelah perubahan
  updateDisplay(previousInput + operator + currentInput);
}

// Fungsi untuk mengubah tanda angka (positif ke negatif atau sebaliknya)
function toggleSign() {
  if (currentInput !== "") {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay(currentInput);
  }
} 
