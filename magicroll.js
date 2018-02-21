
const myArray = ['It is certain',
                'It is decidedly so',
                'Without a doubt',
                'Yes definitely',
                'You may rely on it',
                'As I see it, yes',
                'Most likely',
                'Outlook good',
                'Yes',
                'Signs point to yes',
                'Reply hazy try again',
                'Ask again later',
                'Better not tell you now',
                'Cannot predict now',
                'Concentrate and ask again',
                'Dont count on it',
                'My reply is no',
                'My sources say no',
                'Outlook not so good',
                'Very doubtful']; 
document.getElementById("button1").addEventListener('click', rollTheBall);  

function rollTheBall()
{
var rand = myArray[Math.floor(Math.random() * myArray.length)];
console.log(rand);
document.getElementById("section2").textContent=rand;
}