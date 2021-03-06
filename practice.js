//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // to refer to the context in which its being invoked: meaning if its poiting to an object, construtor, or function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // implicet: meaning to the left side its being invoked
      // explicit: by .call .apply or .bind
      // new keyworkd: when making object with a constructor, this refer to the object generated
      // default: when no implicit or explicit is definced it goes to the root -window

  // 3) What is the difference between call and apply?

      //Answer
      // About the same though apply accept array of arguments, while apply single argument

  // 4) What does .bind do?

      //Answer
      // it binds a function or give conxtext to it indefinetly. the .this based on its passed argument then create a new function to be used with that bound context


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'Marc',
      email: 'email',
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year, move) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = move;
  this.moveCar = function () {
    return this.move += 10;
  }
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(prius);
//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  //it will return undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  // it is bound to the window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
var userName = getMyUsername.call(myUser)
