document.addEventListener("DOMContentLoaded", () => {
    let i = 1;
    console.log("xисла від 1 до 10:");
    while (i <= 10) {
        console.log(i);
        i++;
    }

    console.log("парні числа від 2 до 20:");
    for (let j = 2; j <= 20; j++) {
        if (j % 2 !== 0) continue;
        console.log(j);
    }

    console.log("таблиця множення числа 7:");
    for (let k = 1; k <= 10; k++) {
        console.log(`7 x ${k} = ${7 * k}`);
    }

    const array1 = [1, 2, 3, 4, 5];
    let index = 0;
    console.log("елементи масиву [1, 2, 3, 4, 5]:");
    while (index < array1.length) {
        console.log(array1[index]);
        index++;
    }
    const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("числа масиву окрім 7:");
    for (const num of array2) {
        if (num === 7) break;
        console.log(num);
    }

    const n = parseInt(prompt("введіть число n:"));
    console.log(`числа менші за ${n}:`);
    for (let m = 1; ; m++) {
        if (m >= n) break;
        console.log(m);
    }

    console.log("числа від 1 до 20 крім тих що кратні 3:");
    let p = 1;
    while (p <= 20) {
        if (p % 3 === 0) {
            p++;
            continue;
        }
        console.log(p);
        p++;
    }
});