function sum_to_n_a(n) {
    return n < 1 ? 0 : n * (n + 1) / 2;
}

console.log("\n sum_to_n_a ================================\n");
console.log(sum_to_n_a(-9)); 
console.log(sum_to_n_a(-1)); 
console.log(sum_to_n_a(0)); 
console.log(sum_to_n_a(1)); 
console.log(sum_to_n_a(2)); 
console.log(sum_to_n_a(9));

function sum_to_n_b(n) {
    return n < 1 ? 0 : n + sum_to_n_b(n - 1);
}

console.log("\n sum_to_n_b ================================\n");
console.log(sum_to_n_b(-9)); 
console.log(sum_to_n_b(-1)); 
console.log(sum_to_n_b(0)); 
console.log(sum_to_n_b(1)); 
console.log(sum_to_n_b(2)); 
console.log(sum_to_n_b(9)); 

function sum_to_n_c(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("\n sum_to_n_c ================================\n");
console.log(sum_to_n_c(-9)); 
console.log(sum_to_n_c(-1)); 
console.log(sum_to_n_c(0)); 
console.log(sum_to_n_c(1)); 
console.log(sum_to_n_c(2)); 
console.log(sum_to_n_c(9)); 

module.exports = { sum_to_n_a, sum_to_n_b, sum_to_n_c };
