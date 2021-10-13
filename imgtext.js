var tesseract=require("tesseract.js")
tesseract.recognize(
    '/home/moussa/convert images to text/images/image11.jpeg',
    'eng',
    {logger:m=>console.log(m)}
).then(({data:{text}})=>{
    console.log(text)
})