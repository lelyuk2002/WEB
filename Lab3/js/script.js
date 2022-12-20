var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
var result = 0;

for(var i = 0; i < names.length; i++){
  var name = names[i];
  if(name.charAt(0) == 'J' || name.charAt(0) == 'j'){
    sayGoodBye(names[i]);
  }
  else{
    sayHello(names[i]);
  }
}

console.log('----------------- \n');

Anotation();

for(var i = 0; i < names.length; i++){
  var sum = 0;
  var name = names[i];
  for(var j = 0; j < name.length; j++){
    sum += name[j].charCodeAt();
  }
  
  if(sum > 400){
    Higher(sum);
  }
  else{
    Lower(sum);
  }

}