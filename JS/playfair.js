
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

function PlayFair(strr){
    let str = strr.toLowerCase();
    let plain = [];
    let index = [];
    let cipher = '';
    let first;
    let second;
    const key = 'dog';
    const X5Arr = [
        ['d','o','g','a','b'],
        ['c','e','f','h','i'],
        ['k','l','m','n','p'],
        ['q','r','s','t','u'],
        ['v','w','x','y','z']
    ]

    for(let i = 0; i < str.length; i+=2){
        plain.push(str.substr(i,2));
    }

    if( plain[plain.length - 1 ].length == 1 ){
        plain[plain.length - 1 ] = plain[plain.length - 1 ] + 'x' ;
    }


    for(let i=0; i < plain.length; i++){
        for(let j=0; j < X5Arr.length; j++){
            for(let k=0; k < X5Arr[j].length; k++){

                if( plain[i][0] === X5Arr[j][k] ){
                    index[0] = [j,k];
                }
                if( plain[i][1] === X5Arr[j][k] ){
                    index[1] = [j,k];
                }
            }
        }

        if(index[0][1] === index[1][1]){
            
            first = X5Arr[(index[0][0] + 1)%5][(index[0][1])%5];
            second = X5Arr[(index[1][0] + 1)%5][(index[0][1])%5];

            cipher += first + second;
            
        }else if(index[0][0] === index[1][0]){
            first  = X5Arr[(index[0][0])%5][(index[0][1] + 1)%5];
            second = X5Arr[(index[0][0])%5][(index[1][1] + 1)%5];

            cipher += first + second;
            
        }else{
            first  = X5Arr[(index[0][0])%5][(index[1][1])%5];
            second = X5Arr[(index[1][0])%5][(index[0][1])%5];

            cipher += first + second;
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
    value = PlayFair(Plain());

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
     }

    for(let i=0; i < value.length ; i++ ){
        const element = document.createElement("div");
        element.textContent = value[i];
        parent.appendChild(element);
    }

}
