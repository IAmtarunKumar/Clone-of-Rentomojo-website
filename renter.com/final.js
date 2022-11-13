function one(){
    document.querySelector(".slide_image").src="https://s.rmjo.in/AC-Offer-Banner-MWeb-.jpg"
}
function two(){
    document.querySelector(".slide_image").src="https://s.rmjo.in/Paytm-CB-offer-MWeb.jpg"
}
function three(){
    document.querySelector(".slide_image").src="https://s.rmjo.in/Paytm-Payments-Bank-MWeb-banner.png"
}
function four(){
    document.querySelector(".slide_image").src="https://s.rmjo.in/AirOKM-Web.png"
}
function five(){
    document.querySelector(".slide_image").src="https://s.rmjo.in/WP-M-Web.png"
}
setInterval(one,2000)
setInterval(two,4000)
setInterval(three,6000)
setInterval(four,8000)
setInterval(five,10000)

let array=JSON.parse(localStorage.getItem("adahr"))||[]
    document.querySelector("#homePage").addEventListener("click",function(){
        let email=document.querySelector("#email").value;
        let adhar=document.querySelector("#adhar").value;
        let referal=document.querySelector("#referal").value;
        console.log(typeof email);
        if(email!==""&&adhar!==""){
            let obj={email,adhar,referal};
                array.push(obj);
                localStorage.setItem("adhar",JSON.stringify(array))
                
                // console.log(document.querySelector(".login"));
                window.location.href="index.html";
           

        }
       else {
           alert("Enter Valid Adhar")
        }
     
    })

    