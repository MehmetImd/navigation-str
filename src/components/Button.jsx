import PropTypes from 'prop-types';

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) => {

    return (
        <button className='bg-blue-900 text-white border-2 m-2 border-blue-950 p-4'>{children}</button>
    );
};

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = 
            Number(!!primary) 
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary,secondary,success,warning,danger can be true')
        }
    }
};

export default Button;