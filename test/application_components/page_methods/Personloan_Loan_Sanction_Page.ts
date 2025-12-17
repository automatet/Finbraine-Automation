import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';


export class Personloan_Loan_Sanction_Page  {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;

 
  

  //**Declare */
  readonly txt_loan_amount: Locator;
  readonly Loan_Amount_in_Words: Locator;
  readonly Account_Number: Locator;
  readonly Rate_of_Interest: Locator;
  readonly Tenure: Locator;
  readonly Loan_Sanction_Date: Locator;
  readonly Recommendation_and_Remark: Locator;
  readonly btn_CreateAccount:Locator
  /**
   * @param {Page} page
   * @param {TestInfo} testInfo
   * @param {PlaywrightFactoryActions} playwrightFactory
   * @param {DataFactory} dataFactory
   * @param {any} container
   * @param {DatabricksSQLwarehouse} databricks_sqlware;
   * @param {DatabricksFactoryDBFS} databricks_dbfs;
   */

  constructor(container: any) {
    this.container = container;
    this.page = container.resolve('page');
    this.testInfo = container.resolve('testInfo');
    this.playwrightFactory = container.resolve('playwrightFactory');
    this.dataFactory = container.resolve('dataFactory');
    this.databricks_sqlware = container.resolve('databricks_sqlware');
    this.databricks_dbfs = container.resolve('databricks_dbfs');

    /******************** Page Objects ************************/
this.txt_loan_amount=this.page.locator('//div[@class="o_group outer-box"]//span[@name="loan_amount"]')
this.Loan_Amount_in_Words = this.page.locator("//div[@class='o_group outer-box']//span[@name='loan_amount_in_words']")
this.Account_Number = this.page.locator("//div[@class='o_group outer-box']//input[@name='account_number']");
this.Rate_of_Interest=this.page.locator("//div[@class='o_group outer-box']//span[@name='rate_of_interest']");
this.Tenure=this.page.locator("//div[@class='o_group outer-box']//span[@name='tenure']");
this.Loan_Sanction_Date = this.page.locator('//div[@class="o_group outer-box"]//span[@name="loan_sanction_date"]');
this.Recommendation_and_Remark = this.page.locator("//div[@class='o_group outer-box']//span[@name='recommendation_and_remark_section']");
this.btn_CreateAccount = this.page.locator('//button[@name="create_lms_account"]')
 

}


async verify_loan_amount_Loan_Sanction_Information(){
await expect(this.txt_loan_amount).toBeVisible
}

async verify_loan_amount_in_words__Loan_Sanction_Information(){
await expect(this.Loan_Amount_in_Words).toBeVisible
}

async verify_Account_number__Loan_Sanction_Information(stracc:string){
  await this.Account_Number.fill(stracc)
//await expect(this.Account_Number).toBeVisible
}

async verify_Rate_of_interest__Loan_Sanction_Information(){
await expect(this.Rate_of_Interest).toBeVisible
}

async verify_Tenure__Loan_Sanction_Information(){
await expect(this.Tenure).toBeVisible
}

async verify_loan_sanction_date__Loan_Sanction_Information(){
await expect(this.Loan_Amount_in_Words).toBeVisible
}
async verify_Recommendation_and_remark_Loan_Sanction_by_HO_Authority(){
await expect(this.Recommendation_and_Remark).toBeVisible
}
async user_clicks_Createaccount_button(){
  await this.playwrightFactory.click(this.btn_CreateAccount);
}

 }
  


  

  

  







