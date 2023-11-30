"use strict";

class User {
	/** @type {number} */
	#id;
	/** @type {string} */
	#name;
	/** @type {string} */
	#username;
	/** @type {string} */
	#email;

	constructor(id, name, username, email) {
		this.#id = id;
		this.#name = name;
		this.#username = username;
		this.#email = email;
	}
	/** @returns {number} */
	get id() {
		return this.#id;
	}
	//we won't make a set id as it should never be changed.
	
	/** @returns {string} */
	get fullName() {
		return this.#name;
	}
	set fullName(name) {
		this.#name = name;
	}
	/** @returns {string} */
	get username() {
		return this.#username;
	}
	set username(username) {
		this.#username = username;
	}
	/** @returns {string} */
	get email() {
		return this.#email;
	}
	set email(email) {
		this.#email = email;
	}
	/** @returns {string} */
	get firstName() {
		return this.#name.trim().split(" ")[0];
	}

	/** @returns {HTMLElement} */
	getInfo() {
		//we need a helper function here
		function createDetailElement(name, value) {
			let element = document.createElement("p");
			element.classList.add("user-info-p");
			element.innerHTML = `<b>${name}:</b> ${value}`;
			return element;
		}

		let element = document.createElement("div");
		element.classList.add("user-info");

		let h2 = document.createElement("h2");
		h2.innerHTML = "User Info";
		element.appendChild(h2);

		element.appendChild(createDetailElement("User id", this.id));
		element.appendChild(createDetailElement("Username", this.username));
		element.appendChild(createDetailElement("Full Name", this.fullName));
		element.appendChild(createDetailElement("Email", this.email));

		let button = document.createElement("button");
		button.classList.add("ok-button");
		button.innerHTML = "ok";
		element.appendChild(button);
		
		return element;
	}
}

export default User;