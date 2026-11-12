// ===== SE 1: perhitungan dasar =====
function formatRupiah(angka) {
  return "Rp" + Math.round(angka).toLocaleString("id-ID");
}

function hitungTotal() {
  var harga = Number(document.getElementById("paket").value);
  var jumlah = Number(document.getElementById("jumlah").value);
  var kode = document.getElementById("promo").value.trim().toUpperCase();
  var hasil = document.getElementById("hasil");

  if (!jumlah || jumlah < 1) {
    hasil.innerHTML = '<p class="error">Durasi minimal 1 hari.</p>';
    return;
  }

  var hargaAwal = harga * jumlah;

  // ===== SE 2: logika diskon (if / else) =====
  var diskon = 0;
  var keterangan = "Tidak ada diskon";

  if (kode === "BISDIG") {
    diskon = hargaAwal * 0.10;
    keterangan = "Diskon 10% (kode BISDIG)";
  } else if (jumlah >= 3) {
    diskon = hargaAwal * 0.10;
    keterangan = "Diskon 10% (sewa minimal 3 hari)";
  } else if (kode !== "") {
    keterangan = "Kode promo tidak valid";
  }

  var total = hargaAwal - diskon;

  hasil.innerHTML =
    "<p>Harga awal: " + formatRupiah(hargaAwal) + "</p>" +
    "<p>Potongan diskon: " + formatRupiah(diskon) + " (" + keterangan + ")</p>" +
    '<p class="total">Total bayar: ' + formatRupiah(total) + "</p>";
}
