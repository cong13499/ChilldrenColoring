window.addEventListener("load", ()=>{
    const canvas1 = document.querySelector("#canvas1");
    const ctx1 = canvas1.getContext("2d");

    canvas1.height = window.innerHeight-77;
    canvas1.width = window.innerWidth-200;

    function ImagePicker(){
        ctx1.font = "600px Arial";
        ctx1.strokeText("A", 330, 330);}
    document.getElementById("ImagePicker").onclick =ImagePicker;


    const canvasbg = document.querySelector("#canvasbg");
    const ctxbg = canvasbg.getContext("2d");

    canvasbg.height = window.innerHeight-77;
    canvasbg.width = window.innerWidth-200;

    function dataTransfer(){
    }
    

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
   

    var bs = document.getElementById("BrushSize");
    var output = document.getElementById("value");

    canvas.height = window.innerHeight-77;
    canvas.width = window.innerWidth-200;

    let painting = false;

    var color = "rgb(0,0,0)";
    var lw ="1 px";

    function starPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
        var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
        ctxbg.putImageData(imgData, 0, 0);
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    bs.oninput = function(){
        output.innerHTML= this.value;
    }

    //Hàm đổi kích thước bút
    function changeS(e){lw = this.value;}
    bs.onchange = changeS; 
  
    //Hàm đổi màu
    function changeC(e) {color = this.value;}
    document.getElementById("ColorPicker").onchange = changeC;

    //Hàm xóa
    function clearCanvas(){ctx.clearRect(0, 0, canvas.width, canvas.height);}
    document.getElementById("btn_clear").onclick = clearCanvas;

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = lw;
        ctx.lineCap = "round";
        ctx.strokeStyle = color;
        
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", starPosition);
    canvas.addEventListener("mouseup", finishedPosition, dataTransfer);
    canvas.addEventListener("mouseout",finishedPosition, dataTransfer);
    canvas.addEventListener("mousemove", draw);
});