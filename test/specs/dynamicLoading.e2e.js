describe('Dynamic loading Page', () => {
  it('wait for hidden elemet to showup', async () => {
    const btnStart = await $('#start button');
    const textFinish = await $('#finish h4');
    const eleLoading = await $('#loading');

    await browser.url('/dynamic_loading/1');
    await btnStart.click();

    // await browser.pause(5000); //pause till loading is finish
    await eleLoading.waitForDisplayed(); //display lading

    await eleLoading.waitForDisplayed({ reverse: true }); //no display loading

    await textFinish.waitForDisplayed();
    await console.log('H4', await textFinish.isDisplayed());
    await console.log('H4 NAme', await textFinish.getTagName());
    // await expect(textFinish).toEqual('hello world'); //element equal to text, will fail
    await expect(await textFinish.getText()).toEqual('Hello World!');
  });
});
