
// async function requestFunc() {
//     const accountSid = 'ACbef0f075fa8f3209261d1058db95f315';
//     const authToken = 'c4dce05015a2706fe939379829165779';

//     const client = require('twilio')(accountSid, authToken);
//     const arr = ["917046974258"]
//     const res = [];
//     arr.forEach(async (ele, index) => {
//         let respose = await client.messages
//             .create({
//                 to: ele,
//                 body: 'hellooooooo from Artrue',
//                 from: 18124455521
//             });
//         res.push({ index: index, msg: respose });
//         if (res.length === arr.length) {
//             console.log('res', res);
//         }
//     }

//     )
// }
// requestFunc();