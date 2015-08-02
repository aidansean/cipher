function start(){
  Get('encrypt_rot13').onclick =   do_rot13 ;
  Get('encrypt_holly').onclick =   do_holly ;
  Get('decrypt_holly').onclick = undo_holly ;
}
function do_rot13(){
  var text_in = Get('input_rot13').value.toUpperCase() ;
  var text_out = '' ;
  for(var i=0 ; i<text_in.length ; i++){
    text_out = text_out + String.fromCharCode(((text_in[i].charCodeAt()-52)%26)+65) ;
  }
  Get('output_rot13').value = text_out ;
}
function do_holly(){
  var text_in = Get('input_holly').value ;
  var text_out = '' ;
  var charset = Get('select_holly_charset').value ;
  var d = parseInt(Get('input_holly_d').value) ; // Initial displacement
  var s = parseInt(Get('input_holly_s').value) ; // When to shift back
  var use_leadingWord = (charset=='ASCII' && Get('checkbox_holly_leadingWord').value) ;
  if(use_leadingWord) s = text_in.split(' ').length ;
  
  var j = 0 ;
  for(var i=0 ; i<text_in.length ; i++){
    j++ ;
    if(j>s) j=1 ;
    if(charset=='AZ'){
      if(text_in[i]==' '){
        text_out = text_out + ' ' ;
      }
      else{
        text_out = text_out + String.fromCharCode(((text_in[i].charCodeAt()+d+j-65)%26+65) ) ;
      }
    }
    else{
      if(use_leadingWord){
        if(text_in[i]==' '){
          text_out = text_out + ' ' ;
        }
        else{
          text_out = text_out + String.fromCharCode(((text_in[i].charCodeAt()+d+j-33)%95+33) ) ;
        }
      }
      else{
        text_out = text_out + String.fromCharCode(((text_in[i].charCodeAt()+d+j-32)%96+32) ) ;
      }
    }
  }
  Get('output_holly').value = text_out ;
}
function undo_holly(){
  var text_in = Get('output_holly').value ;
  var text_out = '' ;
  var charset = Get('select_holly_charset').value ;
  var d = parseInt(Get('input_holly_d').value) ; // Initial displacement
  var s = parseInt(Get('input_holly_s').value) ; // When to shift back
  var use_leadingWord = (charset=='ASCII' && Get('checkbox_holly_leadingWord').value) ;
  if(use_leadingWord) s = text_in.split(' ').length ;
  var j = 0 ;
  for(var i=0 ; i<text_in.length ; i++){
    j++ ;
    if(j>s) j=1 ;
    if(charset=='AZ'){
      if(text_in[i]==' '){
        text_out = text_out + ' ' ;
      }
      else{
        text_out = text_out + String.fromCharCode(((text_in[i].charCodeAt()-d-j-65)%26+65) ) ;
      }
    }
    else{
      if(use_leadingWord){
        if(text_in[i]==' '){
          text_out = text_out + ' ' ;
        }
        else{
          text_out = text_out + String.fromCharCode(((text_in[i].charCodeAt()-d-j-32)%95+32) ) ;
        }
      }
      else{
        text_out = text_out + String.fromCharCode(((text_in[i].charCodeAt()-d-j-32)%96+32) ) ;
      }
    }
  }
  Get('input_holly').value = text_out ;
}


//String.charCodeAt() 
//string.fromCharCode()

function Get(id){ return document.getElementById(id) ; }
function Create(type){ return document.createElement(type) ; }