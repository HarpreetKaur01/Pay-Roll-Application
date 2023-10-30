
function calculatePayroll() {

	console.log("form submitted");

	let eNumber, eName, eDepartment, eHours,  eQual_code, eRegFixSal ,eHourlyWage, payRate, over_time, deduction, netPay;
	const form = document.getElementById("myForm");
	eNumber = document.getElementById("eNumber_id").value;
	eNumber = parseInt(eNumber);
	eName = document.getElementById("eName_id").value;
	eDepartment = document.getElementById("eDepartment_id").value;


	eHours = document.getElementById("eHours_id").value;
	eHours = parseInt(eHours);
	eRegFixSal = document.getElementById("eRegFixSal_id").value;
	eRegFixSal = parseInt(eRegFixSal);
	payRate = eRegFixSal/160;

	
	 
	eHourlyWage = document.getElementById("eHourlyWage_id").value;
	eHourlyWage = parseInt(eHourlyWage);
	//let divs = document.querySelectorAll(".hidden-div");

	eQual_code = document.getElementById("eQual_code_id").value;
	let grossSalary = 0;

	if(eCode.value == "l")
	{ 
		if (eQual_code === 'master') {
			grossSalary = (eHourlyWage * eHours)+2500;
			INCOMETAX();
		}
		else if (eQual_code === 'bachelor') {

			grossSalary = (eHourlyWage * eHours)+1250;
			INCOMETAX();	
		}
		else{
			alert('select valid qualification code');
		}

	}
	else if(eCode.value == "r")
	{
		
		if(eHours==160)
		{
			grossSalary = eRegFixSal;
			INCOMETAX();
			
		}
		else if(eHours<160)
		{
			grossSalary = payRate*eHours;
			INCOMETAX();
			
		}
		else 
		{
			over_time = eHours-160;
			grossSalary = (payRate*160)+(over_time*payRate*1.5);
			INCOMETAX();
			
		}

	}
	else
	{
		alert("Select valid employee code");
	}
	
	function INCOMETAX()
	{

		if(grossSalary>=5000)
			{
				deduction = (((grossSalary-5000)*25)/100)+33;
				netPay = grossSalary-deduction;
				console.log("gross salary more than 5000");
			}
			else
			{
				if(grossSalary>499.99)
				{
					deduction = 33
					netPay = grossSalary-deduction;
				}
				else
				{
					deduction = 19.20;
					netPay = grossSalary-deduction;
				}
				console.log("gross salary less than 5000");
			}
		console.log(`emp number ${eNumber} emp name ${eName} deparmetn ${eDepartment} hours worked ${eHours}  gossSalry ${grossSalary} Deduction ${deduction} Net Pay ${netPay}`);
	}
	



}
let eCode = document.getElementById("eCode_id");
const qualificationDiv = document.getElementById("qualificationDiv");
const fixedSalaryDiv = document.getElementById("fixedSalaryDiv");

eCode.addEventListener("change", function (){

	if(eCode.value =="l")
	{

		qualificationDiv.style.display = "block";
		fixedSalaryDiv.style.display = "none";
	}	
	else if(eCode.value =="r")
	{
		qualificationDiv.style.display = "none";
		fixedSalaryDiv.style.display = "block";

	}

	else{
		qualificationDiv.style.display = "none";
		fixedSalaryDiv.style.display = "none";
	}



});	