

$(".letter").on('click',function(){
    var number = $(".number-input").val() + $(this).val();
    $(".number-input").val(number);
    if(number=="3961"){
      if(document.title=="Teclado ordenado corto"){
        toOrderedLong();
      }else if(document.title=="Teclado desordenado corto"){
        toRandomLong();
      }else if(document.title=="Teclado circular corto"){
        toRadialLong();
      }else if(document.title=="Teclado circular desordenado corto"){
        toRadialRandomLong();
      }
    }
    if(number=="29518370"){
      if(document.title=="Teclado ordenado largo"){
        toRandomShort();
      }else if(document.title=="Teclado desordenado largo"){
        toRadialShort();
      }else if(document.title=="Teclado circular largo"){
        toRadialRandomShort();
      }else if(document.title=="Teclado circular desordenado largo"){
        toEnd();
      }
    }
  });

$(".delete").on('click',function(){
  var number = $(".number-input").val().slice(0,-1);
  $(".number-input").val("");
  $(".number-input").val(number);
});

function randomNumbers() {
  console.log("hello")
  array = [1,2,3,4,5,6,7,8,9,0]
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    $("#1").val(array[0]);
    $("#2").val(array[1]);
    $("#3").val(array[2]);
    $("#4").val(array[3]);
    $("#5").val(array[4]);
    $("#6").val(array[5]);
    $("#7").val(array[6]);
    $("#8").val(array[7]);
    $("#9").val(array[8]);
    $("#0").val(array[9]);
    
    $("#1").html(array[0]);
    $("#2").html(array[1]);
    $("#3").html(array[2]);
    $("#4").html(array[3]);
    $("#5").html(array[4]);
    $("#6").html(array[5]);
    $("#7").html(array[6]);
    $("#8").html(array[7]);
    $("#9").html(array[8]);
    $("#0").html(array[9]);

}
randomNumbers();
