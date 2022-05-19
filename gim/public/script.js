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
    sending_message = document.getElementById("messageInput").value
    console.log(sending_message)
    fetch("http://" + SERVER_IP + "/send?m=" + sending_message).then(function(response) {
        response.text().then(function (text){
            document.getElementById("messageContent").innerHTML = text
        })
      }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
      });
}