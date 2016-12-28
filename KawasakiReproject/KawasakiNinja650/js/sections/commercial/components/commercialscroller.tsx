/// <reference path="../../../../../scripts/typings/react/react-global.d.ts" />
/// <reference path="../../../interfaces/commercial.d.ts" />

export class CommercialScroller extends React.Component<IEmptyProperties, any> {
	render() {

		return (

			<div id="slideOneScroller" className="scroll-indicator">
				<div id="scrollIndicatorMask" className="scroll-indicator-mask">
					<div id="slideOneArrow" className="arrow-down"></div>
					<img id="slideOneGloss" className="slide-one-gloss" src="assets/slide1/scrollIndicator_gloss.svg" />
				</div>
			</div>

		);

	}
}