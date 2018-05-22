$(document).ready(function(){
$("#disp").val('0');
$("#totaldisp").val('0');
var result ='';
var display='';
var first=0;
var second =0;
var flag=0;
var answer=0;
var opr='';
var regex=/=/g;
var number='';
$("#point").click(function(){

		if(regex.test(display)){
			display='';
		}
			
			// result=result + '1';
			number+='.';
			display+='.';
			flag=0;
			$("#disp").val(number);
			$('#totaldisp').val(display);

		 
});
$("#one").click(function(){

		if(regex.test(display)){
			display='';
		}
			
			// result=result + '1';
			display+='1';
			flag=1;
			number+='1';
			$("#disp").val(number);
			$('#totaldisp').val(display);
		 
});
$("#two").click(function(){
		if(regex.test(display)){
			display='';
		}	
		// result=result + '2';
		display+='2';
		number+='2';
		flag=1;
		$("#disp").val(number); 
		$('#totaldisp').val(display);		
});

$("#three").click(function(){
		if(regex.test(display)){
			display='';
		}	
		// result=result + '3';
			display+='3';
			number+='3';
			flag=1;
			$("#disp").val(number);
			$('#totaldisp').val(display);	
});

$("#four").click(function(){
		if(regex.test(display)){
			display='';
		}	
		// result=result + '4';
			display+='4';
			number+='4';
			flag=1;
			$("#disp").val(number);
			$('#totaldisp').val(display);	
});

$("#five").click(function(){
		if(regex.test(display)){
			display='';
		}	
		// result=result + '5';
			display+='5';
			number+='5';
			flag=1;
			$("#disp").val(number);
			$('#totaldisp').val(display);	
});

$("#six").click(function(){
		if(regex.test(display)){
			display='';
		}	
		// result=result + '6';
			display+='6';
			number+='6';
			flag=1;
			$("#disp").val(number);
			$('#totaldisp').val(display);		
});

$("#seven").click(function(){
		if(regex.test(display)){
			display='';
		 }	
		// result=result + '7';
			display+='7';
			number+='7';
			flag=1;
			$("#disp").val(number);
			$('#totaldisp').val(display);	
});

$("#eight").click(function(){
		if(regex.test(display)){
			display='';
		}
		// result=result + '8';
			display+='8';
			number+='8';
			flag=1;
			$("#disp").val(number);
			$('#totaldisp').val(display);
});

$("#nine").click(function(){
		if(regex.test(display)){
			display='';
		}	
		// result=result + '9';
			display+='9';
			number+='9'
			flag=1;
			$("#disp").val(number);
			$('#totaldisp').val(display);	
});

$("#zero").click(function(){
		if(regex.test(display)){
			display='';
		}
		// result=result + '0';
			display+='0';
			flag=1;
			number+='0';
			$("#disp").val(number);
			$('#totaldisp').val(display);	
});

$("#plus").click(function(){
	number='';
	if(flag==1){
		if(regex.test(display)){
			display='';
			display= answer + '+';
			$("#totaldisp").val(display);
			$("#disp").val('+');
			flag=0;
			return;
		}
		
		// second=parseFloat(result);
		// answer+=second;
		result='+';
		$("#disp").val(result);
		result='';
		flag=0;
		opr='+';
		display+='+';

		$('#totaldisp').val(display);

		} 
});
$("#minus").click(function(){
		number='';
		if(flag==1){
		if(regex.test(display)){
			display='';
			display= answer + '-';
			$("#totaldisp").val(display);
			$("#disp").val('-');
			flag=0;
			return;
		}
		
		// second=parseFloat(result);
		// 		if(answer==0){
		// 			answer=second;
		// 		}
		// 		else{answer-=second;}
		
		result='-';
		$("#disp").val(result);
		result='';
		flag=0;
		opr='-';
		display+='-';
		$('#totaldisp').val(display);
		} 
});
$("#star").click(function(){
		number='';
		if(flag==1){
		if(regex.test(display)){
			display='';
			display= answer + '*';
			$("#totaldisp").val(display);
			$("#disp").val('*');
			flag=0;
			return;
		}
		
		// second=parseFloat(result);
		// 		if(answer==0){
		// 			answer=second;
		// 		}
		// 		else{answer*=second;}		
		result='*';
		$("#disp").val(result);
		result='';
		flag=0;
		opr='*';
		display+='*';
		$('#totaldisp').val(display);
		} 
});
$("#divide").click(function(){
		number='';
		if(flag==1){
		if(regex.test(display)){
			display='';
			display= answer + '/';
			$("#totaldisp").val(display);
			$("#disp").val('/');
			flag=0;
			return;
		}
			
		// second=parseFloat(result);
		// 		if(answer==0){
		// 			answer=second;
		// 		}
		// 		else{answer/=second;}		
		result='/';
		$("#disp").val(result);
		result='';
		flag=0;
		opr='/';
		display+='/';
		$('#totaldisp').val(display);
		} 
});


$("#allclear").click(function(){
	number='';
	result='';
	display='';
	answer=0;
$("#disp").val('0');
$("#totaldisp").val('0');

});
$("#clearone").click(function(){
	number='';
	result='';
	display='';
	answer=0;
$("#disp").val('0');
$("#totaldisp").val('0');

// $("#disp").val('0');
// $("#totaldisp").val('0');

});
$("#getResult").click(function(){
		number='';
	if(flag==1){
	if(opr=='+'){

		// answer+=parseFloat(result);
		// $("#disp").val(answer);
		// result=answer.toString();
		// answer=0;
		
		answer=eval(display);
		answer=answer.toFixed(2);
		$("#disp").val(answer);
		display+='=';
		display+=answer.toString();
		$("#totaldisp").val(display);


	}
	else if(opr=='-'){
		// answer-=parseFloat(result);
		// $("#disp").val(answer);
		// result=answer.toString();
		// answer=0;
		answer=eval(display);
		answer=answer.toFixed(2);
		$("#disp").val(answer);
		display+='=';
		display+=answer.toString();
		$("#totaldisp").val(display);

	
	}

	else if(opr=='*'){
		// answer*=parseFloat(result);
		// $("#disp").val(answer);
		// result=answer.toString();
		// answer=0;
		answer=eval(display);
		answer=answer.toFixed(2);
		$("#disp").val(answer);
		display+='=';
		display+=answer.toString();
		$("#totaldisp").val(display);

	
	}

	else if(opr=='/'){
	// 	answer/=parseFloat(result);
	// 	if(answer===NaN){
	// 		$("#disp").val('Infinity');
	// 	}
	// 	else {
	// 	$("#disp").val(answer);
	// }
	// 	result=answer.toString();
	// 	answer=0;

		answer=eval(display);
		answer=answer.toFixed(2);
		$("#disp").val(answer);
		display+='=';
		display+=answer.toString();
		$("#totaldisp").val(display);

	
	}
	}



});




});


