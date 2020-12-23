// Wait for device API libraries to load
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
function onDeviceReady() {
    document.querySelector("#apiLoaded").textContent = "APIs are now available";
    alert("APIs are now available");

    setTimeout(() => {
        alert("Time's Up");
        document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", onOnline, false);
    }, 3000);

    function onOffline() {
        window.location.href = "pages/no_connection.html";
    }

    function onOnline() {
        window.location.href = "pages/home.html";
    }
}