function calcMain(){
  var akagiPosi1 = parseFloat(document.getElementById("1Akagi+").value|0);
  var akagiPosi2 = parseFloat(document.getElementById("2Akagi+").value|0);
  var akagiPosi3 = parseFloat(document.getElementById("3Akagi+").value|0);
  var akagiPosi4 = parseFloat(document.getElementById("4Akagi+").value|0);
  var akagiPosi5 = parseFloat(document.getElementById("5Akagi+").value|0);
  var akagiNega1 = parseFloat(document.getElementById("1Akagi-").value|0);
  var akagiNega2 = parseFloat(document.getElementById("2Akagi-").value|0);
  var akagiNega3 = parseFloat(document.getElementById("3Akagi-").value|0);
  var akagiNega4 = parseFloat(document.getElementById("4Akagi-").value|0);
  var akagiNega5 = parseFloat(document.getElementById("5Akagi-").value|0);
  var boshuPosi1 = parseFloat(document.getElementById("1Boshu+").value|0);
  var boshuPosi2 = parseFloat(document.getElementById("2Boshu+").value|0);
  var boshuPosi3 = parseFloat(document.getElementById("3Boshu+").value|0);
  var boshuPosi4 = parseFloat(document.getElementById("4Boshu+").value|0);
  var boshuPosi5 = parseFloat(document.getElementById("5Boshu+").value|0);
  var boshuNega1 = parseFloat(document.getElementById("1Boshu-").value|0);
  var boshuNega2 = parseFloat(document.getElementById("2Boshu-").value|0);
  var boshuNega3 = parseFloat(document.getElementById("3Boshu-").value|0);
  var boshuNega4 = parseFloat(document.getElementById("4Boshu-").value|0);
  var boshuNega5 = parseFloat(document.getElementById("5Boshu-").value|0);
  var chabaPosi1 = parseFloat(document.getElementById("1Chaba+").value|0);
  var chabaPosi2 = parseFloat(document.getElementById("2Chaba+").value|0);
  var chabaPosi3 = parseFloat(document.getElementById("3Chaba+").value|0);
  var chabaPosi4 = parseFloat(document.getElementById("4Chaba+").value|0);
  var chabaPosi5 = parseFloat(document.getElementById("5Chaba+").value|0);
  var chabaNega1 = parseFloat(document.getElementById("1Chaba-").value|0);
  var chabaNega2 = parseFloat(document.getElementById("2Chaba-").value|0);
  var chabaNega3 = parseFloat(document.getElementById("3Chaba-").value|0);
  var chabaNega4 = parseFloat(document.getElementById("4Chaba-").value|0);
  var chabaNega5 = parseFloat(document.getElementById("5Chaba-").value|0);
  var ddPosi1 = parseFloat(document.getElementById("1Dd+").value|0);
  var ddPosi2 = parseFloat(document.getElementById("2Dd+").value|0);
  var ddPosi3 = parseFloat(document.getElementById("3Dd+").value|0);
  var ddPosi4 = parseFloat(document.getElementById("4Dd+").value|0);
  var ddPosi5 = parseFloat(document.getElementById("5Dd+").value|0);
  var ddNega1 = parseFloat(document.getElementById("1Dd-").value|0);
  var ddNega2 = parseFloat(document.getElementById("2Dd-").value|0);
  var ddNega3 = parseFloat(document.getElementById("3Dd-").value|0);
  var ddNega4 = parseFloat(document.getElementById("4Dd-").value|0);
  var ddNega5 = parseFloat(document.getElementById("5Dd-").value|0);


  var apTotal = calcAkagiPosi();
  var anTotal = calcAkagiNega();
  var bpTotal = calcBoshuPosi();
  var bnTotal = calcBoshuNega();
  var cpTotal = calcChabaPosi();
  var cnTotal = calcChabaNega();
  var dpTotal = calcDdPosi();
  var dnTotal = calcDdNega();

  calcRate30(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal);
  calcRate50(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal);
}


function calcRate30(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal){
  var aResult = parseFloat(apTotal) - parseFloat(anTotal);
  aResult *= 30;
  var target = document.getElementById("30Akagi");
  target.innerText = aResult;

  var bResult = parseFloat(bpTotal) - parseFloat(bnTotal);
  bResult *= 30;
  var target = document.getElementById("30Boshu");
  target.innerText = bResult;

  var cResult = parseFloat(cpTotal) - parseFloat(cnTotal);
  cResult *= 30;
  var target = document.getElementById("30Chaba");
  target.innerText = cResult;

  var dResult = parseFloat(dpTotal) - parseFloat(dnTotal);
  dResult *= 30;
  var target = document.getElementById("30Dd");
  target.innerText = dResult;
}

function calcRate50(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal){
  var aResult = parseFloat(apTotal) - parseFloat(anTotal);
  aResult *= 50;
  var target = document.getElementById("50Akagi");
  target.innerText = aResult;

  var bResult = parseFloat(bpTotal) - parseFloat(bnTotal);
  bResult *= 50;
  var target = document.getElementById("50Boshu");
  target.innerText = bResult;

  var cResult = parseFloat(cpTotal) - parseFloat(cnTotal);
  cResult *= 50;
  var target = document.getElementById("50Chaba");
  target.innerText = cResult;

  var dResult = parseFloat(dpTotal) - parseFloat(dnTotal);
  dResult *= 50;
  var target = document.getElementById("50Dd");
  target.innerText = dResult;
}

function calcAkagiPosi(){
  var a1posi = parseFloat(document.getElementById("1Akagi+").value|0);
  var a2posi = parseFloat(document.getElementById("2Akagi+").value|0);
  var a3posi = parseFloat(document.getElementById("3Akagi+").value|0);
  var a4posi = parseFloat(document.getElementById("4Akagi+").value|0);
  var a5posi = parseFloat(document.getElementById("5Akagi+").value|0);
  var result = a1posi + a2posi + a3posi + a4posi + a5posi;

  var target = document.getElementById("sumAkagi+");
  target.innerText = result;

  return result;
}

function calcAkagiNega(){
  var a1nega = parseFloat(document.getElementById("1Akagi-").value|0);
  var a2nega = parseFloat(document.getElementById("2Akagi-").value|0);
  var a3nega = parseFloat(document.getElementById("3Akagi-").value|0);
  var a4nega = parseFloat(document.getElementById("4Akagi-").value|0);
  var a5nega = parseFloat(document.getElementById("5Akagi-").value|0);
  var result = a1nega + a2nega + a3nega + a4nega + a5nega;

  var target = document.getElementById("sumAkagi-");
  target.innerText = result;

  return result;
}

function calcBoshuPosi(){
  var b1posi = parseFloat(document.getElementById("1Boshu+").value|0);
  var b2posi = parseFloat(document.getElementById("2Boshu+").value|0);
  var b3posi = parseFloat(document.getElementById("3Boshu+").value|0);
  var b4posi = parseFloat(document.getElementById("4Boshu+").value|0);
  var b5posi = parseFloat(document.getElementById("5Boshu+").value|0);
  var result = b1posi + b2posi + b3posi + b4posi + b5posi;

  var target = document.getElementById("sumBoshu+");
  target.innerText = result;

  return result;
}

function calcBoshuNega(){
  var b1nega = parseFloat(document.getElementById("1Boshu-").value|0);
  var b2nega = parseFloat(document.getElementById("2Boshu-").value|0);
  var b3nega = parseFloat(document.getElementById("3Boshu-").value|0);
  var b4nega = parseFloat(document.getElementById("4Boshu-").value|0);
  var b5nega = parseFloat(document.getElementById("5Boshu-").value|0);
  var result = b1nega + b2nega + b3nega + b4nega + b5nega;

  var target = document.getElementById("sumBoshu-");
  target.innerText = result;

  return result;
}

function calcChabaPosi(){
  var c1posi = parseFloat(document.getElementById("1Chaba+").value|0);
  var c2posi = parseFloat(document.getElementById("2Chaba+").value|0);
  var c3posi = parseFloat(document.getElementById("3Chaba+").value|0);
  var c4posi = parseFloat(document.getElementById("4Chaba+").value|0);
  var c5posi = parseFloat(document.getElementById("5Chaba+").value|0);
  var result = c1posi + c2posi + c3posi + c4posi + c5posi;

  var target = document.getElementById("sumChaba+");
  target.innerText = result;

  return result;
}

function calcChabaNega(){
  var c1nega = parseFloat(document.getElementById("1Chaba-").value|0);
  var c2nega = parseFloat(document.getElementById("2Chaba-").value|0);
  var c3nega = parseFloat(document.getElementById("3Chaba-").value|0);
  var c4nega = parseFloat(document.getElementById("4Chaba-").value|0);
  var c5nega = parseFloat(document.getElementById("5Chaba-").value|0);
  var result = c1nega + c2nega + c3nega + c4nega + c5nega;

  var target = document.getElementById("sumChaba-");
  target.innerText = result;

  return result;
}

function calcDdPosi(){
  var d1posi = parseFloat(document.getElementById("1Dd+").value|0);
  var d2posi = parseFloat(document.getElementById("2Dd+").value|0);
  var d3posi = parseFloat(document.getElementById("3Dd+").value|0);
  var d4posi = parseFloat(document.getElementById("4Dd+").value|0);
  var d5posi = parseFloat(document.getElementById("5Dd+").value|0);
  var result = d1posi + d2posi + d3posi + d4posi + d5posi;

  var target = document.getElementById("sumDd+");
  target.innerText = result;

  return result;}

  function calcDdNega(){
  var d1nega = parseFloat(document.getElementById("1Dd-").value|0);
  var d2nega = parseFloat(document.getElementById("2Dd-").value|0);
  var d3nega = parseFloat(document.getElementById("3Dd-").value|0);
  var d4nega = parseFloat(document.getElementById("4Dd-").value|0);
  var d5nega = parseFloat(document.getElementById("5Dd-").value|0);
  var result = d1nega + d2nega + d3nega + d4nega + d5nega;

  var target = document.getElementById("sumDd-");
  target.innerText = result;

  return result;
}

