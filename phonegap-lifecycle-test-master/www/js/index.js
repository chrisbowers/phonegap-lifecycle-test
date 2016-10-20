/*var paused_count =0;
var resumed_count = 0;
var launched_count = 0;*/

var key = "crowbar";
var value = "red";


    function onLoad() 
{
       window.localStorage.setItem( key, value );
    
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
       $("#launched").text("Application launched: " + key);
	 	$("#resumed").text("Application paused: " + value);
		$("#paused").text("Application resumed: " + resumed_count);
    }
	
	/*function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }*/
