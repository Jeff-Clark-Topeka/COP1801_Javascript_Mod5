let myDog = {
    name: "Courage",
    breed: "Beagle",
    show: "Courage the Cowardly Dog",
    notes: "I am a anthropomorphic dog who lives with a married couple of elderly farmers in the 'Middle of Nowhere'",
    mySound: "I am probably trying to tell you about something scary I saw",
};

let messageToUser = `Hello, my name is ${myDog.name} and I am from the show ${myDog.show}. My character is a ${myDog.breed} and ${myDog.notes}. When I bark, ${myDog.mySound}. <br> <br>` 

document.write(messageToUser);

function Dog(name, breed, show, notes, mySound) {
    this.name = name;
    this.breed = breed;
    this.show = show;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = true;
    this.myGreeting = function() {
        if (this.canTalk) {
            return `Hello, my name is ${this.name} and I am from the show ${this.show}. My character is a ${this.breed} and ${this.notes}. ${this.mySound}.`
        } else {
            return `Woof, my name is ${this.name} and I cannot talk but I am from the show ${this.show}. My character is a ${this.breed} and ${this.notes}. When I bark, ${this.mySound}.`
        }
    };
 }

 let myDogConst = new Dog(
    "Courage",
    "Beagle",
    "Courage The Cowardly Dog",
    "I am a anthropomorphic dog who lives with a married couple of elderly farmers in the 'Middle of Nowhere'",
    "Based on my name, you might think I am a courageous dog, but I am in fact a very cowardly dog who just so happens to be brave sometimes",
);

document.write(myDogConst.myGreeting());