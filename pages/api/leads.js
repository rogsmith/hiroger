import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    console.log("rger2")
    let doc = await req.db.collection('leads').findOne()
    console.log("rger3")
    console.log(doc);
    res.json(doc);
});

handler.post(async (req, res) => {
    let data = req.body;
    console.log(data)
    //data = JSON.parse(data);
    console.log(data)
    let doc = await req.db.collection('leads').insertOne(data)
    res.json(doc.ops[0]);
})
export default handler;