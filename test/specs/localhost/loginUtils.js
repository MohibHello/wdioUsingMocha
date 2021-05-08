
class LoginUtils {


     async logon () {
        await browser.url('/'); //"go to baseUrl"
        const email = await $('#inputEmail');
        const password = await $('#inputPassword');
        const loginBtn = await $('.btn-primary');
        await email.setValue('muhib@gm.co');
        await password.setValue('123123');
        await loginBtn.click();
    }
}

module.exports = new LoginUtils();
