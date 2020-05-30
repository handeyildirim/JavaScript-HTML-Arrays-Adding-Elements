var fruits = ["Banana", "Orange", "Apple", "Mango"] ;

function loadFruits(){
  document.getElementById("fruits").innerHTML = fruits;
}

function myFunction(){
  //ask to user's fav fruit
  var fruit = prompt("What is your favorite fruit?");
  //to add new fruit we have to write array name(furits[]) firstly, then the index(fruits.length). 
  //Here, fruits.length is equal to 4. So, the next fruit will be added to the 4th index.
  //We can add more fruits with this method
  fruits[fruits.length] = fruit;
  document.getElementById("fruits").innerHTML = fruits;
}
