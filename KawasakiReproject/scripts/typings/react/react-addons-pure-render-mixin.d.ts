// Type definitions for React (react-addons-pure-render-mixin) 0.14
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Mixin } from 'react';

declare module 'react' {

	interface PureRenderMixin extends Mixin<any, any> { }

	namespace __Addons {
		export var PureRenderMixin: PureRenderMixin;
	}

}

declare module "react-addons-pure-render-mixin" {
	var PureRenderMixin: React.PureRenderMixin;
	type PureRenderMixin = React.PureRenderMixin;
	export = PureRenderMixin;
}