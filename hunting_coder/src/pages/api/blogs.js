import * as fs from 'fs';

export default function handler(req, res) {
  const { slug } = req.query;
  const blogs = [];
  fs.readdir('blogPost', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ err });
    }
    // data.forEach(file => {
    //   fs.readFile(`blogPost/${file}`, 'utf-8', (fileErr, fileData) => {
    //     if (fileErr) {
    //       return res.status(500).json({err});
    //     }
    //     const file = JSON.parse(fileData)
    //     blogs.push(file);
    //     console.log(blogs)
    //   });
    // });
    res.status(200).json({ data });
  });
}