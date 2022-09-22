export const getVariantString = (disabled, primary, secondary) => {
    if (disabled) return 'disabled';
    if (primary) return 'primary';
    if (secondary) return 'secondary';
    return 'default';
};

export const getStyle = (props) => ({
    background: props.theme.colors[props.variant]?.main ?? props.theme.colors.white,
    borderColor: props.theme.colors[props.variant]?.dark ?? props.theme.colors.grey[300],
    color: props.theme.colors[props.variant]?.contrast ?? props.theme.colors.black,
    hoverBackground: props.theme.colors[props.variant]?.dark ?? props.theme.colors.grey[300],
});
