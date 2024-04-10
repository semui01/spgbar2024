 
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        // const firstDate = new Date(1704038400000);
        const firstDate = new Date("2024-01-01");
        const secondDate = new Date();
        console.log(secondDate)
        console.log(firstDate)

        const diffDays = Math.ceil(Math.abs((firstDate - secondDate) / oneDay));
        const inPct = diffDays/366*100;
        console.log(diffDays)
        console.log(firstDate-secondDate)
        console.log(oneDay)


        // document.getElementById("date").innerHTML = new Date().getFullYear();
        // document.getElementById("day").innerHTML = diffDays  ;
        // document.getElementById("pct").innerHTML = Math.ceil(inPct);
        // document.getElementById("pcts").innerHTML = Math.ceil(inPct) +"% complete";
        // // document.getElementById("pct").innerHTML = Math.round(inPct).toFixed(1);
        // document.getElementById("pgs").ariaValueNow = Math.ceil(inPct);
        // document.getElementById("pgs").style.width = Math.ceil(inPct)+"%";
        // const desctn = "It's " + diffDays + " Days into 2024, " + Math.ceil(inPct) + "% complete."
        // console.log(desctn)

        // // document.getElementsByTagName('meta').namedItem('desciption').setAttribute('content',desctn)
        // document.getElementsByTagName('meta').namedItem('twitter:title').setAttribute('content',desctn)

        $("#date").text(new Date().getFullYear());
        $("#day").text(diffDays );
        $("#pct").text(Math.ceil(inPct));
        $("#pcts").text(Math.ceil(inPct) +"% complete");
        $("#pgs").attr("ariaValueNow",Math.ceil(inPct));
        $("#pgs").css("width", Math.ceil(inPct)+"%");

        const desctn = "It's " + diffDays + " Days into 2024, " + Math.ceil(inPct) + "% complete."
        console.log(desctn)
 
       $("meta[name='twitter:title']").attr('content',desctn)
        



// heart in footer changes size 
function bigImg(x){
    x.style.fontSize ="60px"
}

function normalImg(x){
    x.style.fontSize ="25px"
}


 
  