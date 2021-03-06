// Name:        HTMLEditor.Toolbar_buttons.SelectButton.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.initializeBase(this, [element]);
    
    this._onclick_option$delegate = Function.createDelegate(this, this._onclick_option);
    this._onchange$delegate = Function.createDelegate(this, this._onchange);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.prototype = {
    
    initialize : function() {
        var nodeId = this.get_element().id;
        Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.callBaseMethod(this, "initialize");
        this._select =  $get(nodeId+"_select");
        
        $addHandler(this._select, "change", this._onchange$delegate);
        for(var i=0; i < this._select.options.length; i++) {
            var option = this._select.options[i];
            $addHandler(option, "click", this._onclick_option$delegate);
        }
    },
    
    dispose : function() {
        for(var i=0; i < this._select.options.length; i++) {
            var option = this._select.options[i];
            $removeHandler(option, "click", this._onclick_option$delegate);
        }

        $removeHandler(this._select, "change", this._onchange$delegate);
        Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.callBaseMethod(this, "dispose");
    },
    
    isImage : function() {
        return false;
    },
    
    
    callMethod : function(select,e) {
        return true;
    },
    
    _onclick_option : function(e) {
        if (!this.isEnable()) {
            return false;
        }
        var option = e.target;
        option.parentNode.value=option.value;
        Sys.Extended.UI.HTMLEditor._stopEvent(e);
        if(!Sys.Extended.UI.HTMLEditor.isSafari) return false;
        this.callMethod(option.parentNode,e);
        return true;
    },
    
    _onchange : function(e) {
        if (!this.isEnable()) {
            return false;
        }
        var select = e.target;
        Sys.Extended.UI.HTMLEditor._stopEvent(e);
        this.callMethod(select,e);
        return true;
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton", Sys.Extended.UI.HTMLEditor.ToolbarButton.CommonButton);

