var response = prompt('Would you like to see photos of Mikaela?');
var message;

if (response === 'yes') {
    message = 'Click the link at the bottom of the page to see my photos!';
}  else if (response === 'no') {
        message = 'Mmm, not sure if you are at the right website...'
}  else {
        message = 'fine, whateve!';
    }
    
    document.write('<h3>' + message + '</h3>');
 