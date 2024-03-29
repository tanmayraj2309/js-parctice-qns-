// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height)
//  (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height
//  (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly 
//  as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects).
//  Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI.
//  Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture



// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this
//  formula mass / (height * height), and not this one mass / (height ** 2).



const markMiller = {
    weight : 78,
    height : 1.69,
}
const johnSmith = {
    weight : 92,
    height : 1.95,
}

let calcBMI=(personname)=>{
    const bmi = (personname.weight) / (personname.height*personname.height);
    return bmi;
}

const marksbmi = calcBMI(markMiller);
console.log("markbmi: ", marksbmi);

const johnbmi =calcBMI(johnSmith);
console.log("john bmi: ", johnbmi);

if(marksbmi>johnbmi){
    console.log("Mark Miller's BMI is" ,"(", marksbmi,")", "higher than John's Smith!","(",johnbmi,")");
}
else{

console.log("John's Smith BMI is" , "(" ,johnbmi, ")"," higher than Mark's Miller!", "(",marksbmi,")");
}

