// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//  http://localhost:3000/api/blogPost?slug=tailwindCss

import * as fs from 'fs';

export default function handler(req, res) {
    const { slug } = req.query;
    fs.readFile(`blogPost/${slug}.json`, 'utf-8', (err, data) => {

        if (err) {
            return res.status(500).json({ err });
        }

        console.log(JSON.parse(data));
        return res.status(200).json(JSON.parse(data));
    });
}
