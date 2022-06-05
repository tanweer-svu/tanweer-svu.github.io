function show(divs , scroll = "nearest"){
    for(let i = 0; i < divs.length ; i++){
        if(i === 0){
            document.getElementById(divs[i]).classList.remove("d-none");
        }else{
            document.getElementById(divs[i]).classList.add("d-none");
        }
    }
    document.getElementById(divs[0]).scrollIntoView({behavior: "smooth", block: scroll});
}
