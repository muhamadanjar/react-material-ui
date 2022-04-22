interface IProps {
	title?: string;
}

const Header: React.FC<IProps> = (props) => {
	return <>
	{props}
	</>
}

export default Header;