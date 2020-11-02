import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { FaComments } from 'react-icons/fa';
import { AiFillCaretUp } from 'react-icons/ai';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import Loader from 'components/UiElements/Loader/Loader';
import Container from 'components/UiElements/Container/Container';
import ListGridCard from 'components/UiElements/ListGridCard/ListGridCard';
import AppsMenu from 'components/SideMenu/AppsMenu';
import { withApollo } from 'apollo/producthunt.client';
import { useQuery, gql } from '@apollo/client';

const getProducthuntItems = gql`
	query {
		posts(first: 10) {
			edges {
				node {
					id
					name
					# description
					tagline
					thumbnail {
						url
					}
					commentsCount
					website
					votesCount
				}
			}
		}
	}
`;

const TITLE = 'Today';
const SUB_TITLE =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod';

const ProductHunt: NextPage<{}> = () => {
	const { data, loading, error } = useQuery(getProducthuntItems);
	//TODO add comments ICON and implement loading and error

	return (
		<>
			<Head>
				<title>{TITLE} | INST.</title>
				<meta name="Description" content="Inst product hunt app" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<AppsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block
								paddingTop={['10px', '15px', '30px', '0']}
								paddingBottom="30px"
								overrides={{
									Block: {
										style: ({ $theme }) => {
											return {
												borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
											};
										},
									},
								}}
							>
								<Block
									as="h3"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font450,
													color: $theme.colors.primary,
													marginBottom: '10px',
												};
											},
										},
									}}
								>
									{TITLE}
								</Block>
								<Block
									as="p"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font200,
													color: $theme.colors.contentSecondary,
												};
											},
										},
									}}
								>
									{SUB_TITLE}
								</Block>
							</Block>

							{!loading ? (
								<>
									{data?.posts?.edges.map(({ node: app }: any) => (
										<Block
											key={`app-key${app.id}`}
											overrides={{
												Block: {
													style: ({ $theme }) => {
														return {
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'space-between',
															paddingTop: '23px',
															paddingBottom: '20px',
															borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
														};
													},
												},
											}}
										>
											<ListGridCard
												thumb={app?.thumbnail?.url}
												thumbWidth={'54px'}
												title={app.name}
												description={app.tagline}
												websiteUrl={app.website}
												btn={
													<Button
														onClick={() => alert('click')}
														size="compact"
														shape="pill"
														kind="secondary"
														overrides={{
															BaseButton: {
																style: ({ $theme }) => {
																	return {
																		...$theme.typography.font150,
																		marginTop: $theme.sizing.scale500,
																		minWidth: '56px',
																	};
																},
															},
														}}
													>
														<FaComments />
														&nbsp;{app.commentsCount}
													</Button>
												}
												style={{
													alignItems: 'flex-start',
												}}
											/>
											<Button
												kind="secondary"
												overrides={{
													BaseButton: {
														style: ({ $theme }) => {
															return {
																minWidth: '80px',
																justifyContent: 'space-around',
																...$theme.typography.font250,
															};
														},
													},
												}}
											>
												<AiFillCaretUp /> {app?.votesCount}
											</Button>
										</Block>
									))}
								</>
							) : (
								<Loader />
							)}
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default withApollo(ProductHunt);
