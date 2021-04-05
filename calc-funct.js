var entry = document.querySelector('.user-input')
var USER_PROCESSES = ''
function btn_funct(params){
	switch(params){
		case 1:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 2:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 3:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 4:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 5:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 6:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 7:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 8:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 9:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case 0:
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case '.':
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
		break;
		case '+':
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
			user_entry = entry.value
			num1 = num2 = '';
			operator_type = ''
			has_active_operator = false;
			prev_active_operator = latest_active_operator = ''
			operator_found = false;
			len = user_entry.length;
			for(var index = 0; index < len; index++){
				if(has_active_operator)
					break;
				if(operator_found){
					if(find_operator(user_entry[index])){
						latest_active_operator = user_entry[index]
						has_active_operator = true
					}
					else
						num2 = num2+user_entry[index]
				}
				else{
					if(find_operator(user_entry[index]) && index != 0){ //&& index != 0 is used for negative numbers
						if(has_active_operator){
							latest_active_operator = user_entry[index] //store lateset operator found
						}
						else{
							operator_type = user_entry[index]
							operator_found = true
							prev_active_operator = user_entry[index] //store previous operator found
						}
					}
					else if(find_operator(user_entry[index]) && index == 0 && len == 2)
						break
					else
						num1 = num1+user_entry[index]
				}
			}//end of for loop
			if(has_active_operator && num2 != ''){
				compute_results(num1, num2, prev_active_operator)
				USER_PROCESSES = entry.value+latest_active_operator
				entry.value = USER_PROCESSES
			}
			else if(has_active_operator && num2 == ''){//should error ex: user type 2++ or 23-+ etc.
				len = USER_PROCESSES.length-1;
				user_entry = USER_PROCESSES;
				USER_PROCESSES = ''
				for(var index = 0; index < len; index++){
					USER_PROCESSES = USER_PROCESSES+user_entry[index]
				}
				entry.value = USER_PROCESSES
			}
			else if(operator_found && num2 != '' || operator_found && num1 != ''){
				compute_results(num1, num2, operator_type)
			}
			else{
				USER_PROCESSES = ''
				entry.value = USER_PROCESSES
			}
		break;
		case '-':
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
			user_entry = entry.value
			num1 = num2 = '';
			operator_type = ''
			has_active_operator = false;
			prev_active_operator = latest_active_operator = ''
			operator_found = false;
			len = user_entry.length;
			for(var index = 0; index < len; index++){
				if(has_active_operator)
					break;
				if(operator_found){
					if(find_operator(user_entry[index])){
						latest_active_operator = user_entry[index]
						has_active_operator = true
					}
					else
						num2 = num2+user_entry[index]
				}
				else{
					if(find_operator(user_entry[index]) && index != 0){
						if(has_active_operator){
							latest_active_operator = user_entry[index] //store lateset operator found
						}
						else{
							operator_type = user_entry[index]
							operator_found = true
							prev_active_operator = user_entry[index] //store previous operator found
						}
					}
					else
						num1 = num1+user_entry[index]
				}
			}//end of for loop
			if(has_active_operator && num2 != ''){
				compute_results(num1, num2, prev_active_operator)
				USER_PROCESSES = entry.value+latest_active_operator
				entry.value = USER_PROCESSES
			}
			else if(has_active_operator && num2 == ''){//should error ex: user type 2++ or 23-+ etc.
				len = USER_PROCESSES.length-1;
				user_entry = USER_PROCESSES;
				USER_PROCESSES = ''
				for(var index = 0; index < len; index++){
					USER_PROCESSES = USER_PROCESSES+user_entry[index]
				}
				entry.value = USER_PROCESSES
			}
			else if(operator_found && num2 != ''){
				compute_results(num1, num2, operator_type)
			}
		break;
		case '*':
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
			user_entry = entry.value
			num1 = num2 = '';
			operator_type = ''
			has_active_operator = false;
			prev_active_operator = latest_active_operator = ''
			operator_found = false;
			len = user_entry.length;
			for(var index = 0; index < len; index++){
				if(has_active_operator)
					break;
				if(operator_found){
					if(find_operator(user_entry[index])){
						latest_active_operator = user_entry[index]
						has_active_operator = true
					}
					else
						num2 = num2+user_entry[index]
				}
				else{
					if(find_operator(user_entry[index]) && index != 0){
						if(has_active_operator){
							latest_active_operator = user_entry[index] //store lateset operator found
						}
						else{
							operator_type = user_entry[index]
							operator_found = true
							prev_active_operator = user_entry[index] //store previous operator found
						}
					}
					else if(find_operator(user_entry[index]) && index == 0 && len == 2)
						break; //invalid operator has comes first
					else
						num1 = num1+user_entry[index]
				}
			}//end of for loop
			if(has_active_operator && num2 != ''){
				compute_results(num1, num2, prev_active_operator)
				USER_PROCESSES = entry.value+latest_active_operator
				entry.value = USER_PROCESSES
			}
			else if(has_active_operator && num2 == ''){//should error ex: user type 2++ or 23-+ etc.
				len = USER_PROCESSES.length-1;
				user_entry = USER_PROCESSES;
				USER_PROCESSES = ''
				for(var index = 0; index < len; index++){
					USER_PROCESSES = USER_PROCESSES+user_entry[index]
				}
				entry.value = USER_PROCESSES
			}
			else if(operator_found && num2 != '' || operator_found && num1 != ''){
				compute_results(num1, num2, operator_type)
			}
			else{
				USER_PROCESSES = ''
				entry.value = USER_PROCESSES
			}
		break;
		case '/':
			USER_PROCESSES += params;
			entry.value = USER_PROCESSES
			user_entry = entry.value
			num1 = num2 = '';
			operator_type = ''
			has_active_operator = false;
			prev_active_operator = latest_active_operator = ''
			operator_found = false;
			len = user_entry.length;
			for(var index = 0; index < len; index++){
				if(has_active_operator)
					break;
				if(operator_found){
					if(find_operator(user_entry[index])){
						latest_active_operator = user_entry[index]
						has_active_operator = true
					}
					else
						num2 = num2+user_entry[index]
				}
				else{
					if(find_operator(user_entry[index]) && index != 0){
						if(has_active_operator){
							latest_active_operator = user_entry[index] //store lateset operator found
						}
						else{
							operator_type = user_entry[index]
							operator_found = true
							prev_active_operator = user_entry[index] //store previous operator found
						}
					}
					else if(find_operator(user_entry[index]) && index == 0 && len == 2)
						break;
					else
						num1 = num1+user_entry[index]
				}
			}//end of for loop
			if(has_active_operator && num2 != ''){
				compute_results(num1, num2, prev_active_operator)
				USER_PROCESSES = entry.value+latest_active_operator
				entry.value = USER_PROCESSES
			}
			else if(has_active_operator && num2 == ''){//should error ex: user type 2++ or 23-+ etc.
				len = USER_PROCESSES.length-1;
				user_entry = USER_PROCESSES;
				USER_PROCESSES = ''
				for(var index = 0; index < len; index++){
					USER_PROCESSES = USER_PROCESSES+user_entry[index]
				}
				entry.value = USER_PROCESSES
			}
			else if(operator_found && num2 != '' || operator_found && num1 != ''){
				compute_results(num1, num2, operator_type)
			}
			else{
				USER_PROCESSES = ''
				entry.value = USER_PROCESSES
			}
		break;
		case '=':
			len = USER_PROCESSES.length;
			if(len > 0){
				user_entry = USER_PROCESSES;
				results = 0.00;
				num1 = num2 = '';
				operator_type = ''
				operator_found = false;
				for(var index = 0; index < len; index++){
					if (operator_found){
						num2 = num2+user_entry[index]
					}
					else{
						if(find_operator(user_entry[index]) && index != 0){
							operator_type = user_entry[index]
							operator_found = true
						}
						else
							num1 = num1+user_entry[index]
					}
				}//end of for loop
				compute_results(num1, num2, operator_type)
			}
			else ;
		break;
		case 'clear':
			USER_PROCESSES = '';
			entry.value = USER_PROCESSES
		break;
	}
}
function user_input(){
	USER_PROCESSES = entry.value
	user_entry = USER_PROCESSES

	if(!(/[a-zA-Z_]/g).test(user_entry)){ //check if users type a letter
		entry_len = user_entry.length
		operator_type = latest_active_operator = ''
		shouldStop = operator_found = false
		consecutive_op = ''
		num1 = num2 = ''

		for(var index = 0; index < entry_len; index++){
			if(shouldStop)
				break
			else if(operator_found){
				if(find_operator(user_entry[index])){
					latest_active_operator = user_entry[index]
					shouldStop = true
				}
				else{
					num2 = num2+user_entry[index]
					consecutive_op = ''
				}
			}
			else{
				if(find_operator(user_entry[index]) && index != 0){
					operator_type = user_entry[index]
					operator_found = true
					consecutive_op = user_entry[index]
				}
				else{
					if(user_entry[index] != '+' && user_entry[index] != '*'
						&& user_entry[index] != '/'){
						consecutive_op = (find_operator(user_entry[index]) && 
							consecutive_op == '')?user_entry[index]:''
						num1 = num1+user_entry[index]
					}
					else{
						entry.value = ''
						break
					}
				}
			}
		}//end of for loop
		if(shouldStop){
			if(consecutive_op == ''){
				compute_results(num1, num2, operator_type)
				entry.value = entry.value+latest_active_operator
			}
			else{
				new_entry = ''
				for(var index = 0; index < entry_len-1; index++){
					new_entry = new_entry+user_entry[index]
				}
				entry.value = new_entry
			}
		}
	}
	else{
		len = user_entry.length-1
		altered_entry = ''
		for(var index = 0; index < len; index++){
			altered_entry = altered_entry+user_entry[index]
		}
		user_entry = altered_entry
		entry.value = user_entry
	}
}
function find_operator(params){
	if(params == '+')
		return true
	else if (params == '-')
		return true;
	else if (params == '*')
		return true;
	else if (params == '/')
		return true;
	else return;
}
function compute_results(num1, num2, operator_type){
	results = 0.00;
	if(operator_type == '+'){
		if(num1 != '' && num2 != ''){
			num1 = parseFloat(num1)
			num2 = parseFloat(num2)
			results = num1+num2;
			entry.value = results.toFixed(2)
			USER_PROCESSES = entry.value
		}
		else if(num1 != '' && num2 == ''){
			results = num1
			USER_PROCESSES = results +'+'
		}
		else if(num1 == '' && num2 != ''){
			results = num2
			USER_PROCESSES = results +'+'
		}
		else{
			USER_PROCESSES = ''
			entry.value = USER_PROCESSES
		}
	}
	else if (operator_type == '-'){
		if(num1 !='' && num2 !=''){
			num1 = parseFloat(num1)
			num2 = parseFloat(num2)
			results  = num1-num2
			entry.value = results.toFixed(2)
			USER_PROCESSES = entry.value
		}
		else if(num1 != '' && num2 == ''){
			results = num1
			USER_PROCESSES = results +'-'
		}
		else if(num1 == '' && num2 != ''){
			results = num2
			USER_PROCESSES = results +'-'
		}
		else entry.value = ''
	}
	else if (operator_type == '*'){
		if(num1 !=''  && num2 !=''){
			num1 = parseFloat(num1)
			num2 = parseFloat(num2)
			results  = num1*num2
			entry.value = results.toFixed(2)
			USER_PROCESSES = entry.value
		}
		else if(num1 != '' && num2 == ''){
			results = num1
			USER_PROCESSES = results +'*'
		}
		else if(num1 == '' && num2 != ''){
			results = num2
			USER_PROCESSES = results +'*'
		}
		else entry.value = ''
	}
	else if (operator_type == '/'){
		if(num1 !='' && num2 !=''){
			num1 = parseFloat(num1)
			num2 = parseFloat(num2)
			results  = num1/num2
			entry.value = results.toFixed(2)
			USER_PROCESSES = entry.value
		}
		else if(num1 != '' && num2 == ''){
			results = num1
			USER_PROCESSES = results +'/'
		}
		else if(num1 == '' && num2 != ''){
			results = num2
			USER_PROCESSES = results +'/'
		}
		else entry.value = ''
	}
	if(results == 0){
		if(num1 != '' && num2 == ''){
			USER_PROCESSES = num1
		}
		else if(num1 == '' && num2 != ''){
			USER_PROCESSES = num2
		}
		else if(num1 != '' && num2 != ''){
			USER_PROCESSES = results
			entry.value = USER_PROCESSES
		}
		else{
			USER_PROCESSES = ''
			entry.value = ''
		}
	}
}

// it uses a 2 decimal places so if your answer is 0.000112233...
// expect that it will return a 0.00