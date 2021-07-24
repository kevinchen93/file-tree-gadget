import React, { useState } from 'react';
import styled from 'styled-components';

function Folder(props) {
	const [ isOpen, setIsOpen ] = useState(false);
	const { name, children } = props;
	const caretDirection = isOpen ? 'down' : 'right';
	const outline = isOpen ? 'outline' : '';

	const Wrapper = styled.div`
		margin-left: 1rem;
	`;

	const handleClick = () => setIsOpen(!isOpen);

	return (
		<div>
			<span onClick={handleClick}>
				<i className={`caret ${caretDirection} icon`}></i>
				<i className={`folder ${outline} icon`}></i>
				{name}
			</span>
			<Wrapper>
				{isOpen ? children : null}
			</Wrapper>
		</div>
	)
};

export default Folder;