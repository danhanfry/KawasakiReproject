/// <reference path="../models/enums/svg-enums.d.ts" />

interface IKawasakiSvgElementProperties {
	id: string;
	className: string;
	x: string;
	y: string;
	width: string;
	height: string;
	useDefinition?: boolean;
}

interface ISvgShapeElementProperties {
	readonly id: string;
	readonly className: string;
	readonly x: string;
	readonly y: string;
	readonly width: string;
	readonly height: string;
}

interface ISVGGTagProperties {
	readonly id: string;
	readonly transform: string;
	readonly stroke: string;
	readonly strokeWidth: string;
	readonly fill: string;
	readonly fillRule: string;
}

interface ISVGUseTagProperties {
	readonly id: string;
	readonly stroke: string;
	readonly mask: string;
	readonly strokeWidth: string;
	readonly usesId: string;
}

interface ISVGPathTagProperties {
	readonly id: string;
	readonly d: string;
	readonly fill: string;
}

interface ISVGRectTagProperties {
	readonly id: string;
	readonly x: string;
	readonly y: string;
	readonly width: string;
	readonly height: string;
	readonly rx: string;
}

interface ISVGMaskTagProperties {
	readonly id: string;
	readonly maskContentUnits: string;
	readonly maskUnits: string;
	readonly x: string;
	readonly y: string;
	readonly width: string;
	readonly height: string;
	readonly fill: string;
}

interface IElementPosition {
	positionLeft: number;
	positionTop: number;
}

interface IElementDimension {
	width: number;
	height: number;
}

interface IDimensionPosition {
	width: number;
	height: number;
	outerWidth: number;
	outerHeight: number;
	outerWidthWithMargin: number;
	outerHeightWithMargin: number;
	positionLeft: number;
	positionTop: number;
}

interface IScaleProportional {
	width: number;
	height: number;
	scaleToTargetWidth: boolean;
	targetleft: number;
	targettop: number;
}

interface IEmptyProperties {
}

interface IEmptyStates {

}