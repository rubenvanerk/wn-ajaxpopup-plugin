<?php namespace WRvE\AjaxPopup\Components;

use Cms\Classes\ComponentBase;

class AjaxPopup extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'AjaxPopup Component',
            'description' => 'Component that adds support for dynamic popups'
        ];
    }

    public function onRun()
    {
        $this->addJs('/plugins/wrve/ajaxpopup/components/ajaxpopup/assets/ajaxPopup.js');
    }
}
