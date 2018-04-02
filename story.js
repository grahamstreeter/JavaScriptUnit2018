var inventory = [];

var grade = 0;
var work = "N/A";

document.getElementById('intro').style.display="block";

document.getElementById("s1").style.display="block";
document.getElementById("s1c1").addEventListener("click", function(){
  document.getElementById("s2p1").style.display="block";
  document.getElementById('s1c2').style.display="none";
  inventory.push("Good habit");
  document.getElementById("inv_box").innerHTML=inventory;
});

document.getElementById("s2p1c1").addEventListener("click", function(){
  document.getElementById("s3a1").style.display="block";
  document.getElementById('s2p1c2').style.display="none";
  inventory.push(" Really good grade");
  document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById("ImgOne").style.display="block";
});

document.getElementById("s2p1c2").addEventListener("click", function(){
  document.getElementById("s3a2").style.display="block";
  document.getElementById("s2p1c1").style.display="none";
  inventory.push(" Good grade");
  document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById("ImgTwo").style.display="block";
});

document.getElementById("s1c2").addEventListener("click", function(){
  document.getElementById("s2p2").style.display="block";
  document.getElementById('s1c1').style.display="none";
  inventory.push("Bad habit");
  document.getElementById("inv_box").innerHTML=inventory;
});

document.getElementById("s2p2c1").addEventListener("click", function(){
  document.getElementById("s3a3").style.display="block";
  document.getElementById("s2p2c2").style.display="none";
  document.push(" Bad grade");
  document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById("ImgThree").style.display="block";
});

document.getElementById("s2p2c2").addEventListener("click", function(){
  document.getElementById("s3a4").style.display="block";
  document.getElementById("s2p2c1").style.display="none";
  inventory.push(" Ok grade");
  document.getElementById("inv_box").innerHTML=inventory;
  document.getElementById("ImgFour").style.display="block";
});

if (inventory.some()=BadGrade) {
  document.getElementById("BadGrade").style.display="block";
}
