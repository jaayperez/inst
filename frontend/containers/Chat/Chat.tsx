import React, { useState, useEffect } from "react";
import Eliza from "elizabot";
import { BsArrowLeft } from "react-icons/bs";
import ChatProvider from "./ChatContext";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ShowChats from "./ShowChats/ShowChats";
import ChatInput from "./ChatInput/ChatInput";
import Wrapper, {
	Sidebar,
	Message,
	Header,
	ArrowButton,
	Body,
	Footer,
} from "./Chat.styled";

const eliza = new Eliza();

const Chat = () => {
	const [chats, setChats] = useState([]);
	const [value, setValue] = useState("");
	const [listen, setListen] = useState(false);
	const [toggleSidebar, setToggleSidebar] = useState(false);

	useEffect(() => {
		const setReply = () => {
			const reply = eliza.transform(value);
			chats.push({ id: Date.now(), type: "eliza", message: reply });
			setChats([...chats]);
			setListen(false);
		};
		setTimeout(() => {
			if (listen) setReply();
		}, 1000);

		// scroll to bottom
		const chatBody = document.getElementById("chatBody");
		chatBody.scrollTop = chatBody.scrollHeight;
	}, [listen]);

	const handleChat = (e) => {
		e.preventDefault();
		if (value === "") {
			return alert("Please write your message!");
		}
		chats.push({ id: Date.now(), type: "author", message: value });
		setChats([...chats]);
		setValue("");
		setListen(true);
	};

	const resetChat = () => {
		setChats([]);
	};

	return (
		<ChatProvider>
			<Wrapper>
				<Sidebar $isActive={toggleSidebar}>
					<ChatSidebar
						resetChat={resetChat}
						setToggleSidebar={setToggleSidebar}
					/>
				</Sidebar>
				<Message>
					<Header>
						<ArrowButton onClick={() => setToggleSidebar(!toggleSidebar)}>
							<BsArrowLeft />
						</ArrowButton>
						<ChatHeader />
					</Header>
					<Body id="chatBody">
						<ShowChats chats={chats} />
					</Body>
					<Footer>
						<ChatInput
							value={value}
							onChange={(e) => setValue(e.target.value)}
							onSubmit={handleChat}
						/>
					</Footer>
				</Message>
			</Wrapper>
		</ChatProvider>
	);
};

export default Chat;
