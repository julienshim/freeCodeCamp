var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let split = firstAndLast.split(" ");
  let firstName = split[0];
  let lastName = split[1];
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last){
    lastName = last;
  }
  this.setFullName = function(firstAndLast) {
    let split = firstAndLast.split(" ");
    firstName = split[0];
    lastName = split[1];
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();