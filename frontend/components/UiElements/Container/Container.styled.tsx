import { styled } from 'baseui';

const ContainerArea = styled('div', {
	width: '100%',
	maxWidth: '1080px',
	paddingLeft: '15px',
	paddingRight: '15px',
	margin: '0 auto',
	position: 'relative',
	zIndex: 1,

	'@media screen and (max-width: 1135px)': {
		maxWidth: '920px',
	},
});

export default ContainerArea;
