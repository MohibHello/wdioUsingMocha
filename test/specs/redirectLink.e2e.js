describe('Redirect Link Page', () => {
  it('click and redirect', async () => {
    const btnStart = await $('#redirect');   // get element by id i.e, # 
    const statusCode = await $('.example h3');

    await browser.url('/redirector');
    await btnStart.click();

    await expect(await statusCode.getText()).toEqual('Status Codes');
  });
});
