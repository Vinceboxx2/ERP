/**
 * called in Calendar.js
 * @returns
 */
function CalendarSecond(){
	dateFun();

	PreviDay();

	NextDay();

	Calendar.prototype.bindDate = calendarBindDate(date);
	Calendar.prototype.bindHeader = calendarBindHeader();	
		
	calendarOnDoSomething();


	var Nan0Mod = function()
	{
		//	return isNaN(this) ? 0 : this;
		if(isNaN(this)){
			return 0;
		}else{
			return this;
		}
	}


	var ToFormatStringMod = calendarToFormatString(fs);

	calendarEnd();

}