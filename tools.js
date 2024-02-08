import Readline from "readline";
var rl = Readline.createInterface({input: process.stdin, output: process.stdout});

export function showNumJSONOptions(jsonObject)
{
    const keys = Object.keys(jsonObject);
    for (var x = 0; x < keys.length; x++)
    {
        console.log(`${x + 1} for ${keys[x]}`)

    }
}

export async function userInput(message)
{
    return new Promise((resolve, reject) => {
        rl.question(message, (userInput) => {
            rl.close();
            resolve(Number(userInput));
        });
    });
}

export function getJSONValueByIndex(jsonObject, index){
    const keys = Object.keys(jsonObject);
    return jsonObject[keys[index]];
}