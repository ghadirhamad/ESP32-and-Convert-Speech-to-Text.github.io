let input = document.querySelector(".inputBx input"),
     btn = document.querySelector(".inputBx .icon");
     icon = document.querySelector(".inputBx .icon i");

let SpeechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition ;
if (SpeechRecognition)
{
    console.log("supported");
    let recognition = new SpeechRecognition();
    //console.log("recognition");
    btn.addEventListener("click",()=>{
        if(icon.classList.contains('fa-microphone'))
        {
		   recognition.start();
        }
        else
        {
		 recognition.stop();
        }
    })
    recognition.addEventListener("start",()=>{
	    icon.classList.replace('fa-microphone','fa-microphone-slash');
	})
	recognition.addEventListener("end",()=>{
	    icon.classList.replace('fa-microphone-slash','fa-microphone');
	})
	recognition.addEventListener("result",(event)=>{
	    //console.log(event);
		let transcript = event.results[0][0].transcript;
		console.log(transcript);
		input.value = transcript;
	})
}
else
{
   console.log("not supported");
}