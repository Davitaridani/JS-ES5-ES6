var a = '';

for (var i = 10; i >= 1; i--) {
    for (var b = 1; b <= i; b++) {
        a += '*';
    }
    a += '\n';
}
console.log(a);