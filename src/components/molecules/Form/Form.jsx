import PropTypes from 'prop-types';
import { FormInput, FormBtn, FormLink } from 'components';
import * as S from './style';

export function Form({ info, onChange, onSubmit }) {
  const {
    title,
    inputs,
    isAuth,
    link: { introText, linkText, linkPath },
  } = info;
  return (
    <S.Container onSubmit={onSubmit}>
      {isAuth && <S.Title>{title}</S.Title>}
      {inputs.map(input => (
        <FormInput key={input.id} input={input} onChange={onChange} />
      ))}
      <FormBtn text={title} />
      {isAuth && (
        <FormLink
          introText={introText}
          linkText={linkText}
          linkPath={linkPath}
        />
      )}
    </S.Container>
  );
}

Form.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }),
    ).isRequired,
    isAuth: PropTypes.bool.isRequired,
    link: PropTypes.shape({
      introText: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkPath: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
