function welcome(){
    alert("Welcome,Maekawa!");
  }

function calculate(){
  calcTotal();
}

function calcTotal(){
  calcAPosi();
  calcANega();
  calcBPosi();
  calcBNega();
  calcCPosi();
  calcCNega();
  calcDPosi();
  calcDNega();
}

function calcAPosi(){
  var a1posi = parseFloat(document.getElementById("a1posi").value|0);
  var a2posi = parseFloat(document.getElementById("a2posi").value|0);
  var a3posi = parseFloat(document.getElementById("a3posi").value|0);
  var a4posi = parseFloat(document.getElementById("a4posi").value|0);
  var a5posi = parseFloat(document.getElementById("a5posi").value|0);

  var apTotal = document.getElementById("apTotal");
  apTotal.innerText = a1posi + a2posi + a3posi + a4posi + a5posi;
}

function calcANega(){
  var a1nega = parseFloat(document.getElementById("a1nega").value|0);
  var a2nega = parseFloat(document.getElementById("a2nega").value|0);
  var a3nega = parseFloat(document.getElementById("a3nega").value|0);
  var a4nega = parseFloat(document.getElementById("a4nega").value|0);
  var a5nega = parseFloat(document.getElementById("a5nega").value|0);

  var anTotal = document.getElementById("anTotal");
  anTotal.innerText = a1nega + a2nega + a3nega + a4nega + a5nega;
}

function calcBPosi(){
  var b1posi = parseFloat(document.getElementById("b1posi").value|0);
  var b2posi = parseFloat(document.getElementById("b2posi").value|0);
  var b3posi = parseFloat(document.getElementById("b3posi").value|0);
  var b4posi = parseFloat(document.getElementById("b4posi").value|0);
  var b5posi = parseFloat(document.getElementById("b5posi").value|0);

  var bpTotal = document.getElementById("bpTotal");
  bpTotal.innerText = b1posi + b2posi + b3posi + b4posi + b5posi;
}

function calcBNega(){
  var b1nega = parseFloat(document.getElementById("b1nega").value|0);
  var b2nega = parseFloat(document.getElementById("b2nega").value|0);
  var b3nega = parseFloat(document.getElementById("b3nega").value|0);
  var b4nega = parseFloat(document.getElementById("b4nega").value|0);
  var b5nega = parseFloat(document.getElementById("b5nega").value|0);

  var bnTotal = document.getElementById("bnTotal");
  bnTotal.innerText = b1nega + b2nega + b3nega + b4nega + b5nega;
}

function calcCPosi(){
  var c1posi = parseFloat(document.getElementById("c1posi").value|0);
  var c2posi = parseFloat(document.getElementById("c2posi").value|0);
  var c3posi = parseFloat(document.getElementById("c3posi").value|0);
  var c4posi = parseFloat(document.getElementById("c4posi").value|0);
  var c5posi = parseFloat(document.getElementById("c5posi").value|0);

  var cpTotal = document.getElementById("cpTotal");
  cpTotal.innerText = c1posi + c2posi + c3posi + c4posi + c5posi;
}

function calcCNega(){
  var c1nega = parseFloat(document.getElementById("c1nega").value|0);
  var c2nega = parseFloat(document.getElementById("c2nega").value|0);
  var c3nega = parseFloat(document.getElementById("c3nega").value|0);
  var c4nega = parseFloat(document.getElementById("c4nega").value|0);
  var c5nega = parseFloat(document.getElementById("c5nega").value|0);

  var cnTotal = document.getElementById("cnTotal");
  cnTotal.innerText = c1nega + c2nega + c3nega + c4nega + c5nega;
}

function calcDPosi(){
  var d1posi = parseFloat(document.getElementById("d1posi").value|0);
  var d2posi = parseFloat(document.getElementById("d2posi").value|0);
  var d3posi = parseFloat(document.getElementById("d3posi").value|0);
  var d4posi = parseFloat(document.getElementById("d4posi").value|0);
  var d5posi = parseFloat(document.getElementById("d5posi").value|0);

  var dpTotal = document.getElementById("dpTotal");
  dpTotal.innerText = d1posi + d2posi + d3posi + d4posi + d5posi;
}

function calcDNega(){
  var d1nega = parseFloat(document.getElementById("d1nega").value|0);
  var d2nega = parseFloat(document.getElementById("d2nega").value|0);
  var d3nega = parseFloat(document.getElementById("d3nega").value|0);
  var d4nega = parseFloat(document.getElementById("d4nega").value|0);
  var d5nega = parseFloat(document.getElementById("d5nega").value|0);

  var dnTotal = document.getElementById("dnTotal");
  dnTotal.innerText = d1nega + d2nega + d3nega + d4nega + d5nega;
}