
$(document).ready(function(){
    var $select = $('.form-control-select2').select2({
        width: '30%',
    });
    $(".start_date").datetimepicker({ 
        format: 'DD/MM/YYYY',
        widgetPositioning: {
            vertical: 'bottom',
        }
    });
    $(".end_date").datetimepicker({
        format: 'DD/MM/YYYY',
        widgetPositioning: {
            vertical: 'bottom',
        }
    });
    $(".start_time").datetimepicker({
        format: 'HH:mm A',
    });
    $(".end_time").datetimepicker({
        format: 'HH:mm A',
    });

    $('.start_date_lable').find('.flaticon-calendar-1').on('click', function () {
        $('#startDateForm').trigger('focus');
    });
    $('.end_date_lable').find('.flaticon-calendar-1').on('click', function () {
        $('#endDateForm').trigger('focus');
    });
    $('.start_time_lable').find('.flaticon-watch').on('click', function () {
        $('#startTimeForm').trigger('focus');
    });
    $('.end_time_lable').find('.flaticon-watch').on('click', function () {
        $('#endTimeForm').trigger('focus');
    });


    $('.start_date_edit').find('.flaticon-calendar-1').on('click', function () {
        $('#editStartDateForm').trigger('focus');
    });
    $('.end_date_edit').find('.flaticon-calendar-1').on('click', function () {
        $('#editEndDateForm').trigger('focus');
    });
    $('.start_time_edit').find('.flaticon-watch').on('click', function () {
        $('#editStartTimeForm').trigger('focus');
    });
    $('.end_time_edit').find('.flaticon-watch').on('click', function () {
        $('#editEndTimeForm').trigger('focus');
    });



    $('.avail-form').validate({
        ignore: 'input[type=hidden], .select2-search__field',
        errorElement: 'span',
        errorClass: 'validation-error-label',
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        errorPlacement: function (error, element) {
            if (element.parents('div').hasClass('profile-photo')) {
                error.appendTo(element.parent());
            } else if (element.parents('div').hasClass('consultation-type')) {
                error.appendTo(element.parent().parent());
            } else if (element.parents('div').hasClass('form-group')) {
                error.appendTo(element.parent());
            } else if (element.parents('div').hasClass('licence-upload')) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        rules: {
            start_date: {
                required: true,
            },
            end_date: {
                required: true,
            },
            start_time: {
                required: true,
            },
            end_time: {
                required: true,
            }
        },
        messages: {
            start_date: {
                required: "Please select start date",
            },
            end_date: {
                required: "Please select end date",
            },
            start_time: {
                required: "Please select start time",
            },
            end_time: {
                required: "Please select end time",
            }
        }
    });

    $('.edit-avail-form').validate({
        ignore: 'input[type=hidden], .select2-search__field',
        errorElement: 'span',
        errorClass: 'validation-error-label',
        highlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        },
        errorPlacement: function (error, element) {
            if (element.parents('div').hasClass('profile-photo')) {
                error.appendTo(element.parent());
            } else if (element.parents('div').hasClass('consultation-type')) {
                error.appendTo(element.parent().parent());
            } else if (element.parents('div').hasClass('form-group')) {
                error.appendTo(element.parent());
            } else if (element.parents('div').hasClass('licence-upload')) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        rules: {
            start_date: {
                required: true,
            },
            end_date: {
                required: true,
            },
            start_time: {
                required: true,
            },
            end_time: {
                required: true,
            }
        },
        messages: {
            start_date: {
                required: "Please select start date",
            },
            end_date: {
                required: "Please select end date",
            },
            start_time: {
                required: "Please select start time",
            },
            end_time: {
                required: "Please select end time",
            }
        }
    });
});