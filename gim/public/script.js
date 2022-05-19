SERVER_IP = "192.168.1.14:3000"
function checkMessageOnClick()
{
    fetch("http://" + SERVER_IP + "/check").then(function(response) {
        response.text().then(function (text){
            document.getElementById("messageContent").innerHTML = text
        })
      }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
}

function submitOnClick()
{
    fetch("https://" + SERVER_IP + IPINFO_API_KEY).then(function(response) {
        return response.json();
      }).then(function(json) {
        
      }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
}