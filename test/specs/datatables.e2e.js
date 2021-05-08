describe('Data Tables Page', () => {
    it('should verify edit and delete button exist or not', async () => {
      const editButton = await $$('#table1 a[href="#edit"]');   // get element by id i.e, # 
      const deleteButton = await $$('#table2 a[href="#delete"]');
  
      await browser.url('/tables');
      
      await expect(editButton).toBeElementsArrayOfSize({gte:1});
        console.log("SIZE",await editButton.length)
      await expect(deleteButton).toBeElementsArrayOfSize({gte:1});
    });
  });
  