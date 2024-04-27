// load config.json file and get name key
// vanillajs

// load config.json file using fetch when the page loads
document.addEventListener("DOMContentLoaded", function () {
  fetch("./config.json")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("name").innerText = data.name;
        document.getElementById("description").innerText = data.description;
        document.getElementById("email").innerText = data.email;


      
    });
});