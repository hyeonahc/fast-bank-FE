import { Dispatch, SetStateAction } from 'react';
import * as S from '@/components/SuccessModal/style';
import ButtonStyled from '@/components/common/Button/ButtonText';
import Loading from '@/components/common/Loading';

interface Props {
  isLoading: boolean;
  title: string;
  buttonText: string;
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
  onClickConfirm: () => void;
}

const CheckoutModal = (props: Props) => {
  const {
    isLoading,
    title,
    buttonText,
    displayModal,
    setDisplayModal,
    onClickConfirm,
  } = props;

  const onClickHandler = () => {
    setDisplayModal(true);
    onClickConfirm?.();
  };

  return (
    <S.SuccessModalBackground
      style={{ display: displayModal ? 'block' : 'none' }}
    >
      <S.SuccessModal style={{ display: displayModal ? 'flex' : 'none' }}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h2>{title}</h2>
            <ButtonStyled onClick={onClickHandler} buttonText={buttonText} />
          </>
        )}
      </S.SuccessModal>
    </S.SuccessModalBackground>
  );
};

export default CheckoutModal;
