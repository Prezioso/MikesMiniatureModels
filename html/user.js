// JavaScript Document
                var URL = unescape(window.document.location);
                if (URL.indexOf("?") > -1) {
                    var list1 = URL.split("?");
                    var list2 = list1[1].split ("=");
					var varName = list2[0];
                    var name = list2[1];
                }
                if(varName!=null){
					if(varName == "err"){
						var textToDisplay = "Wrong username or password! " +
						'<form method="post" action="Login">'+
                                'User name: <input type="text" id="login" name="username"/>'+
                                'Password: <input type="password" name="password" id="login"/>'+
                                '<input type="submit" value="Login" id="login_bt">'+
                            '</form>';
						document.getElementById("hedder").innerHTML = textToDisplay;
					}
					else{
						if(name != null){
                    		document.getElementById("hedder").innerHTML = "Welcome "+name;
						}
					}
                }