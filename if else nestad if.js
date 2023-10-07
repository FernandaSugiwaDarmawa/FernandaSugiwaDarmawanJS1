
var nilai = 85;


if (nilai >= 90) {
    console.log("Nilai Anda adalah A");
} else if (nilai >= 80) {
    console.log("Nilai Anda adalah B");
} else if (nilai >= 70) {
    console.log("Nilai Anda adalah C");
} else if (nilai >= 60) {
    console.log("Nilai Anda adalah D");
} else {
    console.log("Nilai Anda adalah E");
}


var nilai2 = 55;

if (nilai2 >= 60) {
    console.log("Anda lulus");
    if (nilai2 >= 90) {
        console.log("Anda lulus dengan nilai A");
    } else if (nilai2 >= 80) {
        console.log("Anda lulus dengan nilai B");
    } else if (nilai2 >= 70) {
        console.log("Anda lulus dengan nilai C");
    } else {
        console.log("Anda lulus dengan nilai D");
    }
} else {
    console.log("Anda tidak lulus");
}
