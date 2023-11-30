"use strict";

import User from "./user.js"

class Subscriber extends User {
	/** @type {Object[]} */
	#pages;
	/** @type {Object[]} */
	#groups;
	/** @type {boolean} */
	#canMonetize;
	constructor(id, name, username, email) {
		super(id,name,username,email);
		this.#pages = [];
		this.#groups = [];
		this.#canMonetize = false;
	}
	/** @returns {Object[]} */
	get pages() {
		return this.#pages;
	}
	addPage(page) {
		this.#pages.push(page);
	}
	/** @returns {boolean} whether the page was successfully removed */
	removePage(page) {
		let index = this.#pages.find(page);
		if (index!==-1) {
			this.#pages.splice(index, 1);
			return true;
		}
		return false;
	}
	/** @returns {Object[]} */
	get groups() {
		return this.#groups;
	}
	addGroup(page) {
		this.#groups.push(page);
	}
	/** @returns {boolean} whether the group was successfully removed */
	removeGroup(group) {
		let index = this.#groups.find(group);
		if (index!==-1) {
			this.#groups.splice(index, 1);
			return true;
		}
		return false;
	}
	/** @returns {boolean} */
	get monetized() {
		return this.#canMonetize;
	}
	set monetized(bool) {
		this.#canMonetize = bool;
	}

	/** @returns {HTMLElement} */
	getInfo() {
		function createDetailElement(name, value) {
			let element = document.createElement("p");
			element.classList.add("user-info-p");
			element.innerHTML = `<b>${name}:</b> ${value}`;
			return element;
		}
		let element = super.getInfo();

		let cols = [];

		let colContainer = document.createElement('div');
		colContainer.classList.add("columns");

		["Pages", "Groups"].forEach(string=>{
			let col = document.createElement("div");
			col.classList.add("col");
			
			let title = document.createElement("h3");
			title.innerHTML = string;
			col.appendChild(title);

			cols.push(col);
			colContainer.appendChild(col);
		});

		cols[0].appendChild(this.getPages());
		cols[1].appendChild(this.getGroups());

		element.appendChild(colContainer);

		element.appendChild(createDetailElement("Monetized?", (this.monetized) ? "yes": "no" ));

		let button = element.querySelector(".ok-button");
		element.removeChild(button);
		element.appendChild(button);
		return element;
	}

	getPages() {
		let element = document.createElement("p");
		for (let i=0;i<this.pages.length;++i) {
				element.innerHTML+=this.pages[i];
			if (i<this.pages.length-1) {
				element.innerHTML+=", ";
			}
		}
		return element;
	}

	getGroups() {
		let element = document.createElement("p");
		for (let i=0;i<this.groups.length;++i) {
				element.innerHTML+=this.groups[i];
			if (i<this.groups.length-1) {
				element.innerHTML+=", ";
			}
		}
		return element;
	}
}

export default Subscriber;