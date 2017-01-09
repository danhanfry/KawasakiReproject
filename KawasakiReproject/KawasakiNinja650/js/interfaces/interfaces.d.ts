/// <reference path="../models/enums/svg-enums.d.ts" />

interface IKawasakiSvgElement {
	id: string;
	className: string;
	x: string;
	y: string;
	width: string;
	height: string;
	useDefinition?: boolean;
}

interface ISvgShapeElement {
	id: string;
	className: string;
	x: string;
	y: string;
	width: string;
	height: string;
}

interface IElementPosition {
	positionLeft: number;
	positionTop: number;
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