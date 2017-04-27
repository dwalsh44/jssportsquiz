var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0, incorrect=0;
//setting variables

var quizAnswers = [];


function shuffleArray(array)
{
	for (var i = array.length -1; i >0; i--)
	{
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

var questions=[
	{
		question: "Who won the 2017 Cheltenham Gold Cup?",//question
		correctAnswer: "Sizing John",//right answer to question
		//list of multiple choice answers
		answer0: "Djackadam",
		answer1: "Native River",
		answer2: "Sizing John",
		answer3: "Cue Card"
	},
	{

		question: "In what year did Ireland win its most recent rugby grand slam? ",//question
		correctAnswer: "2009",//right answer to question

		//list of multiple choice answers
		answer0: "2009",
		answer1: "2008",
		answer2: "2007",
		answer3: "2006"
	},
	{
		question:"Which player was the leading try scorer in the 2017 Six Nations?",//question
		correctAnswer: "Stuart Hogg",//right answer to question

		//list of multiple choice answers
		answer0: "Mike Brown",
		answer1: "Stuart Hogg",
		answer2: "Jonathan Joseph",
		answer3: "Keith Earls"
	},
	{
		question:"Which country won the 2002 world cup in football?",//question
		correctAnswer: "Brazil",//right answer to question

		//list of multiple choice answers
		answer0: "Brazil",
		answer1: "Germany",
		answer2: "Argentina",
		answer3: "England"
	},
	{
		question:"How many gold medals did Usain Bolt win at the 2016 Rio Olympics?" ,//question
		correctAnswer: "9",//right answer to question

		//list of multiple choice answers
		answer0: "7",
		answer1: "8",
		answer2: "9",
		answer3: "10"
	},
	{
		question:"Who scored the winning goal in the Euro 2016 final?",//question
		correctAnswer: "Eder",//right answer to question

		//list of multiple choice answers
		answer0: "Reus",
		answer1: "Eder",
		answer2: "Griezmann",
		answer3: "Ronaldo"
	},
	{
		question:"In which county would you find Gowran Park racecourse?" ,//question
		correctAnswer: "Kilkenny",//right answer to question

		//list of multiple choice answers
		answer0: "Dublin",
		answer1: "Kilkenny",
		answer2: "Kildare",
		answer3: "Wexford"
	},
	{
		question:"Which team won the All Ireland Hurling Final in 2016? " ,//question
		correctAnswer: "Tipperary",//right answer to question

		//list of multiple choice answers
		answer0: "Kilkenny",
		answer1: "Tipperary",
		answer2: "Galway",
		answer3: "Waterford"
	},
	{
		question:"Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?" ,//question
		correctAnswer: "4",//right answer to question

		//list of multiple choice answers
		answer0: "2",
		answer1: "3",
		answer2: "4",
		answer3: "8"
	},
	{
		question:"Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?" ,//question
		correctAnswer: "Reggie Miller",//right answer to question

		//list of multiple choice answers
		answer0: "Baron Davis",
		answer1: "Kevin Garnett",
		answer2: "Stephon Maurbury",
		answer3: "Reggie Miller"
	},
	{
		question:"Which country hosted the 2016 euro football tournament? " ,//question
		correctAnswer: "France",//right answer to question

		//list of multiple choice answers
		answer0: "England",
		answer1: "France",
		answer2: "Spain",
		answer3: "Germany"
	},
	{
		question:"Which team won the 2016-2017 premier league?" ,//question
		correctAnswer: "Leicester",//right answer to question

		//list of multiple choice answers
		answer0: "Chelsea",
		answer1: "Leicester",
		answer2: "Liverpool",
		answer3: "Man City"
	},
	{
		question:"The game of snooker originated in which country in the latter half of the 19th century?" ,//question
		correctAnswer: "India",//right answer to question

		//list of multiple choice answers
		answer0: "India",
		answer1: "England",
		answer2: "France",
		answer3: "USA"
	},
	{
		question:"Which country is home to Europes finest basketball league?" ,//question
		correctAnswer: "Spain",//right answer to question

		//list of multiple choice answers
		answer0: "Spain",
		answer1: "England",
		answer2: "Poland",
		answer3: "Germany"
	},
	{
		question:"In 2009, which horse became the longest-priced winner of the Grand National for 42 years with odds of 100/1?" ,//question
		correctAnswer: "Mon Mome",//right answer to question

		//list of multiple choice answers
		answer0: "Mon Mome",
		answer1: "Kauto Star",
		answer2: "Rule the World",
		answer3: "Many Clouds"
	},
	{
		question:"As of 2016, who was the last footballer to win BBC's Sports Personality of the Year Award?" ,//question
		correctAnswer: "Ryan Giggs",//right answer to question

		//list of multiple choice answers
		answer0: "Ryan Giggs",
		answer1: "David Beckham",
		answer2: "Frank Lampard",
		answer3: "Steven Gerrard"
	},
	{
		question:"Which formula 1 team does Sebastian Vettel drive for?" ,//question
		correctAnswer: "Ferrari",//right answer to question

		//list of multiple choice answers
		answer0: "Ferrari",
		answer1: "Red Bull",
		answer2: "Mercedes",
		answer3: "Williams"
	},
	{
		question:"Which well known club did George Best play for?" ,//question
		correctAnswer: "Man Utd",//right answer to question

		//list of multiple choice answers
		answer0: "Man Utd",
		answer1: "Chelsea",
		answer2: "Liverpool",
		answer3: "Man City"
	},
	{
		question:"Where would you find GAA ground Cusack Park?" ,//question
		correctAnswer: "Mullingar",//right answer to question

		//list of multiple choice answers
		answer0: "Mullingar",
		answer1: "Galway",
		answer2: "Limerick",
		answer3: "Roscommon"
	},
	{
		question:"Who won the 2017 masters in golf?" ,//question
		correctAnswer: "Sergio Garcia",//right answer to question

		//list of multiple choice answers
		answer0: "Sergio Garcia",
		answer1: "Justin Rose",
		answer2: "Rory McIlroy",
		answer3: "Lee Westwood"
	}	
];

	
function _(x)


{ 
    return document.getElementById(x);
} 
//Setting underscore equal to document.getElementById (handy shortcut)
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

function renderQuestion()
{
	test = _("test");
	if(pos >= questions.length)
	{
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct(" +percent() + "%)</h2><button onclick='print()'>Print quiz result</button>";

		_("test_status").innerHTML += " Thank you for completing the quiz.";
		
		
		pos = 0;
		correct = 0;
		return false;

	}
	
function print() {
	window.print();
}

var bar=document.getElementById("progressBar");
_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
bar.value = (pos+1)
//push all potential answers to the quizAnswers array
quizAnswers[0] = questions[pos].answer0;
quizAnswers[1] = questions[pos].answer1;
quizAnswers[2] = questions[pos].answer2;
quizAnswers[3] = questions[pos].answer3;

console.log("Unshuffled answers" + quizAnswers);
//shuffle the answers
var shuffledAnswers = shuffleArray(quizAnswers);


question = questions[pos].question//question is in position 0 in the  array( zero indexed)
choiceA = questions[pos].answer0;//choice A is in position 1 in the array
choiceB = questions[pos].answer1;//choice B is in position 2 in the array
choiceC = questions[pos].answer2;//choice C is in position 3 in the array
choiceD = questions[pos].answer3;//choice D is in position 4 in the array

choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array

test.innerHTML = "<h3>"+question+"</h3>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"'checked>"+choiceA+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'checked>"+choiceB+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'checked>"+choiceC+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'checked>"+choiceD+"<br>";
test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer()
{
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++)
	{
		if(choices[i].checked)
		{
			choice = choices[i].value;
		}
	}
if(choice == questions[pos].correctAnswer)
{
	
	correct++;
}
else 
{
	
}
pos++;
renderQuestion();

}


//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);