function testMessage(){
    alert("Welcome,Maekawa!");
  }

function calcMain(){
  var apTotal = calcAPosi();
  var anTotal = calcANega();
  var bpTotal = calcBPosi();
  var bnTotal = calcBNega();
  var cpTotal = calcCPosi();
  var cnTotal = calcCNega();
  var dpTotal = calcDPosi();
  var dnTotal = calcDNega();

  calcRate30(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal);
  calcRate50(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal);
}

function calcRate30(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal){
  var aResult = parseFloat(apTotal) - parseFloat(anTotal);
  aResult *= 30;
  var target = document.getElementById("a30Total");
  target.innerText = aResult;

  var bResult = parseFloat(bpTotal) - parseFloat(bnTotal);
  bResult *= 30;
  var target = document.getElementById("b30Total");
  target.innerText = bResult;

  var cResult = parseFloat(cpTotal) - parseFloat(cnTotal);
  cResult *= 30;
  var target = document.getElementById("c30Total");
  target.innerText = cResult;

  var dResult = parseFloat(dpTotal) - parseFloat(dnTotal);
  dResult *= 30;
  var target = document.getElementById("d30Total");
  target.innerText = dResult;
}

function calcRate50(apTotal,anTotal,bpTotal,bnTotal,cpTotal,cnTotal,dpTotal,dnTotal){
  var aResult = parseFloat(apTotal) - parseFloat(anTotal);
  aResult *= 50;
  var target = document.getElementById("a50Total");
  target.innerText = aResult;

  var bResult = parseFloat(bpTotal) - parseFloat(bnTotal);
  bResult *= 50;
  var target = document.getElementById("b50Total");
  target.innerText = bResult;

  var cResult = parseFloat(cpTotal) - parseFloat(cnTotal);
  cResult *= 50;
  var target = document.getElementById("c50Total");
  target.innerText = cResult;

  var dResult = parseFloat(dpTotal) - parseFloat(dnTotal);
  dResult *= 50;
  var target = document.getElementById("d50Total");
  target.innerText = dResult;
}

function calcAPosi(){
  var a1posi = parseFloat(document.getElementById("a1posi").value|0);
  var a2posi = parseFloat(document.getElementById("a2posi").value|0);
  var a3posi = parseFloat(document.getElementById("a3posi").value|0);
  var a4posi = parseFloat(document.getElementById("a4posi").value|0);
  var a5posi = parseFloat(document.getElementById("a5posi").value|0);
  var result = a1posi + a2posi + a3posi + a4posi + a5posi;

  var target = document.getElementById("apTotal");
  target.innerText = result;

  return result;
}

function calcANega(){
  var a1nega = parseFloat(document.getElementById("a1nega").value|0);
  var a2nega = parseFloat(document.getElementById("a2nega").value|0);
  var a3nega = parseFloat(document.getElementById("a3nega").value|0);
  var a4nega = parseFloat(document.getElementById("a4nega").value|0);
  var a5nega = parseFloat(document.getElementById("a5nega").value|0);
  var result = a1nega + a2nega + a3nega + a4nega + a5nega;

  var target = document.getElementById("anTotal");
  target.innerText = result;

  return result;
}

function calcBPosi(){
  var b1posi = parseFloat(document.getElementById("b1posi").value|0);
  var b2posi = parseFloat(document.getElementById("b2posi").value|0);
  var b3posi = parseFloat(document.getElementById("b3posi").value|0);
  var b4posi = parseFloat(document.getElementById("b4posi").value|0);
  var b5posi = parseFloat(document.getElementById("b5posi").value|0);
  var result = b1posi + b2posi + b3posi + b4posi + b5posi;

  var target = document.getElementById("bpTotal");
  target.innerText = result;

  return result;
}

function calcBNega(){
  var b1nega = parseFloat(document.getElementById("b1nega").value|0);
  var b2nega = parseFloat(document.getElementById("b2nega").value|0);
  var b3nega = parseFloat(document.getElementById("b3nega").value|0);
  var b4nega = parseFloat(document.getElementById("b4nega").value|0);
  var b5nega = parseFloat(document.getElementById("b5nega").value|0);
  var result = b1nega + b2nega + b3nega + b4nega + b5nega;

  var target = document.getElementById("bnTotal");
  target.innerText = result;

  return result;
}

function calcCPosi(){
  var c1posi = parseFloat(document.getElementById("c1posi").value|0);
  var c2posi = parseFloat(document.getElementById("c2posi").value|0);
  var c3posi = parseFloat(document.getElementById("c3posi").value|0);
  var c4posi = parseFloat(document.getElementById("c4posi").value|0);
  var c5posi = parseFloat(document.getElementById("c5posi").value|0);
  var result = c1posi + c2posi + c3posi + c4posi + c5posi;

  var target = document.getElementById("cpTotal");
  target.innerText = result;

  return result;
}

function calcCNega(){
  var c1nega = parseFloat(document.getElementById("c1nega").value|0);
  var c2nega = parseFloat(document.getElementById("c2nega").value|0);
  var c3nega = parseFloat(document.getElementById("c3nega").value|0);
  var c4nega = parseFloat(document.getElementById("c4nega").value|0);
  var c5nega = parseFloat(document.getElementById("c5nega").value|0);
  var result = c1nega + c2nega + c3nega + c4nega + c5nega;

  var target = document.getElementById("cnTotal");
  target.innerText = result;

  return result;
}

function calcDPosi(){
  var d1posi = parseFloat(document.getElementById("d1posi").value|0);
  var d2posi = parseFloat(document.getElementById("d2posi").value|0);
  var d3posi = parseFloat(document.getElementById("d3posi").value|0);
  var d4posi = parseFloat(document.getElementById("d4posi").value|0);
  var d5posi = parseFloat(document.getElementById("d5posi").value|0);
  var result = d1posi + d2posi + d3posi + d4posi + d5posi;

  var target = document.getElementById("dpTotal");
  target.innerText = result;

  return result;}

function calcDNega(){
  var d1nega = parseFloat(document.getElementById("d1nega").value|0);
  var d2nega = parseFloat(document.getElementById("d2nega").value|0);
  var d3nega = parseFloat(document.getElementById("d3nega").value|0);
  var d4nega = parseFloat(document.getElementById("d4nega").value|0);
  var d5nega = parseFloat(document.getElementById("d5nega").value|0);
  var result = d1nega + d2nega + d3nega + d4nega + d5nega;

  var target = document.getElementById("dnTotal");
  target.innerText = result;

  return result;
}