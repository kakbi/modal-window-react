import s from './Button.module.css';

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className={s.button}>
            {children}
        </button>
    );
}

export default Button;
