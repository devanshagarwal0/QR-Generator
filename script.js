const form =document.getElementById('form');
const qr=document.getElementById('qrcode');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    clearUI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    
    if(url===""){
        alert("Please enter a URL");
    }
    else{
        showSpinner();

        setTimeout(()=>{
            hideSpinner();
            generateQr(url,size);

            setTimeout(()=>{
                const saveurl=qr.querySelector('img').src;
                createSavebtn(saveurl);
            },50);
        },1000);
}

})

const clearUI=()=>{
    
    qr.innerHTML='';
    const savelink=document.getElementById('save-link');
    if(savelink){
        savelink.remove();
    }
}
const generateQr=(url,size)=>{
    const qrcode = new QRCode(qr,{
        text:url,
        width:size,
        height:size,
    })
}

const createSavebtn=(saveurl)=>{
    const link=document.createElement('a');
    link.innerText='Save as Image';
    link.id="save-link";
    link.href=saveurl;
    link.download='qrcode'
    const br=document.createElement('br');
    qr.appendChild(br);
    document.getElementById('lower').appendChild(link);
}

const showSpinner= ()=>{
    document.getElementById('spinner').style.display="block";
}
const hideSpinner= ()=>{
    document.getElementById('spinner').style.display="none";
}