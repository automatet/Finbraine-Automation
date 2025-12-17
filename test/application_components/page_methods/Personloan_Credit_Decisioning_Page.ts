import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';


export class Personloan_Credit_Decisioning_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;

//**Declare */
readonly Gross_Income_in_Loan_eligibility : Locator;	
readonly Total_Agricultural_Income_in_Loan_eligibility : Locator;	
readonly Maximum_Allowable_Deduction_in_Loan_eligibility : Locator; 
readonly Income_After_Maximum_Allowable_Deduction_in_Loan_eligibility : Locator;	
readonly Agriculture_Income_Multiplier_in_Loan_eligibility : Locator;	
readonly Other_Income_Agriculture_in_Loan_eligibility : Locator;	
readonly Gross_Amount_of_Existing_Deductions_in_Loan_eligibility : Locator;	
readonly Existing_Loan_EMI_in_Loan_eligibility : Locator;
readonly Net_Amount_Available_for_New_EMI_in_Loan_eligibility : Locator;	
  
readonly Total_Deduction_in_Loan_eligibility : Locator;	
readonly DBR_in_Loan_eligibility : Locator;	
readonly Total_Income_With_Existing_deduction_in_Loan_eligibility : Locator;
readonly Percentage_of_Available_Amount_In_Gross_Income_in_Loan_eligibility : Locator;	
readonly Growth_Trend_of_Income_in_Loan_eligibility : Locator;	
readonly Growth_Trend_of_Income_networth_in_Loan_eligibility : Locator; 
readonly As_per_Income_Loan_Availability_in_Loan_eligibility : Locator;	
  
readonly txt_Remarks_in_Loan_eligibility : Locator;
readonly EMI_for_Loan_in_Loan_eligiblity : Locator;
readonly txt_loan_schedule_title:Locator;
  readonly txt_product_name: Locator;
  readonly txt_total_repayment_amount: Locator;
  readonly txt_rate_of_interest: Locator;
  readonly txt_maturity_date: Locator;
  readonly txt_loan_amount: Locator;
  readonly txt_repayment_type: Locator;
  readonly txt_emi_amount: Locator;
  readonly txt_tenure_months: Locator;
  readonly txt_total_interest: Locator;
  readonly txt_loan_schedule_date: Locator;
  readonly txt_loan_scrutiny_title: Locator;
  readonly txt_total_quotation_amount: Locator;
  readonly txt_remaining_margin_amount: Locator;
  readonly txt_scrutiny_loan_amount: Locator;
  readonly txt_scrutiny_entire_amount: Locator;
  readonly btn_deviation_type_add_a_line_button: Locator;
  readonly txt_deviation_type: Locator;
  readonly txt_deviation_comment: Locator;
  readonly btn_deviation_verify_button: Locator;
  readonly txt_additional_comment: Locator;
  readonly btn_approve_button: Locator;
  readonly btn_reject_button: Locator;


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

 this.Gross_Income_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="gross_salary"]')
  this.Total_Agricultural_Income_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="total_agricultural_income"]')
  this.Maximum_Allowable_Deduction_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//input[@name="maximum_allowable_deduction_percentage"]')

  this.Income_After_Maximum_Allowable_Deduction_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//span[@name="maximum_allowable_deduction"]')
  this.Agriculture_Income_Multiplier_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//input[@name="other_income_multiplier"]')

  this.Other_Income_Agriculture_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='other_income_amount']")
  this.Gross_Amount_of_Existing_Deductions_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='salary_deduction']")
  this.Existing_Loan_EMI_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='existing_loan_emi']")
  this.Net_Amount_Available_for_New_EMI_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='total_amount_available_for_deduction'] ")
  this.EMI_for_Loan_in_Loan_eligiblity = this.page.locator("//div[@class='o_group outer-box2']//span[@name='emi_of_new_loan']")
  this.Total_Deduction_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='total_deduction'] ")
  this.DBR_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='percentage_to_total_deduction']")
  this.Total_Income_With_Existing_deduction_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='net_salary_after_deduction']")
  this.Percentage_of_Available_Amount_In_Gross_Income_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='percentage_of_available_amount']")
  this.Growth_Trend_of_Income_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='growth_trend_of_income']")
  this.Growth_Trend_of_Income_networth_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='growth_trend_of_income_networth']")
  this.As_per_Income_Loan_Availability_in_Loan_eligibility = this.page.locator("//div[@class='o_group outer-box2']//span[@name='income_Loan_Availability']")
  this.txt_Remarks_in_Loan_eligibility = this.page.locator('//div[@class="o_group outer-box2"]//input[@name="remarks"]')
this.txt_loan_schedule_title=this.page.locator("//div[normalize-space()='Loan Schedule']");
    this.txt_product_name=this.page.locator("//span[@name='updated_product_name']");
    this.txt_total_repayment_amount=this.page.locator("//span[@name='updated_outstanding_amount']");
    this.txt_rate_of_interest=this.page.locator("//input[@name='updated_rate_of_interest']");
    this.txt_maturity_date=this.page.locator("//span[@name='updated_maturity_date']");
    this.txt_loan_amount=this.page.locator("(//div[@name='updated_loan_amount'])[1]")
    this.txt_repayment_type=this.page.locator("//select[@name='repayment_type']")
    this.txt_emi_amount=this.page.locator("//span[@name='emi_amount']")
    this.txt_tenure_months=this.page.locator("(//input[@name='updated_tenure'])")
    this.txt_total_interest=this.page.locator("//span[@name='total_interest']")
    this.txt_loan_schedule_date=this.page.locator("//input[@name='loan_schedule_date']")
    this.txt_loan_scrutiny_title=this.page.locator("//div[normalize-space()='Loan Scrutiny']")
    this.txt_total_quotation_amount=this.page.locator('//div[@name="updated_loan_amount"]/following::div[@class="o_group loan_scrutiny"]')
    this.txt_remaining_margin_amount=this.page.locator("//span[@name='remaining_margin_amount']")
    this.txt_scrutiny_loan_amount=this.page.locator("(//span[@name='updated_loan_amount'])[2]")
    this.txt_scrutiny_entire_amount=this.page.locator("//span[@name='entire_amount']")
    this.btn_deviation_type_add_a_line_button=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='deviation_line_ids']//*[contains(text(),'Add a line')]")
    this.txt_deviation_type=this.page.locator("//select[@name='deviation_type']")
    this.txt_deviation_comment=this.page.locator("//textarea[@name='comment']")
    this.btn_deviation_verify_button=this.page.locator("//div[@name='verify_deviation']")
    this.txt_additional_comment=this.page.locator("//input[@name='additional_comment']")
    this.btn_approve_button=this.page.locator("//button[@name='approve_decision']")
    this.btn_reject_button=this.page.locator("//button[@name='reject_decision']")
 






  }

async Verify_Gross_Income_in_loan_eligibility(){
await expect(this.Gross_Income_in_Loan_eligibility).not.toBeEmpty();
}
async Verify_Total_Agricultural_Income_in_loan_eligibility(){
await expect(this.Total_Agricultural_Income_in_Loan_eligibility).toBeVisible();
}
async Verify_Maximum_Allowable_Deduction_in_loan_eligibility(){
await expect(this.Maximum_Allowable_Deduction_in_Loan_eligibility).not.toBeEmpty();
}
async Verify_Income_After_Maximum_Allowable_Deduction_in_loan_eligibility(){
await expect(this.Income_After_Maximum_Allowable_Deduction_in_Loan_eligibility).toBeVisible();
}
async Verify_Agriculture_Income_Multiplier_in_loan_eligibility(){
await expect(this.Agriculture_Income_Multiplier_in_Loan_eligibility).toBeVisible();
}
async Verify_Other_Income_Agriculture_in_loan_eligibility(){
await expect(this.Other_Income_Agriculture_in_Loan_eligibility).toBeVisible();
}
async Verify_Gross_Amount_of_Existing_Deductions_in_loan_eligibility(){
await expect(this.Gross_Amount_of_Existing_Deductions_in_Loan_eligibility).toBeVisible();
}
async Verify_Existing_Loan_EMI_in_loan_eligibility(){
await expect(this.Existing_Loan_EMI_in_Loan_eligibility).toBeVisible();
}
async Verify_Net_Amount_Available_for_New_EMI_in_loan_eligibility(){
await expect(this.Net_Amount_Available_for_New_EMI_in_Loan_eligibility).toBeVisible();
}	
async Verify_EMI_for_Loan_in_loan_eligibility(){
await expect(this.EMI_for_Loan_in_Loan_eligiblity).toBeVisible();
}
  
async Verify_Total_Deduction_in_loan_eligibility(){
await expect(this.Total_Deduction_in_Loan_eligibility).toBeVisible();
}
async Verify_DBR_in_loan_eligibility(){
await expect(this.DBR_in_Loan_eligibility).toBeVisible();
}
async Verify_Total_Income_With_Existing_deduction_in_loan_eligibility(){
    await expect(this.Total_Income_With_Existing_deduction_in_Loan_eligibility).toBeVisible();

}
async Verify_Percentage_of_Available_Amount_In_Gross_Income_in_loan_eligibility(){
await expect(this.Percentage_of_Available_Amount_In_Gross_Income_in_Loan_eligibility).toBeVisible();
}
async Verify_Growth_Trend_of_Income_in_loan_eligibility(){
await expect(this.Growth_Trend_of_Income_in_Loan_eligibility).toBeVisible();
}
async Verify_Growth_Trend_of_Income_Networth_in_loan_eligibility(){
await expect(this.Growth_Trend_of_Income_networth_in_Loan_eligibility).toBeVisible();
}

async Verify_As_per_Income_Loan_Availability_in_loan_eligibility(){
await expect(this.As_per_Income_Loan_Availability_in_Loan_eligibility).toBeVisible();
}	
async Verify_Remarks_in_loan_eligibility(strremarks:string){
await this.playwrightFactory.fill(this.txt_Remarks_in_Loan_eligibility,strremarks)
}
// async Verify_Remarks_in_loan_eligibility(){ 
  
// await expect(this.txt_Remarks_in_Loan_eligibility).not.toBeEmpty()
// }  

async user_verify_loan_schedule_title(){
  await expect(this.txt_loan_schedule_title).toBeVisible();
}
 
async user_verify_product_name(){
  await expect(this.txt_product_name).toBeVisible();
}
 
async user_verify_total_repayment_amount(){
  await expect(this.txt_total_repayment_amount).toBeVisible();
}
 
async user_verify_rate_of_interest(){
  await expect(this.txt_rate_of_interest).toBeVisible();
}
 
async user_verify_maturity_date(){
  await expect(this.txt_maturity_date).toBeVisible();
}
 
async user_verify_loan_amount(){
  await expect(this.txt_loan_amount).toBeVisible();
}
 
async user_verify_repayment_type(){
  await expect(this.txt_repayment_type).toBeVisible();
}
 
async user_verify_emi_amount(){
  await expect(this.txt_emi_amount).toBeVisible();
}
 
async user_verify_tenure_months(){
  await expect(this.txt_tenure_months).toBeVisible();
}
 
async user_verify_total_interest(){
  await expect(this.txt_total_interest).toBeVisible();
}
 
async user_verify_loan_schedule_date(){
  await expect(this.txt_loan_schedule_date).toBeVisible();
}
 
async user_verify_loan_scrutiny_title(){
  await expect(this.txt_loan_scrutiny_title).toBeVisible();
}
 
async user_verify_total_quotation_amount(){
  await expect(this.txt_total_quotation_amount).toBeVisible();
}
 
async user_verify_remaining_margin_amount(){
  await expect(this.txt_remaining_margin_amount).toBeVisible();
}
 
async user_verify_scrutiny_loan_amount(){
  await expect(this.txt_scrutiny_loan_amount).toBeVisible();
}
 
async user_verify_entire_amount(){
  await expect(this.txt_scrutiny_entire_amount).toBeVisible();
}
 
async user_click_add_line_btn_for_deviations_type(){
await this.playwrightFactory.click(this.btn_deviation_type_add_a_line_button);
}
 
async user_select_deviation_type(strDeviationtype: string){
await this.txt_deviation_type.selectOption({label:strDeviationtype});
}
 
async user_enter_deduction_comment(strDeductioncomment: string){
await this.playwrightFactory.fill(this.txt_deviation_comment, strDeductioncomment)
}
 
async user_click_deviation_verify_button(){
await this.playwrightFactory.click(this.btn_deviation_verify_button);
}
 
async user_enters_additional_comment(strAdditionalcomment: string){
await this.playwrightFactory.fill(this.txt_additional_comment, strAdditionalcomment);
}
 
async user_click_approve_button(){
await this.playwrightFactory.click(this.btn_approve_button);
}
 
async user_click_reject_button(){
await this.playwrightFactory.click(this.btn_reject_button);
}





















}
