const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (listNama, callbackFn) => {
  return callbackFn(listNama);
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (listNama) => {
  let hasilAscending = listNama.sort();
  for (let id = 0; id < hasilAscending.length; id++){
    hasilAscending[id] = id.toString() + ". " + hasilAscending[id];
  }
  return hasilAscending;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (listNama) => {
  let hasilDescending = listNama.reverse();
  for (let id = 0; id < hasilDescending.length; id++){
    hasilDescending[id] = id.toString() + ". " + hasilDescending[id];
  }
  return hasilDescending;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
