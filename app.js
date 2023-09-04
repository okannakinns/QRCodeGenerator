const container = document.querySelector(".container");
const qrInput = document.querySelector(".qr-input");
const qrImg = document.querySelector(".qr-image");
const generateBtn = document.querySelector(".generate-btn");
const qrColor = document.querySelector("#color-input");


function colorChanged() {
    const redRadio = document.getElementById("red-color");
    const blueRadio = document.getElementById("blue-color");
    const greenRadio = document.getElementById("green-color");
    const yellowRadio = document.getElementById("yellow-color");
    const orangeRadio = document.getElementById("orange-color");
    
  
    if (redRadio.checked) {
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrInput.value + "&bgcolor=ff0000"+"&margin=17";
    } else if (blueRadio.checked) {
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrInput.value + "&bgcolor=3a86ff"+"&margin=17";
    } else if (greenRadio.checked) {
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrInput.value + "&bgcolor=00ff00"+"&margin=17";
    } else if (yellowRadio.checked) {
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrInput.value + "&bgcolor=ffff00"+"&margin=17";
    } else if (orangeRadio.checked) {
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrInput.value + "&bgcolor=ffa500"+"&margin=17";
    }

    document.querySelectorAll('input[name="color"]').forEach(radio => {
        radio.checked = false;
      });
  }
  
  function bgRemove(){
    qrInput.style.backgroundColor = "";
    
   
  }

generateBtn.onclick = function(){
    container.classList.add("active");
    if(qrInput.value.length > 0){

       generateBtn.innerText="Oluşturuluyor...";
       qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrInput.value+"&margin=17";
       
       colorChanged();
        qrImg.onload = function(){
            container.classList.add("active");
            generateBtn.innerText="Oluştur";
            showAlert('success', `QR Kodunuz Başarıyla Oluşturuldu.`);
            // qrInput.value="";
            
            
           
        }
    }
    else{
      
      showAlert('danger', `Metin veya URL kısmı boş bırakılamaz.`);
      qrInput.focus();
      qrInput.style.backgroundColor="#ffd8d8";
      setTimeout(bgRemove, 2000);
    }
    
    }

qrInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      generateBtn.click();
    }
  });
  



function showAlert(type,message){
    const alert= document.createElement("div");
    
    alert.className=`alert alert-${type}`;
    alert.textContent=message;

    container.appendChild(alert);
    console.log(alert);
    setInterval(function(){
        alert.remove();
       },2000);
   }

 

