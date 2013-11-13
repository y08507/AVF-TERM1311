/**
 * Created by Project31312 on 10/30/13.
 */
/*
 * Author: Luis Camacho Jr.
 * Full Sail University
 * Course: AVF
 * Term: 1311
 * Activity Demo App Week 2
 */

//global ajax setting
$.ajaxSetup({
    error: function (err) {
        console.log("error", err);
    }
});

//First page code for ID:pageOne
$('#pageOne').on('pageinit', function () {
    //code needed for home page goes here
    console.log("pageOne page is Loaded");
    $('#week1').on('click', function () {
        console.log("week 1 Dynamic page created");
        var researchTopics = $("<section data-role='page' data-url=Week-1><header data-role='header' data-theme='d'>" +
            "<h1>Week 1 Data Research, Project Intent</h1><a href='#pageOne' data-icon='back' data-iconpos='' data-direction='reverse' class='ui-btn-left'>back</a></header>" +
            "<section data-role='content' id='dynamicWeek1'>" +
            "<section  data-role='collapsible' data-theme='d' id='listJson'>" +
            "<h4><br>1. Less obvious perks of using 'live' data resources include logins and payments." +
            "How could Twitter be used in these two scenarios?</h4>" +
            "<p>American Express has tapped into the power of Twitter by utilizing its live data source to showcase special offers and deals. " +
            "It’s cardholders can instantly make purchases by either clicking or responding with a #hashtag, which is instantly synced to its cardholder’s Amex card with the use of AMEX SYNC. American Express securely syncs your payment information with your Twitter login account creating a seamless transaction to occur based on offers you find through the live data being streamed to your mobile device.</p>" +
            "<p>Following this model you can implement a live twitter feed showcasing an application specific product advertisement and use a service like Stripe for payment through a secure Twitter login.</p>" +
            "</section>" +
            "<section  data-role='collapsible' data-theme='d' id='listJson'>" +
            "<h4>2. Visit Programmableweb.com and search for JSON-P data sources. Why would we need JSON-P, specifically?</h4>" +
            "<p>We require the use of JSON-P for the specific use of API’s. " +
            "<p>JSON-P allows the developer to bypass the Same Origin Policy by utilizing a security flaw that has always existed.</p>" +
            "That security flaw would be the use of a script tag to circumvent, and allows cross-domain request.</p>" +
            "</section>" +
            "<section  data-role='collapsible' data-theme='d' id='listJson'>" +
            "<h4>3. Based on the JSON-P search results: what data resource(s) do you think might pair well with which types of Native device features?</h4>" +
            "<p>I’m interested in Springpad’s office categorized API to integrate with the native camera feature." +
            "Being able to provide a photo with detailed notes on the project or idea would be an awesome addition to add to my app.</p>" +
            "</section>" +
            "<section  data-role='collapsible' data-theme='d' id='listJson'>" +
            "<h4>4. Please describe any design and functionality intentions you may have for your Demo app components this month.</h4>" +
            "<p>As far as the design goes, I want to implement a clean design that does'n’t distract the user’s attention with too much going on in the UI. " +
            "What I intend to implement into the functionality of the app is APIs that provide resources which directly relate to the User’s project or idea. " +
            "I plan on also narrowing down the concept to a specific project or idea. For example, " +
            "I have become immensely involved with Raspberry Pi single board computer and would like this app to be " +
            "dedicated to sharing resources and ideas in development within the community.</p>" +
            "</section>" +
            "<section  data-role='collapsible' data-theme='d' id='listJson'>" +
            "<h4>5. Briefly describe some past 'lessons learned' regarding workflow as it relates to research, design, development, etc.</h4>" +
            "<p>The workflow we have been instructed to follow these past months has assisted immensely in several areas of my personal development. " +
            "From the initial creation phase as we are brainstorming and creating a mind map / flowchart, to rolling out a mock up of the wireframe, " +
            "to then writing the code are all parts of the workflow we have been taught to use; I have found that these steps have helped in visualizing " +
            "and understanding the code process and help me begin thinking my way through creating functions and resolving issues. " +
            "It has been a learning process, but following the steps we’ve been taught keeps you on a structured path.</p>" +
            "</section>" +
            "</section>");
        researchTopics.appendTo($.mobile.pageContainer);
        $.mobile.changePage(researchTopics);
    });
    $('#week2').on('click', function () {
        console.log("week 2 Dynamic page created");
        alert("Temporarily Disabled");
    });
    $('#week3').on('click', function () {
        console.log("week 3 Dynamic page created");
        alert("Temporarily Disabled");
    });
});

//Instagram Data API loaded via AJAX
$('#viewApiGrid').on('pageinit', function () {
    console.log("Target acquired by jQuery");
    alert("Instagram API Data via ajax Loading");

    $("#ideaApi").empty();
    var instaApi = "https://api.instagram.com/v1/tags/raspberrypi/media/recent?callback=?&amp;client_id=c2ab9b6d7c5e4ad599076ec639db7bea&amp;min_id=10";
    $.ajax({
        url: instaApi,
        type: "GET",
        dataType: "jsonp",
        success: function (activityApi, status) {
            console.log(status, activityApi);
            //Dynamically created grid for displaying images
            var instaApiOutput = '';
            for (var i = 0; i < activityApi.data.length; i++) {
                var tags = activityApi.data[i].tags;
                var image = activityApi.data[i].images.standard_resolution.url;
                //Discussion on lynda.com on uses of modulus operator which resolves remainder of a division problem. usage in designing a dynamic grid
                var uiBlockType = ((i % 2) === 1) ? 'b' : 'a';
                instaApiOutput += '<section class="ui-block-' + uiBlockType + '">';
                instaApiOutput += '<img src="' + image + '"alt="' + tags + '"/>';
                instaApiOutput += '<h3 class="tags">' + tags[0] + '</h3>';
                instaApiOutput += "</section>";
                // Function for listview output with mobile page container for details
                /* $("#ideaApi").empty();
                 $.each(activityApi.data, function(index, details){
                 var details = $(this);
                 var makeSubList = $("<li></li>");
                 var makeSubLi = $("<li><a href='#'><img src='" + details.images.thumbnail.url + "'alt='"+"'/><h2>"+ details.tags[0] +"</h2></a></li>");
                 var makeLink = $("<a href='#'></a>");
                 console.log(makeSubLi);
                 makeLink.on('click', function () {

                 console.log("Dynamically creating page container for images");
                 var newImageData = $("<section data-role='page' data-url=Instagram-API><header data-role='header' data-theme='d'><h1>" + details.user.id + "</h1><a href='#viewApi' data-icon='back' data-iconpos='' data-direction='reverse' class='ui-btn-left'>back</a></header><section data-role='content'><ul  data-role='listview' data-theme='d' id='listJson'><li><br>" + details.user.id + "</li><li><br>" + details.user.id + "</li><li><br>" + details.user.id + "</li><li><br> " + details.user.id + "</li></ul></section><footer data-role='footer' data-theme='b' data-position='fixed' style='overflow:hidden;'><nav data-role='navbar' data-position='fixed' data-iconpos='bottom'><ul><li><a href='#' class='' data-icon='plus'>Add New</a></li><li><a href='#' class='editData' data-icon='edit'>Edit</a></li><li><a href='#' class='deleteData' data-icon='delete'>Delete</a></ul></nav></footer></section>");
                 newImageData.appendTo($.mobile.pageContainer);
                 $.mobile.changePage(newImageData);
                 });
                 makeLink.html(makeSubLi);
                 makeSubList.append(makeLink).appendTo("#ideaApi");*/
            } // end of activityApi function
            $('#apiGrid').html(instaApiOutput); // inputs
            //$('#ideaApi').listview('refresh');
        } //end of success function
    }); //end of ajax
    console.log("AJAX");
}); //end of viewApiGrid

$('#viewApiGridB').on('pageinit', function () {
    console.log("Target acquired by jQuery");
    alert("Rotten Tomatoes API Data via ajax Loading");
    var urlApi = "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/upcoming.json?apikey=c8cmt7jbts25ugfs6ptwdzkh";

    $.ajax({
        url: urlApi,
        type: "GET",
        dataType: "jsonp",
        success: function (rtactivity, status) {
            console.log(status, rtactivity);
            //Dynamically created grid for displaying images
            var rtApiOutput = '';
            for (var i = 0; i < rtactivity.movies.length; i++) {
                console.log(rtactivity.movies);
                var tags = rtactivity.movies[i].release_dates.dvd;
                var image = rtactivity.movies[i].posters.detailed;
                //Discussion on lynda.com on uses of modulus operator which resolves remainder of a division problem. usage in designing a dynamic grid
                var uiBlockType = ((i % 2) === 1) ? 'b' : 'a';
                rtApiOutput += '<section class="ui-block-' + uiBlockType + '">';
                rtApiOutput += '<img src="' + image + '"alt="' + tags + '"/>';
                rtApiOutput += '<h3 class="tags">'+ "DVD Release Date " + tags + '</h3>';
                rtApiOutput += "</section>";
            } // end of activityApi function
            $('#apiGridB').html(rtApiOutput); // inputs data to index.html
        } //end of success function
    }); //end of ajax
    console.log("AJAX");
}); //end of viewApiGridB