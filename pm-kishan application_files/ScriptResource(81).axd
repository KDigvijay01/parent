// Name:        HTMLEditor.Toolbar_buttons.DesignModePopupImageButton.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton.initializeBase(this, [element]);

    this._relatedPopup = null;
    this._autoClose = true;
    this._forclose_onmousedown$delegate = null;
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton.prototype = {

    set_activeEditPanel: function(value) {
        if (this._editPanel != value && this._editPanel != null) {
            this.closePopup();
        }
        Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton.callBaseMethod(this, "set_activeEditPanel", [value]);
    },

    get_autoClose: function() {
        return this._autoClose;
    },
    set_autoClose: function(value) {
        this._autoClose = value;
    },

    get_relatedPopup: function() {
        return this._relatedPopup;
    },
    set_relatedPopup: function(value) {
        this._relatedPopup = value;
    },

    openPopup: function(callback, top, left) {
        if (this._autoClose && this._forclose_onmousedown$delegate != null) return;
        if (this._relatedPopup != null) {
            this._bookmark = null;
            if (Sys.Extended.UI.HTMLEditor.isIE) {
                var sel = this._designPanel._getSelection();
                this._selType = sel.type.toLowerCase();
                var range = this._designPanel._createRange(sel);
                if (this._selType == "text" || this._selType == "none") {
                    try {
                        this._bookmark = range.duplicate();
                    } catch (ex) { }
                }
                else if (this._selType == "control") {
                    this._bookmark = range.item(0);
                    range.remove(0);
                    sel.empty();
                }
            }

            if (typeof this._relatedPopup.set_relatedElement == "function") {
                this._relatedPopup.set_relatedElement(this.get_element());

                this._forclose_onmousedown$delegate = Function.createDelegate(this, this._forclose_onmousedown);
                if (this._autoClose) {
                    var designWindow = this._designPanel.get_element().contentWindow;
                    var designBody = designWindow.document.body;
                    var button = this;
                    setTimeout(function() {
                        if (button._forclose_onmousedown$delegate != null) {
                            Sys.Extended.UI.HTMLEditor._addEvent(designBody, "mousedown", button._forclose_onmousedown$delegate);
                            Sys.Extended.UI.HTMLEditor._addEvent(designBody, "keydown", button._forclose_onmousedown$delegate);
                            Sys.Extended.UI.HTMLEditor._addEvent(document.body, "keydown", button._forclose_onmousedown$delegate);
                            Sys.Extended.UI.HTMLEditor._addEvent(window, "keydown", button._forclose_onmousedown$delegate);
                            Sys.Extended.UI.HTMLEditor._addEvent(designWindow, "mousedown", button._forclose_onmousedown$delegate);
                            Sys.Extended.UI.HTMLEditor._addEvent(document.body, "mousedown", button._forclose_onmousedown$delegate);
                            if (document.documentElement) {
                                Sys.Extended.UI.HTMLEditor._addEvent(document.documentElement, "mousedown", button._forclose_onmousedown$delegate);
                            }
                        }
                    }, 0);
                }
                this._relatedPopup.open(callback);
            } else {
                this._relatedPopup.open(callback, top, left);
            }
        }
    },

    _forclose_onmousedown: function(e) {
        if (this._forclose_onmousedown$delegate == null) return true;

        if (this._relatedPopup.isOpened) {
            this._relatedPopup.close();
        } else {
            return true;
        }

        if (this._editPanel == Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel) {
            try { // for the case if currently the Design panel is invisible
                if (this._bookmark) {
                    if (Sys.Extended.UI.HTMLEditor.isIE) {
                        var range;
                        if (this._selType == "control") {
                            range = this._designPanel._doc.body.createControlRange();
                            range.add(this._bookmark);
                        } else {
                            range = this._bookmark;
                        }
                        range.select();
                    }
                    this._bookmark = null;
                }

                if (!Sys.Extended.UI.HTMLEditor.isIE) {
                    var sel = this._designPanel._getSelection();
                    var range = this._designPanel._createRange(sel);

                    this._designPanel._removeAllRanges(sel);

                    this._designPanel._selectRange(sel, range);
                    this._designPanel.focusEditor();
                }
            } catch (ex) { }
        }

        var button = this;
        setTimeout(function() {
            if (button._editPanel == Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel) {
                try { button._editPanel.updateToolbar(); } catch (ex) { }
            }
        }, 0);

        if (this._autoClose) {
            try {
                var designWindow = this._designPanel.get_element().contentWindow;
                var designBody = designWindow.document.body;

                if (document.documentElement) {
                    Sys.Extended.UI.HTMLEditor._removeEvent(document.documentElement, "mousedown", this._forclose_onmousedown$delegate);
                }
                Sys.Extended.UI.HTMLEditor._removeEvent(designBody, "keydown", this._forclose_onmousedown$delegate);
                Sys.Extended.UI.HTMLEditor._removeEvent(document.body, "keydown", this._forclose_onmousedown$delegate);
                Sys.Extended.UI.HTMLEditor._removeEvent(window, "keydown", this._forclose_onmousedown$delegate);
                Sys.Extended.UI.HTMLEditor._removeEvent(designBody, "mousedown", this._forclose_onmousedown$delegate);
                Sys.Extended.UI.HTMLEditor._removeEvent(designWindow, "mousedown", this._forclose_onmousedown$delegate);
                Sys.Extended.UI.HTMLEditor._removeEvent(document.body, "mousedown", this._forclose_onmousedown$delegate);
            } catch (ex) { }
        }
        this._forclose_onmousedown$delegate = null;
        if (e && e.type) {
            if (e.type == "keydown") {
                Sys.Extended.UI.HTMLEditor._stopEvent(e);
                return false;
            }
        }
        return true;
    },

    closePopup: function() {
        if (this._forclose_onmousedown$delegate != null) {
            this._forclose_onmousedown$delegate(null);
        }
    },

    dispose: function() {
        if (this._forclose_onmousedown$delegate != null) {
            this._forclose_onmousedown$delegate(null);
        }
        Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton.callBaseMethod(this, "dispose");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModePopupImageButton", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);
