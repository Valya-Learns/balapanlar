import { Popup } from "./Popup.js";

export class PopupWithBurger extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this.burgerButton = document.querySelector('.burger-button');
		this._burgerButtonElements = this.burgerButton.querySelectorAll(".burger-button__line-element");
	}

	open() {
		this._popup.classList.add("popup_opened");
		this._setEventListeners();
		this._toggleBurgerButton();
	}

	close() {
		this._popup.classList.remove("popup_opened");
		this._removeEventListeners();
		this._toggleBurgerButton();
	}

	toggleBurgerMenu = () => {
		this._popup.classList.contains("popup_opened") ? this.close() : this.open();
	}

	_handlePressClick = (evt) => {
		if (
			!evt.target.classList.contains("popup_opened") &&
			!evt.target.classList.contains("logo_type_header-animals")
		) {
			this.close();
		}
	};

	deactivateBurgerButton() {
		this._burgerButtonElements.forEach(function(element) {
			element.classList.remove("burger-button__line-element_active");
		});
	}

	_toggleBurgerButton() {
		this._burgerButtonElements.forEach(function(element) {
			if (!element.classList.contains("burger-button__line-element_active")) {
				element.classList.add("burger-button__line-element_active");
			} else {
				element.classList.remove("burger-button__line-element_active");
			}
		});
	}

}
