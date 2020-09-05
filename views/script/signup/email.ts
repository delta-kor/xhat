import Communicate from '../communicate';

const communicate = new Communicate();

document.getElementById('sign-up').addEventListener('click', async () => {
  const $email = document.getElementById('email') as HTMLInputElement;
  const $password = document.getElementById('password') as HTMLInputElement;
  const $confirm = document.getElementById('confirm') as HTMLInputElement;

  const email = $email.value;
  const password = $password.value;
  const confirm = $confirm.value;

  if (!email || !password || !confirm) {
    alert('Input all fields');
    return false;
  }

  if (password !== confirm) {
    alert('Check password again');
    return false;
  }

  await communicate.send('/api/auth/signup', 'post', { email, password, confirm });

  return true;
});
