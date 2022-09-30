

exports.getData = () => {
    console.log('hello')
    return new Promise((resolve)=>{
        resolve({myData: 'Hello World'})
    })
}