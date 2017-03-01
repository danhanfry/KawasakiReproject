interface IExperienceSlide {
	calculation(): void;
	setTweenMechanism(): void;
	eventInitialize(): void;
	resize(): void;
	setScrollMagicMechanism(): void;
}

abstract class ExperienceSlide implements IExperienceSlide {

	abstract calculation = (): void => {

	}

	abstract setTweenMechanism = (): void => {

	}

	abstract eventInitialize = (): void => {

	}

	abstract resize = (): void => {

	}

	abstract setScrollMagicMechanism = (): void => {

	}
}