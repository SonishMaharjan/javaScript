
var player1 = prompt('Player1 enter your name. You are red color');
var player2 = prompt("Player2 enter your name. You are blue color");
var p1Color= "rgb(255,20,20)"
var p2Color= "rgb(20,20,255)"
var defColor = $('button').css('background-color');
//console.log(defColor + "is  the co");


function changeColor(rowIndex,colIndex,playerColor)
{
	//$('tr').eq(r).find('td').eq(c).find('button').css('background','blue')

	 $('tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background',playerColor);
}

function returnColor(rowIndex,colIndex)
{
	return $('tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color')
}

//console.log("len"+$('tr').length)
var totalRows = $('tr').length;
var totalCols = $('tr').eq(0).find('td').length;
console.log(totalCols +"thalk")

function checkBottom(colIndex)
{
	var reportColor;
	for (var i= totalRows-1;i>=0 ;i--)
	{
		reportColor = returnColor(i,colIndex)
		
		if(reportColor ==defColor)
		{
			return i;
		}
	}

}
/*
changeColor(5,3);
changeColor(4,3);
changeColor(3,3);
changeColor(2,3);
changeColor(1,3);
changeColor(0,3);
console.log( checkBottom(3));
*/
function fourColorMatch(one,two,three,four)
{
	return (one===two && one ===three &&one===four &&one!=undefined && one!=defColor )
}
function horizontalWinCheck()
{
	for(var r=0;r<totalRows;r++)
	{
		for(var c=0;c<totalCols-3;c++ )//checks upto last 3 cols
		{
			if(fourColorMatch(returnColor(r,c),returnColor(r,c+1),returnColor(r,c+2),returnColor(r,c+3)))
			{
				console.log("horizontal game");
				return true;
			}


		}
	}
}

function verticalCheck()
{
	for(var c=0;c<totalCols;c++)
	{
		for(var r=0;r<totalRows-3;r++)
		{
			if(fourColorMatch(returnColor(r,c),returnColor(r+1,c),returnColor(r+2,c),returnColor(r+3,c)))
			{
				console.log("vertical win");
				return true;
			}
		}
	}
}

function diagonalCheck()
{
	for(var r=0;r<totalRows;r++)
	{
		for(var c=0;c<totalCols-3;c++)
		{
			if(fourColorMatch(returnColor(r,c),returnColor(r+1,c+1),returnColor(r+2,c+2),
				returnColor(r+3,c+3)))
			{
				console.log("forwar diagona win")
				return true;
			}
		}
	}

	for(r= totalRows-1;r>=0;r--)
	{
		for(c=0;c<totalCols-3;c++)
		{
			if(fourColorMatch(returnColor(r,c),returnColor(r-1,c+1),returnColor(r-2,c+2),
				returnColor(r-3,c+3)))
			{
				console.log("backwar diagona win")
				return true;
			}

		}
	}
}

var gameOn= true;
var p1turn=true;
$('#turnInfo').text(player1 +" turn (RED)")

$('button').on('click',function(){

if(gameOn)
{
	var col = $(this).closest('td').index();
	var row = checkBottom(col);
	if(p1turn)
	{
		changeColor(row,col,p1Color);
		if(horizontalWinCheck()|verticalCheck()|diagonalCheck())
		{
			$('#turnInfo').text(player1 +" wins");
			gameOn = false;
			return;
		}
		p1turn= false;
		$('#turnInfo').text(player2 +" turn (BLUE)")
	}
	else
	{
		changeColor(row,col,p2Color);
		if(horizontalWinCheck()|verticalCheck()|diagonalCheck())
		{
			$('#turnInfo').text(player2 +" wins");
			gameOn = false;
			return;
		}
		p1turn = true;
		$('#turnInfo').text(player1 +" turn/red/")
	}
	
	
}
})
	

