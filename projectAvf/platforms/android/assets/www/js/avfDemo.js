/**
 * Created by Project31312 on 10/30/13.
 */
/*
 * Author: Luis Camacho Jr.
 * Full Sail University
 * Course: AVF
 * Term: 1311
 * Activity Demo App Week 3
 */


document.addEventListener("deviceready", onDeviceReady, false);

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
            var researchTopicsB = $("<section data-role='page' data-url=Week-1><header data-role='header' data-theme='d'>" +
                "<h1>Week 2 Discuss Accessibility</h1><a href='#pageOne' data-icon='back' data-iconpos='' data-direction='reverse' class='ui-btn-left'>back</a></header>" +
                "<section data-role='content' id='dynamicWeek2'>" +
                "<section  data-role='collapsible' data-theme='d' id='listJsonB'>" +
                "<h4><br>1. What are some of the ways that you could change your HTML on your Demo app to be more accessible? " +
                "(Remember, you can use the Section tag with jQuery, for instance)</h4>" +
                "<p>The article pointed out several key points to be aware of when structuring your html, not only for semantic value but, as the article explained, for accessibility needs." +
                "One key value that can make the Demo app more accessible is by providing descriptive ALT attributes, which will enhance the users experience and also benefit the sematic layout of the page.</p>" +
                "</section>" +
                "<section  data-role='collapsible' data-theme='d' id='listJsonB'>" +
                "<h4>2. Visit a video service on the web (like YouTube) and search for " + " Screen Reader Demo" + " and " + " Mobile Screen Reader " + " - what are some of the common frustrations" +
                "(or common support mechanisms) that you see among the examples that are given - how could you fix them (or use them)?</h4>" +
                "<p>The common comment I was exposed to in my research of screen readers was that the software was expensive. " +
                "<p>Upon further research I located an incredible not-for-profit-organization called NV Access, which has developed a free open source software for accessibility called NVDA.</p>" +
                "What also captivated my attention immediately was that this screen reader was developed for users by users implying that the design is effective.</p>" +
                "<p>I was also thrilled that NVDA is open source software, which we as mobile developers can potentially contribute ideas for further implementation of this software into mobile platforms. " +
                "At this point, the software is developed on the windows platform for desktop use. From the testimonials given by actual users of the software, the response is great. " +
                "We can assist in the mobile development of this software by actively participating in the community site with ideas or testing the software in test apps. " +
                "Just as media queries were developed to enhance the user’s experience by adapting to a diverse array of mobile devices, " +
                "potentially there should be devised a type of query to be used in the css style sheet for accessibility specifically for graphic rich sites.</p>" +
                "</section>" +
                "<section  data-role='collapsible' data-theme='d' id='listJsonB'>" +
                "<h4>3. Devices: Please list two devices (and some of their features) that are made specifically to support Accessibility.</h4>" +
                "<p>Devices that support Accessibility:" +
                "<br>iPhone" +
                "<br>Android</p>" +
                "<p>The iPhone has a vast amount of accessibility features one for example there is “Siri” voice command software, " +
                "which goes beyond just the normal voice command software and becomes your mobile assistant. " +
                "Allowing you to take control of your device with the power of your voice.  " +
                "The iPhone also allows for Bluetooth connectivity to a keyboard or refreshable braille displays, and this is only a few of the accessibility features iPhone offers.</p>" +
                "<p>The Android’s open architecture design would suggest a limitless amount of accessibility adaptions that can be developed and deployed by its vast community of developers. " +
                "Android Jellybean 4.2 accessibility features are speech recognition, which does not require an Internet connection; " +
                "Gesture support, which takes advantage of the touch screen abilities of the device and based on the object you are touching, " +
                "allows the user to hear the name of that specific object.</p>" +
                "</section>" +
                "<section  data-role='collapsible' data-theme='d' id='listJsonB'>" +
                "<h4>4. Mobile Apps: Please list two apps (either Android or iOS, or both) that are made specifically to support Accessibility.</h4>" +
                "<p>Android Apps: " +
                "<br>" +
                "<br>Code Factory’s " + " Mobile Accessibility " +
                "<br>https://play.google.com/store/apps/details?id=es.codefactory.android.app.ma.vocalizerenusprintcarrier</p> " +
                "<p><br>Subway Accessibility NYC " +
                "<br>https://play.google.com/store/apps/details?id=com.eddflrs.accessible_nyc</p>" +
                "</section>");
            researchTopicsB.appendTo($.mobile.pageContainer);
            $.mobile.changePage(researchTopicsB);
        });
    $('#week3').on('click', function () {
        console.log("week 3 Dynamic page created");
        alert("Temporarily Disabled");
    });
});

//Instagram Data API loaded via AJAX
$('#viewApiGrid').on('pageinit', function () {
    console.log("Target acquired by jQuery");
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
                var tags = rtactivity.movies[i].title;
                var image = rtactivity.movies[i].posters.detailed;
                //Discussion on lynda.com on uses of modulus operator which resolves remainder of a division problem. usage in designing a dynamic grid
                var uiBlockType = ((i % 2) === 1) ? 'b' : 'a';
                rtApiOutput += '<section class="ui-block-' + uiBlockType + '">';
                rtApiOutput += '<img src="' + image + '"alt="' + tags + '"/>';
                rtApiOutput += '<h3 class="tags">' + tags + '</h3>';
                rtApiOutput += "</section>";
            } // end of activityApi function
            console.log(rtactivity.movies);
            $('#apiGridB').html(rtApiOutput); // inputs data to index.html
        } //end of success function
    }); //end of ajax
    console.log("AJAX");
}); //end of viewApiGridB

function onDeviceReady() {
//Phone Gap Doc: iOS Quirks set quality below 50 to avoid memory errors on some devices
//Camera options
var settings = {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA
};

    $('#getPic').on('click', function(){
    navigator.camera.getPicture(onSuccess, onFail, settings);
    function onSuccess(imageData) {
        console.log(imageData);
        var camImage = document.getElementById('myImage');
        camImage.src = "data:image/jpeg;base64," + imageData;
    }
    function onFail(message) {
        alert('Device Failure due to: ' + message);
    }
});
    $('#getDirection').on('click', function(){
        navigator.compass.getCurrentHeading(onSuccess, onFail);
        function onSuccess(compassData) {
            var deviceCompass = document.getElementById('nativeCompass');
            deviceCompass.innerHTML = 'Compass Magnetic Heading: ' + compassData.magneticHeading;
        }
        function onFail(message) {
            alert('Device Failure due to: ' + message);
        }
    });
    $('#getDevice').on('click', function(){
        var deviceSpecs = document.getElementById('nativeDevice');
        deviceSpecs.innerHTML = 'Device Model: '    + device.model    + '<br />' +
            'Device Cordova: '  + device.cordova  + '<br />' +
            'Device Platform: ' + device.platform + '<br />' +
            'Device UUID: '     + device.uuid     + '<br />' +
            'Device Version: '  + device.version  + '<br />';
});
    var setInterval = { frequency: 5000 };
    $('#getMotion').on('click', function(){
        navigator.accelerometer.watchAcceleration(onSuccess, onError, setInterval);
        function onSuccess(motion) {
            var deviceMotion = document.getElementById('nativeMotion');
            deviceMotion.innerHTML = 'Acceleration X: ' + motion.x         + '<br />' +
                'Acceleration Y: ' + motion.y         + '<br />' +
                'Acceleration Z: ' + motion.z         + '<br />' +
                'Timestamp: '      + motion.timestamp + '<br />';
        }
        function onError(message) {
            alert('Device Failure due to: ' + message);
        }
    });
    var geoSettings = {
        enableHighAccuracy: true
    };
    $('#getLocation').on('click', function(){
        navigator.geolocation.getCurrentPosition(onSuccess, onFail, geoSettings);
        function onSuccess(geoData) {
            //alert('Geolocation: ' + geoData.coords.latitude + geoData.coords.longitude);
            var deviceGeolocation = document.getElementById('nativeGeo');
            deviceGeolocation.innerHTML = 'Device Latitude: '    + geoData.coords.latitude    + '<br />' +
                'Device Longitude: '  + geoData.coords.longitude  + '<br />' +
                'Device Altitude: ' + geoData.coords.altitude  + '<br />' ;
        }
        function onFail(message) {
            alert('Device Failure due to: ' + message.message + message.code);
        }
    });
}


