// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
//pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.com/libraries/pdf.js/build/pdf.worker.js';

function renderPDF(name) {
  var canvas = document.getElementById(name);
  var url = canvas.dataset.url
  
  // Asynchronous download of PDF
  var loadingTask = pdfjsLib.getDocument(url);
  loadingTask.promise.then(function(pdf) {
  console.log('PDF loaded');
  
  // Fetch the first page
  var pageNumber = 1;
  pdf.getPage(pageNumber).then(function(page) {
    console.log('Page loaded');

    // Prepare canvas using PDF page dimensions
    var scale = 1.5;
    var viewport = page.getViewport({scale: scale});
    
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);
    renderTask.promise.then(function () {
      console.log('Page rendered');
    });
  });
}, function (reason) {
  // PDF loading error
  console.error(reason);
});
};

function renderPDFs(elems) {
  for (i = 0; i < elems.length; i++) {
    renderPDF(i);
  }
};

function download_pdf(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.target = "_blank";
  link.click();
};