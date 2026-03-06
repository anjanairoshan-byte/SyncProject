import { test, expect } from '@playwright/test';
import { IntroPage } from '../pages/IntroPage';
import { UserAuthPage  } from '../pages/UserAuthPage';
import { FormSubPage } from '../pages/FormSubPage';

//import testData from '../../data/testData.json' assert { type: 'json' };



test('endtoend', async({page})=>{

    //navigateToIntro page
    const intro = new IntroPage(page);
    await intro.navigate();
    await intro.checkLogin();
    await intro.clickLogin();
    //await page.pause();


    //AuthPage Validation
    const AuthP = new UserAuthPage(page);
    await AuthP.authPageToast();

    
    //FormSubmission Page
    const FormPage = new FormSubPage(page);
    await FormPage.clickFormSub();
    await FormPage.fillDataFormSub();

    
    
});
