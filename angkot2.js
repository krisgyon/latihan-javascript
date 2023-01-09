var noAngkot = 1,
        jmlAngkot = 10,
        angkotOperasi = 9 ;

while (noAngkot <= angkotOperasi) {
    console.log ('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for (var noAngkot = angkotOperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log ('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}