
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
  // build scene

// MY FIRST PIN
  var scene = new ScrollMagic.Scene({triggerElement: "#topPin", duration: 1200})
  .setPin("#topPin")
  // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)

  .on("enter", function (e) {
    if(controller.info("scrollDirection")==='FORWARD'){
      $("#topPin").html("This shiny jewely comes<br>at a horrible price");

    }
    else{
       $("#topPin").html("Text3");
    }
    })

          .on("progress", function (e) {
            if(e.progress.toFixed(3)>.5 && e.progress.toFixed(3)<.8){

            // console.log(controller.info("scrollDirection"))

            $("#topPin").html("Diamonds aren't all that valuble in the first place");
            // $("#progress").text(e.progress.toFixed(3));
            console.log(e.progress.toFixed(3))
          }
          })




          .on("leave", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#topPin").html("Text 3");
            }


            else{
              $("#topPin").html("This shiny jewely comes<br>at a horrible price");

            }
            // $("#progress").text(e.progress.toFixed(3));
            // $("#textPin1").text("THIS IS NEW TEXT");
            // console.log("update")

          })

          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: "#goodFruit", duration: 1200, offset: 170})
          .setPin("#goodFruit")
          
          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: "#myList", duration: 1200, offset: 200})
          .setPin("#myList")
          
          .addTo(controller);




          var scene = new ScrollMagic.Scene({triggerElement: "#brandingPin", duration: 1450, offset:120})
          .setPin("#brandingPin")
          // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
        
          .on("enter", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#brandingPin").html("Why the Tiffany branding?");
        
            }
            else{
               $("#brandingPin").html("Grapefruits and diamonds<br>have a lot in common.");
            }
            })
        
                  .on("progress", function (e) {
                    if(e.progress.toFixed(3)>.5 ){
        
                    // console.log(controller.info("scrollDirection"))
        
                    $("#brandingPin").html("Grapefruits and diamonds<br>have a lot in common.");
                    // $("#progress").text(e.progress.toFixed(3));
                    console.log(e.progress.toFixed(3))
                  }
                  })
        
        
        
        
                  .on("leave", function (e) {
                    if(controller.info("scrollDirection")==='FORWARD'){
                      $("#brandingPin").html("Grapefruits and diamonds<br>have a lot in common.");
                    }
        
        
                    else{
                      $("#brandingPin").html("Why the Tiffany branding?");
        
                    }
        
                  })
        
                  .addTo(controller);




                  

                  var scene = new ScrollMagic.Scene({triggerElement: "#summaryPin", duration: 1600, offset: 200})
                  .setPin("#summaryPin")
                  
                  .addTo(controller);



                  var scene = new ScrollMagic.Scene({triggerElement: "#summaryPin2", duration: 1600, offset: 200})
                  .setPin("#summaryPin2")
                  
                  .addTo(controller);






  var scene = new ScrollMagic.Scene({triggerElement: "#textPin1", duration: 1000})
          .setPin("#textPin1")
          // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)

          .on("enter", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPin1").html("Buying food in supermarkets leaves us<br>detatched from the origins of our produce.");

            }
            else{
              $("#textPin1").html("We’re hidden from the labor abuses and suffering<br>that takes place to bring us our produce.");
            }
          })

          .on("progress", function (e) {
            if(e.progress.toFixed(3)>.6 && e.progress.toFixed(3)<.8){

            // console.log(controller.info("scrollDirection"))


            $("#textPin1").html("<span class='left-nudge'>We’re hidden from the labor abuses and suffering <br>that takes place to bring us our produce.</span>");
            // $("#progress").text(e.progress.toFixed(3));
            console.log(e.progress.toFixed(3))
          }

          if(e.progress.toFixed(3)>.6){
            $("#textPin1").html("We’re hidden from the labor abuses and suffering<br>that takes place to bring us our produce.");
          }
					})




          .on("leave", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPin1").html("We’re hidden from the labor abuses and suffering<br>that takes place to bring us our produce.");
            }


            else{
              $("#textPin1").html("Buying food in supermarkets leaves us<br>detatched from the origins of our produce.");

            }
            // $("#progress").text(e.progress.toFixed(3));
						// $("#textPin1").text("THIS IS NEW TEXT");
            // console.log("update")

          })

          .addTo(controller);

//});



// $(window).on('scroll', function(){
//   var scrollTop = $(window).scrollTop();

//   console.log(scrollTop);

// })






var scene = new ScrollMagic.Scene({triggerElement: "#textPinFirst", duration: 2500})
          .setPin("#textPinFirst")
          // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)

          .on("enter", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPinFirst").html("At almost $1 a piece they’re a luxury good<br>not everyone can afford to enjoy");

            }
            else{

              $("#textPinFirst").html("Let alone waste");


            }
          })

          .on("progress", function (e) {
            if(e.progress.toFixed(3)>.3 && e.progress.toFixed(3)<.7){

            // console.log(controller.info("scrollDirection"))

            $("#textPinFirst").html("Let alone waste");

            // $("#progress").text(e.progress.toFixed(3));
            console.log(e.progress.toFixed(3))
          }

          if(e.progress.toFixed(3)>.6){
            $("#textPinFirst").html("What percentage of your food<br>do you waste a week?");
          }
					})




          .on("leave", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPinFirst").html("What percentage of your food<br>do you waste a week?");
            }


            else{
              $("#textPinFirst").html("At almost $1 a piece they’re a luxury good<br>not everyone can afford to enjoy");

            }
            // $("#progress").text(e.progress.toFixed(3));
						// $("#textPin1").text("THIS IS NEW TEXT");
            // console.log("update")

          })

          .addTo(controller);







var scene = new ScrollMagic.Scene({triggerElement: "#textPin2", duration: 1000})
          .setPin("#textPin2")
          // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)

          .on("enter", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPin2").html("Give more care and thought into the<br>products that you consume, as your choices<br>have concequences.");

            }
            else{
              $("#textPin2").html("Movements like local, sustainable farming<br>means less food waste, keeping you more<br>connected to the food that you eat.");
            }
          })

          .on("progress", function (e) {
            if(e.progress.toFixed(3)>.5 && e.progress.toFixed(3)<.8){

            // console.log(controller.info("scrollDirection"))

            $("#textPin2").html("Movements like local, sustainable farming<br>means less food waste, keeping you more<br>connected to the food that you eat.");
            // $("#progress").text(e.progress.toFixed(3));
            console.log(e.progress.toFixed(3))
          }
					})




          .on("leave", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPin2").html("We’re all in this together, and that we should strive to leave the world in a better place for the generations that come tomorrow 🌍");
            }


            else{
              $("#textPin2").html("Give more care and thought into the<br>products that you consume, as your choices<br>have concequences.");

            }
            // $("#progress").text(e.progress.toFixed(3));
						// $("#textPin1").text("THIS IS NEW TEXT");
            // console.log("update")

          })

          .addTo(controller);


          



          // Kanye Section




          var scene = new ScrollMagic.Scene({triggerElement: "#textPin3", duration: 1300, offset: 100})
          .setPin("#textPin3")
          // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)

          .on("enter", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPin3").html("“Good morning, this ain't Vietnam still,<br>People lose hands, legs, arms, for real”");

            }
            else{
              $("#textPin3").html("“Little was known of Sierra Leone<br>And how it connect to the<br>diamonds we own”");
            }
          })

          .on("progress", function (e) {
            if(e.progress.toFixed(3)>.5 && e.progress.toFixed(3)<.8){

            // console.log(controller.info("scrollDirection"))

            $("#textPin3").html("“Little was known of Sierra Leone<br>And how it connect to the<br>diamonds we own”");
            // $("#progress").text(e.progress.toFixed(3));
            console.log(e.progress.toFixed(3))
          }
					})




          .on("leave", function (e) {
            if(controller.info("scrollDirection")==='FORWARD'){
              $("#textPin3").html("“Little was known of Sierra Leone<br>And how it connect to the<br>diamonds we own”");
            }


            else{
              $("#textPin3").html("“Good morning, this ain't Vietnam still,<br>People lose hands, legs, arms, for real”");

            }
            // $("#progress").text(e.progress.toFixed(3));
						// $("#textPin1").text("THIS IS NEW TEXT");
            // console.log("update")

          })

          .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: "#kanyePin", duration: 1300, offset: 240})
          .setPin("#kanyePin")
          
        
          .addTo(controller);
          
          var scene = new ScrollMagic.Scene({triggerElement: "#FollowUpText", duration: 1200, offset: 100})
          .setPin("#FollowUpText")

          .addTo(controller);

          

          var scene = new ScrollMagic.Scene({triggerElement: "#kanyeFollowUpText", duration: 1200, offset: 100})
          .setPin("#kanyeFollowUpText")
        
          .addTo(controller);


          var scene = new ScrollMagic.Scene({triggerElement: "#unQuote", duration: 1000, offset: 200})
          .setPin("#unQuote")
          
        
          .addTo(controller);
          


          var scene = new ScrollMagic.Scene({triggerElement: "#preSlide", duration: 1500, offset: 100})
          .setPin("#preSlide")
          
        
          .addTo(controller);




          var scene = new ScrollMagic.Scene({triggerElement: "#LastfruitPinned", duration: 2500, offset: 170})
          .setPin("#LastfruitPinned")
    
          .addTo(controller);


          var scene = new ScrollMagic.Scene({triggerElement: "#LastfruitPin", duration: 2500, offset: 285})
          .setPin("#LastfruitPin")
    
          .addTo(controller);
          

           // diamond Section




            var scene = new ScrollMagic.Scene({triggerElement: "#textPin4", duration: 2700, offset: 50})
            .setPin("#textPin4")
            // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
          
            .on("enter", function (e) {
              if(controller.info("scrollDirection")==='FORWARD'){
                $("#textPin4").html("Is cheap produce worth wasting childhoods?");
          
              }
              else{
                 $("#textPin4").html("Why does everything have to look perfect?");
              }
              })
          
                    .on("progress", function (e) {
                      if(e.progress.toFixed(3)>.6 && e.progress.toFixed(3)<.8){
          
                      // console.log(controller.info("scrollDirection"))
          
                      $("#textPin4").html("Why does everything have to look perfect?");
                      // $("#progress").text(e.progress.toFixed(3));
                      console.log(e.progress.toFixed(3))
                    }
                    })
          
          
          
          
                    .on("leave", function (e) {
                      if(controller.info("scrollDirection")==='FORWARD'){
                        $("#textPin4").html("Why does everything have to look perfect?");
                      }
          
          
                      else{
                        $("#textPin4").html("Is cheap produce worth wasting childhoods?");
          
                      }
                      // $("#progress").text(e.progress.toFixed(3));
                      // $("#textPin1").text("THIS IS NEW TEXT");
                      // console.log("update")
          
                    })
          
                    .addTo(controller);
          
                    var scene = new ScrollMagic.Scene({triggerElement: "#diamondPin", duration: 2000, offset: 50})
                    .setPin("#diamondPin")
                    
                  
                    .addTo(controller);


});




















const END = 'change';
const START = 'ontouchstart' in document ? 'touchstart' : 'mousedown';
const INPUT = 'input';
const MAX_ROTATION = 35;
const SOFTEN_FACTOR = 3;

class RangeInput {

  constructor(el) {
    this.el = el;

    this._handleEnd = this._handleEnd.bind(this);
    this._handleStart = this._handleStart.bind(this);
    this._handleInput = this._handleInput.bind(this);

    //Call the plugin
    $(this.el.querySelector('input[type=range]')).rangeslider({
      polyfill: false, //Never use the native polyfill
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider-disabled',
      horizontalClass: 'rangeslider-horizontal',
      verticalClass: 'rangeslider-vertical',
      fillClass: 'rangeslider-fill-lower',
      handleClass: 'rangeslider-thumb',
      onInit: function () {
        //No args are passed, so we can't change context of this
        const pluginInstance = this;

        //Move the range-output inside the handle so we can do all the stuff in css
        $(pluginInstance.$element).
        parents('.range').
        find('.range-output').
        appendTo(pluginInstance.$handle);
          
      } });


    this.sliderThumbEl = el.querySelector('.rangeslider-thumb');
    this.outputEl = el.querySelector('.range-output');
    this.inputEl = el.querySelector('input[type=range]');
    this._lastOffsetLeft = 0;
    this._lastTimeStamp = 0;

    this.el.querySelector('.rangeslider').addEventListener(START, this._handleStart);
  }

  _handleStart(e) {
    this._lastTimeStamp = new Date().getTime();
    this._lastOffsetLeft = this.sliderThumbEl.offsetLeft;

    //Wrap in raf because offsetLeft is updated by the plugin after this fires
    requestAnimationFrame(_ => {
      //Bind through jquery because plugin doesn't fire native event
      $(this.inputEl).on(INPUT, this._handleInput);
      $(this.inputEl).on(END, this._handleEnd);
        
    });
  }

  _handleEnd(e) {
    //Unbind through jquery because plugin doesn't fire native event
    $(this.inputEl).off(INPUT, this._handleInput);
    $(this.inputEl).off(END, this._handleEnd);
//       var disval = $('input[type="range"]').val()/1000;
//       //capture value
// //      console.log($('input[type="range"]').val()/1000);
//       console.log(disval);
//       $("#displayVal").css('transform', 'scale(' +disval + ',' + disval + ')');
    requestAnimationFrame(_ => this.outputEl.style.transform = 'rotate(0deg)');

    $("#next_btn").css({ color: "white"});
    $("#next_btn").css({ backgroundColor: "#066A67"});
  //   $('#next_btn').click(function(){
  //     window.location.href='https://www.google.com/?client=safari';
  //  })



  $('#next_btn').click(function(){
    $("#canadianParent").animate({left: ['10%', 'swing']} ,900 );
    
    $("#canAverage").css({ opacity: "1"});
    $("#canAverage2").css({ opacity: "1"});

    $("#yourwaste").css({ opacity: "0"});
    $("#yourtext").css({ opacity: "0"});
    $(".slider_container").css({ opacity: "0"});
    $("#next_btn").css({ opacity: "0"});
    $("#foodWasteIs").css({ opacity: "0"});


    

    $("#myParent").animate({top: ['30%', 'swing']} ,900 );

 })




   $("#next_btn").css({ cursor: "pointer"});

  }

  _handleInput(e) {
    let now = new Date().getTime();
    let timeElapsed = now - this._lastTimeStamp || 1;
    let distance = this.sliderThumbEl.offsetLeft - this._lastOffsetLeft;
    let direction = distance < 0 ? -1 : 1;
    let velocity = Math.abs(distance) / timeElapsed; //pixels / millisecond
    let targetRotation = Math.min(Math.abs(distance * velocity) * SOFTEN_FACTOR, MAX_ROTATION);

    var disvalA = $('input[type="range"]').val()/1000;
    var disval = Math.ceil(disvalA);
      //capture value
//      console.log($('input[type="range"]').val()/1000);
      console.log(disval);
      $("#displayVal").css('transform', 'scale(' +disval + ',' + disval + ')');
      $("#myValue").html(disval +"%");

      if(disval<=50){
        $("#canAverage2").html("You waste less than the average Canadian")
      }
      else{
        $("#canAverage2").html("You waste more than the average Canadian")

      }

    requestAnimationFrame(_ => this.outputEl.style.transform = 'rotate(' + targetRotation * -direction + 'deg)');

    this._lastTimeStamp = now;
    this._lastOffsetLeft = this.sliderThumbEl.offsetLeft;
        
      
  }}




/*! rangeslider.js - v2.1.1 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!function (a) {"use strict";"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery);}(function (a) {"use strict";function b() {var a = document.createElement("input");return a.setAttribute("type", "range"), "text" !== a.type;}function c(a, b) {var c = Array.prototype.slice.call(arguments, 2);return setTimeout(function () {return a.apply(null, c);}, b);}function d(a, b) {return b = b || 100, function () {if (!a.debouncing) {var c = Array.prototype.slice.apply(arguments);a.lastReturnVal = a.apply(window, c), a.debouncing = !0;}return clearTimeout(a.debounceTimeout), a.debounceTimeout = setTimeout(function () {a.debouncing = !1;}, b), a.lastReturnVal;};}function e(a) {return a && (0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1);}function f(a) {for (var b = [], c = a.parentNode; e(c);) b.push(c), c = c.parentNode;return b;}function g(a, b) {function c(a) {"undefined" != typeof a.open && (a.open = a.open ? !1 : !0);}var d = f(a),e = d.length,g = [],h = a[b];if (e) {for (var i = 0; e > i; i++) g[i] = d[i].style.cssText, d[i].style.setProperty ? d[i].style.setProperty("display", "block", "important") : d[i].style.cssText += ";display: block !important", d[i].style.height = "0", d[i].style.overflow = "hidden", d[i].style.visibility = "hidden", c(d[i]);h = a[b];for (var j = 0; e > j; j++) d[j].style.cssText = g[j], c(d[j]);}return h;}function h(a, b) {var c = parseFloat(a);return Number.isNaN(c) ? b : c;}function i(a) {return a.charAt(0).toUpperCase() + a.substr(1);}function j(b, e) {if (this.$window = a(window), this.$document = a(document), this.$element = a(b), this.options = a.extend({}, n, e), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = o.orientation[this.orientation].dimension, this.DIRECTION = o.orientation[this.orientation].direction, this.DIRECTION_STYLE = o.orientation[this.orientation].directionStyle, this.COORDINATE = o.orientation[this.orientation].coordinate, this.polyfill && m) return !1;this.identifier = "js-" + k + "-" + l++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = a('<div class="' + this.options.fillClass + '" />'), this.$handle = a('<div class="' + this.options.handleClass + '" />'), this.$range = a('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({ position: "absolute", width: "1px", height: "1px", overflow: "hidden", opacity: "0" }), this.handleDown = a.proxy(this.handleDown, this), this.handleMove = a.proxy(this.handleMove, this), this.handleEnd = a.proxy(this.handleEnd, this), this.init();var f = this;this.$window.on("resize." + this.identifier, d(function () {c(function () {f.update(!1, !1);}, 300);}, 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, function (a, b) {if (!b || b.origin !== f.identifier) {var c = a.target.value,d = f.getPositionFromValue(c);f.setPosition(d);}});}Number.isNaN = Number.isNaN || function (a) {return "number" == typeof a && a !== a;};var k = "rangeslider",l = 0,m = b(),n = { polyfill: !0, orientation: "horizontal", rangeClass: "rangeslider", disabledClass: "rangeslider--disabled", horizontalClass: "rangeslider--horizontal", verticalClass: "rangeslider--vertical", fillClass: "rangeslider__fill", handleClass: "rangeslider__handle", startEvent: ["mousedown", "touchstart", "pointerdown"], moveEvent: ["mousemove", "touchmove", "pointermove"], endEvent: ["mouseup", "touchend", "pointerup"] },o = { orientation: { horizontal: { dimension: "width", direction: "left", directionStyle: "left", coordinate: "x" }, vertical: { dimension: "height", direction: "top", directionStyle: "bottom", coordinate: "y" } } };return j.prototype.init = function () {this.update(!0, !1), this.onInit && "function" == typeof this.onInit && this.onInit();}, j.prototype.update = function (a, b) {a = a || !1, a && (this.min = h(this.$element[0].getAttribute("min"), 0), this.max = h(this.$element[0].getAttribute("max"), 100), this.value = h(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)), this.step = h(this.$element[0].getAttribute("step"), 1)), this.handleDimension = g(this.$handle[0], "offset" + i(this.DIMENSION)), this.rangeDimension = g(this.$range[0], "offset" + i(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, b);}, j.prototype.handleDown = function (a) {if (this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), !((" " + a.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {var b = this.getRelativePosition(a),c = this.$range[0].getBoundingClientRect()[this.DIRECTION],d = this.getPositionFromNode(this.$handle[0]) - c,e = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;this.setPosition(e), b >= d && b < d + this.handleDimension && (this.grabPos = b - d);}}, j.prototype.handleMove = function (a) {a.preventDefault();var b = this.getRelativePosition(a),c = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;this.setPosition(c);}, j.prototype.handleEnd = function (a) {a.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$element.trigger("change", { origin: this.identifier }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value);}, j.prototype.cap = function (a, b, c) {return b > a ? b : a > c ? c : a;}, j.prototype.setPosition = function (a, b) {var c, d;void 0 === b && (b = !0), c = this.getValueFromPosition(this.cap(a, 0, this.maxHandlePos)), d = this.getPositionFromValue(c), this.$fill[0].style[this.DIMENSION] = d + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = d + "px", this.setValue(c), this.position = d, this.value = c, b && this.onSlide && "function" == typeof this.onSlide && this.onSlide(d, c);}, j.prototype.getPositionFromNode = function (a) {for (var b = 0; null !== a;) b += a.offsetLeft, a = a.offsetParent;return b;}, j.prototype.getRelativePosition = function (a) {var b = i(this.COORDINATE),c = this.$range[0].getBoundingClientRect()[this.DIRECTION],d = 0;return "undefined" != typeof a["page" + b] ? d = a["client" + b] : "undefined" != typeof a.originalEvent["client" + b] ? d = a.originalEvent["client" + b] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0]["client" + b] ? d = a.originalEvent.touches[0]["client" + b] : a.currentPoint && "undefined" != typeof a.currentPoint[this.COORDINATE] && (d = a.currentPoint[this.COORDINATE]), d - c;}, j.prototype.getPositionFromValue = function (a) {var b, c;return b = (a - this.min) / (this.max - this.min), c = Number.isNaN(b) ? 0 : b * this.maxHandlePos;}, j.prototype.getValueFromPosition = function (a) {var b, c;return b = a / (this.maxHandlePos || 1), c = this.step * Math.round(b * (this.max - this.min) / this.step) + this.min, Number(c.toFixed(this.toFixed));}, j.prototype.setValue = function (a) {(a !== this.value || "" === this.$element[0].value) && this.$element.val(a).trigger("input", { origin: this.identifier });}, j.prototype.destroy = function () {this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + k), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0]);}, a.fn[k] = function (b) {var c = Array.prototype.slice.call(arguments, 1);return this.each(function () {var d = a(this),e = d.data("plugin_" + k);e || d.data("plugin_" + k, e = new j(this, b)), "string" == typeof b && e[b].apply(e, c);});}, "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);";});


new RangeInput(document.querySelector('.range'));







// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
