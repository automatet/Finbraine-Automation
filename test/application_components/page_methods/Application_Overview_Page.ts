import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';
 
 
export class Application_Overview_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any;
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;
 
 
 
 
  //**Declare */
  readonly Loan_Application_tab:Locator;
  readonly Credit_Decision_tab:Locator;
  readonly Loan_Sanction_tab:Locator;
  readonly Guarantor_details_tab: Locator;
  readonly btn_Edit:Locator
   readonly workflow_tab:Locator;
 
   readonly application_verification_status:Locator;
   readonly credit_decisioning_status:Locator;
   readonly loan_sanction_status:Locator;
 readonly co_borrowers_details_tab: Locator
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
    this.Loan_Application_tab=this.page.locator("//a[normalize-space()='Loan Application']");
    this.Credit_Decision_tab=this.page.locator('//a[normalize-space()="Credit Decisioning"]');
    this.Loan_Sanction_tab=this.page.locator('//a[normalize-space()="Loan Sanction"]');
    this.Guarantor_details_tab=this.page.locator("//a[normalize-space()='Guarantor Details']")
    this.btn_Edit=this.page.locator('//*[contains(text()," Edit")]')
    this.application_verification_status=this.page.locator("//tr[td[1][normalize-space()='Application Verification']and td[3][normalize-space()='Completed']]")
    this.credit_decisioning_status=this.page.locator("//tr[td[1][normalize-space()='Credit Decisioning']and td[3][normalize-space()='Completed']]")
    this.loan_sanction_status=this.page.locator("//tr[td[1][normalize-space()='Loan Sanction']and td[3][normalize-space()='Completed']]")
  this.workflow_tab=this.page.locator("//a[normalize-space()='Workflow']")
    this.co_borrowers_details_tab=this.page.locator("//*[contains(text(),'Co-Borrower Details')]")
 
 }
 
async user_click_on_Loan_Application_tab(){
  await this.page.waitForLoadState()
  await expect(this.Loan_Application_tab).toBeVisible();
  await this.Loan_Application_tab.click();
}
async user_click_on_Credit_Decision_tab(){
  await expect(this.Credit_Decision_tab).toBeVisible();
  await this.Credit_Decision_tab.click();
}
 async user_click_on_Loan_Sanction_tab(){
  await expect(this.Loan_Sanction_tab).toBeVisible();
  await this.Loan_Sanction_tab.click();
 }

 async user_click_on_guarantor_details_tab(){
  await expect(this.Guarantor_details_tab).toBeVisible();
  await this.Guarantor_details_tab.click();
 }
 
async user_click_on_Edit_button(){
  await expect(this.btn_Edit).toBeVisible();
  await this.btn_Edit.click();
  
 }
 
  async user_clicks_lnk_Coborrower_Details(){
  await expect(this.co_borrowers_details_tab).toBeVisible();
  await this.co_borrowers_details_tab.click();
 
  }
  async user_verify_application_verification_status(){
  await expect(this.application_verification_status).toBeVisible();
 }  
 async user_verify_credit_decisioning_status(){
  await expect(this.credit_decisioning_status).toBeVisible();
 }  
 
 async user_verify_loan_sanction_status(){
  await expect(this.loan_sanction_status).toBeVisible();
 }  
 
 async user_click_workflow_tab(){
  await this.workflow_tab.click()
 }
 
 
}
 