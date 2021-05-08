describe('Input Page', () => {
    it('redirect to input and enter some number', async () => {
      const input = await $('input');   // get element by id i.e, # 
      
      await browser.url('/inputs');
      await input.setValue(123)
  
      await expect(await input.getValue()).toEqual("123");
    });
  });
  