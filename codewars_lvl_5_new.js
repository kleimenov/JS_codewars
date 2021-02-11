//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.


let url = "ww.zombie-bites.com";


function domainName(url) {

    let domain = url.replace(/(https?:\/\/)?(www.)?/i, '');
    
    let cnt = 0;
    for (let i = 0; i < domain.length; i++) {
       if(domain[i] === '.') {break}
       cnt++
    
    }
    return domain.substr(0, cnt);
   
}

console.log(domainName(url))

//
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }

//
function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}
  