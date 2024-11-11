 // Get the current date
 const today = new Date();

 // Create a Date object for Christmas of the current year
 let cmas = new Date(today.getFullYear(), 11, 24);

 // Check if the current date is after December 24th
 if (today.getMonth() === 11 && today.getDate() > 24) {
     // If true, set Christmas for the next year
     cmas.setFullYear(cmas.getFullYear() + 1);
 }  

 // Calculate the difference in days between today and Christmas
 const one_day = 1000 * 60 * 60 * 24;
 const daysLeft = Math.ceil((cmas.getTime() - today.getTime()) / one_day);

 // Set the countdown message in the paragraph with id 'countdown'
 document.getElementById("countdown").innerText = daysLeft + " days left until Christmas!";