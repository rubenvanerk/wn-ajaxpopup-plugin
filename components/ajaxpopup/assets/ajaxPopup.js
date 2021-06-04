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

            let container = document.getElementById(popupIdentifier);
            let popupEl = container.getElementsByClassName('modal')[0];
            let bsModal = new bootstrap.Modal(popupEl);
            bsModal.show();

            popupEl.addEventListener('hidden.bs.modal', function () {
                container.remove();
            });
        }

        init()
    };

    new PopupBuilder()
});
