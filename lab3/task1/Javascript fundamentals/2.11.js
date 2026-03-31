//2
//1 then 2 
//null
//The answer 1 and then undefined
//3
if (age >= 14 && age <= 90)
if (!(age >= 14 && age <= 90))


// The result of -1 || 0 = -1
if (-1 || 0) alert( 'first' );


// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );


// Operator && has a higher precedence than ||
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}