function emptyInput() {
    var inputs = document.querySelectorAll("input[type=text], input[type=number]");
    var error = 0;

    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            error++;
            break;
        }
    }

    var titles = document.querySelectorAll("input[type=text]");
    for (i = 0; i < titles.length; i++) {
        for(j=0;j< titles.length; j++){
            if(titles[i].value==titles[j].value && i!=j){
                error++;
                break;
            }
        }
    }

    var times = document.querySelectorAll("input[type=number]");
    for (i = 0; i < times.length; i++) {
        if (times[i].value <5) {
            error++;
            break;
        }
    }

    if (error == 0) {
        document.getElementById('saveAllBtn').disabled = false;
    }
    else {
        document.getElementById('saveAllBtn').disabled = true;
    }
};
