let url = "http://www.zombie-bites.com";
//let domain = (new URL(url));
//console.log(domain)

//domain = domain.hostname;
//domain = domain.hostname.replace('www.','');
//console.log(domain.substr(0,7))


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
}



  