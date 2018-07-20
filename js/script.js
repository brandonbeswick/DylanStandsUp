

const menuButton = document.querySelector('.menu-butt i');
const menuButtonClose = document.querySelector('.top-menu .fa-close');


function dropMenu(){
    var findMenu = document.querySelector('.top-menu');
    

         findMenu.classList.add("grow");
}
function dropMenuClose(){
    var findMenu = document.querySelector('.top-menu');
    

         findMenu.classList.remove("grow");
}

menuButton.addEventListener('click', dropMenu);


menuButtonClose.addEventListener('click', dropMenuClose);



var findSlides = document.querySelectorAll('.slide');

var slideCount = findSlides.length;



function moveSlides(){
        
    
    if(findSlides[0].classList.contains('active') == true){
        
        findSlides[0].classList.remove('active');
        findSlides[1].classList.add('active');
        
    }
    else if(findSlides[1].classList.contains('active') == true){
        findSlides[1].classList.remove('active');
        findSlides[2].classList.add('active'); 
    }
    else if(findSlides[2].classList.contains('active') == true){
        findSlides[2].classList.remove('active');
        findSlides[3].classList.add('active'); 
    }
    else{
        findSlides[3].classList.remove('active');
        findSlides[0].classList.add('active');         
    }
    

    
     
}

setInterval(moveSlides, 4500);

// Select all links with hashes
jQuery('a[href*="#"]')

  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    

    var menuCheck = document.querySelector('.top-menu').classList;

    if(menuCheck.contains('grow') == true){
        var findMenu = document.querySelector('.top-menu');
        findMenu.classList.remove("grow");
    }
    else{

    }
 
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var Ptarget = jQuery(target);
          Ptarget.focus();
          if (Ptarget.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            Ptarget.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            Ptarget.focus(); // Set focus again
          };
        });
      }
    }
  });


const calReq = new XMLHttpRequest();
const apiDate = new Date(Date.now()).toISOString();


calReq.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/1ms61m0roo4727kfi32sbdfaqc%40group.calendar.google.com/events?key=AIzaSyB0rv6PYpTsuqDk1QkJ11WrXa655On28Qc',true);


function daysFromNow(date){
            var todaysDate = new Date();
            var todaysYear = todaysDate.getFullYear();
            var todaysMonth = todaysDate.getMonth();
            var todaysDay = todaysDate.getDate();
            var todaysHour = todaysDate.getHours();
            
            var eventDate = date;
            var eventYear = eventDate.getFullYear();
            var eventMonth = eventDate.getMonth();
            var eventDay = eventDate.getDate();
            var eventHour = eventDate.getHours();
            if(todaysYear == eventYear){
                
                if(todaysMonth == eventMonth){
                    
                    if(todaysDay == eventDay){
                        var timeSince = (todaysHour - eventHour) + "h";
                    }
                    else{
                        var timeSince = (todaysDay - eventDay) + "d";                     
                    }
                }
                else{
                    var timeSince = (todaysMonth - eventMonth) + "mo";
                }   
            }
            else{
                if((todaysYear - eventYear) == 1){
                    var lastYearMonth = 11 - (eventMonth + 1);
                    var thisYearMonth = todaysMonth + 1;
                    var timeSince = (thisYearMonth + lastYearMonth) + "mo";
                }
                else{
                    var timeSince = (todaysYear - eventYear) + "y";
                }
            }

            return timeSince;
        }         
function makeElement(el, cl, text, size){
    var makeEl = document.createElement(el);
    makeEl.setAttribute('class', cl);
    var makeText = document.createElement(size);
    makeText.textContent = text;
    
    makeEl.appendChild(makeText);

    return makeEl
}
function makeATag(link, words){
    var makeTag = document.createElement('a');
    makeTag.setAttribute('href', link);
    makeTag.textContent = words;
    //console.log(makeTag);
    return makeTag;
}
function getMonthName(monthNumber){
    if(monthNumber == 0){
        var monthName = "January";
    }
    else if(monthNumber == 1){
        var monthName = "February";
    }
    else if(monthNumber == 2){
        var monthName = "March";
    }
    else if(monthNumber == 3){
        var monthName = "April";        
    }
    else if(monthNumber == 4){
        var monthName = "May";
    }
    else if(monthNumber == 5){
        var monthName = "June";        
    }
    else if(monthNumber == 6){
        var monthName = "July";        
    }
    else if(monthNumber == 7){
        var monthName = "August";
    }
    else if(monthNumber == 8){
        var monthName = "September";
    }
    else if(monthNumber == 9){
        var monthName = "October";
    }
    else if(monthNumber == 10){
        var monthName = "November";
    }
    else{ 
        var monthName = "December";
    }
    return monthName;
}



/*
calReq.onload = function(){
    var rawData = JSON.parse(this.response);
    var eventsTotal = rawData.items.length;
    var eventList = [];
    console.log(rawData);
};
*/
calReq.onload = function(){
    var rawData = JSON.parse(this.response);
    var eventsTotal = rawData.items.length;
    var eventList = [];
    var getCal = document.querySelector('.calendar');
    var frontCal = document.querySelector('.front-cal');
    
    eventList.push(
        ...rawData.items
    );
    
    console.table(eventList);
    eventList.sort( (a,b) => a.start.dateTime.localeCompare(b.start.dateTime) );    

        eventList.forEach(event =>{


                var eventTimeAndDateRaw = event.start.dateTime;
                var eventTandD = new Date(eventTimeAndDateRaw);

                var eventDay = eventTandD.getDate();
                var eventMonth = eventTandD.getMonth();
                var cleanMonth = getMonthName(eventMonth);

                var getHour = eventTandD.getHours();
                var getMin = eventTandD.getMinutes();
                if(getHour >= 12){
                    var cleanHour = getHour - 12;
                }
                else{
                    var cleanHour = getHour;            
                }
                if(getMin == 0){
                    if(getHour >= 12){
                        var cleanMin = getMin + "0 pm";                
                    }
                    else{
                        var cleanMin = getMin + "0 am";   
                    }

                }
                else{
                    if(getHour >= 12){
                        var cleanMin = getMin + "pm";                
                    }
                    else{
                        var cleanMin = getMin + "am";   
                    }
                }

                var cleanTime = cleanMonth + " " + eventDay + ", " + cleanHour +":" +  cleanMin;
                if(event.location == undefined){

                    var locationRaw = "Private event. Click for info,";
                }  
                else{

                    var locationRaw = event.location;

                }
                //console.log(locationRaw);
                var location = locationRaw.substr(0, locationRaw.indexOf(','));
                var title = event.summary;

                var makeCell1 = makeElement('div','calCel');
                var makeHtag1 = makeElement('p');
                makeHtag1.textContent = title;
                makeCell1.appendChild(makeHtag1);

                var makeCell2 = makeElement('div','calCel');
                var makeHtag2 = makeElement('p');
                makeHtag2.textContent = cleanTime;
                makeCell2.appendChild(makeHtag2);

                var makeCell3 = makeElement('div','calCel');
                var venueRaw = locationRaw;

                var venueName = venueRaw.substr(0, venueRaw.indexOf(','));     

                    venueRaw = venueRaw.split(' ').join('+');

                var choppedVenue = new Array();   

                for (var x = 0; x < venueRaw.length; x++){
                    choppedVenue.push(venueRaw[x]);
                    if(x != choppedVenue.length-1){
                        venueRaw.push(" ");
                    }
                }   
                if(locationRaw == "Private event. Click for info,"){
                    var showLinkString = "mailto:dylanstandsup@gmail.com";            
                }
                else{
                    var showLinkString = "https://www.google.com/search?q=" + venueRaw;
                }
                var makeVenueTag = makeATag(showLinkString);
                makeVenueTag.setAttribute('target', 'blank');
                var makeHtag3 = makeElement('p', 'venue-link');
                makeHtag3.textContent = location;
                makeVenueTag.appendChild(makeHtag3)
                makeCell3.appendChild(makeVenueTag);

                getCal.appendChild(makeCell1);        
                getCal.appendChild(makeCell2);        
                getCal.appendChild(makeCell3);       

        });    

        
        
    
    var seeMore = makeElement('div','see-more-events');
    var makePtag = makeElement('p');
    makePtag.innerHTML = `
        Insterseted in seeing further into the future, click <a href="calendar">here</a> to see ALL of Brandon's current bookings!
    `;
    seeMore.appendChild(makePtag);
    if(frontCal == undefined){
        
    }
    else{
        frontCal.appendChild(seeMore);
    }
    
};
    
calReq.send();