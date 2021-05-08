describe('Login Page', () => {
  it('check wherther header is equal to Employee Login', async () => {
    await browser.url('/'); //"go to baseUrl"

    const header = await $('.panel h2');
    await expect(await header.getText()).toEqual('Employee Login');
  });

  it('check wherther able to login', async () => {
    await browser.url('/'); //"go to baseUrl"

    const email = await $('#inputEmail');
    const password = await $('#inputPassword');
    const loginBtn = await $('.btn-primary');

    await email.setValue('muhib@gm.co');
    await password.setValue('123123');

    await loginBtn.click();
    await expect(browser).toHaveUrl('http://localhost:3000/dashboard')
  });

  it('should check for invalid user', async () => {
    await browser.url('/'); //"go to baseUrl"

    const email = await $('#inputEmail');             // # - id selector
    const password = await $('#inputPassword');       
    const loginBtn = await $('.btn-primary');          // . - class selector
    const flashAlert =await $('.panel small')         // . small - class and small tag selector

    await email.setValue('muh@gm.co');
    await password.setValue('1233');

    await loginBtn.click();
    await expect(await flashAlert.getText()).toEqual("Request failed with status code 404")
  });
  
});
