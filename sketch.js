const fact = k => {
  return k === 0 ? 1 : k * fact(k - 1)
}

const combination = (n, r) => {
  let num1 = fact(n) / (fact(n - r) * fact(r));
  let num2 = num1;
  let num3 = Math.floor(num1);
  num2 = Math.floor(num2 + 0.0001);
  if (num2 !== num3) {
    return Math.round(num1);
  } else {
    return num3;
  }
}

function setup() {
  createCanvas(600, 500);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  // noLoop();
}

function draw() {
  background(230, 200, 200);
  const N = 32;
  const size = 12;
  let x = width / 2;
  let y = size * 2;
  let prex = 0;
  let prey = 0;

  for (let n = 0; n < N; n++) {
    prex = x;
    prey = y;
    for (let r = n; r >= 0; r--) {
      const value = combination(n, r);
      // console.log(`combination(${n} , ${r}) =  ${combination(n, r)}`)
      if (value % 2 === 0) {
        fill(200, 255, 200)
      } else {
        fill(255, 200, 200);
      }

      if (
        (mouseX > x - size / 2 && mouseX < x + size / 2) &&
        (mouseY > y - size / 2 && mouseY < y + size / 2)) {
        // console.log(combination(n, r));
        fill(240, 0, 0);
        fill(0);
        textSize(30);
        text(`${n}C${r}=${value}`, width / 2, 450);
      }
      noStroke();
      rect(x, y, size, size);


      x += size;
    }
    x = prex;
    y = prey;
    x -= size / 2;
    y += size;
  }
}
