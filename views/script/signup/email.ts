import Communicate from '../communicate';
import Resource from '../../../src/providers/resource';
import { Status } from '../../../src/interfaces/response';

const resource = new Resource(0).export();
const communicate = new Communicate();

document.getElementById('sign-up').addEventListener('click', async () => {
  const $email = document.getElementById('email') as HTMLInputElement;
  const $password = document.getElementById('password') as HTMLInputElement;
  const $confirm = document.getElementById('confirm') as HTMLInputElement;

  const email = $email.value;
  const password = $password.value;
  const confirm = $confirm.value;

  const data = await communicate.send('/api/auth/signup', 'post', { email, password, confirm });
  const { status } = data;

  if (status === Status.SUCCESS) {
    window.location.href = '/';
    return true;
  }

  if (status === Status.SIGNUP_INVALID_EMAIL) {
    alert(resource.SIGNUP_INVALID_EMAIL);
    return false;
  }

  if (status === Status.SIGNUP_SHORT_PASSWORD) {
    alert(resource.SIGNUP_SHORT_PASSWORD);
    return false;
  }

  if (status === Status.SIGNUP_PASSWORD_UNMATCH) {
    alert(resource.SIGNUP_PASSWORD_UNMATCH);
    return false;
  }

  if (status === Status.SIGNUP_EXISTING_USER) {
    alert(resource.SIGNUP_EXISTING_USER);
    return false;
  }

  alert(resource.SIGNUP_INVALID_EMAIL);
  return false;
});
