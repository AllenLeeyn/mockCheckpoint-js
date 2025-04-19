export async function examGrader(timeout, exercises) {
    let timePast = 0;
    let grade = 0;
    for (let i = 0; i < exercises.length; i++) {
        const startTime = new Date();
        const newGrade = await exercises[i]();
        timePast += new Date() - startTime;

        if (timePast > timeout) {
            return grade;
        } else grade += newGrade.note;
    }
    return grade;
}
