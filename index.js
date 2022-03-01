function up(){
    let inc=document.getElementById('number');
     let count=parseInt(inc.innerHTML);
     count++;
     inc.innerHTML=count;
      inc.style.color="blue"
 }

 function down(){
   let dec=document.getElementById('number');
    let count=parseInt(dec.innerHTML);
    count--;
    dec.innerHTML=count;
    dec.style.color="red"
}

function reset(){
  let reset=document.getElementById('number').innerHTML=0;

}
 