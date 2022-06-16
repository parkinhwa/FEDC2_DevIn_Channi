import PropTypes from 'prop-types';
import { FormInput, FormBtn } from 'components';
import * as S from './style';

export function ThreeForm({ info }) {
  const { title, inputs, isAuth } = info;
  const onClick = () => console.log('클릭');
  return (
    <S.Container>
      {isAuth && inputs.map(input => (
        <FormInput
          key={input.id}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      ))}
      <FormBtn onClick={onClick} text={title} />
    </S.Container>
  );
}

ThreeForm.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }),
    ).isRequired,
    isAuth: PropTypes.bool.isRequired,
  }).isRequired,
};
