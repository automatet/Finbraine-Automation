import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';


export class Login_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;


  

  //**Declare */
  
  readonly namco_community:Locator;
  readonly EmailID:Locator;
  readonly password:Locator;
  readonly Login_btn:Locator;





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


  this.namco_community= this.page.locator("//*[contains(text(),'namco_community')]")
  this.EmailID=this.page.locator("// input[@placeholder='Email']")
  this.password=this.page.locator("// input[@placeholder='Password']")
  this.Login_btn=this.page.locator("//*[contains(text(),'Log in')]")
  
  }


  /******************** Page Objects Starts for Create Event Optional Fields************************/





async user_launches_application() {
let url = process.env.APP_URL || " http://4.240.123.236:8069/web/database/selector"
await this.playwrightFactory.launchApplication(url);
}

  

async user_clicks_namco_community_button(){
  await this.playwrightFactory.click(this.namco_community);
  

}

async user_enters_emailid(strUsername: string) {
  await this.playwrightFactory.fill(this.EmailID, strUsername);
}
  
async user_enters_password(strpassword: string) {
  await this.playwrightFactory.fill(this.password, strpassword);
}
  
async user_clicks_login_btn(){
  await this.playwrightFactory.click(this.Login_btn);
}



}
