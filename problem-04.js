function calculateFinalScore(input) {
   if (typeof input !== 'object' || input === null) {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = input;
    
    if (typeof name !== 'string' || 
        typeof testScore !== 'number' || 
        typeof schoolGrade !== 'number' || 
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    const baseScore = testScore + schoolGrade;
    const parentProfessionBonus = isFFamily ? 20 : 0;
    
    const finalScore = baseScore + parentProfessionBonus;
    
   return finalScore >= 80;
}

/*console.log(calculateFinalScore({name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true}));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));*/