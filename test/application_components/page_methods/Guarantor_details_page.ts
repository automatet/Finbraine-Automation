import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';
import { LoadHookContext } from 'module';
import { clear } from 'console';


export class Guarantor_details_page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;

 
  

  //**Declare */


  readonly guarantor_basic_information_mobile_number: Locator;
  readonly guarantor_basic_information_guarantor_name:Locator;
  readonly guarantor_basic_information_guarantor_date_of_birth:Locator;
  readonly guarantor_basic_information_guarantor_address:Locator;
  readonly guarantor_basic_information_guarantor_profile_type:Locator;
  readonly guarantor_ID_proof_details_add_data_btn:Locator;
  readonly guarantor1_first_name_id_document:Locator;
  readonly guarantor1_pan_name_id_document:Locator;
  readonly save_btn_guarantor1iddoc_details:Locator;
  //readonly eye_btn_pancard:Locator;
  readonly verify_btn_guarantor1iddoc_details:Locator;
  readonly guarantor1_business_certificate_details_add_data_btn:Locator;
  readonly guarantor1_business_certificate_details_name_of_firm_field:Locator;
  readonly guarantor1_business_certificate_details_shop_act_field:Locator;
  readonly guarantor1_business_certificate_details_name_of_owner_field:Locator;
  readonly guarantor1_business_certificate_details_type_of_business_field:Locator;
  readonly guarantor1_business_certificate_details_udhayam_name_field:Locator;
  readonly guarantor1_business_certificate_details_udhayam_nunber_field:Locator;
  readonly guarantor1_business_certificate_details_no_of_year_business_field:Locator;
readonly save_btn_guarantor1_business_certificate_details_field:Locator;
readonly verify_btn_guarantor1_business_certificate_details_field:Locator;
readonly add_data_btn_guarantors1_address_proof_details:Locator;
readonly guarantors1_address_proof_details_name_field:Locator;
readonly guarantors1_address_proof_details_aadhar_doc_field:Locator;
readonly guarantors1_address_proof_details_residence_address_document_field:Locator;
readonly guarantors1_address_proof_details_dob_field:Locator;
readonly save_btn_guarantors1_address_proof_details:Locator;
readonly verify_btn_guarantors1_address_proof_details:Locator;

readonly add_data_btn_guarantor1_company_id_details:Locator;


readonly btn_guarantor_computation_of_income_add_data_button: Locator;
 readonly btn_guarantor_computation_income_details_add_a_line_button: Locator;
 readonly txt_gross_taxable_income: Locator;
 readonly txt_less_deductions: Locator;
 readonly txt_net_taxable_income: Locator;
 readonly btn_save_button_for_guarantor_computation_income_details: Locator;
 readonly btn_verify_button_for_gurantor_computation_of_income: Locator;
 readonly btn_add_data_button_for_guarantor_business_details: Locator;
 readonly txt_name_of_the_firm_for_for_gurantor_business_details: Locator;
 readonly txt_address_of_the_firm: Locator;
 readonly txt_type_of_ownership: Locator;
 readonly txt_nature_of_business_in_detail: Locator;
 readonly btn_add_a_line_button_for_guarantor_financials: Locator;
 readonly txt_month_in_guarantor_financials_balance_sheet: Locator;


 readonly btn_add_data_button_for_guarantor1_P_L_details:Locator;
 readonly btn_add_line_button_for_guarantor1_P_L_details:Locator;
 readonly P_L_statement_add_month_field:Locator;
readonly P_L_statement_year_field:Locator;
readonly P_L_statement_sales_field:Locator;
readonly P_L_statement_purchase_field:Locator;
readonly P_L_statement_net_profit_field:Locator;
readonly P_L_statement_interest_field:Locator;
readonly P_L_statement_income_tax_field:Locator;
readonly P_L_statement_other_income_tax_field:Locator;
readonly P_L_statement_agriculture_income_field:Locator;
readonly P_L_statement_TDS_field:Locator;
readonly P_L_statement_save_btn:Locator;
readonly P_L_statement_verify_btn:Locator;
readonly P_L_statement_depreciation_field:Locator;

readonly guarantor1_bank_statement_add_data_btn: Locator;
  readonly guarantor1_bank_statement_details_add_line_btn: Locator;
  readonly guarantor1_bank_statement_details_name: Locator;
  readonly guarantor1_bank_statement_detail_account_no: Locator;
  readonly guarantor1_bank_statement_bank_balance: Locator;
  readonly guarantor1_bank_statement_avg_balance: Locator;
  readonly guarantor1_bank_statement_detail_cbmbc_field: Locator;
  readonly guarantor1_bank_statement_save_btn: Locator;
  //readonly bank_statement_details_table: Locator;
  readonly guarantor1_bank_statement_verify_btn: Locator;

  readonly guarantor1_added_other_income_details_add_data_btn:Locator;
  readonly guarantor1_added_other_income_details_add_line_btn:Locator;
  readonly guarantor1_added_other_income_details_month_fields_btn:Locator;
//readonly guarantor1_added_other_income_details_year:Locator;
  readonly guarantor1_added_other_income_details_amount:Locator;
  readonly guarantor1_added_other_income_details_save_btn:Locator;
//readonly guarantor1_verify_other_income_details_data:Locator;
  readonly guarantor1_other_income_details_verify_btn:Locator;



 readonly btn_Add_data_in_guarantor_Membership_Details:Locator;
  readonly guarantor_Membership_Number_in_Membership_Details:Locator;
  readonly guarantor_Number_of_Shares_in_Membership_Details:Locator;
  readonly guarantor_Shares_From_in_Membership_Details:Locator;
  readonly guarantor_Existing_Shares_Amount_in_Membership_Details:Locator;
  readonly guarantor_Total_Shares_Required_in_Membership_Details:Locator;
  readonly guarantor_Additional_Shares_Required_in_Membership_Details:Locator;
  readonly btn_Save_in_guarantor_Membership_Details:Locator;
  readonly checkbox_verify_in_guarantor_Membership_Details:Locator;


  readonly add_data_btn_ITR_details:Locator;
readonly add_line_btn_ITR_details:Locator;
readonly month_btn_ITR_details:Locator;
readonly year_btn_ITR_details:Locator;
readonly total_income_btn_ITR_details:Locator;
readonly total_taxes_interest_fee_btn_ITR_details:Locator;
readonly taxes_paid_btn_ITR_details:Locator;
readonly save_btn_ITR_details:Locator;
readonly verify_btn_ITR_details:Locator;
readonly txt_year_in_guarantor_financials_balance_sheet: Locator;
 readonly txt_capital_networth_in_guarantor_financials_balance_sheet: Locator;
 readonly txt_deductions_in_guarantor_financials_balance_sheet: Locator;
 readonly btn_save_button_for_gurantor_business_details: Locator;
 readonly btn_verify_button_for_guarantor_business_details: Locator;

 readonly guarantor2_basic_information_mobile_number:Locator;
 readonly guarantor2_basic_information_guarantor_name:Locator;
 readonly guarantor2_basic_information_guarantor_date_of_birth:Locator;
 readonly guarantor2_basic_information_guarantor_address:Locator;
 readonly guarantor2_basic_information_guarantor_profile_type:Locator;

 readonly eye_btn_pancard_disabled:Locator;
 readonly eye_btn_pancard_enabled:Locator;


 readonly guarantor2_ID_proof_details_add_data_btn:Locator;
 readonly guarantor2_first_name_id_document:Locator;
 readonly guarantor2_pan_name_id_document:Locator;
 readonly save_btn_guarantor2iddoc_details:Locator;
  
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
    this.guarantor_basic_information_mobile_number=this.page.locator('//input[@name="guarantor1_mobile_number"]')
    this.guarantor_basic_information_guarantor_name=this.page.locator('//input[@name="guarantor1_name"]')
    this.guarantor_basic_information_guarantor_date_of_birth=this.page.locator('//input[@name="guarantor1_date_of_birth"]')
    this.guarantor_basic_information_guarantor_address=this.page.locator('//input[@name="guarantor1_address"]')
    this.guarantor_basic_information_guarantor_profile_type=this.page.locator('//select[@name="guarantor1_profile_type"]')

    this.guarantor2_basic_information_mobile_number=this.page.locator('//input[@name="guarantor2_mobile_number"]')
    this.guarantor2_basic_information_guarantor_name=this.page.locator('//input[@name="guarantor2_name"]')
    this.guarantor2_basic_information_guarantor_date_of_birth=this.page.locator('//input[@name="guarantor2_date_of_birth"]')
    this.guarantor2_basic_information_guarantor_address=this.page.locator('//input[@name="guarantor2_address"]')
    this.guarantor2_basic_information_guarantor_profile_type=this.page.locator('//select[@name="guarantor2_profile_type"]')

    this.guarantor_ID_proof_details_add_data_btn=this.page.locator('//button[@name="guarantors1_id_proof_details_wizards"]')
    this.guarantor1_first_name_id_document=this.page.locator('//input[@name="wizard_guarantor1_first_name_id_document"]')         
    this.guarantor1_pan_name_id_document=this.page.locator('//input[@name="wizard_guarantor1_pan_document"]')
    this.save_btn_guarantor1iddoc_details=this.page.locator('//button[@name="save_guarantor1iddoc_details"]')
    //this.eye_btn_pancard=this.page.locator('(//button[@name="toggle_guarantor1_pan_visibility"])[1]')
    // this.eye_btn_pancard = this.page.locator("//button[@name='toggle_pan_visibility' and not(contains(@class,'o_invisible_modifier'))]");
    // this.eye_btn_pancard_disabled = this.page.locator("//button[@name='toggle_pan_visibility' and contains(@class,'o_invisible_modifier')]");
    this.eye_btn_pancard_disabled = this.page.locator("//button[@name='toggle_pan_visibility' and contains(@class,'o_invisible_modifier')]");
    
    this.eye_btn_pancard_enabled = this.page.locator("//button[@name='toggle_pan_visibility' and not(contains(@class,'o_invisible_modifier'))]");
    
    


    this.verify_btn_guarantor1iddoc_details=this.page.locator('//div[@name="verify_guarantor1_id_proof_details"]')
    this.guarantor1_business_certificate_details_add_data_btn=this.page.locator('//button[@name="guarantor1_business_certificate_details_wizard"]')
    this.guarantor1_business_certificate_details_name_of_firm_field=this.page.locator('//input[@name="wizard_guarantor1_firm_name"]')
    this.guarantor1_business_certificate_details_shop_act_field=this.page.locator('//input[@name="wizard_guarantor1_shop_act"]')
    this.guarantor1_business_certificate_details_name_of_owner_field=this.page.locator('//input[@name="wizard_guarantor1_name_of_owner"]')
    this.guarantor1_business_certificate_details_type_of_business_field=this.page.locator('//input[@name="wizard_guarantor1_type_of_business"]')
    this.guarantor1_business_certificate_details_udhayam_name_field=this.page.locator('//input[@name="wizard_guarantor1_udhayam_name"]')
    this.guarantor1_business_certificate_details_udhayam_nunber_field=this.page.locator('//input[@name="wizard_guarantor1_udhayam_no"]')
    this.guarantor1_business_certificate_details_no_of_year_business_field=this.page.locator('//input[@name="wizard_guarantor1_no_of_year_business"]')
    this.save_btn_guarantor1_business_certificate_details_field=this.page.locator('//button[@name="save_guarantor1businesscertificate_details"]')
    this.verify_btn_guarantor1_business_certificate_details_field=this.page.locator('//div[@name="verify_guarantor1_business_certificate_details"]')
    this.add_data_btn_guarantors1_address_proof_details=this.page.locator('//button[@name="guarantors1_address_proof_details_wizards"]')
    this.guarantors1_address_proof_details_name_field=this.page.locator('//input[@name="wizard_guarantor1_first_name_address_document"]')
    this.guarantors1_address_proof_details_aadhar_doc_field=this.page.locator('//input[@name="wizard_guarantor1_aadhaar_document"]')
    this.guarantors1_address_proof_details_residence_address_document_field=this.page.locator('//input[@name="wizard_guarantor1_residence_address_document"]')
    this.guarantors1_address_proof_details_dob_field=this.page.locator('//input[@name="wizard_guarantor1_dob_document"]')
    this.save_btn_guarantors1_address_proof_details=this.page.locator('//button[@name="save_guarantor1addressdoc_details"]')
    this.verify_btn_guarantors1_address_proof_details=this.page.locator('//div[@name="verify_guarantor1_address_proof_details"]')
                 

    this.add_data_btn_guarantor1_company_id_details=this.page.locator('//button[@name="guarantor1_company_id_details_wizard"]')

    this.btn_guarantor_computation_of_income_add_data_button=this.page.locator("//button[@name='guarantor1_computation_income_details_wizard']//span[contains(text(),'Add Data')]")
    this.btn_guarantor_computation_income_details_add_a_line_button=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='guarantor1_computation_income_ids']//*[contains(text(),'Add a line')]")
    this.txt_gross_taxable_income=this.page.locator("//input[@name='wizard_gross_taxable_income']")
    this.txt_less_deductions=this.page.locator("//input[@name='wizard_less_deductions']")
    this.txt_net_taxable_income=this.page.locator("//input[@name='wizard_net_taxable_income']")
    this.btn_save_button_for_guarantor_computation_income_details=this.page.locator("//button[@name='save_guarantor1_computation_income_wizard']")
    this.btn_verify_button_for_gurantor_computation_of_income=this.page.locator("//*[text()='1. Guarantor Computation of Income']/ancestor::h1//*[text()='Verify']")
    this.btn_add_data_button_for_guarantor_business_details=this.page.locator("//button[@name='guarantor1_business_details_wizard']//span[contains(text(),'Add Data')]")
    this.txt_name_of_the_firm_for_for_gurantor_business_details=this.page.locator("//input[@name='wizard_guarantor1_business_name']")
    this.txt_address_of_the_firm=this.page.locator("//input[@name='wizard_guarantor1_business_address']")
    this.txt_type_of_ownership=this.page.locator("//input[@name='wizard_guarantor1_ownership']")
    this.txt_nature_of_business_in_detail=this.page.locator("//input[@name='wizard_guarantor1_nature_of_business']")
    this.btn_add_a_line_button_for_guarantor_financials=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='guarantor1_business_details_ids']//*[contains(text(),'Add a line')]")
    this.txt_month_in_guarantor_financials_balance_sheet=this.page.locator("//select[@name='wizard_month']")
    this.txt_year_in_guarantor_financials_balance_sheet=this.page.locator("//select[@name='wizard_year']")
    this.txt_capital_networth_in_guarantor_financials_balance_sheet=this.page.locator("//input[@name='wizard_capital_networth']")
    this.txt_deductions_in_guarantor_financials_balance_sheet=this.page.locator("//input[@name='wizard_deductions']")
    this.btn_save_button_for_gurantor_business_details=this.page.locator("//span[normalize-space()='Save']")
    this.btn_verify_button_for_guarantor_business_details=this.page.locator("//*[text()='2. Guarantor Business Details']/ancestor::h1//*[text()='Verify']")
 




    this.btn_add_data_button_for_guarantor1_P_L_details=this.page.locator('//button[@name="guarantor1_income_details_wizard"]')
    this.btn_add_line_button_for_guarantor1_P_L_details=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='guarantor1_income_details_ids']//*[contains(text(),'Add a line')]")
    this.P_L_statement_add_month_field=this.page.locator('//select[@name="wizard_month"]')
    this.P_L_statement_year_field=this.page.locator('//select[@name="wizard_year"]')
    this.P_L_statement_sales_field=this.page.locator('//input[@name="wizard_sales"]')
    this.P_L_statement_purchase_field=this.page.locator('//input[@name="wizard_purchases"]')
    this.P_L_statement_net_profit_field=this.page.locator('//input[@name="wizard_net_profit"]')
    this.P_L_statement_depreciation_field=this.page.locator('//input[@name="wizard_depreciation"]')

    this.P_L_statement_interest_field=this.page.locator('//input[@name="wizard_interest"]')                           
    this.P_L_statement_income_tax_field=this.page.locator('//input[@name="wizard_income_tax"]')
    this.P_L_statement_other_income_tax_field=this.page.locator('//input[@name="wizard_other_income"]')
    this.P_L_statement_agriculture_income_field=this.page.locator('//input[@name="wizard_agricultural_income"]')
    this.P_L_statement_TDS_field=this.page.locator('//input[@name="wizard_tds"]')
    this.P_L_statement_save_btn=this.page.locator('//button[@name="save_guarantor1_income_details_wizard"]')
    this.P_L_statement_verify_btn=this.page.locator("//*[text()='1. Guarantor P and L Details']/ancestor::h1//*[text()='Verify']")

    this.guarantor1_bank_statement_add_data_btn= this.page.locator('//button[@name="guarantor1_bank_statement_wizard"]');
    this.guarantor1_bank_statement_details_add_line_btn= this.page.locator('//*[contains(text(),"Add a line")]/following::div[@name="guarantor1_bank_statement_ids"]//*[contains(text(),"Add a line")]');
    this.guarantor1_bank_statement_details_name= this.page.locator("//input[@name='wizard_name']");
    this.guarantor1_bank_statement_detail_account_no= this.page.locator("//input[@name='wizard_ac_no']");
    this.guarantor1_bank_statement_bank_balance= this.page.locator("//input[@name='wizard_bank_balance']");
    this.guarantor1_bank_statement_avg_balance= this.page.locator("//input[@name='wizard_avg_balance']");
    this.guarantor1_bank_statement_detail_cbmbc_field= this.page.locator("//input[@name='wizard_cb_mbc_ac_ecs_si']");
    this.guarantor1_bank_statement_save_btn= this.page.locator('//button[@name="save_guarantor1_bank_statement_wizard"]');
    //this.bank_statement_details_table= this.page.locator("//tbody[@class='ui-sortable']/ancestor::div[@name='bank_statement_details_ids']");
    this.guarantor1_bank_statement_verify_btn= this.page.locator("//*[text()='1. Guarantor Bank Statement Details']/ancestor::h1//*[text()='Verify']");


    this.guarantor1_added_other_income_details_add_data_btn= this.page.locator('//button[@name="guarantor1_other_income_wizard"]')
    this.guarantor1_added_other_income_details_add_line_btn= this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='guarantor1_other_income_ids']//*[contains(text(),'Add a line')]") 
    this.guarantor1_added_other_income_details_month_fields_btn= this.page.locator('//select[@name="wizard_month"]')
    //this.guarantor1_added_other_income_details_year= this.page.locator("//select[@name='wizard_month']")
    this.guarantor1_added_other_income_details_amount= this.page.locator("//input[@name='wizard_amount']")
    this.guarantor1_added_other_income_details_save_btn= this.page.locator('//button[@name="save_guarantor1_other_income_wizard"]')
    //this.guarantor1_verify_other_income_details_data= this.page.locator("//div[@name='other_income_ids']")
    this.guarantor1_other_income_details_verify_btn= this.page.locator("//*[text()='Guarantor1 Other Income Details']/ancestor::h1//*[contains(text(),'Verify')]")
    

    this.btn_Add_data_in_guarantor_Membership_Details=this.page.locator('//button[@name="guarantor_membership_details_wizard"]')
this.guarantor_Membership_Number_in_Membership_Details=this.page.locator('//input[@name="wizard_guarantor_membership_number"]')
this.guarantor_Number_of_Shares_in_Membership_Details=this.page.locator('//input[@name="wizard_guarantor_no_of_shares"]')
this.guarantor_Shares_From_in_Membership_Details=this.page.locator('//input[@name="wizard_guarantor_share_from"]')  
this.guarantor_Existing_Shares_Amount_in_Membership_Details=this.page.locator('//input[@name="wizard_guarantor_existing_share_amt"]')  
this.guarantor_Total_Shares_Required_in_Membership_Details=this.page.locator('//input[@name="wizard_guarantor_total_share_req"]')
this.guarantor_Additional_Shares_Required_in_Membership_Details=this.page.locator('//input[@name="wizard_guarantor_additional_share_req"]')
this.btn_Save_in_guarantor_Membership_Details=this.page.locator('//button[@name="save_guarantor_membership_details"]')
this.checkbox_verify_in_guarantor_Membership_Details=this.page.locator("//*[text()='Guarantor Membership Details']/ancestor::h1//*[text()='Verify']")


this.add_data_btn_ITR_details=this.page.locator('//button[@name="guarantor1_itr_business_details_wizard"]')
this.add_line_btn_ITR_details=this.page.locator('//*[contains(text(),"Add a line")]/following::div[@name="guarantor1_itr_business_details_table_ids"]//*[contains(text(),"Add a line")]')
this.month_btn_ITR_details=this.page.locator('//select[@name="wizard_month"]')
this.year_btn_ITR_details=this.page.locator('//select[@name="wizard_year"]')
this.total_income_btn_ITR_details=this.page.locator('//input[@name="wizard_total_income"]')
this.total_taxes_interest_fee_btn_ITR_details=this.page.locator('//input[@name="wizard_total_taxes_interest_fee_payable"]')
this.taxes_paid_btn_ITR_details=this.page.locator('//input[@name="wizard_taxes_paid"]')
this.save_btn_ITR_details=this.page.locator('//button[@name="save_guarantor1_itr_business_details"]')
this.verify_btn_ITR_details=this.page.locator("//*[text()='1. Guarantor ITR Details']/ancestor::h1//*[contains(text(),'Verify')]")
    

this.guarantor2_ID_proof_details_add_data_btn=this.page.locator('//button[@name="guarantors2_id_proof_details_wizards"]')
    this.guarantor2_first_name_id_document=this.page.locator('//input[@name="wizard_guarantor2_first_name_id_document"]')         
    this.guarantor2_pan_name_id_document=this.page.locator('//input[@name="wizard_guarantor2_pan_document"]')
    this.save_btn_guarantor2iddoc_details=this.page.locator('//button[@name="save_guarantor2iddoc_details"]')

  }
  


 async user_enter_guarantor_basic_information_mobile_number(strnumber: string) {
  await this.playwrightFactory.fill(this.guarantor_basic_information_mobile_number, strnumber)
}
async user_enter_guarantor_basic_information_guarantor_name(strname: string) {
  await this.playwrightFactory.fill(this.guarantor_basic_information_guarantor_name, strname)
}
    
async user_enter_guarantor_basic_information_date_of_birth(strname: string) {
  await this.playwrightFactory.fill(this.guarantor_basic_information_guarantor_date_of_birth, strname)
}
   
async user_enter_guarantor_basic_information_guarantor_address(strname: string) {
  await this.playwrightFactory.fill(this.guarantor_basic_information_guarantor_address, strname)
}
async user_enter_guarantor_basic_information_guarantor_profile_type(){
  await this.guarantor_basic_information_guarantor_profile_type.selectOption({label:'Business'})
}


async user_enter_guarantor2_basic_information_mobile_number(strnumber: string) {
  await this.playwrightFactory.fill(this.guarantor2_basic_information_mobile_number, strnumber)
}
async user_enter_guarantor2_basic_information_guarantor_name(strname: string) {
  await this.playwrightFactory.fill(this.guarantor2_basic_information_guarantor_name, strname)
}
    
async user_enter_guarantor2_basic_information_date_of_birth(strname: string) {
  await this.playwrightFactory.fill(this.guarantor2_basic_information_guarantor_date_of_birth, strname)
}
   
async user_enter_guarantor2_basic_information_guarantor_address(strname: string) {
  await this.playwrightFactory.fill(this.guarantor2_basic_information_guarantor_address, strname)
}
async user_enter_guarantor2_basic_information_guarantor_profile_type(){
  await this.guarantor2_basic_information_guarantor_profile_type.selectOption({label:'Business'})
}


async user_click_add_data_button_of_guarantor_id_proof_details_field(){
  await this.guarantor_ID_proof_details_add_data_btn.click()
}
async user_enter_guarantor1_first_name_id_document(strname: string) {
  await this.playwrightFactory.fill(this.guarantor1_first_name_id_document, strname)
}
async user_enter_guarantor1_pan_name_id_document(strname: string) {
  await this.playwrightFactory.fill(this.guarantor1_pan_name_id_document, strname)
}
async user_click_save_btn_guarantor1iddoc_details(){
  await this.save_btn_guarantor1iddoc_details.click()
}

// async user_click_eye_btn_pan_card(){
//   await this.eye_btn_pancard.click()
//   await expect(this.eye_btn_pancard).toBeVisible();


async user_click_eye_btn_pan_card() {

  const isDisabledVisible = await this.eye_btn_pancard_disabled.isVisible();
  const isEnabledVisible = await this.eye_btn_pancard_enabled.isVisible();

  if (isDisabledVisible) {
      console.log("Disabled eye button is visible → clicking to enable visibility");
      await this.playwrightFactory.click(this.eye_btn_pancard_disabled);
      return;
  }

  if (isEnabledVisible) {
      console.log("Enabled eye button is visible → clicking to disable visibility");
      await this.playwrightFactory.click(this.eye_btn_pancard_enabled);
      return;
  }

  //throw new Error("Eye button not visible in any state (enabled/disabled).");
}







async user_click_verify_btn_guarantor1iddoc_details(){
  await this.verify_btn_guarantor1iddoc_details.click()
}
async user_click_guarantor1_business_certificate_details_add_data_btn(){
  await this.guarantor1_business_certificate_details_add_data_btn.click()
}
async user_enter_guarantor1_business_certificate_details_name_of_firm_field(strname: string){
  await this.playwrightFactory.fill(this.guarantor1_business_certificate_details_name_of_firm_field, strname)
}

async user_enter_guarantor1_business_certificate_details_shop_act_field(strname: string){
  await this.playwrightFactory.fill(this.guarantor1_business_certificate_details_shop_act_field, strname)
}
async user_enter_guarantor1_business_certificate_details_name_of_owner_field(strname: string){
  await this.playwrightFactory.fill(this.guarantor1_business_certificate_details_name_of_owner_field, strname)
}

async user_enter_guarantor1_business_certificate_details_type_of_business_field(strname: string){
  await this.playwrightFactory.fill(this.guarantor1_business_certificate_details_type_of_business_field, strname)
}
async user_enter_guarantor1_business_certificate_details_udhayam_name_field(strname: string){
  await this.playwrightFactory.fill(this.guarantor1_business_certificate_details_udhayam_name_field, strname)
}
async user_enter_guarantor1_business_certificate_details_udhayam_nunber_field(strname: string){
  await this.playwrightFactory.fill(this.guarantor1_business_certificate_details_udhayam_nunber_field, strname)
}
async user_enter_guarantor1_business_certificate_details_no_of_year_business_field(strname: string){
  await this.playwrightFactory.fill(this.guarantor1_business_certificate_details_no_of_year_business_field, strname)
}
async user_click_save_btn_guarantor1_business_certificate_details(){
  await this.save_btn_guarantor1_business_certificate_details_field.click()
}

async user_click_verify_btn_guarantor1_business_certificate_details(){
  await this.verify_btn_guarantor1_business_certificate_details_field.click()
}

async user_click_add_data_btn_guarantors1_address_proof_details(){
  await this.add_data_btn_guarantors1_address_proof_details.click()
}

async user_enter_name_in_guarantors1_address_proof_details_field(strname: string){
  await this.playwrightFactory.fill(this.guarantors1_address_proof_details_name_field, strname)
}

async user_enter_adhar_number_in_guarantors1_address_proof_details_field(strname: string){
  await this.playwrightFactory.fill(this.guarantors1_address_proof_details_aadhar_doc_field, strname)
}

async user_enter_residence_address_document_in_guarantors1_address_proof_details_field(strname: string){
  await this.playwrightFactory.fill(this.guarantors1_address_proof_details_residence_address_document_field, strname)
}
async user_enter_date_of_birth_in_guarantors1_address_proof_details_field(strname: string){
  await this.playwrightFactory.fill(this.guarantors1_address_proof_details_dob_field, strname)
}

async user_click_save_btn_guarantors1_address_proof_details(){
  await this.save_btn_guarantors1_address_proof_details.click()
}
async user_click_verify_btn_guarantors1_address_proof_details(){
  await this.verify_btn_guarantors1_address_proof_details.click()
}

async user_clicks_guarantor_computation_of_income_add_data_button(){
  await this.playwrightFactory.click(this.btn_guarantor_computation_of_income_add_data_button);
}
 
async user_click_add_line_button_for_guarantor_computation_income_details(){
  await this.playwrightFactory.click(this.btn_guarantor_computation_income_details_add_a_line_button);
}
 
async user_enters_gross_taxable_income(strgrossincome: string){
  await this.playwrightFactory.click(this.txt_gross_taxable_income)
  await this.playwrightFactory.fill(this.txt_gross_taxable_income, strgrossincome);
}
 
async user_enters_less_deductions(strlessdeductions: string){
  await this.playwrightFactory.click(this.txt_less_deductions)

  await this.playwrightFactory.fill(this.txt_less_deductions, strlessdeductions);
}
 
async user_enters_net_taxable_income(strnettaxable: string){
  await this.playwrightFactory.click(this.txt_net_taxable_income)

  await this.playwrightFactory.fill(this.txt_net_taxable_income, strnettaxable);
}
async user_clicks_save_button_for_guarantor_computation_income_details(){
  await this.playwrightFactory.click(this.btn_save_button_for_guarantor_computation_income_details);
}
 
async user_click_verify_button_for_gurantor_computation_of_income(){
  await this.playwrightFactory.click(this.btn_verify_button_for_gurantor_computation_of_income);
}
async user_clicks_add_data_button_for_guarantor_business_details(){
  await this.playwrightFactory.click(this.btn_add_data_button_for_guarantor_business_details);
}
 
async user_enters_name_of_the_firm_in_guarantor_business_details(strfirm: string){
  await this.playwrightFactory.fill(this.txt_name_of_the_firm_for_for_gurantor_business_details, strfirm);
}
 
async user_enters_address_of_the_firm_in_guarantor_business_details(straddress: string){
  await this.playwrightFactory.fill(this.txt_address_of_the_firm, straddress);
}
 
async user_enters_type_of_ownership_in_guarantor_business_details(strownership: string){
  await this.playwrightFactory.fill(this.txt_type_of_ownership, strownership);
}
 
async user_enters_nature_of_business_in_details_in_guarantor_business_details(strnature: string){
  await this.playwrightFactory.fill(this.txt_nature_of_business_in_detail, strnature);
}
 
async user_clicks_add_a_line_button_for_guarantor_financials_balance_sheet(){
  await this.playwrightFactory.click(this.btn_add_a_line_button_for_guarantor_financials);
}
 
async user_select_month_in_guarantor_financials_balance_sheet() {
  await this.txt_month_in_guarantor_financials_balance_sheet.selectOption({label:'March'});
}
 

async user_select_year_in_guarantor_financials_balance_sheet() {
  await this.txt_year_in_guarantor_financials_balance_sheet.selectOption({label:'2022'});
}
 
async user_enters_capital_networth_in_guarantor_balance_sheet(strcapital: string){
  await this.playwrightFactory.fill(this.txt_capital_networth_in_guarantor_financials_balance_sheet, strcapital);
}
 
async user_enters_deductions_in_guarantor_balance_sheet(strdeductions: string){
  await this.playwrightFactory.fill(this.txt_deductions_in_guarantor_financials_balance_sheet, strdeductions);
}
 
async user_click_save_button_for_guarantor_details(){
  await this.playwrightFactory.click(this.btn_save_button_for_gurantor_business_details);
}
 
async user_click_verify_button_for_gurantor_business_details(){
  await this.playwrightFactory.click(this.btn_verify_button_for_guarantor_business_details);
}



async user_click_btn_add_data_button_for_guarantor1_P_L_details(){
  await this.btn_add_data_button_for_guarantor1_P_L_details.click()
}
async user_click_btn_add_line_button_for_guarantor1_P_L_details(){
  await this.btn_add_line_button_for_guarantor1_P_L_details.click()
}

async user_select_add_month_field_in_guarantor1_pl_statement(){
  await this.P_L_statement_add_month_field.selectOption({label:'January'});
}
async user_select_year_field_in_pl_statement(){
  await this.P_L_statement_year_field.selectOption({label:'2022'});
}





async user_enters_sales_field_in_guarantor1__pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_sales_field, strname);
}
async user_enters_purchase_field_in_guarantor1_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_purchase_field, strname);
}
async user_enters_net_profit_field_in_pl_guarantor1_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_net_profit_field, strname);
}


async user_enters_depreciation_field_in_pl_guarantor1_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_depreciation_field, strname);
}
async user_enters_interest_field_in_guarantor1_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_interest_field, strname);
}

async user_enters_income_tax_field_in_pl_guarantor1_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_income_tax_field, strname);
}

async user_enters_other_income_tax_field_in_pl_guarantor1_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_other_income_tax_field, strname);

}
async user_enters_agriculture_income_field_in_pl_guarantor1_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_agriculture_income_field, strname);

}
async user_enters_TDS_field_in_pl_guarantor1_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_TDS_field, strname);

}

async user_click_guarantor1_pl_save_btn(){
  await this.playwrightFactory.click(this.P_L_statement_save_btn);
}

async user_click_guarantor1_pl_verify_btn(){
  await this.playwrightFactory.click(this.P_L_statement_verify_btn);
}



async user_click_guarantor1_add_data_btn_for_bank_statement(){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_add_data_btn);
}
async user_click_guarantor1_add_line_btn_for_bank_statement_details(){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_details_add_line_btn);
}
async user_enter_guarantor1_name_in_bank_statement_section(strName: string){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_details_name)
  await this.playwrightFactory.fill(this.guarantor1_bank_statement_details_name, strName);
}
async user_enter_guarantor1_accont_no_in_bank_statement_section(strAccount: string){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_detail_account_no);
  await this.playwrightFactory.fill(this.guarantor1_bank_statement_detail_account_no,strAccount);
}
async user_enter_guarantor1_bank_balance_bank_statement_section(strBalnce: string){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_bank_balance)
  await this.playwrightFactory.fill(this.guarantor1_bank_statement_bank_balance, strBalnce);
}
async user_enter_guarantor1_avg_balance_in_bank_statement_section(strAvg: string){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_avg_balance);
  await this.playwrightFactory.fill(this.guarantor1_bank_statement_avg_balance,strAvg);
}
async user_enter_guarantor1_cb_mbc_field(strCb: string){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_detail_cbmbc_field);
  await this.playwrightFactory.fill(this.guarantor1_bank_statement_detail_cbmbc_field, strCb);
}
async user_click_guarantor1_save_btn_for_bank_statement_section(){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_save_btn);
}

async user_click_guarantor1_verify_btn_for_bank_statement_section(){
  await this.playwrightFactory.click(this.guarantor1_bank_statement_verify_btn);
}



async user_click_guarantor1_other_income_details_add_data_btn(){
  await this.playwrightFactory.click(this.guarantor1_added_other_income_details_add_data_btn);
}
 
async user_click_guarantor1_income_details_add_line_btn(){
  await this.playwrightFactory.click(this.guarantor1_added_other_income_details_add_line_btn);
}
async user_click_guarantor1_income_details_month_field_btn(){
  await this.guarantor1_added_other_income_details_month_fields_btn.selectOption({label:'March'})
}
 
 
async user_enter_guarantor1_amount_in_other_income_details(stramount: string){
  await this.playwrightFactory.fill(this.guarantor1_added_other_income_details_amount, stramount);
}
 
async user_clicks_guarantor1_income_details_save_btn(){
  await this.playwrightFactory.click(this.guarantor1_added_other_income_details_save_btn);
}

async user_clicks_guarantor1_income_details_verify_btn(){
  await this.playwrightFactory.click(this.guarantor1_other_income_details_verify_btn);
}




async user_clicks_Add_data_in_guarantor_Membership_Details(){
  await this.btn_Add_data_in_guarantor_Membership_Details.click()
  }
  async user_enters_guarantor_Membership_Number_in_Membership_Details(strno:string){
  await this.guarantor_Membership_Number_in_Membership_Details.fill(strno)
  }
   
  async user_enters_Number_of_Shares_in_guarantor_Membership_Details(strsharesno:string){
  await this.guarantor_Number_of_Shares_in_Membership_Details.fill(strsharesno)  
   
  }
  async user_enters_guarantor_Shares_From_in_Membership_Details(strsharesdate:string){
  await this.guarantor_Shares_From_in_Membership_Details.fill(strsharesdate)  
   
  }
  async user_enters_guarantor_Existing_Shares_Amount_in_Membership_Details(strexistingshares:string){
    await this.guarantor_Existing_Shares_Amount_in_Membership_Details.fill(strexistingshares)
   
  }
  async user_enters_guarantor_Total_Shares_Required_in_Membership_Details(strtotalshares:string){
    await this.guarantor_Total_Shares_Required_in_Membership_Details.fill(strtotalshares)
   
  }
  async user_enters_Additional_Shares_Required_in_guarantor__Membership_Details(straddshares:string){
  await this.guarantor_Additional_Shares_Required_in_Membership_Details.fill(straddshares)  
   
  }
  async user_clicks_Save_in_guarantor__Membership_Details(){
    await this.btn_Save_in_guarantor_Membership_Details.click()
   
  }
  async user_clicks_verify_in_guarantor_Membership_Details(){
  await this.checkbox_verify_in_guarantor_Membership_Details.click()
  }



  async user_click_guarantor_add_data_btn_ITR_details(){
    await this.playwrightFactory.click(this.add_data_btn_ITR_details);
  }
  async user_click_guarantor_add_line_btn_ITR_details(){
    await this.playwrightFactory.click(this.add_line_btn_ITR_details);
  }

  async user_select_guarantor_ITR_details_month_field(){
    await this.month_btn_ITR_details.selectOption({label:'January'});
}
async user_select_guarantor_ITR_details_year_field(){
  await this.year_btn_ITR_details.selectOption({label:'2025'});
}
async user_enters_guarantor_income_in_ITR_details_field(strname: string){
  await this.playwrightFactory.fill(this.total_income_btn_ITR_details, strname);
}
async user_enters_guarantor_total_taxes_fees_in_ITR_details_field(strname: string){
  await this.playwrightFactory.fill(this.total_taxes_interest_fee_btn_ITR_details, strname);
}
async user_enters_guarantor_taxes_paid_in_ITR_details_field(strname: string){
  await this.playwrightFactory.fill(this.taxes_paid_btn_ITR_details, strname);
}
async user_click_guarantor_save_btn_ITR_details(){
  await this.playwrightFactory.click(this.save_btn_ITR_details);
}
async user_click_guarantor_verify_btn_ITR_details(){
  await this.playwrightFactory.click(this.verify_btn_ITR_details);
}





}
