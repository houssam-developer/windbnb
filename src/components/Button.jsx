import React from 'react';
import * as MdIcons from 'react-icons/md';

function Button({ text, variant = 'default', disableShadow, disabled, startIcon = '', endIcon = '', size = '', color = 'default', extendClassCSS }) {
	// TODO guard clause in case of incorrect variant

	console.log(`#text: ${text} #variant: ${variant} #disableShadow: ${disableShadow} #disabled: ${disabled} `);

	let setClassNames = `btn`;

	if (color === 'default') { addColor('button--default'); }
	if (color === 'primary') { addColor(color); }
	if (color === 'secondary') { addColor(color); }
	if (color === 'danger') { addColor(color); }

	function addColor(targetVal) {
		if (variant === 'default') { setClassNames += ` ${targetVal}`; }
		if (variant === 'text') { setClassNames += ` ${targetVal}--text`; }
		if (variant === 'outline') { setClassNames += ` ${targetVal}--outline`; }
	}

	console.log('setClassNames: ', setClassNames);

	if (disableShadow) { setClassNames = `${setClassNames} btn--disableshadow` }

	if (disabled) { setClassNames = `${setClassNames} btn--disabled` }

	if (size === 'sm') { setClassNames = `${setClassNames} btn-size--small`; }
	if (size === 'md') { setClassNames = `${setClassNames} btn-size--medium`; }
	if (size === 'lg') { setClassNames = `${setClassNames} btn-size--large`; }


	// ICON
	let startIconVal;
	let endIconVal;

	if (startIcon) {
		try {
			startIconVal = MdIcons[startIcon]();
		} catch (ex) {
			console.log('unknown icon name');
		}
	}
	if (endIcon) {
		try {
			endIconVal = MdIcons[endIcon]();
		} catch (ex) {
			console.log('unknown icon name');
		}
	}

	function handleBtnClickEvent(e) { console.log('click'); }


	return (
		<button className={setClassNames} disabled={disabled} onClick={handleBtnClickEvent}>
			{startIcon ? startIconVal : ''}
			{text}
			{endIcon ? endIconVal : ''}
		</button>
	)
}

export default Button;