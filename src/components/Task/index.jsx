import React, { useState } from 'react';
import './style.css';

export const Task = ({
	id,
	text,
	completed,
	createdDate,
	completedDate,
	onTaskToggled
}) => {

	// const [xxx, setXxx] = useState(null);

	return (
		<li className="task">
			<input 
				type="checkbox" 
				checked={completed}
				onChange={ () => {onTaskToggled(id, !completed)}}
				 />
            <label className={ completed ? "completed" : null}>
				{text}
				<small>{completedDate}</small>
				</label>
		</li>
	)

	// !completed je tam proto, že já tam mam něco navoleno (true v completed) a když na to kliknu, tak tam chci nastavit opak toho, co je tam nastaveno
}
