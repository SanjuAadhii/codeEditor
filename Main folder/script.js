
var htmlValue=CodeMirror(document.getElementById('code-html'), {
  lineNumbers: true,
  value:document.getElementById("code-html").textContent ,
  tabSize: 2,
  mode: "text/html",
  autoCloseTags: true, 
   theme: 'monokai'
});
var cssValue=CodeMirror(document.getElementById('code-css'), {
  lineNumbers: true,
  value:document.getElementById("code-css").textContent,
  tabSize: 2,
  mode:'css',
   theme: 'monokai'
});
var jsValue=CodeMirror(document.getElementById('code-js'), {
  lineNumbers: true,
  value:document.getElementById("code-js").textContent ,
  tabSize: 2,
   mode: 'javascript',
     theme: 'monokai'
});
console.log(htmlValue);
console.log(cssValue);
  function run() {
    var htmlCode=htmlValue.getValue();			
            let cssCode="<style>"+cssValue.getValue()+"</style>";
            let scriptCode=jsValue.getValue();
            let output =document.getElementById("output");
            output.contentDocument.body.innerHTML=htmlCode+cssCode;
            output.contentWindow.eval(scriptCode);
}

   