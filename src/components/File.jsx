const File = props => {
	const { name } = props;
	const fileExtension = name.split('.')[1];
	const fileIcons = {
		mp4: 'headphones',
		jpg: 'file image',
		png: 'file image outline',
		json: 'file outline',
		md: 'file alternate outline'
	};

	return (
		<div>
			<i className={`${fileIcons[fileExtension]} icon`}></i>
			{name}
		</div>
	);
};

export default File;