import {useState, useEffect} from 'react';
import {validateEmail} from '../helpers/validateEmail';
import {STATE_TEXT} from '../constants/stateText';
export const useValidate = props => {
  const [error, setError] = useState({
    textError: '',
    isError: true,
  });
  useEffect(() => {
    if (props.text != null) {
      if (props.stateText == STATE_TEXT.EMAIL) {
        if (!!props.text && validateEmail(props.text)) {
          setError({
            textError: '',
            isError: false,
          });
        }
        if (!!!props.text) {
          setError({
            textError: 'Nội dung nhập vào không được trống!',
            isError: true,
          });
        } else {
          if (!validateEmail(props.text)) {
            setError({textError: 'Định dạng email không đúng!', isError: true});
          }
        }
      } else {
        if (!!!props.text) {
          setError({
            textError: 'Nội dung nhập vào không được trống!',
            isError: true,
          });
        } else {
          setError({
            textError: '',
            isError: false,
          });
        }
      }
    } else {
      setError({
        textError: '',
        isError: true,
      });
    }
  }, [props.text]);
  return {error};
};
