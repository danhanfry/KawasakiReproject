// Type definitions for React (react-addons-css-transition-group) 15.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import 'react-addons-transition-group';
import { ComponentClass, TransitionGroupProps, CSSTransitionGroupProps } from 'react';

declare module 'react' {
	interface CSSTransitionGroupTransitionName {
		enter: string;
		enterActive?: string;
		leave: string;
		leaveActive?: string;
		appear?: string;
		appearActive?: string;
	}

	interface CSSTransitionGroupProps extends TransitionGroupProps {
		transitionName: string | CSSTransitionGroupTransitionName;
		transitionAppear?: boolean;
		transitionAppearTimeout?: number;
		transitionEnter?: boolean;
		transitionEnterTimeout?: number;
		transitionLeave?: boolean;
		transitionLeaveTimeout?: number;
	}

	type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;

	namespace __Addons {
		export var CSSTransitionGroup: React.CSSTransitionGroup;
	}
}

declare module "react-addons-css-transition-group" {
	var CSSTransitionGroup: React.CSSTransitionGroup;
	type CSSTransitionGroup = React.CSSTransitionGroup;
	export = CSSTransitionGroup;
}
