function seguindo() {
  alert("ola wellington");
}
//exercicio1
function exe1() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = nro1 - nro2;

  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText = " O resultado é:" + sub;
}
function exe2() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let nro3 = Number(document.getElementById("nro3").value);
  let sub = nro1 * nro2 * nro3;

  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText = " O resultado é:" + sub;
}

function exe3() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = nro1 / nro2;

  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText = " O resultado é:" + sub;
}
function exe4() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = nro1 * 2 + (nro2 * 3) / 5;
  let media = nro1 * 2;
  let media3 = nro2 * 3;
  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText =
    " O resultado é:" +
    sub +
    " ,a 2 media é :" +
    media +
    " ,a media 3 é :" +
    media3;
}
function exe5() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let porcentagem = (nro1 * nro2) / 100;
  let sub = nro1 - porcentagem;

  alert("O desconto é :" + porcentagem);
  document.getElementById("sub").innerText = " O resultado é:" + sub;
}
function exe6() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let porcentagem = nro2 / 100;
  let sub = nro1 + 4 * porcentagem;

  alert(" O valor é :" + sub);
  document.getElementById("sub").innerText =
    " O valor é:" + sub + " A comissão é:" + 4 * porcentagem;
}
function exercicio7() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);

  let porcentagem = nro1 / 100;
  let sub = nro1 + 15 * porcentagem;
  let sub2 = nro1 - 20 * porcentagem;
  alert(" Engorda 15% :" + sub + " Emagrece 20% " + sub2);
  document.getElementById("sub").innerText =
    " Engorda 15% :" + sub + " Emagrece 20% " + sub2;
}
function exe8() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);

  let sub = nro1 * 1000;

  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText = " A ARÉA DO TRAPEZIO É :" + sub;
}
function exe9() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let nro3 = Number(document.getElementById("nro3").value);
  let sub = nro1 + (nro2 * nro3) / 2;

  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText = " A ARÉA DP TRAPEZIO É:" + sub;
}
function exe10() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = nro1 * nro2;

  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText = " A ARÉA DO LOSANGO É:" + sub;
}
function exe11() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = (nro1 * nro2) / 2;

  alert("o resultado é :" + sub);
  document.getElementById("sub").innerText = " A ARÉA DO LOSANGO É:" + sub;
}
function exe12() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = nro1;

  alert("o  é :" + sub);
  document.getElementById("sub").innerText = "O SALARIO É:" + sub;
}
