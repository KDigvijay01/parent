// Name:        HTMLEditor.Editor.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor");

Sys.Extended.UI.HTMLEditor.Editor = function(element) {
    Sys.Extended.UI.HTMLEditor.Editor.initializeBase(this, [element]);
    
    this._editPanel = null;
    this._changingToolbar = null;
    if (Sys.Extended.UI.HTMLEditor.isIE && Sys.Browser.version == 8 && document.compatMode != "BackCompat" || Sys.Extended.UI.HTMLEditor.isOpera) {
        this._onresize$delegate = Function.createDelegate(this, this._onresize);
    }
}

Sys.Extended.UI.HTMLEditor.Editor.prototype = {
    get_autofocus: function() {
        return this._editPanel.get_autofocus();
    },
    set_autofocus: function(value) {
        this._editPanel.set_autofocus(value);
    },

    get_content: function() {
        return this._editPanel.get_content();
    },
    set_content: function(value) {
        this._editPanel.set_content(value);
    },

    get_activeMode: function() {
        return this._editPanel.get_activeMode();
    },
    set_activeMode: function(value) {
        this._editPanel.set_activeMode(value);
    },

    get_editPanel: function() {
        return this._editPanel;
    },
    set_editPanel: function(value) {
        this._editPanel = value;
    },

    get_changingToolbar: function() {
        return this._changingToolbar;
    },
    set_changingToolbar: function(value) {
        this._changingToolbar = value;
    },

    add_propertyChanged: function(handler) {
        this._editPanel.add_propertyChanged(handler);
    },
    remove_propertyChanged: function(handler) {
        this._editPanel.remove_propertyChanged(handler);
    },

    initialize: function() {
        Sys.Extended.UI.HTMLEditor.Editor.callBaseMethod(this, "initialize");

        var element = this.get_element();
        var oldStyle = element.className;

        Sys.UI.DomElement.removeCssClass(element, oldStyle);
        Sys.UI.DomElement.addCssClass(element, "ajax__htmleditor_editor_base");
        Sys.UI.DomElement.addCssClass(element, oldStyle);

        if (!Sys.Extended.UI.HTMLEditor.isIE && document.compatMode != "BackCompat") {
            this.get_element().style.height = "100%";
        }

        if (Sys.Extended.UI.HTMLEditor.isIE && Sys.Browser.version == 8 && document.compatMode != "BackCompat" || Sys.Extended.UI.HTMLEditor.isOpera) {
            $addHandlers(element, {
                resize: this._onresize$delegate
            });
            var editPanel = this.get_editPanel();
            this._saved_setActive = editPanel._setActive;
            editPanel._setActive = Function.createDelegate(this, this._setActive);
            var editor = this;
            if (Sys.Extended.UI.HTMLEditor.isOpera) {
                setTimeout(function() {
                    editor._ensureVisibleResize();
                }, 0);
            } else {
                editor._ensureVisibleResize();
            }
        }
    },

    _setActive: function(par) {
        var editor = this;
        (Function.createDelegate(this.get_editPanel(), this._saved_setActive))(par);

        if (!Sys.Extended.UI.HTMLEditor.isReallyVisible(this.get_element())) {
            setTimeout(function() {
                editor._ensureVisibleResize();
            }, 0);
        } else {
            editor._ensureVisibleResize();
        }
    },

    _ensureVisibleResize: function() {
        var invisible = false;
        var save;
        if (!Sys.Extended.UI.HTMLEditor.isReallyVisible(this.get_element())) {
            invisible = true;
            save = Sys.Extended.UI.HTMLEditor.setElementVisibility(this.get_element());
        }

        this._onresize();
        if (invisible) {
            Sys.Extended.UI.HTMLEditor.restoreElementVisibility(save);
            delete save;
        }
    },

    dispose: function() {
        if (Sys.Extended.UI.HTMLEditor.isIE && Sys.Browser.version == 8 && document.compatMode != "BackCompat" || Sys.Extended.UI.HTMLEditor.isOpera) {
            $common.removeHandlers(this.get_element(), {
                resize: this._onresize$delegate
            });
            this.get_editPanel()._setActive = this._saved_setActive;
        }

        Sys.Extended.UI.HTMLEditor.Editor.callBaseMethod(this, "dispose");
    },

    _onresize: function(e) {
        try {
            var editPanelTD = this.get_editPanel().get_element().parentNode;
            if (typeof e == "undefined" || e == null) {
                editPanelTD.style.height = "";
            }
            var height = Sys.Extended.UI.HTMLEditor.Editor.MidleCellHeightForIE(editPanelTD.parentNode.parentNode.parentNode, editPanelTD.parentNode);
            editPanelTD.style.height = height;

            if (typeof this.get_editPanel().get_activePanel()._onresize != "undefined") {
                this.get_editPanel().get_activePanel()._onresize();
            }
        } catch (ex) {
        }
        return true;
    }
}

Sys.Extended.UI.HTMLEditor.Editor.registerClass("Sys.Extended.UI.HTMLEditor.Editor", Sys.UI.Control);

Sys.Extended.UI.HTMLEditor.Editor.MidleCellHeightForIE = function(table, row) {
    var height = "100%";
    if (Sys.Extended.UI.HTMLEditor.isIE && document.compatMode != "BackCompat" || Sys.Extended.UI.HTMLEditor.isOpera) {
        try {
            var decrease = 2;
            for (var i = 0; i < table.rows.length; i++) {
                if (table.rows[i] != row) {
                    decrease += (table.rows[i].offsetHeight + 1);
                }
            }
            var clientHeight = table.clientHeight;
            if (Sys.Browser.version == 8 || Sys.Extended.UI.HTMLEditor.isOpera) {
                var styleHeight = table.style.height;
                var parentStyleHeight = table.parentNode.style.height;
                if (styleHeight.indexOf("px") > 0) {
                    clientHeight = parseInt(styleHeight);
                } else if (styleHeight == "100%" && parentStyleHeight.indexOf("px") > 0) {
                    clientHeight = parseInt(parentStyleHeight);
                }
            }
            height = ((clientHeight - decrease) * 100.00 / (clientHeight * 1.00)) + '%';
        } catch (e) {
            height = "";
        }
    }
    return height;
}
