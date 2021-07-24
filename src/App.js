import React from 'react';
import Folder from './components/Folder';
import File from './components/File';

const App = () =>  {
  return (
	  <div>
		  <Folder name="src" isOpen={false}>
			  <Folder name="music">
				  <File name="all_star.mp4" />
				  <File name="wildest_dreams.mp4" />
			  </Folder>
			<File name="dogs.jpg" />
		  </Folder>
		  <File name="package.json" />
		  <File name="README.md" />
	  </div>
  );
}

export default App;