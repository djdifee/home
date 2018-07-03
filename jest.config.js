module.exports = {
	setupFiles: ['<rootDir>/src/scripts/tests/setup.js'],
	moduleFileExtensions: ['js', 'jsx'],
	moduleDirectories: ['node_modules'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileMock.js',
		'\\.(css|scss)$': '<rootDir>/config/jest/styleMock.js'
	},
	transform: {
		'^.+\\.jsx$': 'babel-jest',
		'^.+\\.js$': 'babel-jest',
	},
};
