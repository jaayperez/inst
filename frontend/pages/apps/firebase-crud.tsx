import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "../../components/UiElements/Container/Container";
import AppsMenu from "../../components/SideMenu/AppsMenu";
import FirebaseCrud from "../../containers/Crud/Crud";

const TITLE = "Firebase CRUD";
const SUB_TITLE =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";

const FirebaseCRUD: NextPage<{}> = () => {
	return (
		<>
			<Head>
				<title>{TITLE} | INST.</title>
				<meta name="Description" content={SUB_TITLE} />
			</Head>

			<Container>
				<Block paddingTop={["0", "0", "0", "40px"]}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<AppsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={["10px", "7px", "30px", "0"]}>
								<FirebaseCrud />
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default FirebaseCRUD;
