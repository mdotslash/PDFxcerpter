## Pure, Petite Program to Prepare PDF Excerpts Painlessly (PPPPPEP) 👏🏿 🎉 🍕

### Requirements ###

Make sure you have [PDFtk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/) installed and in your system path.

> **Mac users** - Be aware of [this PDFTk issue](https://github.com/jjwilly16/node-pdftk/issues/3)

### Installation ###

You can easily install it with [npm](http://npmjs.com):

```bash
npm i bookexcerpt
```

Make sure excerpts.js is in the directory with the PDFs which you're trying to use this Pure, Petite Program to Prepare PDF Excerpts  Painlessly (PPPPPEP).

### How to use ###

This PPPPPEP takes two arguments, the PDF you wish to excerpt ("Main.pdf") and the watermark PDF ("Watermark.pdf")

Run the following command in the directory with both PDFs

```bash
node excerpts.js Main.pdf Watermark.pdf
```
The output is a final PDF titled "Main_excerpt.pdf"

Currently, the excerpter is set to make a pdf excerpt that is no longer than 20% of the total pdf.

Thanks to [jjwilly16](https://github.com/jjwilly16/node-pdftk) for their PDF Toolkit Node Wrapper and my code papas [Tim](https://github.com/Fauntleroy) and [Daniel](https://github.com/sadbumblebee) for the emotional and technical support.

Also, I still don't know what promises are, even though I use them in this 
