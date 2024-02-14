$('document').ready(function(){
$("#dateTimeInput").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
    beforeShowDay: function(date) {
        var show = true;
        if(document.getElementById('mechanicsSelect').value == 'jules'){
            if(date.getDay()==2||date.getDay()==4 ||date.getDay()==6 ||date.getDay()==0) show=false
            return [show];
        }else{
            if(date.getDay()==1||date.getDay()==3 ||date.getDay()==5 ||date.getDay()==0) show=false
            return [show];
        }

     }
});

})