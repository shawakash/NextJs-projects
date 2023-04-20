import * as fs from 'fs';

export default async function handler(req, res) {
  const { slug, count } = req.query;
  let blogs = [];
  let data = await fs.promises.readdir('blogPost');
  for(let file of data) {
    let fileData = await fs.promises.readFile(`blogPost/${file}`, 'utf-8')
    const jsonParse = JSON.parse(fileData)
    blogs.push(jsonParse);
  }
  // console.log(blogs)
  return res.status(200).json( blogs );
}