import './style.scss';

const Button = ({className, title, onClick, children}) => {
    return <>
    <button className={className} onClick={onClick}>{title}{children}</button>
    </>
}

export default Button;