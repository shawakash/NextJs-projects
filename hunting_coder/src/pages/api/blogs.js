import * as fs from 'fs';

export default async function handler(req, res) {
  const { slug } = req.query;
  let blogs = [];
  let data = await fs.promises.readdir('blogPost')
  for(let file of data) {
    console.log(file)
    let fileData = await fs.promises.readFile(`blogPost/${file}`, 'utf-8')
    const jsonParse = JSON.parse(fileData)
    blogs.push(jsonParse)
  }
  res.status(200).json( blogs );
  
  
  
  
  // , 'utf8', (err, data) => {
  //   if (err) {
  //     return res.status(500).json({ err });
  //   }
  //   data.forEach(file => {
  //     , (fileErr, fileData) => {
  //       if (fileErr) {
  //         return res.status(500).json({err});
  //       }
  //       const file = JSON.parse(fileData)
  //       blogs.push(file);
  //       console.log(blogs)
  //     });
  //   });
  // });
}