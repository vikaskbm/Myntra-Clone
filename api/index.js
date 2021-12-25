const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require("dotenv");
const router = express.Router();
const aws = require('aws-sdk')

dotenv.config();

app.use(express.json());
app.use(cors())

aws.config.update({
    accessKeyId: process.env.ACCESS_KEY, 
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.BUCKET_REGION,
})

const s3 = new aws.S3();

app.get('/carousel', async (req, res) => {
    const response = await s3.listObjectsV2({
        Bucket: 'myntra-clone',
        Prefix: 'carousel/'
    }).promise();

    let blist = [];
    response.Contents.filter((item) => {
        if(item.Key != 'carousel/')
            blist.push(process.env.BUCKET_ENDPOINT + item.Key)
    })
    res.send({data: blist});
})

app.get('/brands', async (req, res) => {
    const response = await s3.listObjectsV2({
        Bucket: 'myntra-clone',
        Prefix: 'brands/'
    }).promise();

    let blist = [];
    response.Contents.filter((item) => {
        if(item.Key != 'brands/')
            blist.push(process.env.BUCKET_ENDPOINT + item.Key)
    })
    
    res.send({data: blist})
})

app.get('/kids', async (req, res) => {
    const response = await s3.listObjectsV2({
        Bucket: 'myntra-clone',
        Prefix: 'clothing/'
    }).promise();

    let blist = [];
    response.Contents.filter((item) => {
        if(item.Key != 'clothing/')
            blist.push(process.env.BUCKET_ENDPOINT + item.Key)
    })
    
    res.send(blist)
})

app.get('/shoes', async (req, res) => {
    const response = await s3.listObjectsV2({
        Bucket: 'myntra-clone',
        Prefix: 'gadgets/'
    }).promise();

    let blist = [];
    response.Contents.filter((item) => {
        if(item.Key != 'gadgets/')
            blist.push(process.env.BUCKET_ENDPOINT + item.Key)
    })
    
    res.send(blist)
})

app.get('/deals', async (req, res) => {
    const response = await s3.listObjectsV2({
        Bucket: 'myntra-clone',
        Prefix: 'deals/'
    }).promise();

    let blist = [];
    response.Contents.filter((item) => {
        if(item.Key != 'deals/')
            blist.push(process.env.BUCKET_ENDPOINT + item.Key)
    })
    
    res.send({data: blist})
})


app.listen(3011, ()=> {
    console.log("Backend running")
});


