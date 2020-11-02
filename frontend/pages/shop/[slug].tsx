import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { NextPage } from 'next';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { Button } from 'baseui/button';
import { Select } from 'baseui/select';
import { Input } from 'baseui/input';
import PageTitle from 'components/UiElements/PageTitle/PageTitle';
import Container from 'components/UiElements/Container/Container';
import Carousel, { Slide } from 'components/UiElements/Carousel/Carousel';
import useDirection from '../../utils/useDirection';
import { withApollo } from '../../apollo/client';

import Wrapper, {
	MediaWrapper,
	Image,
	ContentWrapper,
	List,
	ListItem,
	ProductTitle,
	ProductPrice,
	ProductDescription,
} from '../../components/PageStyles/Product.styled';
import { useCartDispatch } from '../../contexts/cart/cart.provider';

const GET_PRODUCT = gql`
	query getProductBySlug($slug: String!) {
		product(slug: $slug) {
			id
			name
			slug
			price
			thumbnail
			gallery {
				url
			}
			colors {
				id
				label
			}
			features
			description
		}
	}
`;

toast.configure();

const ProductSingle: NextPage<{}> = () => {
	const {
		query: { slug },
	} = useRouter();

	const { data, loading, error } = useQuery(GET_PRODUCT, {
		variables: {
			slug,
		},
		notifyOnNetworkStatusChange: true,
	});

	const dispatch = useCartDispatch();
	const [color, setColor] = useState<any>([
		{
			label: 'Black',
			id: 'black',
			code: '#000',
		},
	]);
	const [quantity, setQuantity] = useState('1');
	const [direction] = useDirection();
	console.log(color, quantity, 'color');

	if (!data) return null;
	const {
		id,
		name,
		description,
		price,
		thumbnail,
		colors,
		gallery,
		features,
	} = data.product;

	function handleAddToCart() {
		const item = {
			id,
			name,
			thumbnail,
			color: color.length !== 0 ? color[0].id : undefined,
			quantity,
			price,
		};
		dispatch({ type: 'ADD_ITEM', payload: item });
		toast('Added to the bag', {
			progressClassName: 'fancy-progress-bar',
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	}

	console.log(data, 'data');

	return (
		<>
			<Head>
				<title>{name} | INST.</title>
				<meta name="Description" content={description} />
			</Head>

			<PageTitle
				title={name}
				subtitle="Awesome GitHub T-shirts and other cool swag"
			/>

			<Container>
				<Wrapper>
					<MediaWrapper>
						{gallery && gallery.length !== 0 ? (
							<Carousel
								options={{ direction }}
								controls={false}
								carouselSelector="productGallery"
								thumbs={gallery}
							>
								{gallery.map((item: any, index: number) => (
									<Slide key={`gallery-key${index}`}>
										<img src={item.url} alt="Gallery" />
									</Slide>
								))}
							</Carousel>
						) : (
							<Image src={thumbnail} alt={name} />
						)}
					</MediaWrapper>
					<ContentWrapper>
						<ProductTitle>{name}</ProductTitle>
						<ProductPrice>$ {price}</ProductPrice>
						<Input
							value={quantity}
							onChange={(e: any) => setQuantity(e.target.value)}
							type="number"
							overrides={{
								Root: {
									style: () => {
										return {
											width: '100%',
											marginBottom: '30px',
											'@media only screen and (min-width: 376px)': {
												maxWidth: '240px',
											},
										};
									},
								},
								InputContainer: {
									style: () => {
										return { backgroundColor: 'transparent' };
									},
								},
							}}
						/>
						{colors && (
							<Select
								options={colors}
								placeholder="Select color"
								value={color}
								onChange={(params) => setColor(params.value)}
								overrides={{
									Root: {
										style: () => {
											return {
												width: '100%',
												'@media only screen and (min-width: 376px)': {
													maxWidth: '240px',
												},
											};
										},
									},
									ControlContainer: {
										style: () => {
											return { backgroundColor: 'transparent' };
										},
									},
								}}
							/>
						)}
						{features && (
							<List>
								{features.map((item: string, index: number) => (
									<ListItem key={`${slug}_key ${index}`}>
										<FiCheck />
										&nbsp; {item}
									</ListItem>
								))}
							</List>
						)}
						{description && (
							<ProductDescription>{description}</ProductDescription>
						)}
						<Button
							onClick={handleAddToCart}
							overrides={{
								BaseButton: {
									style: ({ $theme }) => {
										return {
											...$theme.typography.font450,
											width: '100%',
											'@media only screen and (min-width: 376px)': {
												maxWidth: '240px',
												...$theme.typography.font250,
											},
										};
									},
								},
							}}
						>
							Add to cart
						</Button>
					</ContentWrapper>
				</Wrapper>
			</Container>
		</>
	);
};

export default withApollo(ProductSingle);
