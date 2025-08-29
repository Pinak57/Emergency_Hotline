const loves = document.getElementsByClassName('love');

for (let i = 0; i < loves.length; i++) {
    loves[i].addEventListener('click', function () {
        const love_Count = document.getElementById('loveCount');
        let count = parseInt(love_Count.innerText);
        count = count + 1;
        love_Count.innerText = count;
    });
}


// police station

document.getElementById('police').addEventListener('click' , function(){

    

    const service = document.getElementById('service1').innerText;
    const phone= document.getElementById('phone1').innerText;
    const coin_count = document.getElementById('coinCount');
    let coin = parseInt(coin_count.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${service} ${phone}...`);
        coin = coin - 20;
        coin_count.innerText = coin;
    }

    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${service}</h1>
                <p>${phone}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});






//Emergency number
document.getElementById('emergency').addEventListener('click' , function(){

    

    const service = document.getElementById('service2').innerText;
    const phone= document.getElementById('phone2').innerText;
    const coin_count = document.getElementById('coinCount');
    let coin = parseInt(coin_count.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${service} ${phone}...`);
        coin = coin - 20;
        coin_count.innerText = coin;
    }
    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${service}</h1>
                <p>${phone}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

//Ambulance sevice
document.getElementById('ambulance').addEventListener('click' , function(){

    

    const service = document.getElementById('service3').innerText;
    const phone= document.getElementById('phone3').innerText;
    const coin_count = document.getElementById('coinCount');
    let coin = parseInt(coin_count.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${service} ${phone}...`);
        coin = coin - 20;
        coin_count.innerText = coin;
    }
    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${service}</h1>
                <p>${phone}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

//brac bank
document.getElementById('brac').addEventListener('click' , function(){

    

    const service = document.getElementById('service4').innerText;
    const phone= document.getElementById('phone4').innerText;
    const coin_count = document.getElementById('coinCount');
    let coin = parseInt(coin_count.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${service} ${phone}...`);
        coin = coin - 20;
        coin_count.innerText = coin;
    }
    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${service}</h1>
                <p>${phone}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

//railway service

document.getElementById('railway').addEventListener('click' , function(){

    

    const service = document.getElementById('service5').innerText;
    const phone= document.getElementById('phone5').innerText;
    const coin_count = document.getElementById('coinCount');
    let coin = parseInt(coin_count.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${service} ${phone}...`);
        coin = coin - 20;
        coin_count.innerText = coin;
    }
    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${service}</h1>
                <p>${phone}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});

//faie service
document.getElementById('fair').addEventListener('click' , function(){

    

    const service = document.getElementById('service6').innerText;
    const phone= document.getElementById('phone6').innerText;
    const coin_count = document.getElementById('coinCount');
    let coin = parseInt(coin_count.innerText);

    if(coin < 20 ){
        alert("You don't have enough coin");
        return;
    }
    else{
        alert(`Calling ${service} ${phone}...`);
        coin = coin - 20;
        coin_count.innerText = coin;
    }
    // call history
    const callHistory = document.getElementById('call-history');
    const div = document.createElement('div');
    const time = new Date();
    div.innerHTML = `
        <div class="flex justify-between gap-5 mt-10">
            <div>
                <h1>${service}</h1>
                <p>${phone}</p>
            </div>
            <h4>${time.toLocaleTimeString()}</h4>
        </div>
    `;

    callHistory.appendChild(div);
});


// clear button 

document.getElementById("clear").addEventListener('click', function () {
    const callHistory = document.getElementById('call-history');
    if (callHistory) {
        callHistory.innerHTML = '';
    }
});


