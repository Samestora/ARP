// Load the Showdown.js library from the CDN
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js";
script.integrity = "sha512-LhccdVNGe2QMEfI3x4DVV3ckMRe36TfydKss6mJpdHjNFiV07dFpS2xzeZedptKZrwxfICJpez09iNioiSZ3hA==";
script.crossOrigin = "anonymous";
script.referrerPolicy = "no-referrer";

document.head.appendChild(script);

script.onload = () => {
    document.addEventListener('DOMContentLoaded', (event) => {
        var converter = new showdown.Converter();
        var markdownInput = document.getElementById("markdown-input");
        var htmlOutput = document.getElementById("html-output");
        
        markdownInput.addEventListener("input", function() {
            var markdownText = markdownInput.value;
            var html = converter.makeHtml(markdownText);
            htmlOutput.innerHTML = html;
        });
    });
};
