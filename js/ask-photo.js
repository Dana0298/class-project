var response = prompt('Would you like to see Mikaela smiling or sleeping?');
var item;

if (response === 'smiling') {
    item = '<img src ="images/blueshirt.jpg">';
}  else if (response === 'sleeping') {
        item = '<img src ="images/babysleeping.jpg">';
}  else {
        item = 'fine, whateve!';
}
  
document.write('<p>' + item + '</p>');
/*document.write('<h3>' + item + '</h3>');