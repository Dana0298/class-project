function offerGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}

function askName() {
    var userName = prompt('What is your name?');

return document.write('<h3>Hello ' + userName + '!</h3>');

}

function askPhoto() {
    var response = prompt('Would you like to see Mikaela smiling or sleeping?');
var item;

if (response === 'smiling') {
    item = '<img src ="images/blueshirt.jpg">';
} else if (response === 'sleeping') {
    item = '<img src ="images/babysleeping.jpg">';
} else {
    item = 'fine, whateve!';
}

return document.write('<p>' + item + '</p>');
}











////////////////////////////////////////////////////////////////////////
 /*Leaving this here for class6 reference.
function logger() {
    console.log('hello world');
}

logger();

function loggerWithName(name) {
    console.log('Hello ' + name + '!');
}

function loggerWithReturnName(name) {
    return ('Hello ' + name + '!');
}

//build a cake

function buildCake(cake, filling, frosting) {
    //I want a white cake with lemon filling and lavender frosting
    console.log('I want a ' + cake + ' cake with ' + filling + ' filling and ' + frosting + ' frosting');
}

var sayHello = function (name) {
    return 'Hello ' + name + '!'
}

var helloCookie = function (name) {
    console.log('Say Hello Cookie');
    var message = sayHello(name);
    return message;
}
*/