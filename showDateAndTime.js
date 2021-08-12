// program to display the date and time
function show(){
    const date = new Date();
    const upDate = date.toDateString();
    const time = date.toLocaleTimeString();

    
    console.log('Date: ' + upDate);
    console.log('Time: ' + time);
}

show();