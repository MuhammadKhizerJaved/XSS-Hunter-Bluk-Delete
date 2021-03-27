for(var x=0;x<25;x++){
setTimeout(function() {
for(var j=0;j<5;j++){
document.getElementsByClassName("delete_injection_button btn btn-danger btn-block")[j].click()}},x*5000);
setTimeout(function() {document.getElementsByClassName("page_number")[0].click();},x*5000);}
