$(document).ready(function(){
 var i=1;
$("#add_row").click(function(){
 $('#addr'+i).html("<td><input name='Software type"+i+"' type='text' placeholder='Software type' class='form-control input-md'  /> </td><td><input  name='Version"+i+"' type='text' placeholder='Version'  class='form-control input-md'></td>");

 $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
 i++;
});
$("#delete_row").click(function(){
  if(i>1){
$("#addr"+(i-1)).html('');
i--;
}
});

});
