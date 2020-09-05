import Communicate from '../communicate';

const communicate = new Communicate();
communicate.send('/test', 'post', { test: 1 });

document.getElementById('sign-up').addEventListener('click', () => {
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

  return true;
});
