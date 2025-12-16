import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';


export class CMS_Dashboard_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;

 
  

  //**Declare */

  readonly txt_case_id: Locator;
  readonly txt_case_id_number: Locator;
  readonly txt_loan_request:Locator;
  readonly txt_applicant_mobile_number:Locator;
  readonly txt_loan_type:Locator;
  readonly txt_profile_type:Locator;
  readonly txt_pan_number:Locator;
  readonly txt_submit_btn:Locator;

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

    this.txt_case_id=this.page.locator("//*[contains(text(),'Case ID')]")
    this.txt_case_id_number=this.page.locator("//*[contains(text(),'FIN0000000034')]")
    this.txt_loan_request=this.page.locator("//button[normalize-space()='Loan Request']")
    this.txt_applicant_mobile_number=this.page.locator('//input[@name="applicant_mob"]')
    this.txt_loan_type=this.page.locator('//select[@name="loan_type"]')
    this.txt_profile_type=this.page.locator('//select[@name="profile_type"]')
    this.txt_pan_number=this.page.locator('//input[@name="pan_number"]')
    this.txt_submit_btn=this.page.locator('//button[@name="action_submit_case"]')
 }
  
      
async user_verify_case_id(){
    await expect(this.txt_case_id).toBeVisible();
}

async user_clicks_on_case_id_number(strapplicationid : any){
await this.page.locator("//*[contains(text(),'"+strapplicationid+"')]").click();
}

  async user_clicks_on_loan_request_btn(){
  await this.playwrightFactory.click(this.txt_loan_request)
  }
  async user_enter_applicant_number(strapplicant_number: string){
    await this.playwrightFactory.fill(this.txt_applicant_mobile_number, strapplicant_number)
  }
  async user_select_loan_type() {
    await this.txt_loan_type.selectOption({label:'Vehicle Loan'});
  }

  async user_select_profile_type() {
    await this.txt_profile_type.selectOption({label:'Salaried Loan'});
  }
  async user_enter_pan_number(strpan_number: string){
    await this.playwrightFactory.fill(this.txt_pan_number, strpan_number)
  }
  async user_clicks_on_submit_btn(){
    await this.playwrightFactory.click(this.txt_submit_btn)
  }




}


