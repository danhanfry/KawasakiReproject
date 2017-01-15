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
	id: string;
	className: string;
	x: string;
	y: string;
	width: string;
	height: string;
}

interface ISVGGTagProperties {
	id: string;
	transform: string;
	stroke: string;
	strokeWidth: string;
	fill: string;
	fillRule: string;
}

interface ISVGUseTagProperties {
	id: string;
	stroke: string;
	mask: string;
	strokeWidth: string;
	usesId: string;
}

interface ISVGPathTagProperties {
	id: string;
	d: string;
	fill: string;
}

interface ISVGRectTagProperties {
	id: string;
	x: string;
	y: string;
	width: string;
	height: string;
	rx: string;
}

interface ISVGMaskTagProperties {
	id: string;
	maskContentUnits: string;
	maskUnits: string;
	x: string;
	y: string;
	width: string;
	height: string;
	fill: string;
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