// HTMLから取得したグローバル変数
var akagiPosi1,akagiPosi2,akagiPosi3,akagiPosi4,akagiPosi5;
var akagiNega1,akagiNega2,akagiNega3,akagiNega4,akagiNega5;
var boshuPosi1,boshuPosi2,boshuPosi3,boshuPosi4,boshuPosi5;
var boshuNega1,boshuNega2,boshuNega3,boshuNega4,boshuNega5;
var chabaPosi1,chabaPosi2,chabaPosi3,chabaPosi4,chabaPosi5;
var chabaNega1,chabaNega2,chabaNega3,chabaNega4,chabaNega5;
var ddPosi1,ddPosi2,ddPosi3,ddPosi4,ddPosi5;
var ddNega1,ddNega2,ddNega3,ddNega4,ddNega5;

// +-の集計値
var akagiPosiSum,akagiNegaSum;
var boshuPosiSum,boshuNegaSum;
var chabaPosiSum,chabaNegaSum;
var ddPosiSum,ddNegaSum;

// 30,50の集計値
var akagi30,akagi50;
var boshu30,boshu50;
var chaba30,chaba50;
var dd30,dd50;

function calcMain(){
  // HTMLから取得した値でグローバル変数を最新化
  getScores();

  // 各メンバーの+-の計算とtotalの書き換え
  calcAkagiPosi();
  calcAkagiNega();
  calcBoshuPosi();
  calcBoshuNega();
  calcChabaPosi();
  calcChabaNega();
  calcDdPosi();
  calcDdNega();

  // 各メンバーの30,50の計算と書き換え
  calcRate30();
  calcRate50();
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

function calcRate30(){
  akagi30 = (parseFloat(akagiPosiSum) - parseFloat(akagiNegaSum)) * 30;
  var target = document.getElementById("30Akagi");
  target.innerText = akagi30;

  boshu30 = (parseFloat(boshuPosiSum) - parseFloat(boshuNegaSum)) * 30;
  var target = document.getElementById("30Boshu");
  target.innerText = boshu30;

  chaba30 = (parseFloat(chabaPosiSum) - parseFloat(chabaNegaSum)) * 30;
  var target = document.getElementById("30Chaba");
  target.innerText = chaba30;

  dd30 = (parseFloat(ddPosiSum) - parseFloat(ddNegaSum)) * 30;
  var target = document.getElementById("30Dd");
  target.innerText = dd30;
}

function calcRate50(){
  akagi50 = (parseFloat(akagiPosiSum) - parseFloat(akagiNegaSum)) * 50;
  var target = document.getElementById("50Akagi");
  target.innerText = akagi50;

  boshu50 = (parseFloat(boshuPosiSum) - parseFloat(boshuNegaSum)) * 50;
  var target = document.getElementById("50Boshu");
  target.innerText = boshu50;

  chaba50 = (parseFloat(chabaPosiSum) - parseFloat(chabaNegaSum)) * 50;
  var target = document.getElementById("50Chaba");
  target.innerText = chaba50;

  dd50 = (parseFloat(ddPosiSum) - parseFloat(ddNegaSum)) * 50;
  var target = document.getElementById("50Dd");
  target.innerText = dd50;
}

function getScores(){
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
