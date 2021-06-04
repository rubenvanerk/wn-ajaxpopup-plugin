$(function () {
    var PopupBuilder = function () {

        function init()
        {
            $(document).on('ajaxSuccess', '[data-popup]', showAjaxPopup);
        }

        function showAjaxPopup(e, context, data, status, jqXHR)
        {
            let popupIdentifier = $(e.currentTarget).data('popup');
            let popupContent = data[popupIdentifier];

            let popup = document.createElement('div');
            popup.innerHTML = popupContent;
            popup.id = popupIdentifier;
            document.body.append(popup);

            let bsModal = new bootstrap.Modal($('div#' + popupIdentifier + ' .modal'));
            bsModal.show();
        }

        init()
    };

    new PopupBuilder()
});
