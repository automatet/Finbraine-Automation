import {expect, type TestInfo } from '@playwright/test';
import { type Locator, type Page } from 'playwright';
import { PlaywrightFactoryActions } from '../../utilities/playwright_factory_actions_UI';
import DataFactory from '../../utilities/data-factory';
import * as fs from 'fs';
import { DatabricksSQLwarehouse } from '../../utilities/databricks_sqlware';
import { DatabricksFactoryDBFS } from '../../utilities/databricks_dbfs';
import { asyncWrapProviders } from 'async_hooks';


export class Co_Borrower_Page {
  private page: Page;
  private testInfo: TestInfo;
  private playwrightFactory: PlaywrightFactoryActions;
  private dataFactory: DataFactory;
  private container: any; 
  private databricks_sqlware: DatabricksSQLwarehouse;
  private databricks_dbfs: DatabricksFactoryDBFS;



readonly txt_Mobile_No:Locator
readonly txt_Name :Locator
readonly txt_Dob :Locator
readonly txt_PermanentAddress :Locator
readonly txt_CurrentAddress :Locator
readonly drpdwn_ProfileType :Locator
readonly txt_Gender :Locator
readonly txt_ResidentialType :Locator
 readonly btn_AddData_in_Coborrower_ID_proof_details: Locator
readonly txt_Name_in_Coborrower_ID_proof_details: Locator
readonly txt_PAN_no_in_Coborrower_ID_proof_details: Locator
readonly btn_cancel_in_Coborrower_ID_proof_details: Locator
readonly btn_Savein_Coborrower_ID_proof_details: Locator
readonly btn_Verify__in_Coborrower_ID_proof_details: Locator
readonly txt_Name_Co_Borrower_AddressProof_Details
readonly txt_Aadhaar_Number_Co_Borrower_AddressProof_Details
readonly txt_Residence_Address_Co_Borrower_AddressProof_Details
readonly txt_Date_of_Birth_Co_Borrower_AddressProof_Details
readonly btn_AddData_in_Co_Borrower_AddressProof_Details: Locator
readonly btn_save_in_Co_Borrower_AddressProof_Details:Locator
readonly checkbox_verify_in_Co_Borrower_AddressProof_Details:Locator
 readonly btnAddData_in_coborrower_driving_license:Locator
readonly txt_Driving_License_Number_in_coborrower_driving_license:Locator
readonly txt_Issue_Date_in_coborrower_driving_license:Locator
readonly txt_Expiry_Date_in_coborrower_driving_license:Locator
readonly btn_save__in_coborrower_driving_license: Locator
readonly checkbox_verify_in_driving_license: Locator
readonly NameoftheFirm_coborrower_Employmentdetails: Locator
readonly Address_Of_The_Firm_coborrower_Employmentdetails: Locator
readonly Designationin_the_Organisation_coborrower_Employmentdetails: Locator
readonly Type_of_Organisation_coborrower_Employmentdetails: Locator
readonly JoiningDate_coborrower_Employmentdetails: Locator
readonly Remarks_coborrower_Employmentdetails: Locator
readonly btn_adddata_Employmentdetails:Locator
readonly btn_save_Employmentdetails: Locator
readonly btn_verify_Employmentdetails: Locator
readonly add_line_Employmentdetails: Locator
readonly month_Employmentdetails: Locator
readonly year_Employmentdetails: Locator
readonly Gross_salary_Employmentdetails: Locator
readonly Deductions_Employmentdetails: Locator
readonly Netsalary_Employmentdetails: Locator
readonly salary_credited_date_Employmentdetails: Locator
readonly PF_Employmentdetails: Locator
readonly btn_add_data_coborrower_ID_details: Locator
readonly Company_Name_coborrower_ID_details: Locator
readonly Address_coborrower_ID_details: Locator
readonly Employee_ID_coborrower_ID_details: Locator
readonly Employee_Name_coborrower_ID_details: Locator
readonly Joining_Date_coborrower_ID_details: Locator
readonly save_coborrower_ID_details: Locator
readonly verify_coborrower_ID_details: Locator
readonly Bank_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly Branch_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly accountno_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly account_opening_date_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly type_of_account_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly salary_credit_amount_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly add_data_CoBorrower_Salary_Credit_Bank_Account:Locator
readonly btn_Addbutton_Co_Borrower_Bank_Statement_Details: Locator
readonly btn_Add_a_line_Co_Borrower_Bank_Statement_Details: Locator
readonly txt_Name_Co_Borrower_Bank_Statement_Details: Locator
readonly txt_Account_no_Co_Borrower_Bank_Statement_Details: Locator
readonly txt_Bank_balance_Co_Borrower_Bank_Statement_Details: Locator
readonly txt_Average_balance_Co_Borrower_Bank_Statement_Details: Locator
readonly txt_CB_Co_Borrower_Bank_Statement_Details: Locator
readonly btn_Save_Co_Borrower_Bank_Statement_Details: Locator
readonly btn_verify_Co_Borrower_Bank_Statement_Details: Locator
readonly Co_borrower_Membership_Number_in_CoBorrower_Membership_Details: Locator
readonly btn_Add_data_in_CoBorrower_Membership_Details: Locator
readonly txt_Co_borrower_Number_of_Shares_in_CoBorrower_Membership_Details: Locator
readonly txt_Co_borrower_Shares_From_in_CoBorrower_Membership_Details: Locator
readonly txt_Co_borrower_Existing_Shares_Amount_in_CoBorrower_Membership_Details: Locator
readonly txt_Co_borrower_Total_Shares_Required_in_CoBorrower_Membership_Details: Locator
readonly txt_Co_borrower_Additional_Shares_Required_in_CoBorrower_Membership_Details: Locator
readonly checkbox_verify_in_Co_Borrower_Membership_Details: Locator
readonly btn_Save_in_CoBorrower_Membership_Details: Locator
readonly save_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly txt_Name_CoBorrower_CreditBureau: Locator
readonly txt_DOB_CoBorrower_CreditBureau: Locator
readonly txt_CTC_CoBorrower_CreditBureau: Locator
readonly txt_CreditScore_CoBorrower_CreditBureau : Locator
readonly txt_Branch_Remarks_on_CIBIL_CoBorrower_CreditBureau: Locator
readonly txt_Personal_Score_CoBorrower_CreditBureau: Locator
readonly drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau : Locator
readonly drpdwn_Settled_Account_CoBorrower_CreditBureau : Locator
readonly drpdwn_Written_Account_CoBorrower_CreditBureau: Locator
readonly txt_Overdue_Amount_Pending_CoBorrower_CreditBureau: Locator
readonly drpdwn_Account_Sold_CoBorrower_CreditBureau : Locator
readonly drpdwn_Suit_Field_CoBorrower_CreditBureau: Locator
readonly txt_Repayment_Track_CoBorrower_CreditBureau : Locator
readonly btn_Add_line_CoBorrower_CreditBureau : Locator
readonly txt_Bank_acount_details_CoBorrower_CreditBureau: Locator
readonly txt_loan_type_CoBorrower_CreditBureau: Locator
readonly txt_ownership_CoBorrower_CreditBureau: Locator
readonly txt_loan_amount_CoBorrower_CreditBureau: Locator
readonly txt_outstanding_amount_CoBorrower_CreditBureau: Locator
readonly txt_EMI_CoBorrower_CreditBureau: Locator
readonly add_line_CoBorrower_CreditBureau:Locator
readonly add_line_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly verify_CoBorrower_Salary_Credit_Bank_Account: Locator
readonly btn_verify_in_agricultural_income: Locator
readonly btn_verify_form16: Locator
readonly btn_verify_other_income: Locator
readonly Coborrower_Agricultural_Income_Details: Locator;
  readonly Add_a_line: Locator;
  readonly Year_Drop_Down: Locator;
  readonly Year_Drop_Down_Value: Locator;
  readonly Enter_Amount: Locator;
  readonly Save_Btn: Locator;
   readonly Coborrower_Other_Income_Details: Locator;
  readonly Add_a_line_in_other_income: Locator;
  readonly Month_Drop_Down: Locator;
  readonly Month_Drop_Down_Value: Locator;
  readonly Enter_Amount_in_otherincome: Locator;
  readonly Save_Btnin_other_income: Locator;
readonly Coborrower_Computation_Income_Details: Locator;
  readonly Add_a_line_Computation_Income_Details: Locator;
  readonly Enter_Gross_Taxable_Income_Computation_Income_Details: Locator;
  readonly Enter_Less_Deductions_Computation_Income_Details: Locator;
  readonly Enter_Net_Taxable_Income_Computation_Income_Details: Locator;
  readonly Save_Btn_Computation_Income_Details: Locator;
  readonly Coborrower_ITR_Details: Locator;
  readonly Add_a_lineCoborrower_ITR_Details: Locator;
  readonly Month_Drop_DownCoborrower_ITR_Details: Locator;
  readonly Month_Drop_Down_ValueCoborrower_ITR_Details: Locator;
  readonly Year_Drop_DownCoborrower_ITR_Details: Locator;
  readonly Year_Drop_Down_ValueCoborrower_ITR_Details: Locator;
  readonly Enter_Total_IncomeCoborrower_ITR_Details: Locator;
  readonly Enter_Total_TaxesCoborrower_ITR_Details: Locator;
  readonly Enter_Taxes_PaidCoborrower_ITR_Details: Locator;
  readonly Save_BtnCoborrower_ITR_Details: Locator;
 readonly coborrower_business_details_wizard: Locator;
 readonly Name_of_the_Business: Locator;
 readonly Address_Of_The_Firm: Locator;
 readonly Type_of_ownership: Locator;
 readonly Nature_of_Business_In_Detail: Locator;
 readonly Add_a_Line: Locator;
 readonly Select_Month: Locator;
 readonly Select_Year: Locator;
 readonly Capital_Networth: Locator;
 readonly Deductions: Locator;
 readonly Save_Coborrower_Balance_Sheet: Locator;
 readonly verify_coborrower_business_details: Locator;
 readonly coborrower_income_details_wizard: Locator;
 readonly Add_a_Line_coborrower_p_and_l_statement_details: Locator;
 readonly Select_Month_coborrower_p_and_l_statement_details: Locator;
 readonly Select_Year_coborrower_p_and_l_statement_details: Locator;
 readonly Sales_coborrower_p_and_l_statement_details: Locator;
 readonly Purchases_coborrower_p_and_l_statement_details: Locator;
 readonly Net_profit_coborrower_p_and_l_statement_details: Locator;
 readonly Depreciation_coborrower_p_and_l_statement_details: Locator;
 readonly Interest_coborrower_p_and_l_statement_details: Locator;
 readonly Income_tax_coborrower_p_and_l_statement_details: Locator;
 readonly Other_income_coborrower_p_and_l_statement_details: Locator;
 readonly Agricultural_income_coborrower_p_and_l_statement_details: Locator;
 readonly TDS_coborrower_p_and_l_statement_details: Locator;
 readonly Save_Button_coborrower_p_and_l_statement_details: Locator;
 readonly verify_coborrower_p_and_l_statement_details: Locator; 
readonly Nature_of_income:Locator 
readonly empid:Locator
readonly btn_coborrower1:Locator

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
//Co-Borrower information  


this.txt_Mobile_No	=this.page.locator('//input[@name="co_borrower_mobile_number"]')
this.txt_Name =this.page.locator('//input[@name="co_borrower_name"]')	
this.txt_Dob =this.page.locator('//input[@name="co_borrower_date_of_birth"]')	
this.txt_PermanentAddress =this.page.locator('//input[@name="co_borrower_permanent_address"]')	
this.txt_CurrentAddress =this.page.locator('//input[@name="co_borrower_current_address"]')	
this.drpdwn_ProfileType =this.page.locator	('//select[@name="coborrower_profile_type"]')
this.txt_Gender =this.page.locator('//input[@name="coborrower_gender"]')	
this.txt_ResidentialType =this.page.locator('//input[@name="coborrower_residential_type"]')


//Co-borrower_ID_Proof_Details//

this.btn_AddData_in_Coborrower_ID_proof_details=this.page.locator('//button[@name="co_borrower_id_proof_details_wizards"]')
this.txt_Name_in_Coborrower_ID_proof_details=this.page.locator('//input[@name="wizard_coborrower_first_name_id_document"]')
this.txt_PAN_no_in_Coborrower_ID_proof_details =this.page.locator('//input[@name="wizard_coborrower_pan_document"]')
this.btn_Savein_Coborrower_ID_proof_details=this.page.locator('//button[@name="save_coborroweriddoc_details"]')
this.btn_cancel_in_Coborrower_ID_proof_details=this.page.locator('//span[contains(text(),"Cancel")]')
this.btn_Verify__in_Coborrower_ID_proof_details= this.page.locator('//div[@name="verify_coborrower_id_proof_details"]')
//Co-Borrower_Address_proof details//
this.btn_AddData_in_Co_Borrower_AddressProof_Details= this.page.locator('//button[@name="coborrower_address_proof_details_wizard"]')
this.txt_Name_Co_Borrower_AddressProof_Details= this.page.locator('//input[@name="wizard_coborrower_first_name_address_document"]')
this.txt_Aadhaar_Number_Co_Borrower_AddressProof_Details= this.page.locator('//input[@name="wizard_coborrower_aadhaar_document"]')
this.txt_Residence_Address_Co_Borrower_AddressProof_Details= this.page.locator('//input[@name="wizard_coborrower_residence_address_document"]')
this.txt_Date_of_Birth_Co_Borrower_AddressProof_Details= this.page.locator('//input[@name="wizard_coborrower_dob_document"]')
this.btn_save_in_Co_Borrower_AddressProof_Details= this.page.locator('//button[@name="save_coborroweraddressdoc_details"]')
this.checkbox_verify_in_Co_Borrower_AddressProof_Details=this.page.locator('//div[@name="verify_coborrower_address_proof_details"]')
//this.age_in_coborrower_address=this.page.locator("//input[@name='wizard_coborrower1_age']")
//Co_borrower driving_license//
this.btnAddData_in_coborrower_driving_license=this.page.locator('//button[@name="coborrower_driving_license_wizard"]')
this.txt_Driving_License_Number_in_coborrower_driving_license=this.page.locator('//input[@name="wizard_driving_license_num"]')
this.txt_Issue_Date_in_coborrower_driving_license=this.page.locator('//input[@name="wizard_issue_date"]')
this.txt_Expiry_Date_in_coborrower_driving_license=this.page.locator('//input[@name="wizard_expiry_date"]')
this.btn_save__in_coborrower_driving_license=this.page.locator('//button[@name="save_coborrower_driving_licencse"]')
this.checkbox_verify_in_driving_license=this.page.locator('//div[@name="verify_coborrower_driving_license_details"]')
//coborrower Employment details//
this.btn_adddata_Employmentdetails=this.page.locator('//button[@name="coborrower_salary_details_wizard"]')
this.NameoftheFirm_coborrower_Employmentdetails=this.page.locator('//input[@name="wizard_coborrower_company_where_employed"]')
this.Address_Of_The_Firm_coborrower_Employmentdetails=this.page.locator('//input[@name="wizard_coborrower_address_of_the_firm"]')
this.Designationin_the_Organisation_coborrower_Employmentdetails=this.page.locator('//select[@name="wizard_coborrower_designation"]')
this.Type_of_Organisation_coborrower_Employmentdetails=this.page.locator('//select[@name="wizard_coborrower_type_of_organisation"]')
this.JoiningDate_coborrower_Employmentdetails=this.page.locator('//input[@name="wizard_coborrower_since_date"]')
this.Remarks_coborrower_Employmentdetails=this.page.locator('//input[@name="wizard_coborrower_remarks"]')
this.add_line_Employmentdetails=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='coborrower_salary_details_ids']//*[contains(text(),'Add a line')]")
this.month_Employmentdetails=this.page.locator('//select[@name="wizard_coborrower_month"]')
this.year_Employmentdetails=this.page.locator('//select[@name="wizard_coborrower_year"]')
this.Gross_salary_Employmentdetails=this.page.locator('//input[@name="wizard_coborrower_gross_salary"]')
this.Deductions_Employmentdetails=this.page.locator('//input[@name="wizard_coborrower_deductions"]')
this.Netsalary_Employmentdetails=this.page.locator('//span[@name="wizard_coborrower_net_salary"]')
this.salary_credited_date_Employmentdetails=this.page.locator('//input[@name="wizard_coborrower_salary_credited_date"]')
this.PF_Employmentdetails=this.page.locator('//input[@name="wizard_pf"]')
this.btn_save_Employmentdetails=this.page.locator('//button[@name="save_coborrower_salary_slip"]')
this.btn_verify_Employmentdetails=this.page.locator('//div[@name="verify_coborrower_salary_slip_details"]')
 this.Nature_of_income=this.page.locator("//input[@name='wizard_coborrower_nature_of_salaried']")
 this.empid=this.page.locator("//input[@name='wizard_employee_id_coborrower']")
//Co-Borrower Bank Statement Details//

this.btn_Addbutton_Co_Borrower_Bank_Statement_Details=this.page.locator('//button[@name="coborrower_bank_statement_wizard"]')
this.btn_Add_a_line_Co_Borrower_Bank_Statement_Details=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='coborrower_bank_statement_ids']//*[contains(text(),'Add a line')]")
this.txt_Name_Co_Borrower_Bank_Statement_Details=this.page.locator('//input[@name="wizard_name"]')
this.txt_Account_no_Co_Borrower_Bank_Statement_Details=this.page.locator('//input[@name="wizard_ac_no"]')
this.txt_Bank_balance_Co_Borrower_Bank_Statement_Details=this.page.locator('//input[@name="wizard_bank_balance"]')
this.txt_Average_balance_Co_Borrower_Bank_Statement_Details=this.page.locator('//input[@name="wizard_avg_balance"]')
this.txt_CB_Co_Borrower_Bank_Statement_Details=this.page.locator('//input[@name="wizard_cb_mbc_ac_ecs_si"]')
this.btn_Save_Co_Borrower_Bank_Statement_Details=this.page.locator('//button[@name="save_coborrower_bank_statement_wizard"]')
this.btn_verify_Co_Borrower_Bank_Statement_Details=this.page.locator('//div[@name="verify_coborrower_bank_statement_details"]')
//Co_borrower company Id details//
this.btn_add_data_coborrower_ID_details=this.page.locator('//*[contains(text(),"Add a line")]/following::button[@name="coborrower_company_id_details_wizard"]')
this.Company_Name_coborrower_ID_details=this.page.locator('//input[@name="wizard_coborrower_first_name_company_document"]')
this.Address_coborrower_ID_details=this.page.locator('//input[@name="wizard_coborrower_address_details"]')
this.Employee_ID_coborrower_ID_details=this.page.locator('//input[@name="wizard_coborrower_employee_id"]')
this.Employee_Name_coborrower_ID_details=this.page.locator('//input[@name="wizard_coborrower_employee_name"]')
this.Joining_Date_coborrower_ID_details=this.page.locator('//input[@name="wizard_coborrower_joining_date"]')
this.save_coborrower_ID_details=this.page.locator('//button[@name="save_coborrowercompanyiddoc_details"]')
this.verify_coborrower_ID_details=this.page.locator('//div[@name="verify_coborrower_company_id_card_details"]')
//Co-Borrower Salary Credit Bank Account//
this.add_data_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//button[@name="coborrower_salary_credit_bank_wizard"]')
this.add_line_CoBorrower_Salary_Credit_Bank_Account=this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='coborrower_salary_credit_ids']//*[contains(text(),'Add a line')]")
this.Bank_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//input[@name="wizard_bank_name"]')
this.Branch_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//input[@name="wizard_branch_name"]')
this.accountno_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//input[@name="wizard_account_number"]')
this.account_opening_date_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//input[@name="wizard_doc_acc_opening_date"]')
this.type_of_account_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//select[@name="wizard_account_type"]')
this.salary_credit_amount_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//input[@name="wizard_doc_salary_credit_amt"]')
this.save_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//button[@name="save_coborrower_salary_credit"]')
this.verify_CoBorrower_Salary_Credit_Bank_Account=this.page.locator('//div[@name="verify_coborrower_salary_credit_bank_details"]')
//co-borrower_Membership_details//
this.btn_Add_data_in_CoBorrower_Membership_Details=this.page.locator('//button[@name="coborrower_membership_details_wizard"]')
this.Co_borrower_Membership_Number_in_CoBorrower_Membership_Details=this.page.locator('//input[@name="wizard_coborrower_membership_number"]')
this.txt_Co_borrower_Number_of_Shares_in_CoBorrower_Membership_Details=this.page.locator('//input[@name="wizard_coborrower_no_of_shares"]')
this.txt_Co_borrower_Shares_From_in_CoBorrower_Membership_Details=this.page.locator('//input[@name="wizard_coborrower_share_from"]')	
this.txt_Co_borrower_Existing_Shares_Amount_in_CoBorrower_Membership_Details=this.page.locator('//input[@name="wizard_coborrower_existing_share_amt"]')		
this.txt_Co_borrower_Total_Shares_Required_in_CoBorrower_Membership_Details=this.page.locator('//input[@name="wizard_coborrower_total_share_req"]')	
this.txt_Co_borrower_Additional_Shares_Required_in_CoBorrower_Membership_Details=this.page.locator('//input[@name="wizard_coborrower_additional_share_req"]')
this.btn_Save_in_CoBorrower_Membership_Details=this.page.locator('//button[@name="save_coborrower_membership_details"]')
this.checkbox_verify_in_Co_Borrower_Membership_Details=this.page.locator('//div[@name="verify_coborrower_membership_details"]')
//co-borrower Credit-bureau//  
this.txt_Name_CoBorrower_CreditBureau=this.page.locator('//input[@name="coborrower_credit_name"]')
this.txt_DOB_CoBorrower_CreditBureau=this.page.locator('//input[@name="coborrower_dob"]')
this.txt_CTC_CoBorrower_CreditBureau=this.page.locator('//input[@name="coborrower_ctc"]')
this.txt_CreditScore_CoBorrower_CreditBureau=this.page.locator('//input[@name="coborrower_credit_vision"]')
this.txt_Branch_Remarks_on_CIBIL_CoBorrower_CreditBureau=this.page.locator('//input[@name="coborrower_branch_remarks_on_cibil"]')
this.txt_Personal_Score_CoBorrower_CreditBureau=this.page.locator('//input[@name="coborrower_personal"]')
this.drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau=this.page.locator('//select[@name="coborrower_wilful_defaulter"]')
this.drpdwn_Settled_Account_CoBorrower_CreditBureau=this.page.locator('//select[@name="coborrower_settled_account"]')
this.drpdwn_Written_Account_CoBorrower_CreditBureau=this.page.locator('//select[@name="coborrower_written_account"]')
this.txt_Overdue_Amount_Pending_CoBorrower_CreditBureau=this.page.locator('//input[@name="coborrower_overdue_amount_pending"]')
this.drpdwn_Account_Sold_CoBorrower_CreditBureau=this.page.locator('//select[@name="coborrower_account_sold"]')
this.drpdwn_Suit_Field_CoBorrower_CreditBureau=this.page.locator('//select[@name="coborrower_suit_field"]')
this.txt_Repayment_Track_CoBorrower_CreditBureau =this.page.locator('//input[@name="coborrower_credit_repayment_track"]')
this.btn_Add_line_CoBorrower_CreditBureau =this.page.locator("//*[contains(text(),'Add a line')]")
this.txt_Bank_acount_details_CoBorrower_CreditBureau =this.page.locator('//input[@name="bank_loan_accounts_details"]')
this.txt_loan_type_CoBorrower_CreditBureau =this.page.locator('//input[@name="loan_type"]')
this.txt_ownership_CoBorrower_CreditBureau =this.page.locator('//input[@name="ownership"]')
this.txt_loan_amount_CoBorrower_CreditBureau=this.page.locator('//div[@name="loan_amount"]')
this.txt_outstanding_amount_CoBorrower_CreditBureau=this.page.locator('//div[@name="outstanding_amount"]')
this.txt_EMI_CoBorrower_CreditBureau=this.page.locator('//input[@name="emi_interest"]')
this.add_line_CoBorrower_CreditBureau=this.page.locator("//*[contains(text(),'Add a line')]")

//this.btn_upload=this.page.locator("//button[text()='Upload your file'] ")

//this.btn_upload=this.page.locator("//button[text()='Upload your file'] ")
//this.btn_verify_credit_bureau=this.page.locator('//div[@name="verify_coborrower_credit_bureau_details"]')

this.btn_verify_form16=this.page.locator("//div[@name='verify_coborrower_form_16_details']")

//Agriculture Income//
this.Coborrower_Agricultural_Income_Details = this.page.locator('//span[contains(text(), "Coborrower Agricultural Income Details")]/following::span[contains(text(), "Add Data")]').nth(0);
this.Add_a_line = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//a[contains(text(),"Add a line")]');
this.Year_Drop_Down = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//select[@class="o_input o_field_widget"]');
this.Year_Drop_Down_Value = this.page.locator('//select[@name="wizard_year"]');
this.Enter_Amount = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//input[@class="o_field_char o_field_widget o_input"]');
this.Save_Btn = this.page.locator('//span[contains(text(),"Save")]');
this.btn_verify_in_agricultural_income=this.page.locator("//div[@name='verify_coborrower_agricultural_income_details']")
//other income//
this.Coborrower_Other_Income_Details = this.page.locator('//span[contains(text(), "CoBorrower Other Income Details")]/following::span[contains(text(), "Add Data")]').nth(0);
this.Add_a_line_in_other_income = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//a[contains(text(),"Add a line")]');
this.Month_Drop_Down = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//select[@class="o_input o_field_widget"]');
this.Month_Drop_Down_Value = this.page.locator('//select[@name="wizard_year"]');
this.Enter_Amount_in_otherincome = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//input[@class="o_field_char o_field_widget o_input"]');
this.Save_Btnin_other_income = this.page.locator('//span[contains(text(),"Save")]');
this.btn_verify_other_income=this.page.locator("//div[@name='verify_coborrower_other_income_details']")


//Business profile///
//Business details//
this. coborrower_business_details_wizard = this.page.locator ("//span[contains (text(),'Co-Borrower Business Details')]/following::button[@name='coborrower_business_details_wizard']");
this. Name_of_the_Business = this.page.locator ("//input[@name='wizard_coborrower_business_name']");
this. Address_Of_The_Firm = this.page.locator ("//input[@name='wizard_coborrower_business_address']");
this. Type_of_ownership = this.page.locator ("//input[@name='wizard_coborrower_ownership']");
this. Nature_of_Business_In_Detail = this.page.locator ("//input[@name='wizard_coborrower_nature_of_business']");
this.Add_a_Line = this.page.locator("//*[contains(text(),'Add a line')]/following::div[@name='coborrower_business_details_ids']//*[contains(text(),'Add a line')]");

this.Select_Month = this.page.locator("//tr[@class='o_data_row o_selected_row']//select[@name='wizard_month']");
this.Select_Year = this.page.locator("//td[@class='o_data_cell o_field_cell o_required_modifier']//select[@name='wizard_year']");
this.Capital_Networth = this.page.locator("//input[@name='wizard_capital_networth']");
this.Deductions = this.page.locator("//input[@name='wizard_deductions']");
this.Save_Coborrower_Balance_Sheet = this.page.locator("//button[@name='save_coborrower_balance_sheet']");
this.verify_coborrower_business_details = this.page.locator ("//div[@name='verify_coborrower_balance_sheet_details']")
//P & L details//
this. coborrower_income_details_wizard = this.page.locator ("//span[contains (text(),'Co-Borrower P and L Details')]/following::button[@name='coborrower_income_details_wizard']")
this.Add_a_Line_coborrower_p_and_l_statement_details = this.page.locator("//div[@class='o_form_view o_form_nosheet o_form_editable']//a[contains (text(),'Add a line')]");
this. Select_Month_coborrower_p_and_l_statement_details = this.page.locator ("//td[@class='o_data_cell o_field_cell o_required_modifier']//select[@name='wizard_month']");
this.Select_Year_coborrower_p_and_l_statement_details = this.page.locator("//td[@class='o_data_cell o_field_cell o_required_modifier']//select[@name='wizard_year']");
this.Sales_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_sales']")
this.Purchases_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_purchases']")
this.Net_profit_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_net_profit']")
this.Depreciation_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_depreciation']")
this.Interest_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_interest']")
this.Income_tax_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_income_tax']")
this.Other_income_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_other_income']")
this.Agricultural_income_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_agricultural_income']")
this.TDS_coborrower_p_and_l_statement_details = this.page.locator("//input[@name='wizard_tds']")
this.Save_Button_coborrower_p_and_l_statement_details = this.page.locator ("//button[@name='save_coborrower_income_details_wizard']")
this.verify_coborrower_p_and_l_statement_details = this.page.locator ("//div[@name='verify_coborrower_p_and_l_statement_details']")


//computation Income//

this.Coborrower_Computation_Income_Details = this.page.locator('//span[contains(text(), "Co-Borrower Computation of Income")]/following::span[contains(text(), "Add Data")]').nth(0);
this.Add_a_line_Computation_Income_Details = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//a[contains(text(),"Add a line")]');
this.Enter_Gross_Taxable_Income_Computation_Income_Details = this.page.locator('//input[@name="wizard_gross_taxable_income"]');
this.Enter_Less_Deductions_Computation_Income_Details = this.page.locator('//input[@name="wizard_less_deductions"]');
this.Enter_Net_Taxable_Income_Computation_Income_Details = this.page.locator('//input[@name="wizard_net_taxable_income"]');
this.Save_Btn_Computation_Income_Details = this.page.locator('//span[contains(text(),"Save")]');

//ITR details//
  this.Coborrower_ITR_Details = this.page.locator('//span[contains(text(), "Co-Borrower ITR Details")]/following::span[contains(text(), "Add Data")]').nth(0);
  this.Add_a_lineCoborrower_ITR_Details = this.page.locator('//div[@class="o_form_view o_form_nosheet o_form_editable"]//a[contains(text(),"Add a line")]');
  this.Month_Drop_DownCoborrower_ITR_Details = this.page.locator('//tr[@class="o_data_row o_selected_row"]//select[@name="wizard_month"]');
  this.Month_Drop_Down_ValueCoborrower_ITR_Details = this.page.locator('//select[@name="wizard_month"]');
  this.Year_Drop_DownCoborrower_ITR_Details = this.page.locator('//tr[@class="o_data_row o_selected_row"]//select[@name="wizard_year"]');
  this.Year_Drop_Down_ValueCoborrower_ITR_Details = this.page.locator('//select[@name="wizard_year"]');
  this.Enter_Total_IncomeCoborrower_ITR_Details = this.page.locator('//input[@name="wizard_total_income"]');
  this.Enter_Total_TaxesCoborrower_ITR_Details = this.page.locator('//input[@name="wizard_total_taxes_interest_fee_payable"]');
  this.Enter_Taxes_PaidCoborrower_ITR_Details = this.page.locator('//input[@name="wizard_taxes_paid"]');
  this.Save_BtnCoborrower_ITR_Details = this.page.locator('//span[contains(text(),"Save")]');
this.btn_coborrower1=this.page.locator("//button[@name='action_show_coborrower_1']")
}
async user_clicks_Co_Borrower1(){
  await this.btn_coborrower1.click()
 
}



  async user_enters_Mobile_No(strmobileno:string){
await this.txt_Mobile_No.click()
await this.txt_Mobile_No.fill(strmobileno)
  }
 async user_enters_Name(strname:string){
await this.txt_Name.click()
await this.txt_Name.fill(strname);
 }
  async user_enters_Dob(strdob:string){
await this.txt_Dob.fill(strdob)
  }
  async user_enters_PermanentAddress(stradd:string){
   await this.txt_PermanentAddress.fill(stradd)

  }
  async user_enters_CurrentAddress(stradd2:string){
    await this.txt_PermanentAddress.fill(stradd2)

  }
  async user_enters_ProfileType(){
 await this.drpdwn_ProfileType.selectOption({label:'Salaried'});
  await expect(this.drpdwn_ProfileType).not.toBeEmpty();
  }
  async user_enters_Gender(strgender:string){
await this.txt_Gender.click()
await this.txt_Gender.fill(strgender)
  } 	
  async user_enters_ResidentialType(strresty:string){
    await this.txt_ResidentialType.click()
    await this.txt_ResidentialType.selectOption(strresty)

  }
async user_clicks_AddData_in_Coborrower_ID_proof_details(){
  await this.btn_AddData_in_Coborrower_ID_proof_details.click()

}
async user_enters_Name_in_Coborrower_ID_proof_details(strname:string){
  await this.txt_Name_in_Coborrower_ID_proof_details.fill(strname)

}
async  user_enters_PAN_no_in_Coborrower_ID_proof_details(strPAN:string){
  await this.txt_PAN_no_in_Coborrower_ID_proof_details.fill(strPAN)

}
async user_clicks_cancel_in_Coborrower_ID_proof_details(){
await this.btn_cancel_in_Coborrower_ID_proof_details.click()
}


async  user_clicks_Savein_Coborrower_ID_proof_details(){
 await this.btn_cancel_in_Coborrower_ID_proof_details.click()

}
async  user_clicks_Verify__in_Coborrower_ID_proof_details(){
await this.btn_Verify__in_Coborrower_ID_proof_details.click()
}
async user_enters_AddData_in_Co_Borrower_AddressProof_Details(){
await this.btn_AddData_in_Co_Borrower_AddressProof_Details.click()
}
async user_enters_Name_Co_Borrower_AddressProof_Details(strName:string){
await this.txt_Name_Co_Borrower_AddressProof_Details.fill(strName)
}
async user_enters_Aadhaar_Number_Co_Borrower_AddressProof_Details(straadharno:string){
  await this.txt_Aadhaar_Number_Co_Borrower_AddressProof_Details.fill(straadharno)

}
async user_enters_Residence_Address_Co_Borrower_AddressProof_Details(strresidence:string){
  await this.txt_Residence_Address_Co_Borrower_AddressProof_Details.fill(strresidence)

}
async  user_enters_Date_of_Birth_Co_Borrower_AddressProof_Details(strDOB:string){
  await this.txt_Date_of_Birth_Co_Borrower_AddressProof_Details.fill(strDOB)

}
// async user_enters_age_adressproof(age:string){
// await this.age_in_coborrower_address.fill(age)
// }
async user_clicks_save__Co_Borrower_AddressProof_Details(){
await this.btn_save_in_Co_Borrower_AddressProof_Details.click()
}
async user_clicks_verify_in_Co_Borrower_AddressProof_Details(){
await this.checkbox_verify_in_Co_Borrower_AddressProof_Details.click();
}

 async user_enters_AddData_in_coborrower_driving_license(){
await this.btnAddData_in_coborrower_driving_license.click()
 }
async user_enters_Driving_License_Number_in_coborrower_driving_license(strdrivinglicense:string){
 await this.txt_Driving_License_Number_in_coborrower_driving_license.fill(strdrivinglicense)

}
async user_enters_Issue_Date_in_coborrower_driving_license(striisuedate:string){
await this.txt_Issue_Date_in_coborrower_driving_license.fill(striisuedate)
}
async user_enters_Expiry_Date_in_coborrower_driving_license(strexpiry:string){
  await this.txt_Expiry_Date_in_coborrower_driving_license.fill(strexpiry)

}
async user_clicks_save__in_coborrower_driving_license(){
  await this.playwrightFactory.click(this.btn_save__in_coborrower_driving_license)

}

async user_clicks_verify_in_driving_license(){
await this.checkbox_verify_in_driving_license.click()
}
//salaried profile//
async user_clicks_adddata_Employmentdetails(){
  await this.btn_adddata_Employmentdetails.click()
}
async user_enters_NameoftheFirm_coborrower_Employmentdetails(strfirmname:string){
  await this.NameoftheFirm_coborrower_Employmentdetails.fill(strfirmname)
}
async user_enters_Address_Of_The_Firm_coborrower_Employmentdetails(straddress:string){
await this.Address_Of_The_Firm_coborrower_Employmentdetails.fill(straddress)
}
async user_selects_Designationin_the_Organisation_coborrower_Employmentdetails(){
 await this.Designationin_the_Organisation_coborrower_Employmentdetails.selectOption({label:'Supervisor(Manager)'});
}
async user_selects_Type_of_Organisation_coborrower_Employmentdetails(){
   await this.Type_of_Organisation_coborrower_Employmentdetails.selectOption({label:'Private Ltd. Co.'});
}
 async user_enters_nature_of_salaried(salary:string){
 await this.Nature_of_income.fill(salary)
 }
 async user_enters_employeeid(id:string){
 await this.empid.fill(id)
 }
async user_enters_JoiningDate_coborrower_Employmentdetails(strdate:string){
await this.JoiningDate_coborrower_Employmentdetails.fill(strdate)
}
async user_enters_Remarks_coborrower_Employmentdetails(strremark:string){
await this.Remarks_coborrower_Employmentdetails.fill(strremark)
}
async user_clicks_add_line_Employmentdetails(){
await this.add_line_Employmentdetails.click()  
}
async user_enters_month_Employmentdetails(){
 await this.month_Employmentdetails.selectOption({label:'August'});
}
 async user_selects_year_Employmentdetails(){
 await this.year_Employmentdetails.selectOption({label:'2025'});
 }
 async  user_enters_Gross_salary_Employmentdetails(strgross:string){
await this.Gross_salary_Employmentdetails.fill(strgross)
 }
async user_enters_Deductions_Employmentdetails(strdeduction:string){
await  this.Deductions_Employmentdetails.fill(strdeduction)
}
async user_entersNetsalary_Employmentdetails(strnetsalary:string){
await expect(this.Netsalary_Employmentdetails).toContainText(strnetsalary)
}
async user_enterssalary_credited_date_Employmentdetails(strcreditdate:string){
await this.salary_credited_date_Employmentdetails.fill(strcreditdate)
}
async user_enters_PF_Employmentdetails(strpf:string){
await this.PF_Employmentdetails.fill(strpf)
}
async user_clicks_save_Employmentdetails(){
await this.btn_save_Employmentdetails.click()
}
async user_clicks_verify_Employmentdetails(){
await this.btn_verify_Employmentdetails.click()
}
///
async user_clicks_verify_in_Form16(){
  await this.btn_verify_form16.click()
}
///Business Profile//
//Business details//
async user_clicks_on_coborrower_details_wizard() {
await this.coborrower_business_details_wizard.click ();
}
async user_enters_Name_of_the_Business_CoBorrower_Business_details(strname:string) {
await this.Name_of_the_Business.fill(strname);
}
 
async user_enters_Address_Of_The_Firm_CoBorrower_Business_details(strname:string) {
await this.Address_Of_The_Firm.fill(strname);
}
 
async user_enters_Type_of_ownership_CoBorrower_Business_details(strname:string) {
await this.Type_of_ownership.fill(strname);
}
 
async user_enters_Nature_of_Business_In_Detail(strname:string) {
await this.Nature_of_Business_In_Detail.fill(strname);
}
 
async user_clicks_on_Add_a_Line_in_CoBorrower_Business_details() {
await this.Add_a_Line.click ();
}
 
async user_Select_Month_coborrower_business_details(strname: string) {
await this.Select_Month.selectOption({label:strname});
}
async user_Select_Year_coborrower_business_details(strname:string) {
await this.Select_Year.selectOption({label:strname});
}
async user_enters_Capital_Networth_coborrower_business_details(strname:string) {
await this.Capital_Networth.fill(strname);
}
 
async user_enters_Deductions_coborrower_business_details(strname:string) {
await this.Deductions.fill(strname);
}
 
async user_clicks_on_Save_Coborrower_Balance_Sheet__coborrower_business_details() {
await this.Save_Coborrower_Balance_Sheet.click ();
}
async user_clicks_on_verify_coborrower_business_details() {
await this.verify_coborrower_business_details.click ();

}
async user_clicks_onAddData_coborrower_income_details_wizard() {
await this.coborrower_income_details_wizard.click ();
}
 
async user_clicks_on_Add_a_Line_in_CoBorrower_P_and_L_Details() {
await this.Add_a_Line.click ();
}
 
async user_Select_Month_in_CoBorrower_P_and_L_Details(strname: string) {
await this.Select_Month_coborrower_p_and_l_statement_details.selectOption({label:strname});
}
async user_Select_Year_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Select_Year_coborrower_p_and_l_statement_details.selectOption({label:strname});
}
async user_enters_Sales_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Sales_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_Purchases_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Purchases_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_Net_profit_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Net_profit_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_Depreciation_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Depreciation_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_Interest_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Interest_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_Income_tax_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Income_tax_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_Other_income_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Other_income_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_Agricultural_income_in_CoBorrower_P_and_L_Details(strname:string) {
await this.Agricultural_income_coborrower_p_and_l_statement_details.fill(strname);
}
async user_enters_TDS_in_CoBorrower_P_and_L_Details(strname:string) {
await this.TDS_coborrower_p_and_l_statement_details.fill(strname);
}
async user_clicks_on_Save_Button_in_CoBorrower_P_and_L_Details() {
await this.Save_Button_coborrower_p_and_l_statement_details.click ();
}
async user_clicks_on_verify_coborrower_p_and_l_statement_details() {
await this.verify_coborrower_p_and_l_statement_details.click ();
}
//Computation Income//
async user_clicks_add_button_coborrower_computation_income_details(){
  await this.playwrightFactory.click(this.Coborrower_Computation_Income_Details);
}
 
async user_clicks_on_add_a_line() {
    await this.playwrightFactory.click(this.Add_a_line_Computation_Income_Details);
}
 
async user_enter_gross_taxable_income_amount(gross_taxable_income: string){
    await this.playwrightFactory.fill(this.Enter_Gross_Taxable_Income_Computation_Income_Details, gross_taxable_income)
  }
 
async user_enter_less_deduction_amount(less_deduction_amount: string){
  await this.playwrightFactory.click(this.Enter_Less_Deductions_Computation_Income_Details);
    await this.playwrightFactory.fill(this.Enter_Less_Deductions_Computation_Income_Details, less_deduction_amount)
  }
 
async user_enter_net_taxable_income_amount(net_taxable_income: string){
  await this.playwrightFactory.click(this.Enter_Net_Taxable_Income_Computation_Income_Details);
    await this.playwrightFactory.fill(this.Enter_Net_Taxable_Income_Computation_Income_Details, net_taxable_income)
  }
   async user_clicks_on_save_button() {
    await this.playwrightFactory.click(this.Save_Btn_Computation_Income_Details);
}
//ITR Details//
async user_clicks_add_button_coborrower_ITR_details(){
  await this.playwrightFactory.click(this.Coborrower_ITR_Details);
}
 async user_clicks_on_add_a_linecoborrower_ITR_details() {
    await this.playwrightFactory.click(this.Add_a_lineCoborrower_ITR_Details);
}
 async user_selecting_month_from_drop_down_valueCoborrower_ITR_Details() {
await this.Month_Drop_Down_ValueCoborrower_ITR_Details.selectOption({label:'January'});
}
 async user_selecting_year_from_drop_down_valueCoborrower_ITR_Details() {
await this.Year_Drop_Down_ValueCoborrower_ITR_Details.selectOption({label:'2022'});
}
 
async user_enter_total_income_amountCoborrower_ITR_Details(total_income: string){
    await this.playwrightFactory.fill(this.Enter_Total_IncomeCoborrower_ITR_Details, total_income)
  }
 
async user_enter_total_taxes_amount(total_taxes: string){
    await this.playwrightFactory.fill(this.Enter_Total_TaxesCoborrower_ITR_Details, total_taxes)
  }
 
async user_enter_taxes_paid_amountCoborrower_ITR_Details(taxes_paid: string){
    await this.playwrightFactory.fill(this.Enter_Taxes_PaidCoborrower_ITR_Details, taxes_paid)
  }
 async user_clicks_on_save_buttonCoborrower_ITR_Details() {
    await this.playwrightFactory.click(this.Save_BtnCoborrower_ITR_Details);
}


async user_clicks_Add_data_Co_Borrower_Bank_Statement_Details(){
await this.btn_Addbutton_Co_Borrower_Bank_Statement_Details.click()
}
async user_clicks_Add_a_line_Co_Borrower_Bank_Statement_Details(){
await this.btn_Add_a_line_Co_Borrower_Bank_Statement_Details.click()
}
async user_enters_Name_Co_Borrower_Bank_Statement_Details(strName:string){
  await this.txt_Name_Co_Borrower_Bank_Statement_Details.click()
await this.txt_Name_Co_Borrower_Bank_Statement_Details.fill(strName)
}
async user_enters_Account_no_Co_Borrower_Bank_Statement_Details(straacountno:string){
  await this.txt_Account_no_Co_Borrower_Bank_Statement_Details.click()
await this.txt_Account_no_Co_Borrower_Bank_Statement_Details.fill(straacountno)
}
 async user_enters_Bank_balance_Co_Borrower_Bank_Statement_Details(strbankbalance:string){
  await this.txt_Bank_balance_Co_Borrower_Bank_Statement_Details.click()
  await this.txt_Bank_balance_Co_Borrower_Bank_Statement_Details.fill(strbankbalance)

 }
async user_enters_Average_balance_Co_Borrower_Bank_Statement_Details(stravgbalance:string){
  await this.txt_Average_balance_Co_Borrower_Bank_Statement_Details.click()
await this.txt_Average_balance_Co_Borrower_Bank_Statement_Details.fill(stravgbalance)
}
async user_enters_CB_Co_Borrower_Bank_Statement_Details(strcb:string){
  await this.txt_CB_Co_Borrower_Bank_Statement_Details.click()
  await this.txt_CB_Co_Borrower_Bank_Statement_Details.fill(strcb)

}
async user_clicks_Save_Co_Borrower_Bank_Statement_Details(){
await this.btn_Save_Co_Borrower_Bank_Statement_Details.click()  

}
async  user_clicks_verify_Co_Borrower_Bank_Statement_Details(){
await this.btn_verify_Co_Borrower_Bank_Statement_Details.click()  

}
async user_clicks_ADD_data_coborrower_ID_details(){
  await this.btn_add_data_coborrower_ID_details.click();
}
async user_enters_Company_Name_coborrower_ID_details(strname:string){
  await this.Company_Name_coborrower_ID_details.fill(strname)

}	
async user_enters_Address_coborrower_ID_details(stradd:string){
  await this.playwrightFactory.fill(this.Address_coborrower_ID_details,stradd)

}	
async user_enters_Employee_ID_coborrower_ID_details(strempid:string){
await this.Employee_ID_coborrower_ID_details.fill(strempid)
}     
async user_enters_Employee_Name_coborrower_ID_details(strname:string){
await this.Employee_Name_coborrower_ID_details.fill(strname)
}     
async user_enters_Joining_Date_coborrower_ID_details(strjoin:string){
await this.Joining_Date_coborrower_ID_details.fill(strjoin)
}
async user_clicks_save_coborrower_ID_details(){
await this.save_coborrower_ID_details.click()
}
async user_clicks_verify_coborrower_ID_details(){
  await this.verify_coborrower_ID_details.click()
}
async user_clicks_add_data_CoBorrower_Salary_Credit_Bank_Account(){
await this.add_data_CoBorrower_Salary_Credit_Bank_Account.click()
}
async user_clicks_add_line_CoBorrower_Salary_Credit_Bank_Account(){

await this.add_line_CoBorrower_Salary_Credit_Bank_Account.click()
}
async user_enters_Bank_CoBorrower_Salary_Credit_Bank_Account(strbank:string){
   await this.Bank_CoBorrower_Salary_Credit_Bank_Account.click()

await this.Bank_CoBorrower_Salary_Credit_Bank_Account.fill(strbank)
}
async user_enters_Branch_CoBorrower_Salary_Credit_Bank_Account(strbranch:string){
   await this.Branch_CoBorrower_Salary_Credit_Bank_Account.click()

await this.Branch_CoBorrower_Salary_Credit_Bank_Account.fill(strbranch)
}
async user_enters_accountno_CoBorrower_Salary_Credit_Bank_Account(straccno:string){
   await this.accountno_CoBorrower_Salary_Credit_Bank_Account.click()

await this.accountno_CoBorrower_Salary_Credit_Bank_Account.fill(straccno)
}
async user_enters_account_opening_date_CoBorrower_Salary_Credit_Bank_Account(strdate:string){
await this.account_opening_date_CoBorrower_Salary_Credit_Bank_Account.click()
await this.account_opening_date_CoBorrower_Salary_Credit_Bank_Account.fill(strdate)
 
 

}
async user_enters_type_of_account_CoBorrower_Salary_Credit_Bank_Account(){
  await this.type_of_account_CoBorrower_Salary_Credit_Bank_Account.selectOption({label:'Saving'})
   //await this.type_of_account_CoBorrower_Salary_Credit_Bank_Account.fill(stracc)
}
async user_enters_salary_credit_amount_CoBorrower_Salary_Credit_Bank_Account(strsalary:string){
   await this.salary_credit_amount_CoBorrower_Salary_Credit_Bank_Account.click()

await this.salary_credit_amount_CoBorrower_Salary_Credit_Bank_Account.fill(strsalary)
}
async user_clicks_save_CoBorrower_Salary_Credit_Bank_Account(){
await this.save_CoBorrower_Salary_Credit_Bank_Account.click()
}
async user_verify_CoBorrower_Salary_Credit_Bank_Account(){
await this.verify_CoBorrower_Salary_Credit_Bank_Account.click()
}
async user_clicks_add_button_coborrower_agricultural_income_details(){
  await this.playwrightFactory.click(this.Coborrower_Agricultural_Income_Details);
}
 
async user_clicks_on_add_a_line_coborrower_agricultural_income_details() {
    await this.playwrightFactory.click(this.Add_a_line);
}
 
 
async user_selecting_year_from_drop_down_value_coborrower_agricultural_income_details(stryear:string) {
   await this.Year_Drop_Down_Value.selectOption({label:stryear});
}
 
 
 async user_enter_value_in_amount_input_field_coborrower_agricultural_income_details(Amount: string){
    await this.playwrightFactory.fill(this.Enter_Amount, Amount)
  }
 
  async user_clicks_on_save_button_coborrower_agricultural_income_details() {
    await this.playwrightFactory.click(this.Save_Btn);
}
async user_verify_agriculturefield(){
  await this.btn_verify_in_agricultural_income.click()
}

 
async user_clicks_add_button_coborrower_other_income_details(){
  await this.playwrightFactory.click(this.Coborrower_Other_Income_Details);
}
 
async user_clicks_on_add_a_line_coborrower_other_income_details() {
    await this.playwrightFactory.click(this.Add_a_line_in_other_income);
}
 
async user_clicks_on_month_drop_down_coborrower_other_income_details() {
    await this.playwrightFactory.click(this.Month_Drop_Down);
}
 
async user_selecting_month_from_drop_down_value_coborrower_other_income_details(strmonth:string) {
await this.Month_Drop_Down_Value.selectOption({label:strmonth});
}
 
 
 async user_enter_value_in_amount_input_field_coborrower_other_income_details(Amount: string){
    await this.playwrightFactory.fill(this.Enter_Amount_in_otherincome, Amount)
  }
 
  async user_clicks_on_save_button_coborrower_other_income_details() {
    await this.playwrightFactory.click(this.Save_Btnin_other_income);
}
async user_verify_coborrower_other_income(){
  await this.btn_verify_other_income.click()
}
//Farmer profle//
  // async user_fill_coborrower_name(coborrower_name: string) {
  //   await this.playwrightFactory.fill(this.coborrower_name_coborrower_document_details, coborrower_name);
  // }

  // async user_select_area_of_land(area_of_land: string) {
  //   await this.playwrightFactory.selectByVisibleText(this.area_of_land_coborrower_document_details, area_of_land);
  // }

  // async user_select_type_of_agriculture_land(type_of_agriculture_land: string) {
  //   await this.playwrightFactory.selectByVisibleText(this.type_of_agriculture_land_coborrower_document_details, type_of_agriculture_land);
  // }

  // async user_select_seven_twelve_extract_ownership(seven_twelve_extract_ownership: string) {
  //   await this.playwrightFactory.selectByVisibleText(this.seven_twelve_extract_ownership_coborrower_document_details, seven_twelve_extract_ownership);
  // }

  // async user_fill_father_name(father_name: string) {
  //   await this.playwrightFactory.fill(this.father_name_coborrower_document_details, father_name);
  // }

  // async user_click_on_save_btn() {
  //   await this.playwrightFactory.click(this.save_btn_coborrower_document_details);
  //   await expect(this.modal_header_coborrower_document_details).toBeHidden();
  // }

  // async user_click_on_verify_checkbox_validation() {
  //   await this.playwrightFactory.clickForce(this.verify_checkbox_coborrower_document_details);
  //   await expect(this.verify_checkbox_coborrower_document_details).toBeChecked();
  // }
  //Membership details//

async user_clicks_Add_data_in_CoBorrower_Membership_Details(){
await this.btn_Add_data_in_CoBorrower_Membership_Details.click()
}
async user_enters_Co_borrower_Membership_Number_in_CoBorrower_Membership_Details(strno:string){
await this.Co_borrower_Membership_Number_in_CoBorrower_Membership_Details.fill(strno)
}

async user_enters_Co_borrower_Number_of_Shares_in_CoBorrower_Membership_Details(strsharesno:string){
await this.txt_Co_borrower_Number_of_Shares_in_CoBorrower_Membership_Details.fill(strsharesno)  

}
async user_enters_Co_borrower_Shares_From_in_CoBorrower_Membership_Details(strsharesdate:string){
await this.txt_Co_borrower_Shares_From_in_CoBorrower_Membership_Details.fill(strsharesdate)  

}
async user_enters_Co_borrower_Existing_Shares_Amount_in_CoBorrower_Membership_Details(strexistingshares:string){
  await this.txt_Co_borrower_Existing_Shares_Amount_in_CoBorrower_Membership_Details.fill(strexistingshares)

}
async user_enters_Co_borrower_Total_Shares_Required_in_CoBorrower_Membership_Details(strtotalshares:string){
  await this.txt_Co_borrower_Total_Shares_Required_in_CoBorrower_Membership_Details.fill(strtotalshares)

}	
async user_enters_Co_borrower_Additional_Shares_Required_in_CoBorrower_Membership_Details(straddshares:string){
await this.txt_Co_borrower_Additional_Shares_Required_in_CoBorrower_Membership_Details.fill(straddshares)  

}
async user_clicks_Save_in_CoBorrower_Membership_Details(){
  await this.btn_Save_in_CoBorrower_Membership_Details.click()

}
async user_clicks_verify_in_Co_Borrower_Membership_Details(){
await this.checkbox_verify_in_Co_Borrower_Membership_Details.click()
}	


async user_enters_Name_CoBorrower_CreditBureau(strname:string){
await this.txt_Name_CoBorrower_CreditBureau.fill(strname)
}     
async user_enters_DOB_CoBorrower_CreditBureau(strdob:string){
await this.txt_DOB_CoBorrower_CreditBureau.fill(strdob)  

}     
async user_enters_CTC_CoBorrower_CreditBureau(strctc:string){
await this.txt_CreditScore_CoBorrower_CreditBureau.fill(strctc)  

}
async user_enters_CreditScore_CoBorrower_CreditBureau(strcreditscore:string){
await this.txt_CreditScore_CoBorrower_CreditBureau.fill(strcreditscore)  

}     
async user_enters_Branch_Remarks_on_CIBIL_CoBorrower_CreditBureau(strremarks:string){
  await this.txt_Branch_Remarks_on_CIBIL_CoBorrower_CreditBureau.fill(strremarks)

}
async user_enters_Personal_Score_CoBorrower_CreditBureau(strpersonalscore:string){
  await this.txt_Personal_Score_CoBorrower_CreditBureau.fill(strpersonalscore)

}
 async user_enters_Wilful_Defaulter_CoBorrower_CreditBureau(select:string){
  await this.drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau.click()
await this.drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau.selectOption({label:select})
}
async user_enters_Settled_Account_CoBorrower_CreditBureau(){
await this.drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau.selectOption({label:'Yes'})
}	
async user_enters_Written_Account_CoBorrower_CreditBureau(){
await this.drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau.selectOption({label:'Yes'})
}
async user_enters_Overdue_Amount_Pending_CoBorrower_CreditBureau(stroverdue:string){
await this.txt_Overdue_Amount_Pending_CoBorrower_CreditBureau.fill(stroverdue)
}
async user_enters_Account_Sold_CoBorrower_CreditBureau(){
await this.drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau.selectOption({label:'No'})
}	
async user_enters_Suit_Field_CoBorrower_CreditBureau(){
await this.drpdwn_Wilful_Defaulter_CoBorrower_CreditBureau.selectOption({label:'Yes'})
}
async user_enters_Repayment_Track_CoBorrower_CreditBureau(strrepayment:string){
await this.txt_Repayment_Track_CoBorrower_CreditBureau.fill(strrepayment)
}
async user_clicks_add_aline__CoBorrower_CreditBureau(){
  await this.add_line_CoBorrower_CreditBureau.click()
}
// async user_clicks_verify_btn_CoBorrower_CreditBureau(){
//   await this.btn_verify_credit_bureau.click()
// }
async user_enters_Bank_acount_details_CoBorrower_CreditBureau(strno:string){
    await this.txt_Bank_acount_details_CoBorrower_CreditBureau.click()
await this.txt_Bank_acount_details_CoBorrower_CreditBureau.fill(strno)
}

async user_enters_loan_type_CoBorrower_CreditBureau(strloantype:string){
    await this.txt_loan_type_CoBorrower_CreditBureau.click()
  await this.txt_loan_type_CoBorrower_CreditBureau.fill(strloantype)

}

async user_enters_ownership_CoBorrower_CreditBureau(strowner:string){
    await this.txt_ownership_CoBorrower_CreditBureau.click()
await this.txt_ownership_CoBorrower_CreditBureau.fill(strowner)
}
async user_enters_loan_amount_CoBorrower_CreditBureau(strloanamt:string){
  //  await this.txt_loan_amount_CoBorrower_CreditBureau.click()
//await this.txt_loan_amount_CoBorrower_CreditBureau.fill(strloanamt)
await expect(this.txt_loan_amount_CoBorrower_CreditBureau).not.toBeEmpty()
}
async user_enters_outstanding_amount_CoBorrower_CreditBureau(stroutstandingamt: string){
  //  await this.txt_outstanding_amount_CoBorrower_CreditBureau.click()
//await this.txt_outstanding_amount_CoBorrower_CreditBureau.fill(stroutstandingamt)
await expect(this.txt_outstanding_amount_CoBorrower_CreditBureau).not.toBeEmpty()
}
async user_enters_EMI_CoBorrower_CreditBureau(strEMI:string){
    await this.txt_EMI_CoBorrower_CreditBureau.click()
await this.txt_EMI_CoBorrower_CreditBureau.fill(strEMI)
//await expect(this.txt_EMI_CoBorrower_CreditBureau).not.toBeEmpty()
}









}