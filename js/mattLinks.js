// load config.json file and get name key
// vanillajs

// load config.json file using fetch when the page loads
document.addEventListener("DOMContentLoaded", function () {
  fetch("./config.json")
    .then((response) => response.json())
    .then((data) => {
      // theme: set data-theme attribute to bod
      document.body.setAttribute("data-theme", data.theme);
      document.getElementById("name").innerText = data.name;
      document.getElementById("description").innerText = data.description;
      document.getElementById("email").innerText = data.email;
      document.getElementById("email").setAttribute("href", "mailto:" + data.email);

      let socials = data.socials;
      let socialsList = document.getElementById("socialList");
      for (let i = 0; i < socials.length; i++) {
        /*
          <a href="
            https://www.linkedin.com/in/rafael-rodrigues-0b1b3b1b3/" target="_blank"
                class="btn btn-circle btn-outline">
                <i class="fab fa-linkedin"></i>
            </a>

          */
        let listItem = document.createElement("a");
        listItem.setAttribute("href", socials[i].url);
        listItem.setAttribute("target", "_blank");
        listItem.setAttribute("class", "btn btn-circle btn-outline");
        
        let icon = document.createElement("i");
        icon.setAttribute("class", socials[i].faIcon + " fa-2x");
        listItem.appendChild(icon);
        socialsList.appendChild(listItem);
      }

      let buttons = data.buttons;
      let buttonsList = document.getElementById("buttonsList");
      for (let i = 0; i < buttons.length; i++) {
        /*
          <a href="
            https://www.linkedin.com/in/rafael-rodrigues-0b1b3b1b3/" target="_blank" class="btn btn-primary w-64">
                <i class="fab fa-linkedin"></i> LinkedIn

            </a>

            "text": "Contact me",
            "url": "mailto:",
            "color": "primary",
            "icon": "fas fa-envelope"
          */
        
        let listItem = document.createElement("a");
        listItem.setAttribute("href", buttons[i].url);
        listItem.setAttribute("target", "_blank");
        listItem.setAttribute("class", "btn btn-" + buttons[i].color + " w-64");

        let icon = document.createElement("i");
        icon.setAttribute("class", buttons[i].icon);
        listItem.appendChild(icon);
        listItem.innerHTML += " " + buttons[i].text;
        buttonsList.appendChild(listItem);

        
      }
    });
});