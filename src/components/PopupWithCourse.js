import { Popup } from "./Popup.js";

export class PopupWithCourse extends Popup {
	constructor(popupSelector) {
		super(popupSelector)
	}

	open(nodeElem) {
		const content = this._popup.querySelector('.popup__content')
		content.innerHTML = nodeElem;
		content.querySelector('.flex-container_info').style = 'flex-direction: row';
		content.querySelector('.flex-container_text').style = 'gap: 30px';
		content.querySelector('.course-card__list').style = `
		display: grid;
		grid-template-columns: max(500px) max(500px);
		column-gap: 50px
		`
			super.open()
	}
}
