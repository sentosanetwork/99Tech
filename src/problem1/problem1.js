function sum_to_n_ver1(n) {
    return n < 1 ? 0 : n * (n + 1) / 2;
}

console.log("\n version 1 ================================\n");

console.log(sum_to_n_ver1(-9)); 
console.log(sum_to_n_ver1(-1)); 
console.log(sum_to_n_ver1(0)); 
console.log(sum_to_n_ver1(1)); 
console.log(sum_to_n_ver1(2)); 
console.log(sum_to_n_ver1(9));


console.log("\n version 2 ================================\n");

function sum_to_n_ver2(n) {
    return n < 1 ? 0 : n + sum_to_n_ver2(n - 1);
}

console.log(sum_to_n_ver2(-9)); 
console.log(sum_to_n_ver2(-1)); 
console.log(sum_to_n_ver2(0)); 
console.log(sum_to_n_ver2(1)); 
console.log(sum_to_n_ver2(2)); 
console.log(sum_to_n_ver2(9)); 

console.log("\n version 3 ================================\n");

function sum_to_n_ver3(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum_to_n_ver3(-9)); 
console.log(sum_to_n_ver3(-1)); 
console.log(sum_to_n_ver3(0)); 
console.log(sum_to_n_ver3(1)); 
console.log(sum_to_n_ver3(2)); 
console.log(sum_to_n_ver3(9)); 

module.exports = { sum_to_n_ver1, sum_to_n_ver2, sum_to_n_ver3 };
