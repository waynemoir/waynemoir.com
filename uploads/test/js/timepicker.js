
$(document).ready(function () {
        
    $.globalTimePickerSettings = {
        'show24Hours': false,
        'calendarIcon': './timePicker/calendar-icon.png',
        'idPrefix': '',
        'initialise': 'true',
        'time': '',
        'date': '',
        'showTimeIcon': 'true'
    };

});
    
(function ($) {

    $.fn.timePicker = function (options) {

        // Extend defaults with any options that are provided.
        var settings = $.extend($.globalTimePickerSettings, options);

        return this.each(function () {

            // Prefix the ids if set.
            if(settings.idPrefix) {
                $('*', $(this)).each(function () {
                    if($(this).attr('id')) {
                        var newId = settings.idPrefix + $(this).attr('id');
                        $(this).attr('id', newId);
                        if($(this).attr('name')) {
                            $(this).attr('name', newId);
                        }
                    }
                });
            }

            // Time Picker Markup Root.
            var timePickerRoot = $(this);

            // Time Input.
            var timeInputRoot = $('.time-input-wrapper', timePickerRoot);
            var timeInput = $(".time-input", $(this));
            
            if(settings.showTimeIcon == 'true')
            {
                var timeIconMarkup = $("<i></i>").addClass('time-icon');
                timeInput.after(timeIconMarkup);
            }
            
            // Time Details.
            var timeDetailsRoot = $(".time-date-details", timePickerRoot);

            // Time Spinners / (optional) [AM|PM] select.
            var timeSpinnerRoot = $(".time-picker-wrapper", timeDetailsRoot);

            // Date Picker.
            var datePickerRoot = $(".date-input", timeDetailsRoot);
            
            // Setup Time Entry.
            if(settings.time) {
                timeInput.val(settings.time);
            }
            
            timeInput.timeEntry({ spinnerImage: '', ampmPrefix: ' ', show24Hours: settings.show24Hours });

            // Configure Date Picker.
            configureDatePicker(datePickerRoot, timePickerRoot.attr("id"), settings.calendarIcon, settings.date);

            // Time text field focus handler. Shows the time / date details section.
            timeInput.bind("focus", function () {
                
                // Hide all time / date details.
                $(".time-date-details").hide();

                // Show time / date details for current context.
                timeDetailsRoot.show();
                
                // Configure time spinner input.
                configureTimeSpinner(timeSpinnerRoot, settings.show24Hours);
                
                // Update the time spinner.
                UpdateTimeSpinner(timeInput);
            });

            // Time Spinner Change Event Handler. Updates Time Text Field.
            $('input', timeSpinnerRoot).change(function (event) {

                // Update the time text.
                UpdateTimeText(timeSpinnerRoot);
            });

            // Time Text Field Keyup Event Handler. Updates Time Spinner.
            timeInput.keyup(function (event) {

                // Update the time spinner.
                UpdateTimeSpinner(timeInput);
            });
        });
    };

    $.fn.gridTimePicker = function (cellRoot, timePicker, options) {
        return this.each(function () {
            
            // The original grid input.
            var input = $(this)
                .attr("style", "width:60px;")
                .addClass("time-input");
            
            // Modify the Time Picker markup:
            // - Remove hasDatepicker class from the date picker input. 
            $('.date-input', timePicker).removeClass('hasDatepicker');
            
            // Initialise the time picker.
            timePicker.timePicker({'time': options.time, 'date': options.date, 'showTimeIcon': 'false', 'idPrefix': options.colId + '_'});
            
            // - Preserve the grid input's original attributes.
            $(".time-input-wrapper input", timePicker)
                .attr("id", input.attr("id"))
                .attr("name", input.attr("name"))
                .addClass("editable");
            
            // - Remove the original grid input.    
            input.remove();
            
            // Create an overlay to contain the Time Picker.
            var dateTimeOverlay = $("<div></div>")
                .css({
                    "width": '100%',
                    "height": '100%',
                    "margin-left": '17px'
                })
                .append(
                    $("<div></div>")
                    .addClass("time-picker-overlay")
                    .css({
                        'position': 'absolute',
                        "white-space": 'normal',
                        "margin-top": '-4px'
                    })
                    .append(timePicker)
                );

            cellRoot.append(dateTimeOverlay);
        });
    };
} (jQuery));

function TimeChanged(id, val) {
    if ($.isFunction($.onTimeChanged)) {
        $.onTimeChanged(id, val);
    }
}

function DateChanged(id, val) {
    if ($.isFunction($.onDateChanged)) {
        $.onDateChanged(id, val);
    }
}

$(document).mouseup(function (e) {
    var timePicker = $(".time-date-picker");
    var datePicker = $(".ui-datepicker");
    
    if (timePicker.has(e.target).length === 0 && datePicker.has(e.target).length === 0) {
        $(".time-date-details").hide();
    }
});

function configureTimeText(element, show24Hours) {

    // Create time entry field.
    $(element).timeEntry({ spinnerImage: '', ampmPrefix: ' ', show24Hours: show24Hours });
}

function configureTimeSpinner(element, show24Hours) {

    var hourMax = 12;

    if (show24Hours) {
        hourMax = 23;

        $('dl', element).remove();
    }
    
    // Hour Spinner configuration.
    $('.spinner-hour', element).spinner({ min: 00, max: hourMax });

    // Minute Spinner configuration.
    $('.spinner-minutes', element).spinner({ min: 00, max: 59, step: 01 });
}

function configureDatePicker(element, id, buttonImagePath, date) {
    
    if(date) {
        $(element).val(date);
    }

    // Date Picker Configuration.
    $(element).datepicker({

        // Date Picked Handler.
        onSelect: function (dateVal, obj) {

            // Carry out any further tasks.
            DateChanged(obj, dateVal);
        },

        beforeShow: function (inp, inst) {
            inst.dpDiv.css(
                        {
                            marginTop: '10px',
                            marginLeft: '-10px'
                        });
        },
        buttonImage: buttonImagePath,
        buttonImageOnly: true,
        showOn: 'both'
    });
}

function padLeft(str) {
    while (str.length < 2) {
        str = '0' + str;
    }
    return str;
}

function UpdateTimeSpinner(element) {

    // Text input value e.g. '12:57'
    var time = $(element).val();
    
    // Parse Text Field Hours. 
    var hours = time.substring(0, time.indexOf(":"));
    hours = padLeft(hours);

    // Parse Text Field Minutes.
    var minutes = time.substring(time.indexOf(":") + 1, 5);
    minutes = padLeft(minutes);

    // Update Time Picker.
    $('.spinner-hour', $(element).parents(".time-date-picker")).val(hours);
    $('.spinner-minutes', $(element).parents(".time-date-picker")).val(minutes);

    if (time.indexOf("AM") > -1) {
        $('.am', $(element).parents(".time-date-picker")).attr("checked", true);
    }
    else if (time.indexOf("PM") > -1) {
        $('.pm', $(element).parents(".time-date-picker")).attr("checked", true);
    }

    // Carry out any further tasks.
    TimeChanged($(element).parents(".time-date-picker").attr("id"), time);
}

function UpdateTimeText(timePickerWrapper) {

    // Spinner Hours.
    var hours = $('.spinner-hour', timePickerWrapper).val();
    
    // Spinner Minutes.
    var minutes = $('.spinner-minutes', timePickerWrapper).val();

    // Am / Pm postfix (if not 24 hr).
    var amPmPostfix = GetTimeSpinnerAmPm(timePickerWrapper);

    // Time.
    var time = hours + ':' + minutes + amPmPostfix;

    // Set time on Text Field Time.
    $('.time-input', $(timePickerWrapper).parents(".time-date-picker")).val(time);

    // Carry out any further tasks.
    TimeChanged($(timePickerWrapper).parents(".time-date-picker").attr("id"), time);
}

function GetTimeSpinnerAmPm(timePickerWrapper) {
    var postfix = '';

    var amRadio = $('.am', timePickerWrapper);
    var pmRadio = $('.pm', timePickerWrapper);

    if (amRadio && pmRadio) {
        
        if ($(amRadio).attr("checked")) {
            postfix = " AM";
        }
        else if ($(pmRadio).attr("checked")) {
            postfix = " PM";
        }
    }

    return postfix;
}