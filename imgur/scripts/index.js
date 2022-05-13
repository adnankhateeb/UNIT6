import { makeAPICall, appendImages } from "../scripts/main.js";

let res = await makeAPICall(
   "https://api.unsplash.com/photos/?client_id=bESk1zhXjAJAd4AWL9VjlNKhx6Ijt23sJd1UlE5GdJc&per_page=30"
);

let container = document.getElementById("container");
appendImages(res, container);

let search = document.querySelector(".search");

search.addEventListener("keypress", (e) => {
   let search_value = search.value;

   if (e.key === "Enter") {
      localStorage.setItem("search_term", search_value);
      window.location.href = "./search.html";
   }
});
