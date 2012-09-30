    var URL = unescape(window.document.location);
    if (URL.indexOf("?") > -1) {
        var list1 = URL.split("?");
        var list2 = list1[1].split ("=");
        var varName = list2[0];
        var name = list2[1];
    }
    if(varName!=null){
        if(varName == "err"){
            var textToDisplay = "Wrong username or password! ";
            document.getElementById("hedder").innerHTML = textToDisplay;
        }
        else{
            if(name != null){
                document.getElementById("hedder").innerHTML = "Welcome "+name;
                document.getElementById("main_title").innerHTML = "Welcome "+name;
            }
        }
    }