"use strict";
const ps = require("prompt-sync");
const promt = ps();
// Input pendapatan 
const pendapatanHariIni = promt("masukan pendapatan = ") // Ganti dengan pendapatan yang sesuai
let jasa = 0;
let komisi = 0;
if (pendapatanHariIni <= 200000) {
  jasa = 10000;
  komisi = pendapatanHariIni * 0.1;
} else if (pendapatanHariIni <= 500000) {
  jasa = 20000;
  komisi = pendapatanHariIni * 0.15;
} else {
  jasa = 30000;
  komisi = pendapatanHariIni * 0.2;
}
// Output hasil
console.log("Pendapatan Hari Ini: Rp. " + pendapatanHariIni);
console.log("Jasa: Rp. " + jasa);
console.log("Komisi: Rp. " + komisi);