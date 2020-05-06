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
        while(userName == ''){
            userName = prompt('PlEASE enter your name.')
        }
    return document.write('<h3>Hello ' + userName + '!</h3>');

}
function howMany() {
    var count = prompt('How many pictures of Mikaela do you want to order?');
    while (count === '' || isNaN(count)) {
        count = prompt('Please enter a number.  How many pictures do you want to order?');
    }
    return Number(count);
}

function getItem() {
    var order = '';
    var item;

    while (order !== 'color' && order !== 'black & white') {
        order = prompt('How would you like to receive a picture of Mikaela? In "color" or "black & white"?');
    }

    if (order === 'color') {
        item = '<img style="border:none;" src="images/b&wpic.jpg">';
    } else if (order === 'black & white') {
        item = '<img style="border:none;" src="images/colorpic.jpg">';
    }
    return item;
}

function showOrder() {
    var item = getItem();
    var total = howMany();
    var result = '';

    for (var i = 0; i < total; i++) {
        var realCount = i + 1;
        result = result + '<p style="width="150"; display: inline-block; border: 1px solid blue;">item #' + realCount + ' ' + item + '</p>'
    }
    return document.write(result);
}
/* function askPhoto() {
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