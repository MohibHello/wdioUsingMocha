describe('Main Page', () => {
    it('verify list of items', async () => {
       await browser.url('/'); //"go to baseUrl" written in wdio config
        // const listExample = $("ul li"); // find single element
        const allListExample =await $$("ul li"); // find all elements
        // await expect(allListExample).toBeElementsArrayOfSize(44);
        await expect(allListExample).toBeElementsArrayOfSize({gte:1}); //greater than 1
    });



  });