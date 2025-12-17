import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';


export class Personloan_Loan_Application_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;

 
  

  //**Declare */
  readonly Emp_details_Add_data_btn:Locator;
  readonly Name_of_firm:Locator;
  readonly joining_date:Locator;
  readonly Remark:Locator;
  readonly save_btn:Locator;
  readonly add_line_btn:Locator;
  readonly txt_id_proof_details_title: Locator;
  readonly txt_customer_name: Locator;
  readonly txt_pan_number_eye_icon: Locator;
  readonly txt_verify: Locator;
  readonly btn_verify_checkbox: Locator;
  readonly adress_proof_name: Locator;
  readonly adress_proof_adress: Locator;
  readonly adrees_proof_dob: Locator;
  readonly adhaar_no: Locator;
  readonly adress_proof_verify_btn: Locator;
  readonly customer_name_borrower_info_field: Locator;
  readonly borrower_adress: Locator;
  readonly same_as_borrower_adress_checkbox: Locator;
  readonly borower_current_adress: Locator;
  readonly borrower_residential_type: Locator;
  readonly borowers_mobile_no: Locator;
  readonly borrower_gender: Locator;
  readonly borrowers_age: Locator;
  readonly staff_name: Locator;
  readonly staff_id: Locator;
  readonly requested_loan_amount: Locator;
  readonly requested_loan_amount_in_words: Locator;
  readonly loan_period: Locator;
  readonly loan_perposed: Locator;
  
  readonly adress_of_firm: Locator;
  readonly designation: Locator;
  readonly type_of_organization: Locator;
  readonly salary_details_add_line_btn: Locator;
  readonly salary_details_month: Locator;
  readonly salary_details_year: Locator;
  readonly gross_salary: Locator;
  readonly deduction: Locator;
  readonly net_salary: Locator;
  readonly salary_credited_date: Locator;
  readonly pf: Locator;
  readonly salary_slip_save_btn: Locator;
  readonly salary_slip_cancel_btn: Locator;
  readonly company_name: Locator;
  readonly company_adress: Locator;
  readonly Company_Designation: Locator;
  readonly Organization_type: Locator;
  readonly Company_Joining_date: Locator;
  readonly Comapany_remark: Locator;
  readonly salary_detail_table: Locator;
  readonly employee_details_verify_btn: Locator;
  readonly salary_bank_account_add_btn: Locator;
  readonly salary_credit_bank_add_line_btn: Locator;
  readonly bank_name: Locator;
  readonly branch_name: Locator;
  readonly account_number: Locator;
  readonly bank_acc_opening_date: Locator;
  readonly type_of_account: Locator;
  readonly salary_credited_ammount: Locator;
  readonly bank_detail_save_btn: Locator;
  readonly salary_credidate_bank_account_table: Locator;
  readonly salary_credited_bank_account_verify_btn: Locator;
  readonly bank_statement_add_data_btn: Locator;
  readonly bank_statement_details_add_line_btn: Locator;
  readonly bank_statement_details_name: Locator;
  readonly bank_statement_detail_account_no: Locator;
  readonly bank_statement_bank_balance: Locator;
  readonly bank_statement_avg_balance: Locator;
  readonly bank_statement_detail_cbmbc_field: Locator;
  readonly bank_statement_save_btn: Locator;
  readonly bank_statement_details_table: Locator;
  readonly bank_statement_verify_btn: Locator;
  readonly company_id_add_data_btn: Locator;
  readonly company_name_in_company_id: Locator;
  readonly company_adress_in_company_id: Locator;
  readonly company_id_in_company_id: Locator;
  readonly employee_name_in_company_id: Locator;
  readonly joining_date_in_company_id: Locator;
  readonly company_id_save_btn: Locator;
  readonly added_company_name_in_company_id: Locator;
  readonly added_company_adress_in_company_id: Locator;
  readonly added_company_id_in_company_id: Locator;
  readonly added_employee_name_in_company_id: Locator;
  readonly added_joining_date_in_company_id: Locator;
  readonly company_id_verify_btn: Locator;
  readonly agriculture_income_add_data_btn: Locator;
  readonly agriculture_income_add_line_btn: Locator;
  readonly agriculture_income_year: Locator;
  readonly agriculture_income_ammount: Locator;
  readonly agriculture_income_save_btn: Locator;
  readonly btn_add_data_for_form_16_details: Locator;
 readonly btn_add_a_line_in_form_16_details: Locator;
readonly txt_Employment_details_in_form_16_detils: Locator;
readonly txt_Name_in_form_16_detils: Locator ;
readonly txt_TDS_in_form_16_detils:Locator;
readonly txt_PF_in_form_16_detils:Locator;
readonly btn_Save_in_form_16_details:Locator;
readonly btn_add_data_for_Membership_Details:Locator;
readonly txt_Membership_number_in_Membership_Details:Locator;
readonly txt_Name_of_shares_in_Membership_Details:Locator; 
readonly date_Shares_from_in_Membership_Details:Locator; 
readonly txt_Existing_share_amounts_in_Membership_Details:Locator ;
readonly txt_total_shares_required_inn_Membership_Details:Locator;
readonly txt_additional_shares_required_in_Membership_Details:Locator;
readonly btn_save_in_Membership_Details:Locator;
readonly btn_verify_in_Form_16: Locator;
readonly btn_verify_in_membership_Details:Locator;
readonly credit_bureau_title: Locator;
  readonly credit_bureau_verify_btn: Locator;
  readonly name_credit_bureau_field: Locator;
  readonly dob_credit_bureau_field: Locator;
  readonly upload_your_file_credit_bureau_field: Locator;
 
readonly settled_account: Locator;
 readonly written_account: Locator;
 readonly ctc_credit_bureau_field: Locator;
 readonly overdue_amount_pending: Locator;
 readonly credit_score: Locator;
 readonly accound_sold: Locator;
 readonly branch_remarks_on_cibil: Locator;
 readonly suit_field: Locator;
 readonly personal_score: Locator;
 readonly repayment_track: Locator;
 readonly wilful_defaulter: Locator;
 readonly add_a_line_credit_bureau_btn: Locator;
 readonly bank_loan_account_details: Locator;
 readonly loan_type_credit_bureau: Locator;
 readonly ownership: Locator;
 readonly loan_amount: Locator;
 readonly outstanding_amount:Locator;
 readonly emi_interest: Locator;
 readonly txt_name_comment: Locator;
 readonly loan_repayment: Locator;
 readonly btn_Verified: Locator
readonly btn_verify_agricultural_income:Locator 
readonly btn_verify_other_income: Locator
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

 
    this.Emp_details_Add_data_btn=this.page.locator('//button[@name="salary_details_wizard"]')
    this.Name_of_firm=this.page.locator("//input[@name='wizard_company_where_employed']");
    this.adress_of_firm= this.page.locator("//input[@name='wizard_address_of_the_firm']");
    this.designation= this.page.locator("//select[@name='wizard_designation']");
    this.type_of_organization= this.page.locator("//select[@name='wizard_type_of_organisation']");
    this.joining_date= this.page.locator("//input[@name='wizard_since_date']");
    this.Remark= this.page.locator("//input[@name='wizard_remarks']");


    this.save_btn=this.page.locator('button[name="save_salary_slip"]')
    this.add_line_btn=this.page.locator('#o_field_input_1192').getByRole('button', { name: 'Add a line' })
    this.txt_id_proof_details_title=this.page.locator("//span[normalize-space()='ID Proof Details']")
    this.txt_customer_name=this.page.locator("//span[@name='customer_first_name_id_document']")
    this.txt_pan_number_eye_icon=this.page.locator("(//span[@name='customer_pan_document']/following::button[@name='toggle_pan_visibility'])[2]")
    this.txt_verify=this.page.getByText('Verify').first()
    this.btn_verify_checkbox=this.page.locator('span:nth-child(4) > .o_field_boolean > .custom-control-label').first()
    this.adress_proof_name = this.page.locator("//span[@name='customer_first_name_address_document']");
    this.adress_proof_adress= this.page.locator("//span[@name='customer_residence_address_document']");
    this.adrees_proof_dob= this.page.locator("//span[@name='customer_dob_document']");
    this.adhaar_no= this.page.locator("//span[@name='customer_aadhaar_document']");
    this.adress_proof_verify_btn= this.page.locator("//*[text()='Address Proof Details']/ancestor::h1//*[contains(text(),'Verify')]");
    this.customer_name_borrower_info_field= this.page.locator("//input[@name='customer_name']");
    this.borrower_adress= this.page.locator("//input[@name='customer_borrower_address']");
    this.same_as_borrower_adress_checkbox= this.page.locator("//div[@name='is_same_as_borrower_address']");
    this.borower_current_adress= this.page.locator("//input[@name='borrower_current_address']");
    this.borrower_residential_type= this.page.locator("//select[@name='residential_type']");
    this.borowers_mobile_no= this.page.locator("//input[@name='customer_mobile_no']");
    this.borrower_gender= this.page.locator("//select[@name='customer_gender']");
    this.borrowers_age = this.page.locator("//input[@name='customer_borrower_age']");
    this.staff_name= this.page.locator("//input[@name='staff_name']");
    this.staff_id= this.page.locator("//input[@name='agent_id']");
    this.requested_loan_amount= this.page.locator('//div[@name="customer_loan_amount"]//input[@ type="text"]')
    //this.requested_loan_amount= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='customer_loan_amount']");
    this.requested_loan_amount_in_words= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='customer_loan_amount_in_words']");
    this.loan_period= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='customer_period_in_months']");
    this.loan_perposed= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='purpose_of_loan']");
    this.loan_repayment= this.page.locator('//select[@name="repayment_type_loan_requirement"]')
    this.salary_details_add_line_btn= this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='salary_details_ids']//*[contains(text(),'Add a line')]")
    this.salary_details_month = this.page.locator("//select[@name='wizard_month']");
    this.salary_details_year= this.page.locator("//select[@name='wizard_year']");
    this.gross_salary= this.page.locator("//input[@name='wizard_gross_salary']");
    this.deduction= this.page.locator("//input[@name='wizard_deductions']");
    this.net_salary= this.page.locator("//span[@name='wizard_net_salary']");
    this.salary_credited_date= this.page.locator("//input[@name='wizard_salary_credited_date']");
    this.pf= this.page.locator("//input[@name='wizard_pf']");
    this.salary_slip_save_btn= this.page.locator("//button[@name='save_salary_slip']");
    this.salary_slip_cancel_btn= this.page.locator("//button[@special='cancel']//span");
    this.company_name= this.page.locator("//span[@name='customer_company_where_employed']")
    this.company_adress= this.page.locator("//span[@name='customer_address_of_the_firm']");
    this.Company_Designation= this.page.locator("//span[@name='customer_designation_organisation']");
    this.Organization_type= this.page.locator("//span[@name='type_of_organisation']");
    this.Company_Joining_date= this.page.locator("//span[@name='customer_since_date']");
    this.Comapany_remark= this.page.locator("//span[@name='customer_remarks']");
    this.salary_detail_table= this.page.locator("//tbody[@class='ui-sortable']/ancestor::div[@name='salary_details_ids']");
    this.employee_details_verify_btn= this.page.locator("//*[text()='Employment Details']/ancestor::h1//*[text()='Verify']");
    this.salary_bank_account_add_btn= this.page.locator("//button[@name='salary_credit_bank_wizard']");
    this.salary_credit_bank_add_line_btn= this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='salary_credit_ids']//*[contains(text(),'Add a line')]")
    this.bank_name= this.page.locator("//input[@name='wizard_bank_name']");
    this.branch_name= this.page.locator("//*[contains(text(),'Salary Credit Bank')]/following::div[@name='salary_credit_ids']//tbody/tr/td[2]/input[1]");
    this.account_number= this.page.locator("//input[@name='wizard_account_number']");
    this.bank_acc_opening_date= this.page.locator("//input[@name='wizard_doc_acc_opening_date']");
    this.type_of_account= this.page.locator("//select[@name='wizard_account_type']");
    this.salary_credited_ammount= this.page.locator("//input[@name='wizard_doc_salary_credit_amt']");
    this.bank_detail_save_btn= this.page.locator("//button[@name='save_salary_credit']");
    this.salary_credidate_bank_account_table= this.page.locator("//tbody[@class='ui-sortable']/ancestor::div[@name='salary_credit_bank_ids']");
    this.salary_credited_bank_account_verify_btn= this.page.locator("//*[text()='Salary Credit Bank Account']/ancestor::h1//*[text()='Verify']");
    this.bank_statement_add_data_btn= this.page.locator("//button[@name='bank_statement_wizard']");
    this.bank_statement_details_add_line_btn= this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='bank_statement_ids']//*[contains(text(),'Add a line')]");
    this.bank_statement_details_name= this.page.locator("//input[@name='wizard_name']");
    this.bank_statement_detail_account_no= this.page.locator("//input[@name='wizard_ac_no']");
    this.bank_statement_bank_balance= this.page.locator("//input[@name='wizard_bank_balance']");
    this.bank_statement_avg_balance= this.page.locator("//input[@name='wizard_avg_balance']");
    this.bank_statement_detail_cbmbc_field= this.page.locator("//input[@name='wizard_cb_mbc_ac_ecs_si']");
    this.bank_statement_save_btn= this.page.locator("//button[@name='save_bank_statement_wizard']");
    this.bank_statement_details_table= this.page.locator("//tbody[@class='ui-sortable']/ancestor::div[@name='bank_statement_details_ids']");
    this.bank_statement_verify_btn= this.page.locator("//*[text()='Bank Statement Details']/ancestor::h1//*[text()='Verify']");
    this.company_id_add_data_btn= this.page.locator("//button[@name='company_id_details_wizard']")
    this.company_name_in_company_id= this.page.locator("//input[@name='wizard_first_name_company_document']");
    this.company_adress_in_company_id= this.page.locator("//input[@name='wizard_address_details']");
    this.company_id_in_company_id= this.page.locator("//input[@name='wizard_employee_id']");
    this.employee_name_in_company_id= this.page.locator("//input[@name='wizard_employee_name']");
    this.joining_date_in_company_id= this.page.locator("//input[@name='wizard_joining_date']");
    this.company_id_save_btn= this.page.locator("//button[@name='save_companyiddoc_details']");
    this.added_company_name_in_company_id= this.page.locator("//span[@name='customer_first_name_company_document']");
    this.added_company_adress_in_company_id= this.page.locator("//span[@name='customer_address_details']");
    this.added_company_id_in_company_id= this.page.locator("//span[@name='customer_employee_id']")
    this.added_employee_name_in_company_id= this.page.locator("//span[@name='customer_employee_name']")
    this.added_joining_date_in_company_id= this.page.locator("//span[@name='customer_joining_date']");
     this.company_id_verify_btn= this.page.locator("//*[text()='Company ID Details']/ancestor::h1//*[text()='Verify']");

    this.agriculture_income_add_data_btn= this.page.locator("//button[@name='agricultural_income_wizard']");
    this.agriculture_income_add_line_btn= this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='agricultural_income_ids']//*[contains(text(),'Add a line')]");
    this.agriculture_income_year= this.page.locator("//select[@name='wizard_year']");
    this.agriculture_income_ammount= this.page.locator("//input[@name='wizard_amount']");
    this.agriculture_income_save_btn= this.page.locator("//button[@name='save_agricultural_income_wizard']");
    this.btn_add_data_for_form_16_details = this.page.locator('//button[@name="itr_salaried_details_wizard"]');
    this.btn_add_a_line_in_form_16_details = this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='itr_salaried_details_table_ids']//*[contains(text(),'Add a line')]")
    this.txt_Employment_details_in_form_16_detils = this.page.locator("//input[@name='wizard_employement_details']")
    this.txt_Name_in_form_16_detils = this.page.locator("//input[@name='wizard_itr_name']")
    this.txt_TDS_in_form_16_detils = this.page.locator("//input[@name='wizard_itr_tds']")
    this.txt_PF_in_form_16_detils = this.page.locator("//input[@name='wizard_pf']")
    this.btn_Save_in_form_16_details = this.page.locator("//span[normalize-space()='Save']")
    this.btn_verify_in_Form_16= this.page.locator('//div[@name="verify_form_16_details"]')
    this.btn_verify_in_membership_Details= this.page.locator('//div[@name="verify_membership_details"]')
    this.btn_add_data_for_Membership_Details = this.page.locator("//button[@name='membership_details_wizard']//span[contains(text(),'Add Data')]")
    this.txt_Membership_number_in_Membership_Details = this.page.locator("//input[@name='wizard_membership_number']")
    this.txt_Name_of_shares_in_Membership_Details = this.page.locator("//input[@name='wizard_no_of_shares']")
    this.date_Shares_from_in_Membership_Details = this.page.locator('//input[@name="wizard_share_from"]');
    this.txt_Existing_share_amounts_in_Membership_Details = this.page.locator('//input[@name="wizard_existing_share_amt"]');
    this.txt_total_shares_required_inn_Membership_Details = this.page.locator('//input[@name="wizard_total_share_req"]');
    this.txt_additional_shares_required_in_Membership_Details= this.page.locator('//input[@name="wizard_additional_share_req"]')
    this.btn_save_in_Membership_Details = this.page.locator('//button[@name="save_membership_details"]');
this.credit_bureau_title=this.page.locator("(//span[contains(text(),'Credit Bureau')])[2]")
    this.credit_bureau_verify_btn=this.page.locator("//*[text()='Credit Bureau']/ancestor::h1//*[text()='Verify']")
    this.name_credit_bureau_field=this.page.locator("//input[@name='credit_name']")
    this.dob_credit_bureau_field=this.page.locator("//input[@name='dob']")
    this.upload_your_file_credit_bureau_field=this.page.locator("//*[contains(text(),'Upload your file')]/preceding::input[@name='uploaded_file']")
    this.settled_account=this.page.locator("//select[@name='settled_account']")
    this.written_account=this.page.locator("//select[@name='written_account']")
    this.ctc_credit_bureau_field=this.page.locator("//input[@name='ctc']")
    this.overdue_amount_pending=this.page.locator("//input[@name='overdue_amount_pending']")
    this.credit_score=this.page.locator("//input[@name='credit_vision']")
    this.accound_sold=this.page.locator("//select[@name='account_sold']")
    this.branch_remarks_on_cibil=this.page.locator("//input[@name='branch_remarks_on_cibil']")
    this.suit_field=this.page.locator("//select[@name='suit_field']")
    this.personal_score=this.page.locator("//input[@name='personal']")
    this.repayment_track=this.page.locator("//input[@name='credit_repayment_track']")
    this.wilful_defaulter=this.page.locator("//select[@name='wilful_defaulter']")
    this.add_a_line_credit_bureau_btn=this.page.locator("//*[contains(text(),'Add a line')]/ancestor::div[@name='cibil_score_data_ids']//*[contains(text(),'Add a line')]")
    this.bank_loan_account_details=this.page.locator("//input[@name='bank_loan_accounts_details']")
    this.loan_type_credit_bureau=this.page.locator("//input[@name='loan_type']")
    this.ownership=this.page.locator("//input[@name='ownership']")
    this.loan_amount=this.page.locator("//div[@name='loan_amount']//input[@type='text']")
    this.outstanding_amount=this.page.locator("//div[@name='outstanding_amount']")
    this.emi_interest=this.page.locator("//input[@name='emi_interest']")
   this.txt_name_comment=this.page.locator('//textarea[@name="branch_manager_recommendation"]')
this.btn_Verified=this.page.locator('//button[@name="verify_data"]') 
this.btn_verify_agricultural_income=this.page.locator("//div[@name='verify_agricultural_income_details']")
this.btn_verify_other_income=this.page.locator("//div[@name='verify_other_income_details']")



 }

async user_verify_id_proof_details_title(){
    await expect(this.txt_id_proof_details_title).toBeVisible();
}


async user_verify_customer_name(){
    await expect(this.txt_customer_name).toBeVisible();
}

// async user_verify_and_clicks_on_pan_number_eye_icon(){
//   await expect(this.txt_customer_name).toBeVisible();
//    await this.playwrightFactory.click(this.txt_pan_number_eye_icon);
// }

async user_verify_and_clicks_on_the_checkbox(){
  await expect(this.txt_verify).toBeVisible();
  await this.playwrightFactory.click(this.txt_verify)
}
async user_verify_name_in_adress_proof_field(){
  await expect(this.adress_proof_name).toBeVisible();
}
async user_verify_adress_in_adress_proof_field(){
  await expect(this.adress_proof_adress).toBeVisible();
}
async user_verify_dob_in_adress_proof_field(){
  await expect(this.adrees_proof_dob).toBeVisible();
}
async user_verify_adhaar_number(){
  await expect(this.adhaar_no).toBeVisible();
}
async user_click_verify_btn_for_adress_proof(){
  await this.playwrightFactory.click(this.adress_proof_verify_btn);
   await this.page.evaluate(() => {
window.scrollBy(1000,1500); // Scroll down
});
}

async user_verify_customer_name_in_borrower_info_field(){
  await expect(this.customer_name_borrower_info_field).not.toBeEmpty();
}  
async user_verify_borrower_adress(){
  await expect(this.borrower_adress).not.toBeEmpty();
}
async user_check_same_adress_checkbox(){
  await this.playwrightFactory.click(this.same_as_borrower_adress_checkbox);
}
async user_verify_borrower_current_adress(){
  await expect(this.borower_current_adress).not.toBeEmpty();
}
async user_verify_borrowers_residential_type(){
  await this.borrower_residential_type.selectOption({label:'Self Owned'});
  await expect(this.borrower_residential_type).not.toBeEmpty();
}
async user_verify_borrowers_mobile_no(){
  await expect(this.borowers_mobile_no).not.toBeEmpty();
}
async user_verify_borrower_gender(){
  await expect(this.borrower_gender).not.toBeEmpty();
}
async user_verify_borrowers_age(){
  await expect(this.borrowers_age).not.toBeEmpty();
}
// async user_verify_staff_name(){
//   await expect(this.staff_name).not.toBeEmpty();
// }
// async user_verify_staff_id(){
//   await expect(this.staff_id).not.toBeEmpty();

// }
async user_verify_loan_requested_amount(){
     await this.page.evaluate(() => {
  window.scrollBy(2500,3000); // Scroll down
  });


  await expect(this.requested_loan_amount).not.toBeEmpty();
}
async user_verify_loan_requested_amount_in_words(){
  await expect(this.requested_loan_amount_in_words).not.toBeEmpty();
}
async user_verify_loan_period(){
 
  await expect(this.loan_period).not.toBeEmpty();
}
async user_verify_loan_purpose(){
  await expect(this.loan_perposed).not.toBeEmpty();

}
async user_enters_loan_Repayment_type(){
  await this.loan_repayment.selectOption({label:'EMI'}); 
}

 async user_clicks_emp_details_add_data_btn(){
  await this.playwrightFactory.click(this.Emp_details_Add_data_btn);
}

async user_enters_name_of_firm_field(strName: string){
await this.playwrightFactory.fill(this.Name_of_firm, strName);
}

async user_enters_address_of_firm_field(strAdress: string) {
 await this.playwrightFactory.fill(this.adress_of_firm, strAdress)
}


async user_select_designation_in_the_organization() {
  await this.designation.selectOption({label:'Executive'});
}

async user_select_type_of_organization() {
  await this.type_of_organization.selectOption({label:'Private Ltd. Co.'});
}

async user_selectjoining_date(strJoiningdate: string) {
await this.playwrightFactory.fill(this.joining_date, strJoiningdate)
}
async user_enters_remarks(strRemark: string) {
  await this.playwrightFactory.fill(this.Remark,strRemark)
}
async user_click_add_line_for_salary_detail_section(){
  await this.playwrightFactory.click(this.salary_details_add_line_btn);
}
async user_select_month(strmonth:string){
  await this.salary_details_month.selectOption({label:strmonth})
}
async user_select_year(stryear:string){
  await this.salary_details_year.selectOption({label:stryear})
}
async user_enter_gross_salary(strSalary: string){
  await this.playwrightFactory.fill(this.gross_salary, strSalary)
}
async user_enter_diduction_amount(strDeduction: string){
  await this.playwrightFactory.fill(this.deduction, strDeduction)
}
async user_verify_net_salary(strNetsalary: string){
  
  await expect(this.net_salary).toContainText(strNetsalary);
}
async user_enter_salary_credidate_date(strSalarycredidatedate: string){
  await this.playwrightFactory.fill(this.salary_credited_date, strSalarycredidatedate)
}
async user_enter_pf(strPF: string){
  await this.playwrightFactory.fill(this.pf, strPF)
}

async user_clicks_save_btn(){
  await this.playwrightFactory.click(this.salary_slip_save_btn);
  await this.page.waitForTimeout(10000);
}
// async user_click_cancel_btn(){
//   await this.playwrightFactory.click(this.salary_slip_cancel_btn);
// }
// async user_verify_added_company_name(strCompanyname: string){
//   await expect(this.company_name).toContainText(strCompanyname)
// }
// async user_verify_added_company_adress(strAdress: string){
//   await expect(this.company_adress).toContainText(strAdress);
// }
// async user_verify_added_designation(strDesignation: string){
//   await expect(this.Company_Designation).toContainText(strDesignation);
// }
// async user_verify_added_organization_type(strType: string){
//   await expect(this.Organization_type).toContainText(strType);
// }
// async user_verify_added_joining_date(strDate: string){
//   await expect(this.Company_Joining_date).toContainText(strDate);
// }
// async user_verify_added_remark(strRemark: string){
//   await expect(this.Comapany_remark).toContainText(strRemark);
//}
async user_verify_salary_detail_table(){
  await expect(this.salary_detail_table).toBeVisible();
}
async user_click_verify_button_for_employment_details(){
  await this.playwrightFactory.click(this.employee_details_verify_btn);
}
async user_click_add_btn_for_salary_bank_details(){
  await this.playwrightFactory.click(this.salary_bank_account_add_btn)
}
async user_click_add_line_btn_for_salary_credit_bank(){
  await this.playwrightFactory.click(this.salary_credit_bank_add_line_btn);
}
async user_enter_bank_name(strBank: string){
  await this.playwrightFactory.fill(this.bank_name, strBank);
}
async user_enter_branch_name(strBranchname: string){
  await this.playwrightFactory.click(this.branch_name);
  await this.playwrightFactory.fill(this.branch_name, strBranchname);
}
async user_enter_account_number(strAccountnumber: string){
  await this.playwrightFactory.click(this.account_number);
  await this.playwrightFactory.fill(this.account_number, strAccountnumber);
}
async user_enter_account_opening_date(strOpeningate: string){
  await this.page.locator('input[name="wizard_doc_acc_opening_date"]').click();
  await this.page.getByRole('cell', { name: '6', exact: true }).first().click();
  // await this.playwrightFactory.click(this.bank_acc_opening_date);
  // await this.playwrightFactory.fill(this.bank_acc_opening_date, strOpeningate);
}
async user_select_account_type(){
  await this.type_of_account.selectOption({label:'Saving'})
}
async user_enter_credited_ammount(strCreditedmount: string){
  await this.page.waitForTimeout(3000);
  await this.playwrightFactory.click(this.salary_credited_ammount);
  await this.playwrightFactory.fill(this.salary_credited_ammount, strCreditedmount);
}
async user_click_save_btn_for_bank_details(){
  await this.playwrightFactory.click(this.bank_detail_save_btn);
}
async user_verify_salary_credited_bank_account_table(){
  await expect(this.salary_credidate_bank_account_table).toBeVisible();
}
async user_click_verify_btn_for_salary_credidate_account(){
  await this.playwrightFactory.click(this.salary_credited_bank_account_verify_btn);
}
async user_click_add_data_btn_for_bank_statement(){
  await this.playwrightFactory.click(this.bank_statement_add_data_btn);
}
async user_click_add_line_btn_for_bank_statement_details(){
  await this.playwrightFactory.click(this.bank_statement_details_add_line_btn);
}
async user_enter_name_in_bank_statement_section(strName: string){
  await this.playwrightFactory.click(this.bank_statement_details_name)
  await this.playwrightFactory.fill(this.bank_statement_details_name, strName);
}
async user_enter_accont_no_in_bank_statement_section(strAccount: string){
  await this.playwrightFactory.click(this.bank_statement_detail_account_no);
  await this.playwrightFactory.fill(this.bank_statement_detail_account_no,strAccount);
}
async user_enter_bank_balance_bank_statement_section(strBalnce: string){
  await this.playwrightFactory.click(this.bank_statement_bank_balance);
  await this.playwrightFactory.fill(this.bank_statement_bank_balance, strBalnce);
}
async user_enter_avg_balance_in_bank_statement_section(strAvg: string){
  await this.playwrightFactory.click(this.bank_statement_avg_balance);
  await this.playwrightFactory.fill(this.bank_statement_avg_balance,strAvg);
}
async user_enter_cb_mbc_field(strCb: string){
  await this.playwrightFactory.click(this.bank_statement_detail_cbmbc_field);
  await this.playwrightFactory.fill(this.bank_statement_detail_cbmbc_field, strCb);
}
async user_click_save_btn_for_bank_statement_section(){
  await this.playwrightFactory.click(this.bank_statement_save_btn);
}
async user_verify_bank_statement_table(){
  await expect(this.bank_statement_details_table).toBeVisible();
}
async user_click_verify_btn_for_bank_statement_section(){
  await this.playwrightFactory.click(this.bank_statement_verify_btn);
}
async user_click_add_data_btn_for_company_id(){
  await this.playwrightFactory.click(this.company_id_add_data_btn);
}
async user_enter_company_name_in_company_id_details(strName: string){
  await this.playwrightFactory.fill(this.company_name_in_company_id, strName);
}
async user_enter_adress_in_company_id_details(strAdress: string){
  await this.playwrightFactory.fill(this.company_adress_in_company_id, strAdress);
}
async user_enter_company_id(strId: string){
  await this.playwrightFactory.fill(this.company_id_in_company_id, strId);
}
async user_enter_employee_name_in_company_id(strName: string){
  await this.playwrightFactory.fill(this.employee_name_in_company_id,strName);
}
async user_enter_joining_date_in_company_id(strDate: string){
  await this.playwrightFactory.click(this.joining_date_in_company_id);
  await this.page.getByRole('cell', { name: '6', exact: true }).first().click();
}
async user_click_save_btn(){
  await this.playwrightFactory.click(this.company_id_save_btn);
  await this.page.waitForTimeout(3000);
}
async user_verify_added_company_name_in_company_id(strName: string){
  await expect(this.added_company_name_in_company_id).toContainText(strName)
}
async user_verify_added_adress_in_company_id(strAdress: string){
  await expect(this.added_company_adress_in_company_id).toContainText(strAdress);
}
async user_verify_added_employee_id(strId: string){
  await expect(this.added_company_id_in_company_id).toContainText(strId);
}
async user_verify_added_employee_name_in_company_id(strName: string){
  await expect(this.added_employee_name_in_company_id).toContainText(strName);
}
async user_verify_added_joining_date_in_company_id(strDate: string){
  await expect(this.added_joining_date_in_company_id).toContainText(strDate);
}
async user_click_verify_btn_for_company_id(){
  await this.playwrightFactory.click(this.company_id_verify_btn);
}

async user_clicks_add_data_for_form_16(){
  await this.playwrightFactory.click(this.btn_add_data_for_form_16_details);
}
  async user_click_on_add_a_line_in_form16(){
    await this.playwrightFactory.click(this.btn_add_a_line_in_form_16_details);
  }
async user_enter_employment_details(strEmploymentDetails:string){
  await this.playwrightFactory.fill(this.txt_Employment_details_in_form_16_detils,strEmploymentDetails);
}
async user_enters_Name_in_form16(strName:string){
  await this.playwrightFactory.fill(this.txt_Name_in_form_16_detils,strName);
}
async user_enter_TDS_in_form16(strTDS:string){
  await this.playwrightFactory.fill(this.txt_TDS_in_form_16_detils,strTDS);
}
async user_PF_in_form16(strPF:string){
  await this.playwrightFactory.fill(this.txt_PF_in_form_16_detils,strPF);
}
async user_click_save_in_form16(){
  await this.playwrightFactory.click(this.btn_Save_in_form_16_details);

}
async user_clicks_verify_btn_otherincome(){
  await this.playwrightFactory.click(this.btn_verify_other_income)

}
async user_clicks_verify_btn_agriculturalincome(){
  await this.playwrightFactory.click(this.btn_verify_agricultural_income)
}
async user_clicks_verify_btn_inForm_16(){
  await this.playwrightFactory.click(this.btn_verify_in_Form_16)
}
async user_clicks_add_data_for_Membership_Details(){
  await this.playwrightFactory.click(this.btn_add_data_for_Membership_Details);
}

async user_enters_Membership_number_in_Membership_Details(strmembershipnumber:string){
  await this.playwrightFactory.fill(this.txt_Membership_number_in_Membership_Details,strmembershipnumber);
}

async user_enters_Name_of_shares_Membership_Details(strname:string){
  await this.playwrightFactory.fill(this.txt_Name_of_shares_in_Membership_Details,strname);
}

async user_enters_shares_from_in_Membership_Details(strdate:string){
  await this.playwrightFactory.click(this.date_Shares_from_in_Membership_Details);
  await this.playwrightFactory.fill(this.date_Shares_from_in_Membership_Details,strdate);
}

async user_enters_Existing_share_amounts_in_Membership_Details(stramount: string){
  await this.playwrightFactory.fill(this.txt_Existing_share_amounts_in_Membership_Details,stramount);
}

async user_enters_total_shares_required_inn_Membership_Details(strtotal:string){
  await this.playwrightFactory.fill(this.txt_total_shares_required_inn_Membership_Details,strtotal);
}
async user_additional_shares_required_in_Membership_Details(stradditional: string){
  await this.playwrightFactory.fill(this.txt_additional_shares_required_in_Membership_Details,stradditional)
}
async user_clicks_save_in_Membership_Details(){
  await this.playwrightFactory.click(this.btn_save_in_Membership_Details);

}
async user_clicks_verify_btn_in_Membership_Details(){
  await this.playwrightFactory.click(this.btn_verify_in_membership_Details)

}
// async user_click_upload_your_file_button(){
//   await this.page.waitForTimeout(3000);
// await this.page.evaluate(() => {
// window.scrollBy(1800,2000); // Scroll down
// });
// //await this.page.pause();
// await this.page.getByRole('button', { name: 'Upload your file' }).click();
// await this.page.getByRole('button', { name: 'Upload your file' }).setInputFiles('IT_Return_RohitSharma_Fake.pdf');
// //await this.upload_your_file_credit_bureau_field.setInputFiles('C:/Credit_Bureau/ABC.pdf');
// }
async user_click_upload_your_file_button(){
  await this.page.waitForTimeout(3000);
await this.page.evaluate(() => {
window.scrollBy(1800,2000); // Scroll down
});
await this.page.getByRole('button', { name: 'Upload your File' }).click();
await this.page.waitForTimeout(3000)
//await this.page.locator('input[type="file"]').nth(0).setInputFiles('IT_Return_RohitSharma_Fake.pdf');
await this.page.locator('input[type="file"]').nth(0).setInputFiles('IT_Return_RohitSharma_Fake.pdf');
 
}

async user_verify_credit_bureau_title(){
  await expect(this.credit_bureau_title).toBeVisible();
}

async user_enters_name_in_credit_bureau_field(strname: string){
await this.playwrightFactory.fill(this.name_credit_bureau_field, strname);
}
async user_enters_date_of_birth(strdob: string){
await this.playwrightFactory.fill(this.dob_credit_bureau_field, strdob);
}
async user_enters_ctc_in_credit_bureau_field(strctc: string){
await this.playwrightFactory.fill(this.ctc_credit_bureau_field, strctc);
}
async user_enters_credit_score_in_credit_bureau(strcredit:string){
await this.credit_score.fill(strcredit)
}
async user_enters_branch_remarks_on_cibil_if_any(strremarkscibil: string){
await this.playwrightFactory.fill(this.branch_remarks_on_cibil, strremarkscibil);
}
async user_enters_personal_score(strpersonalscore: string){
await this.playwrightFactory.fill(this.personal_score, strpersonalscore);
}
async user_select_wilful_defaulter(){
await this.wilful_defaulter.selectOption({label:'Yes'});
}
async user_select_settled_account(){
await this.settled_account.selectOption({label:'Yes'});
}
async user_select_written_account(){
await this.written_account.selectOption({label:'Yes'});
}
async user_enters_overdue_amount_pending(stroverdue: string){
await this.playwrightFactory.fill(this.overdue_amount_pending, stroverdue);
}
async user_select_account_sold(){
await this.accound_sold.selectOption({label:'Yes'});
}
async user_select_suit_field(){
await this.suit_field.selectOption({label:'Yes'});
}
async user_enters_repayment_track(strrepayment: string){
await this.playwrightFactory.fill(this.repayment_track, strrepayment);
}
async user_click_add_a_line_for_credit_bureau(){
await this.playwrightFactory.click(this.add_a_line_credit_bureau_btn);
}
 
async user_enters_bank_loan_account_details(strloanaccount: string){
  await this.bank_loan_account_details.click()
await this.playwrightFactory.fill(this.bank_loan_account_details, strloanaccount);
}
 
async user_enters_loan_type_in_credit_bureau(strloantype: string){
  await this.loan_type_credit_bureau.click()
await this.playwrightFactory.fill(this.loan_type_credit_bureau, strloantype);
}
 
async user_enters_ownership(strownership: string){
  await this.ownership.click()
await this.playwrightFactory.fill(this.ownership, strownership);
}
 
async user_enters_loan_amount(strloanamount: string){
  await this.loan_amount.click()
await this.playwrightFactory.fill(this.loan_amount, strloanamount);
}
 
async user_enters_outstanding_amount(stroutstandingamount: string){
  //await this.outstanding_amount.click()
//await this.playwrightFactory.fill(this.outstanding_amount, stroutstandingamount);
await expect(this.outstanding_amount).not.toBeEmpty()
}
 
async user_enters_emi_interest(stremi: string){
  await this.emi_interest.click()
await this.playwrightFactory.fill(this.emi_interest, stremi);

}
async user_click_verify_button_for_credit_bureau(){
await this.playwrightFactory.click(this.credit_bureau_verify_btn);
}

async user_enter_comment_branch_manager_recommendtion(strcomment:string){
  await this.playwrightFactory.fill(this.txt_name_comment,strcomment);
}

async user_clicks_verified(){
  await this.btn_Verified.click();
}




}
