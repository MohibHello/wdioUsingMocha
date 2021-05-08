const LoginData = require('./loginUtils');

describe('Dashboard Page', () => {
//   it('redirect to dashboard after successfull login check header', async () => {
//     await LoginData.logon();
//     const empHeader = await $('div h1');

//     expect(await empHeader.getText()).toEqual('Employees');
//   });

//   it('popup close ', async () => {
//     await LoginData.logon();
//     const empHeader = await $('.fa-pencil');
//     const popup = await $('.popup-content ')
//     const closePopup = await $('.close')

//     await empHeader.click()
//     await closePopup.click()

//     await expect(await popup.isDisplayed()).toEqual(false)
//   });
//   it(' should show edit employee popup', async () => {
//     await LoginData.logon();
//     const empHeader = await $('.fa-pencil');
//     const form = await $('.panel h2');

//     await empHeader.click();

//     expect(await form.isDisplayed()).toEqual(true);
//     // expect(await form.getText()).toEqual("Employee Registration")
//   });

  it(' should update employee details', async () => {
    await LoginData.logon();
    const empHeader = await $('.fa-pencil');
    const form = await $('.panel h2');

    // const cancelBtn = await $('button[type="button"]')

    const regBtn = await $('button[type="submit"]')

    const expectedBody ="<tbody><tr><th>1</th><th>Muhib</th><th>ulla Khan</th><th>all stack</th><th>muhib@gm.co</th><th>tumkur</th><th><i class=\"fa fa-frown-o\" aria-hidden=\"true\" style=\"color: red;\"></i></th><th><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"cursor: pointer; color: red;\"></i></th><th><div><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"cursor: pointer; color: blue;\"></i></div></th></tr></tbody>"

    await empHeader.click();

    const firstName = await $('#inputFirstName');
    const lastName = await $('#inputLastName');
    const designation = await $('#inputDesignation');
    const isActive = await $('#active2');

    await firstName.setValue('Muhib');
    await lastName.setValue('ulla Khan');
    await designation.setValue('all stack');
    await isActive.click()

    // cancelBtn.click();
    await regBtn.click();

    const body = await $('tbody')

    const tbodyContent = await $$('tbody tr')

    console.log('tbody tr',tbodyContent.length)
    

    await expect(await body.getHTML()).toEqual(expectedBody);
    // expect(await regBtn.getText()).toEqual("Employee Registration")
  });
});