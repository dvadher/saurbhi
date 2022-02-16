$('.pop-up-form').validate({
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
            drug_name: {
                required: true,
            },
            dose: {
                required: true,
            },
            frequecy: {
                required: true,
            },
            duration: {
                required: true,
            }
        },
        messages: {
            drug_name: {
                required: "Please enter Bodypart",
            },
            dose: {
                required: "Please enter Imaging Modality",
            },
            frequecy: {
                required: "Please enter Indication",
            }
        }
    });