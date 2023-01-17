module.exports = function toReadable (number) {

    let n = number;
    
        if (n===0){return 'zero'}
    
         const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
         const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
         const tenner = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        if(n<=9){ return ones[n] };
    
        if(n<=19){ return tens[n-10] };
    
        if(n<=99){ 
          n = n.toString().split('');
          return tenner[n[0]] + ' ' + ones[n[1]]
        }
    
        if(n<=999){
            n = n.toString().split('');
        if(n[1]==='0') return ones[n[0]] + ' hundred ' + ones[n[2]];
    
        if(n[1]==='1') return ones[n[0]] + ' hundred ' + tens[n[2]];
    
        return ones[n[0]] + ' hundred ' + tenner[n[1]] + ' ' + ones[n[2]];
        } 
    
        }

