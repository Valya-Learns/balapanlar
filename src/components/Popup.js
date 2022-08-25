import scrollLock from 'scroll-lock';
const $scrollableElement = document.querySelector('.page')

class Popup {
	constructor(popupSelector) {
		this._popup = document.querySelector(popupSelector);
		this._popupContainer = this._popup.querySelector('.popup__container');
	}

	open() {
		this._popup.classList.add("popup_opened");
		this._popupContainer.classList.add('popup__container_opened');
		this._setEventListeners();
		scrollLock.disablePageScroll($scrollableElement);
	}

	close() {
		this._popup.classList.remove("popup_opened");
		this._popupContainer.classList.remove('popup__container_opened');
		this._removeEventListeners();
		scrollLock.enablePageScroll($scrollableElement);
	}

	_handlePressEsc = (evt) => {
		evt.preventDefault()
		if (evt.key === "Escape") {
			this.close();
		}
	};

	_handlePressClick = (evt) => {
		if (
			evt.target.classList.contains("popup_opened") ||
			evt.target.classList.contains("popup__close-button")
		) {
			this.close();
		}
	};

	_setEventListeners() {
		this._popup.addEventListener("mousedown", this._handlePressClick);
		document.addEventListener("keydown", this._handlePressEsc);
	}

	_removeEventListeners() {
		this._popup.removeEventListener("mousedown", this._handlePressClick);
		document.removeEventListener("keydown", this._handlePressEsc);
	}
}

export { Popup };
