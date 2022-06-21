import PropTypes from 'prop-types';
import * as S from './style';

export function RoundBtn({
  children,
  type,
  onClick,
  height,
  width,
  align,
  highlight,
}) {
  return (
    <S.Btn
      type={type}
      onClick={onClick}
      height={height}
      width={width}
      align={align}
      highlight={highlight}
    >
      {children}
    </S.Btn>
  );
}

RoundBtn.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  height: PropTypes.oneOf(['1.5rem', '2.5rem', '3rem']),
  width: PropTypes.string,
  align: PropTypes.oneOf(['start', 'center']),
  highlight: PropTypes.bool,
};

RoundBtn.defaultProps = {
  onClick: null,
  height: '2.5rem',
  width: '',
  align: 'center',
  highlight: false,
};
