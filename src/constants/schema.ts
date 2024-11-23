import * as yup from 'yup';

const schema = yup.object().shape({
  //   email: yup.string().matches(/^[A-Za-z0-9_\.\-/]+@[A-Za-z0-9\-]+\.[A-Za-z0-9_\-]+/, '올바른 이메일형식이 아닙니다. 다시 확인해주세요').required('이메일을 반드시 입력해주세요'),
  nickname: yup.string().min(3, '닉네임은 3자 이상이여야합니다.').max(15, '닉네임은 6자 이하여야합니다.').required(),
});

export { schema };
