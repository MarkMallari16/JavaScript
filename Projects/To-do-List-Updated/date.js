const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    function dateFormat(currentDate){
        const day = currentDate.getDate().toString().padStart(2,"0");
        const month = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();

        return `${month} ${day}, ${year}`;
    }
    function displayDate(){
        const date = new Date();
        const formattedDate = dateFormat(date);

        document.getElementById("js-date-txt").innerHTML = formattedDate;
    }
    
    displayDate();