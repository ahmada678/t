const button=document.querySelector(".button_1");
const activationURL =
  "http://192.168.174.162:8080/api/v1/composition/columns/1/connect";

 console.log("clicked");
 button.addEventListener("click",function(){
 console.log("clicked");
 fetch(activationURL, {
    method: "POST",
    // You can add headers or request body as needed
  });
});