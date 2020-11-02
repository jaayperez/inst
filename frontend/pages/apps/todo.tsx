import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import AppsMenu from 'components/SideMenu/AppsMenu';

/**
 * Note: React Beautiful DND needs custom ssr configuration
 */
const DynamicTodoWithNoSSR = dynamic(() => import('containers/Todo/TodoTabs'), {
	ssr: false,
});

const Todo: NextPage<{}> = () => {
	return (
		<>
			<Head>
				<title>Todo | INST.</title>
				<meta name="Description" content="Inst todo app" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<AppsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '20px', '30px', '0']}>
								<DynamicTodoWithNoSSR />
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Todo;
