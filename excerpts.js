// Dependencies

const pdf = require('pdfjs-dist');
const pdftk = require('node-pdftk');

// Source PDF and Watermark
var fullPdf = process.argv.slice(2) + ""; // gets the pdf to be escerpted's filename
var markPdf = "mark.pdf";

//  Reference a pdf document
pdf.getDocument(fullPdf).then(function (doc) {
  // Find Number of Pages
  var numPages = doc.numPages;
  var twntyPages = Math.round(numPages*.2); // find cutoff point

// Now use pdf toolkit to cat some Excerpts

  pdftk
    .input({
        A: fullPdf, // original pdf
        B: markPdf, // water mark
    })
    .cat('A1-1 B A2-'+twntyPages+' B') // 1st page pdf + mark + 2nd page - 20% of total Page Num + mark
    .output('./' + fullPdf.replace('.pdf','') + '_excerpt.pdf')
});
