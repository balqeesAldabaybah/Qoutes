

db.collection("sayings").get().then((record) => {
    console.log(record.docs[5].data().author)
    var index = 0 ;
    renderQoute(record.docs[0].data());

    document.getElementById('btn-new').addEventListener('click', ()=>{
        index = getRandom(record.docs.length);
        renderQoute(record.docs[index].data());
    });
 });


function renderQoute(doc){
    document.getElementById('qoute').innerHTML = doc.qoute;
    document.getElementById('author').innerHTML = doc.author;
    document.getElementById('desc').innerHTML = doc.description;
    document.documentElement.style.setProperty('--color',doc.color);
    
}
function getRandom(max){
    return Math.floor(Math.random()*max);
}