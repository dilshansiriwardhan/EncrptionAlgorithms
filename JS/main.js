Focus();

function Focus(){
    const div = document.getElementById("in").firstChild;
    addEventListener("keypress", Write);
    addEventListener("keydown", Clear);
}

function Clear(event){
    if(event.keyCode === 08 ){
        const parent = document.querySelector("#in");
        parent.removeChild(parent.lastChild);
    }
}

function Write(event){
    let value;
    if(event.keyCode === 13 ){
        document.removeEventListener("keypress", Write);
        AddElement();
        return 0;
    }

    

    if(event.keyCode === 32 ){   
        value = "\xa0";
    }else{
        value = String.fromCharCode(event.keyCode);
    }

    const parent = document.querySelector("#in");

    const element = document.createElement("div");
    element.textContent = value;

    if(document.querySelector(".first")){
        parent.removeChild(document.querySelector(".first"));
    }
    parent.appendChild(element);

}

function CaesarCipher(str){
    let key = 3;
    let cipher = "";
    let plain = str.toLowerCase();
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    
    const setAlphabet = new Set(alphabet);

    for(let i=0; i < plain.length ; i++ ){
        // console.log(!(setAlphabet.has(plain[i])));
        if(!(setAlphabet.has(plain[i]))){
            cipher += plain[i];
            continue;
        }
        for(let j=0; j < alphabet.length ; j++ ){
            if(plain[i] === alphabet[j]){
                cipher += alphabet[(j + key) % 26];
            }
        }
    }
    return cipher;
}
function Plain(){
    let plain = "";
    const parent = document.getElementById("in");
    const childArray = parent.children;
    
    for(let i=0; i < childArray.length ; i++ ){
        plain += childArray[i].innerText;
    }

    return plain;
}

function AddElement(){
    const parent = document.querySelector("#out");
    value = CaesarCipher(Plain());

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
     }

    for(let i=0; i < value.length ; i++ ){
        const element = document.createElement("div");
        element.textContent = value[i];
        parent.appendChild(element);
    }

}
