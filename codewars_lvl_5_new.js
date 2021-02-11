let url = "zombie-bites.com";
let domain = (new URL(url));


domain = domain.hostname;

//console.log(domain)
//domain = domain.hostname.replace('www.','');
//console.log(domain.substr(0,7))

/*
function domainName(url) {
    
    let cntFirst = 0;
    for (let i = 0; i <  url.length; i++) {
        cntFirst++;
        if(url[i] === '.') {break}
    }

    let domain = url.slice(cntFirst, url.length)

    let cntSecond = 0;
    for (let i = 0; i < domain.length; i++) {
       if(domain[i] === '.') {break}
       cnt++
    }

    return domain.substr(0, cnt);
}*/

function domainName(url) {
    let domain = (new URL(url));
    domain = domain.hostname.replace('www.','');
    
    let cnt = 0;
    for (let i = 0; i < domain.length; i++) {
       if(domain[i] === '.') {break}
       cnt++
    
    }
    return domain.substr(0, cnt);
   
}

console.log(domainName(url))


  