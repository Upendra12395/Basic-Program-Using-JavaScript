// program to trim a string
function trim(str) {
    const final = str.split(' ').join('');
    console.log(final);
}

trim('      Hello World       ')