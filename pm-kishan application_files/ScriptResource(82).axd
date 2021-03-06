// Name:        HTMLEditor.Toolbar_buttons.OkCancelPopupButton.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.prototype = {

    set_activeEditPanel: function(value) {
        if (this._editPanel != value && this._editPanel != null) {
            var relatedPopup = this.get_relatedPopup();
            if (typeof relatedPopup._forceImClose == "function") {
                var func = relatedPopup._forceImClose;
                func(relatedPopup._iframe.contentWindow);
            }
        }
        Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton.callBaseMethod(this, "set_activeEditPanel", [value]);
    },

    callMethod: function() {
        if (!Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.callBaseMethod(this, "callMethod")) return false;
        this.openPopup(Function.createDelegate(this, this._onopened));
        return true;
    },

    _onopened: function(contentWindow) {
        contentWindow.popupMediator.set_callMethodByName("OK", Function.createDelegate(this, this._onOK));
        contentWindow.popupMediator.set_callMethodByName("Cancel", Function.createDelegate(this, this._onCancel));
        var relatedPopup = this.get_relatedPopup();
        relatedPopup._popup = this._designPanel._popup;
        relatedPopup._forceImClose = Function.createDelegate(this, this._onCancel);
        this._designPanel._popup = this.get_relatedPopup();
        this.opened(contentWindow);
    },

    opened: function(contentWindow) {
    },

    _onOK: function(contentWindow) {
        if (this.okCheck(contentWindow))
            this._exit(Function.createDelegate(this, this.ok), contentWindow);
    },

    _onCancel: function(contentWindow) {
        if (this.cancelCheck(contentWindow))
            this._exit(Function.createDelegate(this, this.cancel), contentWindow);
    },

    _exit: function(callback, contentWindow) {
        this.closePopup();
        this._designPanel._popup = this.get_relatedPopup()._popup;
        this.get_relatedPopup()._popup = null;
        this.get_relatedPopup()._forceImClose = null;
        callback(contentWindow);
    },

    ok: function(contentWindow) {
    },

    cancel: function(contentWindow) {
    },

    okCheck: function(contentWindow) {
        return true;
    },

    cancelCheck: function(contentWindow) {
        return true;
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.OkCancelPopupButton", Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton);
