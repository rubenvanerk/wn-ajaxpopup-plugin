$(function () {
    "use strict";

    var ajaxUtils = function () {
        this.registerHandlers()
    };

    ajaxUtils.prototype.registerHandlers = function () {
        var requestSenderSelector = 'form, a[data-request], input[data-request], select[data-request]';
        $(document).on('ajaxPromise', requestSenderSelector, $.proxy(this.onFormAjaxInit));
        $(document).on('ajaxFail', requestSenderSelector, $.proxy(this.onFormAjaxFail));
        $(document).on('ajaxDone', requestSenderSelector, $.proxy(this.onFormAjaxSuccess));
        $(document).on('shown.bs.modal', 'div.modal', $.proxy(this.onModalDisplayed, this));
        $(document).on('hidden.bs.modal', 'div.modal', $.proxy(this.onModalHidden, this));
    };

    ajaxUtils.prototype.onFormAjaxInit = function (e) {
        var $form = $(e.currentTarget).closest('form');

        if ($(e.target).attr('data-no-ajax-disable-effects') !== undefined) {
            return
        }

        $form.find('[data-disable-on-ajax-start]').prop('disabled', true).attr('disabled', 'disabled')
    };

    ajaxUtils.prototype.onFormAjaxFail = function (e) {
        var $form = $(e.currentTarget).closest('form');

        $form.find('[data-enable-on-ajax-fail], [data-enable-on-ajax-always]').prop('disabled', false).removeAttr('disabled')
    };

    ajaxUtils.prototype.onFormAjaxSuccess = function (e) {
        var $form = $(e.currentTarget).closest('form');

        $form.find('[data-enable-on-ajax-success], [data-enable-on-ajax-always]').prop('disabled', false).removeAttr('disabled')
    };

    ajaxUtils.prototype.onModalDisplayed = function (e) {
        var $defaultFocus = $('[data-default-focus]', e.currentTarget);

        $defaultFocus.focus()
    };

    ajaxUtils.prototype.onModalHidden = function (e) {
        $(e.currentTarget).remove()
    };

    new ajaxUtils()

});
