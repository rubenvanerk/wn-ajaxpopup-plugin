# Ajax Popup plugin

Plugin to show dynamic popups in the frontend.
Inspired by an [OctoberTrick](https://octobertricks.com/tricks/create-dynamic-ajax-popup-in-front-end).

**Note: currently only supports Bootstrap 5 modals.**

## Usage

Add the `[ajaxPopup]` to your page.

Add the `data-popup` attribute to the element that triggers the Ajax request:
```html
<button
    data-request="onYourAjaxHandler"
    data-popup="yourPopupIdentifier">
    Show popup
</button>
```

In your ajax handler reference the popup identifier:

```php
function onYourAjaxHandler()
{
    return [
        'yourPopupIdentifier' => $this->renderPartial('@your-partial'),
    ];
}
```

