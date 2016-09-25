(function($) {

    var Tokens = (function() {
        var tokens = {};
        tokens.callbacks = {};

        var callbackCheck = function(name, args) {
            var callback = undefined;
            // console.log(name,args);
            if (!!tokens.callbacks[name] &&
                typeof tokens.callbacks[name] === 'function') {

                return tokens.callbacks[name].apply(this, args);
            }
            return undefined;
        };

        tokens.init = function(options, initCallback) {

            if (options.on) {
                for (var call in options.on) {
                    if (options.on.hasOwnProperty(call)) {
                        tokens.callbacks[call] = options.on[call];
                    }
                }
            }
            if (!!options.endPoint) {
                tokens.endPoint = options.endPoint;
            } else {
                throw "endPoint paramenter is mandatory";
            }
            if (!!options.callMethod) {
                tokens.method = options.callMethod;
            }
            initCallback();
        };

        tokens.bindElements = function(element) {
            element.on('keypress', function(event) {
                var callback = undefined;
                callback = callbackCheck('keypress', [event, element]);
                if (!callback && callback !== undefined) {
                    return;
                }
                // console.log(element.val());
                tokens.callEndPoint(element.val());
            });
        };

        tokens.callEndPoint = function(value) {

            var callback = undefined;
            callback = callbackCheck('beforeAjax', []);
            if (!callback && callback !== undefined) {
                return;
            } else {

                $.ajax({
                    url: tokens.endPoint,
                    method: tokens.method || 'GET'
                        // dataType : "application/json"
                }).success(function(results) {

                    // console.log('success',results);
                    var callback = undefined;
                    callback = callbackCheck('success', [results]);
                    tokens.showResults(results);
                    if (!callback && callback !== undefined) {
                        return;
                    }
                }).fail(function() {
                    var callback = undefined;
                    callback = callbackCheck('error', arguments);
                    if (!callback && callback !== undefined) {
                        return;
                    }
                });

            }
        };

        tokens.showResults = function(results) {
          $.each(results,function(i,elem){
            // here the template Features would go
            $("#results").append('<span id="result'+i+'">'+elem.a+'</span>')
            console.log($(this),i,elem.a);
          })
        };

        return tokens;
    })();

    $.fn.tokens = function(options) {

        if (typeof options === 'string' && typeof arguments[1] === 'function') {
            Tokens[options](arguments[1]);

        } else {

            var opts = $.extend({}, $.fn.tokens.defaults, options);
            var self = this;
            Tokens.init(opts, function() {
                // console.log('callback',self);
                Tokens.bindElements(self);
                Tokens.initHasRunned = true;
            });
        }

    };
    $.fn.tokens.defaults = {
        on: {
            keypress: undefined,
            beforeAjax: undefined,
            success: undefined,
            error: undefined
        }
    };



}(jQuery));
$(document).ready(function() {

    $('#ceva').tokens({
        bla: 'ssss',
        endPoint: 'bla.json',
        on: {
            success: function(rez) {
                console.log(rez);
            }
        }
    });
});
