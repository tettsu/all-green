// HTMLから取得したグローバル変数
var akagiPosi1;
var akagiPosi2;
var akagiPosi3;
var akagiPosi4;
var akagiPosi5;
var akagiNega1;
var akagiNega2;
var akagiNega3;
var akagiNega4;
var akagiNega5;
var boshuPosi1;
var boshuPosi2;
var boshuPosi3;
var boshuPosi4;
var boshuPosi5;
var boshuNega1;
var boshuNega2;
var boshuNega3;
var boshuNega4;
var boshuNega5;
var chabaPosi1;
var chabaPosi2;
var chabaPosi3;
var chabaPosi4;
var chabaPosi5;
var chabaNega1;
var chabaNega2;
var chabaNega3;
var chabaNega4;
var chabaNega5;
var ddPosi1;
var ddPosi2;
var ddPosi3;
var ddPosi4;
var ddPosi5;
var ddNega1;
var ddNega2;
var ddNega3;
var ddNega4;
var ddNega5;

// +-の集計値
var akagiPosiSum;
var akagiNegaSum;
var boshuPosiSum;
var boshuNegaSum;
var chabaPosiSum;
var chabaNegaSum;
var ddPosiSum;
var ddNegaSum;

// 30,50の集計値
var akagi30;
var boshu30;
var chaba30;
var dd30;
var akagi50;
var boshu50;
var chaba50;
var dd50;

function calcMain(){
  // HTMLから取得した値でグローバル変数を最新化
  updateScores();

  // 各メンバーの+-の計算とHTML書き換え
  calcAkagiPosi();
  calcAkagiNega();
  calcBoshuPosi();
  calcBoshuNega();
  calcChabaPosi();
  calcChabaNega();
  calcDdPosi();
  calcDdNega();

  // 30,50の計算と書き換え
  calcRate30();
  calcRate50();
}

function calcRate30(){
  var akagiResult = parseFloat(akagiPosiSum) - parseFloat(akagiNegaSum);
  akagiResult *= 30;
  var target = document.getElementById("30Akagi");
  target.innerText = akagiResult;

  var boshuResult = parseFloat(boshuPosiSum) - parseFloat(boshuNegaSum);
  boshuResult *= 30;
  var target = document.getElementById("30Boshu");
  target.innerText = boshuResult;

  var chabaResult = parseFloat(chabaPosiSum) - parseFloat(chabaNegaSum);
  chabaResult *= 30;
  var target = document.getElementById("30Chaba");
  target.innerText = chabaResult;

  var ddResult = parseFloat(ddPosiSum) - parseFloat(ddNegaSum);
  ddResult *= 30;
  var target = document.getElementById("30Dd");
  target.innerText = ddResult;
}

function calcRate50(){
  var akagiResult = parseFloat(akagiPosiSum) - parseFloat(akagiNegaSum);
  akagiResult *= 50;
  var target = document.getElementById("50Akagi");
  target.innerText = akagiResult;

  var boshuResult = parseFloat(boshuPosiSum) - parseFloat(boshuNegaSum);
  boshuResult *= 50;
  var target = document.getElementById("50Boshu");
  target.innerText = boshuResult;

  var chabaResult = parseFloat(chabaPosiSum) - parseFloat(chabaNegaSum);
  chabaResult *= 50;
  var target = document.getElementById("50Chaba");
  target.innerText = chabaResult;

  var ddResult = parseFloat(ddPosiSum) - parseFloat(ddNegaSum);
  ddResult *= 50;
  var target = document.getElementById("50Dd");
  target.innerText = ddResult;
}

function calcAkagiPosi(){
  akagiPosiSum = akagiPosi1 + akagiPosi2 + akagiPosi3 + akagiPosi4 + akagiPosi5;
  var target = document.getElementById("sumAkagi+");
  target.innerText = akagiPosiSum;
}

function calcAkagiNega(){
  akagiNegaSum = akagiNega1 + akagiNega2 + akagiNega3 + akagiNega4 + akagiNega5;
  var target = document.getElementById("sumAkagi-");
  target.innerText = akagiNegaSum;
}

function calcBoshuPosi(){
  boshuPosiSum = boshuPosi1 + boshuPosi2 + boshuPosi3 + boshuPosi4 + boshuPosi5;
  var target = document.getElementById("sumBoshu+");
  target.innerText = boshuPosiSum;
}

function calcBoshuNega(){
  boshuNegaSum = boshuNega1 + boshuNega2 + boshuNega3 + boshuNega4 + boshuNega5;
  var target = document.getElementById("sumBoshu-");
  target.innerText = boshuNegaSum;
}

function calcChabaPosi(){
  chabaPosiSum = chabaPosi1 + chabaPosi2 + chabaPosi3 + chabaPosi4 + chabaPosi5;
  var target = document.getElementById("sumChaba+");
  target.innerText = chabaPosiSum;
}

function calcChabaNega(){
  chabaNegaSum = chabaNega1 + chabaNega2 + chabaNega3 + chabaNega4 + chabaNega5;
  var target = document.getElementById("sumChaba-");
  target.innerText = chabaNegaSum;
}

function calcDdPosi(){
  ddPosiSum = ddPosi1 + ddPosi2 + ddPosi3 + ddPosi4 + ddPosi5;
  var target = document.getElementById("sumDd+");
  target.innerText = ddPosiSum;
}

function calcDdNega(){
  ddNegaSum = ddNega1 + ddNega2 + ddNega3 + ddNega4 + ddNega5;
  var target = document.getElementById("sumDd-");
  target.innerText = ddNegaSum;
}

function updateScores(){
  akagiPosi1 = parseFloat(document.getElementById("1Akagi+").value|0);
  akagiPosi2 = parseFloat(document.getElementById("2Akagi+").value|0);
  akagiPosi3 = parseFloat(document.getElementById("3Akagi+").value|0);
  akagiPosi4 = parseFloat(document.getElementById("4Akagi+").value|0);
  akagiPosi5 = parseFloat(document.getElementById("5Akagi+").value|0);
  akagiNega1 = parseFloat(document.getElementById("1Akagi-").value|0);
  akagiNega2 = parseFloat(document.getElementById("2Akagi-").value|0);
  akagiNega3 = parseFloat(document.getElementById("3Akagi-").value|0);
  akagiNega4 = parseFloat(document.getElementById("4Akagi-").value|0);
  akagiNega5 = parseFloat(document.getElementById("5Akagi-").value|0);
  boshuPosi1 = parseFloat(document.getElementById("1Boshu+").value|0);
  boshuPosi2 = parseFloat(document.getElementById("2Boshu+").value|0);
  boshuPosi3 = parseFloat(document.getElementById("3Boshu+").value|0);
  boshuPosi4 = parseFloat(document.getElementById("4Boshu+").value|0);
  boshuPosi5 = parseFloat(document.getElementById("5Boshu+").value|0);
  boshuNega1 = parseFloat(document.getElementById("1Boshu-").value|0);
  boshuNega2 = parseFloat(document.getElementById("2Boshu-").value|0);
  boshuNega3 = parseFloat(document.getElementById("3Boshu-").value|0);
  boshuNega4 = parseFloat(document.getElementById("4Boshu-").value|0);
  boshuNega5 = parseFloat(document.getElementById("5Boshu-").value|0);
  chabaPosi1 = parseFloat(document.getElementById("1Chaba+").value|0);
  chabaPosi2 = parseFloat(document.getElementById("2Chaba+").value|0);
  chabaPosi3 = parseFloat(document.getElementById("3Chaba+").value|0);
  chabaPosi4 = parseFloat(document.getElementById("4Chaba+").value|0);
  chabaPosi5 = parseFloat(document.getElementById("5Chaba+").value|0);
  chabaNega1 = parseFloat(document.getElementById("1Chaba-").value|0);
  chabaNega2 = parseFloat(document.getElementById("2Chaba-").value|0);
  chabaNega3 = parseFloat(document.getElementById("3Chaba-").value|0);
  chabaNega4 = parseFloat(document.getElementById("4Chaba-").value|0);
  chabaNega5 = parseFloat(document.getElementById("5Chaba-").value|0);
  ddPosi1 = parseFloat(document.getElementById("1Dd+").value|0);
  ddPosi2 = parseFloat(document.getElementById("2Dd+").value|0);
  ddPosi3 = parseFloat(document.getElementById("3Dd+").value|0);
  ddPosi4 = parseFloat(document.getElementById("4Dd+").value|0);
  ddPosi5 = parseFloat(document.getElementById("5Dd+").value|0);
  ddNega1 = parseFloat(document.getElementById("1Dd-").value|0);
  ddNega2 = parseFloat(document.getElementById("2Dd-").value|0);
  ddNega3 = parseFloat(document.getElementById("3Dd-").value|0);
  ddNega4 = parseFloat(document.getElementById("4Dd-").value|0);
  ddNega5 = parseFloat(document.getElementById("5Dd-").value|0);
}
