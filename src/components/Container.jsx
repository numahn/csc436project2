const Container = ({ children, className }) => {
	return (
		<section className={`${className}`}>
			{children}
		</section>
	);
};

Container.defaultProps = {
	className: '',
};

export default Container;
