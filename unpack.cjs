const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib');
const root=path.join(__dirname,'public');
const files=JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(__dirname,'site.bundle.gz'))));
for(const [name,data] of Object.entries(files)){const file=path.resolve(root,name);if(!file.startsWith(root+path.sep))throw Error('Invalid asset path');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,Buffer.from(data,'base64'))}
console.log('Site assets unpacked: '+Object.keys(files).length);
