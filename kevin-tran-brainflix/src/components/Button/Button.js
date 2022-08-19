import "./Button.scss";

function Button(props) {
    let buttonText = props.buttonText;
    let buttonIcon = props.buttonIcon;
    let buttonClass = props.buttonClass;
    return (
        <>
            <button type="submit" className={buttonClass}>
                <img
                    src={buttonIcon}
                    alt="button icon"
                    className="button__icon"
                />
                {buttonText}
            </button>
        </>
    );
}

export default Button;