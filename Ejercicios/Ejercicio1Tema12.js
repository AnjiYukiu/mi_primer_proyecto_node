function fibo(num) {
    array = [];
    array [0] =
    array[1] = 1
    for (i=2;i<num;i++) {
        array[i] = array [i-1] + array [i-2]
    }
    return array
}

console.log(fibo(6))