import React, { useState, useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { ChatContext } from "../ChatContext";
import {
	Icon,
	SearchInput,
	Input,
	UserList,
	UserListItem,
	UserListItemImage,
	UserListItemInfo,
	UserName,
	UserMessage,
} from "./ChatSidebar.styled";
// demo data
import { chatData } from "../../../data/chatApp";

const ChatSidebar = ({ setToggleSidebar, resetChat }) => {
	const [data, setData] = useState(chatData);
	const [text, setText] = useState("");
	const { user, handleSelectedUser } = useContext(ChatContext);
	const handleOnClick = (item) => {
		setToggleSidebar(false);
		handleSelectedUser(item);
		resetChat();
	};

	const filteredUser = data.filter((item) =>
		item.name.toLowerCase().includes(text.toLowerCase())
	);

	return (
		<>
			<SearchInput>
				<Icon>
					<IoIosSearch />
				</Icon>
				<Input
					onChange={(e) => setText(e.target.value)}
					type="text"
					placeholder="Search Friend"
				/>
			</SearchInput>
			<UserList>
				{filteredUser.map((item) => (
					<UserListItem
						key={`user-item--${item.id}`}
						$isActive={item.id === user.id}
						onClick={() => handleOnClick(item)}
					>
						<UserListItemImage src={item.image} alt={item.name} />
						<UserListItemInfo>
							<UserName>{item.name}</UserName>
							<UserMessage>{item.message}</UserMessage>
						</UserListItemInfo>
					</UserListItem>
				))}
			</UserList>
		</>
	);
};

export default ChatSidebar;
