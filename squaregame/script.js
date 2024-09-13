let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

s1.addEventListener("mouseenter", function () {
    let r = Math.floor(Math.random() * 100);
    s1.innerHTML = `<h1>${r}</h1>`;
});

s1.addEventListener("mouseleave", function () {
    s1.innerHTML = `<h1>1</h1>`;
});
s1.addEventListener("dblclick", function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let clr1 = `rgb(${a},${b},${c})`;
    s1.style.backgroundColor = clr1;
});

s1.addEventListener("mouseleave", function () {
    s1.style.backgroundColor = "white";
});

let clr = "green";  

s2.style.backgroundColor = clr;

s2.addEventListener("mouseenter", function () {
    if (clr === "green") {
        s2.style.backgroundColor = "green";
        clr = "red";
    } else if (clr === "red") {
        s2.style.backgroundColor = "red";
        clr = "blue";
    } else {
        s2.style.backgroundColor = "blue";
        clr = "green";
    }
});

s2.addEventListener("mouseleave", function () {
    s2.style.backgroundColor = "white";
});

s3.addEventListener("mouseenter", function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let clr1 = `rgb(${a},${b},${c})`;
    s3.style.backgroundColor = clr1;
});

s3.addEventListener("mouseleave", function () {
    s3.style.backgroundColor = "white";
});

s4.addEventListener("click", function () {
    // Generate random RGB values between 0 and 255
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    // Apply random colors to s1, s2, and s3
    s1.style.backgroundColor = `rgb(${a}, 255, ${c})`;
    s2.style.backgroundColor = `rgb(${a}, ${b}, 255)`;
    s3.style.backgroundColor = `rgb(255, ${b}, ${c})`;
});

s4.addEventListener("mouseleave", function () {
    // Reset background colors to white on mouse leave
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
});