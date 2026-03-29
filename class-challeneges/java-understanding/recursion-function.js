

function countToTen(val) {
    if (val >=10) return;  ///exit condition
    console.log(val);
    countToTen(val + 1);
}
countToTen (1);