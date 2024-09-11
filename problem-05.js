function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    if (serialNumber <= interviewTimes.length) {
        return 'Invalid Serial Number';
    }
    const totalInterviewTimes = interviewTimes.reduce((a, b) => a + b, 0);
    const allAverageInterviewTime = Math.round(totalInterviewTimes / interviewTimes.length);

    const peopleRowend = serialNumber - interviewTimes.length - 1;

        const waitingTime = peopleRowend *allAverageInterviewTime;

    return waitingTime;
}
/*console.log(waitingTime([3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6],4));
console.log(waitingTime(7,10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));*/

