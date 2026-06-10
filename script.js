const shareBtn =
document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

if(navigator.share){

await navigator.share({
title:"Yakin Traders",
text:"Visit our digital business card",
url:window.location.href
});

}else{

alert("Sharing not supported");

}

});