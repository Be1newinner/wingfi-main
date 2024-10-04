const peSignInButton = document.querySelector('.pe_signin_button');
const client_id = peSignInButton.getAttribute('data-client-id');
const curr_url = window.location.href;
const btnPhLogin = document.getElementById('btn_ph_login');

// Set up the button click handler
btnPhLogin.onclick = () => {
  const user_phone_no = document.querySelector('.pe_phone_number')?.value;
  const user_phone_no_prefilled = user_phone_no ? `&user_phone_no=${user_phone_no}` : '';

  if (!user_phone_no && user_phone_no !== '') return;

  window.open(
    `https://auth.phone.email/log-in?client_id=${client_id}&auth_type=8&origin=${curr_url}${user_phone_no_prefilled}`,
    'peLoginWindow',
    'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=560,top=' + (screen.height - 600) / 2 + ',left=' + (screen.width - 500) / 2
  );
};

btnPhLogin.innerHTML = '<span style="display: flex;align-items: center;justify-content: center;padding: 14px 20px; background-color: oklch(0.321785 0.02476 255.702);font-weight: bold;color: #ffffff;border: none;border-radius: 3px;font-size: inherit;cursor: pointer;transition:all ease-in-out .3s;"> Register Product</span>';
peSignInButton.style.visibility = 'visible';

// Message listener for postMessage events
window.addEventListener('message', event => {
  if (event.origin === 'https://auth.phone.email' && event.data.flag_phone === "1") {
    fetch(event.data.user_json_url)
      .then(response => response.json())
      .then(userObj => {
        const userDetailJsonObj = {
          user_json_url: event.data.user_json_url,
          user_country_code: userObj.user_country_code,
          user_phone_number: userObj.user_phone_number
        };

        btnPhLogin.onclick = () => phoneEmailListener(userDetailJsonObj);
        phoneEmailListener(userDetailJsonObj);
      })
      .catch(error => console.error('Error:', error));
  }
});
