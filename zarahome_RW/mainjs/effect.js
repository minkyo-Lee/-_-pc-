let content = "Baked cauliflower with Tandoori spices baby cauliflower, natural yoghurt, lemon, watercress, olives...";
        let text = document.querySelector("#writing");
        let index = 0;
        function typing(){
            text.textContent += content[index++];
            if(index >= content.length){
                text.textContent ="";
                index=0;
            }
        }
        setInterval(typing,100);