const randomPsswrd = len => {
    let psswrd = '';
    do{
      psswrd += Math.random().toString(36).substr(2) 
    }while(psswrd.length < len)
    return psswrd
}
console.log(randomPsswrd(10));