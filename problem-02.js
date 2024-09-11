function sendNotification(email) {
    const atTheRateIndex = email.indexOf('@');
    if(atTheRateIndex === -1 || atTheRateIndex === 0 ||atTheRateIndex === email.length - 1 ){
       return "Invalid Email" ;
    }
      else if(email.lastIndexOf('@')!== atTheRateIndex){
         return "Invalid Email" ;
     }
     
       const symbol = email.split('@')
       const userName = symbol[0]
        const domainName = symbol[1]
        const emailAccount = userName + ' sent you an email from ' + domainName ;
return emailAccount;
}

/*console.log(sendNotification('zihad@gamil.com'));
 console.log(sendNotification('farhan34@yahoo.com'));
  console.log(sendNotification('nadim.naem5@outlook.com'));
 console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com@'));*/

