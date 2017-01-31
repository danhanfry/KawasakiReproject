// Type definitions for React (react-addons-shallow-compare) 0.14
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

export = React.__Addons.ShallowCompare.shallowCompare;

declare module 'react' {

	namespace __Addons {
		namespace ShallowCompare {
			export function shallowCompare<P, S>(component: Component<P, S>, nextProps: P, nextState: S): boolean;
		}
	}
}