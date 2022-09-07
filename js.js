// let elm = document.getElementById("btn");
// elm.addEventListener("click",calculate);

const month = [31,28,31,30,31,30,31,31,30,31,30,31]
function calculateAge() {
    const dateofbirth = document.getElementById("date_of_birth").value;
    const givendate = document.getElementById("given_date").value;
    
    let startDate = new Date(dateofbirth);
    let endDate = new Date(givendate);

    let stdobYear = startDate.getFullYear();
    let stdobMonth = startDate.getMonth() + 1;
    let stdobDate = startDate.getDate();

    // console.log(`${stdobYear} Year : ${stdobMonth} Month : ${startDate} date`);

    let givenYear = endDate.getFullYear();
    let givenMonth = endDate.getMonth();
    let givenDate1 = endDate.getDate();
    leapTest(givenYear);
    
    if( stdobYear > givenYear || (stdobMonth > givenMonth && stdobYear === givenYear) || (stdobDate > givenDate1 && stdobMonth === givenMonth && stdobYear === givenYear)){
        alert("just Born!");
        return;
    }

    let diffYear = givenYear - stdobYear;
        // console.log(diffYear)
        let diffMonth,diffDate;
    if(givenMonth >= stdobMonth){
     diffMonth = givenMonth -stdobMonth;
        // console.log(diffMonth);
    }
    else{
        diffYear--;
        diffMonth = 12 + givenMonth - stdobMonth;
        // console.log(diffMonth);
    }

    if(givenDate1 >= stdobDate){
        diffDate = givenDate1 - stdobDate;
        // console.log(diffDate);
    }
    else{
        diffMonth--;
        let days = month[givenMonth -2];
        diffDate = days + givenDate1 - stdobDate;
        if(diffMonth<0){
            diffMonth =11 ;
            diffYear--;
        }
        // console.log(diffDate);
    }

    showResult(diffYear, diffMonth,diffMonth);
}
const showResult = (totalYears,totalMonths,totalDays) =>{
    document.getElementById("years").textContent = `${totalYears} Year(s)`;
    document.getElementById("months").textContent = `${totalMonths} Month(s)`;
    document.getElementById("days").textContent = `${totalDays} Day(s)`;
    document.getElementById("output_box").style.display = "flex";
    document.getElementById("msg").style.display = "block";
}

// test leap year
function leapTest(year){
    if((year%4==0) && (year&100 !=0) || (year% 400 ==0)){
        month[1] = 29;
    }else{
        month[1] = 28;
    }
}