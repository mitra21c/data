import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <div>
        <input
          placeholder="이메일"
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: { value: /\S+@\S+\.\S+/, message: '올바른 이메일 형식이 아닙니다' },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="비밀번호"
          {...register('password', { required: '비밀번호를 입력하세요' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
