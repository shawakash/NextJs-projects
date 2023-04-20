import * as fs from 'fs';

export default async function handler(req, res) {
    if(req.method == 'POST') {
        console.log(req.body)
        const body = req.body;
        const data = await fs.promises.readdir('contactData');
        const response = await fs.promises.writeFile(`contactData/${data.length + 1}.json`, JSON.stringify(body));
        return res.status(200).json({
            response,
            message: "Data Received",
        });


    } else {
        return res.status(500).json({
            "err": "It's a post request",
        })
    }
}