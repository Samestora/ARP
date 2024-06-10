var converter = new showdown.Converter();
var markdownInput = document.getElementById("markdown-input");
var htmlOutput = document.getElementById("html-output");

markdownInput.addEventListener("input", function() {
    var markdownText = markdownInput.value;
    var html = converter.makeHtml(markdownText);
    htmlOutput.innerHTML = html;
});