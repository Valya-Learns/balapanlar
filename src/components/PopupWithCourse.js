import { Popup } from "./Popup.js";

export class PopupWithCourse extends Popup {
	constructor(popupSelector) {
		super(popupSelector)
	}

	open(nodeElem) {
		const content = this._popup.querySelector('.popup__content')
		content.innerHTML = nodeElem
		super.open()
	}
}
