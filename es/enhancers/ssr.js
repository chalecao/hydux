import * as tslib_1 from "tslib";
import Cmd from './../cmd';
export default function withSSR(options) {
    var _this = this;
    return function (app) { return function (props) {
        var initCmd = Cmd.none;
        var ctx = app(tslib_1.__assign({}, props, { init: function () {
                var result = props.init();
                if (!(result instanceof Array)) {
                    result = [result, Cmd.none];
                }
                initCmd = result[1];
                return [result[0], result[1]];
            } }));
        ctx.render = function (state) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var view;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(initCmd.map(function (sub) { return sub(ctx.actions); }))];
                    case 1:
                        _a.sent();
                        state = state || ctx.state;
                        view = ctx.view(state, ctx.actions);
                        return [2 /*return*/, options.renderToString(view)];
                }
            });
        }); };
        return ctx;
    }; };
}
//# sourceMappingURL=ssr.js.map