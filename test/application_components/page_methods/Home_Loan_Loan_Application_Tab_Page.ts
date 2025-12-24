import {expect, LocatorScreenshotOptions, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';
import { Loan_Application_Tab_Page } from './Loan_Application_Tab_Page';


export class Home_Loan_Loan_Application_Tab_Page {
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
  readonly loan_margin: Locator;
  readonly loan_type: Locator;
  readonly type_of_vehical:Locator;
  readonly repayment_type: Locator;
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
  readonly driving_licence_add_data_btn: Locator;
  readonly driving_licence_no: Locator;
  readonly issue_date: Locator;
  readonly expiry_date: Locator;
  readonly driving_licence_save_btn: Locator;
  readonly added_driving_licence_no: Locator;
  readonly added_issue_date: Locator;
  readonly added_expiry_date: Locator;
  readonly driving_licence_verify_btn: Locator;
  readonly vehical_quotation_add_data_btn: Locator;
  readonly vehical_recipt_no: Locator;
  readonly vehical_branch_name: Locator;
  readonly vehical_contact_no: Locator;
  readonly distributer_name: Locator;
  readonly distributer_adress: Locator;
  readonly vehical_name: Locator;
  readonly make_of_vehical: Locator;
  readonly quoatation_date: Locator;
  readonly ex_showroom_price: Locator;
  readonly discount: Locator;
  readonly percentage_consider: Locator;
  readonly RTO: Locator;
  readonly registration_fee: Locator;
  readonly other_accessories: Locator;
  readonly TCS: Locator;
  readonly insurence: Locator;
  readonly subsidy: Locator;
  readonly discount_road: Locator;
  readonly advance_ammount: Locator;
  readonly excecutive_name: Locator;
  readonly vehical_remark: Locator;
  readonly verify_by_name: Locator;
  readonly verify_by_designation: Locator;
  readonly date_of_verification: Locator;
  readonly verify_by_comment: Locator;
  readonly verify_by_signature: Locator;
  readonly vehical_quotation_save_btn: Locator;
  readonly added_vehical_recipet_no: Locator;
  readonly added_vehical_branch_name: Locator;
  readonly added_vehical_contact_no: Locator;
  readonly added_distributer_name: Locator;
  readonly added_distributer_address: Locator;
  readonly added_vehical_name: Locator;
  readonly added_make_of_vehical: Locator;
  readonly added_quotation_date: Locator;
  readonly added_ex_showroom_price: Locator;
  readonly added_discount: Locator;
  readonly added_percentage: Locator;
  readonly total_ex_showroom_price: Locator;
  readonly added_RTO: Locator;
  readonly added_registration_fee: Locator;
  readonly added_other_acccessories: Locator;
  readonly added_insurence: Locator;
  readonly added_subsidy: Locator;
  readonly added_TCS: Locator;
  readonly added_discount_on_road: Locator;
  readonly added_advanced_amount: Locator;
  readonly added_praposed_loan_amount: Locator;
  readonly added_total_quotation_amount: Locator;
  readonly added_excecutive_name: Locator;
  readonly added_vehical_remark: Locator;

  readonly added_verify_by_name1: Locator;
  readonly added_verify_by_designation1: Locator;
  readonly added_verify_by_comment1: Locator;
  readonly added_date_of_verification1: Locator;
  readonly added_verify_by_signature1: Locator;
  readonly vehical_quotation_verify_btn: Locator;
  readonly agriculture_income_add_data_btn: Locator;
  readonly agriculture_income_add_line_btn: Locator;
  readonly agriculture_income_year: Locator;
  readonly agriculture_income_ammount: Locator;
  readonly agriculture_income_save_btn: Locator;
  readonly agriculture_income_verify_btn:Locator;

  readonly added_other_income_details_add_data_btn:Locator;
readonly added_other_income_details_add_line_btn:Locator;
readonly added_other_income_details_year_fields_btn:Locator;
readonly added_other_income_details_year:Locator;
readonly added_other_income_details_amount:Locator;
readonly added_other_income_details_save_btn:Locator;
readonly verify_other_income_details_data:Locator;
readonly other_income_details_verify_btn:Locator;

readonly added_branch_manager_recomendation_remark_comment_field:Locator;
readonly added_name_in_absence_of_branch_manager:Locator;
readonly added_comment_in_absence_of_branch_manager:Locator;
readonly verified_btn:Locator;
readonly reupload_docs_btn:Locator;

  readonly credit_bureau_title: Locator;
  readonly credit_bureau_verify_btn: Locator;
  readonly name_credit_bureau_field: Locator;
  readonly dob_credit_bureau_field: Locator;
  readonly upload_your_file_credit_bureau_field: Locator;


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
 readonly txt_Cibil_Charges_in_Charge_Details: Locator;  
 readonly txt_Processing_Fee_in_Charge_Details : Locator;  
 readonly txt_Valuation_Charges_in_Charge_Details: Locator;      
 readonly txt_Fees_Charges_in_Charge_Details : Locator;  
 readonly txt_Details_of_Contingent_Charges_in_Charge_Details: Locator;  
 readonly txt_Penal_Charges_for_Delayed_Payment_in_Charge_Details  : Locator;
 readonly txt_Other_Penal_Charges_inCharge_Details: Locator;
 readonly txt_Stamp_Charges_in_Charge_details: Locator;    
 readonly txt_Foreclosure_Charges_if_applicable_in_Charge_details: Locator;    
 readonly txt_Charges_for_Switching_Loan_RateType_in_Charge_details: Locator;    
 readonly txt_Recovery_Overdue_Notice_Charges_in_Charge_details: Locator;    
 readonly txt_Cheque_ECS_Return_SIExecution_Failed_Charges_in_Charge_details: Locator;  
 readonly txt_Franking_Charges_in_Charge_details: Locator;
 readonly btn_save_in_Charge_Details: Locator;
 readonly btn_verify_in_Form_16: Locator;
 readonly btn_verify_in_membership_Details:Locator;
 readonly btn_verify_in_Charge_Details: Locator;
 readonly btn_Add_data_in_Charge_Details: Locator

 
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
 




 readonly business_details_add_data_btn:Locator;
 readonly business_details_name_of_the_firm_field:Locator;
 readonly business_details_address_of_firm_field:Locator;
readonly business_details_type_of_ownership_field:Locator;
readonly business_details_nature_of_business_in_details:Locator;
readonly business_details_shop_number_field:Locator;
readonly business_details_udyam_name_field:Locator;
readonly business_details_number_of_year_field:Locator;
readonly business_details_save_btn:Locator;
readonly business_details_add_line_btn:Locator;
readonly business_details_month_btn:Locator;
readonly balance_sheet_year:Locator;
readonly balance_sheet_networth:Locator;
readonly balance_sheet_deduction_field:Locator;
readonly business_details_verify_btn:Locator;
readonly P_L_statement_add_data_btn:Locator;
readonly P_L_statement_add_line_btn:Locator;
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
readonly add_data_btn_of_computation_of_income:Locator;
readonly add_line_btn_of_computation_of_income:Locator;
readonly gross_income_of_computation_of_income:Locator;
readonly less_deduction_of_computation_of_income:Locator;
readonly net_taxable_amount_of_computation_of_income:Locator;
readonly save_btn_of_computation_of_income:Locator;
readonly add_data_btn_ITR_details:Locator;
readonly verify_btn_of_computation_of_income:Locator;
readonly add_line_btn_ITR_details:Locator;
readonly month_btn_ITR_details:Locator;
readonly year_btn_ITR_details:Locator;
readonly total_income_btn_ITR_details:Locator;
readonly total_taxes_interest_fee_btn_ITR_details:Locator;
readonly taxes_paid_btn_ITR_details:Locator;
readonly save_btn_ITR_details:Locator;
readonly verify_btn_ITR_details:Locator;
readonly verify_btn_ID_PROOF_details:Locator;
















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

    //his.Emp_details_Add_data_btn=this.page.locator("// button[@name='salary_details_wizard']")
    //this.Address_of_firm=this. page.getByRole('textbox', { name: 'Address Of The Firm' })
    //this.Designation_in_the_organization=this.page.getByLabel('Designation in the')
    //this.Type_of_organization=this.page.getByLabel('Type of Organisation')
    //this.joining_date= this.page.getByRole('textbox', { name: 'Joining (Date)' })
    // this.select_date=this.page.getByRole('cell', { name: '1', exact: true }).first()
    // this.Remark=this.page.getByRole('textbox', { name: 'Remarks', exact: true })
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
    this.requested_loan_amount= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='customer_loan_amount']");
    this.requested_loan_amount_in_words= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='customer_loan_amount_in_words']");
    this.loan_period= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='customer_period_in_months']");
    this.loan_perposed= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='purpose_of_loan']");
    this.loan_margin= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='customer_margin']");
    this.loan_type= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='type_of_loan']");
    this.type_of_vehical= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='type_of_vehicle']");
    this.repayment_type= this.page.locator("//*[contains(text(),'Requested Loan Amount')]/ancestor::div[@class='o_group outer-box']//*[@name='repayment_type_loan_requirement']");
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
    this.driving_licence_add_data_btn= this.page.locator("//button[@name='driving_license_wizard']");
    this.driving_licence_no= this.page.locator("//input[@name='wizard_driving_license_num']");
    this.issue_date= this.page.locator("//input[@name='wizard_issue_date']");
    this.expiry_date= this.page.locator("//input[@name='wizard_expiry_date']");
    this.driving_licence_save_btn= this.page.locator("//button[@name='save_driving_licencse']");
    this.added_driving_licence_no= this.page.locator("//span[@name='customer_driving_license_num']");
    this.added_issue_date= this.page.locator("//span[@name='customer_issue_date']");
    this.added_expiry_date= this.page.locator("//span[@name='customer_expiry_date']");
    this.driving_licence_verify_btn= this.page.locator("//div[@name='verify_driving_license_details']");
    this.vehical_quotation_add_data_btn= this.page.locator("//button[@name='vehicle_quotation_wizard']");
    this.vehical_recipt_no= this.page.locator("//input[@name='wizard_vehicle_receipt_no']");
    this.vehical_branch_name= this.page.locator("//input[@name='wizard_branch_name']");
    this.vehical_contact_no= this.page.locator("//input[@name='wizard_contact_num']");
    this.distributer_name= this.page.locator("//input[@name='wizard_dealer_name_address']");
    this.distributer_adress= this.page.locator("//input[@name='wizard_distributors_address']");
    this.vehical_name= this.page.locator("//input[@name='wizard_vehicle_name']");
    this.make_of_vehical= this.page.locator("//input[@name='wizard_vehicle_model']");
    this.quoatation_date= this.page.locator("//input[@name='wizard_quotation_date']");
    this.ex_showroom_price= this.page.locator("//input[@name='wizard_customer_exshowroom_price']");
    this.discount= this.page.locator("//input[@name='wizard_discount_on_exshowroom']");
    this.percentage_consider= this.page.locator("//input[@name='wizard_percentage_deduction']");
    this.RTO= this.page.locator("//input[@name='wizard_customer_rto']");
    this.registration_fee= this.page.locator("//input[@name='wizard_gst_registration_fee']");
    this.other_accessories= this.page.locator("//input[@name='wizard_other_accessories']");
    this.TCS= this.page.locator("//input[@name='wizard_tcs']");
    this.insurence= this.page.locator("//input[@name='wizard_customer_insurance']");
    this.subsidy= this.page.locator("//input[@name='wizard_customer_subsidy']");
    this.discount_road= this.page.locator("//input[@name='wizard_customer_discount']");
    this.advance_ammount= this.page.locator("//input[@name='wizard_advance_amount']");
    this.excecutive_name= this.page.locator("//input[@name='wizard_quotation_signed_by']");
    this.vehical_remark= this.page.locator("//input[@name='wizard_remark']");
    this.verify_by_name= this.page.locator("//input[@name='wizard_name_q']");
    this.verify_by_designation= this.page.locator("//input[@name='wizard_designation']");
    this.date_of_verification= this.page.locator("//input[@name='wizard_date_of_verification']");
    this.verify_by_comment= this.page.locator("//input[@name='wizard_comment_section']");
    this.verify_by_signature= this.page.locator("//input[@name='wizard_signature']");
    this.vehical_quotation_save_btn= this.page.locator("//button[@name='save_vehicle_quotation']");
    this.added_vehical_recipet_no= this.page.locator("//span[@name='vehicle_receipt_no']");
    this.added_vehical_branch_name= this.page.locator("//span[@name='customer_branch_name']")
    this.added_vehical_contact_no= this.page.locator("//span[@name='customer_contact_num']")
    this.added_distributer_name= this.page.locator("//span[@name='customer_dealer_name_address']")
    this.added_distributer_address= this.page.locator("//span[@name='customer_distributors_address']")
    this.added_vehical_name= this.page.locator("//span[@name='customer_vehicle_name']")
    this.added_make_of_vehical= this.page.locator("//span[@name='customer_vehicle_model']")
    this.added_quotation_date= this.page.locator("//span[@name='customer_quotation_date']")
    this.added_ex_showroom_price= this.page.locator("//span[@name='customer_exshowroom_price']")
    this.added_discount= this.page.locator("//span[@name='discount_on_exshowroom']")
    this.added_percentage= this.page.locator("//span[@name='percentage_deduction']")
    this.total_ex_showroom_price= this.page.locator("//span[@name='total_exshowroom_price']")
    this.added_RTO= this.page.locator("//span[@name='customer_rto']")
    this.added_registration_fee= this.page.locator("//span[@name='customer_gst_registration_fee']")
    this.added_other_acccessories= this.page.locator("//span[@name='other_accessories']")
    this.added_insurence= this.page.locator("//span[@name='customer_insurance']")
    this.added_subsidy= this.page.locator("//span[@name='customer_subsidy']")
    this.added_TCS= this.page.locator("//span[@name='customer_tcs']")
    this.added_discount_on_road= this.page.locator("//span[@name='customer_discount']")
    this.added_advanced_amount= this.page.locator("//span[@name='customer_advance_amount']")
    this.added_praposed_loan_amount= this.page.locator("//span[@name='customer_price']")
    this.added_total_quotation_amount= this.page.locator("(//span[@name='customer_quotation_amt'])[1]")
    this.added_excecutive_name= this.page.locator("//span[@name='customer_quotation_signed_by']")
    this.added_vehical_remark= this.page.locator("//span[@name='customer_remark']")
    this.added_verify_by_name1= this.page.locator("//span[@name='customer_name_q']")
    this.added_verify_by_designation1= this.page.locator("//span[@name='customer_designation']")
    this.added_verify_by_comment1= this.page.locator("//span[@name='comment_section']")
    this.added_date_of_verification1= this.page.locator("//span[@name='date_of_verification']")
    this.added_verify_by_signature1= this.page.locator("//span[@name='customer_signature']")
    this.vehical_quotation_verify_btn= this.page.locator("//*[text()='Vehicle Quotation']/ancestor::h1//*[text()='Verify']");
    this.agriculture_income_add_data_btn= this.page.locator("//button[@name='agricultural_income_wizard']");
    this.agriculture_income_add_line_btn= this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='agricultural_income_ids']//*[contains(text(),'Add a line')]");
    this.agriculture_income_year= this.page.locator("//select[@name='wizard_year']");
    this.agriculture_income_ammount= this.page.locator("//input[@name='wizard_amount']");
    this.agriculture_income_save_btn= this.page.locator("//button[@name='save_agricultural_income_wizard']");
    this.agriculture_income_verify_btn= this.page.locator("//*[text()='Agricultural Income Details']/ancestor::h1//*[contains(text(),'Verify')]")

    this.added_other_income_details_add_data_btn= this.page.locator("//button[@name='other_income_wizard']")
    this.added_other_income_details_add_line_btn= this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='other_income_ids']//*[contains(text(),'Add a line')]") 
    this.added_other_income_details_year_fields_btn= this.page.locator("//select[@name='wizard_year']")
    this.added_other_income_details_year= this.page.locator("//select[@name='wizard_year']/option[@value='2022']")
    this.added_other_income_details_amount= this.page.locator("//input[@name='wizard_amount']")
    this.added_other_income_details_save_btn= this.page.locator("//button[@name='save_other_income_wizard']")
    this.verify_other_income_details_data= this.page.locator("//div[@name='other_income_ids']")
    this.other_income_details_verify_btn= this.page.locator("//*[text()='Other Income Details']/ancestor::h1//*[contains(text(),'Verify')]")
    this.added_branch_manager_recomendation_remark_comment_field= this.page.locator("//textarea[@name='branch_manager_recommendation']")
    this.added_name_in_absence_of_branch_manager= this.page.locator("//input[@name='loan_officer_name']")
    this.added_comment_in_absence_of_branch_manager= this.page.locator("//textarea[@name='loan_officer_comment']")
    this.verified_btn= this.page.locator("//*[contains(text(),'VERIFIED')]")
    this.reupload_docs_btn= this.page.locator("//*[contains(text(),'RE-UPLOAD DOCS')]")


    
                        

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
    this.btn_Add_data_in_Charge_Details =this.page.locator('//button[@name="charges_details_wizard"]//span[contains(text(),"Add Data")]')
    this.txt_Cibil_Charges_in_Charge_Details = this.page.locator('//input[@name="wizard_cibil_charges"]')
this.txt_Processing_Fee_in_Charge_Details = this.page.locator('//input[@name="wizard_processing_fees"]')
this.txt_Valuation_Charges_in_Charge_Details  = this.page.locator('//input[@name="wizard_valuation_charges"]')  
this.txt_Fees_Charges_in_Charge_Details   = this.page.locator('//input[@name="wizard_fees_charges"]')
this.txt_Details_of_Contingent_Charges_in_Charge_Details  = this.page.locator('//input[@name="wizard_contingent_charges"]')
this.txt_Penal_Charges_for_Delayed_Payment_in_Charge_Details  = this.page.locator('//input[@name="wizard_penal_charges_percent"]')  
this.txt_Other_Penal_Charges_inCharge_Details=  this.page.locator('//input[@name="wizard_other_penal_charges"]')
this.txt_Stamp_Charges_in_Charge_details  = this.page.locator('//input[@name="wizard_stamp_charges"]')
this.txt_Foreclosure_Charges_if_applicable_in_Charge_details  = this.page.locator('//input[@name="wizard_foreclosure_charges"]')
this.txt_Charges_for_Switching_Loan_RateType_in_Charge_details  = this.page.locator('//input[@name="wizard_switching_charges"]')
this.txt_Recovery_Overdue_Notice_Charges_in_Charge_details  = this.page.locator('//input[@name="wizard_recovery_charges"]')
this.txt_Cheque_ECS_Return_SIExecution_Failed_Charges_in_Charge_details=  this.page.locator('//input[@name="wizard_return_charges"]')
this.txt_Franking_Charges_in_Charge_details=  this.page.locator('//input[@name="wizard_franking_charges"]')
this.btn_save_in_Charge_Details = this.page.locator("//span[normalize-space()='Save']")
this.btn_verify_in_Charge_Details = this.page.locator('//div[@name="verify_charges_details"]')

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


    this.business_details_add_data_btn=this.page.locator('//button[@name="business_details_wizard"]')
    this.business_details_name_of_the_firm_field=this.page.locator('//input[@name="wizard_business_name"]')
    this.business_details_address_of_firm_field=this.page.locator('//input[@name="wizard_business_address"]')
    this.business_details_type_of_ownership_field=this.page.locator('//select[@name="wizard_ownership"]')
    this.business_details_nature_of_business_in_details=this.page.locator('//input[@name="wizard_nature_of_business"]') 
    this.business_details_shop_number_field=this.page.locator('//input[@name="wizard_customer_shop_act"]')
    this.business_details_udyam_name_field=this.page.locator('//input[@name="wizard_customer_udhayam_name"]')
    this.business_details_number_of_year_field=this.page.locator('//input[@name="wizard_customer_no_of_year_business"]')
    this.business_details_save_btn=this.page.locator('//button[@name="save_balance_sheet"]')
    this.business_details_add_line_btn=this.page.locator("(//*[contains(text(),'Add a line')]/following::div[@name='business_details_ids']//*[contains(text(),'Add a line')])[2]")
    this.business_details_month_btn=this.page.locator('//select[@name="wizard_month"]')
    this.balance_sheet_year=this.page.locator('//select[@name="wizard_year"]')
    this.balance_sheet_networth=this.page.locator('//input[@name="wizard_capital_networth"]')
    this.balance_sheet_deduction_field=this.page.locator('//input[@name="wizard_deductions"]')
    this.business_details_verify_btn=this.page.locator("//*[text()='Business Details']/ancestor::h1//*[text()='Verify']")
    this.P_L_statement_add_data_btn=this.page.locator('//button[@name="income_details_wizard"]')
    this.P_L_statement_add_line_btn=this.page.locator("(//*[contains(text(),'Add a line')]/following::div[@name='income_details_ids']//*[contains(text(),'Add a line')])[2]")
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
    this.P_L_statement_save_btn=this.page.locator('//button[@name="save_income_details_wizard"]')
    this.add_data_btn_of_computation_of_income=this.page.locator('//button[@name="computation_income_details_wizard"]')
    this.P_L_statement_verify_btn=this.page.locator('//div[@name="verify_p_and_l_statement_details"]')
    this.add_line_btn_of_computation_of_income=this.page.locator("(//*[contains(text(),'Add a line')]/following::div[@name='computation_income_ids']//*[contains(text(),'Add a line')])[2]")
    this.gross_income_of_computation_of_income=this.page.locator('//input[@name="wizard_gross_taxable_income"]')
    this.less_deduction_of_computation_of_income=this.page.locator('//input[@name="wizard_less_deductions"]')
    this.net_taxable_amount_of_computation_of_income=this.page.locator('//input[@name="wizard_net_taxable_income"]')
    this.save_btn_of_computation_of_income=this.page.locator('//button[@name="save_computation_income_wizard"]')
    this.verify_btn_of_computation_of_income=this.page.locator('//div[@name="verify_computation_income_details"]')
    this.add_data_btn_ITR_details=this.page.locator('//button[@name="itr_business_details_wizard"]')
    this.add_line_btn_ITR_details=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='itr_business_details_table_ids']//*[contains(text(),'Add a line')]")
    this.month_btn_ITR_details=this.page.locator('//select[@name="wizard_month"]')
    this.year_btn_ITR_details=this.page.locator('//select[@name="wizard_year"]')
    this.total_income_btn_ITR_details=this.page.locator('//input[@name="wizard_total_income"]')
    this.total_taxes_interest_fee_btn_ITR_details=this.page.locator('//input[@name="wizard_total_taxes_interest_fee_payable"]')
    this.taxes_paid_btn_ITR_details=this.page.locator('//input[@name="wizard_taxes_paid"]')
    this.save_btn_ITR_details=this.page.locator('//button[@name="save_itr_business_details"]')
    this.verify_btn_ITR_details=this.page.locator('//div[@name="verify_itr_details"]')

    this.verify_btn_ID_PROOF_details=this.page.locator("//*[text()='ID Proof Details']/ancestor::h1//*[text()='Verify']")
     

                                                                




 }

async user_verify_id_proof_details_title(){
    await expect(this.txt_id_proof_details_title).toBeVisible();
}


async user_verify_customer_name(){
    await expect(this.txt_customer_name).toBeVisible();
}

async user_verify_and_clicks_on_pan_number_eye_icon(){
  await expect(this.txt_customer_name).toBeVisible();
   await this.playwrightFactory.click(this.txt_pan_number_eye_icon);
}

async user_verify_and_clicks_on_the_checkbox(){
  await expect(this.verify_btn_ID_PROOF_details).toBeVisible();
  await this.playwrightFactory.click(this.verify_btn_ID_PROOF_details)
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
async user_verify_staff_name(){
  await expect(this.staff_name).not.toBeEmpty();
}
async user_verify_staff_id(){
  await expect(this.staff_id).not.toBeEmpty();

}
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
async user_verify_loan_margin(){
  await expect(this.loan_margin).not.toBeEmpty();
}
async user_verify_type_of_loan(){
  await expect(this.loan_type).not.toBeEmpty();
}
async user_verify_type_of_vehical(){
  await expect(this.type_of_vehical).not.toBeEmpty();
}
async user_verify_repayment_type(){
  await expect(this.repayment_type).not.toBeEmpty();
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
async user_select_month(strMonth: string){
  await this.salary_details_month.selectOption({label:strMonth})
}
async user_select_year(strYear: string){
  await this.salary_details_year.selectOption({label:strYear})
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
async user_click_cancel_btn(){
  await this.playwrightFactory.click(this.salary_slip_cancel_btn);
}
async user_verify_added_company_name(strCompanyname: string){
  await expect(this.company_name).toContainText(strCompanyname)
}
async user_verify_added_company_adress(strAdress: string){
  await expect(this.company_adress).toContainText(strAdress);
}
async user_verify_added_designation(strDesignation: string){
  await expect(this.Company_Designation).toContainText(strDesignation);
}
async user_verify_added_organization_type(strType: string){
  await expect(this.Organization_type).toContainText(strType);
}
async user_verify_added_joining_date(strDate: string){
  await expect(this.Company_Joining_date).toContainText(strDate);
}
async user_verify_added_remark(strRemark: string){
  await expect(this.Comapany_remark).toContainText(strRemark);
}
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
async user_select_account_type(strType: string){
  await this.type_of_account.selectOption({label:strType})
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
  await this.page.waitForTimeout(1000)
  await this.playwrightFactory.click(this.company_id_verify_btn);
}
async user_click_add_data_btn_for_driving_licence(){
  await this.playwrightFactory.click(this.driving_licence_add_data_btn);
}
async user_enter_driving_licence_number(strDriving: string){
  await this.playwrightFactory.fill(this.driving_licence_no, strDriving);
}
async user_enter_issue_date(){
  await this.playwrightFactory.click(this.issue_date);
  await this.page.getByRole('cell', { name: '3', exact: true }).first().click();
}
async user_enter_expiry_date(strExpiry: string){
  await this.playwrightFactory.click(this.expiry_date);
  await this.playwrightFactory.fill(this.expiry_date, strExpiry)
}
async user_click_save_btn_for_driving_licence(){
  await this.playwrightFactory.click(this.driving_licence_save_btn);
}
async user_verify_added_driving_licence(strDriving: string){
  await expect(this.added_driving_licence_no).toContainText(strDriving);
}
async user_verify_added_issue_date(strDate: string){
  await expect(this.added_issue_date).toContainText(strDate);
}
async user_verify_added_expiry_date(strExpiry: string){
  await expect(this.added_expiry_date).toContainText(strExpiry);
}
async user_click_verify_btn(){
  await this.page.waitForTimeout(1000)
  await this.playwrightFactory.click(this.driving_licence_verify_btn);
}
async user_click_add_data_btn_for_vehical_quotation(){
  await this.playwrightFactory.click(this.vehical_quotation_add_data_btn);
}
async user_enter_vehical_recipte_no(strRecipte:  string){
  await this.playwrightFactory.fill(this.vehical_recipt_no, strRecipte);
}
async user_enter_vehical_branch_name(strBranch: string){
  await this.playwrightFactory.fill(this.vehical_branch_name, strBranch);
}
async user_enter_vehical_contact_no(strNumber: string){
  await this.playwrightFactory.fill(this.vehical_contact_no, strNumber);
}
async user_enter_distributer_name(strDistributer: string){
  await this.playwrightFactory.fill(this.distributer_name, strDistributer);
}
async user_enter_distributer_adress(strAdress: string){
  await this.playwrightFactory.fill(this.distributer_adress, strAdress);
}
async user_enter_vehical_name(strName: string){
  await this.playwrightFactory.fill(this.vehical_name, strName);
}
async user_enter_make_of_vehical(strVehical: string){
  await this.playwrightFactory.fill(this.make_of_vehical, strVehical);
}
async user_enter_quotation_date(strDate: string){
  await this.playwrightFactory.fill(this.quoatation_date, strDate);
}
async user_enter_ex_showroom_price(strPrice: string){
  await this.ex_showroom_price.clear();
  await this.playwrightFactory.fill(this.ex_showroom_price, strPrice);
}
async user_enter_discount(strDiscount: string){
  await this.discount.clear();
  await this.playwrightFactory.fill(this.discount, strDiscount);
}
async user_enter_percentage_consider(strPercentage: string){
  await this.playwrightFactory.fill(this.percentage_consider, strPercentage);
}
async user_enter_RTO(strRto: string){
  await this.RTO.clear();
  await this.playwrightFactory.fill(this.RTO, strRto);
}
async user_enter_registration_fee(strFee: string){
  await this.registration_fee.clear();
  await this.playwrightFactory.fill(this.registration_fee, strFee);
}
async user_enter_other_accessories(strOther: string){
  await this.other_accessories.clear();
  await this.playwrightFactory.fill(this.other_accessories, strOther);
}
async user_enter_tcs(strTcs: string){
  await this.playwrightFactory.fill(this.TCS, strTcs);
}
async user_enter_insurence(strInsurence: string){
  await this.insurence.clear();
  await this.playwrightFactory.fill(this.insurence, strInsurence);
}
async user_enter_subsidy(strSubsidy: string){
  await this.subsidy.clear();
  await this.playwrightFactory.fill(this.subsidy, strSubsidy);
}
async user_enter_discount_on_road(strDiscount: string){
  await this.discount_road.clear();
  await this.playwrightFactory.fill(this.discount_road, strDiscount);
}
async user_enter_advanced_amount(strAmount: string){
  await this.advance_ammount.clear();
  await this.playwrightFactory.fill(this.advance_ammount, strAmount);
}
async user_enter_excecutive_name(strName: string){
  await this.playwrightFactory.fill(this.excecutive_name, strName);
}
async user_enter_vehical_remark(strRemark: string){
  await this.playwrightFactory.fill(this.vehical_remark, strRemark);
}
async user_enter_verify_by_name(strName: string){
  await this.playwrightFactory.fill(this.verify_by_name, strName);
}
async user_enter_verify_by_designation(strDesignation: string){
  await this.playwrightFactory.fill(this.verify_by_designation, strDesignation);
}
async user_enter_verification_date(strDate: string){
  await this.playwrightFactory.fill(this.date_of_verification, strDate);
}
async user_enter_comment(strComment: string){
  await this.playwrightFactory.fill(this.verify_by_comment, strComment);
}
async user_enter_signature(strSignature: string){
  await this.playwrightFactory.fill(this.verify_by_signature, strSignature);
}
async user_click_vehical_quotation_save_btn(){
  await this.playwrightFactory.click(this.vehical_quotation_save_btn);
}

async user_verify_added_vehicle_receipt_number(){
  await expect(this.added_vehical_recipet_no).toBeVisible();
}
  
async user_verify_added_vehicle_branch_name(){
  await expect(this.added_vehical_branch_name).toBeVisible();
}

async user_verify_added_vehicle_contact_number(){
  await expect(this.added_vehical_contact_no).toBeVisible();
}

async user_verify_added_distributor_name(){
  await expect(this.added_distributer_name).toBeVisible();
}

async user_verify_added_distributor_address(){
  await expect(this.added_distributer_address).toBeVisible();
}

async user_verify_added_vehicle_name(){
  await expect(this.added_vehical_name).toBeVisible();
}

async user_verify_added_make_of_vehicle(){
  await expect(this.added_make_of_vehical).toBeVisible();
}

async user_verify_added_quotation_date(){
  await expect(this.added_quotation_date).toBeVisible();
}

async user_verify_added_ex_showroom_price(){
  await expect(this.added_ex_showroom_price).toBeVisible();
}

async user_verify_added_discount(){
  await expect(this.added_discount).toBeVisible();
}

async user_verify_added_percentage(){
  await expect(this.added_percentage).toBeVisible();
}

async user_verify_added_total_ex_showroom_price(){
  await expect(this.total_ex_showroom_price).toBeVisible();
}

async user_verify_added_RTO(){
  await expect(this.added_RTO).toBeVisible();
}

async user_verify_added_registration_fee(){
  await expect(this.added_registration_fee).toBeVisible();
}

async user_verify_added_other_accessories(){
  await expect(this.added_other_acccessories).toBeVisible();
}

async user_verify_added_insurance(){
  await expect(this.added_insurence).toBeVisible();
}

async user_verify_added_subsidy(){
  await expect(this.added_subsidy).toBeVisible();
}

async user_verify_added_tcs(){
  await expect(this.added_TCS).toBeVisible();
}

async user_verify_added_discount_on_road(){
  await expect(this.added_discount_on_road).toBeVisible();
}

async user_verify_added_advance_amount(){
  await expect(this.added_advanced_amount).toBeVisible();
}

async user_verify_added_proposed_loan_amount(){
  await expect(this.added_praposed_loan_amount).toBeVisible();
}

async user_verify_added_total_quotation_amount(){
  await expect(this.added_total_quotation_amount).toBeVisible();
}

async user_verify_added_executive_name(){
  await expect(this.added_excecutive_name).toBeVisible();
}

async user_verify_added_vehicle_remark(){
  await expect(this.added_vehical_remark).toBeVisible();
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
async user__additional_shares_required_in_Membership_Details(stradditional: string){
  await this.playwrightFactory.fill(this.txt_additional_shares_required_in_Membership_Details,stradditional)
}
async user_clicks_save_in_Membership_Details(){
  await this.playwrightFactory.click(this.btn_save_in_Membership_Details);
 
}
async user_clicks_verify_btn_in_Membership_Details(){
  await this.playwrightFactory.click(this.btn_verify_in_membership_Details)
 
}
async user_click_Add_data_in_Charge_details(){
  await this.playwrightFactory.click( this.btn_Add_data_in_Charge_Details)
}
 
 
 
async user_enters_Cibil_Charges_in_Charge_Details(strcibilcharges:string){
  await this.playwrightFactory.fill(this.txt_Cibil_Charges_in_Charge_Details,strcibilcharges)
}
async user_enters_Processing_Fee_in_Charge_Details(strprocessingfee:string){
await this.playwrightFactory.fill(this.txt_Processing_Fee_in_Charge_Details,strprocessingfee)
}
 
 
async user_enters_txt_Valuation_Charges_in_Charge_Details(strvaluationcharge:string){
  await this.playwrightFactory.fill(this.txt_Valuation_Charges_in_Charge_Details,strvaluationcharge)
}
 
async user_enters_txt_Fees_Charges_in_Charge_Details(strfeecharges:string){
 await this.playwrightFactory.fill(this.txt_Fees_Charges_in_Charge_Details,strfeecharges)
}
 
async user_enters_Details_of_Contingent_Charges_in_Charge_Details(strcontingent:string){
  await this.playwrightFactory.fill(this.txt_Details_of_Contingent_Charges_in_Charge_Details,strcontingent);
}
 
async user_enters_Penal_Charges_for_Delayed_Payment_in_Charge_Details(strpenal:string){
  await this.playwrightFactory.fill(this.txt_Penal_Charges_for_Delayed_Payment_in_Charge_Details,strpenal);
}
 
async user_enters_Other_Penal_Charges_inCharge_Details(strotherpenal:string){
  await this.playwrightFactory.fill(this.txt_Other_Penal_Charges_inCharge_Details,strotherpenal);
}
 
 
async user_enters_Stamp_Charges_in_Charge_details(strstampcharges:string){
await this.playwrightFactory.fill(this.txt_Stamp_Charges_in_Charge_details,strstampcharges);
}  
async user_enters_Foreclosure_Charges_if_applicable_in_Charge_details (strforeclosure:string){
  await this.playwrightFactory.fill(this.txt_Foreclosure_Charges_if_applicable_in_Charge_details,strforeclosure);
}
async user_enters_Charges_for_Switching_Loan_RateType_in_Charge_details(strswitchingloan: string){
  await this.playwrightFactory.fill(this.txt_Charges_for_Switching_Loan_RateType_in_Charge_details,strswitchingloan);
}
async user_enters_Recovery_Overdue_Notice_Charges_in_Charge_details(strrecovery:string){
  await this.playwrightFactory.fill(this.txt_Recovery_Overdue_Notice_Charges_in_Charge_details,strrecovery);
}
async user_enters_Cheque_ECS_Return_SIExecution_Failed_Charges_in_Charge_details(strECS:string){
  await this.playwrightFactory.fill(this.txt_Cheque_ECS_Return_SIExecution_Failed_Charges_in_Charge_details,strECS);
}
async user_enters_Franking_Charges_in_Charge_details(strFranking:string){
  await this.playwrightFactory.fill(this.txt_Franking_Charges_in_Charge_details,strFranking);
}
async user_clicks_save_in_Charge_details(){
  await this.playwrightFactory.click(this.btn_save_in_Charge_Details)
 
}
 
async user_clicks_verify_btn_in_Charge_details(){
  await this.page.waitForTimeout(500)
  await this.playwrightFactory.click(this.btn_verify_in_Charge_Details)
 
}




async user_verify_name_in_verify_by_coloumn(){
  await expect(this.added_verify_by_name1).toBeVisible();
}
async user_verify_designation_in_verify_by_coloumn(){
  await expect(this.added_verify_by_designation1).toBeVisible();
}
async user_verify_comment_in_verify_by_coloumn(){
  await expect(this.added_verify_by_comment1).toBeVisible();
}
async user_verify_date_of_verification_in_verify_by_coloumn(){
  await expect(this.added_date_of_verification1).toBeVisible();
 
}
async user_verify_signature_in_verify_by_coloumn(){
  await expect(this.added_verify_by_signature1).toBeVisible();
  await this.page.waitForTimeout(1000);
 
}
async user_click_vehical_quotation_verify_btn(){
  await this.playwrightFactory.click(this.vehical_quotation_verify_btn);
}
 
 
async user_click_agriculture_income_add_data_btn(){
  await this.playwrightFactory.click(this.agriculture_income_add_data_btn);
}
async user_click_agriculture_income_add_line_btn(){
  await this.playwrightFactory.click(this.agriculture_income_add_line_btn);
}
async user_select_agriculture_income_year(){
  await this.agriculture_income_year.selectOption({label:'2022'});
}
 
 
async user_enter_agriculture_income_ammount(strammount: string){
  await this.playwrightFactory.fill(this.agriculture_income_ammount, strammount);
}
async user_click_agriculture_income_save_btn(){
  await this.playwrightFactory.click(this.agriculture_income_save_btn);
}
async user_verify_agriculture_income_add_data_btn(){
  await expect(this.agriculture_income_add_data_btn).toBeVisible();
 
}
async user_click_agriculture_income_verify_btn(){
  await this.playwrightFactory.click(this.agriculture_income_verify_btn)

}
 
async user_verify_agriculture_income_add_line_btn(){
  await expect(this.agriculture_income_add_line_btn).toBeVisible();
 
}
async user_verify_agriculture_income_year(){
  await expect(this.agriculture_income_year).toBeVisible();
}
 
 
async user_verify_agriculture_income_ammount(strammount: string){
  await expect(this.agriculture_income_ammount).toBeVisible();
}
async user_verify_agriculture_income_save_btn(){
  await expect(this.agriculture_income_save_btn).toBeVisible()
}
async user_click_other_income_details_add_data_btn(){
  await this.playwrightFactory.click(this.added_other_income_details_add_data_btn);
}
 
async user_click_income_details_add_line_btn(){
  await this.playwrightFactory.click(this.added_other_income_details_add_line_btn);
}
async user_click_income_details_year_field_btn(){
  await this.added_other_income_details_year_fields_btn.selectOption({label:'2022'})
}
 
 
async user_enter_amount_in_other_income_details(stramount: string){
  await this.playwrightFactory.fill(this.added_other_income_details_amount, stramount);
}
 
async user_clicks_income_details_save_btn(){
  await this.playwrightFactory.click(this.added_other_income_details_save_btn);
}
async user_verify_other_income_details_data(){
  await expect(this.verify_other_income_details_data).toBeVisible();
}
async user_clicks_income_details_verify_btn(){
  await this.playwrightFactory.click(this.other_income_details_verify_btn);
}
async user_enter_comment_in_Branch_Manager_Recommendation_and_Remark(strComment: string){
  await this.playwrightFactory.fill(this.added_branch_manager_recomendation_remark_comment_field, strComment);
}
 
async user_enter_name_in_absence_of_branch_manager_field(strComment: string){
  await this.playwrightFactory.fill(this.added_name_in_absence_of_branch_manager, strComment);
}
 
async user_enter_comment_in_absence_of_branch_manager_field(strComment: string){
  await this.playwrightFactory.fill(this.added_comment_in_absence_of_branch_manager, strComment);
}
async user_click_verified_btn(){
  await this.playwrightFactory.click(this.verified_btn);
}
 
async user_click_reupload_docs_btn(){
  await this.playwrightFactory.click(this.reupload_docs_btn);
}



async user_verify_credit_bureau_title(){
  await expect(this.credit_bureau_title).toBeVisible();
}

async user_click_credit_bureau_verify_button(){
await this.playwrightFactory.click(this.credit_bureau_verify_btn);
}

async user_enters_name_in_credit_bureau_field(strname: string){
await this.playwrightFactory.fill(this.name_credit_bureau_field, strname);
}

async user_select_settled_account(){
await this.settled_account.selectOption({label:'Yes'});
}

async user_enters_date_of_birth(strdob: string){
await this.playwrightFactory.fill(this.dob_credit_bureau_field, strdob);
}

async user_select_written_account(){
await this.written_account.selectOption({label:'Yes'});
}

async user_enters_ctc_in_credit_bureau_field(strctc: string){
await this.playwrightFactory.fill(this.ctc_credit_bureau_field, strctc);
}

async user_enters_overdue_amount_pending(stroverdue: string){
await this.playwrightFactory.fill(this.overdue_amount_pending, stroverdue);
}

async user_enters_credit_score(strcreditscore: string){
await this.playwrightFactory.fill(this.credit_score, strcreditscore);
}

async user_select_account_sold(){
await this.accound_sold.selectOption({label:'Yes'});
}

async user_enters_branch_remarks_on_cibil_if_any(strremarkscibil: string){
await this.playwrightFactory.fill(this.branch_remarks_on_cibil, strremarkscibil);
}

async user_select_suit_field(){
await this.suit_field.selectOption({label:'Yes'});
}

async user_enters_personal_score(strpersonalscore: string){
await this.playwrightFactory.fill(this.personal_score, strpersonalscore);
}

async user_enters_repayment_track(strrepayment: string){
await this.playwrightFactory.fill(this.repayment_track, strrepayment);
}

async user_select_wilful_defaulter(){
await this.wilful_defaulter.selectOption({label:'Yes'});
}

async user_click_verify_button_for_credit_bureau(){
await this.playwrightFactory.click(this.credit_bureau_verify_btn);
}

async user_click_add_a_line_for_credit_bureau(){
await this.playwrightFactory.click(this.add_a_line_credit_bureau_btn);
}

async user_enters_bank_loan_account_details(strloanaccount: string){
await this.playwrightFactory.fill(this.bank_loan_account_details, strloanaccount);
}

async user_enters_loan_type_in_credit_bureau(strloantype: string){
await this.playwrightFactory.fill(this.loan_type_credit_bureau, strloantype);
}

async user_enters_ownership(strownership: string){
await this.playwrightFactory.fill(this.ownership, strownership);
}

async user_enters_loan_amount(strloanamount: string){
await this.playwrightFactory.fill(this.loan_amount, strloanamount);
}

async user_enters_outstanding_amount(stroutstandingamount: string){
await this.playwrightFactory.fill(this.outstanding_amount, stroutstandingamount);
}

async user_enters_emi_interest(stremi: string){
await this.playwrightFactory.fill(this.emi_interest, stremi);
}


async user_click_common_save_btn(){
  await this.playwrightFactory.click(this.save_btn);
  }











async user_click_upload_your_file_button(){
  await this.page.waitForTimeout(3000);
await this.page.evaluate(() => {
window.scrollBy(1800,2000); // Scroll down
});
await this.page.getByRole('button', { name: 'Upload your File' }).click();
await this.page.waitForTimeout(10000)

await this.page.locator('input[type="file"]').setInputFiles('ABC.pdf');

//await this.page.getByRole('button', { name: 'Upload your file' }).click();
//await this.page.getByRole('button', { name: 'Upload your file' }).setInputFiles('ABC.pdf');
//await this.upload_your_file_credit_bureau_field.setInputFiles('C:/Credit_Bureau/ABC.pdf');
}



async user_click_business_details_add_data_btn(){
  await this.playwrightFactory.click(this.business_details_add_data_btn);
}
async user_enters_business_details_name_of_the_firm_field(strname: string){
  await this.playwrightFactory.fill(this.business_details_name_of_the_firm_field, strname);
}

async user_enters_business_details_address_of_the_firm_field(strname: string){
  await this.playwrightFactory.fill(this.business_details_address_of_firm_field, strname);
}

async user_select_business_details_type_of_ownership_field(){
  await this.business_details_type_of_ownership_field.selectOption({label:'Proprietary'});
  }
  async user_enters_business_details_nature_of_business_details_field(strname: string){
    await this.playwrightFactory.fill(this.business_details_nature_of_business_in_details, strname);
  }
  async user_enters_business_details_shop_number_field(strname: string){
    await this.playwrightFactory.fill(this.business_details_shop_number_field, strname);
  }
  async user_enters_business_details_udyam_name_field(strname: string){
    await this.playwrightFactory.fill(this.business_details_udyam_name_field, strname);
  }

  async user_enters_business_details_number_of_year_field(strname: string){
    await this.playwrightFactory.fill(this.business_details_number_of_year_field, strname);
  }

  async user_click_business_details_save_btn(){
    await this.playwrightFactory.click(this.business_details_save_btn);
  }
  async user_click_business_details_add_line_btn(){
    await this.playwrightFactory.click(this.business_details_add_line_btn);
  }
  async user_select_balance_sheet_month_field(){
    await this.business_details_month_btn.selectOption({label:'January'});
}

async user_select_balance_sheet_year(){
  await this.balance_sheet_year.selectOption({label:'2023'});
}



async user_enters_balance_sheet_networth(strname: string){
  await this.playwrightFactory.fill(this.balance_sheet_networth, strname);
}

async user_enters_balance_sheet_deduction_field(strname: string){
  await this.playwrightFactory.fill(this.balance_sheet_deduction_field, strname);
}
async user_click_business_details_verify_btn(){
  await this.playwrightFactory.click(this.business_details_verify_btn);
}

async user_click_p_l_statement_add_data_btn(){
  await this.playwrightFactory.click(this.P_L_statement_add_data_btn);
}

async user_click_p_l_statement_add_line_btn(){
  await this.playwrightFactory.click(this.P_L_statement_add_line_btn);
}
async user_select_add_month_field_in_pl_statement(){
  await this.P_L_statement_add_month_field.selectOption({label:'January'});
}
async user_select_year_field_in_pl_statement(){
  await this.P_L_statement_year_field.selectOption({label:'2022'});
}





async user_enters_sales_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_sales_field, strname);
}
async user_enters_purchase_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_purchase_field, strname);
}
async user_enters_net_profit_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_net_profit_field, strname);
}


async user_enters_depreciation_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_depreciation_field, strname);
}
async user_enters_interest_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_interest_field, strname);
}

async user_enters_income_tax_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_income_tax_field, strname);
}

async user_enters_other_income_tax_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_other_income_tax_field, strname);

}
async user_enters_agriculture_income_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_agriculture_income_field, strname);

}
async user_enters_TDS_field_in_pl_statement(strname: string){
  await this.playwrightFactory.fill(this.P_L_statement_TDS_field, strname);

}





async user_click_p_l_statement_save_btn(){
  await this.playwrightFactory.click(this.P_L_statement_save_btn);
}
async user_click_add_data_btn_in_computation_of_income_field(){
  await this.playwrightFactory.click(this.add_data_btn_of_computation_of_income);
}
async user_click_p_l_statement_verify_btn(){
  await this.playwrightFactory.click(this.P_L_statement_verify_btn);
}

async user_click_add_line_btn_in_computation_of_income_field(){
  await this.playwrightFactory.click(this.add_line_btn_of_computation_of_income);
}

async user_enters_gross_income_tax_field_computation_of_income_field(strname: string){
  await this.playwrightFactory.click(this.gross_income_of_computation_of_income);

    await this.playwrightFactory.fill(this.gross_income_of_computation_of_income, strname);
  }
  async user_enters_less_deduction_field_computation_of_income_field(strname: string){
    await this.playwrightFactory.click(this.less_deduction_of_computation_of_income);

  await this.playwrightFactory.fill(this.less_deduction_of_computation_of_income, strname);
  }
  async user_net_taxable_income_field_computation_of_income_field(strname: string){
    await this.playwrightFactory.click(this.net_taxable_amount_of_computation_of_income);

    await this.playwrightFactory.fill(this.net_taxable_amount_of_computation_of_income, strname);
  }
  async user_click_computation_of_income_field_statement_save_btn(){
    await this.playwrightFactory.click(this.save_btn_of_computation_of_income);
  }

  async user_click_computation_of_income_field_statement_verify_btn(){
    await this.playwrightFactory.click(this.verify_btn_of_computation_of_income);
  }

  async user_click_add_data_btn_ITR_details(){
    await this.playwrightFactory.click(this.add_data_btn_ITR_details);
  }
  async user_click_add_line_btn_ITR_details(){
    await this.playwrightFactory.click(this.add_line_btn_ITR_details);
  }

  async user_select_ITR_details_month_field(){
    await this.month_btn_ITR_details.selectOption({label:'January'});
}
async user_select_ITR_details_year_field(){
  await this.year_btn_ITR_details.selectOption({label:'2025'});
}
async user_enters_income_in_ITR_details_field(strname: string){
  await this.playwrightFactory.fill(this.total_income_btn_ITR_details, strname);
}
async user_enters_total_taxes_fees_in_ITR_details_field(strname: string){
  await this.playwrightFactory.fill(this.total_taxes_interest_fee_btn_ITR_details, strname);
}
async user_enters_taxes_paid_in_ITR_details_field(strname: string){
  await this.playwrightFactory.fill(this.taxes_paid_btn_ITR_details, strname);
}
async user_click_save_btn_ITR_details(){
  await this.playwrightFactory.click(this.save_btn_ITR_details);
}
async user_click_verify_btn_ITR_details(){
  await this.playwrightFactory.click(this.verify_btn_ITR_details);
}

}