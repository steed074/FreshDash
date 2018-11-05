
 $( document ).ready(function() {



   $.ajax(
       {
           url: "https://jphmaintenance.freshdesk.com/helpdesk/tickets/filter/all_tickets?format=json",
           type: 'GET',
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           headers: {
               "Authorization": "Basic " + btoa('BY2dRyoVgi14hTvttDsd' + ":" + 'X')
           },
           data: { get_param: 'value' },
           success: function(data)
           {

              //  console.log(data);
               var i = 0;
               $.each(data, function(index, element) {

                   var phoneNumber;

                   if (element.custom_field.phone_number_78562 === null) {
                     var phoneNumber = 'not given';
                   } else {
                     var phoneNumber = element.custom_field.phone_number_78562;
                   }
		
                  if (element.status_name == "Open" || "Pending") {
                     i++;
                   $('.ticks').append("<div class='col-md-3'><div class='panel panel-success center-block'><div class='panel-heading'><h3 class='panel-title'>"+element.subject+" | "+element.created_at.substring(5,10)+" | ext. "+phoneNumber+"</h3></div><div class='panel-body'>"+element.description+"</div><div class='panel-footer text-right'>"+element.ticket_type+" from "+element.requester_name+" @ "+element.custom_field.region_78562+"</div></div></div>");
                 }
               });
               $('.notif').append(i);
           }
       })

  });
