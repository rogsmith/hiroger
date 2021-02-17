import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

var ObjectId = require('mongodb').ObjectId

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('leads').findOne({"_id": ObjectId(req.query.id)})
    res.json(doc);
});

handler.post(async (req, res) => {
    let data = req.body;
    
    if(data._id){
        let doc = await req.db.collection('leads').updateOne({"_id": ObjectId(data._id)}, {$set:{"zip": data?.zip, "yob": data?.yob, "enrolled": data?.enrolled, "name": data?.name, "email": data?.email, "phone": data?.phone}}, {upsert: true})
        doc = await req.db.collection('leads').findOne({"_id": ObjectId(data._id)})
        res.json(doc);
    }
    else{
        let doc = await req.db.collection('leads').insertOne(data)
        res.json(doc.ops[0]);
    }
})
export default handler;