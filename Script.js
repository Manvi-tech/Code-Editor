
function showPreview(){
   
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "<style>"+document.getElementById("cssCode").value+"</style>";
    var jsCode = "<scri"+"pt>"+ document.getElementById("jsCode").value + "</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();

}

var codeEditor = document.getElementsByTagName('textarea');

function lightTheme(){

    for(i=0;i<codeEditor.length;i++){
        codeEditor[i].style.backgroundColor="white";
        codeEditor[i].style.color="black";
    }
  
}

function darkTheme(){
    for(i=0;i<codeEditor.length;i++){
        codeEditor[i].style.backgroundColor="#1a1a35";
        codeEditor[i].style.color="white";
    }

}