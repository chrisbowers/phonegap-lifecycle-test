var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
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
    }

var key = “wallet”;
var value = “brown”;
    window.localStorage.setItem( key, value );
var key = “wallet”;
var value = window.localStorage.getItem(brown);

var key = “pen”;
var value = “blue”;
    window.localStorage.setItem( key, value );
var key = “pen”;
var value = window.localStorage.getItem(blue);

var key = “card”;
var value = “visa”;
    window.localStorage.setItem( key, value );
var key = “card”;
var value = window.localStorage.getItem(visa);

var key = “bag”;
var value = “white”;
    window.localStorage.setItem( key, value );
var key = “bag”;
var value = window.localStorage.getItem(white);

var key = “shoe”;
var value = “red”;
window.localStorage.setItem( key, value );
var key = “shoe”;
var value = window.localStorage.getItem(red);