import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';


export class Gold_Loan_Nominee_Details_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;


  

  //**Declare */
  
  readonly btn_nominee_button:Locator;
  readonly txt_nominee_details_title: Locator;
  readonly txt_nominee_name: Locator;
  readonly txt_nominee_relation: Locator;
  readonly txt_nominee_age: Locator;
  readonly txt_nominee_occupation: Locator;
  readonly txt_mobile_number: Locator;
  readonly txt_gender: Locator;
  readonly txt_address: Locator;






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


  this.btn_nominee_button= this.page.locator("//span[normalize-space()='Nominee']")
  this.txt_nominee_details_title=this.page.locator("//span[normalize-space()='1. Nominee Details']")
  this.txt_nominee_name=this.page.locator("//input[@name='nominee_name']")
  this.txt_nominee_relation=this.page.locator("//select[@name='nominee_relation_with_applicant']")
  this.txt_nominee_age=this.page.locator("//input[@name='nominee_age']")
  this.txt_nominee_occupation=this.page.locator("//input[@name='nominee_occupation']")
  this.txt_mobile_number=this.page.locator("//input[@name='nominee_mobile_number']")
  this.txt_gender=this.page.locator("//select[@name='nominee_gender']")
  this.txt_address=this.page.locator("//input[@name='nominee_address']")
  
  }


  /******************** Page Objects Starts for Create Event Optional Fields************************/







  

async user_clicks_on_nominee_button(){
  await this.playwrightFactory.click(this.btn_nominee_button);
}

async user_verify_nominee_details_title(){
  await expect(this.txt_nominee_details_title).toBeVisible()
}

async user_verify_nominee_name(){
  await expect(this.txt_nominee_name).toBeVisible()
}

async user_verify_nominee_relation(){
  await expect(this.txt_nominee_relation).toBeVisible()
}

async user_verify_nominee_age(){
  await expect(this.txt_nominee_age).toBeVisible()
}

async user_verify_nominee_occupation(){
  await expect(this.txt_nominee_occupation).toBeVisible()
}

async user_verify_nominee_mobile_number(){
  await expect(this.txt_mobile_number).toBeVisible()
}

async user_verify_nominee_gender(){
  await expect(this.txt_gender).toBeVisible()
}

async user_verify_nominee_address(){
  await expect(this.txt_address).toBeVisible()
}










}

