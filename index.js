
function takeANumber(current,newName){
  current.push(newName);
  return `Welcome, ${newName}. You are number ${current.length} in line.`
}

function nowServing(current){
  if(current.length > 0){
    var linePlace = current[0]
    current.pop();
    return `Currently serving ${linePlace}.` 
    
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(current){
 if(current.length > 0){
  for(var i = 1; i < current.length; i++ ){
    for(var z = 0; i < current.length; i++){
      current[i] =    " " + current[i];
    }
  current[i] =  i +1 + ". " + current[i];
    
}   
return `The line is currently: ${current}`;
   
 }
else{
  return "The line is currently empty."
}
}
