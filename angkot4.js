var noAngkot = 1,
        jmlAngkot = 10,
        angkotOperasi = 6 ;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= angkotOperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if  (noAngkot == 8) {
        console.log ('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log ('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}