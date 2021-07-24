import React, { useState } from 'react';

const App = () =>  {
  return (
	  <div>
		  <Folder name="src" isOpen={false}>
			  <Folder name="music">
				  <File name="all_star.mp4" />
				  <File name="black_hole.mp4" />
			  </Folder>
			<File name="dogs.jpg" />
		  </Folder>
		  <Folder name="kek"/>
	  </div>
  );
}

const Folder = props => {
	const [ isOpen, setIsOpen ] = useState(false);
	const { name, children } = props;
	const caretDirection = isOpen ? 'down' : 'right';

	const styles = { marginLeft: '17px' };

	const handleClick = () => setIsOpen(!isOpen);

	return (
		<div>
			<span onClick={handleClick}>
				<i className={`caret ${caretDirection} icon`}></i>
				<i className='folder icon'></i>
				{name}
			</span>
			<div style={styles}>
				{isOpen ? children : null}
			</div>
		</div>
	)
};

const File = props => {
	const { name } = props;
	const fileExtension = name.split('.')[1];
	const fileIcons = {
		mp4: 'headphones',
		jpg: 'file image',
		png: 'file image outline'
	};

	return (
		<div>
			<i className={`${fileIcons[fileExtension]} icon`}></i>
			{name}
		</div>
	);
};

export default App;
