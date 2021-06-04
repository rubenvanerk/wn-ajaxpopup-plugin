<?php namespace WRvE\AjaxPopup;

use System\Classes\PluginBase;
use WRvE\AjaxPopup\Components\AjaxPopup;

class Plugin extends PluginBase
{
    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            AjaxPopup::class => 'ajaxPopup',
        ];
    }
}
